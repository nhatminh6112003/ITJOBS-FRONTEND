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
	useGetAllCertificateQuery,
	useUpdateResumeCertificateMutation,
	useCreateResumeCertificateMutation,
	useDeleteResumeCertificateMutation,
	useLazyGetOneResumeCertificateQuery,
} from '~/App/providers/apis/resumeCertificate';

import { resumeCertificateSchema } from '~/App/schemas/resumeCertificateSchema';

import ConfirmDialog from '~/Core/components/common/Modal/ConfirmDialog';
import formatDate from '~/Core/utils/formatDate';
import moment from 'moment';

const ResumeCertificate = ({ className: cx, isShowing, toggle }) => {
	const [modalConfirmState, setModalConfirmState] = useState({ open: false, payload: null });
	const resume = useSelector((state) => state.auth?.user?.resume);
	const [updateId, setUpdateId] = useState(null);

	//toggle tips
	const { isShowing: showTips, toggle: toggleTips } = useModal({
		t_resume_certificate: false
	});

	//Gọi api rtk query
	const { data: resumeCertificate, refetch } = useGetAllCertificateQuery(resume?.id);
	const [trigger, result] = useLazyGetOneResumeCertificateQuery();
	const [createCertificateMutation] = useCreateResumeCertificateMutation();
	const [deleteCertificateMutation] = useDeleteResumeCertificateMutation();
	const [updateCertificateMutation] = useUpdateResumeCertificateMutation();

	const { control, handleSubmit, reset, watch } = useForm({
		resolver: yupResolver(resumeCertificateSchema)
	});

	const {
		control: updateControl,
		handleSubmit: handleUpdateSubmit,
		reset: updateReset,
		watch: updateWatch,
		setValue
	} = useForm({
		resolver: yupResolver(resumeCertificateSchema)
	});

	const onCreateSubmit = async (data) => {
		toggle('resume_certificate');
		createCertificateMutation({
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
		updateCertificateMutation({
			id: updateId,
			payload: data
		})
			.unwrap()
			.then((r) => {
				if (r.status == 200) {
					toast.success(r?.message);
					toggle('update_resume_certificate');
				}
			});
	};

	const onOpenModalUpdate = (id) => {
		setUpdateId(id);
		trigger(id);
		toggle('update_resume_certificate');
	};

	const handleConfirmDelete = async (id) => {
		deleteCertificateMutation(id)
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
			cer_title: result?.data?.cer_title,
			cer_by: result?.data?.cer_by,
			redu_desc: result?.data?.redu_desc,
			cer_form: moment(result?.data?.cer_form).format('YYYY-MM-DD'),
			cer_to: moment(result?.data?.cer_form).format('YYYY-MM-DD'),
			cer_limit: result?.data?.cer_limit,
			resume_id: result?.data?.resume_id
		});
	}, [updateReset, result]);

	return (
		<Fragment>
			<Widget
				action='ADD'
				title='Chứng chỉ khác'
				className={cx('widget', 'widget-20')}
				id='t-resume-section'
				status='default'
				onOpenResume={() => toggle('resume_certificate')}
				onOpenTipSlide={() => toggleTips('t_resume_certificate')}
				avatar='https://static.careerbuilder.vn/themes/careerbuilder/img/dash-board/i10.png'>
				<div className={cx('content')}>
					<div className={cx('list-references')}>
						{resumeCertificate?.length > 0 ? (
							resumeCertificate?.map((item) => (
								<div className={cx('item')}>
									<div className={cx('title')}>
										<h4 className={cx('sub-title')}>{item?.cer_title}</h4>
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
											<li>{item?.cer_by}</li>
											<li>
												{formatDate(item.cer_form)}-
												{item.cer_limit ? 'Không giới hạn' : formatDate(item.cer_to)}
											</li>
										</ul>
									</div>
								</div>
							))
						) : (
							<NoContent onClick={() => toggle('resume_certificate')} title='Vui lòng thêm chứng chỉ khác' />
						)}
					</div>
				</div>
			</Widget>

			<ResumeModal
				isOpen={isShowing.resume_certificate}
				hide={() => toggle('resume_certificate')}
				className={cx}
				title='Thông Tin Chứng Chỉ'>
				<Form control={control} onSubmit={onCreateSubmit} handleSubmit={handleSubmit} cx={cx} watch={watch} />
			</ResumeModal>

			<ResumeModal
				isOpen={isShowing.update_resume_certificate}
				hide={() => toggle('update_resume_certificate')}
				className={cx}
				title='Thông Tin Chứng Chỉ'>
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
				isShowing={showTips.t_resume_certificate}
				hide={() => toggleTips('t_resume_certificate')}
				title='Để CV không chỉ Hay mà còn Đẹp trong mắt Nhà tuyển dụng'>
				<div className='swiper-wrapper'>
					Chứng chỉ khác:
					<br />
					Bạn có thể chọn hiển thị hoặc không hiển thị mục này trên CV
					<br />
					- Hãy điền đầy đủ các thông tin như ngày hoàn thành, tổ chức cấp.
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

const Form = ({ onSubmit, handleSubmit, control, cx, watch,data }) => {
	const cerLimit = watch('cer_limit');
	const [isDisabled, setIsDisabled] = useState(false);
	useEffect(() => {
		const cer_limit=data?.cer_limit
		if (cerLimit || cer_limit === 1) {
			setIsDisabled(true);
		} else {
			setIsDisabled(false);
		}
	}, [isDisabled, cerLimit,data]);

	return (
		<form name='references-form' id='references-form' onSubmit={handleSubmit(onSubmit)}>
			<div className={cx('form-group', 'row')}>
				<div className={cx('col-lg-12')}>
					<div className={cx('input-group')}>
						<InputFieldControl control={control} name='cer_title' id='cer_title' label='Tên chứng chỉ' />
					</div>
				</div>
			</div>
			<div className={cx('form-group', 'row')}>
				<div className={cx('col-lg-12')}>
					<div className={cx('input-group')}>
						<InputFieldControl control={control} name='cer_by' id='cer_by' label='Cấp bởi' />
					</div>
				</div>
			</div>
			<div className={cx('form-group', 'row')}>
				<div className={cx('col-lg-12')}>
					<div className={cx('input-group')}>
						<InputFieldControl control={control} name='cer_form' id='cer_form' label='Từ' type='date' />
					</div>
				</div>
			</div>
			<div className={cx('form-group', 'row')}>
				<div className={cx('col-lg-12')}>
					<div className={cx('input-group')}>
						<InputFieldControl
							control={control}
							name='cer_to'
							id='cer_to'
							label='Ngày hết hạn'
							type='date'
							disabled={isDisabled}
						/>
					</div>
				</div>
			</div>
			<div className={cx('row')}>
				<div className={cx('col-lg-12')}>
					<div style={{display:'flex',alignItems:'center',gap:6}}>
						<InputFieldControl
							style={{
								position: 'relative',
								top: 2,
								marginRight: 5
							}}
							control={control}
							name='cer_limit'
							id='cer_limit'
							label='Không giới hạn'
							type='checkbox'
							defaultChecked={cerLimit}
							checked={isDisabled}
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

export default ResumeCertificate;
