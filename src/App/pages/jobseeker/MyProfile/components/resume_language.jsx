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
		t_resume_experience: false
	});
	console.log(languages.map(item=>{
		console.log(item?.lable);
	}));
	//Gọi api rtk query
	const { data: resumeLanguage, refetch } = useGetAllResumeLanguageQuery(resume?.id);
	console.log(resumeLanguage?.data);
	const [trigger, result] = useLazyGetOneResumeLanguageQuery();
	const [createResumeLanguageMutation] = useCreateResumeLanguageMutation();
	const [deleteResumeLanguageMutation] = useDeleteResumeLanguageMutation();
	const [updateResumeLanguageMutation] = useUpdateResumeLanguageMutation();

	const { control, handleSubmit, reset, watch } = useForm({
		resolver: yupResolver(resumeLanguageSchema)
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
			rs_language_certify: result?.data?.rs_language_certify,
		});
	}, [updateReset, result]);

	return (
		<Fragment>
			<Widget
				action='ADD'
				title='Ngôn Ngữ'
				className={cx('widget', 'widget-20')}
				id='t-resume-section'
				status={resumeLanguage?.length > 0 ? 'success' : 'error'}
				onOpenResume={() => toggle('resume_language')}
				onOpenTipSlide={() => toggleTips('t_resume_language')}
				avatar='https://static.careerbuilder.vn/themes/careerbuilder/img/dash-board/i4.png'>
				<div className={cx('content')}>
					<div className={cx('list-references')}>
						{resumeLanguage?.data.length > 0 ? (
							resumeLanguage?.data?.map((item) => (
								<div className={cx('item')}>
									<div className={cx('title')}>
										<h4 className={cx('sub-title')}>{item?.rs_language}</h4>
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
								onClick={() => toggle('resume_language')}
								title='Vui lòng thêm kinh nghiệm làm việc'
							/>
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

const Form = ({ onSubmit, handleSubmit, control, cx, watch, data, isShowing, languages , languages_level}) => {
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
									label: item?.lable,
									value: item?.value
								}))
							}
							control={control}
							label='chọn ngôn ngữ'
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
									label: item?.lable,
									value: item?.value
								}))
							}
							control={control}
							label='trình độ'
							name='rs_language_level'
						/>
					</div>
				</div>
			</div>
			<div className={cx('form-group', 'row')}>
				<div className={cx('col-lg-6')}>
					<div className={cx('input-group')}>
						<InputFieldControl control={control} name='rs_language_certify' id='rexp_title' label='Chứng chỉ ngoại ngữ' />
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