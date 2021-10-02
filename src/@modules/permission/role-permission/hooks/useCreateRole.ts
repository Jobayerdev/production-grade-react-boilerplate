import { MutationConfig } from "@shared/config"
import { RolesService } from "@shared/services"
import { useMutation } from "react-query"

type RoleCreateType = {
	config?: MutationConfig<typeof RolesService.create>
}

export const useCreateRole = ({ config }: RoleCreateType = {}) => {
	return useMutation({
		...config,
		mutationFn: RolesService.create,
	})
}
