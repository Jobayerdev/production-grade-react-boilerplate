import { MutationConfig } from "@shared/config";
import { ServicesService } from '@shared/services';
import { useMutation } from 'react-query';

type ServicePackageType = {
    config?: MutationConfig<typeof ServicesService.packageUnAssign >
}

export const useServicePackageUnAssign = ({config}:ServicePackageType) => {
	return useMutation({
		...config,
		mutationFn: ServicesService.packageUnAssign,
	})
}