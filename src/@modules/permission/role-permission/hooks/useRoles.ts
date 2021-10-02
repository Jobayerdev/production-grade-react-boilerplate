import { IBaseFilter } from "@shared/interfaces"
import { QueryConfig } from "@shared/config"
import { RolesService } from "@shared/services"
import { useQuery } from "react-query"

type RoleListType = {
	options: IBaseFilter
	config?: QueryConfig<typeof RolesService.filter>
}

export const useRoles = ({ options, config }: RoleListType) => {
	
	return useQuery({
		...config,
		queryKey: ["userRoleList", options],
		queryFn: () => RolesService.filter(options),
	})
}