import { Navigate, useRoutes } from "react-router-dom"

import { AuthRoutes } from "@modules/auth"
import { LandingRoutes } from "@modules/landing/routes"

const PublicRoutes = () => {
	return useRoutes([
		{
			path: "",
			children: LandingRoutes,
		},
		{
			path: "auth",
			children: AuthRoutes,
		},
		{
			path: "*",
			element: <Navigate to="/" />,
		},
	])
}

export default PublicRoutes
