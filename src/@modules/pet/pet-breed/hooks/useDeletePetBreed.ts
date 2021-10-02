import { MutationConfig, queryClient } from "@shared/config"

import { PetBreedsService } from "@shared/services/petBreeds.service"
import { notification } from "antd"
import { useMutation } from "react-query"

type UseDeleteUserOptions = {
	config?: MutationConfig<typeof PetBreedsService.delete>
}

export const useDeletePetBreed = ({ config }: UseDeleteUserOptions = {}) => {
	return useMutation({
		onMutate: async (deletedPetBreed: any) => {
			await queryClient.cancelQueries("PetBreedsList")
			const previousPetBreed = queryClient.getQueryData<any[]>("PetBreedsList")
			queryClient.setQueryData(
				"PetBreedsList",
				previousPetBreed?.filter((pbs) => {
					return pbs.id !== deletedPetBreed
				})
			)

			return { previousPetBreed: previousPetBreed }
		},
		onError: (_, __, context: any) => {
			if (context?.previousPetBreed) {
				queryClient.setQueryData("PetBreedsList", context.previousPetBreed)
			}
		},
		onSuccess: () => {
			queryClient.invalidateQueries("PetBreedsList")
			notification.success({
				type: "success",
				message: "Pet Breed List Deleted",
			})
		},
		...config,
		mutationFn: PetBreedsService.delete,
	})
}
