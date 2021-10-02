import { IServiceFilter } from "@shared/interfaces";
import { QueryConfig } from "@shared/config";
import { ServicesService } from '@shared/services';
import { useQuery } from 'react-query';

type ServiceType = {
    id: string,
    options?: IServiceFilter
    config?: QueryConfig<typeof ServicesService.filterSingle >
}

export const useSingleService = ({id, options={}, config}:ServiceType) => {
    return useQuery({
        ...config,
		queryKey: ["SingleService", options],
        queryFn: () => ServicesService.filterSingle(id, options),
    })
}