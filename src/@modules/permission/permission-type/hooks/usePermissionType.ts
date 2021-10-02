import { PermissionTypesService } from "@shared/services";
import { QueryConfig } from "@shared/config";
import { useQuery } from 'react-query';

type useSinglePermissionType = {
    id: string,
    config?: QueryConfig<typeof PermissionTypesService.filterSingle >
}

export const usePermissionType = ({id, config}:useSinglePermissionType) => {
    return useQuery({
        ...config,
        queryFn: () => PermissionTypesService.filterSingle(id),
    })
}