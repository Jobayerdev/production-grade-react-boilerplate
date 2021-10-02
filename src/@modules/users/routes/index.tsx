import { CreateUserPage } from "./CreateUserPage"
import { Navigate } from "react-router-dom"
import { UpdateUserPage } from "./UpdateUserPage"
import { UsersPage } from "./UsersPage"

export const UsersRoutes = [
	{ path: "", element: <Navigate to="/users/list" /> },
	{ path: "list", element: <UsersPage /> },
	{ path: "create", element: <CreateUserPage /> },
	{ path: "update/:id", element: <UpdateUserPage /> },
]
 