import { DepartmentService } from "@shared/services"
import { QueryConfig } from "@shared/config"
import { useMutation } from "react-query"

type DepartmentUpdateType = {
	config?: QueryConfig<typeof DepartmentService.update>
}

export const useUpdateDepartment = ({config}: DepartmentUpdateType = {}) => {
	
	return useMutation({
		...config,
		mutationFn: DepartmentService.update,
	})
}