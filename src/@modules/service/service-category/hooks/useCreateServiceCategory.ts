import { MutationConfig } from "@shared/config"
import { ServiceCategoryService } from "@shared/services"
import { useMutation } from "react-query"

type ServiceCreateCategoryType = {
	config?: MutationConfig<typeof ServiceCategoryService.create>
}

export const useCreateServiceCategory = ({ config }: ServiceCreateCategoryType = {}) => {
	return useMutation({
		...config,
		mutationFn: ServiceCategoryService.create,
	})
}
