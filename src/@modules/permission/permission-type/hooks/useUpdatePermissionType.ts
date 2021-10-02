import { PermissionTypesService } from "@shared/services"
import { QueryConfig } from "@shared/config"
import { useMutation } from "react-query"

type PermissionTypeUpdateType = {
	config?: QueryConfig<typeof PermissionTypesService.update>
}

export const useUpdatePermissionType = ({config}: PermissionTypeUpdateType = {}) => {
	
	return useMutation({
		...config,
		mutationFn: PermissionTypesService.update,
	})
}