import React from 'react';
import Modal from '~/Core/components/common/Modal';
import ValidationTextFieldsControl from '~/Core/components/common/FormControl/ValidationTextFieldsControl';
import { useForm, Controller } from 'react-hook-form';
import Button from '@mui/material/Button';
import { useCreateServiceMutation } from '~/App/providers/apis/serviceApi';
import { toast } from 'react-toastify';
import { yupResolver } from '@hookform/resolvers/yup';
import SelectVariantsFieldControl from '~/Core/components/common/FormControl/SelectVariantsFieldControl';
import { jobPositionCategorySchema } from '~/App/schemas/jobPositionCategorySchema';
import { useGetAllServiceTypeQuery } from '~/App/providers/apis/serviceTypeApi';
import { useGetAllBenefitsQuery } from '~/App/providers/apis/benefits';
const CreateModal = ({ isOpen, onRequestClose }) => {
	const [createBenefits] = useCreateServiceMutation();
    const {data:listServiceType} = useGetAllServiceTypeQuery()
    const {data:listBenefits} = useGetAllBenefitsQuery()
	const {
		handleSubmit,
		control,
		formState: { errors }
	} = useForm({
		resolver: yupResolver(jobPositionCategorySchema)
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
	};

	return (
		<Modal isOpen={isOpen} onRequestClose={onRequestClose}>
			<form onSubmit={handleSubmit(onSubmit)}>
				<ValidationTextFieldsControl name='name' label='Tên dịch vụ' control={control} />
                <SelectVariantsFieldControl
					options={
						listServiceType &&
						listServiceType?.data?.map((item) => ({
							label: item.name,
							value: item.id
						}))
					}
					control={control}
					label='Chọn loại hình dịch vụ'
					name='service_type_id'
				/>
				<ValidationTextFieldsControl name='price_list' label='Danh sách giá' control={control} />
                <SelectVariantsFieldControl
					options={
						listBenefits &&
						listBenefits?.data?.map((item) => ({
							label: item.name,
							value: item.id
						}))
					}
					control={control}
					label='lợi ích'
					name='benefits_id'
				/>
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