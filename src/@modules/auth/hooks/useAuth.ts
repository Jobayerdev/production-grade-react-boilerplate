import { storage } from '@shared/utils'

export const useAuth = () => {
	const loginFn = () => {}
	const logoutFn = () => {
		storage.clear()
		window.location.assign(window.location.origin as unknown as string)
	}
	const loadUserFn = () => {}
	const isAuthenticated = storage.getToken() ? true : false
	return {
		loginFn,
		logoutFn,
		loadUserFn,
		isAuthenticated,
	}
}
