import { Navigate, PartialRouteObject } from "react-router-dom"

import PermissionTypeCreatePage from "./permission-type/routes/PermissionTypeCreatePage"
import PermissionTypeListPage from "./permission-type/routes/PermissionTypeListPage"
import PermissionTypeUpdatePage from "./permission-type/routes/PermissionTypeUpdatePage"
import PermissionsCreatePage from "./permissions/routes/PermissionsCreatePage"
import PermissionsListPage from "./permissions/routes/PermissionsListPage"
import PermissionsUpdatePage from "./permissions/routes/PermissionsUpdatePage"
import RoleCreatePage from "./role-permission/routes/RoleCreatePage"
import RoleUpdatePage from "./role-permission/routes/RoleUpdatePage"
import UserRoleListPage from "./role-permission/routes/UserRoleListPage"

export const PermissionRoutes: PartialRouteObject[] = [
	{ path: "", element: <Navigate to="/permissions/list" /> },
	{ path: "list", element: <PermissionsListPage /> },
	{ path: "create", element: <PermissionsCreatePage /> },
	{ path: "update/:id", element: <PermissionsUpdatePage /> },
	{
		path: "types",
		children: [
			{ path: "", element: <Navigate to="/permissions/types/list" /> },
			{ path: "list", element: <PermissionTypeListPage /> },
			{ path: "create", element: <PermissionTypeCreatePage /> },
			{ path: "update/:id", element: <PermissionTypeUpdatePage /> },
		],
	},
	{
		path: "roles",
		children: [
			{ path: "", element: <Navigate to="/permissions/roles/list" /> },
			{ path: "list", element: <UserRoleListPage /> },
			{ path: "update/:id", element: <RoleUpdatePage /> },
			{ path: "create", element: <RoleCreatePage /> },
		],
	},
]
