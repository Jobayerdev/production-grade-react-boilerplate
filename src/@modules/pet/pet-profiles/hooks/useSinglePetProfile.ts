import { IBaseFilter } from "@shared/interfaces";
import { PetProfilesService } from "@shared/services";
import { QueryConfig } from "@shared/config";
import { useQuery } from 'react-query';

type SinglePetProfileType = {
    id: string,
	options?: IBaseFilter 
    config?: QueryConfig<typeof PetProfilesService.filterSingle >
}


export const useSinglePetProfile = ({ id, options={}, config }: SinglePetProfileType) => {
	
	return useQuery({
		...config,
		queryKey: ["SinglePetProfile", options],
		queryFn: () => PetProfilesService.filterSingle(id, options),
	})
}