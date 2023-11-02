import { Suspense } from 'react';
import 'react-lazy-load-image-component/src/effects/black-and-white.css';
import { Link } from 'react-router-dom';
import routesPath from '~/App/config/routesPath';
import jobPostStatusEnum from '~/App/constants/jobPostStatusEnum';
import Banner from '~/App/layouts/components/Jobseeker/Banner';
import JobItem from '~/App/layouts/components/Jobseeker/JobItem';
import { useGetAllJobPostQuery } from '~/App/providers/apis/jobPostApi';
import ItemLoading from '~/Core/components/common/ItemLoading';
const Home = ({ cx }) => {
	const { data: allJobPost, isLoading } = useGetAllJobPostQuery({
		params: {
			status: jobPostStatusEnum.Publish,
			isDeleted: false
		}
	});

	return (
		<>
			<Banner />
			<section
				className={cx('cb-section', 'cb-section-border-bottom')}
				id={cx('box-job-suggest')}
				style={{ display: 'none' }}
			/>
			<section className={cx('cb-section', 'cb-section-border-bottom')}>
				<div className={cx('container')}>
					<div className={cx('cb-title', 'cb-title-center')}>
						<h2>NHÀ TUYỂN DỤNG HÀNG ĐẦU</h2>
					</div>
					<div className={cx('top-employers-list')}></div>
					<div className={cx('top-employers-banner')}>
						<div className={cx('row')}>
							<div className={cx('col-lg-6')}>
								<div className={cx('item')}>
									<div className={cx('image', 'adsTopBanner')} id={846}>
										{/**/}
										<img
											src='https://ads.careerbuilder.vn/www/images/8038e22595ece70fbfe0a75e7020f355.jpg'
											alt=''
										/>
									</div>
								</div>
							</div>
							<div className={cx('col-lg-6')}>
								<div className={cx('item')}>
									<div className={cx('image', 'adsTopBanner')} id={847}>
										{/**/}
										<img
											src='https://ads.careerbuilder.vn/www/images/80aafecd7e8bc8eaa6ebccb05cb02177.jpg'
											alt=''
										/>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</section>

			<section className={cx('cb-section')}>
				<div className={cx('container')}>
					<div className={cx('hot-jobs-list')}>
						<div className={cx('tabs')}>
							<ul className={cx('tabs-toggle')}>
								<li className={cx('active')}>
									<a className={cx('pointer')} alt='#tab-1'>
										Việc Làm Nổi Bật
									</a>
								</li>
								<li>
									<a className={cx('pointer')} alt='#tab-2'>
										Việc Làm VIP ($1000+)
									</a>
								</li>
								<li>
									<a className={cx('pointer')} alt='#tab-3'>
										Việc Làm Từ Top Headhunter
									</a>
								</li>
							</ul>
							<div className={cx('tab-content')} id='tab-1'>
								<div className={cx('hot-jobs-slide')} id='hot-jobs-slide'>
									<div className={cx('swiper-container')}>
										<div className={cx('swiper-wrapper')}>
											<div className={cx('swiper-slide')}>
												<div className={cx('row')}>
													{isLoading ? (
														<ItemLoading items={8} />
													) : (
														allJobPost?.data?.map((job_post) => (
															<div className={cx('col-lg-6')}>
																<Suspense fallback={<div>...loading</div>}>
																	<JobItem job_post={job_post} />
																</Suspense>
															</div>
														))
													)}
												</div>
											</div>
										</div>
										<div className={cx('swiper-bottom')}>
											<div className={cx('swiper-navigation')}>
												<div className={cx('swiper-prev')}>
													<span className={cx('mdi', 'mdi-chevron-left')} />
												</div>
												<div className={cx('main-pagination')}>
													<div className={cx('swiper-pagination')} />
												</div>
												<div className={cx('swiper-next')}>
													<span className={cx('mdi', 'mdi-chevron-right')} />
												</div>
											</div>
											<div className={cx('view-more')}>
												<Link to={routesPath.JobseekerPaths.allJob}>
													Xem việc làm mới cập nhật
													<span className={cx('mdi', 'mdi-arrow-right')} />
												</Link>
											</div>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</section>
		</>
	);
};

export default Home;
