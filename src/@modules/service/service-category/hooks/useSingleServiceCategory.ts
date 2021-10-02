import { QueryConfig } from "@shared/config";
import { ServiceCategoryService } from '@shared/services';
import { useQuery } from 'react-query';

type UseServiceCategoryType = {
    id: string,
    config?: QueryConfig<typeof ServiceCategoryService.filterSingle >
}

export const useSingleServiceCategory = ({id, config}:UseServiceCategoryType) => {
    return useQuery({
        ...config,
        queryFn: () => ServiceCategoryService.filterSingle(id),
    })
}