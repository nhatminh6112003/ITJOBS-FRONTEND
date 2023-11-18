import React from 'react';
import { useLocation } from 'react-router-dom';
import styles from './vnpayReturn.module.css';
import classNames from 'classnames/bind';
import { Link } from "react-router-dom";
const sx = classNames.bind(styles);
const VnpayReturn = () => {
	const location = useLocation();
	const queryParams = new URLSearchParams(location.search);
	const vnp_OrderInfo = queryParams.get('vnp_OrderInfo');
	const vnp_TransactionStatus = queryParams.get('vnp_TransactionStatus');
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
						<Link to="/employers/dashboard">Quay lại trang chủ</Link>
					</button>
				</div>
			</div>
		</div>
	);
};

export default VnpayReturn;
