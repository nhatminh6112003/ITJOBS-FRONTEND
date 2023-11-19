import { yupResolver } from '@hookform/resolvers/yup';
import React, { useEffect } from 'react';
import { useForm } from 'react-hook-form';
import { useSelector } from 'react-redux';
import { toast } from 'react-toastify';
import { feedBackEnum } from '~/App/constants/feedBackEnum';
import { useCreateFeedBackMutation } from '~/App/providers/apis/feedbackApi';
import { feedBackSchema } from '~/App/schemas/feedBackSchema';
import InputFieldControl from '~/Core/components/common/FormControl/InputFieldControl';
import SelectFieldControl from '~/Core/components/common/FormControl/SelectFieldControl';
import Modal from '~/Core/components/common/Modal';

const FeedBackModal = ({ isOpen, onRequestClose, currentUrl, sx, cx }) => {
	const user = useSelector((state) => state.auth.user);

	const {
		handleSubmit,
		control,
		setValue,
		formState: { errors }
	} = useForm({
		resolver: yupResolver(feedBackSchema),
		values: {
			email: user?.email || '',
			reason: ''
		}
	});
	const [createFeedBack] = useCreateFeedBackMutation();
	useEffect(() => {
		if (user?.email) {
			setValue('email', user.email);
		}
	}, [user?.email, setValue]);
	const onSubmit = (data) => {
		const arg = {
			...data,
			job_url: currentUrl
		};
		createFeedBack(arg)
			.unwrap()
			.then((value) => {
				onRequestClose();
				toast.success('Báo xấu thành công');
			})
			.catch((error) => {
				toast.error(error.data.message);
			});
	};
	return (
		<Modal isOpen={isOpen} onRequestClose={onRequestClose}>
			<div className={sx('fancybox-content')}>
				<div
					className={sx('modal-title')}
					style={{
						marginBottom: '32px',
						minHeight: '48px',
						display: 'flex',
						alignItems: 'center',
						justifyContent: 'center',
						backgroundColor: '#eeeeee',
						textAlign: 'center'
					}}>
					<p
						style={{
							fontSize: '18px',
							color: '#5d677a',
							fontWeight: 'bold',
							lineHeight: 1
						}}>
						Vì sao bạn muốn báo xấu nhà tuyển dụng này?{' '}
					</p>
				</div>
				<div className={sx('modal-body')}>
					<form onSubmit={handleSubmit(onSubmit)} autoComplete='off'>
						<div className={sx('form-group')} style={{ marginBottom: '12px' }}>
							<InputFieldControl
								name='email'
								placeholder='Nhập địa chỉ email'
								type='text'
								control={control}
								defaultValue={user?.email || ''}
								style={{ marginBottom: '12px', padding: '4px', border: '1px solid #5d677a', width: '100%' }}
							/>
						</div>
						<div className={cx('list-radio')} style={{ marginBottom: '20px' }}>
							<SelectFieldControl
								name='reason'
								control={control}
								options={feedBackEnum.map((item) => ({ value: item.value, label: item.label }))}
							/>
						</div>
						<div className={sx('form-group')} style={{ clear: 'left' }}>
							<button className={cx('btn-send-report')} type='submit'>
								{' '}
								Báo xấu{' '}
							</button>
						</div>
					</form>
				</div>
			</div>
		</Modal>
	);
};

export default FeedBackModal;
