import { MutationConfig } from "@shared/config"
import { PermissionsService } from "@shared/services"
import { useMutation } from "react-query"

type PermissionCreateType = {
	config?: MutationConfig<typeof PermissionsService.create>
}

export const useCreatePermission = ({
	config,
}: PermissionCreateType = {}) => {

	return useMutation({
		...config,
		mutationFn: PermissionsService.create,
	})
}