import { Navigate, useRoutes } from "react-router-dom"

import { AuthRoutes } from "@modules/auth"
import Login from "@modules/auth/routes/login.component"

const PublicRoutes = () => {
	return useRoutes([
		{
			path: "",
			element: <Login />,
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
