import { Suspense, lazy, cloneElement } from 'react';
import Header from '../../components/Jobseeker/Header';
import { cx } from './JobSeekerStyles';
import Loading from '~/Core/components/common/Loading';

const JobSeekerStyles = lazy(() => import('./JobSeekerStyles'));
const Footer = lazy(() => import('../../components/Jobseeker/Footer'));
export const JobSeekerLayout = ({ children }) => {
	return (
		<>
			<JobSeekerStyles>
				<Header />
				<Suspense fallback={<Loading />}>
					<main>{cloneElement(children, { cx })}</main>
					<Footer />
				</Suspense>
			</JobSeekerStyles>
		</>
	);
};
