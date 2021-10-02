import { IBaseFilter, ICreateAppointment } from "@shared/interfaces"

import { CoreAxiosInstance } from "@shared/config"
import { concatFilterQuery } from "@shared/utils"

const END_POINT: string = "/appointments/"

export const AppointmentService = {
	filter(options: IBaseFilter) {
		return CoreAxiosInstance.get(`${END_POINT}?${concatFilterQuery(options)}`)
	},
	getById(id: string) {
		return CoreAxiosInstance.get(`${END_POINT}${id}`)
	},
    create(payload: ICreateAppointment) {
		return CoreAxiosInstance.post(`${END_POINT}`, payload)
	},
}
