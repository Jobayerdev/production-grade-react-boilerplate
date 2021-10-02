import { BrandService } from "@shared/services"
import { QueryConfig } from "@shared/config"
import { useMutation } from "react-query"

type BrandtUpdateType = {
	config?: QueryConfig<typeof BrandService.update>
}

export const useUpdateBrand = ({config}: BrandtUpdateType = {}) => {
	
	return useMutation({
		...config,
		mutationFn: BrandService.update,
	})
}