import { Navigate, PartialRouteObject } from "react-router-dom"

import BrandCreatePage from "./brands/routes/BrandCreatePage";
import BrandUpdatePage from "./brands/routes/BrandUpdatePage";
import BrandsPage from "./brands/routes/BrandsPage";
import DepartmentUpdatePage from "./departments/routes/DepartmentUpdatePage";
import DepartmentsCreatePage from "./departments/routes/DepartmentsCreatePage";
import DepartmentsPage from "./departments/routes/DepartmentsPage";

const ECommerceRoutes: PartialRouteObject[] = [
	{ path: "", element: <Navigate to="/e-commerce/brands" /> },
	{
		path: "departments",
		children: [
			{ path: "", element: <DepartmentsPage /> },
			{ path: "create", element: <DepartmentsCreatePage /> },
			{ path: "update/:id", element: <DepartmentUpdatePage /> },
		],
	},
	{
		path: "brands",
		children: [
			{ path: "", element: <BrandsPage /> },
			{ path: "create", element: <BrandCreatePage /> },
			{ path: "update/:id", element: <BrandUpdatePage /> },
		],
	},
]

export default ECommerceRoutes;