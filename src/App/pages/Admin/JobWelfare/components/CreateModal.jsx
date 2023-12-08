import React from 'react';
import Modal from '~/Core/components/common/Modal';
import ValidationTextFieldsControl from '~/Core/components/common/FormControl/ValidationTextFieldsControl';
import { useForm, Controller } from 'react-hook-form';
import Button from '@mui/material/Button';
import { useCreateJobWelfareMutation } from '~/App/providers/apis/jobWelfareApi';
import { toast } from 'react-toastify';
import { yupResolver } from '@hookform/resolvers/yup';
import { jobWelfareSchema } from '~/App/schemas/jobWelfareSchema';
const CreateModal = ({ isOpen, onRequestClose }) => {
	const [createJobPositionCategory] = useCreateJobWelfareMutation();
	const {
		handleSubmit,
		control,
		reset,
		formState: { errors }
	} = useForm({
		resolver: yupResolver(jobWelfareSchema)
	});

	const onSubmit = (data) => {
		createJobPositionCategory(data)
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
				<ValidationTextFieldsControl name='welfare_type' label='Phúc Lợi' control={control} />
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
