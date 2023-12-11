import * as yup from 'yup';
export const resumeCertificateSchema = yup.object({
	cer_title: yup.string().required('Vui lòng nhập tên chứng chỉ').trim(),
	cer_form: yup.date().required('Vui lòng nhập ngày có hiệu lực'),
	cer_to: yup.date().when('cer_limit', {
		is: false, // Khi cer_limit là false
		then: yup.date().required('Vui lòng nhập ngày hết hiệu lực'),
		otherwise: yup.date() // Khi cer_limit là true, không cần kiểm tra cer_to
	}),
	cer_limit: yup.boolean().default(false),
	cer_by: yup.string().required('Vui lòng nhập tên nơi cấp').trim()
});
