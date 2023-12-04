import styles from './login.module.css';
import classNames from 'classnames/bind';
const cx = classNames.bind(styles);
import { useLoginMutation } from '~/App/providers/apis/authApi';
import { toast } from 'react-toastify';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { loginSchema } from '~/App/schemas/authSchema';
import UserRoleEnum from '~/App/constants/roleEnum';
import { useSelector } from 'react-redux';
import routesPath from '~/App/config/routesPath';
import { Navigate } from 'react-router-dom';
const Login = () => {
	const admin = useSelector((state) => state.auth?.admin);

	const {
		register,
		handleSubmit,
		formState: { errors }
	} = useForm({
		defaultValues: {
			...loginSchema.getDefault(),
			user_type_id: UserRoleEnum.ADMIN
		},
		resolver: yupResolver(loginSchema)
	});

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

	if (admin) {
		return <Navigate to={routesPath.AdminPaths.dashboard} />;
	}
	return (
		<div className={cx('container')}>
			<div className={cx('forms-container')}>
				<div className={cx('signin-signup')}>
					<form className={cx('sign-in-form')} onSubmit={handleSubmit(handleLoginFormSubmit)}>
						<h2 className={cx('title')}>Sign In</h2>
						<div className={cx('input-field')}>
							<input
								style={{ width: 300, paddingLeft: 12 }}
								type='text'
								placeholder='Email'
								{...register('email')}
							/>
						</div>
						{errors?.email && <span className={cx('error-message')}>{errors?.email.message}</span>}
						<div className={cx('input-field')}>
							<input
								{...register('password')}
								type='password'
								placeholder='Password'
								style={{ width: 300, paddingLeft: 12 }}
							/>
						</div>
						{errors?.password && <span className={cx('error-message')}>{errors?.password.message}</span>}

						<button type='submit' className={cx('btn', 'solid')}>
							Sign In
						</button>
						{/* <p className={cx('social-text')}>Or Sign in with social platforms</p>
						<div className={cx('social-media')}>
							<a href='#' className={cx('social-icon')}>
								<i className={cx('fab', 'fa-facebook-f')} />
							</a>
							<a href='#' className={cx('social-icon')}>
								<i className={cx('fab', 'fa-twitter')} />
							</a>
							<a href='#' className={cx('social-icon')}>
								<i className={cx('fab', 'fa-google')} />
							</a>
							<a href='#' className={cx('social-icon')}>
								<i className={cx('fab', 'fa-linkedin-in')} />
							</a>
						</div> */}
					</form>
				</div>
			</div>
			<div className={cx('panels-container')}>
				<div className={cx('panel', 'left-panel')}>
					<div className={cx('content')}>
						{/* <h1>Dashboard</h1> */}
						{/* <p>P</p> */}
					</div>
					<img src='/log.svg' className={cx('image')} alt='' />
				</div>
			</div>
		</div>
	);
};

export default Login;
