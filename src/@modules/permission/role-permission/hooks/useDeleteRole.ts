import { QueryConfig, queryClient } from "@shared/config"

import { RolesService } from "@shared/services"
import { notification } from "antd"
import { useMutation } from "react-query"

type RoleDeleteType = {
	config?: QueryConfig<typeof RolesService.delete>
}

export const useDeleteRole = ({config}: RoleDeleteType) => {
	
	return useMutation({
		onMutate: async (deletedRole: any) => {
            await queryClient.cancelQueries("userRoleList")
            const previousRole = queryClient.getQueryData<any[]>("userRoleList")
            queryClient.setQueryData(
                "userRoleList",
                previousRole?.filter((role) => {
                    return role.id !== deletedRole
                })
            )

            return { previousRole }
        },
        onError: (_, __, context: any) => {
            if (context?.previousRole) {
                queryClient.setQueryData("userRoleList", context.previousRole)
            }
        },
        onSuccess: () => {
            queryClient.invalidateQueries("userRoleList")
            notification.success({
                type: "success",
                message: "Role Deleted",
            })
        },
		...config,
		mutationFn: RolesService.delete,
	})
}