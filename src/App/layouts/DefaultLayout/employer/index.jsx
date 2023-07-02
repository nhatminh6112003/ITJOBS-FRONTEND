import { cloneElement, lazy, Suspense } from 'react';
import Header from '../../components/Employer/Header';
import EmployerStyles, { cx } from './EmployerStyles';
import Loading from '~/Core/components/ui/Loading';
const Footer = lazy(() => import('../../components/Employer/Footer'));
export const EmployerLayout = ({ children }) => {
	return (
		<Suspense fallback={<Loading />}>
			<EmployerStyles>
				<Header />
				<main>{cloneElement(children, { cx })}</main>
				<Footer />
			</EmployerStyles>
		</Suspense>
	);
};
