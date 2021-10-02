import { MutationConfig, queryClient } from "@shared/config"

import { ServiceCategoryService } from "@shared/services"
import { notification } from "antd"
import { useMutation } from "react-query"

type UseDeleteServiceCategoryType = {
	config?: MutationConfig<typeof ServiceCategoryService.delete>
}

export const useDeleteServiceCategory = ({ config }: UseDeleteServiceCategoryType = {}) => {
	return useMutation({
		onMutate: async (deletedServiceCategory: any) => {
			await queryClient.cancelQueries("serviceCategoryQuery")
			const previousServiceCategory = queryClient.getQueryData<any[]>("serviceCategoryQuery")
			queryClient.setQueryData(
				"serviceCategoryQuery",
				previousServiceCategory?.filter((srvc) => {
					return srvc.id !== deletedServiceCategory
				})
			)

			return { previousServiceCategory: previousServiceCategory }
		},
		onError: (_, __, context: any) => {
			if (context?.previousServiceCategory) {
				queryClient.setQueryData("serviceCategoryQuery", context.previousServiceCategory)
			}
		},
		onSuccess: () => {
			queryClient.invalidateQueries("serviceCategoryQuery")
			notification.success({
				type: "success",
				message: "Service Category Deleted",
			})
		},
		...config,
		mutationFn: ServiceCategoryService.delete,
	})
}
