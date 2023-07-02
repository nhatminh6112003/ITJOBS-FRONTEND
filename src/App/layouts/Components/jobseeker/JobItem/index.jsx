import classNames from 'classnames/bind';
import styles from '~/App/layouts/DefaultLayout/jobseeker/jobseeker-layout.module.css';

import RoomIcon from '@mui/icons-material/Room';

import { LazyLoadImage } from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/black-and-white.css';

const cx = classNames.bind(styles);

const JobItem = () => {
	return (
		<div className={cx('job-item')}>
			<div className={cx('figure')}>
				<div className={cx('image')}>
					<a
						target='_blank'
						href='https://careerbuilder.vn/vi/nha-tuyen-dung/ngan-hang-tmcp-sai-gon-ha-noi-shb.35A6E089.html'
						title='Ngân Hàng TMCP Sài Gòn - Hà Nội ( SHB )'
						rel='noreferrer'>
						<LazyLoadImage
							src='	https://images.careerbuilder.vn/employer_folders/lot7/87417/67x67/13452210999_2011_11_23.gif'
							effect='black-and-white'
							alt='Ngân Hàng TMCP Sài Gòn - Hà Nội ( SHB )'
						/>
					</a>
				</div>
				<div className={cx('figcaption')}>
					<div className={cx('title')}>
						<a
							target='_blank'
							href='https://careerbuilder.vn/vi/tim-viec-lam/cọng-tác-vien-phòng-quản-trị-hiẹu-suát-khói-qt-ptnnl.35BB3173.html'
							title='Cộng tác viên - Phòng Quản trị hiệu suất - Khối QT&PTNNL'
							rel='noreferrer'>
							Cộng tác viên - Phòng Quản trị hiệu suất - Khối QT&amp;PTNNL
						</a>
					</div>
					<div className={cx('caption')}>
						<a
							className={cx('company-name')}
							href='https://careerbuilder.vn/vi/nha-tuyen-dung/ngan-hang-tmcp-sai-gon-ha-noi-shb.35A6E089.html'
							title='Ngân Hàng TMCP Sài Gòn - Hà Nội ( SHB )'
							target='_blank'
							rel='noreferrer'>
							Ngân Hàng TMCP Sài Gòn - Hà Nội ( SHB )
						</a>
						<p className={cx('salary')}>
							<em className={cx('fa', 'fa-usd')} />
							Lương: Cạnh Tranh
						</p>
						<div className={cx('location')}>
							<RoomIcon sx={{ fontSize: '14px' }} />
							<p> Hà Nội</p>
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
