import React, { Fragment, useEffect } from 'react';
import Widget from './widget';
import { yupResolver } from '@hookform/resolvers/yup';
import ResumeModal from './ResumeModal';
import InputFieldControl from '~/Core/components/common/FormControl/InputFieldControl';
import SelectMultipleFieldControl from '~/Core/components/common/FormControl/SelectMultipleFieldControl';
import { useForm } from 'react-hook-form';
import { useSelector } from 'react-redux';
import { toast } from 'react-toastify';
import Tips from '~/Core/components/common/Modal/Tips';
import useModal from '~/App/hooks/useModal';
import {
	useLazyGetOneResumeDesiredJobQuery,
	useUpdateResumeDesiredJobMutation,
	useGetOneResumeDesiredJobQuery
} from '~/App/providers/apis/resumeDesiredJobApi';
import { useGetAllProvincesQuery } from '~/App/providers/apis/listProvincesApi';
import { LevelArray } from '~/App/constants/levelEnum';
import SelectFieldControl from '~/Core/components/common/FormControl/SelectFieldControl';
import CheckBoxFieldControl from '~/Core/components/common/FormControl/CheckBoxFieldControl';
import { useGetAllWorkTypeQuery } from '~/App/providers/apis/workTypeApi';
import { resumeDesiredJoSchema } from '~/App/schemas/resumeDesiredJoSchema';
import { useGetAllJobWelfareQuery } from '~/App/providers/apis/jobWelfareApi';
import { useGetAllProfessionQuery } from '~/App/providers/apis/professionApi';
import { useGetAllDistrictsQuery } from '~/App/providers/apis/districtsApi';
import formatVND from '~/Core/utils/formatVND';
import { listProvinces } from '~/App/constants/provincesData';
const ResumeDesiredJob = ({ className: cx, isShowing, toggle }) => {
	const resume = useSelector((state) => state.auth?.user?.resume);
	// const [updateId, setUpdateId] = useState(null);
	//toggle tips
	const { isShowing: showTips, toggle: toggleTips } = useModal({
		t_resume_desired_job: false
	});
	//Gọi api rtk query
	const [trigger, result] = useLazyGetOneResumeDesiredJobQuery();
	const { data: listWorkType } = useGetAllWorkTypeQuery();

	const { data: resume_desired_job } = useGetOneResumeDesiredJobQuery(resume?.id);
	const { data: listJobWelfare } = useGetAllJobWelfareQuery({});
	const { data: listProfession } = useGetAllProfessionQuery({});

	const [updateResumeDesiredJob] = useUpdateResumeDesiredJobMutation();

	const {
		control: updateControl,
		handleSubmit: handleUpdateSubmit,
		reset: updateReset,
		watch,
		setValue
	} = useForm({
		resolver: yupResolver(resumeDesiredJoSchema)
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
		const work_type_id = [];

		for (let i = 1; i <= 4; i++) {
			const key = `work_type_id_${i}`;
			if (data[key]) {
				work_type_id.push(data[key]);
			}
			delete data[key];
		}
		console.log(resume_desired_job?.resume_id);
		updateResumeDesiredJob({
			id: resume_desired_job?.resume_id,
			payload: {
				...data,
				work_type_id
			}
		})
			.unwrap()
			.then((r) => {
				if (r.status == 200) {
					toast.success(r?.message);
					toggle('update_resume_desired_job');
				}
			});
	};

	useEffect(() => {
		updateReset({
			salary_from: resume_desired_job?.salary_from,
			salary_to: resume_desired_job?.salary_to,
			position_id: resume_desired_job?.position_id,
			provinces: resume_desired_job?.provinces,
			districts: resume_desired_job?.districts,
			work_home: resume_desired_job?.work_home,
			profession_id: resume_desired_job?.profession_id,
			welfare_id: resume_desired_job?.welfare_id,
			work_type_id: resume_desired_job?.work_type_id
		});
		resume_desired_job?.work_type_id?.forEach((item) => {
			setValue(`work_type_id_${item}`, item);
		});
	}, [updateReset, resume_desired_job, setValue]);

	return (
		<Fragment>
			<Widget
				action='EDIT'
				title='Thông tin nghề nghiệp'
				className={cx('widget', 'widget-20')}
				id='widget-18'
				status={resume_desired_job && Object.keys(resume_desired_job)?.length > 0 ? 'success' : 'error'}
				onOpenResume={() => toggle('update_resume_desired_job')}
				onOpenTipSlide={() => toggleTips('t_resume_desired_job')}
				avatar='https://static.careerbuilder.vn/themes/careerbuilder/img/dash-board/i5.png'>
				<div className={cx('content')}>
					<div className={cx('list-references')}>
						{resume_desired_job && Object.keys(resume_desired_job)?.length > 0 && (
							<div className={cx('item')}>
								<div className={cx('content')}>
									<table>
										<tbody>
											<tr>
												<td style={{ fontWeight: 'bold', width: '200px', paddingBottom: '12px' }}>
													Cấp bậc mong muốn
												</td>
												<td
													style={{
														paddingBottom: '12px'
													}}>
													{LevelArray.map((value) => {
														const id = resume_desired_job?.position_id;
														const positionLabel = value.value === id ? value.label : null;
														return positionLabel;
													})}
												</td>
											</tr>
											<tr>
												<td style={{ fontWeight: 'bold', width: '200px', paddingBottom: '12px' }}>
													Mức lương
												</td>
												<td
													style={{
														paddingBottom: '12px'
													}}>
													{resume_desired_job?.salary_to && resume_desired_job?.salary_from && (
														<>
															{formatVND(resume_desired_job?.salary_from)} -{' '}
															{formatVND(resume_desired_job?.salary_to)} VND
														</>
													)}
												</td>
											</tr>
											<tr>
												{resume_desired_job?.work_type_id && (
													<>
														<td style={{ fontWeight: 'bold', width: '200px', paddingBottom: '12px' }}>
															Hình thức làm việc
														</td>
														<td
															style={{
																paddingBottom: '12px'
															}}>
															{listWorkType &&
																listWorkType
																	.filter((value) =>
																		resume_desired_job?.work_type_id?.includes(value.id)
																	)
																	.map((value, index, array) => {
																		const isLastItem = index === array.length - 1;
																		return (
																			<span key={value.id}>
																				{value.name}
																				{!isLastItem && ', '}
																			</span>
																		);
																	})}
														</td>
													</>
												)}
											</tr>
											<tr>
												{resume_desired_job?.welfare_id && (
													<>
														<td style={{ fontWeight: 'bold', width: '200px', paddingBottom: '12px' }}>
															Phúc lợi mong muốn
														</td>
														<td
															style={{
																paddingBottom: '12px'
															}}>
															{listJobWelfare?.data &&
																listJobWelfare?.data
																	?.filter((value) =>
																		resume_desired_job?.welfare_id?.includes(value.id)
																	)
																	.map((value, index, array) => {
																		const isLastItem = index === array.length - 1;
																		return (
																			<span key={value.id}>
																				{value.welfare_type}
																				{!isLastItem && ', '}
																			</span>
																		);
																	})}
															{/* {listJobWelfare?.data?.map((value) => {
															return resume_desired_job?.welfare_id?.map((item) => {
																return value.id === item ? value.welfare_type : null;
															});
														})} */}
														</td>
													</>
												)}
											</tr>
											<tr>
												{resume_desired_job?.profession_id && (
													<>
														<td style={{ fontWeight: 'bold', width: '200px', paddingBottom: '12px' }}>
															Ngành nghề
														</td>
														<td
															style={{
																paddingBottom: '12px'
															}}>
															{listProfession?.data &&
																listProfession?.data
																	?.filter((value) =>
																		resume_desired_job?.profession_id?.includes(value.id)
																	)
																	.map((value, index, array) => {
																		const isLastItem = index === array.length - 1;
																		return (
																			<span key={value.id}>
																				{value.name}
																				{!isLastItem && ', '}
																			</span>
																		);
																	})}
														</td>
													</>
												)}
											</tr>
											<tr>
												<td style={{ fontWeight: 'bold', width: '200px', paddingBottom: '12px' }}>
													Nơi làm việc
												</td>
												<td
													style={{
														paddingBottom: '12px'
													}}>
													{listProvinces?.map((province) => {
														const desiredProvinceId = resume_desired_job?.provinces;
														const positionLabel =
															province.code === desiredProvinceId ? province.name : null;
														return positionLabel;
													})}
												</td>
											</tr>
										</tbody>
									</table>
								</div>
							</div>
						)}
					</div>
				</div>
			</Widget>

			<ResumeModal
				isOpen={isShowing.update_resume_desired_job}
				hide={() => toggle('update_resume_desired_job')}
				className={cx}
				title='Thông tin nghề nghiệp'>
				<Form
					control={updateControl}
					onSubmit={onUpdateSubmit}
					handleSubmit={handleUpdateSubmit}
					cx={cx}
					resume_desired_job={resume_desired_job}
					listWorkType={listWorkType}
					listProvinces={listProvinces}
					listProfession={listProfession?.data}
					listJobWelfare={listJobWelfare?.data}
					listDistricts={listDistricts?.districts}
					work_home={resume_desired_job?.work_home}
					work_type_id={resume_desired_job?.work_type_id}
					setValue={setValue}
				/>
			</ResumeModal>
			<Tips
				isShowing={showTips.t_resume_desired_job}
				hide={() => toggleTips('t_resume_desired_job')}
				title='Để CV không chỉ Hay mà còn Đẹp trong mắt Nhà tuyển dụng'>
				<div className='swiper-wrapper'>
					Thông tin nghề nghiệp:
					<br />
					Hãy điền thật đầy đủ và chính xác những thông tin này để Nhà tuyển dụng có được cái nhìn tổng quan về
					mong muốn của bạn.
				</div>
			</Tips>
		</Fragment>
	);
};

const Form = ({
	onSubmit,
	handleSubmit,
	control,
	cx,
	listWorkType,
	listProvinces,
	listJobWelfare,
	listProfession,
	listDistricts,
	setValue,
	work_type_id,
	work_home,
	resume_desired_job
}) => {
	return (
		<form name='references-form' id='references-form' onSubmit={handleSubmit(onSubmit)}>
			<div className={cx('form-group', 'row')}>
				<div className={cx('col-lg-12')}>
					<div className={cx('input-group')}>
						<SelectFieldControl
							control={control}
							options={LevelArray}
							name='position_id'
							id='position_id'
							label='Cấp bậc mong muốn'
						/>
					</div>
				</div>
			</div>
			<div className={cx('form-group', 'row')}>
				<div className={cx('col-lg-4', 'input-group')}>
					<label for=''>Mức lương mong muốn</label>
				</div>
				<div className={cx('col-lg-4')}>
					<div className={cx('input-group')}>
						<InputFieldControl control={control} name='salary_from' id='salary_from' placeholder='Từ' />
					</div>
				</div>
				<div className={cx('col-lg-4')}>
					<div className={cx('input-group')}>
						<InputFieldControl control={control} name='salary_to' id='salary_to' placeholder='Đến' />
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
						<SelectMultipleFieldControl
							label='Phúc lợi mong muốn'
							options={listJobWelfare?.map((value) => {
								return {
									value: value.id,
									label: value.welfare_type
								};
							})}
							selectedValues={resume_desired_job?.welfare_id}
							placeholder='Chọn'
							maxItems={3}
							control={control}
							name='welfare_id'
						/>
					</div>
				</div>
				<div className={cx('col-lg-6')}>
					<div className={cx('input-group')}>
						<SelectMultipleFieldControl
							label='Ngành nghề'
							options={listProfession?.map((value) => {
								return {
									value: value.id,
									label: value.name
								};
							})}
							selectedValues={resume_desired_job?.profession_id}
							placeholder='Chọn'
							maxItems={3}
							control={control}
							name='profession_id'
						/>
					</div>
				</div>
			</div>

			<div className={cx('row')} style={{ marginBottom: 20 }}>
				<div className={cx('col-lg-4')}>
					<label for=''>Hình thức làm việc</label>
				</div>
				<div className={cx('col-lg-8')}>
					<div className={cx('row', 'form-of-work')}>
						{listWorkType?.map((listWork) => (
							<div className={cx('col-md-6')} key={listWork.id}>
								<CheckBoxFieldControl
									name={`work_type_id_${listWork.id}`}
									id='work_type_id'
									control={control}
									label={listWork.name}
									value={listWork.id}
									defaultChecked={work_type_id?.includes(listWork.id)}
									onChange={(e) => {
										if (e.target.checked) setValue(`work_type_id_${listWork.id}`, Number(e.target.value));
									}}
								/>
							</div>
						))}
					</div>
				</div>
			</div>
			<div className={cx('row', 'd-flex', 'align-items-center')} style={{ marginBottom: 20 }}>
				<div className={cx('col-lg-4')}>
					<label for=''>Phương thức công việc</label>
				</div>
				<div className={cx('col-lg-8')}>
					<CheckBoxFieldControl
						name='work_home'
						id='work_home'
						control={control}
						label='Work form home'
						value={false}
						defaultChecked={work_home === 1 ? true : false}
					/>
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

export default ResumeDesiredJob;
