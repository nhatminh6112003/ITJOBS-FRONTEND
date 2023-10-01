import React from 'react';
import Modal from '~/Core/components/common/Modal';
import ValidationTextFieldsControl from '~/Core/components/common/FormControl/ValidationTextFieldsControl';
import { useForm, Controller } from 'react-hook-form';
import Button from '@mui/material/Button';
import { useCreateProfessionMutation } from '~/App/providers/apis/professionApi';
import { toast } from 'react-toastify';
import { yupResolver } from '@hookform/resolvers/yup';
import { professionSchema } from '~/App/schemas/professionSchema';
import SelectVariantsFieldControl from '~/Core/components/common/FormControl/SelectVariantsFieldControl';
import { useGetAllJobPositionCategoryQuery } from '~/App/providers/apis/jobPositionCategoryApi';
import TextAreaFieldControl from '~/Core/components/common/FormControl/TextAreaFieldControl';
import InputFieldControl from '~/Core/components/common/FormControl/InputFieldControl';
const CreateModal = ({ isOpen, onRequestClose }) => {
	const [createProfession] = useCreateProfessionMutation();
	const { data: listProfessionCategory } = useGetAllJobPositionCategoryQuery();

	const {
		handleSubmit,
		control,
		reset,
		formState: { errors }
	} = useForm({
		resolver: yupResolver(professionSchema)
	});

	const onSubmit = (data) => {
		createProfession(data)
			.unwrap()
			.then((r) => {
				if (r.status == 200) {
					toast.success('Thêm thành công');
					return;
				}
			});
		reset();
		onRequestClose();
	};
	return (
		<Modal isOpen={isOpen} onRequestClose={onRequestClose}>
			<form onSubmit={handleSubmit(onSubmit)}>
				<ValidationTextFieldsControl name='name' label='Tên nghề nghiệp' control={control} />

				<SelectVariantsFieldControl
					options={
						listProfessionCategory &&
						listProfessionCategory?.data?.map((item) => ({
							label: item.name,
							value: item.id
						}))
					}
					control={control}
					label='Chọn danh mục nghề nghiệp'
					name='jobPositionCategoryId'
				/>

				<TextAreaFieldControl  control={control} name='desc' placeholder='Mô tả'/>
			{/* <InputFieldControl type='date' name='date' control={control}/> */}
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
