import { PermissionsService } from "@shared/services"
import { QueryConfig } from "@shared/config"
import { useMutation } from "react-query"

type PermissionUpdateType = {
	config?: QueryConfig<typeof PermissionsService.update>
}

export const useUpdatePermission = ({config}: PermissionUpdateType = {}) => {
	
	return useMutation({
		...config,
		mutationFn: PermissionsService.update,
	})
}