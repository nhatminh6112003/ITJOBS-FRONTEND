import classNames from 'classnames/bind';
import { useForm } from 'react-hook-form';
import { useSelector } from 'react-redux';
import { toast } from 'react-toastify';
import { CompanySize, CompanyTypeArray } from '~/App/constants/companyEnum';
import { useGetOneCompanyQuery, useUpdateCompanyMutation } from '~/App/providers/apis/companyApi';
import FileUploadFieldControl from '~/Core/components/common/FormControl/FileUploadFieldControl/FileUploadFieldControl';
import InputFieldControl from '~/Core/components/common/FormControl/InputFieldControl';
import SelectFieldControl from '~/Core/components/common/FormControl/SelectFieldControl';
import TextAreaFieldControl from '~/Core/components/common/FormControl/TextAreaFieldControl';
import styles from './editEmployer.module.css';
const sx = classNames.bind(styles);
const EditEmployer = ({ cx }) => {
	const employer = useSelector((state) => state.auth?.employer);
	const companyId = employer?.company?.id;
	const { data: company } = useGetOneCompanyQuery(companyId);
	const [updateCompany] = useUpdateCompanyMutation();

	const {
		handleSubmit,
		control,
		formState: { errors },
		watch,
		setValue
	} = useForm({
		values: company && {
			company_name: company?.data?.company_name,
			company_type: company?.data?.company_type,
			company_size: company?.data?.company_size,
			tax_code: company?.data?.tax_code,
			address: company?.data?.address,
			contact_name: company?.data?.contact_name,
			contact_phone: company?.data?.contact_phone,
			position: company?.data?.position,
			company_website_url: company?.data?.company_website_url,
			company_summary: company?.data?.company_summary
		}
	});
	const logo = watch('logo');
	const banner = watch('banner');

	const onSubmit = ({ banner, logo, ...data }) => {
		const formData = new FormData();

		Object.entries(data).forEach(([key, value]) => {
			formData.append(key, value);
		});
		formData.append('files', logo);
		formData.append('files', banner);

		updateCompany({
			id: companyId,
			payload: formData
		})
			.unwrap()
			.then((r) => {
				if (r.status == 200) {
					toast.success('Sửa thành công');
					return;
				}
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
						<div className={sx('right-heading')}>
							{' '}
							<a className={sx('support')} href='https://careerbuilder.vn/vi/employers/faq'>
								Hướng dẫn{' '}
							</a>
						</div>
					</div>
					<div className={sx('main-tabslet')} data-toggle='tabslet'>
						<ul className={sx('tabslet-tab')}>
							<li>
								<a href='https://careerbuilder.vn/vi/employers/hrcentral/accounts/1' alt='Quản lý user'>
									<span>Quản lý user</span>
								</a>
							</li>
							<li className={sx('active')}>
								<a
									href='https://careerbuilder.vn/vi/employers/hrcentral/accounts/edit_employer'
									alt='Thông tin công ty'>
									<span>Thông tin công ty</span>
								</a>
							</li>
							<li>
								<a
									href='https://careerbuilder.vn/vi/employers/hrcentral/accounts/edit_contact'
									alt='Thông tin liên hệ'>
									<span>Thông tin liên hệ</span>
								</a>
							</li>
							<li>
								<a
									href='https://careerbuilder.vn/vi/employers/hrcentral/accounts/worklocation'
									alt='Quản Lý Địa Điểm Làm Việc'>
									<span>Quản Lý Địa Điểm Làm Việc</span>
								</a>
							</li>
							<li>
								<a
									href='https://careerbuilder.vn/vi/employers/hrcentral/accounts/report_task_log'
									alt='Báo cáo tác vụ'>
									<span>Báo cáo tác vụ</span>
								</a>
							</li>
							<li>
								<a
									href='https://careerbuilder.vn/vi/employers/hrcentral/accounts/changepassword'
									alt='Đổi mật khẩu'>
									<span>Đổi mật khẩu</span>
								</a>
							</li>
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
											<div className={sx('col-lg-6')}>
												<div className={sx('form-group')}>
													<InputFieldControl control={control} name='company_name' label='Tên công ty' />
												</div>
											</div>
										</div>
										<div className={cx('row')}>
											<div className={cx('col-lg-6')}>
												<div className={sx('form-group', 'form-select')}>
													<SelectFieldControl
														name='company_type'
														label='Loại hình hoạt động'
														control={control}
														options={CompanyTypeArray}
													/>
												</div>
											</div>
											<div className={cx('col-lg-6')}>
												<div className={sx('form-group', 'form-select')}>
													<SelectFieldControl
														name='company_size'
														label='Tổng số nhân viên'
														control={control}
														options={CompanySize}
													/>
												</div>
											</div>
										</div>
										<div className={sx('row')}>
											<div className={sx('col-lg-6')}>
												<div className={sx('form-group')}>
													<InputFieldControl
														control={control}
														name='company_website_url'
														label='Website công ty'
													/>
												</div>
											</div>
											<div className={sx('col-lg-6')}>
												<div className={sx('form-group')}>
													<InputFieldControl control={control} name='tax_code' label='Mã số thuế' />
												</div>
											</div>
										</div>
									</div>
									<div className={sx('form-wrap', 'logo-wrap')}>
										<div className={sx('main-image')}>
											<div className={sx('form-group')}>
												<p className={sx('title-label')}>Logo</p>
											</div>
											{(logo && logo instanceof Blob) || company?.data?.logo ? (
												<div className={sx('list-image')}>
													<div className={cx('image-item')} id='logo_path'>
														<img
															src={
																logo && logo instanceof Blob
																	? URL.createObjectURL(logo)
																	: `${import.meta.env.VITE_IMAGE_URL}/${company?.data?.logo}`
															}
															width={95}
															height={50}
														/>
													</div>
												</div>
											) : null}

											<div className={sx('upload-img')}>
												<FileUploadFieldControl
													htmlFor='logo'
													control={control}
													name='logo'
													label={
														<div style={{ display: 'flex', alignItems: 'center' }}>
															<em className={cx('material-icons')}>folder_open</em> Tải ảnh từ máy tính
														</div>
													}
												/>

												<div className={sx('noti')}>
													{' '}
													<em className={cx('material-icons')}>info </em>
													<div className={cx('toolip')}>
														<p>Định dạng: gif, jpg, png, kích thước đẹp nhất 240x160px</p>
													</div>
												</div>
											</div>
										</div>
									</div>
									<div className={sx('form-wrap', 'banner-wrap')}>
										<div className={sx('main-image')}>
											<div className={sx('form-group')}>
												<p className={sx('title-label')}>
													Cover/ Banner
													<a
														className={sx('btn-view-banner-location')}
														href='https://static.careerbuilder.vn/themes/kiemviecv32/employersnews/images/graphics/cover-tip.jpg'>
														<img
															src='https://static.careerbuilder.vn/themes/kiemviecv32/images/icons/icon_help.png'
															align='absmiddle'
															title='Click để xem vị trí của Cover / Banner'
														/>
														Click để xem vị trí của Cover / Banner{' '}
													</a>
												</p>
											</div>
											{(banner && banner instanceof Blob) || company?.data?.banner ? (
												<div className={sx('list-image')}>
													<div className={cx('image-item')} id='logo_path'>
														<img
															src={
																banner && banner instanceof Blob
																	? URL.createObjectURL(banner)
																	: `${import.meta.env.VITE_IMAGE_URL}/${company?.data?.banner}`
															}
															width={95}
															height={50}
														/>
													</div>
												</div>
											) : null}
											<div className={sx('upload-img')}>
												<FileUploadFieldControl
													htmlFor='banner'
													control={control}
													name='banner'
													label={
														<div style={{ display: 'flex', alignItems: 'center' }}>
															<em className={cx('material-icons')}>folder_open</em> Tải ảnh từ máy tính
														</div>
													}
												/>

												<div className={sx('noti')}>
													{' '}
													<em className={cx('material-icons')}>info </em>
													<div className={sx('toolip')}>
														<p>Định dạng: *.gif, *.jpg, *.png. Kích thước đẹp nhất 1410x290px</p>
													</div>
												</div>
											</div>
										</div>
									</div>
									<div className={sx('form-wrap')}>
										<div className={sx('form-group', 'form-editor')} id='div_jobdesc'>
											<TextAreaFieldControl
												control={control}
												name='company_summary'
												label='Giới thiệu về công ty'
											/>

											<div className={sx('note')}>
												<p> </p>
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

export default EditEmployer;
