import React, { Suspense } from 'react';
import Header from '~/layouts/Components/jobseeker/Header';
import { cx } from './JobSeekerStyles';
import Loading from '~/components/ui/Loading';
const JobSeekerStyles = React.lazy(() => import('./JobSeekerStyles'));

// import Footer from "~/layouts/Components/clients/Footer";
const Footer = React.lazy(() => import('~/layouts/Components/jobseeker/Footer'));
export const JobSeekerLayout = ({ children }) => {
	return (
		<>
			<JobSeekerStyles>
				<Header />
				{/*React.cloneElement(children,{cx}) nhận vào 2 tham số tham số thứ nhất là element cần sao chép tham số thứ 2 là props là object {cx} sẽ được truyền cho các children  */}
				<Suspense fallback={<Loading />}>
					<main>{React.cloneElement(children, { cx })}</main>
					<Footer />
				</Suspense>
			</JobSeekerStyles>
		</>
	);
};
