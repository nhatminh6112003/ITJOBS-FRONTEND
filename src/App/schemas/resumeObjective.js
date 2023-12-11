import * as yup from 'yup';
export const resumeObjectiveSchema = yup.object({
	objective_job: yup.string().required('Vui lòng nhập mục tiêu nghề nghiệp').trim('Vui lòng không nhập khoảng trắng')
});
