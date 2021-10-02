import { PetLifeStylesService } from "@shared/services"
import { QueryConfig } from "@shared/config"
import { useMutation } from "react-query"

type PetLifeStyleUpdateType = {
	config?: QueryConfig<typeof PetLifeStylesService.update>
}

export const useUpdatePetLifeStyle = ({config}: PetLifeStyleUpdateType = {}) => {
	
	return useMutation({
		...config,
		mutationFn: PetLifeStylesService.update,
	})
}