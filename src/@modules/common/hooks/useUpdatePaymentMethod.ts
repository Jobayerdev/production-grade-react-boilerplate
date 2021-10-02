import { PaymentMethodsService } from "@shared/services"
import { QueryConfig } from "@shared/config"
import { useMutation } from "react-query"

type PaymentMethodUpdateType = {
	config?: QueryConfig<typeof PaymentMethodsService.update>
}

export const useUpdatePaymentMethod = ({config}: PaymentMethodUpdateType = {}) => {
	
	return useMutation({
		...config,
		mutationFn: PaymentMethodsService.update,
	})
}