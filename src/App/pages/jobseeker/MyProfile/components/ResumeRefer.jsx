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
	useGetAllReferQuery,
	useUpdateResumeReferMutation,
	useCreateResumeReferMutation
} from '~/App/providers/apis/resumeReferApi';
import { useLazyGetOneResumeReferQuery } from '~/App/providers/apis/resumeReferApi';
import { resumeReferSchema } from '~/App/schemas/resumeReferSchema';
import { useDeleteResumeReferMutation } from '~/App/providers/apis/resumeReferApi';
import ConfirmDialog from '~/Core/components/common/Modal/ConfirmDialog';
const ResumeRefer = ({ className: cx, isShowing, toggle }) => {
	const [modalConfirmState, setModalConfirmState] = useState({ open: false, payload: null });
	const resume = useSelector((state) => state.auth?.user?.resume);
	const [updateId, setUpdateId] = useState(null);

	//toggle tips
	const { isShowing: showTips, toggle: toggleTips } = useModal({
		t_resume_refer: false
	});

	//Gọi api rtk query
	const { data: resumeRefer, refetch } = useGetAllReferQuery(resume?.id);
	const [trigger, result] = useLazyGetOneResumeReferQuery();
	const [createReferMutation] = useCreateResumeReferMutation();
	const [deleteReferMutation] = useDeleteResumeReferMutation();
	const [updateReferMutation] = useUpdateResumeReferMutation();

	const { control, handleSubmit, reset } = useForm({
		resolver: yupResolver(resumeReferSchema)
	});
	const {
		control: updateControl,
		handleSubmit: handleUpdateSubmit,
		reset: updateReset
	} = useForm({
		resolver: yupResolver(resumeReferSchema)
	});

	const onCreateSubmit = async (data) => {
		toggle('resume_refer');
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
					toggle('update_resume_refer');
				}
			});
	};

	const onOpenModalUpdate = (id) => {
		setUpdateId(id);
		trigger(id);
		toggle('update_resume_refer');
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
			ref_email: result?.data?.ref_email,
			ref_name: result?.data?.ref_name,
			ref_phone: result?.data?.ref_phone,
			ref_title: result?.data?.ref_title,
			resume_id: result?.data?.resume_id,
			ref_company: result?.data?.ref_company
		});
	}, [updateReset, result]);
	return (
		<Fragment>
			<Widget
				action='ADD'
				title='Người tham khảo'
				className={cx('widget', 'widget-20')}
				id='t-resume-section'
				status='default'
				onOpenResume={() => toggle('resume_refer')}
				onOpenTipSlide={() => toggleTips('t_resume_refer')}
				avatar='https://static.careerbuilder.vn/themes/careerbuilder/img/dash-board/i14.png'>
				<div className={cx('content')}>
					<div className={cx('list-references')}>
						{resumeRefer?.length > 0 ? (
							resumeRefer?.map((item) => (
								<div className={cx('item')}>
									<div className={cx('title')}>
										<h4>{item?.ref_name}</h4>
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
											<li>
												<em className={cx('material-icons')}>person</em>Chức vụ {item?.ref_title}
											</li>
											<li>
												<em className={cx('material-icons')}>domain</em>Công ty {item?.ref_company}
											</li>
											<li>
												<em className={cx('material-icons')}>phone</em>Số điện thoại: {item.ref_phone}
											</li>
											<li>
												<em className={cx('material-icons')}>email</em>Email: {item?.ref_email}
											</li>
										</ul>
									</div>
								</div>
							))
						) : (
							<NoContent
								onClick={() => toggle('resume_refer')}
								title='Vui lòng thêm thông tin người tham khảo'
							/>
						)}
					</div>
				</div>
			</Widget>

			<ResumeModal
				isOpen={isShowing.resume_refer}
				hide={() => toggle('resume_refer')}
				className={cx}
				title='Thông Tin Người Tham Thảo'>
				<Form control={control} onSubmit={onCreateSubmit} handleSubmit={handleSubmit} cx={cx} />
			</ResumeModal>

			<ResumeModal
				isOpen={isShowing.update_resume_refer}
				hide={() => toggle('update_resume_refer')}
				className={cx}
				title='Thông Tin Người Tham Thảo'>
				<Form control={updateControl} onSubmit={onUpdateSubmit} handleSubmit={handleUpdateSubmit} cx={cx} />
			</ResumeModal>
			<Tips
				isShowing={showTips.t_resume_refer}
				hide={() => toggleTips('t_resume_refer')}
				title='Để CV không chỉ Hay mà còn Đẹp trong mắt Nhà tuyển dụng'>
				<div className='swiper-wrapper'>
					Người tham khảo: Bạn có thể chọn hiển thị hoặc không hiển thị mục này trên CV - "Người tham khảo" có thể
					là cấp trên hoặc người làm việc trực tiếp với bạn. - Hãy luôn đảm bảo rằng "Người tham khảo" biết rằng họ
					có thể sẽ nhận được cuộc gọi từ nhà tuyển dụng hiện tại của bạn. - Nếu "Người tham khảo" có các chức danh
					công việc như Bác sĩ, Luật sư,... thì hãy để nó trước tên của họ. Trong trường hợp không có, hãy để tín
					ngữ Ông/Bà/Mr/Ms/... trước tên của họ nhé!
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
						<InputFieldControl control={control} name='ref_name' id='ref_name' label='Họ tên' />
					</div>
				</div>
			</div>
			<div className={cx('form-group', 'row')}>
				<div className={cx('col-lg-12')}>
					<div className={cx('input-group')}>
						<InputFieldControl control={control} name='ref_title' label='Chức vụ *' id='ref_title' />
					</div>
				</div>
			</div>
			<div className={cx('form-group', 'row')}>
				<div className={cx('col-lg-12')}>
					<div className={cx('input-group')}>
						<InputFieldControl
							control={control}
							className={cx('keyword')}
							name='ref_company'
							label='Công ty *'
							id='ref_company'
						/>
					</div>
				</div>
			</div>
			<div className={cx('form-group', 'row')}>
				<div className={cx('col-lg-12')}>
					<div className={cx('input-group')}>
						<InputFieldControl
							control={control}
							className={cx('keyword')}
							name='ref_phone'
							id='ref_phone'
							label='Điện thoại *'
						/>
					</div>
				</div>
			</div>
			<div className={cx('form-group', 'row')}>
				<div className={cx('col-lg-12')}>
					<div className={cx('input-group')}>
						<InputFieldControl
							control={control}
							className={cx('keyword')}
							name='ref_email'
							id='ref_email'
							label='Email *'
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

export default ResumeRefer;
