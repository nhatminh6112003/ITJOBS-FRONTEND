import React, { useEffect } from 'react';
import { useLocation, useSearchParams } from 'react-router-dom';
import styles from './vnpayReturn.module.css';
import classNames from 'classnames/bind';
import { Link } from 'react-router-dom';
import { useCreateCompany_serviceMutation } from '~/App/providers/apis/company_serviceApi';
import { useCreateOrderMutation } from '~/App/providers/apis/orderApi';
const sx = classNames.bind(styles);
const VnpayReturn = () => {
	const location = useLocation();
	const queryParams = new URLSearchParams(location.search);
	const vnp_OrderInfo = queryParams.get('vnp_OrderInfo');
	// user_account_id company_id service_id
	const vnp_TransactionStatus = queryParams.get('vnp_TransactionStatus');
	const [searchParams, setSearchParams] = useSearchParams();
	const [CreateCompanyService] = useCreateCompany_serviceMutation();
	const [createOrder] = useCreateOrderMutation();

	useEffect(() => {
		if (vnp_TransactionStatus === '00' && vnp_OrderInfo) {
			const array = vnp_OrderInfo?.trim().split(' ');
			console.log(array);

			CreateCompanyService({ user_account_id: array[0], company_id: array[1], service_id: array[2] }).unwrap();
			if (searchParams.has('vnp_OrderInfo')) {
				const total = searchParams.get('vnp_Amount');
				console.log(Number(total) / 100);
				createOrder({
					company_id: array[1],
					total: Number(total) / 100,
					status: 'SUCCESS'
				})
					.unwrap()
					.then((r) => {
						console.log(r);
					})
					.catch((err) => {
						console.log(err);
					});
			}
		}
		if (searchParams.has('vnp_OrderInfo')) {
			const token = searchParams.get('vnp_OrderInfo');
			if (token) {
				searchParams.delete('vnp_OrderInfo');
				console.dir(searchParams.toString());
				setSearchParams(searchParams);
			}
		}
	}, [CreateCompanyService, createOrder, searchParams, setSearchParams, vnp_OrderInfo, vnp_TransactionStatus]);
	return (
		<div className={sx('container')}>
			<div className={sx('center-div')}>
				{vnp_TransactionStatus === '00' ? (
					<h1 className={sx('success')}>Chúc mừng giao dịch thành công</h1>
				) : (
					<h1 className={sx('error')}>Xin lỗi giao dịch thất bại</h1>
				)}
				<div>
					<button className={sx('button-76')} role='button'>
						<Link to='/employers/dashboard'>Quay lại trang chủ</Link>
					</button>
				</div>
			</div>
		</div>
	);
};

export default VnpayReturn;
