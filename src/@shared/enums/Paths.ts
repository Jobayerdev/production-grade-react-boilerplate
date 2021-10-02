export enum Paths {
	root = "/",

	//!Dashboard
	Dashboard = "/dashboard/",
	DefaultDashboard = "/dashboard/default/",

	//!User
	Users = "/users",
	UserList = "/users/list",
	UserCreate = "/users/create",
	UserUpdate = "/users/update",
	

	//!Permission
	Roles = "/permissions/roles/",
	RoleCreate = "/permissions/roles/create",
	RolesList = "/permissions/roles/list",
	UpdateRole = "/permissions/roles/update",
	Permissions = "/permissions/",
	UserRole = "/permissions/user-role",
	RoleUpdate = "/permissions/roles/update",
	PermissionTypes = "/permissions/types",
	PermissionsTypeCreate = "/permissions/types/create",
	PermissionsTypeList = "/permissions/types/list",
	PermissionsTypeUpdate = "/permissions/types/update",
	PermissionsCreate = "/permissions/create",
	PermissionsList = "/permissions/list",
	PermissionsUpdate = "/permissions/update",

	//pet
	Pets = "/pets",
	PetLifeStyles = "/pets/petLifeStyles",
	PetLifeStyleList = "/pets/petLifeStyles/list",
	PetLifeStyleCreate = "/pets/petLifeStyles/create",
	PetLifeStylesUpdate = "/pets/petLifeStyles/update",
	PetProfile = "/pets/profile",
	PetProfileList = "/pets/profile/list",
	PetProfileCreate = "/pets/profile/create",
	PetProfileUpdate = "/pets/profile/update",

	//pet breed
	PetBreeds = "/pets/petBreeds",
	PetBreedsList = "/pets/petBreeds/list",
	PetBreedsCreate = "/pets/petBreeds/create",
	PetBreedsUpdate = "/pets/petBreeds/update",

	//pet Type
	PetType = "/pets/petType",
	PetTypeList = "/pets/petType/list",
	PetTypeCreate = "/pets/petType/create",
	PetTypeUpdate = "/pets/petType/update",

	//Banners
	Banners = "/banners",

	//Service
	Services= "/services",
	ServiceDetail= "/services/detail/",
	ServicesList = "/services/list",
	ServicesCreate = "/services/create",
	ServicesUpdate = "/services/update",

	//Category
	ServiceCategory = "/services/serviceCategory",
	ServiceCategoryList = "/services/serviceCategory/list",
	ServiceCategoryCreate = "/services/serviceCategory/create",
	ServiceCategoryUpdate = "/services/serviceCategory/update",
	//Packages
	ServicePackage = "/services/servicePackage",
	ServicePackageList = "/services/servicePackage/list",
	ServicePackageCreate = "/services/servicePackage/create",
	ServicePackageUpdate = "/services/servicePackage/update",



	//common
	Common = "/common",
	PaymentMethods = "/common/paymentMethods",
	PaymentMethodsCreate = "/common/paymentMethods/create",
	PaymentMethodsUpdate = "/common/paymentMethods/update",


	// e-commerce
	ECommerce = "/e-commerce",
	Departments = "/e-commerce/departments",
	DepartmentsUpdate = "/e-commerce/departments/update",
	DepartmentsCreate = "/e-commerce/departments/create",
	Brands = "/e-commerce/brands",
	BrandsCreate = "/e-commerce/brands/create",
	BrandsUpdate = "/e-commerce/brands/update",

	// appointments 
	Appointments = "/appointments",
	AppointmentUpdate = "/appointments/update",
	AppointmentCreate = "/appointments/create",
}
