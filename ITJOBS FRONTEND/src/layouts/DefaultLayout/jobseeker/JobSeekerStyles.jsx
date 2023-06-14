import styles from './jobseeker-layout.module.css';
import classNames from 'classnames/bind';
const cx = classNames.bind(styles);

function JobSeekerStyles({ children }) {
	return children;
}

export default JobSeekerStyles;
export { cx };
