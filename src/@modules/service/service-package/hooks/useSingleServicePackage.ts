import { QueryConfig } from "@shared/config";
import { ServicePackageService } from '@shared/services';
import { useQuery } from 'react-query';

type SingleServicePackageType = {
    id: string,
    config?: QueryConfig<typeof ServicePackageService.filterSingle >
}

export const useSingleServicePackage = ({id, config}:SingleServicePackageType) => {
    return useQuery({
        ...config,
        queryFn: () => ServicePackageService.filterSingle(id),
    })
}