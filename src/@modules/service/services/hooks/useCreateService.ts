import { MutationConfig } from "@shared/config"
import { ServicesService } from "@shared/services"
import { useMutation } from "react-query"

type ServicesType = {
	config?: MutationConfig<typeof ServicesService.create>
}

export const useCreateService = ({ config }: ServicesType = {}) => {
	return useMutation({
		...config,
		mutationFn: ServicesService.create,
	})
}
