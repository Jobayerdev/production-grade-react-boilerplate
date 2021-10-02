import { DepartmentService } from "@shared/services"
import { MutationConfig } from "@shared/config"
import { useMutation } from "react-query"

type DepartmentCreateType = {
	config?: MutationConfig<typeof DepartmentService.create>
}

export const useCreateDepartment = ({ config }: DepartmentCreateType = {}) => {

	return useMutation({
		...config,
		mutationFn: DepartmentService.create,
	})
}