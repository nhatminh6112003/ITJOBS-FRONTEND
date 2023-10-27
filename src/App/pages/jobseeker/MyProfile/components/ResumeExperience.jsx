import React, { Fragment, useEffect, useState } from 'react';
import Widget from './Widget';
import { yupResolver } from '@hookform/resolvers/yup';
import ResumeModal from './ResumeModal';
import InputFieldControl from '~/Core/components/common/FormControl/InputFieldControl';
import { useForm } from 'react-hook-form';
import { useSelector } from 'react-redux';
import { toast } from 'react-toastify';
import Tips from '~/Core/components/common/Modal/Tips';
import useModal from '~/App/hooks/useModal';
import NoContent from './NoContent';
import {
	useCreateResumeExperienceMutation,
	useDeleteResumeExperienceMutation,
	useGetAllResumeExperienceQuery,
	useUpdateResumeExperienceMutation,
	useLazyGetOneResumeExperienceQuery
} from '~/App/providers/apis/resumeExperienceApi';

import { resumeExperienceSchema } from '~/App/schemas/resumeExperienceSchema';

import ConfirmDialog from '~/Core/components/common/Modal/ConfirmDialog';
import TextAreaFieldControl from '~/Core/components/common/FormControl/TextAreaFieldControl';
import formatDate from '~/Core/utils/formatDate';

import moment from 'moment';
import CheckBoxFieldControl from '~/Core/components/common/FormControl/CheckBoxFieldControl';
import { useGetAllWorkTypeQuery } from '~/App/providers/apis/workTypeApi';
import SelectFieldControl from '~/Core/components/common/FormControl/SelectFieldControl';
const ResumeExperience = ({ className: cx, isShowing, toggle }) => {
	const [modalConfirmState, setModalConfirmState] = useState({ open: false, payload: null });
	const resume = useSelector((state) => state.auth?.user?.resume);
	const [updateId, setUpdateId] = useState(null);

	//toggle tips
	const { isShowing: showTips, toggle: toggleTips } = useModal({
		t_resume_experience: false
	});

	//Gọi api rtk query
	const { data: resumeExperience, refetch } = useGetAllResumeExperienceQuery(resume?.id);
	const [trigger, result] = useLazyGetOneResumeExperienceQuery();
	const [createReferMutation] = useCreateResumeExperienceMutation();
	const [deleteReferMutation] = useDeleteResumeExperienceMutation();
	const [updateReferMutation] = useUpdateResumeExperienceMutation();

	const { data: listWorkType } = useGetAllWorkTypeQuery();

	const { control, handleSubmit, reset, watch } = useForm({
		resolver: yupResolver(resumeExperienceSchema)
	});
	const {
		control: updateControl,
		handleSubmit: handleUpdateSubmit,
		reset: updateReset
	} = useForm({
		resolver: yupResolver(resumeExperienceSchema)
	});

	const onCreateSubmit = async (data) => {
		toggle('resume_experience');
		createReferMutation({
			...data,
			resume_id: resume?.id
		})
			.unwrap()
			.then((r) => {
				if (r.status == 200) {
					toast.success(r?.message);
					reset();
					return;
				}
			})
			.catch((err) => {
				toast.error('Đã có lỗi xảy ra');
			});
	};

	const onUpdateSubmit = async (data) => {
		updateReferMutation({
			id: updateId,
			payload: data
		})
			.unwrap()
			.then((r) => {
				if (r.status == 200) {
					toast.success(r?.message);
					toggle('update_resume_experience');
				}
			});
	};

	const onOpenModalUpdate = (id) => {
		setUpdateId(id);
		trigger(id);
		toggle('update_resume_experience');
	};

	const handleConfirmDelete = async (id) => {
		deleteReferMutation(id)
			.unwrap()
			.then((r) => {
				if (r.status == 200) {
					toast.success(r?.message);
				}
			});
		setModalConfirmState({ open: false, payload: null });
	};

	useEffect(() => {
		updateReset({
			rexp_title: result?.data?.rexp_title,
			rexp_company: result?.data?.rexp_company,
			rexp_worktype_id: result?.data?.rexp_worktype_id,
			rexp_form: moment(result?.data?.rexp_form).format('YYYY-MM-DD'),
			rexp_to: moment(result?.data?.rexp_to).format('YYYY-MM-DD'),
			rexp_workdesc: result?.data?.rexp_workdesc,
			experCurrent: result?.data?.experCurrent,
			resume_id: result?.data?.resume_id
		});
	}, [updateReset, result]);

	return (
		<Fragment>
			<Widget
				action='ADD'
				title='Kinh nghiệm làm việc'
				className={cx('widget', 'widget-20')}
				id='t-resume-section'
				status={resumeExperience?.length > 0 ? 'success' : 'error'}
				onOpenResume={() => toggle('resume_experience')}
				onOpenTipSlide={() => toggleTips('t_resume_experience')}
				avatar='https://static.careerbuilder.vn/themes/careerbuilder/img/dash-board/i4.png'>
				<div className={cx('content')}>
					<div className={cx('list-references')}>
						{resumeExperience?.length > 0 ? (
							resumeExperience?.map((item) => (
								<div className={cx('item')}>
									<div className={cx('title')}>
										<h4 className={cx('sub-title')}>{item?.rexp_title}</h4>
										<ul className={cx('list-action')}>
											<li className={cx('edit-link')}>
												<a href='javascript:void(0);' onClick={() => onOpenModalUpdate(item.id)}>
													<em className={cx('material-icons')}>create</em>
												</a>
											</li>
											<li className={cx('delete')}>
												<a
													href='javascript:void(0);'
													onClick={() => setModalConfirmState({ open: true, payload: item.id })}>
													<em className={cx('material-icons')}>highlight_off</em>
												</a>
											</li>
										</ul>
									</div>
									<div className={cx('content')}>
										<ul>
											<li>{item?.rexp_company}</li>
											<li>
												{formatDate(item.rexp_form)}-
												{item.experCurrent ? 'Hiện tại' : formatDate(item.rexp_to)}
											</li>
										</ul>
									</div>
								</div>
							))
						) : (
							<NoContent
								onClick={() => toggle('resume_experience')}
								title='Vui lòng thêm kinh nghiệm làm việc'
							/>
						)}
					</div>
				</div>
			</Widget>

			<ResumeModal
				isOpen={isShowing.resume_experience}
				hide={() => toggle('resume_experience')}
				className={cx}
				title='Kinh nghiệm làm việc'>
				<Form
					control={control}
					onSubmit={onCreateSubmit}
					handleSubmit={handleSubmit}
					cx={cx}
					watch={watch}
					listWorkType={listWorkType}
				/>
			</ResumeModal>

			<ResumeModal
				isOpen={isShowing.update_resume_experience}
				hide={() => toggle('update_resume_experience')}
				className={cx}
				title='Kinh nghiệm làm việc'>
				<Form
					control={updateControl}
					onSubmit={onUpdateSubmit}
					handleSubmit={handleUpdateSubmit}
					cx={cx}
					watch={watch}
					data={result?.data}
					listWorkType={listWorkType}
				/>
			</ResumeModal>
			<Tips
				isShowing={showTips.t_resume_experience}
				hide={() => toggleTips('t_resume_experience')}
				title='Để CV không chỉ Hay mà còn Đẹp trong mắt Nhà tuyển dụng'>
				<div className='swiper-wrapper'>
					Kinh nghiệm làm việc:
					<br />
					- Kinh nghiệm nên trình bày theo thứ tự gần nhất đến xa nhất.
					<br />
					- Nếu bạn có rất nhiều kinh nghiệm, hãy chọn lọc mô tả chi tiết những công việc có liên quan đến vị trí
					đang ứng tuyển
					<br />- Hãy đọc thật kĩ bản mô tả và yêu cầu công việc của Nhà tuyển dụng, sử dụng các từ khóa liên quan
					và trình bày những kinh nghiệm của bạn thân bằng những từ khóa đó, điều này sẽ giúp cho nhà tuyển dụng
					thấy độ phù hợp của bạn với công việc hoặc vị trí đó. Tất nhiên hãy luôn đảm bảo sự trung thực trong quá
					trình viết.
					<br />- Đừng quên, thể hiện năng lực thông qua các thành tích của từng công việc bạn đã trải qua nhé.
				</div>
			</Tips>
			<ConfirmDialog
				open={modalConfirmState.open}
				onConfirm={() => handleConfirmDelete(modalConfirmState.payload)}
				onCancel={() => setModalConfirmState({ open: false, payload: null })}
			/>
		</Fragment>
	);
};

