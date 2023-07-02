import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import InputField from '~/Core/components/form/InputField';

const RegisterForm = ({ className: cx }) => {
	const schema = yup.object({
		firstname: yup.string().required('Nhập Tên của bạn'),
		lastname: yup.string().required('Nhập Họ và Tên Lót của bạn'),
		email: yup.string().email('Email của bạn không hợp lệ.').required('Vui lòng nhập email'),
		password: yup
			.string()
			.required('Vui lòng nhập mật khẩu')
			.min(8, 'Vui lòng nhập mật khẩu của bạn từ 8 ký tự trở lên .'),
		confirm_password: yup.string().when('password', {
			is: (val) => val && val.length > 0,
			then: yup.string().oneOf([yup.ref('password')], 'Mật khẩu nhập không khớp. Vui lòng thử lại.')
		})
	});
	const form = useForm({
		defaultValues: {
			firstname: '',
			lastname: '',
			email: '',
			password: '',
			confirm_password: ''
		},
		resolver: yupResolver(schema)
	});
	const onSubmit = (data) => console.log(data);
	return (
		<form
			onSubmit={form.handleSubmit(onSubmit)}
			name={cx('frmRegister')}
			id={cx('frmRegister')}
			method='post'
			action='https://careerbuilder.vn/vi/jobseekers/member/register'
			autoComplete='off'>
			<div className={cx('form-group', 'form-text')}>
				<InputField form={form} name='firstname' label='* Tên' id={cx('firstname')} />
			</div>
			<div className={cx('form-group', 'form-text')}>
				<InputField form={form} name='lastname' label='* Họ và tên lót' id={cx('lastname')} type='text' />
			</div>
			<div className={cx('form-group', 'form-text')}>
				<InputField form={form} name='email' label='* Email' />

				<span className='error_email' style={{ display: 'none' }} />
			</div>
			<div className={cx('form-group', 'form-text')}>
				<InputField form={form} type='password' name={cx('password')} label='* Mật khẩu' id={cx('password')} />
			</div>
			<div className={cx('form-group', 'form-text')}>
				<InputField
					form={form}
					type='password'
					name='confirm_password'
					label='* Xác nhận mật khẩu'
					id={cx('confirm_password')}
				/>
			</div>
			<div className={cx('form-group', 'form-checkbox')}>
				<input type='checkbox' defaultChecked='checked' name='chkAgree' id='chkAgree' defaultValue={1} />
				<label htmlFor='chkAgree'>
					Đồng ý với <a href='https://careerbuilder.vn/vi/jobseekers/security'>Quy định bảo mật</a> và{' '}
					<a href='https://careerbuilder.vn/vi/jobseekers/use'>Thỏa thuận sử dụng</a> của CareerBuilder.vn
				</label>
				<span className='error_chkAgree' style={{ display: 'none' }} />
			</div>
			<div className='form-group form-submit'>
				<button className={cx('btn-gradient')}>Đăng ký</button>
			</div>
		</form>
	);
};

export default RegisterForm;
