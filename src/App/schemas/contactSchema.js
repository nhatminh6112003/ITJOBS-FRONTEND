import * as yup from 'yup';
export const contactSchema = yup.object({
	service_type: yup.string().required('Vui lòng chọn loại dịch vụ').nullable(),
	service: yup.string().required('Vui lòng chọn dịch vụ').nullable(),
});
