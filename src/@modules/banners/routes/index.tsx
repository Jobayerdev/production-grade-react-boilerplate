import BannersPage from "./BannersPage"
import { Navigate } from "react-router-dom"

export const BannersRoutes = [
	{ path: "", element: <Navigate to="/banners/list"/> },
	{ path: "list", element: <BannersPage /> },
]
 