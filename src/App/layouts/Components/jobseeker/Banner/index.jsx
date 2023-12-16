import styles from '~/App/layouts/DefaultLayout/jobseeker/jobseeker-layout.module.css';
import classNames from 'classnames/bind';
import { useGetAllJobPostQuery } from '~/App/providers/apis/jobPostApi';
import jobPostStatusEnum from '~/App/constants/jobPostStatusEnum';
import { Link } from 'react-router-dom';
const cx = classNames.bind(styles);
const Banner = () => {
	const { data: allJobPost } = useGetAllJobPostQuery({
		params: {
			status: jobPostStatusEnum.Publish,
			isDeleted: false
		}
	});
	return (
		<div className={cx('cb-main-search')}>
			<section className={cx('cb-banner-home')}>
				<div className={cx('banner-pc')}>
					<div className={cx('swiper-container')}>
						<div className={cx('swiper-wrapper', 'pc-swiper-wrapper')}>
							<div className={cx('swiper-slide')}>
								<a href='/'>
									<div className={cx('image')}>
										<img
											src='https://images.careerbuilder.vn/background/mbbank_1900x570_2022_12_12_1670843523.jpg'
											alt='Banner'
										/>
									</div>
								</a>
							</div>
						</div>
					</div>
					<div className={cx('main-page')}>
						<div className={cx('swiper-pagination')} />
					</div>
				</div>
				<div className={cx('banner-mobile')}>
					<div className={cx('swiper-container')}>
						<div className={cx('swiper-wrapper', 'mobile-swiper-wrapper')}>
							<div className={cx('swiper-slide')}>
								<a href='/'>
									<div className={cx('image')}>
										<img alt='Banner' />
									</div>
								</a>
							</div>
						</div>
					</div>
					<div className={cx('main-page')}>
						<div className={cx('swiper-pagination')} />
					</div>
				</div>
			</section>
			<section className={cx('cb-box-find')}>
				<div className={cx('container')}>
					<div className={cx('main-box')}>
						<div className={cx('box-body')}>
							<div className={cx('title')}>
								<h1>
									Đón lấy thành công với <span>{allJobPost?.data?.length} cơ hội nghề nghiệp </span>
								</h1>
							</div>
							<div className={cx('find-jobs')}>
								<Link
									to={`/viec-lam/tat-ca-viec-lam`}
									style={{ color: 'white', textDecoration: 'none', width: '100%' }}>
									<button className={cx('btn-gradient')}>TÌM VIỆC NGAY</button>
								</Link>
							</div>
						</div>
						<div className={cx('box-footer')}>
							<div className={cx('content')}>
								<p>Đăng hồ sơ nghề nghiệp để dễ dàng ứng tuyển nhanh</p>
							</div>
							<div className={cx('upload-resume')}>
								<Link
									to={`/employers/postjobs`}
									style={{ color: 'white', textDecoration: 'none', width: '100%' }}>
									<button className={cx('btn-gradient')}> ĐĂNG NGAY</button>
								</Link>
							</div>
						</div>
					</div>
				</div>
			</section>
		</div>
	);
};

export default Banner;
