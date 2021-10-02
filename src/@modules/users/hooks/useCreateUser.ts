import { MutationConfig } from "@shared/config"
import { UsersService } from "@shared/services/users.service"
import { useMutation } from "react-query"

type UseCreateDiscussionOptions = {
	config?: MutationConfig<typeof UsersService.create>
}

export const useCreateUser = ({ config }: UseCreateDiscussionOptions = {}) => {
	return useMutation({
		...config,
		mutationFn: UsersService.create,
	})
}
