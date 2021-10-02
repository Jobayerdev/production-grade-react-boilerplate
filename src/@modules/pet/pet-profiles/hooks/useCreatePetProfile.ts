import { MutationConfig } from "@shared/config"
import { PetProfilesService } from "@shared/services"
import { useMutation } from "react-query"

type PetProfileCreateType = {
	config?: MutationConfig<typeof PetProfilesService.create>
}

export const useCreatePetProfile = ({ config }: PetProfileCreateType = {}) => {

	return useMutation({
		...config,
		mutationFn: PetProfilesService.create,
	})
}