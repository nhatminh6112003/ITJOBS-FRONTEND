import { Suspense, lazy, cloneElement } from 'react';
import Header from '../../components/Jobseeker/Header';
import { cx } from './JobSeekerStyles';
import Loading from '~/Core/components/ui/Loading';

const JobSeekerStyles = lazy(() => import('./JobSeekerStyles'));
const Footer = lazy(() => import('../../components/Jobseeker/Footer'));
export const JobSeekerLayout = ({ children }) => {
	return (
		<>
			<JobSeekerStyles>
				<Header />
				{/*React.cloneElement(children,{cx}) nhận vào 2 tham số tham số thứ nhất là element cần sao chép tham số thứ 2 là props là object {cx} sẽ được truyền cho các children  */}
				<Suspense fallback={<Loading />}>
					<main>{cloneElement(children, { cx })}</main>
					<Footer />
				</Suspense>
			</JobSeekerStyles>
		</>
	);
};
