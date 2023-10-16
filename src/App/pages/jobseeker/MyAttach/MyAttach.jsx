import React, { useState } from 'react';
import styles from './myAttach.module.css';
import classNames from 'classnames/bind';
import { useSelector } from 'react-redux';
import { useCreateMyAttachMutation } from '~/App/providers/apis/myAttachApi';
import { toast } from 'react-toastify';
import CreateMyAttachForm from './components/CreateMyAttachForm';
import { useNavigate } from 'react-router-dom';
const sx = classNames.bind(styles);
const MyAttach = ({ cx }) => {
	const [selectedValue, setSelectedValue] = useState(1);
	const user_account_id = useSelector((state) => state.auth?.user?.id);
	const [createMyAttach] = useCreateMyAttachMutation();
	const handleClick = (value) => {
		setSelectedValue(value);
	};
	const navigate = useNavigate();
	const onCreateAttach = (data) => {
		const work_type_id = [];
		for (let i = 1; i <= 4; i++) {
			const key = `work_type_id_${i}`;
			if (data[key]) {
				work_type_id.push(data[key]);
			}
			delete data[key];
		}
		// const fileName = data.file.substring(data.file.lastIndexOf('\\') + 1);
		const body = {
			...data,
			work_type_id,
			resume_active: Number(selectedValue),
			user_account_id
		};
		createMyAttach(body)
			.unwrap()
			.then((r) => {
				console.log(r);
				if (r.status == 200) {
					toast.success(r?.message);
					return;
				}
			});
	};
	return (
		<section className={sx('cb-section')}>
			<div className={cx('container')}>
				<div className={cx('cb-title', 'cb-title-center', 'm-0')}>
					<h2 style={{ marginTop: 20 }}>Tạo Hồ Sơ Đính Kèm</h2>
				</div>
				<div className={sx('main-quick-upload-resume', 'created-now-wrap')}>
					<CreateMyAttachForm
						sx={sx}
						cx={cx}
						onCreateAttach={onCreateAttach}
						handleClick={handleClick}
						selectedValue={selectedValue}
					/>
				</div>
			</div>
		</section>
	);
};

export default MyAttach;
