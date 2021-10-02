import {
	IBaseFilter,
	ICreateDepartment,
	IUpdateDepartment,
} from "@shared/interfaces"

import { CoreAxiosInstance } from "@shared/config"
import { concatFilterQuery } from "@shared/utils"

const END_POINT: string = "/departments/"

export const DepartmentService = {
	create(payload: ICreateDepartment) {
		return CoreAxiosInstance.post(END_POINT, payload)
	},
	filter(options: IBaseFilter) {
		return CoreAxiosInstance.get(`${END_POINT}?${concatFilterQuery(options)}`)
	},
	filterOne(id: string) {
		return CoreAxiosInstance.get(`${END_POINT}${id}`)
	},
	update(payload: IUpdateDepartment) {
		const { id, name, slug, image } = payload;
		return CoreAxiosInstance.put(`${END_POINT}${id}`, {name, slug, image})
	},
	delete(id: string) {
		return CoreAxiosInstance.delete(`${END_POINT}${id}`)
	},
}
