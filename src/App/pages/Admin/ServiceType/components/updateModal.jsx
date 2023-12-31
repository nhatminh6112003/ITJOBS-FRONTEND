import React from 'react';
import Modal from '~/Core/components/common/Modal';
import ValidationTextFieldsControl from '~/Core/components/common/FormControl/ValidationTextFieldsControl';
import { useForm, Controller } from 'react-hook-form';
import Button from '@mui/material/Button';
import { useUpdateServiceTypeMutation } from '~/App/providers/apis/serviceTypeApi';
import { toast } from 'react-toastify';
import { yupResolver } from '@hookform/resolvers/yup';
import { jobPositionCategorySchema } from '~/App/schemas/jobPositionCategorySchema';
import { serviceTypeSchema } from '~/App/schemas/serviceTypeSchema';

const UpdateModal = ({ isOpen, onRequestClose, dataUpdate }) => {
	const [updateBenefits] = useUpdateServiceTypeMutation();
	const {
		handleSubmit,
		control,
		reset,
		formState: { errors }
	} = useForm({
		values: dataUpdate && {
			name: dataUpdate.name
		},
		resolver: yupResolver(serviceTypeSchema)
	});

	const onSubmit = (data) => {
		updateBenefits({
			id: dataUpdate.id,
			payload: data
		})
			.unwrap()
			.then((r) => {
				if (r.status == 200) {
					toast.success('Sửa thành công');
					return;
				}
			});
		onRequestClose();
		reset();
	};

	return (
		<Modal isOpen={isOpen} onRequestClose={onRequestClose}>
			<form onSubmit={handleSubmit(onSubmit)}>
				<ValidationTextFieldsControl name='name' label='Tên loại dịch vụ' control={control} />
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
