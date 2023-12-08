import React, { useEffect } from 'react';
import Modal from '~/Core/components/common/Modal';
import ValidationTextFieldsControl from '~/Core/components/common/FormControl/ValidationTextFieldsControl';
import { useForm } from 'react-hook-form';
import Button from '@mui/material/Button';
import { toast } from 'react-toastify';
import { yupResolver } from '@hookform/resolvers/yup';
import { jobWelfareSchema } from '~/App/schemas/jobWelfareSchema';
import { useUpdateFeedBackMutation } from '~/App/providers/apis/feedBackApi';
import { feedBackSchema } from '~/App/schemas/feedBackSchema';
import SelectVariantsFieldControl from '~/Core/components/common/FormControl/SelectVariantsFieldControl';
import { feedBackEnum } from '~/App/constants/feedBackEnum';

const UpdateModal = ({ isOpen, onRequestClose, dataUpdate }) => {
	const [updateFeedBack] = useUpdateFeedBackMutation();
	const {
		handleSubmit,
		control,
		reset,
		formState: { errors }
	} = useForm({
		values: dataUpdate && {
			email: dataUpdate.email,
			reason: dataUpdate.reason,
			job_url: dataUpdate.job_url
		},
		resolver: yupResolver(feedBackSchema)
	});
	useEffect(() => {
		console.log(dataUpdate);
	}, [dataUpdate]);
	const onSubmit = (data) => {
		updateFeedBack({
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
		reset()
	};

	return (
		<Modal isOpen={isOpen} onRequestClose={onRequestClose}>
			<form onSubmit={handleSubmit(onSubmit)}>
				<ValidationTextFieldsControl name='email' label='Email' control={control} />
				<ValidationTextFieldsControl name='job_url' label='job_url' control={control} />
				<SelectVariantsFieldControl
					name='reason'
					label='Lý do'
					control={control}
					options={feedBackEnum?.map((item) => ({
						label: item.label,
						value: item.value
					}))}
				/>
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
