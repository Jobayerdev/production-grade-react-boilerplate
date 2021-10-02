import { MutationConfig } from "@shared/config";
import { ServicesService } from '@shared/services';
import { useMutation } from 'react-query';

type ServicePackageType = {
    config?: MutationConfig<typeof ServicesService.packageAssign >
}

export const useServicePackageAssign = ({config}:ServicePackageType) => {
	return useMutation({
		...config,
		mutationFn: ServicesService.packageAssign,
	})
}