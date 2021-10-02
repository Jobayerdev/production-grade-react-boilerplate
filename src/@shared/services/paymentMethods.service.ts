import {
	IBaseFilter,
	ICreatePaymentMethods,
	IUpdatePaymentMethods,
} from "@shared/interfaces"

import { CoreAxiosInstance } from "@shared/config"
import { concatFilterQuery } from "@shared/utils"

const END_POINT: string = "/paymentMethods/"

export const PaymentMethodsService = {
	create(payload: ICreatePaymentMethods) {
		return CoreAxiosInstance.post(END_POINT, payload)
	},
	filter(options: IBaseFilter) {
		return CoreAxiosInstance.get(`${END_POINT}?${concatFilterQuery(options)}`)
	},
	filterSingle(id: string) {
		return CoreAxiosInstance.get(`${END_POINT}${id}`)
	},
	update(payload: IUpdatePaymentMethods) {
		const { id, name } = payload
		return CoreAxiosInstance.put(`${END_POINT}${id}`, { name })
	},
	delete(id: string) {
		return CoreAxiosInstance.delete(`${END_POINT}${id}`)
	},
}
