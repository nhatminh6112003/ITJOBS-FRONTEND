import { yupResolver } from '@hookform/resolvers/yup';
import { Fragment, useEffect, useRef } from 'react';
import { useForm } from 'react-hook-form';
import { useSelector } from 'react-redux';
import { useGetAllDistrictsQuery } from '~/App/providers/apis/districtsApi';
import { useGetAllProvincesQuery } from '~/App/providers/apis/listProvincesApi';
import { resumeProfileSchema } from '~/App/schemas/resumeProfileSchema';
import InputFieldControl from '~/Core/components/common/FormControl/InputFieldControl';
import SelectFieldControl from '~/Core/components/common/FormControl/SelectFieldControl';
import Widget from '~/App/pages/jobseeker/MyProfile/components/widget';
import { useLocation } from 'react-router-dom';
import styles from '~/App/pages/jobseeker/MyProfile/MyProfile.module.css';
import classNames from 'classnames/bind';
import Utilities from './Utilities';

export const sw = classNames.bind(styles);

const Information = ({ className: cx, isShowing, toggle, onUpdateSubmit, resume_profile, reset }) => {
	const location = useLocation();

	useEffect(() => {
		reset({
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
	}, [reset, resume_profile]);
	useEffect(() => {
		const elementId = location.hash.substring(1);
		scrollToElement(elementId);
	}, [location]);

	const scrollToElement = (elementId) => {
		const container = document.getElementById(elementId); // Thay 'container' bằng ID của phần tử chứa

		const element = document.getElementById(elementId); // Thay 'elementId' bằng ID của phần tử con

		if (container && element) {
			const containerRect = container.getBoundingClientRect();
			const elementRect = element.getBoundingClientRect();

			if (elementRect.top < containerRect.top) {
				// Phần tử cần cuộn đến nằm phía trên phần tử chứa
				element.scrollIntoView({ behavior: 'smooth', block: 'start' });
			} else {
				// Phần tử cần cuộn đến nằm phía dưới phần tử chứa
				element.scrollIntoView({ behavior: 'smooth', block: 'end' });
			}
		}
	};

	return (
		<Fragment>
			<Utilities
				action='EDIT'
				className={sw('widget', 'widget-13')}
				onOpenResume={() => toggle('update_resume_profile')}
			/>
		</Fragment>
	);
};

export const Form = ({ onSubmit, handleSubmit, control, cx, listProvinces, listDistricts, resume_profile, user }) => {
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
								{ value: 'Male', label: 'Nam' },
								{ value: 'Female', label: 'Nữ' },
								{ value: 'Other', label: 'Khác' }
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
				<div className={cx('col-lg-6')}>
					<div className={cx('input-group')}>
						<div style={{ marginBottom: 20 }}>
							<label htmlFor='email'>Email</label>
							<input type='text' name='email	' id='email	' defaultValue={user?.email} disabled />
						</div>
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

export default Information;
