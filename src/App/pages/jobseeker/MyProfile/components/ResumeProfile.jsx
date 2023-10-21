import React, { Fragment, useEffect, useState } from 'react';
import Widget from './Widget';
import { yupResolver } from '@hookform/resolvers/yup';
import ResumeModal from './ResumeModal';
import InputFieldControl from '~/Core/components/common/FormControl/InputFieldControl';
import SelectMultipleFieldControl from '~/Core/components/common/FormControl/SelectMultipleFieldControl';
import { useForm } from 'react-hook-form';
import { useSelector } from 'react-redux';
import { toast } from 'react-toastify';
import Tips from '~/Core/components/common/Modal/Tips';
import useModal from '~/App/hooks/useModal';
import { useUpdateResumeProfileMutation, useGetOneResumeProfileQuery } from '~/App/providers/apis/resumeProfileApi';
import { useGetAllProvincesQuery } from '~/App/providers/apis/listProvincesApi';
import { LevelArray } from '~/App/constants/levelEnum';
import SelectFieldControl from '~/Core/components/common/FormControl/SelectFieldControl';
import CheckBoxFieldControl from '~/Core/components/common/FormControl/CheckBoxFieldControl';
import { useGetAllWorkTypeQuery } from '~/App/providers/apis/workTypeApi';
import { resumeProfileSchema } from '~/App/schemas/resumeProfileSchema';
import { useGetAllJobWelfareQuery } from '~/App/providers/apis/jobWelfareApi';
import { useGetAllProfessionQuery } from '~/App/providers/apis/professionApi';
import { useGetAllDistrictsQuery } from '~/App/providers/apis/districtsApi';
import formatVND from '~/Core/utils/formatVND';
const ResumeProfile = ({ className: cx, isShowing, toggle }) => {
	const id = useSelector((state) => state.auth?.user?.id);
	// const [updateId, setUpdateId] = useState(null);
	//toggle tips
	const { isShowing: showTips, toggle: toggleTips } = useModal({
		t_resume_profile: false
	});
	//Gọi api rtk query
	const { data: listWorkType } = useGetAllWorkTypeQuery();
	const { data: listProvinces } = useGetAllProvincesQuery();

	const { data: resume_profile } = useGetOneResumeProfileQuery(id);
	const { data: listJobWelfare } = useGetAllJobWelfareQuery({});
	const { data: listProfession } = useGetAllProfessionQuery({});

	const [updateProfileMutation] = useUpdateResumeProfileMutation();

	const {
		control: updateControl,
		handleSubmit: handleUpdateSubmit,
		reset: updateReset,
		watch,
		setValue
	} = useForm({
		resolver: yupResolver(resumeProfileSchema)
	});
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

	const onUpdateSubmit = async (data) => {
    console.log(data)
		updateProfileMutation({
			id: resume_profile?.resume_id,
			payload: {
				...data,
        user_id: id
			}
		})
			.unwrap()
			.then((r) => {
				if (r.status == 200) {
					toast.success(r?.message);
					toggle('update_resume_profile');
				}
			});
	};

	useEffect(() => {
		updateReset({
			firstname: resume_profile?.firstname,
			lastname: resume_profile?.lastname,
			gender: resume_profile?.gender,
			phone_number: resume_profile?.phone_number,
			birthday: resume_profile?.birthday,
			provinces: resume_profile?.provinces,
			districts: resume_profile?.districts,
			address: resume_profile?.address,
			marial_status: resume_profile?.marial_status
		});
	}, [updateReset, resume_profile]);

	return (
		<Fragment>
			<Widget
				action='EDIT'
				title='Thông tin cá nhân'
				className={cx('widget', 'widget-13')}
				id='personalinfo-section'
				status={resume_profile ? 'success' : 'error'}
				onOpenResume={() => toggle('update_resume_profile')}
				onOpenTipSlide={() => toggleTips('t_resume_profile')}
				avatar='https://static.careerbuilder.vn/themes/careerbuilder/img/dash-board/i5.png'>
				<div className={cx('table')}>
					<table>
						<tbody>
							{resume_profile?.firstname && (
								<tr>
									<td className={cx('title')}>Họ và Tên Lót</td>
									<td>{resume_profile?.firstname}</td>
								</tr>
							)}
							{resume_profile?.lastname && (
								<tr>
									<td className={cx('title')}>Tên</td>
									<td>{resume_profile?.lastname}</td>
								</tr>
							)}
							{resume_profile?.birthday && (
								<tr>
									<td className={cx('title')}>Ngày sinh</td>
									<td>{resume_profile?.birthday}</td>
								</tr>
							)}
							{resume_profile?.phone_number && (
								<tr>
									<td className={cx('title')}>Điện thoại</td>
									<td>{resume_profile?.phone_number}</td>
								</tr>
							)}
							{resume_profile?.marial_status !== null && (
								<tr>
									<td className={cx('title')}>Tình trạng hôn nhân</td>
									<td>{resume_profile?.marial_status === 0 ? "Độc thân" : "Đã kết hôn"}</td>
								</tr>
							)}
							{resume_profile?.provinces && (
								<tr>
									<td className={cx('title')}>Tỉnh/ Thành phố</td>
									<td>{resume_profile?.provinces}</td>
								</tr>
							)}
							{resume_profile?.districts && (
								<tr>
									<td className={cx('title')}>Quận/ Huyện</td>
									<td>{resume_profile?.districts}</td>
								</tr>
							)}
							{resume_profile?.address && (
								<tr>
									<td className={cx('title')}>Địa chỉ</td>
									<td>{resume_profile?.address}</td>
								</tr>
							)}
						</tbody>
					</table>
				</div>
			</Widget>

			<ResumeModal
				isOpen={isShowing.update_resume_profile}
				hide={() => toggle('update_resume_profile')}
				className={cx}
				title='Thông tin nghề nghiệp'>
				<Form
					control={updateControl}
					onSubmit={onUpdateSubmit}
					handleSubmit={handleUpdateSubmit}
					cx={cx}
					resume_profile={resume_profile}
					listWorkType={listWorkType}
					listProvinces={listProvinces}
					listProfession={listProfession?.data}
					listJobWelfare={listJobWelfare?.data}
					listDistricts={listDistricts?.districts}
					setValue={setValue}
				/>
			</ResumeModal>
			<Tips
				isShowing={showTips.t_resume_profile}
				hide={() => toggleTips('t_resume_profile')}
				title='Để CV không chỉ Hay mà còn Đẹp trong mắt Nhà tuyển dụng'>
				<div className='swiper-wrapper'>
					Thông tin cá nhân:
					<br />
					Hãy điền thật đầy đủ và chính xác những thông tin này để Nhà tuyển dụng có được cái nhìn tổng quan về
					mong muốn của bạn.
				</div>
			</Tips>
		</Fragment>
	);
};

