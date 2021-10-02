import { QueryConfig, queryClient } from "@shared/config"

import { PaymentMethodsService } from "@shared/services"
import { notification } from "antd"
import { useMutation } from "react-query"

type PaymentMethodDeleteType = {
    config?: QueryConfig<typeof PaymentMethodsService.delete>
}

export const useDeletePaymentMethod = ({ config }: PaymentMethodDeleteType) => {

    return useMutation({
        onMutate: async (deletedMethod: any) => {
            await queryClient.cancelQueries("PaymentMethods")
            const previousMethod = queryClient.getQueryData<any[]>("PaymentMethods")
            queryClient.setQueryData(
                "PaymentMethods",
                previousMethod?.filter((method) => {
                    return method.id !== deletedMethod
                })
            )

            return { previousMethod }
        },
        onError: (_, __, context: any) => {
            if (context?.previousMethod) {
                queryClient.setQueryData("PaymentMethods", context.previousMethod)
            }
        },
        onSuccess: () => {
            queryClient.invalidateQueries("PaymentMethods")
            notification.success({
                type: "success",
                message: "Payment Method Deleted",
            })
        },
        ...config,
        mutationFn: PaymentMethodsService.delete,
    })
}