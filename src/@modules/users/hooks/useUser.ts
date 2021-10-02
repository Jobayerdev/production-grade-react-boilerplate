import { useQuery } from 'react-query';
import { QueryConfig } from "@shared/config";
import { UsersService } from "@shared/services";

type useUserType = {
    id: string,
    config?: QueryConfig<typeof UsersService.filterSingle >
}

export const useUser = ({id, config}:useUserType) => {
    return useQuery({
        ...config,
        queryFn: () => UsersService.filterSingle(id),
    })
}