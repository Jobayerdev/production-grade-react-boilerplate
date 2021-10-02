import { IBaseFilter } from "@shared/interfaces"
import { PetTypeService } from "@shared/services/petType.service"
import { QueryConfig } from "@shared/config"
import { useQuery } from "react-query"

type UsePetTypeListType = {
	options: IBaseFilter
	config?: QueryConfig<typeof PetTypeService.filter>
}
export const useAllPetType = ({ options, config }: UsePetTypeListType) => {
	return useQuery({
		...config,
		queryKey: ["PetTypeList", options],
		queryFn: () => PetTypeService.filter(options),
	})
}
