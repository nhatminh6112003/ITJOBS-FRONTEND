import React, { Fragment, useEffect, useState } from 'react';
import Widget from './Widget';
import { yupResolver } from '@hookform/resolvers/yup';
import ResumeModal from './ResumeModal';
import { useForm } from 'react-hook-form';
import { useSelector } from 'react-redux';
import { toast } from 'react-toastify';
import Tips from '~/Core/components/common/Modal/Tips';
import useModal from '~/App/hooks/useModal';
import NoContent from './NoContent';
import {
	useCreateResumeObjectiveMutation,
	useDeleteResumeObjectiveMutation,
	useGetAllResumeObjectiveQuery,
	useUpdateResumeObjectiveMutation,
	useLazyGetOneResumeObjectiveQuery,
	useGetOneResumeObjectiveQuery
} from '~/App/providers/apis/resumeObjectiveApi';
import { resumeObjectiveSchema } from '~/App/schemas/resumeObjective';

import ConfirmDialog from '~/Core/components/common/Modal/ConfirmDialog';
import TextAreaFieldControl from '~/Core/components/common/FormControl/TextAreaFieldControl';
const ResumeObjective = ({ className: cx, isShowing, toggle }) => {
	const [modalConfirmState, setModalConfirmState] = useState({ open: false, payload: null });
	const resume = useSelector((state) => state.auth?.user?.resume);
	const [updateId, setUpdateId] = useState(null);

	//toggle tips
	const { isShowing: showTips, toggle: toggleTips } = useModal({
		t_resume_objective: false
	});

	//Gọi api rtk query
	const { data: resume_objective, refetch } = useGetAllResumeObjectiveQuery(resume?.id);
	const [trigger, result] = useLazyGetOneResumeObjectiveQuery();
	const [createObjectiveMutation] = useCreateResumeObjectiveMutation();
	const [deleteObjectiveMutation] = useDeleteResumeObjectiveMutation();
	const [updateObjectiveMutation] = useUpdateResumeObjectiveMutation();

	const { control, handleSubmit, reset } = useForm({
		resolver: yupResolver(resumeObjectiveSchema)
	});
	const {
		control: updateControl,
		handleSubmit: handleUpdateSubmit,
		reset: updateReset
	} = useForm({
		resolver: yupResolver(resumeObjectiveSchema)
	});

	const onCreateSubmit = async (data) => {
		toggle('resume_objective');
		createObjectiveMutation({
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

		updateObjectiveMutation({
			id: updateId,
			payload: {
				...data,
				resume_id: resume?.id
			}
		})
			.unwrap()
			.then((r) => {
				if (r.status == 200) {
					toast.success(r?.message);
					toggle('update_resume_objective');
				}
			});
	};

	const onOpenModalUpdate = (id) => {
		setUpdateId(id);
		trigger(id);
		toggle('update_resume_objective');
	};

	const handleConfirmDelete = async (id) => {
		deleteObjectiveMutation(id)
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
			objective_job: result?.data?.objective_job,
			resume_id: result?.data?.resume_id
		});
	}, [updateReset, result]);
	return (
		<Fragment>
			<Widget
				action={resume_objective?.length > 0 ? 'EDIT' : 'ADD'}
				title='Mục tiêu nghề nghiệp'
				className={cx('widget', 'widget-20')}
				id='widget-14'
				status='default'
				onOpenResume={
					resume_objective?.length > 0
						? () => onOpenModalUpdate(resume_objective?.[0]?.id)
						: () => toggle('resume_objective')
				}
				onOpenTipSlide={() => toggleTips('t_resume_objective')}
				avatar='https://static.careerbuilder.vn/themes/careerbuilder/img/dash-board/i3.png'>
				<div className={cx('content')}>
					<div className={cx('list-references')}>
						{resume_objective?.length > 0 ? (
							resume_objective?.map((item) => (
								<div className={cx('item')}>
									<div className={cx('title')}>
										<h4>{item?.objective_job}</h4>
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
								</div>
							))
						) : (
							<NoContent
								onClick={() => toggle('resume_objective')}
								title='Vui lòng thêm thông tin mục tiêu nghề nghiệp'
							/>
						)}
					</div>
				</div>
			</Widget>

			<ResumeModal
				isOpen={isShowing.update_resume_objective}
				hide={() => toggle('update_resume_objective')}
				className={cx}
				title='MỤC TIÊU NGHỀ NGHIỆP'>
				<Form control={updateControl} onSubmit={onUpdateSubmit} handleSubmit={handleUpdateSubmit} cx={cx} />
			</ResumeModal>

			<ResumeModal
				isOpen={isShowing.resume_objective}
				hide={() => toggle('resume_objective')}
				className={cx}
				title='MỤC TIÊU NGHỀ NGHIỆP'>
				<Form control={control} onSubmit={onCreateSubmit} handleSubmit={handleSubmit} cx={cx} />
			</ResumeModal>

			<Tips
				isShowing={showTips.t_resume_objective}
				hide={() => toggleTips('t_resume_objective')}
				title='Để CV không chỉ Hay mà còn Đẹp trong mắt Nhà tuyển dụng'>
				<div className='swiper-wrapper'>
					Mục tiêu nghề nghiệp:
					<br />
					- Hãy trình bày mục tiêu của bản thân một cách ngắn gọn, rõ ràng nhưng cũng thể hiện được mong muốn của
					bản thân đối với vị trí/ngành nghề mà bạn ứng tuyển.
					<br />- Trong trường hợp bạn muốn nói thêm về sự nghiệp và kinh nghiệm làm việc trong quá khứ để nhà
					tuyển dụng có thể hình dung rõ hơn, thì cũng đừng quên trình bày thật tóm tắt nhé!
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

const Form = ({ onSubmit, handleSubmit, control, cx }) => {
	return (
		<form name='references-form' id='references-form' onSubmit={handleSubmit(onSubmit)}>
			<div className={cx('form-group', 'row')}>
				<div className={cx('col-lg-12')}>
					<div className={cx('input-group')}>
						<TextAreaFieldControl
							maxRows={1}
							control={control}
							name='objective_job'
							label='MỤC TIÊU NGHỀ NGHIỆP'
							id='objective_job'
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

export default ResumeObjective;
