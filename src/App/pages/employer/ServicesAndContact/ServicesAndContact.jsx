import React, { useEffect, useState } from 'react';
import styles from './servicesAndContact.module.css';
import classNames from 'classnames/bind';
const sx = classNames.bind(styles);
import { useSelector } from 'react-redux';
import { yupResolver } from '@hookform/resolvers/yup';
import { useForm } from 'react-hook-form';
import { contactSchema } from '~/App/schemas/contactSchema';
import InputFieldControl from '~/Core/components/common/FormControl/InputFieldControl';
import SelectFieldControl from '~/Core/components/common/FormControl/SelectFieldControl';
import { useGetAllServiceTypeQuery } from '~/App/providers/apis/serviceTypeApi';
import { useCreatePaymentUrlMutation, useGetAllByServiceTypeQuery } from '~/App/providers/apis/serviceApi';
const ServicesAndContact = ({ cx }) => {
	const employer = useSelector((state) => state.auth?.employer);
	const [CreatePaymentUrl] = useCreatePaymentUrlMutation();
	const { data: listServiceType } = useGetAllServiceTypeQuery();
	const {
		control: addFormControl,
		handleSubmit: handleUpdateSubmit,
		reset: updateReset,
		watch,
		setValue
	} = useForm({
		resolver: yupResolver(contactSchema)
	});
	const onUpdateSubmit = async (data) => {
		const array = data?.service?.trim().split(' ');
		const info = employer?.id + ' ' + employer?.company?.id + ' ' + array[0];
		CreatePaymentUrl({
			amount: array[1],
			language: 'vn',
			info: info
		})
			.unwrap()
			.then((res) => (window.location = res.data));
	};
	const selectedServiceType = watch('service_type', null);
	const selectedService = watch('service', null);
	const { data: listService } = useGetAllByServiceTypeQuery(
		{
			id: selectedServiceType
		},
		{
			skip: !selectedServiceType
		}
	);
	useEffect(() => {
		updateReset({
			name: employer?.firstname + ' ' + employer?.lastname,
			contact_phone: employer?.company?.contact_phone,
			email: employer?.email,
			company_name: employer?.company?.company_name,
			company_size: employer?.company?.company_size,
			address: employer?.company?.address
		});
	}, [updateReset, employer]);
	return (
		<section className={sx('employer-contact-us', 'cb-section')}>
			<div className={cx('container')}>
				<div className={sx('cb-title', 'cb-title-center')}>
					<h2> Liên hệ</h2>
				</div>
				<div className={sx('box-contact-us')}>
					<div className={cx('row', 'no-gutters')}>
						<div className={cx('col-lg-6')}>
							<div className={sx('box-left')}>
								<ul className={sx('contact-list')}>
									<li>
										<p className={sx('title')}>Hà Nội</p>
										<p>
											{' '}
											<em className={sx('mdi', 'mdi-phone')}> </em>Điện thoại : 0921706999
										</p>
										<p>
											{' '}
											<em className={sx('mdi', 'mdi-email')}> </em>Email : caodangfpt@gmail.com
										</p>
										<p>
											{' '}
											<em className={sx('mdi', 'mdi-map-marker')}> </em>Địa chỉ : Cao đẳng FPT Phố Trịnh Văn
											Bô , Phường Phương Canh , quận Từ Liêm
										</p>
									</li>
								</ul>
								{/* <div className={sx('maps')}>
									<iframe
										id='map_cb_office'
										src='https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3919.3639812238152!2d106.68978781523721!3d10.783409692316816!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x31752f31657477bf%3A0x9c5d979e75996fc4!2zMTM5IFBhc3RldXIsIFBoxrDhu51uZyA2LCBRdeG6rW4gMywgVGjDoG5oIHBo4buRIEjhu5MgQ2jDrSBNaW5oLCBWaeG7h3QgTmFt!5e0!3m2!1svi!2s!4v1609139708588!5m2!1svi!2s'
										width='100%'
										height={580}
										frameBorder={0}
										style={{ border: 0, verticalAlign: 'middle' }}
										allowFullScreen=''
										aria-hidden='false'
										tabIndex={0}
									/>
								</div> */}
							</div>
						</div>
						<div className={cx('col-lg-6')}>
							<div className={sx('main-form', 'box-right')}>
								<h3 className={sx('form-title')}> Liên hệ chuyên viên tư vấn của JobHunter.com </h3>
								<div className={sx('contact-us-form')}>
									<Form
										selectedService={selectedService}
										control={addFormControl}
										onSubmit={onUpdateSubmit}
										handleSubmit={handleUpdateSubmit}
										cx={cx}
										listServiceType={listServiceType}
										listService={listService}
										setValue={setValue}
										employer={employer}
									/>
									{selectedService && <>{selectedService?.price}</>}
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
};

export const Form = ({ onSubmit, handleSubmit, control, cx, listServiceType, listService, selectedService }) => {
	return (
		<form name='frmContactUs' id='frmContactUs' onSubmit={handleSubmit(onSubmit)}>
			<div className={cx('form-group', 'row')}>
				<div className={cx('col-lg-12')}>
					<div className={sx('form-group', 'form-text')}>
						<InputFieldControl control={control} name='name' id='name' />
						<label htmlFor=''>
							Họ tên<font style={{ color: 'red' }}>*</font>
						</label>
					</div>
				</div>
				<div className={cx('col-lg-12')}>
					<div className={sx('form-group', 'form-text')}>
						<InputFieldControl control={control} name='contact_phone' id='contact_phone' />
						<label htmlFor=''>
							Điện thoại<font style={{ color: 'red' }}>*</font>
						</label>
					</div>
				</div>
				<div className={cx('col-lg-12')}>
					<div className={sx('form-group', 'form-text')}>
						<InputFieldControl control={control} name='email' id='email' />
						<label htmlFor=''>
							Email<font style={{ color: 'red' }}>*</font>
						</label>
					</div>
				</div>
				<div className={cx('col-lg-12')}>
					<div className={sx('form-group', 'form-text')}>
						<InputFieldControl control={control} name='company_name' id='company_name' />
						<label htmlFor=''>
							Tên Công ty<font style={{ color: 'red' }}>*</font>
						</label>
					</div>
				</div>
				<div className={cx('col-lg-12')}>
					<div className={sx('form-group', 'form-text')}>
						<InputFieldControl control={control} name='company_size' id='company_size' />
						<label htmlFor=''>
							Quy mô công ty<font style={{ color: 'red' }}>*</font>
						</label>
					</div>
				</div>
				<div className={cx('col-lg-12')}>
					<div className={sx('form-group', 'form-text')}>
						<InputFieldControl control={control} name='address' id='address' />
						<label htmlFor=''>
							Địa chỉ<font style={{ color: 'red' }}>*</font>
						</label>
					</div>
				</div>
				<div className={cx('col-lg-12')}>
					<div className={sx('form-group', 'form-select')}>
						<label htmlFor=''>Loại dịch vụ</label>
						<SelectFieldControl
							control={control}
							name='service_type'
							id='service_type'
							options={listServiceType?.data.map((value) => {
								return {
									value: value.id,
									label: value.name
								};
							})}
						/>
					</div>
				</div>
				<div className={cx('col-lg-12')}>
					<div className={sx('form-group', 'form-select')}>
						<label htmlFor=''>
							Sản phẩm/Dịch vụ Quý khách quan tâm
							<font style={{ color: 'red' }}>*</font>
						</label>
						<SelectFieldControl
							control={control}
							name='service'
							id='service'
							options={listService?.data.map((value) => {
								const formattedPrice = parseFloat(value.price).toLocaleString('vi-VN', {
									style: 'currency',
									currency: 'VND'
								});
								return {
									value: value.id + ' ' + value.price,
									label: value.name + '. Giá: ' + formattedPrice
								};
							})}
						/>
					</div>
				</div>
			</div>
			<div className={sx('form-group', 'form-submit')}>
				<div className={cx('button-save', 'button-center')}>
					<button className={sx('btn-gradient')} type='submit'>
						Thanh Toán
					</button>
				</div>
			</div>
		</form>
	);
};

export default ServicesAndContact;
