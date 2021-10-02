import { PetLifeStylesService } from "@shared/services";
import { QueryConfig } from "@shared/config";
import { useQuery } from 'react-query';

type SinglePetLifeStyleType = {
    id: string,
    config?: QueryConfig<typeof PetLifeStylesService.filterSingle >
}


export const useSinglePetLifeStyle = ({ id, config }: SinglePetLifeStyleType) => {
	
	return useQuery({
		...config,
		queryFn: () => PetLifeStylesService.filterSingle(id),
	})
}