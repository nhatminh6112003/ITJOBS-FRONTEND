import * as yup from 'yup';
export const resumeEducationSchema = yup.object({
	redu_name: yup.string().required('Vui lòng nhập Trường / khóa học').trim('Vui lòng không nhập khoảng trắng'),
	redu_degree: yup.string().required('Vui lòng chọn bằng cấp').oneOf(['0', '1', '2', '3', '4', '5', '6']),
	redu_date: yup
		.mixed()
		.test('is-date', 'Vui lòng nhập ngày tốt nghiệp', function (value) {
			if (!value || typeof value !== 'string') {
				// Kiểm tra giá trị rỗng hoặc không phải là chuỗi
				return false;
			}
			// Kiểm tra xem giá trị có thể chuyển đổi thành ngày không
			const dateValue = new Date(value);
			return !isNaN(dateValue.getTime());
		})
		.nullable(),
	redu_desc: yup.string().nullable().required('Vui lòng nhập mô tả')
});
