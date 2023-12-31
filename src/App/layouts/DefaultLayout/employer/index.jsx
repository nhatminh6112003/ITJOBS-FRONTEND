import { cloneElement, lazy, Suspense } from 'react';
import Header from '../../Components/employer/Header';
import EmployerStyles, { cx } from './EmployerStyles';
import Loading from '~/Core/components/common/Loading';
import NavBar from '../../Components/employer/NavBar';
import { useLocation } from 'react-router-dom';
import routesPath from '~/App/config/routesPath';

const Footer = lazy(() => import('../../Components/employer/Footer'));
export const EmployerLayout = ({ children }) => {
	const location = useLocation();

	return (
		<EmployerStyles>
			<Header />
			<Suspense fallback={<Loading />}>
				<main>
					{location.pathname !== routesPath.EmployerPaths.login &&
						location.pathname !== routesPath.EmployerPaths.register && <NavBar className={cx} />}
					{cloneElement(children, { cx })}
				</main>
				<Footer cx={cx} />
			</Suspense>
		</EmployerStyles>
	);
};
