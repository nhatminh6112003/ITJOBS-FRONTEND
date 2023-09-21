import { Navigate, Outlet } from 'react-router-dom';
import { useSelector } from 'react-redux';
import routesPath from '~/App/config/routesPath';
import UserRoleEnum from '~/App/constants/roleEnum';
const Admin = () => {
	const admin = useSelector((state) => state.auth?.admin);
	return admin?.user_type_id == UserRoleEnum.ADMIN ? (
		<Outlet />
	) : (
		<Navigate to={routesPath.AdminPaths.login} replace={true} />
	);
};
export default Admin;
