import { MutationConfig, queryClient } from "@shared/config"

import { ServicePackageService } from "@shared/services"
import { notification } from "antd"
import { useMutation } from "react-query"

type ServicePackageDeleteType = {
	config?: MutationConfig<typeof ServicePackageService.delete>
}

export const useDeleteServicePackage = ({ config }: ServicePackageDeleteType = {}) => {
	return useMutation({
		onSuccess: () => {
			queryClient.invalidateQueries("ServicePackageList")
			notification.success({
				type: "success",
				message: "Service package Deleted",
			})
		},
		...config,
		mutationFn: ServicePackageService.delete,
	})
}
