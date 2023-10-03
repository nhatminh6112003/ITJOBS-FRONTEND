import * as yup from 'yup';
export const resumeExperienceSchema = yup.object({
	rexp_title: yup.string().required('Vui lòng nhập Vị trí / Chức danh').trim('Vui lòng không nhập khoảng trắng'),
	rexp_company: yup.string().required('Vui lòng nhập tên công ty').trim('Vui lòng không nhập khoảng trắng'),
	rexp_workdesc: yup.string().required('Vui lòng nhập mô tả công việc').trim('Vui lòng không nhập khoảng trắng'),
	rexp_worktype_id: yup.string(),
	rexp_form: yup.date().max(new Date(), 'Ngày bắt đầu phải nhỏ hơn ngày hiện tại'),
	rexp_to: yup.date(),
	experCurrent: yup.boolean()
});
