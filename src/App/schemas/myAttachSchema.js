import * as yup from 'yup';
import getFileExtension from '~/Core/utils/getFileExtension';
import { AllowedFileExtension } from '../constants/allowedFileType';

export const myAttachSchema = yup
	.object({
		yearOfExperience: yup.number().required().nullable().min(1).max(55),

		job_degree_value: yup.number().required(),
		// file: yup
		// 	.mixed()
		// 	.default('')
		// 	.test({
		// 		message: 'Vui lòng chọn file PDF',
		// 		test: (value) => AllowedFileExtension.PDF === getFileExtension(value)
		// 	}),
		position_id: yup.string().default('').required('Vui lòng chọn cấp bậc'),
		// work_type_id: yup.array().default('').required('Vui lòng chọn hình thức làm việc'),
		work_home: yup.boolean().default(false).nullable(),
		profession_id: yup.array().required('Vui lòng chọn ngành nghề').nullable(),
		provinces: yup.string().default('').required('Vui lòng nhập nơi làm việc').nullable(),
		districts: yup.string().default('').nullable(),
		welfare_id: yup.array().nullable(),
		resume_active: yup.string(),
		user_account_id: yup.string(),
		title: yup
			.string()
			.default('')
			.trim('Vui lòng không nhập khoảng trắng')
			.required('Vui lòng nhập vị trí mong muốn')
	})
	.shape({
		salary_from: yup
			.string()
			.default('')
			.trim('Vui lòng không nhập khoảng trắng')
			.test('salaryRangeValue', 'Vui lòng nhập mức lương từ 500,000 VND đến 999,000,000 VND', (value) => {
				if (!value) {
					return true;
				}
				const salary = parseFloat(value.replace(/,/g, ''));
				return salary >= 500000 && salary <= 999000000;
			})
			.test('salaryRangeComparison', 'Vui lòng nhập mức lương từ 500,000 VND đến 999,000,000 VND', function (value) {
				if (!value) {
					return true;
				}

				const salaryFrom = parseFloat(value.replace(/,/g, ''));
				const salaryTo = parseFloat(this.parent.salary_to.replace(/,/g, ''));

				return salaryFrom < salaryTo;
			})
			.default(''),
		salary_to: yup
			.string()
			.trim('Vui lòng không nhập khoảng trắng')
			.test('salaryTo', 'Vui lòng nhập mức lương từ 500,000 VND đến 999,000,000 VND', function (value) {
				if (!value) {
					return true;
				}

				const salary = parseFloat(value.replace(/,/g, ''));
				return salary >= 500000 && salary <= 999000000;
			})
			.default('')
	});
