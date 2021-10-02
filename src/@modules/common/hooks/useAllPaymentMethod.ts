import { IBaseFilter } from "@shared/interfaces";
import { PaymentMethodsService } from "@shared/services";
import { QueryConfig } from "@shared/config";
import { useQuery } from 'react-query';

type PaymentMethodsType = {
	options: IBaseFilter
	config?: QueryConfig<typeof PaymentMethodsService.filter>
}

export const useAllPaymentMethod= ({ options, config }: PaymentMethodsType) => {
	
	return useQuery({
		...config,
		queryKey: ["PaymentMethods", options],
		queryFn: () => PaymentMethodsService.filter(options),
	})
}