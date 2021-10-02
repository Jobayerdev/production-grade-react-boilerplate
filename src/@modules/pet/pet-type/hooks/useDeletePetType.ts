import { MutationConfig, queryClient } from "@shared/config"

import { PetTypeService } from '@shared/services';
import { notification } from "antd"
import { useMutation } from "react-query"

type UseDeletePetType = {
	config?: MutationConfig<typeof PetTypeService.delete>
}

export const useDeletePetType = ({ config }: UseDeletePetType = {}) => {
	return useMutation({
		onMutate: async (deletedPetType: any) => {
			await queryClient.cancelQueries("PetTypeList")
			const previousPetType = queryClient.getQueryData<any[]>("PetTypeList")
			queryClient.setQueryData(
				"PetTypeList",
				previousPetType?.filter((pts) => {
					return pts.id !== deletedPetType
				})
			)

			return { previousPetType: previousPetType }
		},
		onError: (_, __, context: any) => {
			if (context?.previousPetType) {
				queryClient.setQueryData("PetTypeList", context.previousPetType)
			}
		},
		onSuccess: () => {
			queryClient.invalidateQueries("PetTypeList")
			notification.success({
				type: "success",
				message: "Pet Breed List Deleted",
			})
		},
		...config,
		mutationFn: PetTypeService.delete,
	})
}
