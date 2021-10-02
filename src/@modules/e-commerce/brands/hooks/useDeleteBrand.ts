import { MutationConfig, queryClient } from "@shared/config"

import { BrandService } from "@shared/services"
import { notification } from "antd"
import { useMutation } from "react-query"

type BrandDeleteType = {
	config?: MutationConfig<typeof BrandService.delete>
}

export const useDeleteBrand = ({ config }: BrandDeleteType = {}) => {
	return useMutation({
		onMutate: async (deletedBrand: any) => {
			await queryClient.cancelQueries("BrandList")
			const previousBrand = queryClient.getQueryData<any[]>("BrandList")
			queryClient.setQueryData(
				"BrandList",
				previousBrand?.filter((b) => {
					return b.id !== deletedBrand
				})
			)

			return { previousBrand }
		},
		onError: (_, __, context: any) => {
			if (context?.previousBrand) {
				queryClient.setQueryData("BrandList", context.previousBrand)
			}
		},
		onSuccess: () => {
			queryClient.invalidateQueries("BrandList")
			notification.success({
				type: "success",
				message: "Brand Deleted",
			})
		},
		...config,
		mutationFn: BrandService.delete,
	})
}
