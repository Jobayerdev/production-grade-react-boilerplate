import {
	IBaseFilter,
	ICreatePermissions,
	IUpdatePermissions,
} from "@shared/interfaces"

import { CoreAxiosInstance } from "@shared/config"
import { concatFilterQuery } from "@shared/utils"

const END_POINT: string = "/permissions/"

export const PermissionsService = {
	create(payload: ICreatePermissions) {
		return CoreAxiosInstance.post(END_POINT, payload)
	},
	filter(options: IBaseFilter) {
		return CoreAxiosInstance.get(`${END_POINT}?${concatFilterQuery(options)}`)
	},
	filterSingle(id: string) {
		return CoreAxiosInstance.get(`${END_POINT}${id}`)
	},
	update(payload: IUpdatePermissions) {
		const { id, title } = payload
		return CoreAxiosInstance.put(`${END_POINT}${id}`, { title })
	},
	delete(id: string) {
		return CoreAxiosInstance.delete(`${END_POINT}${id}`)
	},
}
