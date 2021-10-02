import { AppointmentCreatePage } from "./routes/AppointmentCreatePage";
import AppointmentPage from "./routes/AppointmentPage";
import { PartialRouteObject } from "react-router-dom";

const AppointmentRoutes: PartialRouteObject[] = [
	{ path: "", element: <AppointmentPage /> },
	{ path: "create", element: <AppointmentCreatePage /> },

]

export default AppointmentRoutes;