import React, { Fragment } from 'react';
import { DefaultLayout } from '~/layouts';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { v4 as uuidv4 } from 'uuid';
import PrivateRoutes from '~/utils/PrivateRoutes.jsx';

const renderPublicRoutes = (routes, role) => {
	return routes.map(({ layout, component: Page, path }) => {
		const layouts = {
			[layout]: layout,
			[null]: Fragment,
			JOBSEEKER: DefaultLayout.JobSeekerLayout,
			EMPLOYER: DefaultLayout.EmployerLayout,
			ADMIN: DefaultLayout.AdminLayout,
			default: DefaultLayout.JobSeekerLayout
		};
		const Layout = layouts[layout] || layouts[role] || layouts.default;
		return (
			<Route
				key={uuidv4()}
				path={path}
				element={
					<Layout>
						<Page />
					</Layout>
				}
			/>
		);
	});
};
const renderPrivateRoutes = (routes) => {
	return routes.map((route) => (
		<Route key={uuidv4()} element={<PrivateRoutes />}>
			{renderPublicRoutes([route])}
		</Route>
	));
};

const renderRoutes = (routes, role) => {
	return (
		<>
			{renderPublicRoutes(routes.publicRoutes, role)}
			{renderPrivateRoutes(routes.privateRoutes, role)}
		</>
	);
};
export default renderRoutes;
