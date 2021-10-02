import { MutationConfig, queryClient } from "@shared/config"
import { ImageService } from "@shared/services"
import { notification } from "antd"
import { useMutation } from "react-query"

type UseDeleteImageType = {
	config?: MutationConfig<typeof ImageService.delete>
}

export const useDeleteImage = ({ config }: UseDeleteImageType = {}) => {
	return useMutation({
		onMutate: async (deletedImage: any) => {
			await queryClient.cancelQueries("imageQuery")
			const previousImage = queryClient.getQueryData<any[]>("imageQuery")
			queryClient.setQueryData(
				"imageQuery",
				previousImage?.filter((img) => {
					return img.id !== deletedImage
				})
			)

			return { previousImage: previousImage }
		},
		onError: (_, __, context: any) => {
			if (context?.previousImage) {
				queryClient.setQueryData("imageQuery", context.previousImage)
			}
		},
		onSuccess: () => {
			queryClient.invalidateQueries("imageQuery")
			notification.success({
				type: "success",
				message: "Image Deleted",
			})
		},
		...config,
		mutationFn: ImageService.delete,
	})
}
