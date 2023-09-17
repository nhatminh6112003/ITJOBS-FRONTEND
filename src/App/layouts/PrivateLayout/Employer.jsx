import { Navigate, Outlet } from 'react-router-dom';
import { useSelector } from 'react-redux';
import routesPath from '~/App/config/routesPath';
import UserRoleEnum from '~/App/constants/roleEnum';
const Employer = () => {
	const employer = useSelector((state) => state.auth?.employer);
	return employer?.user_type_id == UserRoleEnum.EMPLOYER ? (
		<Outlet />
	) : (
		<Navigate to={routesPath.JobseekerPaths.home} replace={true} />
	);
};

export default Employer;
