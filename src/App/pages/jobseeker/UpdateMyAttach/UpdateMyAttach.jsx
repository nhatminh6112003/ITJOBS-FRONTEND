import React, { useState } from 'react';
import styles from '../MyAttach/myAttach.module.css';
import classNames from 'classnames/bind';

import { myAttachSchema } from '~/App/schemas/myAttachSchema';
import { yupResolver } from '@hookform/resolvers/yup';
import { useForm } from 'react-hook-form';
import { DegreeArray } from '~/App/constants/degreeArray';
import { useNavigate, useParams } from 'react-router-dom';
import UpdateMyAttachForm from './Components/UpdateMyAttachForm';
import { useGetOneMyAttachQuery, useUpdateMyAttachMutation } from '~/App/providers/apis/myAttachApi';
import { useSelector } from 'react-redux';
import { toast } from 'react-toastify';

const sx = classNames.bind(styles);
const UpdateMyAttach = ({ cx }) => {
	const { id } = useParams();
	const { data: my_attach } = useGetOneMyAttachQuery(id);
	const [updateMyAttach] = useUpdateMyAttachMutation();
	const { control, handleSubmit, watch, setValue, reset } = useForm({
		// resolver: yupResolver(myAttachSchema)
	});
	const user_account_id = useSelector((state) => state.auth?.user?.id);
	// const [selectedValue, setSelectedValue] = useState(my_attach && my_attach?.resume_active);

	const navigate = useNavigate();

	const onUpdateAttach = ({ provincesMyAttach, districtsMyAttach, profession_id, welfare_id, ...data }) => {
		const work_type_id = [];
		for (let i = 1; i <= 4; i++) {
			const key = `work_type_id_${i}`;
			if (data[key]) {
				work_type_id.push(data[key]);
			}
			delete data[key];
		}
		const formData = new FormData();

		Object.entries(data).forEach(([key, value]) => {
			formData.append(key, value);
		});

		formData.append('profession_id', JSON.stringify(profession_id));
		formData.append('welfare_id', JSON.stringify(welfare_id));
		formData.append('work_type_id', JSON.stringify(work_type_id));
		formData.append('user_account_id', user_account_id);
		formData.append('provinces', provincesMyAttach);
		formData.append('districts', districtsMyAttach);
		updateMyAttach({
			id,
			payload: formData
		})
			.unwrap()
			.then((response) => {
				if (response.status == 200) {
					toast.success(response?.message);
					navigate('/jobseekers/dashboard');
					return;
				}
			});
	};
	return (
		<div>
			<section className={sx('cb-section')}>
				<div className={cx('container')}>
					<div className={cx('cb-title', 'cb-title-center', 'm-0')}>
						<h2 style={{ marginTop: 20 }}>Chỉnh Sửa Hồ Sơ Đính Kèm</h2>
					</div>
					<div className={sx('main-quick-upload-resume', 'created-now-wrap')}>
						<UpdateMyAttachForm
							cx={cx}
							sx={sx}
							onUpdateAttach={onUpdateAttach}
							degreeArray={DegreeArray}
							setValue={setValue}
							reset={reset}
							handleSubmit={handleSubmit}
							control={control}
							resume_desired_job={my_attach?.resume_desired_job}
							resume_title={my_attach?.resume_title}
							watch={watch}
							my_attach={my_attach}
						/>
					</div>
				</div>
			</section>
		</div>
	);
};

export default UpdateMyAttach;
