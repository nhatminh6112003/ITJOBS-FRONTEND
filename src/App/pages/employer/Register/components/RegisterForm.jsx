import React from 'react';
import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import InputFieldControl from '~/Core/components/common/FormControl/InputFieldControl';
import SelectFieldControl from '~/Core/components/common/FormControl/SelectFieldControl';
import { CompanyTypeArray } from '~/App/constants/companyEnum';
import { useGetAllProvincesQuery } from '~/App/providers/apis/listProvincesApi';
import { CompanySize } from '~/App/constants/companyEnum';
import { registerEmployerSchema } from '~/App/schemas/authSchema';
import { useRegisterMutation } from '~/App/providers/apis/authApi';
import { useCreateCompanyMutation } from '~/App/providers/apis/companyApi';
import { toast } from 'react-toastify';
import { useNavigate } from 'react-router-dom';
import routesPath from '~/App/config/routesPath';
import UserRoleEnum from '~/App/constants/roleEnum';
const RegisterForm = ({ cx }) => {
	const [registerMutation, { isLoading }] = useRegisterMutation();
	const [companyMutation] = useCreateCompanyMutation();
	const navigate = useNavigate();

	const { data: listProvinces } = useGetAllProvincesQuery({});
	const { control, handleSubmit, register } = useForm({
		defaultValues: {
			user_type_id: UserRoleEnum.EMPLOYER,
			...registerEmployerSchema.getDefault()
		},
		resolver: yupResolver(registerEmployerSchema)
	});
	const onSubmit = ({ confirm_password, email, password, user_type_id, lastname, firstname, ...data }) => {
		registerMutation({
			email,
			password,
			user_type_id,
			lastname,
			firstname
		}).then(async (result) => {
         if(result?.error){
            toast.error(result?.error?.data?.message);
            return;
         }
         
         if (result?.data?.status == 200){
            toast.success('Đăng ký thành công');
         }
			const userId=result?.data?.data.id;
         if(userId){
         const createCompany=await companyMutation({
            user_account_id:userId,
            ...data
         });
         navigate(routesPath.EmployerPaths.login)
         }
		
		});
	};
	return (
		<form name={cx('frmRegister')} id={cx('frmRegister')} onSubmit={handleSubmit(onSubmit)}>
			<div className={cx('step-1')}>
				<div className={cx('step-title', 'd-flex')}>
					<div className={cx('main-step-title')}>
						<h3>Bước 1 : Thông Tin Đăng Nhập</h3>
						<p>Quý khách sử dụng thông tin tài khoản này để đăng nhập vào CareerBuilder.vn</p>
					</div>
				</div>
				<div className={cx('main-form')}>
            <div className={cx('form-group', 'd-flex')}>
						<div className={cx('form-info')}>
							<span>Tên</span>
						</div>
						<div className={cx('form-input')}>
							<InputFieldControl
								name='firstname'
								id={cx('firstname')}
								className={cx('form-control')}
								placeholder='Vui lòng nhập thông tin'
								control={control}
							/>
						</div>
					</div>
                 <div className={cx('form-group', 'd-flex')}>
						<div className={cx('form-info')}>
							<span>Họ và tên lót</span>
						</div>
						<div className={cx('form-input')}>
							<InputFieldControl
								name='lastname'
								id={cx('lastname')}
								className={cx('form-control')}
								placeholder='Vui lòng nhập thông tin'
								control={control}
							/>
						</div>
					</div>
					<div className={cx('form-group', 'd-flex')}>
						<div className={cx('form-info')}>
							<span>Email đăng nhập</span>
						</div>
						<div className={cx('form-input')}>
							<InputFieldControl
								name='email'
								id={cx('email')}
								className={cx('form-control')}
								placeholder='Vui lòng nhập thông tin'
								control={control}
							/>
						</div>
					</div>

					<div className={cx('form-group', 'd-flex')}>
						<div className={cx('form-info')}>
							<span>Mật khẩu</span>
						</div>
						<div className={cx('form-input')}>
							<InputFieldControl
								type='password'
								name='password'
								id={cx('password')}
								className={cx('form-control')}
								placeholder='Vui lòng nhập thông tin'
								control={control}
							/>
						</div>
					</div>
					<div className={cx('form-group', 'd-flex')}>
						<div className={cx('form-info')}>
							<span>Xác nhận mật khẩu</span>
						</div>
						<div className={cx('form-input')}>
							<InputFieldControl
								type='password'
								name='confirm_password'
								id={cx('confirm_password')}
								className={cx('form-control')}
								placeholder='Vui lòng nhập thông tin'
								control={control}
							/>
						</div>
					</div>
			
				</div>
			</div>
			<div className={cx('step-2')} id='step-2'>
				<div className={cx('step-title', 'd-flex')}>
					<div className={cx('main-step-title')}>
						<h3>Bước 2 : Thông Tin Công Ty</h3>
						<p>Thông tin doanh nghiệp của Quý Công ty trên CareerBuilder</p>
					</div>
				</div>
				<div className={cx('main-form')}>
					<div className={cx('form-group', 'd-flex')}>
						<div className={cx('form-info')}>
							<span>Tên công ty</span>
						</div>
						<div className={cx('form-input')}>
							<InputFieldControl
								name='company_name'
								id={cx('company_name')}
								className={cx('form-control')}
								placeholder='Vui lòng nhập thông tin'
								control={control}
							/>
						</div>
					</div>
					<div className={cx('form-group', 'd-flex')}>
						<div className={cx('form-info')}>
							<span>Loại hình hoạt động</span>
						</div>
						<div className={cx('form-input', 'short', 'form-input-select')}>
							<SelectFieldControl
								className={cx('form-control')}
								control={control}
								id='company_type'
								name='company_type'
								options={CompanyTypeArray}
							/>
						</div>
					</div>
					<div className={cx('form-group', 'd-flex')}>
						<div className={cx('form-info')}>
							<span>Chọn số nhân viên</span>
						</div>
						<div className={cx('form-input', 'short', 'form-input-select')}>
							<SelectFieldControl
								className={cx('form-control')}
								control={control}
								name='company_size'
								options={CompanySize}
								initialValue={'Chọn số nhân viên'}
							/>
						</div>
					</div>
					<div className={cx('form-group', 'd-flex')}>
						<div className={cx('form-info')}>
							<span id='lable_location'>Tỉnh / TP</span>
						</div>
						<div className={cx('form-input', 'short', 'form-input-select')}>
							<SelectFieldControl
								className={cx('form-control')}
								name='provinces'
								control={control}
								options={listProvinces?.map((item) => ({ label: item.name, value: item.code }))}
							/>
						</div>
					</div>
					<div className={cx('form-group', 'd-flex')}>
						<div className={cx('form-info')}>
							<span>Địa chỉ công ty</span>
						</div>
						<div className={cx('form-input')}>
							<InputFieldControl
								name='address'
								id={cx('address')}
								className={cx('form-control')}
								placeholder='Vui lòng nhập thông tin'
								control={control}
							/>
						</div>
					</div>
					<div className={cx('form-group', 'd-flex', 'info-company')}>
						<div className={cx('form-info')}>
							<span>Sơ lược về công ty</span>
						</div>
						<div className={cx('form-input')}>
							<textarea {...register('company_summary')} className={cx('form-control')} rows={5} />
						</div>
						<div className={cx('noti')}>
							<div className={cx('toolip')}>
								<p>
									<strong>Gợi ý</strong>
								</p>
								<p>
									Giới thiệu thông tin về công ty là cách tốt nhất làm nổi bật công ty của Quý khách trước các
									ứng viên tiềm năng. Một bản sơ lược tốt về công ty sẽ gây ấn tượng đối với ứng viên, khiến họ
									chọn công ty của Quý khách làm nơi phát triển nghề nghiệp lâu dài.
								</p>
								<p>
									Hãy giới thiệu các đặc trưng của công ty bằng cách trình bày nhiều thông tin hấp dẫn về công
									ty:
								</p>
								<ul>
									<p>Năm thành lập công ty</p>
									<p>Vị trí tọa lạc ( thành phố/ quận/huyện)</p>
									<p>Quốc tịch (công ty Việt Nam hay chi nhánh tập đoàn nước ngoài)</p>
									<p>Dòng sản phẩm/các dịch vụ</p>
									<p>Quy mô công ty (số nhân viên, văn phòng, nhà máy)</p>
									<p>Hoạt động và thành tựu kinh doanh</p>
								</ul>
							</div>
						</div>
					</div>
					<div className={cx('form-group', 'd-flex')}>
						<div className={cx('form-info')}>
							<span>Tên người liên hệ</span>
						</div>
						<div className={cx('form-input')}>
							<InputFieldControl
								name='contact_name'
								id={cx('contact_name')}
								className={cx('form-control')}
								placeholder='Vui lòng nhập thông tin'
								control={control}
							/>
						</div>
					</div>
					<div className={cx('form-group', 'd-flex')}>
						<div className={cx('form-info')}>
							<span>Điện thoại</span>
						</div>
						<div className={cx('form-input')}>
							<InputFieldControl
								name='contact_phone'
								id={cx('contact_phone')}
								className={cx('form-control')}
								placeholder='Vui lòng nhập thông tin'
								control={control}
							/>
						</div>
					</div>
					<div className={cx('form-group', 'd-flex')}>
						<div className={cx('form-info')}>
							<span>Mã số thuế</span>
						</div>
						<div className={cx('form-input')}>
							<InputFieldControl
								name='tax_code'
								id={cx('tax_code')}
								className={cx('form-control')}
								placeholder='Vui lòng nhập mã số thuế'
								control={control}
							/>
						</div>
					</div>
					<div className={cx('btn-area', 'list-btn')}>
						<div >
							{/* Quay lại */}
						</div>
						<button className={cx('btn-action')} type='submit'>
							Đăng ký
						</button>
					</div>
					<div className='right-note'>
						<p>
							Bằng việc nhấp vào "Đăng Ký Ngay!", bạn đã đồng ý với các điều khoản ghi trong
							<a href='https://careerbuilder.vn/vi/jobseekers/use'>Thỏa thuận dịch vụ của CareerBuilder.vn.</a>
						</p>
					</div>
				</div>
			</div>
		</form>
	);
};

export default RegisterForm;
