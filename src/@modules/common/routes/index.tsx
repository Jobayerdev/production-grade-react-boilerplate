import { Navigate, PartialRouteObject } from "react-router-dom"

import PaymentMethodsCreatePage from "./PaymentMethodsCreatePage"
import PaymentMethodsPage from "./PaymentMethodsPage"
import PaymentMethodsUpdatePage from "./PaymentMethodsUpdatePage"

export const CommonRoutes: PartialRouteObject[] = [
	{ path: "", element: <Navigate to="/common/list" /> },
	{
		path: "paymentMethods",
		children: [
			{ path: "", element: <PaymentMethodsPage /> },
			{ path: "create", element: <PaymentMethodsCreatePage /> },
			{ path: "update/:id", element: <PaymentMethodsUpdatePage /> },
		],
	}
	
]
