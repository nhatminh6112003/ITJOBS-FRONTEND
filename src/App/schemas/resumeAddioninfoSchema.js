import * as yup from 'yup';
export const resumeAddioninfoSchema = yup.object({
	resume_id: yup.string(),
	addioninfo: yup.string()
});
