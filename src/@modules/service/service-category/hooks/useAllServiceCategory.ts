import { IServiceCategoryFilter } from "@shared/interfaces"
import { QueryConfig } from "@shared/config"
import { ServiceCategoryService } from "@shared/services"
import { useQuery } from "react-query"

type UseServiceCategoryType = {
	options: IServiceCategoryFilter
	config?: QueryConfig<typeof ServiceCategoryService.filter>
}
export const useAllServiceCategory = ({ options, config }: UseServiceCategoryType) => {
	return useQuery({
		...config,
		queryKey: ["serviceCategoryQuery", options],
		queryFn: () => ServiceCategoryService.filter(options),
	})
}
