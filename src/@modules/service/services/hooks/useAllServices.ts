import { QueryConfig } from "@shared/config"
import { useQuery } from "react-query"
import { ServicesService } from "@shared/services"
import { IServiceFilter } from "@shared/interfaces"

type ServicesType = {
	options: IServiceFilter
	config?: QueryConfig<typeof ServicesService.filter>
}
export const useAllServices = ({ options, config }: ServicesType) => {
	return useQuery({
		...config,
		queryKey: ["servicesQuery", options],
		queryFn: () => ServicesService.filter(options),
	})
}
