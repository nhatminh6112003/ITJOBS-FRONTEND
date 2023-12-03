import React, { useEffect } from 'react';
import styles from './find-all-job.module.css';
import classNames from 'classnames/bind';
import { useAnalysisProfessionQuery } from '~/App/providers/apis/professionApi';
import { Link } from 'react-router-dom';
import routesPath from '~/App/config/routesPath';
const sx = classNames.bind(styles);

const FindAllJob = ({ cx }) => {
	const { data: listProfession } = useAnalysisProfessionQuery();
	useEffect(() => {
		console.log(listProfession?.data);
	}, [listProfession]);
	return (
		<section className={sx('find-jobsby-categories', 'cb-section')} style={{ padding: '60px 0', margin: '30px 0' }}>
			<div className={cx('container')}>
				<div className={sx('row')}>
					<div className={cx('col-xl-12')}>
						<div className={sx('cb-title')}>
							<h1
								style={{
									fontSize: '1.2rem',
									borderBottom: '1px solid #cccc',
									marginBottom: '1.875rem',
									color: ' #182642'
								}}>
								Tìm Việc Làm Theo Ngành Nghề
							</h1>
						</div>
						<div className={sx('row', 'list-of-working-positions')}>
							{listProfession?.data &&
								listProfession.data.map((item) => {
									return (
										<>
											<div
												className={cx('col-md-6', 'col-lg-4', 'cus-col')}
												style={{
													paddingRight: '30px'
												}}>
												<div
													className={sx('title-h3')}
													style={{ marginBottom: '0.5rem', borderBottom: '1px solid #2f4ba0' }}>
													<h2>{item.job_position_category_name}</h2>
												</div>
												<ul className={sx('list-jobs')}>
													{item.profession_data.map((profession) => {
														return (
															<>
																<li>
																	<Link
																		to={{
																			pathname: routesPath.JobseekerPaths.allJob,
																			search: `?profession_id=${profession.profession_id}`
																		}}
																		title={profession.profession_name}>
																		{profession.profession_name}
																	</Link>
																	<span>
																		<Link
																			to={{
																				pathname: routesPath.JobseekerPaths.allJob,
																				search: `?profession_id=${profession.profession_id}`
																			}}
																			title={profession.profession_name}>
																			{profession.count}
																		</Link>
																	</span>
																</li>
															</>
														);
													})}
												</ul>
											</div>
										</>
									);
								})}
						</div>
					</div>
				</div>
			</div>
		</section>
	);
};

export default FindAllJob;
