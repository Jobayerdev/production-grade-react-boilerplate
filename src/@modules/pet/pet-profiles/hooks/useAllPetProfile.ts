import { IBaseFilter } from "@shared/interfaces";
import { PetProfilesService } from "@shared/services";
import { QueryConfig } from "@shared/config";
import { useQuery } from 'react-query';

type PetProfilesType = {
	options: IBaseFilter
	config?: QueryConfig<typeof PetProfilesService.filter>
}

export const useAllPetProfile = ({ options, config }: PetProfilesType) => {
	
	return useQuery({
		...config,
		queryKey: ["PetProfiles", options],
		queryFn: () => PetProfilesService.filter(options),
	})
}