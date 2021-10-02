import { MutationConfig, queryClient } from "@shared/config"
import { UsersService } from "@shared/services"
import { notification } from "antd"
import { useMutation } from "react-query"

type UseDeleteUserOptions = {
	config?: MutationConfig<typeof UsersService.delete>
}

export const useDeleteUser = ({ config }: UseDeleteUserOptions = {}) => {
	return useMutation({
		onMutate: async (deletedUser: any) => {
			await queryClient.cancelQueries("userList")
			const previousUsers = queryClient.getQueryData<any[]>("userList")
			queryClient.setQueryData(
				"userList",
				previousUsers?.filter((urs) => {
					return urs.id !== deletedUser
				})
			)

			return { previousUsers }
		},
		onError: (_, __, context: any) => {
			if (context?.previousUsers) {
				queryClient.setQueryData("userList", context.previousUsers)
			}
		},
		onSuccess: () => {
			queryClient.invalidateQueries("userList")
			notification.success({
				type: "success",
				message: "User Deleted",
			})
		},
		...config,
		mutationFn: UsersService.delete,
	})
}
