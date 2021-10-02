import { MutationConfig, queryClient } from "@shared/config"

import { DepartmentService } from "@shared/services"
import { notification } from "antd"
import { useMutation } from "react-query"

type DepartmentDeletePetType = {
	config?: MutationConfig<typeof DepartmentService.delete>
}

export const useDeleteDepartment = ({ config }: DepartmentDeletePetType = {}) => {
	return useMutation({
		onMutate: async (deletedDepartment: any) => {
			await queryClient.cancelQueries("DepartmentList")
			const previousDepartment = queryClient.getQueryData<any[]>("DepartmentList")
			queryClient.setQueryData(
				"DepartmentList",
				previousDepartment?.filter((dp) => {
					return dp.id !== deletedDepartment
				})
			)

			return { previousDepartment }
		},
		onError: (_, __, context: any) => {
			if (context?.previousDepartment) {
				queryClient.setQueryData("DepartmentList", context.previousDepartment)
			}
		},
		onSuccess: () => {
			queryClient.invalidateQueries("DepartmentList")
			notification.success({
				type: "success",
				message: "Department Deleted",
			})
		},
		...config,
		mutationFn: DepartmentService.delete,
	})
}
