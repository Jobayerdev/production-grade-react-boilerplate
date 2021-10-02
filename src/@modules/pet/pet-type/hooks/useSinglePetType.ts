import { useQuery } from 'react-query';
import { QueryConfig } from "@shared/config";
import { PetTypeService } from '@shared/services/petType.service';

type UsePetType = {
    id: string,
    config?: QueryConfig<typeof PetTypeService.filterSingle >
}

export const useSinglePetType = ({id, config}:UsePetType) => {
    return useQuery({
        ...config,
        queryFn: () => PetTypeService.filterSingle(id),
    })
}