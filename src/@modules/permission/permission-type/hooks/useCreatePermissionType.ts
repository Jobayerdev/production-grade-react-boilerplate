import { MutationConfig } from "@shared/config"
import { PermissionTypesService } from "@shared/services"
import { useMutation } from "react-query"

type PermissionTypeCreateType = {
	config?: MutationConfig<typeof PermissionTypesService.create>
}

export const useCreatePermissionType = ({
	config,
}: PermissionTypeCreateType = {}) => {
	return useMutation({
		...config,
		mutationFn: PermissionTypesService.create,
	})
}
