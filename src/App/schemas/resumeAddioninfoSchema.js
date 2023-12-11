import * as yup from 'yup';
export const resumeAddioninfoSchema = yup.object({
	resume_id: yup.string(),
	addioninfo: yup.string().required('Vui lòng nhập thành tích nổi bật').trim()
});
