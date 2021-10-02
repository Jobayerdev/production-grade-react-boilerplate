import { QueryConfig } from "@shared/config";
import { RolesService } from "@shared/services";
import { useQuery } from 'react-query';

type useUserType = {
    id: string,
    config?: QueryConfig<typeof RolesService.filterSingle >
}

export const useRole = ({id, config}:useUserType) => {
    return useQuery({
        ...config,
        queryFn: () => RolesService.filterSingle(id),
    })
}