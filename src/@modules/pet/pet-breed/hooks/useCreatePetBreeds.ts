import { MutationConfig } from "@shared/config"
import { PetBreedsService } from "@shared/services/petBreeds.service"
import { useMutation } from "react-query"

type UseCreatePetBreedsPetType = {
	config?: MutationConfig<typeof PetBreedsService.create>
}

export const useCreatePetBreeds = ({ config }: UseCreatePetBreedsPetType = {}) => {
	return useMutation({
		...config,
		mutationFn: PetBreedsService.create,
	})
}
