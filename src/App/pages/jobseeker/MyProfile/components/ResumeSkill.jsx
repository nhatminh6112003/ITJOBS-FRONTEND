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
	useCreateResumeSkillMutation,
	useDeleteResumeSkillMutation,
	useGetAllSkillQuery,
	useGetOneResumeSkillQuery,
	useLazyGetOneResumeSkillQuery,
	useUpdateResumeSkillMutation
} from '~/App/providers/apis/resumeSkill';

import { resumeSkillSchema } from '~/App/schemas/resumeSkillSchema';

import ConfirmDialog from '~/Core/components/common/Modal/ConfirmDialog';

import SelectFieldControl from '~/Core/components/common/FormControl/SelectFieldControl/SelectFieldControl';
import SkillEnum from '~/App/constants/skillEnum';
const ResumeSkill= ({ className: cx, isShowing, toggle }) => {
	const [modalConfirmState, setModalConfirmState] = useState({ open: false, payload: null });
	const resume = useSelector((state) => state.auth?.user?.resume);
	const [updateId, setUpdateId] = useState(null);

	//toggle tips
	const { isShowing: showTips, toggle: toggleTips } = useModal({
		t_resume_skill: false
	});

	//Gọi api rtk query
	const { data: resumeSkill, refetch } = useGetAllSkillQuery(resume?.id);
	const [trigger, result] = useLazyGetOneResumeSkillQuery();
	const [createReferMutation] = useCreateResumeSkillMutation();
	const [deleteReferMutation] = useDeleteResumeSkillMutation();
	const [updateReferMutation] = useUpdateResumeSkillMutation();

	const { control, handleSubmit, reset } = useForm({
		resolver: yupResolver(resumeSkillSchema)
	});
	const {
		control: updateControl,
		handleSubmit: handleUpdateSubmit,
		reset: updateReset
	} = useForm({
		resolver: yupResolver(resumeSkillSchema)
	});

	const onCreateSubmit = async (data) => {
		toggle('resume_skill');
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
					toggle('update_resume_skill');
				}
			});
	};

	const onOpenModalUpdate = (id) => {
		setUpdateId(id);
		trigger(id);
		toggle('update_resume_skill');
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
			skill_name: result?.data?.skill_name,
			skill_content: result?.data?.skill_content,
			skill_level: result?.data?.skill_level,
			resume_id: result?.data?.resume_id
		});
	}, [updateReset, result]);

	return (
		<Fragment>
			<Widget
				action='ADD'
				title='Kỹ năng chuyên môn'
				id='t-resume-section'
				status='default'
				onOpenResume={() => toggle('resume_skill')}
				onOpenTipSlide={() => toggleTips('t_resume_skill')}
				avatar='https://static.careerbuilder.vn/themes/careerbuilder/img/dash-board/i14.png'>
				<div className={cx('content')}>
					<div className={cx('list-references')}>
						{resumeSkill?.length > 0 ? (
							resumeSkill?.map((item) => (
								<div className={cx('widget-body')}>
								<div className={cx('list-progress')} id='list-progress-skill'>
									<table>
										<thead>
											<tr>
												<th>Skill </th>
												<th>Mức độ</th>
												<th> </th>
											</tr>
										</thead>
										<tbody>
											<tr >
												<td>
													<div className={cx('title')}>
														<h4>{item.skill_name}</h4>
													</div>
													<div className={cx('content')}>
														<p>{item.skill_content}</p>
													</div>
												</td>
												<td>
													<div className={cx('progress')}>
														<progress className={cx('progress-main')} max={5} value={3} />
														<div className={cx('level')}>
															Mức độ <span>{item.skill_level}/5</span>
														</div>
													
														<SkillLevelProgressBar cx={cx} skillLevel={item.skill_level}/>
													</div>
												</td>
												<td>
													<ul className={cx('list-action')}>
														<li className={cx('edit-link')}>
															<a  href='javascript:void(0);' onClick={() => onOpenModalUpdate(item.id)}>
																{' '}
																<em className={cx('material-icons')}>create</em>
																<span>Chỉnh sửa</span>
															</a>
														</li>
														<li className={cx('delete')}>
															<a href='javascript:void(0);'
													onClick={() => setModalConfirmState({ open: true, payload: item.id })}>
																{' '}
																<em className={cx('material-icons')}>highlight_off</em>
																<span>Xóa</span>
															</a>
														</li>
													</ul>
												</td>
											</tr>
										</tbody>
									</table>
								</div>
							</div>
							))
						) : (
							<NoContent onClick={() => toggle('resume_skill')} title='Vui lòng thêm thông tin kỹ năng chuyên môn' />
						)}
					</div>
				</div>
			</Widget>

			<ResumeModal
				isOpen={isShowing.resume_skill}
				hide={() => toggle('resume_skill')}
				className={cx}
				title='Kỹ năng chuyên môn'>
				<Form control={control} onSubmit={onCreateSubmit} handleSubmit={handleSubmit} cx={cx} />
			</ResumeModal>

			<ResumeModal
				isOpen={isShowing.update_resume_skill}
				hide={() => toggle('update_resume_skill')}
				className={cx}
				title='Kỹ năng chuyên môn'>
				<Form control={updateControl} onSubmit={onUpdateSubmit} handleSubmit={handleUpdateSubmit} cx={cx} />
			</ResumeModal>
			<Tips
				isShowing={showTips.t_resume_skill}
				hide={() => toggleTips('t_resume_skill')}
				title='Để CV không chỉ Hay mà còn Đẹp trong mắt Nhà tuyển dụng'>
				<div className='swiper-wrapper'>
					Skill: Bạn nên lựa chọn 4-6 kỹ năng liêu quan đến vị trí ứng uyển
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


const SkillLevelProgressBar=({ cx,skillLevel }) =>{
	const classes = [];
	for (let i = 1; i <= 5; i++) {
	  classes.push(skillLevel >= i ? 'success' : '');
	}
 
	return (
	  <div className={cx('progress-row')}>
		 {classes.map((classValue, index) => (
			<div key={index} className={cx('line', classValue)} />
		 ))}
	  </div>
	);
 }

const Form = ({ onSubmit, handleSubmit, control, cx }) => {
	const date = new Date();
	const futureDate = date.getDate() + 3;
	date.setDate(futureDate);
	const defaultValue = date.toLocaleDateString('en-CA');
	return (
		<form name='references-form' id='references-form' onSubmit={handleSubmit(onSubmit)}>
			<div className={cx('form-group', 'row')}>
				<div className={cx('col-lg-12')}>
					<div className={cx('input-group')}>
						<InputFieldControl control={control} name='skill_name' id='skill_name' label='Nhập kỹ năng, chuyên môn' />
					</div>
				</div>
			</div>
			<div className={cx('form-group', 'row')}>
				<div className={cx('col-lg-12')}>
					<div className={cx('input-group')}>
					<InputFieldControl control={control} name='skill_content' id='skill_content' label='Mô tả kỹ năng' />
					</div>
				</div>
			</div>
			<div className={cx('form-group', 'row')}>
				<div className={cx('col-lg-12')}>
					<div className={cx('input-group')}>
						<SelectFieldControl
							options={SkillEnum}
							control={control}
							name='skill_level'
							id='skill_level'
							label='Mức độ'
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

export default ResumeSkill;
