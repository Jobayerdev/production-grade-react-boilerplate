import { MutationConfig, queryClient } from "@shared/config"

import { PetProfilesService } from "@shared/services"
import { notification } from "antd"
import { useMutation } from "react-query"

type PetProfileDeletePetType = {
	config?: MutationConfig<typeof PetProfilesService.delete>
}

export const useDeletePetProfile = ({ config }: PetProfileDeletePetType = {}) => {
	return useMutation({
		onMutate: async (deletedProfile: any) => {
			await queryClient.cancelQueries("PetProfiles")
			const previousProfile = queryClient.getQueryData<any[]>("PetProfiles")
			queryClient.setQueryData(
				"PetProfiles",
				previousProfile?.filter((p) => {
					return p.id !== deletedProfile
				})
			)

			return { previousProfile }
		},
		onError: (_, __, context: any) => {
			if (context?.previousProfile) {
				queryClient.setQueryData("PetProfiles", context.previousProfile)
			}
		},
		onSuccess: () => {
			queryClient.invalidateQueries("PetProfiles")
			notification.success({
				type: "success",
				message: "Profile Deleted",
			})
		},
		...config,
		mutationFn: PetProfilesService.delete,
	})
}
