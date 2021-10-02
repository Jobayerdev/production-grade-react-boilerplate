import { MutationConfig, queryClient } from "@shared/config"
import { ServicesService } from "@shared/services"
import { notification } from "antd"
import { useMutation } from "react-query"

type DeleteServiceType = {
	config?: MutationConfig<typeof ServicesService.delete>
}

export const useDeleteService = ({ config }: DeleteServiceType = {}) => {
	return useMutation({
		onMutate: async (deletedService: any) => {
			await queryClient.cancelQueries("servicesQuery")
			const previousService = queryClient.getQueryData<any[]>("servicesQuery")
			queryClient.setQueryData(
				"servicesQuery",
				previousService?.filter((urs) => {
					return urs.id !== deletedService
				})
			)

			return { previousService }
		},
		onError: (_, __, context: any) => {
			if (context?.previousService) {
				queryClient.setQueryData("servicesQuery", context.previousService)
			}
		},
		onSuccess: () => {
			queryClient.invalidateQueries("servicesQuery")
			notification.success({
				type: "success",
				message: "Service Deleted",
			})
		},
		...config,
		mutationFn: ServicesService.delete,
	})
}
