import LoginForm from './components/LoginForm';
import { useLoginMutation } from '~/App/providers/apis/authApi';
import { toast } from 'react-toastify';
import { useSelector } from 'react-redux';
import { Navigate } from 'react-router-dom';
import routesPath from '~/App/config/routesPath';
import { Fragment } from 'react';
const Login = ({ cx }) => {
	const employer = useSelector((state) => state.auth?.employer);

	const [loginMutation] = useLoginMutation();
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
				<div className={cx('row', 'row-sp')}>
					<div className={cx('col-xl-5')}>
						<div className={cx('box-img')}>
							<img src='https://images.careerbuilder.vn/content/images/Banner/pic-laptop.png' alt='' />
						</div>
					</div>
					<div className={cx('col-xl-7')}>
						<div className={cx('box-info-signup')}>
							<div className={cx('title')}>
								<h2>Dành Cho Nhà Tuyển Dụng</h2>
							</div>
							<div className={cx('step-title', 'd-flex', 'align-center')}>
								<div className={cx('main-step-title')}>
									<h3>THÔNG TIN ĐĂNG NHẬP</h3>
								</div>
								<div className={cx('text-sup')}>
									<a
										href='https://careerbuilder.vn/vi/employers/faq'
										target='_blank'
										className={cx('support')}
										rel='noreferrer'>
										Hướng dẫn
									</a>
								</div>
							</div>
							<div className={cx('main-form')}>
								<LoginForm onSubmit={handleLoginFormSubmit} className={cx} />
							</div>
						</div>
					</div>
				</div>
				<div className={cx('row row-intro')}>
					<div className={cx('col-12', 'col-xl-4')}>
						<div className={cx('box-intro box-intro-1 d-flex align-center')}>
							<img src='img/signup-new/icon-folder.png' />
							<p>
								Hơn <strong>50.000</strong> hồ sơ cập nhật mỗi tháng
							</p>
						</div>
					</div>
					<div className={cx('col-12', 'col-xl-4')}>
						<div className='box-intro box-intro-2 d-flex align-center'>
							<img src='img/signup-new/icon-link.png' />
							<p>
								Website tuyển dụng toàn cầu <strong>duy nhất</strong> tại <strong>Việt Nam</strong>
							</p>
						</div>
					</div>
					<div className='col-12 col-xl-4'>
						<div className={cx('box-intro', 'box-intro-3', 'd-flex', 'align-center')}>
							<img src='img/signup-new/icon-triangle.png' />
							<p>
								Hơn <strong>18 triệu </strong>lượt xem mỗi tháng
							</p>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
};

export default Login;
