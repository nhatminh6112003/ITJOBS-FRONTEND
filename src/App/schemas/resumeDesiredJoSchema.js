import * as yup from 'yup';
export const resumeDesiredJoSchema = yup.object({
	position_id: yup.number().required('Vui lòng nhập tên chứng chỉ'),
	salary_from: yup.number().required('Vui lòng nhập lương từ'),
	salary_to: yup.number().required('Vui lòng nhập lương đến'),
	work_type_id: yup.number().required('Vui lòng chọn hình thức làm việc'),
	work_home: yup.boolean(),
	profession_id: yup.number().required('Vui lòng chọn ngành nghề'),
	provinces: yup.number().required('Vui lòng nhập nơi làm việc'),
	welfare_id: yup.number()
});
