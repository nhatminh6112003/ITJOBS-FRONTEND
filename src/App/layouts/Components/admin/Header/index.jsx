import { Link } from 'react-router-dom';
import routesPath from '~/App/config/routesPath';
const Header = () => {
	return (
		<header>
			<ul>
				<li>
					<Link to={routesPath.AdminPaths.home}>Home</Link>
				</li>
				<li>
					<Link to={routesPath.AdminPaths.about}>About</Link>
				</li>
				<li>
					<Link to={routesPath.AdminPaths.product}>Product</Link>
				</li>
				<li>
					<Link to={routesPath.AdminPaths.cart}>Cart</Link>
				</li>
			</ul>
		</header>
	);
};

export default Header;
