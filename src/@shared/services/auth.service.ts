import { baseService } from "@shared/base/base.service"
import { IAuthCredential } from "@shared/interfaces"
import { CoreAxiosInstance } from "./../config/axios/core-axios-instantance"

const END_POINT: string = "/auth/login/admin"

export const AuthService = {
	...baseService(END_POINT),
	login: (payload: IAuthCredential) => {
		return CoreAxiosInstance.post(`${END_POINT}`, payload)
	},
}
// class AAuthService extends BaseService<{},{}> {
// 	END_POINT: string = "/auth"
// 	constructor() {
// 		super(this.END_POINT)
// 	}

// 	login(payload: IAuthCredential) {
// 		console.log(this.END_POINT) // undefined
// 		return CoreAxiosInstance.post(`${END_POINT}`, payload)
// 	}
// }

// export const _AAuthService = new AAuthService()
