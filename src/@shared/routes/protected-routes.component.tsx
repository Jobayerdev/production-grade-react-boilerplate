import { Outlet, useRoutes } from "react-router-dom"

import AppointmentRoutes from "@modules/appointment"
import { BannersRoutes } from "@modules/banners"
import { CommonRoutes } from "@modules/common"
import { DashboardRoutes } from "@modules/dashboard"
import DefaultDashboardPage from "@modules/dashboard/routes/default-dashboard-page-component"
import ECommerceRoutes from "@modules/e-commerce"
import MainLayout from "@shared/components/layout/main-layout.component"
import NotFound from "@shared/components/NotFound"
import { PermissionRoutes } from "@modules/permission"
import PetRoutes from "@modules/pet"
import { ServiceRoutes } from "@modules/service"
import { UsersRoutes } from "@modules/users"

const App = () => {
	let pathName = window.location.pathname
	return (
		<MainLayout>
			{pathName === "/" ? <DefaultDashboardPage /> : ""}
			<Outlet />
		</MainLayout>
	)
}

const ProtectedRoutes = () => {
	const routes = [
		{
			path: "dashboard",
			children: DashboardRoutes,
		},
		{
			path: "users",
			children: UsersRoutes,
		},
		{
			path: "permissions",
			children: PermissionRoutes,
		},
		{
			path: "pets",
			children: PetRoutes,
		},
		{
			path: "banners",
			children: BannersRoutes,
		},
		{
			path: "services",
			children: ServiceRoutes,
		},
		{
			path: "common",
			children: CommonRoutes,
		},
		{
			path: "e-commerce",
			children: ECommerceRoutes,
		},
		{
			path: "appointments",
			children: AppointmentRoutes,
		},
	]

	return useRoutes([
		{
			path: "",
			element: <App />,
			children: routes,
		},
		{
			path: "*",
			element: <NotFound />,
		},
	])
}

export default ProtectedRoutes
