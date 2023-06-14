import { Fragment } from 'react';

import { BrowserRouter as Router, Routes } from 'react-router-dom';
import { Suspense } from 'react';

import Loading from './components/ui/Loading';
import renderRoutes from './utils/renderRoutes';
import { jobSeekerPublicRoutes, jobSeekerPrivateRoutes, employerPublicRoutes, employerPrivateRoutes } from './routes';
import ErrorBoundary from './error/ErrorBoundary';

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
		}
		// Add more user types here
	];

	return (
		<div className='App'>
			<ErrorBoundary>
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
