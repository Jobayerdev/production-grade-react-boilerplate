import { MutationConfig } from "@shared/config"
import { ServicePackageService } from "@shared/services"
import { useMutation } from "react-query"

type ServicePackageCreateType = {
	config?: MutationConfig<typeof ServicePackageService.create>
}

export const useCreateServicePackage = ({ config }: ServicePackageCreateType = {}) => {
	return useMutation({
		...config,
		mutationFn: ServicePackageService.create,
	})
}
