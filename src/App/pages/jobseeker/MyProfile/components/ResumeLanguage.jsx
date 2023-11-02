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
	useGetAllResumeLanguageQuery,
	useCreateResumeLanguageMutation,
	useDeleteResumeLanguageMutation,
	useGetOneResumeLanguageQuery,
	useLazyGetOneResumeLanguageQuery,
	useUpdateResumeLanguageMutation
} from '~/App/providers/apis/resumeLanguageApi';

import { languages } from '~/App/constants/resumeLanguageEnum';
import { languages_level } from '~/App/constants/resumeLanguageEnum';

import { resumeLanguageSchema } from '~/App/schemas/resumeLanguageSchema';

import ConfirmDialog from '~/Core/components/common/Modal/ConfirmDialog';

import moment from 'moment';
import SelectFieldControl from '~/Core/components/common/FormControl/SelectFieldControl';
const ResumeLanguage = ({ className: cx, isShowing, toggle }) => {
	const [modalConfirmState, setModalConfirmState] = useState({ open: false, payload: null });
	const resume = useSelector((state) => state.auth?.user?.resume);
	const [updateId, setUpdateId] = useState(null);

	//toggle tips
	const { isShowing: showTips, toggle: toggleTips } = useModal({
		t_resume_language: false
	});

	//Gọi api rtk query
	const { data: resumeLanguage, refetch } = useGetAllResumeLanguageQuery(resume?.id);
	console.log('TCL: resumeLanguage', resumeLanguage);
	const [trigger, result] = useLazyGetOneResumeLanguageQuery();
	const [createResumeLanguageMutation] = useCreateResumeLanguageMutation();
	const [deleteResumeLanguageMutation] = useDeleteResumeLanguageMutation();
	const [updateResumeLanguageMutation] = useUpdateResumeLanguageMutation();

	const { control, handleSubmit, reset, watch } = useForm({
		// resolver: yupResolver(resumeLanguageSchema)
	});
	const {
		control: updateControl,
		handleSubmit: handleUpdateSubmit,
		reset: updateReset
	} = useForm({
		resolver: yupResolver(resumeLanguageSchema)
	});

	const onCreateSubmit = async (data) => {
		toggle('resume_language');
		createResumeLanguageMutation({
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
		updateResumeLanguageMutation({
			id: updateId,
			payload: data
		})
			.unwrap()
			.then((r) => {
				if (r.status == 200) {
					toast.success(r?.message);
					toggle('update_resume_language');
				}
			});
	};

	const onOpenModalUpdate = (id) => {
		setUpdateId(id);
		trigger(id);
		toggle('update_resume_language');
	};

	const handleConfirmDelete = async (id) => {
		deleteResumeLanguageMutation(id)
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
			resume_id: result?.data?.resume_id,
			rs_language: result?.data?.rs_language,
			rs_language_level: result?.data?.rs_language_level,
			rs_language_certify: result?.data?.rs_language_certify
		});
	}, [updateReset, result]);
	return (
		<Fragment>
			<Widget
				action='ADD'
				title='Ngôn Ngữ'
				className={cx('widget', 'widget-22', 'widget-17')}
				id='t-resume-section'
				status='default'
				onOpenResume={() => toggle('resume_language')}
				onOpenTipSlide={() => toggleTips('t_resume_language')}
				icon={
					<div className={cx('image', 'icon-translate')}>
						<span className={cx('material-icons')}>translate</span>
					</div>
				}>
				<div className={cx('content')}>
					<div className={cx('list-references')}>
						{resumeLanguage?.data.length > 0 ? (
							resumeLanguage?.data?.map((item) => (
								<div className={cx('widget-body')}>
									<div className={cx('list-progress')}>
										<table>
											<thead>
												<tr>
													<th>Trình độ ngoại ngữ</th>
													<th>Trình độ</th>
													<th>Chứng chỉ ngoại ngữ</th>
													<th> </th>
												</tr>
											</thead>
											<tbody>
												<tr>
													<td>
														<div className={cx('title')}>
															<h4>{languages.find((lang) => lang.value === item.rs_language)?.label}</h4>
														</div>
													</td>
													<td>
														<div className={cx('progress')}>
															<progress className={cx('progress-main')} max={5} value={2} />

															{languages_level.map((languageslevel) => {
																return (
																	<div key={languageslevel.value} className={cx('level')}>
																		{languageslevel.value == item.rs_language_level &&
																			languageslevel.label}
																	</div>
																);
															})}
															<SkillLevelProgressBar cx={cx} skillLevel={item.rs_language_level} />
														</div>
													</td>
													<td>
														<span>{item.rs_language_certify}</span>
													</td>
													<td>
														<ul className={cx('list-action')}>
															<li className={cx('edit-link')}>
																<a href='javascript:void(0)' onClick={() => onOpenModalUpdate(item.id)}>
																	<em className={cx('material-icons')}>create</em>
																	<span>Chỉnh sửa</span>
																</a>
															</li>
															<li className={cx('delete')}>
																<a
																	href='javascript:void(0)'
																	onClick={() =>
																		setModalConfirmState({ open: true, payload: item.id })
																	}>
																	<em className={cx('material-icons')}>highlight_off</em>
																	<span>Xoá</span>
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
							<NoContent onClick={() => toggle('resume_language')} title='Vui lòng thêm kinh nghiệm làm việc' />
						)}
					</div>
				</div>
			</Widget>

			<ResumeModal
				isOpen={isShowing.resume_language}
				hide={() => toggle('resume_language')}
				className={cx}
				title='Ngôn Ngữ'>
				<Form
					control={control}
					onSubmit={onCreateSubmit}
					handleSubmit={handleSubmit}
					cx={cx}
					watch={watch}
					languages={languages}
					languages_level={languages_level}
				/>
			</ResumeModal>

			<ResumeModal
				isOpen={isShowing.update_resume_language}
				hide={() => toggle('update_resume_language')}
				className={cx}
				title='Ngôn Ngữ'>
				<Form
					control={updateControl}
					onSubmit={onUpdateSubmit}
					handleSubmit={handleUpdateSubmit}
					cx={cx}
					watch={watch}
					data={result?.data}
					languages={languages}
					languages_level={languages_level}
				/>
			</ResumeModal>
			<Tips
				isShowing={showTips.t_resume_language}
				hide={() => toggleTips('t_resume_language')}
				title='Để CV không chỉ Hay mà còn Đẹp trong mắt Nhà tuyển dụng'>
				<div className='swiper-wrapper'>
					Ngôn ngữ khác:
					<br />
					-Bạn nên liệt kê các ngôn ngữ bạn có thể sử dụng, bao gồm cả giấy chứng nhận về ngoại ngữ đó hoặc đề cập
					thêm về khoảng thời gian bạn du học, tham gia chường trình trao đổi ngôn ngữ để giúp nhà tuyển dụng hình
					dung rõ thêm về khả năng ngôn ngữ của bạn. <br />
					-Nên liệt kê ngôn ngữ theo thứ tự từ thành thục nhất đến ít thành thục nhất
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
const SkillLevelProgressBar = ({ cx, skillLevel }) => {
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
};

const Form = ({ onSubmit, handleSubmit, control, cx, watch, data, isShowing, languages, languages_level }) => {
	const [isDisabled, setIsDisabled] = useState(false);

	return (
		<form name='references-form' id='references-form' onSubmit={handleSubmit(onSubmit)}>
			<div className={cx('form-group', 'row')}>
				<div className={cx('col-lg-12')}>
					<div className={cx('input-group')}>
						<SelectFieldControl
							options={
								languages &&
								languages?.map((item) => ({
									label: item?.label,
									value: item?.value
								}))
							}
							control={control}
							label='Chọn ngôn ngữ'
							name='rs_language'
						/>
					</div>
				</div>
			</div>
			<div className={cx('form-group', 'row')}>
				<div className={cx('col-lg-12')}>
					<div className={cx('input-group')}>
						<SelectFieldControl
							options={
								languages_level &&
								languages_level?.map((item) => ({
									label: item?.label,
									value: item?.value
								}))
							}
							control={control}
							label='Trình độ'
							name='rs_language_level'
						/>
					</div>
				</div>
			</div>
			<div className={cx('form-group', 'row')}>
				<div className={cx('col-lg-12')}>
					<div className={cx('input-group')}>
						<InputFieldControl
							control={control}
							name='rs_language_certify'
							id='rexp_title'
							label='Chứng chỉ ngoại ngữ'
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

export default ResumeLanguage;
