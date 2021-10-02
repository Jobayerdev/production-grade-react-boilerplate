import { QueryConfig, queryClient } from "@shared/config"

import { PermissionsService } from "@shared/services"
import { notification } from "antd"
import { useMutation } from "react-query"

type PermissionDeleteType = {
	config?: QueryConfig<typeof PermissionsService.delete>
}

export const useDeletePermission = ({config}: PermissionDeleteType) => {
	
	return useMutation({
		onMutate: async (deletedPermission: any) => {
            await queryClient.cancelQueries("permissionsList")
            const previousPermissions = queryClient.getQueryData<any[]>("permissionsList")
            queryClient.setQueryData(
                "permissionsList",
                previousPermissions?.filter((permission) => {
                    return permission.id !== deletedPermission
                })
            )

            return { previousPermissions }
        },
        onError: (_, __, context: any) => {
            if (context?.previousPermissions) {
                queryClient.setQueryData("permissionsList", context.previousPermissions)
            }
        },
        onSuccess: () => {
            queryClient.invalidateQueries("permissionsList")
            notification.success({
                type: "success",
                message: "Permission Deleted",
            })
        },
		...config,
		mutationFn: PermissionsService.delete,
	})
}