import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import InputFieldControl from '~/Core/components/common/FormControl/InputFieldControl';
import UserRoleEnum from '~/App/constants/roleEnum';
import { loginSchema } from '~/App/schemas/authSchema';
import routesPath from '~/App/config/routesPath';
import { Link } from 'react-router-dom';
const LoginForm = ({ className: cx, onSubmit, isLoading }) => {
	const { control, handleSubmit } = useForm({
		defaultValues: {
			...loginSchema.getDefault(),
			user_type_id: UserRoleEnum.EMPLOYER
		},
		resolver: yupResolver(loginSchema)
	});

	return (
		<form onSubmit={handleSubmit(onSubmit)} name='frmLogin' id={cx('frmLogin')} method='post'>
			<div className={cx('form-group', 'd-flex')}>
				<div className={cx('form-info')}>
					<span>Email/Tên đăng nhập</span>
				</div>
				<div className={cx('form-input')}>
					<InputFieldControl
						className={cx('form-control')}
						control={control}
						name='email'
						placeholder='Vui lòng nhập email'
					/>
				</div>
			</div>
			<div className={cx('form-group', 'd-flex')}>
				<div className={cx('form-info')}>
					<span>Mật khẩu</span>
				</div>
				<div className={cx('form-input')}>
					<InputFieldControl
						type='password'
						className={cx('form-control')}
						control={control}
						name='password'
						placeholder='Vui lòng nhập password'
					/>
				</div>
			</div>
			<div className={cx('user-action')}>
				<div className={cx('btn-area')}>
					<button
						type='submit'
						className={`btn-action`}
						disabled={isLoading}
						style={{ backgroundImage: isLoading ? 'linear-gradient(270deg, #bdc3c7, #bdc2c4)' : '' }}>
						Đăng nhập
					</button>
				</div>
				<p>
					<Link className={cx('register')} to={routesPath.EmployerPaths.register}>
						Quý khách chưa có tài khoản?
					</Link>
					<span
						style={{
							marginLeft: '4px'
						}}>
						Đăng ký dễ dàng, hoàn toàn miễn phí
					</span>
				</p>
			</div>
		</form>
	);
};

export default LoginForm;