const Form = ({ onSubmit, handleSubmit, control, cx, listProvinces, listDistricts }) => {
	return (
		<form name='references-form' id='references-form' onSubmit={handleSubmit(onSubmit)}>
			<div className={cx('form-group', 'row')}>
				<div className={cx('col-lg-6')}>
					<div className={cx('input-group')}>
						<InputFieldControl control={control} name='firstname' id='firstname' label='Họ và tên lót' />
					</div>
				</div>
				<div className={cx('col-lg-6')}>
					<div className={cx('input-group')}>
						<InputFieldControl control={control} name='lastname' id='lastname' label='Tên' />
					</div>
				</div>
			</div>
			<div className={cx('form-group', 'row')}>
				<div className={cx('col-lg-6')}>
					<div className={cx('input-group')}>
						<SelectFieldControl
							control={control}
							options={[
								{ value: "Male", label: 'Nam' },
								{ value: "Female", label: 'Nữ' },
                { value: "Other", label: "Khác"}
							]}
							name='gender'
							id='gender'
							label='Giới tính'
						/>
					</div>
				</div>
				<div className={cx('col-lg-6')}>
					<div className={cx('input-group')}>
						<InputFieldControl control={control} type='date' name='birthday' id='birthday' label='Ngày sinh' />
					</div>
				</div>
			</div>
			<div className={cx('form-group', 'row')}>
				<div className={cx('col-lg-6')}>
					<div className={cx('input-group')}>
						<SelectFieldControl
							control={control}
							options={listProvinces?.map((value) => {
								return {
									value: value.code,
									label: value.name
								};
							})}
							name='provinces'
							id='provinces'
							label='Nơi làm việc mong muốn'
						/>
					</div>
				</div>
				<div className={cx('col-lg-6')}>
					<div className={cx('input-group')}>
						<SelectFieldControl
							control={control}
							options={listDistricts?.map((value) => {
								return {
									value: value.code,
									label: value.name
								};
							})}
							placeholder='Chọn'
							name='districts'
							id='districts'
							label='Quận'
						/>
					</div>
				</div>
			</div>
			<div className={cx('form-group', 'row')}>
				<div className={cx('col-lg-6')}>
					<div className={cx('input-group')}>
						<InputFieldControl control={control} name='phone_number' id='phone_number' label='Số điện thoại' />
					</div>
				</div>
				<div className={cx('col-lg-6')}>
					<div className={cx('input-group')}>
						<InputFieldControl control={control} name='address' id='address' label='Địa chỉ' />
					</div>
				</div>
			</div>
			<div className={cx('form-group', 'row')}>
				<div className={cx('col-lg-6')}>
					<div className={cx('input-group')}>
						<SelectFieldControl
							control={control}
							options={[
								{ value: 0, label: 'Độc thân' },
								{ value: 1, label: 'Đã kết hôn' }
							]}
							name='marial_status'
							id='marial_status'
							label='Tình trạng hôn nhân'
						/>
					</div>
				</div>
			</div>
			<div className={cx('form-group', 'form-button')}>
				<div className={cx('button-save', 'button-center')}>
					<button className={cx('btn-gradient')} type='submit'>
						Lưu Lại
					</button>
				</div>
			</div>
		</form>
	);
};

export default ResumeProfile;
