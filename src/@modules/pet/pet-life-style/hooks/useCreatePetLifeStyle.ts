import { MutationConfig } from "@shared/config"
import { PetLifeStylesService } from "@shared/services"
import { useMutation } from "react-query"

type PetLifeStyleCreateType = {
	config?: MutationConfig<typeof PetLifeStylesService.create>
}

export const useCreatePetLifeStyle = ({ config }: PetLifeStyleCreateType = {}) => {

	return useMutation({
		...config,
		mutationFn: PetLifeStylesService.create,
	})
}