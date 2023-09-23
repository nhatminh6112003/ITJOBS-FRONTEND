import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import InputFieldControl from '~/Core/components/common/FormControl/InputFieldControl';
import { registerSchema } from '~/App/schemas/authSchema';
import { useRegisterMutation } from '~/App/providers/apis/authApi';
import { toast } from 'react-toastify';
import { useNavigate } from 'react-router-dom';
import UserRoleEnum from '~/App/constants/roleEnum';
const RegisterForm = ({ className: cx }) => {
	const navigate = useNavigate();
	const [registerMutation, { isLoading }] = useRegisterMutation();

	const { control, handleSubmit } = useForm({
		defaultValues: {
			user_type_id: UserRoleEnum.JOBSEEKER,
			...registerSchema.getDefault()
		},
		resolver: yupResolver(registerSchema)
	});
	const onSubmit = ({ confirm_password, ...data }) => {
		registerMutation(data)
			.unwrap()
			.then((r) => {
				if (r.status == 200) {
					toast.success('Đăng ký thành công');
					navigate('/account/login');
				}
			})
			.catch((err) => {
				toast.error(err?.data?.message);
			});
	};
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
