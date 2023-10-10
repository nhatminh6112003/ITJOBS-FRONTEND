import * as yup from 'yup';
export const resumeDesiredJoSchema = yup.object({
	position_id: yup.string().required('Vui lòng nhập cấp bậc mong muốn').nullable(),
	salary_from: yup.string().default('').required('Vui lòng nhập mức lương từ  ').nullable(),
	salary_to: yup.string().required('Vui lòng nhập mức lương từ đến ').nullable(),
	// work_type_id: yup.array().default('').required('Vui lòng chọn hình thức làm việc'),
	work_home: yup.boolean().default(false).nullable(),
	profession_id: yup.array().required('Vui lòng chọn ngành nghề').nullable(),
	provinces: yup.string().default('').required('Vui lòng nhập nơi làm việc').nullable(),
	districts: yup.string().default('').required('Vui lòng nhập quận').nullable(),
	welfare_id: yup.array().required('Vui lòng nhập phúc lợi mong muốn').nullable()
});
