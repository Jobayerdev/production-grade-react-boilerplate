import { AuthService } from "@shared/services/auth.service"
import { notification } from "antd"
import { storage } from "@shared/utils"
import { useMutation } from "react-query"
import { useNavigate } from "react-router-dom"

export const useAuth = () => {
	const navigation = useNavigate()
	const loginFn = useMutation(AuthService.login, {
		onSuccess: (val) => {
			if (val?.data?.payload?.token) {
				storage.setToken(val?.data?.payload?.token)
				notification.success({ message: "Auth Login Success" })
				navigation("/")
			}
		},
	})
	const logoutFn = () => {
		storage.clear()
		window.location.assign(window.location.origin as unknown as string)
	}
	const loadUserFn = () => {
		
	}
	const isAuthenticated = storage.getToken() ? true : false
	return {
		loginFn,
		logoutFn,
		loadUserFn,
		isAuthenticated,
	}
}
