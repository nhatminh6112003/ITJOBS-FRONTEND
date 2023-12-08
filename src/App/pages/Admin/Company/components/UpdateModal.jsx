import React from 'react';
import Modal from '~/Core/components/common/Modal';
import ValidationTextFieldsControl from '~/Core/components/common/FormControl/ValidationTextFieldsControl';
import { useForm, Controller } from 'react-hook-form';
import Button from '@mui/material/Button';
import { useUpdateCompanyMutation } from '~/App/providers/apis/companyApi';
import { toast } from 'react-toastify';
import { yupResolver } from '@hookform/resolvers/yup';
import { CompanySchema } from '~/App/schemas/companySchema';
import SelectVariantsFieldControl from '~/Core/components/common/FormControl/SelectVariantsFieldControl';
import { CompanySize, CompanyTypeArray } from '~/App/constants/companyEnum';

const UpdateModal = ({ isOpen, onRequestClose, dataUpdate }) => {
	const [updateCompany] = useUpdateCompanyMutation();
	const {
		handleSubmit,
		control,
		reset,
		formState: { errors }
	} = useForm({
		values: dataUpdate && {
			company_name: dataUpdate.company_name,
			company_type: dataUpdate.company_type,
			company_size: dataUpdate.company_size,
			tax_code: dataUpdate.tax_code,
			address: dataUpdate.address,
			contact_name: dataUpdate.contact_name,
			contact_phone: dataUpdate.contact_phone,
			position: dataUpdate.position
		},
		resolver: yupResolver(CompanySchema)
	});

	const onSubmit = ({ banner, logo, ...data }) => {
		const formData = new FormData();

		Object.entries(data).forEach(([key, value]) => {
			formData.append(key, value);
		});
		formData.append('files', logo);
		formData.append('files', banner);

		updateCompany({
			id: dataUpdate.id,
			payload: formData
		})
			.unwrap()
			.then((r) => {
				if (r.status == 200) {
					toast.success('Sửa thành công');
					return;
				}
			})
			.catch((err) => {
				toast.error(err.data.message);
			});
		onRequestClose();
		reset();
	};

	return (
		<Modal isOpen={isOpen} onRequestClose={onRequestClose}>
			<form onSubmit={handleSubmit(onSubmit)}>
				<ValidationTextFieldsControl name='company_name' label='Tên công ty' control={control} />
				<SelectVariantsFieldControl
					name='company_type'
					label='Loại hình công ty'
					control={control}
					options={CompanyTypeArray.map((value) => {
						return {
							value: value.value,
							label: value.label
						};
					})}
				/>
				<SelectVariantsFieldControl
					name='company_size'
					label='Quy mô công ty'
					control={control}
					options={CompanySize.map((value) => {
						return {
							value: value.value,
							label: value.label
						};
					})}
				/>
				<ValidationTextFieldsControl name='tax_code' label='Mã số thuế' control={control} />
				<ValidationTextFieldsControl name='address' label='Đia chỉ' control={control} />
				<ValidationTextFieldsControl name='contact_name' label='Tên người liên hệ' control={control} />
				<ValidationTextFieldsControl name='contact_phone' label='Số điện thoại người liên hệ' control={control} />
				<ValidationTextFieldsControl name='position' label='Chức danh' control={control} />
				<div style={{ display: 'flex', justifyContent: 'flex-end', marginTop: 8 }}>
					<Button type='submit' variant='contained'>
						Sửa
					</Button>
				</div>
			</form>
		</Modal>
	);
};

export default UpdateModal;
