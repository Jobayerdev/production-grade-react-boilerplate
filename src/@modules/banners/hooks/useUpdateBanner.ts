import { BannerService } from "@shared/services"
import { QueryConfig } from "@shared/config"
import { useMutation } from "react-query"

type BannerUpdateType = {
	config?: QueryConfig<typeof BannerService.update>
}

export const useUpdateBanner = ({config}: BannerUpdateType = {}) => {
	
	return useMutation({
		...config,
		mutationFn: BannerService.update,
	})
}