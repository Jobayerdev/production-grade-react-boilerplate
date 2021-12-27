import { AppProvider } from "./@application/context"
import AppRoutes from "./@application/routes"
import React from "react"

const App = () => {
	return (
		<AppProvider>
			<AppRoutes />
		</AppProvider>
	)
}

export default App
