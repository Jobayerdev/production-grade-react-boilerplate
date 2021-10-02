import { BrandService } from "@shared/services"
import { MutationConfig } from "@shared/config"
import { useMutation } from "react-query"

type BrandCreateType = {
	config?: MutationConfig<typeof BrandService.create>
}

export const useCreateBrand = ({ config }: BrandCreateType = {}) => {

	return useMutation({
		...config,
		mutationFn: BrandService.create,
	})
}