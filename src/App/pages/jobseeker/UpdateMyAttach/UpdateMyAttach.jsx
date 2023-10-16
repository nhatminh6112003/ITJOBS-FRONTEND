import React, { useState } from 'react';
import styles from '../MyAttach/myAttach.module.css';
import classNames from 'classnames/bind';
import { useGetAllDistrictsQuery } from '~/App/providers/apis/districtsApi';
import { useGetAllProvincesQuery } from '~/App/providers/apis/listProvincesApi';
import { useGetAllProfessionQuery } from '~/App/providers/apis/professionApi';
import { useGetAllWorkTypeQuery } from '~/App/providers/apis/workTypeApi';
import { useGetAllJobWelfareQuery } from '~/App/providers/apis/jobWelfareApi';
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
	const { data: listJobWelfare } = useGetAllJobWelfareQuery({});
	const { data: listProfession } = useGetAllProfessionQuery({});
	const { data: listWorkType } = useGetAllWorkTypeQuery();
	const { data: listProvinces } = useGetAllProvincesQuery();
	const { data: my_attach } = useGetOneMyAttachQuery(id);
	const [updateMyAttach] = useUpdateMyAttachMutation();
	const { control, handleSubmit, watch, setValue, reset } = useForm({
		resolver: yupResolver(myAttachSchema)
	});
	const user_account_id = useSelector((state) => state.auth?.user?.id);
	const [selectedValue, setSelectedValue] = useState(1);
	const navigate = useNavigate();
	const selectedProvince = watch('provinces', null);
	const { data: listDistricts } = useGetAllDistrictsQuery(
		{
			params: {
				depth: 2
			},
			code: selectedProvince
		},
		{
			skip: !selectedProvince
		}
	);

	const onUpdateAttach = (data) => {
		const work_type_id = [];
		for (let i = 1; i <= 4; i++) {
			const key = `work_type_id_${i}`;
			if (data[key]) {
				work_type_id.push(data[key]);
			}
			delete data[key];
		}
		const body = {
			...data,
			work_type_id,
			resume_active: Number(selectedValue),
			user_account_id
		};
		updateMyAttach({
			id,
			payload: body
		})
			.unwrap()
			.then((r) => {
				console.log(r);
				if (r.status == 200) {
					toast.success(r?.message);
					return;
				}
			});
	};
	return (
		<div>
			<section className={sx('cb-section')}>
				<div className={cx('container')}>
					<div className={cx('cb-title', 'cb-title-center', 'm-0')}>
						<h2 style={{ marginTop: 20 }}>Tạo Hồ Sơ Đính Kèm</h2>
					</div>
					<div className={sx('main-quick-upload-resume', 'created-now-wrap')}>
						<UpdateMyAttachForm
							cx={cx}
							sx={sx}
							onUpdateAttach={onUpdateAttach}
							id={id}
							DegreeArray={DegreeArray}
							listJobWelfare={listJobWelfare}
							listProfession={listProfession}
							listWorkType={listWorkType}
							listProvinces={listProvinces}
							listDistricts={listDistricts}
							setValue={setValue}
							reset={reset}
							handleSubmit={handleSubmit}
							control={control}
							resume_desired_job={my_attach?.resume_desired_job}
							resume_title={my_attach?.resume_title}
							setSelectedValue={setSelectedValue}
							selectedValue={selectedValue}
						/>
					</div>
				</div>
			</section>
		</div>
	);
};

export default UpdateMyAttach;
