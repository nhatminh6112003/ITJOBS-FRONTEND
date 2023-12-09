import { Suspense } from 'react';
import 'react-lazy-load-image-component/src/effects/black-and-white.css';
import { Link } from 'react-router-dom';
import routesPath from '~/App/config/routesPath';
import jobPostStatusEnum from '~/App/constants/jobPostStatusEnum';
import Banner from '~/App/layouts/Components/jobseeker/Banner';
import JobItem from '~/App/layouts/Components/jobseeker/JobItem';
import { useGetAllJobPostQuery } from '~/App/providers/apis/jobPostApi';
import ItemLoading from '~/Core/components/common/ItemLoading';
import { useDispatch } from 'react-redux';
import { PaginationActionEnums } from '~/App/hooks/useServerPagination';
import Pagination from '~/Core/components/common/Pagination';
import useCustomRouter from '~/App/hooks/useCustomRouter';
const Home = ({ cx }) => {
	const {
		query: { page }
	} = useCustomRouter();

	const { data: allJobPost, isLoading } = useGetAllJobPostQuery({
		params: {
			limit: 10,
			stringStatus: `${jobPostStatusEnum.Publish},${jobPostStatusEnum.Expired}`,
			isDeleted: false,
			page: page || 1
		}
	});
	const dispatch = useDispatch();

	const gotoPreviousPage = () => {
		dispatch({ type: PaginationActionEnums.GO_TO_PREV_PAGE });
	};
	const gotoNextPage = () => {
		dispatch({ type: PaginationActionEnums.GO_TO_NEXT_PAGE });
	};

	const changePageIndex = (value) => {
		if (allJobPost?.pagination?.pageIndex >= allJobPost?.pagination?.totalPages) gotoPreviousPage();
		dispatch({
			type: PaginationActionEnums.CHANGE_PAGE_INDEX,
			payload: value
		});
	};

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
																	{job_post.posted_date && <JobItem job_post={job_post} />}
																</Suspense>
															</div>
														))
													)}
												</div>
											</div>
										</div>
										<div className={cx('swiper-bottom')}>
											<Pagination
												style={{ display: 'flex', justifyContent: 'center' }}
												total={allJobPost?.pagination?.totalPages}
												pageSize={allJobPost?.pagination?.pageSize}
												currentPage={allJobPost?.pagination?.pageIndex}
												onChange={changePageIndex}
												gotoNextPage={gotoNextPage}
												gotoPreviousPage={gotoPreviousPage}
											/>
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
