import * as yup from 'yup';
export const resumeCertificateSchema = yup.object({
	cer_title: yup.string().required('Vui lòng nhập tên chứng chỉ'),
	cer_form: yup.date().required('Vui lòng nhập ngày có hiệu lực'),
	cer_to: yup.date(),
	cer_by: yup.string().required('Vui lòng nhập tên nơi cấp'),
	cer_limit: yup.boolean()
});
