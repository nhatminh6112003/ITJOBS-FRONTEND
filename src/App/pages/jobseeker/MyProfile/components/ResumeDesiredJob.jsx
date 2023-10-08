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
const ResumeDesiredJob = ({ className: cx, isShowing, toggle }) => {
	const resume = useSelector((state) => state.auth?.user?.resume);
	// const [updateId, setUpdateId] = useState(null);
	//toggle tips
	const { isShowing: showTips, toggle: toggleTips } = useModal({
		t_resume_desired_job: false
	});
const {data:test}=useGetAllProvincesQuery()
	console.log("TCL: test", test)
	//Gọi api rtk query
	const [trigger, result] = useLazyGetOneResumeDesiredJobQuery();
	const { data: listWorkType } = useGetAllWorkTypeQuery();
	// const { data: listProvinces } = useGetAllProvincesQuery();
	const { data: resume_desired_job } = useGetOneResumeDesiredJobQuery(resume?.id);
	const [updateReferMutation] = useUpdateResumeDesiredJobMutation();
	
	const { control, handleSubmit, reset } = useForm({
		resolver: yupResolver(resumeDesiredJoSchema)
	});
	const {
		control: updateControl,
		handleSubmit: handleUpdateSubmit,
		reset: updateReset
	} = useForm({
		resolver: yupResolver(resumeDesiredJoSchema)
	});

	const onUpdateSubmit = async (data) => {
		updateReferMutation({
			id: resume_desired_job?.resume_id,
			payload: data
		})
			.unwrap()
			.then((r) => {
				if (r.status == 200) {
					toast.success(r?.message);
					toggle('update_resume_desired_job');
				}
			});
	};
	const onOpenModalUpdate = (id) => {
		// setUpdateId(id);
		// trigger(id);
		toggle('update_resume_desired_job');
	};

	useEffect(() => {
		updateReset({
			salary_from: result?.data?.salary_from,
			salary_to: result?.data?.salary_to,
			position_id: result?.data?.position_id,
			provinces: result?.data?.provinces,
			districts: result?.data?.districts,
			work_home: result?.data?.work_home,
			// provinces: result?.data?.provinces,
			// provinces: result?.data?.provinces,
			// provinces: result?.data?.provinces,
			resume_id: result?.data?.resume_id
		});
	}, [updateReset, result]);

	return (
		<Fragment>
			<Widget
				action='EDIT'
				title='Thông tin nghề nghiệp'
				className={cx('widget', 'widget-20')}
				id='t-resume-section'
				status={result ? 'success' : 'error'}
				onOpenResume={()=>toggle('update_resume_desired_job')}
				onOpenTipSlide={() => toggleTips('t_resume_desired_job')}
				avatar='https://static.careerbuilder.vn/themes/careerbuilder/img/dash-board/i5.png'>
				<div className={cx('content')}>
					<div className={cx('list-references')}>
						<div className={cx('item')}>
							<div className={cx('content')}>
								<ul>
									<li className={cx('title')}>{result?.data?.position_id}</li>
									<li className={cx('title')}>{result?.data?.salary_to}</li>
									<li>{result?.data?.salary_from}</li>
								</ul>
							</div>
						</div>
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
					listWorkType={listWorkType}
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

const Form = ({ onSubmit, handleSubmit, control, cx, listWorkType }) => {
	return (
		<form name='references-form' id='references-form' onSubmit={handleSubmit(onSubmit)}>
			<div className={cx('form-group', 'row')}>
				<div className={cx('col-lg-12')}>
					<div className={cx('input-group')}>
						<SelectFieldControl
							control={control}
							options={LevelArray}
							name='redu_degree'
							id='redu_degree'
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
						<InputFieldControl control={control} name='' id='' placeholder='Từ' type='text' />
					</div>
				</div>
				<div className={cx('col-lg-4')}>
					<div className={cx('input-group')}>
						<InputFieldControl control={control} name='' id='' placeholder='Đến' type='text' />
					</div>
				</div>
			</div>
			<div className={cx('form-group', 'row')}>
				<div className={cx('col-lg-12')}>
					<div className={cx('input-group')}>
				
						<SelectFieldControl
							control={control}
							options={LevelArray}
							name='redu_degree'
							id='redu_degree'
							label='Nơi làm việc mong muốn'
						/> 
					</div>
				</div>
			</div>
			<div className={cx('form-group', 'row')}>
				<div className={cx('col-lg-12')}>
					<div className={cx('input-group')}>
					<SelectMultipleFieldControl
														label='Phúc lợi mong muốn'
														options={LevelArray}
														placeholder='Phúc lợi mong muốn'
														maxItems={5}
														control={control}
														rules={{ required: 'Please select at least one option' }}
														name='redu_degree'
													/>
						{/* <SelectFieldControl
							control={control}
							options={LevelArray}
							name='redu_degree'
							id='redu_degree'
							label='Phúc lợi mong muốn'
						/> */}
					</div>
				</div>
			</div>
			<div className={cx('row')} style={{marginBottom:20}}>
				<div className={cx('col-lg-4')}>
					<label for=''>Hình thức làm việc</label>
				</div>
				<div className={cx('col-lg-8')}>
					<div className={cx('row', 'form-of-work')}>
						{listWorkType?.map((listWork) => (
							<div className={cx('col-md-6')}>
								<CheckBoxFieldControl name='' id='' control={control} label={listWork.name} />
							</div>
						))}
					</div>
				</div>
			</div>
			<div className={cx('row','d-flex','align-items-center')} style={{marginBottom:20}}>
				<div className={cx('col-lg-4')}>
					<label for=''>Phương thức công việc</label>
				</div>
				<div className={cx('col-lg-8')}>
					<CheckBoxFieldControl name='' id='' control={control} label='Work form home' />
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
