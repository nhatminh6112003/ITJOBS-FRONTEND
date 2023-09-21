import React, { Fragment } from 'react';
import { DefaultLayout, PrivateLayout } from '~/App/layouts';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { v4 as uuidv4 } from 'uuid';
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
const renderPrivateRoutes = (routes, role) => {
	const privateLayouts = {
		ADMIN: PrivateLayout.Admin,
		EMPLOYER: PrivateLayout.Employer,
		JOBSEEKER: PrivateLayout.Jobseeker
	};
	const PrivateComponent = privateLayouts[role];
	return routes.map((route) => (
		<Route key={uuidv4()} element={<PrivateComponent />}>
			{renderPublicRoutes([route],role)}
		</Route>
	));
};

const renderRoutes = (routes, role) => {
	return (
		<Fragment>
			{role && (
				<Fragment>
					{renderPublicRoutes(routes.publicRoutes, role)}
					{renderPrivateRoutes(routes.privateRoutes, role)}
				</Fragment>
			)}
			{routes.defaultRoutes && renderPublicRoutes(routes.defaultRoutes)}
		</Fragment>
	);
};
export default renderRoutes;
