import { Navigate, useRoutes } from "react-router-dom"

import { AuthRoutes } from "@modules/auth"

const PublicRoutes = () => {
	return useRoutes([
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
