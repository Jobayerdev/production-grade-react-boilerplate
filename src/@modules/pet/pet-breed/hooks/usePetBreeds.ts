import { IBaseFilter } from "@shared/interfaces"
import { PetBreedsService } from '@shared/services/petBreeds.service';
import { QueryConfig } from "@shared/config"
import { useQuery } from "react-query"

type UsePetBreedsListType = {
	options: IBaseFilter
	config?: QueryConfig<typeof PetBreedsService.filter>
}
export const usePetBreedsList = ({ options, config }: UsePetBreedsListType) => {
	return useQuery({
		...config,
		queryKey: ["PetBreedsList", options],
		queryFn: () => PetBreedsService.filter(options),
	})
}
