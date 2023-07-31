import React, { Fragment } from 'react';
import Widget from './Widget';
import { yupResolver } from '@hookform/resolvers/yup';
import ResumeModal from './ResumeModal';
import InputFieldControl from '~/Core/components/common/FormControl/InputFieldControl';
import { useForm } from 'react-hook-form';
import { resumeTitleSchema } from '~/App/schemas/resumeTitleSchema';
import { useUpdateResumeTitleMutation, useGetOneResumeTitleQuery } from '~/App/providers/apis/resumeTitleApi';
import { useSelector } from 'react-redux';
import { useEffect } from 'react';
import { toast } from 'react-toastify';
import AddCircleIcon from '@mui/icons-material/AddCircle';
import Tips from '~/Core/components/common/Modal/Tips';
import useModal from '~/App/hooks/useModal';
import No_Content from './No_Content';
const ResumeTitle = ({ className: cx, isShowing, toggle }) => {
	const resume = useSelector((state) => state.auth?.user?.resume);

	const { isShowing: showTips, toggle: toggleTips } = useModal({
		t_title_resume: false
	});
	const { data: resumeTitle, refetch } = useGetOneResumeTitleQuery(resume?.id);
	const { control, handleSubmit, reset } = useForm({
		resolver: yupResolver(resumeTitleSchema)
	});
	const [updateResumeTitle, { isLoading }] = useUpdateResumeTitleMutation();

	const onSubmit = async (data) => {
		updateResumeTitle({ id: resume?.id, payload: data })
			.unwrap()
			.then((r) => {
				if (r.status == 200) {
					toast.success(r?.message);
					toggle('resume_title');
				}
			});
	};
	useEffect(() => {
		reset({
			title: resumeTitle?.title
		});
	}, [resumeTitle, reset]);

	return (
		<Fragment>
			<Widget
				title='Tiêu đề hồ sơ'
				className={cx('widget', 'widget-24')}
				status={resumeTitle?.status == 0 ? 'error' : 'success'}
				id='t-resume-section'
				onOpenResume={() => toggle('resume_title')}
				onOpenTipSlide={() => toggleTips('t_title_resume')}
				avatar="https://static.careerbuilder.vn/themes/careerbuilder/img/dash-board/i14.png"
				>
				<div className={cx('content')}>
					{resumeTitle?.title ? (
						<p>{resumeTitle?.title}</p>
					) : (
						<No_Content action='EDIT' onShowTip={() => toggle('resume_title')} title='Tiêu đề hồ sơ' />
					)}
				</div>
			</Widget>
			<ResumeModal
				isOpen={isShowing.resume_title}
				hide={() => toggle('resume_title')}
				wrapModal={cx('edit-modal-dashboard', 'add-title-modal', 'fancybox-content')}
				className={cx}
				title='Tiêu đề hồ sơ'>
				<form name='t-resume-form' id='t-resume-form' onSubmit={handleSubmit(onSubmit)}>
					<div className={cx('form-group', 'row')}>
						<div className={cx('col-lg-4')}>
							<label htmlFor=''>
								Tiêu đề hồ sơ<span>*</span>
							</label>
						</div>
						<div className={cx('col-lg-8')}>
							<div className={cx('input-group')}>
								<InputFieldControl control={control} className={cx('keyword')} name='title' id='title' />
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
			</ResumeModal>
			<Tips
				isShowing={showTips.t_title_resume}
				hide={() => toggleTips('t_title_resume')}
				title='Để CV không chỉ Hay mà còn Đẹp trong mắt Nhà tuyển dụng'>
				<div className='swiper-wrapper'>
					Tiêu đề hồ sơ: Bạn nên để tiêu đề là vị trí bạn đang ứng tuyển hoặc muốn làm việc. Giúp Nhà tuyển dụng
					hiểu ngay vị trí mong muốn khi nhận hồ sơ của bạn. Ví dụ: "Nhân viên kinh doanh" hoặc "Marketing Manager"
					Lưu ý: hãy điều chỉnh tiêu đề theo từng công việc ứng tuyển nhé!
				</div>
			</Tips>
		</Fragment>
	);
};

export default ResumeTitle;
