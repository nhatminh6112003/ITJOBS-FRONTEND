import React from 'react';
import Modal from '~/Core/components/common/Modal';
import ValidationTextFieldsControl from '~/Core/components/common/FormControl/ValidationTextFieldsControl';
import { useForm, Controller } from 'react-hook-form';
import Button from '@mui/material/Button';
import { useUpdateProfessionMutation } from '~/App/providers/apis/professionApi';
import { toast } from 'react-toastify';
import { yupResolver } from '@hookform/resolvers/yup';
import { professionSchema } from '~/App/schemas/professionSchema';

const UpdateModal = ({ isOpen, onRequestClose, dataUpdate }) => {
	const [updateProfession] = useUpdateProfessionMutation();
	const {
		handleSubmit,
		control,
		formState: { errors }
	} = useForm({
		resolver: yupResolver(professionSchema),
		values: dataUpdate && {
			name: dataUpdate.name
		}
	});

	const onSubmit = (data) => {
		updateProfession({
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
	};

	return (
		<Modal isOpen={isOpen} onRequestClose={onRequestClose}>
			<form onSubmit={handleSubmit(onSubmit)}>
				<ValidationTextFieldsControl name='name' label='Tên danh mục' control={control} />
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
