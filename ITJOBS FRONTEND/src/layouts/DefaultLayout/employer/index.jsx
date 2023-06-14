import React, { useState, useEffect, lazy, Suspense } from 'react';

// import Header from "~/layouts/Components/employer/Header";
import EmployerStyles, { cx } from './EmployerStyles';
// import styles from "./employer.module.css";
import Loading from '~/components/ui/Loading';
const Header = React.lazy(() => import('~/layouts/Components/employer/Header'));

const Footer = React.lazy(() => import('~/layouts/Components/employer/Footer'));
export const EmployerLayout = ({ children }) => {
	return (
		<Suspense fallback={<Loading />}>
			<EmployerStyles>
				<Header />
				<main>{React.cloneElement(children, { cx })}</main>
				<Footer />
			</EmployerStyles>
		</Suspense>
	);
};
