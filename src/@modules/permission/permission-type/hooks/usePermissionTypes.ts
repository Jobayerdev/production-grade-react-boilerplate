import { IBaseFilter } from "@shared/interfaces"
import { PermissionTypesService } from "@shared/services"
import { QueryConfig } from "@shared/config"
import { useQuery } from "react-query"

type PermissionTypeListType = {
	options: IBaseFilter
	config?: QueryConfig<typeof PermissionTypesService.filter>
}

export const usePermissionTypes = ({ options, config }: PermissionTypeListType) => {
	
	return useQuery({
		...config,
		queryKey: ["userPermissionTypeList", options],
		queryFn: () => PermissionTypesService.filter(options),
	})
}