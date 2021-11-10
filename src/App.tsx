import './theme.less'

import { AppProvider } from '@shared/context'
import AppRoutes from '@shared/routes'
import React from 'react'

const App = () => {
	return (
		<AppProvider>
			<AppRoutes />
		</AppProvider>
	)
}

export default App
