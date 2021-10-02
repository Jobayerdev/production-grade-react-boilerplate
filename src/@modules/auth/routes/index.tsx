import Login from "./login.component"
import { Navigate } from "react-router-dom"
import React from "react"
import Register from "./register.component"

export const AuthRoutes = [
	{
		path: "",
		element: <Navigate to="/auth/login" />,
	},
	{
		path: "register",
		element: <Register />,
	},
	{
		path: "login",
		element: <Login />,
	},
]
