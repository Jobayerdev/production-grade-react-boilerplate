import { AppProvider } from "@shared/context"
import AppRoutes from "@shared/routes"
import React from "react"
import 'draft-js/dist/Draft.css';

const App = () => {
	return (
		<AppProvider>
			<AppRoutes />
		</AppProvider>
	)
}

export default App
