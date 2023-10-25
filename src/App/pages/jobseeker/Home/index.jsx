import { useSelector, useDispatch } from 'react-redux';
import React, { useState, useEffect, lazy, Suspense } from 'react';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/black-and-white.css';
import JobItem from '~/App/layouts/components/Jobseeker/JobItem';
import Banner from '~/App/layouts/components/Jobseeker/Banner';
import { useGetAllQuery } from '~/App/providers/apis/userApi';
import { useGetAllJobPostQuery } from '~/App/providers/apis/jobPostApi';
const Home = ({ cx }) => {
	// const options = [
	//   { value: 'chocolate', label: 'Chocolate' },
	//   { value: 'strawberry', label: 'Strawberry' },
	//   { value: 'vanilla', label: 'Vanilla' }
	// ]
	const { data: allJobPost } = useGetAllJobPostQuery({});

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
									</div>
								</div>
							</div>
							<div className={cx('col-lg-6')}>
								<div className={cx('item')}>
									<div className={cx('image', 'adsTopBanner')} id={847}>
										{/**/}
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
								<li>
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
													{allJobPost?.data?.map((job_post) => {
														if (job_post.isDeleted === false && job_post.status === 1) {
															return (
																<>
																	<div className={cx('col-lg-6')}>
																		{/* <ItemLoading items={8}/> */}
																		<Suspense fallback={<div>...loading</div>}>
																			<JobItem job_post={job_post} />
																		</Suspense>
																	</div>
																</>
															);
														}
													})}
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
												<a href='https://careerbuilder.vn/viec-lam/tat-ca-viec-lam-vi.html'>
													Xem việc làm mới cập nhật
													<span className={cx('mdi', 'mdi-arrow-right')} />
												</a>
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
