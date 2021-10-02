import { MutationConfig } from "@shared/config"
import { PetTypeService } from "@shared/services/petType.service"
import { useMutation } from "react-query"

type UseCreatePetType = {
	config?: MutationConfig<typeof PetTypeService.create>
}

export const useCreatePetType = ({ config }: UseCreatePetType = {}) => {
	return useMutation({
		...config,
		mutationFn: PetTypeService.create,
	})
}
