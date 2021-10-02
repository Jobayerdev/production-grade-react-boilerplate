import { PaymentMethodsService } from "@shared/services";
import { QueryConfig } from "@shared/config";
import { useQuery } from 'react-query';

type SinglePaymentMethodType = {
    id: string,
    config?: QueryConfig<typeof PaymentMethodsService.filterSingle >
}


export const useSinglePaymentMethod = ({ id, config }: SinglePaymentMethodType) => {
	
	return useQuery({
		...config,
		queryFn: () => PaymentMethodsService.filterSingle(id),
	})
}