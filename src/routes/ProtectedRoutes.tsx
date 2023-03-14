import { Outlet, useRoutes } from 'react-router-dom';

import { DashboardRoutes } from '../features/dashboard';
import DefaultDashboardPage from '../features/dashboard/routes/DefaultDashboardPage';
import NotFound from '../components/NotFound';
import { UsersRoutes } from '../features/users';

const App = () => {
	let pathName = window.location.pathname;
	return (
		<>
			{pathName === '/' ? <DefaultDashboardPage /> : ''}
			<Outlet />
		</>
	);
};

const ProtectedRoutes = () => {
	const routes = [
		{
			path: 'dashboard',
			children: DashboardRoutes,
		},
		{
			path: 'users',
			children: UsersRoutes,
		},
	];

	return useRoutes([
		{
			path: '',
			element: <App />,
			children: routes,
		},

		{
			path: '*',
			element: <NotFound />,
		},
	]);
};

export default ProtectedRoutes;
