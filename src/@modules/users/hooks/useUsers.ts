import { IBaseFilter } from "@shared/interfaces"
import { QueryConfig } from "@shared/config"
import { UsersService } from "@shared/services"
import { useQuery } from "react-query"

type UseUserListOptions = {
	options: IBaseFilter
	config?: QueryConfig<typeof UsersService.filter>
}
export const useUsers = ({ options, config }: UseUserListOptions) => {
	return useQuery({
		...config,
		queryKey: ["userList", options],
		queryFn: () => UsersService.filter(options),
	})
}
