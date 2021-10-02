export enum Permissions {
	UserModify = "UserModify",
	UserDelete = "UserDelete",
	UserCreate = "UserCreate",
	PetBreedsCreate = "PetBreedsCreate",
	PetBreedsUpdate = "PetBreedsUpdate",
	PermissionView = "PermissionView",
	PermissionModify = "PermissionModify",
	PermissionDelete = "PermissionDelete",
	PermissionCreate = "PermissionCreate",
	RoleCreate = "RoleCreate",
	RoleModify = "RoleModify",
	RoleView = "RoleView",
	RoleDelete = "RoleDelete",
	PermissionTypeDelete = "PermissionTypeDelete",
	PermissionTypeView = "PermissionTypeView",
	PermissionTypeModify = "PermissionTypeModify",
	PermissionTypeCreate = "PermissionTypeCreate",
	RolePermissionCreate = "RolePermissionCreate",
	RolePermissionDelete = "RolePermissionDelete",
	RolePermissionModify = "RolePermissionModify",
	RolePermissionView = "RolePermissionView",
	UserView = "UserView",
}

export type PermissionsTypes =
	| "UserModify"
	| "UserDelete"
	| "UserCreate"
	| "PetBreedsCreate"
	| "PetBreedsUpdate"
	| "PermissionView"
	| "PermissionModify"
	| "PermissionDelete"
	| "PermissionCreate"
	| "RoleCreate"
	| "RoleModify"
	| "RoleView"
	| "RoleDelete"
	| "PermissionTypeDelete"
	| "PermissionTypeView"
	| "PermissionTypeModify"
	| "PermissionTypeCreate"
	| "RolePermissionCreate"
	| "RolePermissionDelete"
	| "RolePermissionModify"
	| "RolePermissionView"
	| "UserView"
	| "FORBIDDEN"
