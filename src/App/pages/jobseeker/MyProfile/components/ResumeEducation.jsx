import { yupResolver } from '@hookform/resolvers/yup';
import { Fragment, useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import { useSelector } from 'react-redux';
import { toast } from 'react-toastify';
import useModal from '~/App/hooks/useModal';
import {
	useCreateResumeEducationMutation,
	useDeleteResumeEducationMutation,
	useGetAllEducationQuery,
	useLazyGetOneResumeEducationQuery,
	useUpdateResumeEducationMutation
} from '~/App/providers/apis/resumeEducation';
import InputFieldControl from '~/Core/components/common/FormControl/InputFieldControl';
import Tips from '~/Core/components/common/Modal/Tips';
import NoContent from './NoContent';
import ResumeModal from './ResumeModal';
import Widget from './widget';

import { resumeEducationSchema } from '~/App/schemas/resumeEducationSchema';

import moment from 'moment';
import { DegreeArray, degree } from '~/App/constants/degreeArray';
import SelectFieldControl from '~/Core/components/common/FormControl/SelectFieldControl';
import TextAreaFieldControl from '~/Core/components/common/FormControl/TextAreaFieldControl';
import ConfirmDialog from '~/Core/components/common/Modal/ConfirmDialog';
import formatDate from '~/Core/utils/formatDate';
const ResumeEducation = ({ className: cx, isShowing, toggle }) => {
	const [modalConfirmState, setModalConfirmState] = useState({ open: false, payload: null });
	const resume = useSelector((state) => state.auth?.user?.resume);
	const [updateId, setUpdateId] = useState(null);

	//toggle tips
	const { isShowing: showTips, toggle: toggleTips } = useModal({
		t_resume_education: false
	});

	//Gọi api rtk query
	const { data: resumeEducation, refetch } = useGetAllEducationQuery(resume?.id);
	const [trigger, result] = useLazyGetOneResumeEducationQuery();
	const [createReferMutation] = useCreateResumeEducationMutation();
	const [deleteReferMutation] = useDeleteResumeEducationMutation();
	const [updateReferMutation] = useUpdateResumeEducationMutation();

	const { control, handleSubmit, reset } = useForm({
		resolver: yupResolver(resumeEducationSchema)
	});
	const {
		control: updateControl,
		handleSubmit: handleUpdateSubmit,
		reset: updateReset
	} = useForm({
		resolver: yupResolver(resumeEducationSchema)
	});

	const onCreateSubmit = async (data) => {
		toggle('resume_education');
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
					toggle('update_resume_education');
				}
			});
	};

	const onOpenModalUpdate = (id) => {
		setUpdateId(id);
		trigger(id);
		toggle('update_resume_education');
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
			redu_name: result?.data?.redu_name,
			redu_degree: result?.data?.redu_degree,
			redu_desc: result?.data?.redu_desc,
			redu_date: moment(result?.data?.redu_date).format('YYYY-MM-DD'),
			resume_id: result?.data?.resume_id
		});
	}, [updateReset, result]);

	return (
		<Fragment>
			<Widget
				action='ADD'
				title='Học vấn'
				className={cx('widget', 'widget-20')}
				id='widget-16'
				status='default'
				onOpenResume={() => toggle('resume_education')}
				onOpenTipSlide={() => toggleTips('t_resume_education')}
				avatar='https://static.careerbuilder.vn/themes/careerbuilder/img/dash-board/i7.png'>
				<div className={cx('content')}>
					<div className={cx('list-references')}>
						{resumeEducation?.length > 0 ? (
							resumeEducation?.map((item) => (
								<div className={cx('item')}>
									<div className={cx('title')}>
										<h4 className={cx('sub-title')}>{item?.redu_name}</h4>
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
											<li className={cx('title')}>{degree[item?.redu_degree]}</li>
											<li className={cx('date')}>Tốt nghiệp {formatDate(item.redu_date)}</li>
											<li>{item.redu_desc}</li>
										</ul>
									</div>
								</div>
							))
						) : (
							<NoContent onClick={() => toggle('resume_education')} title='Vui lòng thêm thông tin học vấn' />
						)}
					</div>
				</div>
			</Widget>

			<ResumeModal
				isOpen={isShowing.resume_education}
				hide={() => toggle('resume_education')}
				className={cx}
				title='Thông Tin Học Vấn'>
				<Form control={control} onSubmit={onCreateSubmit} handleSubmit={handleSubmit} cx={cx} />
			</ResumeModal>

			<ResumeModal
				isOpen={isShowing.update_resume_education}
				hide={() => toggle('update_resume_education')}
				className={cx}
				title='Thông Tin Học Vấn'>
				<Form control={updateControl} onSubmit={onUpdateSubmit} handleSubmit={handleUpdateSubmit} cx={cx} />
			</ResumeModal>
			<Tips
				isShowing={showTips.t_resume_education}
				hide={() => toggleTips('t_resume_education')}
				title='Để CV không chỉ Hay mà còn Đẹp trong mắt Nhà tuyển dụng'>
				<div className='swiper-wrapper'>
					Học vấn:
					<br />
					- Hãy nêu ra những bậc học đạt được như cao đẳng, đại học, thạc sĩ,...
					<br />
					- Bạn cũng có thể kể thêm những khóa học ngắn hạn, khóa đào tạo chuyên nghiệp (có phí) mà bạn đã từng
					được học.
					<br />- Lưu ý chọn lọc những khóa học liên quan đến công việc mà bạn ứng tuyển thôi nhé
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
	const date = new Date();
	const futureDate = date.getDate() + 3;
	date.setDate(futureDate);
	const defaultValue = date.toLocaleDateString('en-CA');
	return (
		<form name='references-form' id='references-form' onSubmit={handleSubmit(onSubmit)}>
			<div className={cx('form-group', 'row')}>
				<div className={cx('col-lg-12')}>
					<div className={cx('input-group')}>
						<InputFieldControl control={control} name='redu_name' id='redu_name' label='Trường / khóa học' />
					</div>
				</div>
			</div>
			<div className={cx('form-group', 'row')}>
				<div className={cx('col-lg-12')}>
					<div className={cx('input-group')}>
						<SelectFieldControl
							control={control}
							options={DegreeArray}
							name='redu_degree'
							id='redu_degree'
							label='Bằng cấp'
						/>
					</div>
				</div>
			</div>
			<div className={cx('form-group', 'row')}>
				<div className={cx('col-lg-12')}>
					<div className={cx('input-group')}>
						<InputFieldControl control={control} name='redu_date' id='redu_date' label='Tốt nghiệp' type='date' />
					</div>
				</div>
			</div>
			<div className={cx('form-group', 'row')}>
				<div className={cx('col-lg-12')}>
					<div className={cx('input-group')}>
						<TextAreaFieldControl maxRows={1} control={control} name='redu_desc' label='Mô tả' id='redu_desc' />
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

export default ResumeEducation;
