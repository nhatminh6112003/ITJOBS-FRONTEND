import { Link } from 'react-router-dom';
import config from '~/config/config.routes';

const Header = () => {
	return (
		<header>
			<ul>
				<li>
					<Link to={config.routes.home}>Home</Link>
				</li>
				<li>
					<Link to={config.routes.about}>About</Link>
				</li>
				<li>
					<Link to={config.routes.product}>Product</Link>
				</li>
				<li>
					<Link to={config.routes.cart}>Cart</Link>
				</li>
			</ul>
		</header>
	);
};

export default Header;
