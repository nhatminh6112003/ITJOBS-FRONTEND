import * as yup from 'yup';
export const jobPostSchema = yup.object({
	expiry_date: yup
		.date()
		.min(new Date(), 'Hạn nhận hồ sơ phải lớn hơn ngày hiện tại')
		.required('Hạn nhận hồ sơ không được để trống'),
	job_welfare_id: yup.array(),
	job_profession_id: yup.array().required('Vui lòng chọn ngành nghề').nullable(),
	posted_by_id: yup.string(),
	company_id: yup.string(),
	job_degree_value: yup.number().required('Vui lòng chọn Bằng cấp'),
	job_position_value: yup.number().required('Vui lòng chọn Cấp bậc'),
	job_experience_value: yup.number().required('Vui lòng chọn Kinh nghiệm'),
	address: yup.string(),
	form_age: yup.string(),
	to_age: yup.string(),
	job_title: yup.string().default('').required('Vui lòng nhập Chức danh tuyển dụng'),
	gender: yup.string(),
	is_address_work_hidden: yup.boolean(),
	min_salary: yup.number().nullable().default('').typeError('Vui lòng nhập số lương tối thiểu'),
	max_salary: yup.number().nullable().default('').typeError('Vui lòng nhập số lương cao nhất'),
	posted_date: yup.date(),
	// job_desc: yup
	// 	.string()
	// 	.default('')
	// 	.required('Vui lòng không để trống, không nhập số điện thoại, email, hoặc hình ảnh.')
	// 	.min(10, 'Nội dung phải nhiều hơn 10 ký tự.')
	// 	.test('no-phone-email-image', 'Vui lòng không nhập số điện thoại, email, hoặc hình ảnh.', (value) => {
	// 		if (value) {
	// 			// Kiểm tra xem giá trị có chứa số điện thoại, email hoặc hình ảnh không
	// 			const phoneRegex = /\d{10,}/;
	// 			const emailRegex = /^\S+@\S+\.\S+$/;
	// 			const imageRegex = /\.(jpeg|jpg|gif|png)$/;
	// 			if (phoneRegex.test(value) || emailRegex.test(value) || imageRegex.test(value)) {
	// 				return false;
	// 			}
	// 		}
	// 		return true;
	// 	})
	// 	.trim('Vui lòng không nhập khoảng trắng'),
	// job_request: yup
	// 	.string()
	// 	.default('')
	// 	.required('Vui lòng không để trống, không nhập số điện thoại, email, hoặc hình ảnh.')
	// 	.min(10, 'Nội dung phải nhiều hơn 10 ký tự.')
	// 	.test('no-phone-email-image', 'Vui lòng không nhập số điện thoại, email, hoặc hình ảnh.', (value) => {
	// 		if (value) {
	// 			// Kiểm tra xem giá trị có chứa số điện thoại, email hoặc hình ảnh không
	// 			const phoneRegex = /\d{10,}/;
	// 			const emailRegex = /^\S+@\S+\.\S+$/;
	// 			const imageRegex = /\.(jpeg|jpg|gif|png)$/;
	// 			if (phoneRegex.test(value) || emailRegex.test(value) || imageRegex.test(value)) {
	// 				return false;
	// 			}
	// 		}
	// 		return true;
	// 	})
	// 	.trim('Vui lòng không nhập khoảng trắng'),
	work_home: yup.boolean().default(false).nullable(),
	job_formExperience: yup.number().nullable(),
	job_ToExperience: yup.number().nullable(),
	provinces: yup.string().default('').required('Vui lòng chọn Tỉnh/Thành phố').nullable(),
	districts: yup.string().default('').nullable(),
	isAgreement: yup.boolean().default(false)
});
