import { Navigate, Outlet } from 'react-router-dom';
import { useSelector } from 'react-redux';
import config from '~/config/config.routes';

const PrivateRoutes = () => {
	const currentUser = useSelector((state) => state.auth.login.currentUser);

	return currentUser ? <Outlet /> : <Navigate to={config.jobSeekerRoutes.login} />;
};

export default PrivateRoutes;
