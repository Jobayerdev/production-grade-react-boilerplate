import ProtectedRoutes from "./protected-routes.component"
import PublicRoutes from "./public-routes.component"
import React from "react"
import { useAuth } from "@modules/auth"

const AppRoutes = () => {
	const { isAuthenticated } = useAuth()
	return isAuthenticated ? <ProtectedRoutes /> : <PublicRoutes />
}

export default AppRoutes
