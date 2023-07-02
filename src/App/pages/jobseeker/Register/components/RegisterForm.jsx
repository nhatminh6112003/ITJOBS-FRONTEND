import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import InputFieldControl from '~/Core/components/common/FormControl/InputFieldControl';
import { registerSchema } from '~/App/schemas/authSchema';

const RegisterForm = ({ className: cx }) => {
	const { control, handleSubmit } = useForm({
		defaultValues: registerSchema.getDefault(),
		resolver: yupResolver(registerSchema)
	});
	const onSubmit = (data) => console.log(data);
	return (
		<form onSubmit={handleSubmit(onSubmit)}>
			<InputFieldControl control={control} name='firstname' placeholder='* Tên' />
			<InputFieldControl control={control} name='lastname' placeholder='* Họ và tên lót' type='text' />
			<InputFieldControl control={control} name='email' placeholder='* Email' />
			<InputFieldControl control={control} type='password' name={cx('password')} placeholder='* Mật khẩu' />
			<InputFieldControl
				control={control}
				type='password'
				name='confirm_password'
				placeholder='* Xác nhận mật khẩu'
			/>

			<div className='form-group form-submit'>
				<button className={cx('btn-gradient')}>Đăng ký</button>
			</div>
		</form>
	);
};

export default RegisterForm;
