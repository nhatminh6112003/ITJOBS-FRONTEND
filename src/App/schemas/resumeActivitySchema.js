import * as yup from 'yup';
export const resumeActivitySchema = yup.object({
	organization: yup.string().required('Không được để trống.').trim('Vui lòng không nhập khoảng trắng'),
	role: yup.string().required('Không được để trống.'),
	start_date: yup.date().required('Không được để trống.'),
	end_date: yup.date(),
	activity_des: yup.string(),
	activity_current: yup.boolean()
});
