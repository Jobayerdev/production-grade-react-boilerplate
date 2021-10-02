import { BannerService } from "@shared/services"
import { MutationConfig } from "@shared/config"
import { useMutation } from "react-query"

type BannerCreateType = {
	config?: MutationConfig<typeof BannerService.create>
}

export const useCreateBanner = ({ config }: BannerCreateType = {}) => {

	return useMutation({
		...config,
		mutationFn: BannerService.create,
	})
}