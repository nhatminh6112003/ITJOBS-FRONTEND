import styles from './employer-layout.module.css';
import classNames from 'classnames/bind';
const cx = classNames.bind(styles);
function EmployerStyles({ children }) {
	return children;
}
export default EmployerStyles;
export { cx };
