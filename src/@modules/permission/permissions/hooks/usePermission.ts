import { PermissionsService } from "@shared/services";
import { QueryConfig } from "@shared/config";
import { useQuery } from 'react-query';

type SinglePermissionType = {
    id: string,
    config?: QueryConfig<typeof PermissionsService.filterSingle >
}


export const usePermission = ({ id, config }: SinglePermissionType) => {
	
	return useQuery({
		...config,
		queryFn: () => PermissionsService.filterSingle(id),
	})
}