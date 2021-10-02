import { IBaseFilter } from "@shared/interfaces";
import { PetLifeStylesService } from "@shared/services";
import { QueryConfig } from "@shared/config";
import { useQuery } from 'react-query';

type PetLifeStyleListType = {
	options: IBaseFilter
	config?: QueryConfig<typeof PetLifeStylesService.filter>
}

export const useAllPetLifeStyle = ({ options, config }: PetLifeStyleListType) => {
	
	return useQuery({
		...config,
		queryKey: ["PetLifeStyleList", options],
		queryFn: () => PetLifeStylesService.filter(options),
	})
}