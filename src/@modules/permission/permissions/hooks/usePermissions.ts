import { IBaseFilter } from "@shared/interfaces";
import { PermissionsService } from "@shared/services";
import { QueryConfig } from "@shared/config";
import { useQuery } from 'react-query';

type PermissionsListType = {
	options: IBaseFilter
	config?: QueryConfig<typeof PermissionsService.filter>
}

export const usePermissions = ({ options, config }: PermissionsListType) => {
	
	return useQuery({
		...config,
		queryKey: ["permissionsList", options],
		queryFn: () => PermissionsService.filter(options),
	})
}