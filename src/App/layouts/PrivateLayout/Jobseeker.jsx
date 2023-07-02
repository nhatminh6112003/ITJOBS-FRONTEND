import { Navigate, Outlet } from 'react-router-dom';
import { useSelector } from 'react-redux';
import routesPath from '~/App/config/routesPath';
import UserRoleEnum from '~/App/constants/roleEnum';
 const Jobseeker = () => {
	const user = useSelector((state) => state.auth?.user);
	return user?.user_type_id == UserRoleEnum.JOBSEEKER ? (
		<Outlet />
	) : (
		<Navigate to={routesPath.JobseekerPaths.home} replace={true} />
	);
};

export default Jobseeker