import { useQuery } from 'react-query';
import { QueryConfig } from "@shared/config";
import { ServicesService } from '@shared/services';

type ServicePackageAssignType = {
    id: string,
    config?: QueryConfig<typeof ServicesService.packageList >
}

export const useAllPackageAssign = ({id, config}:ServicePackageAssignType) => {
    return useQuery({
        ...config,
        queryKey: ["packageList"],
        queryFn: () => ServicesService.packageList(id),
    })
}