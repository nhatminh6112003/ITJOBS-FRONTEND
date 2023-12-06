import LoginForm from './components/LoginForm';
import { useLoginMutation } from '~/App/providers/apis/authApi';
import { toast } from 'react-toastify';
import { useSelector } from 'react-redux';
import { Navigate } from 'react-router-dom';
import routesPath from '~/App/config/routesPath';
const Login = ({ cx }) => {
	const employer = useSelector((state) => state.auth?.employer);

	const [loginMutation, { isLoading }] = useLoginMutation();
	const handleLoginFormSubmit = async (data) => {
		loginMutation(data)
			.unwrap()
			.then((r) => {
				if (r.status == 200) {
					toast.success('Đăng nhập thành công');
					return;
				}
			})
			.catch((err) => {
				toast.error(err?.data?.message);
			});
	};

	if (employer) {
		return <Navigate to={routesPath.EmployerPaths.dashboard} />;
	}

	return (
		<section className={cx('employer-signup-new', 'login', 'cb-section')}>
			<div className={cx('container')}>
				<div className={cx('row', 'row-sp')} style={{ justifyContent: 'center' }}>
					<div className={cx('col-xl-8')}>
						<div className={cx('box-info-signup')}>
							<div className={cx('title')}>
								<h2>Dành Cho Nhà Tuyển Dụng</h2>
							</div>
							<div className={cx('step-title', 'd-flex', 'align-center')}>
								<div className={cx('main-step-title')}>
									<h3>THÔNG TIN ĐĂNG NHẬP</h3>
								</div>
							</div>
							<div className={cx('main-form')}>
								<LoginForm onSubmit={handleLoginFormSubmit} className={cx} isLoading={isLoading} />
							</div>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
};

export default Login;
