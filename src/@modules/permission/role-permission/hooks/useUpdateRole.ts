import { QueryConfig } from "@shared/config"
import { RolesService } from "@shared/services"
import { useMutation } from "react-query"

type RoleUpdateType = {
	config?: QueryConfig<typeof RolesService.update>
}

export const useUpdateRole = ({config}: RoleUpdateType = {}) => {
	
	return useMutation({
		...config,
		mutationFn: RolesService.update,
	})
}