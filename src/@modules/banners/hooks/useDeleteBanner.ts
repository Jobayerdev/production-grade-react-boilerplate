import { QueryConfig, queryClient } from "@shared/config"

import { BannerService } from "@shared/services"
import { notification } from "antd"
import { useMutation } from "react-query"

type BannerDeleteType = {
    config?: QueryConfig<typeof BannerService.delete>
}

export const useDeleteBanner = ({ config }: BannerDeleteType) => {

    return useMutation({
        onMutate: async (deletedBanner: any) => {
            await queryClient.cancelQueries("BannerList")
            const previousBanner = queryClient.getQueryData<any[]>("BannerList")
            queryClient.setQueryData(
                "BannerList",
                previousBanner?.filter((banner) => {
                    return banner.id !== deletedBanner
                })
            )

            return { previousBanner }
        },
        onError: (_, __, context: any) => {
            if (context?.previousBanner) {
                queryClient.setQueryData("BannerList", context.previousBanner)
            }
        },
        onSuccess: () => {
            queryClient.invalidateQueries("BannerList")
            notification.success({
                type: "success",
                message: "Banner Deleted",
            })
        },
        ...config,
        mutationFn: BannerService.delete,
    })
}