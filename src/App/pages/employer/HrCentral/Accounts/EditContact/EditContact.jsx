import classNames from 'classnames/bind';
import { useForm } from 'react-hook-form';
import { useSelector } from 'react-redux';
import { toast } from 'react-toastify';
import { useGetOneCompanyQuery, useUpdateCompanyMutation } from '~/App/providers/apis/companyApi';

import InputFieldControl from '~/Core/components/common/FormControl/InputFieldControl';

import TextAreaFieldControl from '~/Core/components/common/FormControl/TextAreaFieldControl';
import styles from '../EditEmployer/editEmployer.module.css';
import { Link, useLocation } from 'react-router-dom';
import { useGetAllProvincesQuery } from '~/App/providers/apis/listProvincesApi';
import TabMenu from '../components/TabMenu';
import { useEffect } from 'react';
import SelectFieldControl from '~/Core/components/common/FormControl/SelectFieldControl';
const sx = classNames.bind(styles);
const EditContact = ({ cx }) => {
	const location = useLocation();
	const currentPath = location.pathname;
	const employer = useSelector((state) => state.auth?.employer);
	const companyId = employer?.company?.id;
	const { data: company } = useGetOneCompanyQuery(companyId);
	const [updateCompany] = useUpdateCompanyMutation();
	const { data: listProvinces } = useGetAllProvincesQuery();
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
			company_summary: company?.data?.company_summary,
			provinces: company?.data?.provinces,
			email: company?.data?.user_account?.email,
			lastname: company?.data?.user_account?.lastname,
			firstname: company?.data?.user_account?.firstname,
			user_account_id: company?.data?.user_account?.id
		}
	});
	const onSubmit = ({ banner, logo, ...data }) => {
		const formData = new FormData();

		Object.entries(data).forEach(([key, value]) => {
			formData.append(key, value);
		});

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
									<h2 className={sx('title-application', 'no-bg', 'no-pad')}>CHỈNH SỬA THÔNG TIN LIÊN HỆ</h2>
									<h2 className={sx('title-application')}>THÔNG TIN LIÊN HỆ</h2>
									<div className={sx('form-wrap')}>
										<div className={sx('row')}>
											<div className={cx('col-lg-6')}>
												<div className={sx('form-group')}>
													<InputFieldControl control={control} name='contact_name' label='Tên liên hệ ' />
												</div>
											</div>
											{/* <div className={cx('col-lg-6')}>
												<div className={sx('form-group')}>
													<InputFieldControl control={control} name='lastname' label='Tên' />
												</div>
											</div> */}
										</div>
										<div className={sx('row')}>
											<div className={cx('col-lg-6')}>
												<div className={sx('form-group')}>
													<InputFieldControl control={control} name='position' label='Chức vụ' />
												</div>
											</div>
										</div>
										<div className={sx('row')}>
											<div className={cx('col-lg-6')}>
												<div className={sx('form-group')}>
													<InputFieldControl
														control={control}
														name='email'
														label='Email liên hệ'
														disabled
													/>
												</div>
											</div>
										</div>
									</div>
									<h2 className={sx('title-application')}>ĐỊA CHỈ LIÊN HỆ</h2>
									<div className={sx('form-wrap')}>
										<div className={sx('row')}>
											<div className={sx('col-lg-6')}>
												<div className={sx('form-group')}>
													<InputFieldControl control={control} name='address' label='Địa chỉ' />
												</div>
											</div>
										</div>
										<div className={sx('row')}>
											<div className={sx('col-lg-6')}>
												<div className={sx('form-group')}>
													<SelectFieldControl
														control={control}
														name='provinces'
														label='Tỉnh/Thành phố'
														options={listProvinces?.map((item) => ({
															label: item.name,
															value: item.code
														}))}
													/>
												</div>
											</div>
										</div>
										<div className={sx('row')}>
											<div className={sx('col-lg-6')}>
												<div className={sx('form-group')}>
													<InputFieldControl
														control={control}
														name='contact_phone'
														label='Số điện thoại'
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

export default EditContact;
