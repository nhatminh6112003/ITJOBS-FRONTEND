import { Fragment } from 'react';

import { BrowserRouter as Router, Routes } from 'react-router-dom';
import { Suspense } from 'react';

import Loading from '~/Core/components/common/Loading';
import renderRoutes from './Core/utils/renderRoutes';
import {
	jobSeekerPublicRoutes,
	jobSeekerPrivateRoutes,
	employerPublicRoutes,
	employerPrivateRoutes,
	adminPublicRoutes,
	adminPrivateRoutes,
	defaultRoutes
} from './App/routes';
import ErrorBoundary from './Core/components/error/ErrorBoundary';

import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
function App() {
	const RoutesApp = [
		{
			role: 'JOBSEEKER',
			publicRoutes: jobSeekerPublicRoutes,
			privateRoutes: jobSeekerPrivateRoutes
		},
		{
			role: 'EMPLOYER',
			publicRoutes: employerPublicRoutes,
			privateRoutes: employerPrivateRoutes
		},
		{
			role: 'ADMIN',
			publicRoutes: adminPublicRoutes,
			privateRoutes: adminPrivateRoutes
		},
		{
			defaultRoutes: defaultRoutes
		}
	];
	return (
		<div className='App'>
			<ErrorBoundary>
			<ToastContainer />
				<Suspense fallback={<Loading />}>
					<Router>
						<Routes>
							{RoutesApp.map((route) => (
								<Fragment key={route.role}>{renderRoutes(route, route.role)}</Fragment>
							))}
						</Routes>
					</Router>
				</Suspense>
			</ErrorBoundary>
		</div>
	);
}

export default App;
