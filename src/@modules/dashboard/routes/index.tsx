import DefaultDashboardPage from "./default-dashboard-page-component"
import { Navigate } from "react-router-dom"

export const DashboardRoutes = [
	{ path: "", element: <Navigate to="/dashboard/default" /> },
	{ path: "default", element: <DefaultDashboardPage /> },
]
