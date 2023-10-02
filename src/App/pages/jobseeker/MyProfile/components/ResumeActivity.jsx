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
	useCreateResumeActivityMutation,
	useDeleteResumeActivityMutation,
	useGetAllActivityQuery,
	useLazyGetOneResumeActivityQuery,
	useUpdateResumeActivityMutation
} from '~/App/providers/apis/resumeAcitivity';

import { resumeActivitySchema } from '~/App/schemas/resumeActivitySchema';

import ConfirmDialog from '~/Core/components/common/Modal/ConfirmDialog';
import TextAreaFieldControl from '~/Core/components/common/FormControl/TextAreaFieldControl';
import formatDate from '~/Core/utils/formatDate';

import moment from 'moment';
import CheckBoxFieldControl from '~/Core/components/common/FormControl/CheckBoxFieldControl';
const ResumeActivity = ({ className: cx, isShowing, toggle }) => {
	const [modalConfirmState, setModalConfirmState] = useState({ open: false, payload: null });
	const resume = useSelector((state) => state.auth?.user?.resume);
	const [updateId, setUpdateId] = useState(null);

	//toggle tips
	const { isShowing: showTips, toggle: toggleTips } = useModal({
		t_resume_activity: false
	});

	//Gọi api rtk query
	const { data: resumeAcitivity, refetch } = useGetAllActivityQuery(resume?.id);
	const [trigger, result] = useLazyGetOneResumeActivityQuery();
	const [createReferMutation] = useCreateResumeActivityMutation();
	const [deleteReferMutation] = useDeleteResumeActivityMutation();
	const [updateReferMutation] = useUpdateResumeActivityMutation();

	const { control, handleSubmit, reset, watch } = useForm({
		resolver: yupResolver(resumeActivitySchema)
	});
	const {
		control: updateControl,
		handleSubmit: handleUpdateSubmit,
		reset: updateReset
	} = useForm({
		resolver: yupResolver(resumeActivitySchema)
	});

	const onCreateSubmit = async (data) => {
		toggle('resume_activity');
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
					toggle('update_resume_activity');
				}
			});
	};

	const onOpenModalUpdate = (id) => {
		setUpdateId(id);
		trigger(id);
		toggle('update_resume_activity');
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
			organization: result?.data?.organization,
			role: result?.data?.role,
			start_date: moment(result?.data?.start_date).format('YYYY-MM-DD'),
			end_date: moment(result?.data?.end_date).format('YYYY-MM-DD'),
			activity_des: result?.data?.activity_des,
			activity_current: result?.data?.activity_current,
			resume_id: result?.data?.resume_id
		});
	}, [updateReset, result]);

	return (
		<Fragment>
			<Widget
				action='ADD'
				title='Hoạt động khác'
				className={cx('widget', 'widget-20')}
				id='t-resume-section'
				status='default'
				onOpenResume={() => toggle('resume_activity')}
				onOpenTipSlide={() => toggleTips('t_resume_activity')}
				avatar='https://static.careerbuilder.vn/themes/careerbuilder/img/dash-board/i13.png'>
				<div className={cx('content')}>
					<div className={cx('list-references')}>
						{resumeAcitivity?.length > 0 ? (
							resumeAcitivity?.map((item) => (
								<div className={cx('item')}>
									<div className={cx('title')}>
										<h4 className={cx('sub-title')}>{item?.organization}</h4>
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
											<li>{item?.role}</li>
											<li>
												{formatDate(item.cer_form)}-
												{item.activity_current ? 'Hiện tại' : formatDate(item.end_date)}
											</li>
											<li>{item?.activity_des}</li>
										</ul>
									</div>
								</div>
							))
						) : (
							<NoContent onClick={() => toggle('resume_activity')} title='Vui lòng thêm hoạt động khác' />
						)}
					</div>
				</div>
			</Widget>

			<ResumeModal
				isOpen={isShowing.resume_activity}
				hide={() => toggle('resume_activity')}
				className={cx}
				title='Hoạt động khác'>
				<Form control={control} onSubmit={onCreateSubmit} handleSubmit={handleSubmit} cx={cx} watch={watch} />
			</ResumeModal>

			<ResumeModal
				isOpen={isShowing.update_resume_activity}
				hide={() => toggle('update_resume_activity')}
				className={cx}
				title='Hoạt động khác'>
				<Form
					control={updateControl}
					onSubmit={onUpdateSubmit}
					handleSubmit={handleUpdateSubmit}
					cx={cx}
					watch={watch}
					data={result?.data}
				/>
			</ResumeModal>
			<Tips
				isShowing={showTips.t_resume_activity}
				hide={() => toggleTips('t_resume_activity')}
				title='Để CV không chỉ Hay mà còn Đẹp trong mắt Nhà tuyển dụng'>
				<div className='swiper-wrapper'>
					Chứng chỉ khác:
					<br />
					Bạn có thể chọn hiển thị hoặc không hiển thị mục này trên CV
					<br />
					- Chỉ nên đề cập đến những chứng chỉ liên quan đến công việc bạn đang ứng tuyển hoặc những chứng chỉ có
					kĩ năng nổi bật.
					<br />- Hãy điền đầy đủ các thông tin như ngày hoàn thành, tổ chức cấp.
					<br />- Bạn cũng có thể kể tên các hội thảo, hội nghị có uy tín mà bạn đã từng được tham dự
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

const Form = ({ onSubmit, handleSubmit, control, cx, watch, data, isShowing }) => {

	const [isDisabled, setIsDisabled] = useState(false);

	const handleCheckboxChange = (event) => {
	  setIsDisabled(event.target.checked);
	};
	return (
		<form name='references-form' id='references-form' onSubmit={handleSubmit(onSubmit)}>
			<div className={cx('form-group', 'row')}>
				<div className={cx('col-lg-6')}>
					<div className={cx('input-group')}>
						<InputFieldControl control={control} name='organization' id='organization' label='Tổ chức' />
					</div>
				</div>
				<div className={cx('col-lg-6')}>
					<div className={cx('input-group')}>
						<InputFieldControl control={control} name='role' id='role' label='Vai trò' />
					</div>
				</div>
			</div>

			<div className={cx('form-group', 'row')}>
				<div className={cx('col-lg-6')}>
					<div className={cx('input-group')}>
						<InputFieldControl
							control={control}
							name='start_date'
							id='start_date'
							label='Thời gian hoạt động'
							type='date'
						/>
					</div>
				</div>
				<div className={cx('col-lg-6')}>
					<div className={cx('input-group')}>
						<InputFieldControl
							control={control}
							name='end_date'
							id='end_date'
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
							name={'activity_current'}
							control={control}
							label={'Hiện tại'}
							// checked={data?.activity_current === 1 ? true : false}
							defaultChecked={data?.activity_current === 1 ? true : false}
							onChange={handleCheckboxChange}
						/> 
					</div>
				</div>
			</div>
			<div className={cx('form-group', 'row')}>
				<div className={cx('col-lg-12')}>
					<div className={cx('input-group')}>
						<TextAreaFieldControl
							control={control}
							name='activity_des'
							label='Mô tả hoạt động'
							id='activity_des'
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

export default ResumeActivity;
