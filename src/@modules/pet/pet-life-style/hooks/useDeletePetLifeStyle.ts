import { QueryConfig, queryClient } from "@shared/config"

import { PetLifeStylesService } from "@shared/services"
import { notification } from "antd"
import { useMutation } from "react-query"

type PetLifeStyleDeleteType = {
    config?: QueryConfig<typeof PetLifeStylesService.delete>
}

export const useDeletePetLifeStyle = ({ config }: PetLifeStyleDeleteType) => {

    return useMutation({
        onMutate: async (deletedPetLifeStyle: any) => {
            await queryClient.cancelQueries("PetLifeStyleList")
            const previousPetLifeStyle = queryClient.getQueryData<any[]>("PetLifeStyleList")
            queryClient.setQueryData(
                "PetLifeStyleList",
                previousPetLifeStyle?.filter((pls) => {
                    return pls.id !== deletedPetLifeStyle
                })
            )

            return { previousPetLifeStyle }
        },
        onError: (_, __, context: any) => {
            if (context?.previousPetLifeStyle) {
                queryClient.setQueryData("PetLifeStyleList", context.previousPetLifeStyle)
            }
        },
        onSuccess: () => {
            queryClient.invalidateQueries("PetLifeStyleList")
            notification.success({
                type: "success",
                message: "Life Style Deleted",
            })
        },
        ...config,
        mutationFn: PetLifeStylesService.delete,
    })
}