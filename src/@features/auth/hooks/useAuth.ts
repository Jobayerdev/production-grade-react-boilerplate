import { storage } from "@application/utils"

export const useAuth = () => {
	const loginFn = () => {}
	const logoutFn = () => {
		storage.clear()
		window.location.assign(window.location.origin as unknown as string)
	}
	const loadUserFn = () => {}
	// const isAuthenticated = storage.getToken() ? true : false
	const isAuthenticated = true
	return {
		loginFn,
		logoutFn,
		loadUserFn,
		isAuthenticated,
	}
}
