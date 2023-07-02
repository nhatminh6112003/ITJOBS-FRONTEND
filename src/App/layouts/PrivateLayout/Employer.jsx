import { Navigate, Outlet } from 'react-router-dom';
import { useSelector } from 'react-redux';
import routesPath from '~/App/config/routesPath';
import UserRoleEnum from '~/App/constants/roleEnum';
 const Employer = () => {
	const user = useSelector((state) => state.auth?.user);
	return user?.user_type_id == UserRoleEnum.EMPLOYER ? (
		<Outlet />
	) : (
		<Navigate to={routesPath.JobseekerPaths.home} replace={true} />
	);
};

export default Employer