const Form = ({ onSubmit, handleSubmit, control, cx, watch, data, isShowing, listWorkType }) => {
	const [isDisabled, setIsDisabled] = useState(false);
	const handleCheckboxChange = (event) => {
		setIsDisabled(event.target.checked);
	};
	return (
		<form name='references-form' id='references-form' onSubmit={handleSubmit(onSubmit)}>
			<div className={cx('form-group', 'row')}>
				<div className={cx('col-lg-6')}>
					<div className={cx('input-group')}>
						<InputFieldControl control={control} name='rexp_title' id='rexp_title' label='Vị trí / Chức danh' />
					</div>
				</div>
				<div className={cx('col-lg-6')}>
					<div className={cx('input-group')}>
						<InputFieldControl control={control} name='rexp_company' id='rexp_company' label='Công ty' />
					</div>
				</div>
			</div>
			<div className={cx('form-group', 'row')}>
				<div className={cx('col-lg-12')}>
					<div className={cx('input-group')}>
						<SelectFieldControl
							options={
								listWorkType &&
								listWorkType?.map((item) => ({
									label: item.name,
									value: item.id
								}))
							}
							control={control}
							label='Phương thức công việc'
							name='rexp_worktype_id'
						/>
					</div>
				</div>
			</div>

			<div className={cx('form-group', 'row')}>
				<div className={cx('col-lg-6')}>
					<div className={cx('input-group')}>
						<InputFieldControl
							control={control}
							name='rexp_form'
							id='rexp_form'
							label='Thời gian làm việc'
							type='date'
						/>
					</div>
				</div>
				<div className={cx('col-lg-6')}>
					<div className={cx('input-group')}>
						<InputFieldControl
							control={control}
							name='rexp_to'
							id='rexp_to'
							label='Đến'
							type='date'
							disabled={isDisabled}
						/>
					</div>
				</div>
			</div>

			<div className={cx('row')}>
				<div className={cx('col-lg-12')}>
					<div style={{ display: 'flex', alignItems: 'center', gap: 6 }}>
						<CheckBoxFieldControl
							name={'experCurrent'}
							control={control}
							label={'Hiện tại'}
							defaultChecked={data?.experCurrent === 1 ? true : false}
							onChange={handleCheckboxChange}
						/>
					</div>
				</div>
			</div>
			<div className={cx('form-group', 'row')}>
				<div className={cx('col-lg-12')}>
					<div className={cx('input-group')}>
						<TextAreaFieldControl
					    	minRows={1}
							control={control}
							name='rexp_workdesc'
							label='Mô tả công việc'
							id='rexp_workdesc'
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

export default ResumeExperience;
