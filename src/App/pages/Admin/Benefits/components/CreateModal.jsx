import React from 'react';
import Modal from '~/Core/components/common/Modal';
import ValidationTextFieldsControl from '~/Core/components/common/FormControl/ValidationTextFieldsControl';
import { useForm, Controller } from 'react-hook-form';
import Button from '@mui/material/Button';
import { useCreateBenefitsMutation } from '~/App/providers/apis/benefits';
import { toast } from 'react-toastify';
import { yupResolver } from '@hookform/resolvers/yup';
import { benefitSchema } from '~/App/schemas/benefitSchema';
const CreateModal = ({ isOpen, onRequestClose }) => {
	const [createBenefits] = useCreateBenefitsMutation();
	const {
		handleSubmit,
		control,
		reset,
		formState: { errors }
	} = useForm({
		resolver: yupResolver(benefitSchema)
	});

	const onSubmit = (data) => {
		createBenefits(data)
			.unwrap()
			.then((r) => {
				if (r.status == 200) {
					toast.success('Thêm thành công');
					return;
				}
			});
		onRequestClose();
		reset();
	};

	return (
		<Modal isOpen={isOpen} onRequestClose={onRequestClose}>
			<form onSubmit={handleSubmit(onSubmit)}>
				<ValidationTextFieldsControl name='name' label='Tên lợi ích' control={control} />
				<ValidationTextFieldsControl name='description' label='Mô tả' control={control} />
				<div style={{ display: 'flex', justifyContent: 'flex-end', marginTop: 8 }}>
					<Button type='submit' variant='contained'>
						Thêm mới
					</Button>
				</div>
			</form>
		</Modal>
	);
};

export default CreateModal;
