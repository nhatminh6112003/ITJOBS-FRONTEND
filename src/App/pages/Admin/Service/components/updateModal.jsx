import React from 'react';
import Modal from '~/Core/components/common/Modal';
import ValidationTextFieldsControl from '~/Core/components/common/FormControl/ValidationTextFieldsControl';
import { useForm, Controller } from 'react-hook-form';
import Button from '@mui/material/Button';
import { useUpdateServiceMutation } from '~/App/providers/apis/serviceApi';
import { toast } from 'react-toastify';
import { yupResolver } from '@hookform/resolvers/yup';
import { professionSchema } from '~/App/schemas/professionSchema';
import { useGetAllBenefitsQuery } from '~/App/providers/apis/benefits';
import { useGetAllServiceTypeQuery } from '~/App/providers/apis/serviceTypeApi';
import SelectVariantsFieldControl from '~/Core/components/common/FormControl/SelectVariantsFieldControl'
const UpdateModal = ({ isOpen, onRequestClose, dataUpdate }) => {
	const { data: listBenefits } = useGetAllBenefitsQuery();
	const { data: listServiceType } = useGetAllServiceTypeQuery();
	const [updateService] = useUpdateServiceMutation();
	const {
		handleSubmit,
		control,
		formState: { errors }
	} = useForm({
		resolver: yupResolver(professionSchema),
		values: dataUpdate && {
			name: dataUpdate.name,
			service_type_id: dataUpdate.service_type_id,
			price_list: dataUpdate.price_list,
			benefits: dataUpdate.benefits,
		}
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
	};

	return (
		<Modal isOpen={isOpen} onRequestClose={onRequestClose}>
			<form onSubmit={handleSubmit(onSubmit)}>
				<ValidationTextFieldsControl name='name' label='Tên nghề nghiệp' control={control} />
				<SelectVariantsFieldControl
					options={listServiceType?.data?.map((item) => ({
						label: item.name,
						value: item.id
					}))}
					control={control}
					label='Chọn loại hình dịch vụ'
					name='service_type_id'
				/>
                <ValidationTextFieldsControl name='price_list' label='danh sách giá' control={control} />
				<SelectVariantsFieldControl
					options={listBenefits?.data?.map((item) => ({
						label: item.name,
						value: item.id
					}))}
					control={control}
					label='Lợi ích'
					name='benefits_id'
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
