import { useQuery } from 'react-query';
import { QueryConfig } from "@shared/config";
import { PetBreedsService } from '@shared/services/petBreeds.service';

type usePetBreedType = {
    id: string,
    config?: QueryConfig<typeof PetBreedsService.filterSingle >
}

export const usePetBreed = ({id, config}:usePetBreedType) => {
    return useQuery({
        ...config,
        queryFn: () => PetBreedsService.filterSingle(id),
    })
}