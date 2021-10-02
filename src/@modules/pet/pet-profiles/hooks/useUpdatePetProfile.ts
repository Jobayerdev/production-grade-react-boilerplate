import { PetProfilesService } from "@shared/services"
import { QueryConfig } from "@shared/config"
import { useMutation } from "react-query"

type PetProfileUpdateType = {
	config?: QueryConfig<typeof PetProfilesService.update>
}

export const useUpdatePetProfile = ({config}: PetProfileUpdateType = {}) => {
	
	return useMutation({
		...config,
		mutationFn: PetProfilesService.update,
	})
}