import React from 'react';
import Modal from '~/Core/components/common/Modal';
import ValidationTextFieldsControl from '~/Core/components/common/FormControl/ValidationTextFieldsControl';
import { useForm, Controller } from 'react-hook-form';
import Button from '@mui/material/Button';
import { useUpdateCompanyMutation } from '~/App/providers/apis/companyApi';
import { toast } from 'react-toastify';
import { yupResolver } from '@hookform/resolvers/yup';
import { CompanySchema } from '~/App/schemas/companySchema';


const UpdateModal = ({ isOpen, onRequestClose, dataUpdate }) => {
	const [updateCompany] = useUpdateCompanyMutation();
	const {
		handleSubmit,
		control,
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

	const onSubmit = (data) => {
		updateCompany({
			id: dataUpdate.id,
			payload: data,
		})
			.unwrap()
			.then((r) => {
				if (r.status == 200) {
					toast.success('Sửa thành công');
					return;
				}
			});
		onRequestClose();
	};

	return (
		<Modal isOpen={isOpen} onRequestClose={onRequestClose}>
			<form onSubmit={handleSubmit(onSubmit)}>
				<ValidationTextFieldsControl name='company_name' label='Tên công ty' control={control} />
				<ValidationTextFieldsControl name='company_type' label='Loại hình công ty' control={control} />
				<ValidationTextFieldsControl name='company_size' label='Quy mô công ty' control={control} />
				<ValidationTextFieldsControl name='tax_code' label='Mã số thuế' control={control} />
				<ValidationTextFieldsControl name='address' label='Đia chỉ' control={control} />
				<ValidationTextFieldsControl name='contact_name' label='Tên người liên hệ' control={control} />
				<ValidationTextFieldsControl name='contact_phone' label='Số điện thoại người liên hệ' control={control} />
				<ValidationTextFieldsControl name='position' label='vị trí' control={control} />
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