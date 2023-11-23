import { cloneElement, lazy, Suspense } from 'react';
import Header from '../../components/Employer/Header';
import EmployerStyles, { cx } from './EmployerStyles';
import Loading from '~/Core/components/common/Loading';
import NavBar from '../../components/Employer/NavBar';
import { useLocation } from 'react-router-dom';
import routesPath from '~/App/config/routesPath';

const Footer = lazy(() => import('../../components/Employer/Footer'));
export const EmployerLayout = ({ children }) => {
	const location = useLocation();

	return (
		<EmployerStyles>
			<Header />
			<Suspense fallback={<Loading />}>
				<main>
					{location.pathname !== routesPath.EmployerPaths.login && <NavBar className={cx} />}
					{cloneElement(children, { cx })}
				</main>
				<Footer cx={cx} />
			</Suspense>
		</EmployerStyles>
	);
};
