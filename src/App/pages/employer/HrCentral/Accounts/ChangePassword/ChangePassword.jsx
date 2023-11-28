import classNames from 'classnames/bind';
import { useForm } from 'react-hook-form';
import { useSelector } from 'react-redux';
import { toast } from 'react-toastify';
import InputFieldControl from '~/Core/components/common/FormControl/InputFieldControl';
import styles from '../EditEmployer/editEmployer.module.css';
import { Link, useLocation } from 'react-router-dom';
import TabMenu from '../components/TabMenu';
import { useChangePasswordMutation, useGetOneUserQuery } from '~/App/providers/apis/userApi';
import { useEffect } from 'react';
import { changePasswordSchema } from '~/App/schemas/authSchema';
import { yupResolver } from '@hookform/resolvers/yup';

const sx = classNames.bind(styles);
const ChangePassword = ({ cx }) => {
	const location = useLocation();
	const currentPath = location.pathname;
	const employer = useSelector((state) => state.auth?.employer);
	const { data: user } = useGetOneUserQuery(employer.id);
	const [changePassword] = useChangePasswordMutation();

	const {
		handleSubmit,
		control,
		formState: { errors }
	} = useForm({
		values: user && {
			email: user?.email || '',
			password: '',
			newPassword: '',
			confirmPassword: ''
		},
		resolver: yupResolver(changePasswordSchema)
	});

	const onSubmit = (data) => {
		changePassword({
			id: user.id,
			payload: data
		})
			.unwrap()
			.then((r) => {
				if (r.status == 200) {
					toast.success('Thay đổi thành công');
					return;
				}
			})
			.catch((err) => {
				toast.error(err.data.message);
			});
	};

	return (
		<section className={sx('manage-job-posting-post-jobs', 'cb-section', 'bg-manage')}>
			<div className={cx('container')}>
				<div className={sx('box-manage-job-posting')}>
					<div className={sx('heading-manage')}>
						<div className={sx('left-heading')}>
							<h1 className={sx('title-manage')}> Thông Tin Tài Khoản</h1>
						</div>
					</div>
					<div className={sx('main-tabslet')} data-toggle='tabslet'>
						<ul className={sx('tabslet-tab')}>
							{TabMenu.map((item) => (
								<li className={sx(currentPath == item.path && 'active')}>
									<Link to={item.path} alt={item.title}>
										{item.title}
									</Link>
								</li>
							))}
						</ul>
						<div className={sx('tabslet-content', 'active')} id='tab-2'>
							<form
								name='editCompany'
								onSubmit={handleSubmit(onSubmit)}
								id='editCompany'
								action=''
								encType='multipart/form-data'>
								<div className={sx('main-application-information')}>
									<h2 className={sx('title-application', 'no-bg', 'no-pad')}>CHỈNH SỬA THÔNG TIN CÔNG TY</h2>
									<h2 className={sx('title-application')}>THÔNG TIN CÔNG TY</h2>
									<div className={sx('form-wrap')}>
										<div className={sx('row')}>
											<div className={cx('col-lg-6')}>
												<div className={sx('form-group')}>
													<InputFieldControl
														control={control}
														name='email'
														label='Email/Tên đăng nhập'
														disabled
													/>
												</div>
											</div>
										</div>
										<div className={sx('row')}>
											<div className={cx('col-lg-6')}>
												<div className={sx('form-group')}>
													<InputFieldControl
														control={control}
														name='password'
														label='Mật khẩu cũ'
														type='password'
													/>
												</div>
											</div>
										</div>
										<div className={sx('row')}>
											<div className={cx('col-lg-6')}>
												<div className={sx('form-group')}>
													<InputFieldControl
														control={control}
														name='newPassword'
														label='Mật khẩu mới'
														type='password'
													/>
												</div>
											</div>
										</div>
										<div className={sx('row')}>
											<div className={cx('col-lg-6')}>
												<div className={sx('form-group')}>
													<InputFieldControl
														control={control}
														name='confirmPassword'
														label='Xác nhận mật khẩu mới'
													/>
												</div>
											</div>
										</div>
									</div>

									<div className={sx('form-group', 'form-submit', 'form-continue')}>
										<button
											className={sx('btn-gradient', 'btn-submit')}
											type='submit'
											id='update_info_company_form'>
											Cập nhật
										</button>
									</div>
								</div>
							</form>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
};

export default ChangePassword;
