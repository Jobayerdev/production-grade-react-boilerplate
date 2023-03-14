import CreateUserPage from './CreateUserPage';
import UsersPage from './UsersPage';

export const UsersRoutes = [
	{ path: '', element: <UsersPage /> },
	{ path: 'create', element: <CreateUserPage /> },
];
