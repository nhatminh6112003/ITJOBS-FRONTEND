import React, { useEffect } from 'react';
import Modal from '~/Core/components/common/Modal';
import ValidationTextFieldsControl from '~/Core/components/common/FormControl/ValidationTextFieldsControl';
import { useForm, Controller } from 'react-hook-form';
import Button from '@mui/material/Button';
import { useGetOneServiceQuery, useUpdateServiceMutation } from '~/App/providers/apis/serviceApi';
import { toast } from 'react-toastify';
import { yupResolver } from '@hookform/resolvers/yup';
import { professionSchema } from '~/App/schemas/professionSchema';
import { useGetAllBenefitsQuery } from '~/App/providers/apis/benefits';
import { useGetAllServiceTypeQuery } from '~/App/providers/apis/serviceTypeApi';
import SelectVariantsFieldControl from '~/Core/components/common/FormControl/SelectVariantsFieldControl';
import TextAreaFieldControl from '~/Core/components/common/FormControl/TextAreaFieldControl';
import SelectMultipleFieldControl from '~/Core/components/common/FormControl/SelectMultipleFieldControl';
import { serviceSchema } from '~/App/schemas/serviceSchema';
const UpdateModal = ({ isOpen, onRequestClose, dataUpdate, listBenefits }) => {
	const { data: listServiceType } = useGetAllServiceTypeQuery();
	const { data: serviceDetail } = useGetOneServiceQuery(dataUpdate?.id || '');
	const [updateService] = useUpdateServiceMutation();
	const {
		handleSubmit,
		control,
		formState: { errors },
		reset
	} = useForm({
		values: dataUpdate && {
			name: dataUpdate.name,
			service_type_id: dataUpdate.service_type_id,
			price: dataUpdate.price,
			description: dataUpdate.description
		},
		resolver: yupResolver(serviceSchema)
	});
	const onSubmit = (data) => {
		updateService({
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
				<ValidationTextFieldsControl name='price' label='Giá' control={control} />
				<SelectMultipleFieldControl
					label='Lợi ích'
					options={listBenefits?.data?.map((value) => {
						return {
							label: value.name,
							value: value.id
						};
					})}
					placeholder='Chọn'
					maxItems={1}
					control={control}
					name='benefit_ids'
					selectedValues={serviceDetail?.serviceBenefits?.map((item) => item.benefit?.id)}
				/>
				<TextAreaFieldControl name='description' label='Mô tả lợi ích' control={control} />
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
