import { IBaseFilter, ICreateUser } from "@shared/interfaces"

import { CoreAxiosInstance } from "./../config/axios/core-axios-instantance"
import { IUpdateUser } from "./../interfaces/user.interfaces"
import { concatFilterQuery } from "@shared/utils"

const END_POINT: string = "/users/"

export const UsersService = {
	create(payload: ICreateUser) {
		return CoreAxiosInstance.post(END_POINT, payload)
	},
	filter(options: IBaseFilter) {
		return CoreAxiosInstance.get(`${END_POINT}?${concatFilterQuery(options)}`)
	},
	filterSingle(payload: string) {
		return CoreAxiosInstance.get(`${END_POINT}${payload}`)
	},
	update(payload: IUpdateUser) {
		const { id, name, email, phoneNumber, type, gender, address } = payload
		return CoreAxiosInstance.put(`${END_POINT}${id}`, {
			name,
			email,
			phoneNumber,
			type,
			gender,
			address,
		})
	},
	delete(id: string) {
		return CoreAxiosInstance.delete(`${END_POINT}${id}`)
	},
}
