import * as yup from 'yup';
export const loginSchema = yup.object({
	email: yup
		.string()
		.default('')
		.trim('Vui lòng không nhập khoảng trắng')
		.email('Không đúng định dạng email')
		.required('Xin vui lòng nhập email của bạn.'),
	password: yup.string().default('').required('Vui lòng nhập mật khẩu').min(8, 'Vui lòng nhập mật khẩu của bạn từ 8 ký tự trở lên .'),
});
export const registerSchema = yup.object({
	firstname: yup.string().default('').trim('Vui lòng không nhập khoảng trắng').required('Nhập Tên của bạn'),
	lastname: yup.string().default('').trim('Vui lòng không nhập khoảng trắng').required('Nhập Họ và Tên Lót của bạn'),
	email: yup
		.string()
		.default('')
		.trim('Vui lòng không nhập khoảng trắng')
		.email('Email của bạn không hợp lệ.')
		.required('Vui lòng nhập email'),
	password: yup
		.string()
		.default('')
		.required('Vui lòng nhập mật khẩu')
		.min(8, 'Vui lòng nhập mật khẩu của bạn từ 8 ký tự trở lên .'),
	confirm_password: yup
		.string()
		.when('password', (password, field) =>
			password ? field.required().oneOf([yup.ref('password')], 'Mật khẩu nhập không khớp. Vui lòng thử lại.') : field
		)
});
