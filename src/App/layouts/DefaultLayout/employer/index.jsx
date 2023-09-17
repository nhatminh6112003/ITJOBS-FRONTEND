import { cloneElement, lazy, Suspense } from 'react';
import Header from '../../components/Employer/Header';
import EmployerStyles, { cx } from './EmployerStyles';
import Loading from '~/Core/components/common/Loading';
import NavBar from '../../components/Employer/NavBar';
const Footer = lazy(() => import('../../components/Employer/Footer'));
export const EmployerLayout = ({ children }) => {
	return (
		<EmployerStyles>
				<Header />
				<Suspense fallback={<Loading />}>
				<main>
					<NavBar className={cx} />
					{cloneElement(children, { cx })}
				</main>
				<Footer />
		</Suspense>
			</EmployerStyles>
	);
};
