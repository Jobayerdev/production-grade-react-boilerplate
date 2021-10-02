import { MutationConfig } from "@shared/config"
import { PaymentMethodsService } from "@shared/services"
import { useMutation } from "react-query"

type PaymentMethodCreateType = {
	config?: MutationConfig<typeof PaymentMethodsService.create>
}

export const useCreatePaymentMethod = ({ config }: PaymentMethodCreateType = {}) => {

	return useMutation({
		...config,
		mutationFn: PaymentMethodsService.create,
	})
}