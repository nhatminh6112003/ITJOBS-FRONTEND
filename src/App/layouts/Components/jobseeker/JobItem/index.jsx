import classNames from 'classnames/bind';
import styles from '~/App/layouts/DefaultLayout/jobseeker/jobseeker-layout.module.css';
import RoomIcon from '@mui/icons-material/Room';

import { LazyLoadImage } from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/black-and-white.css';
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { useGetAllProvincesQuery } from '~/App/providers/apis/listProvincesApi';
import { listProvinces } from '~/App/constants/provincesData';
const cx = classNames.bind(styles);

const JobItem = ({ job_post }) => {
	const [provinces, setProvinces] = useState('');
	useEffect(() => {
		listProvinces?.map((item) => {
			if (item.code == job_post?.provinces) {
				setProvinces(item.name);
			}
		});
	}, [job_post]);
	return (
		<div className={cx('job-item')}>
			<div className={cx('figure')}>
				<div className={cx('image')}>
					<a
						target='_blank'
						href={`/nha-tuyen-dung/${job_post?.company_id}`}
						title={job_post?.company?.company_name}
						rel='noreferrer'>
						<LazyLoadImage
							src={`${import.meta.env.VITE_IMAGE_URL}/${job_post?.company?.logo}`}
							effect='black-and-white'
							alt={job_post?.company?.company_name}
						/>
					</a>
				</div>
				<div className={cx('figcaption')}>
					<div className={cx('title')}>
						<Link to={`/tim-viec-lam/${job_post?.id}`} title={job_post?.job_title}>
							{job_post?.job_title}
						</Link>
					</div>
					<div className={cx('caption')}>
						<Link
							className={cx('company-name')}
							to={`/nha-tuyen-dung/${job_post?.company_id}`}
							title={job_post?.company?.company_name}
							target='_blank'
							rel='noreferrer'>
							{job_post?.company?.company_name}
						</Link>
						<p className={cx('salary')}>
							<em className={cx('fa', 'fa-usd')} />
							Lương: {parseInt(job_post?.min_salary).toString().charAt(0)} Tr -{' '}
							{parseInt(job_post?.max_salary).toString().charAt(0)} Tr VND
						</p>
						<div className={cx('location')}>
							<RoomIcon sx={{ fontSize: '14px' }} />
							<p> {provinces}</p>
						</div>
					</div>
				</div>
				<div className={cx('top-icon')}>
					<span className={cx('top')}>Top</span>
				</div>
			</div>
		</div>
	);
};

export default JobItem;
