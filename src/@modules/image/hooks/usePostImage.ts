import { MutationConfig } from "@shared/config"
import { ImageService } from "@shared/services"
import { useMutation } from "react-query"

type UsePostImageType = {
	config?: MutationConfig<typeof ImageService.uploadImage>
}

export const usePostImage = ({ config }: UsePostImageType) => {
	return useMutation({
		...config,
		mutationFn: ImageService.uploadImage,
	})
}