import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import InputFieldControl from '~/Core/components/common/FormControl/InputFieldControl';
import UserRoleEnum from '~/App/constants/roleEnum';
import { loginSchema } from '~/App/schemas/authSchema';
const LoginForm = ({ className: cx, onSubmit, isLoading }) => {
	const { control, handleSubmit } = useForm({
		defaultValues: {
			...loginSchema.getDefault(),
			user_type_id: UserRoleEnum.JOBSEEKER
		},
		resolver: yupResolver(loginSchema)
	});

	return (
		<form name='frmLogin' id={cx('frmLogin')} onSubmit={handleSubmit(onSubmit)}>
			<div className={cx('form-group', 'form-text')}>
				<InputFieldControl control={control} name='email' placeholder='Vui lòng nhập email' />
				<InputFieldControl control={control} name='password' placeholder='Vui lòng nhập mật khẩu' type='password' />
			</div>
			<div className={cx('form-group', 'form-submit')}>
				<button
					type='submit'
					id='submit_login'
					className={cx('btn-gradient')}
					disabled={isLoading}
					style={{ backgroundImage: isLoading ? 'linear-gradient(270deg, #5c5c5c, #5c5c5c, #5c5c5c)' : '' }}>
					Đăng nhập
				</button>
			</div>
		</form>
	);
};

export default LoginForm;
