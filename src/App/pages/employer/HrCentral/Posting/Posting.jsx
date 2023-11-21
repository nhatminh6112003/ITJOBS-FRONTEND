import React, { useEffect, useState } from 'react';
import styles from './posting.module.css';
import classNames from 'classnames/bind';
import CreateIcon from '@mui/icons-material/Create';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import SortIcon from '@mui/icons-material/Sort';
import { Link } from 'react-router-dom';
import TabMenu from './components/TabMenu';
import { useLocation } from 'react-router-dom';
import SearchIcon from '@mui/icons-material/Search';
import GetAppIcon from '@mui/icons-material/GetApp';
import {
	useDeleteJobPostMutation,
	useGetAllJobPostQuery,
	useUpdateJobPostMutation
} from '~/App/providers/apis/jobPostApi';
import { toast } from 'react-toastify';
import jobPostStatusEnum from '~/App/constants/jobPostStatusEnum';
import { useSelector } from 'react-redux';
import formatDate from '~/Core/utils/formatDate';
const sx = classNames.bind(styles);
import useSearchJobPost from '../../components/useSearchJobPost.js';
import DateTypeEnum from '~/App/constants/dataTypeEnum';
import InputFieldControl from '~/Core/components/common/FormControl/InputFieldControl';
import { useForm } from 'react-hook-form';
import SelectFieldControl from '~/Core/components/common/FormControl/SelectFieldControl';
import PauseIcon from '@mui/icons-material/Pause';
const Posting = ({ cx }) => {
	const employer = useSelector((state) => state.auth?.employer);
	const location = useLocation();
	const currentPath = location.pathname;
	const { pushQuery, query } = useSearchJobPost();

	const [deleteJobPost] = useDeleteJobPostMutation();
	const [updateJobPost] = useUpdateJobPostMutation();
	const { data: allJobPost } = useGetAllJobPostQuery({
		params: {
			keyword: query.keyword || '',
			dateType: query.dateType || '',
			fromDate: query.fromDate || '',
			toDate: query.toDate || '',
			posted_by_id: employer?.id,
			status: jobPostStatusEnum.Publish,
			isDeleted: false
		},
		refetchOnMountOrArgChange: true
	});
	const { control, handleSubmit } = useForm({
		values: {
			keyword: query.keyword || '',
			fromDate: query.fromDate || '',
			toDate: query.toDate || '',
			dateType: query.dateType || ''
		}
	});

	const onSubmit = (data) => {
		pushQuery({ ...data });
	};
	const handlePausePosting = async (id) => {
		try {
			const arg = {
				id,
				payload: {
					status: jobPostStatusEnum.Pause
				}
			};
			await updateJobPost(arg)
				.unwrap()
				.then((r) => {
					if (r.status == 200) {
						toast.success('Đã tạm dừng việc đăng tuyển!');
					}
				});
		} catch (error) {
			toast.error(error);
		}
	};
	return (
		<section className={sx('manage-job-posting-active-jobs', 'cb-section', 'bg-manage')}>
			<div className={cx('container')}>
				<div className={sx('box-manage-job-posting')}>
					<div className={sx('heading-manage')}>
						<div className={sx('left-heading')}>
							<h1 className={sx('title-manage')}>Quản Lý Tuyển Dụng</h1>
							<div className={sx('button')}>
								<Link className={sx('btn-gradient')} to='/employers/postjobs'>
									<CreateIcon style={{ paddingRight: 5 }} />
									Tạo Mẫu Tuyển Dụng
								</Link>
							</div>
						</div>
					</div>
					<div className={sx('main-form-posting')}>
						<form name='frmSearchJob' id='frmSearchJob' action='' method='post' onSubmit={handleSubmit(onSubmit)}>
							<div className={sx('form-wrap')}>
								<div className={sx('form-group', 'form-text')}>
									<InputFieldControl
										name='keyword'
										id='keyword'
										placeholder='Nhập từ khóa'
										control={control}
										label='Từ khóa'
									/>
								</div>
								<div className={sx('form-group', 'form-select')}>
									<SelectFieldControl
										name='dateType'
										id='dateType'
										control={control}
										options={[
											{ value: DateTypeEnum.PostDate, label: 'Ngày đăng' },
											{ value: DateTypeEnum.ExpiredDate, label: 'Ngày hết hạn' }
										]}
										label='Tìm theo ngày'
									/>
								</div>
								<div className={sx('form-group', 'form-date', 'start-date')}>
									<InputFieldControl
										name='fromDate'
										id='fromDate'
										placeholder='Chọn'
										type='date'
										control={control}
										className={sx('dates_cus_select')}
										label='Từ'
									/>
									<div id='start-date' className={sx('dtpicker-overlay', 'dtpicker-mobile')}>
										<div className={sx('dtpicker-bg')}>
											<div className={sx('dtpicker-cont')}>
												<div className={sx('dtpicker-content')}>
													<div className={sx('dtpicker-subcontent')} />
												</div>
											</div>
										</div>
									</div>
								</div>
								<div className={sx('form-group', 'form-date', 'end-date')}>
									<InputFieldControl
										type='date'
										control={control}
										name='toDate'
										id='toDate'
										placeholder='Chọn'
										className={sx('dates_cus_select')}
										label='Đến'
									/>
									<div id='end-date' className={sx('dtpicker-overlay', 'dtpicker-mobile')}>
										<div className={sx('dtpicker-bg')}>
											<div className={sx('dtpicker-cont')}>
												<div className={sx('dtpicker-content')}>
													<div className={sx('dtpicker-subcontent')} />
												</div>
											</div>
										</div>
									</div>
								</div>
								<div className={sx('form-group', 'form-submit')}>
									<button className={sx('btn-submit', 'btn-gradient')} type='submit'>
										<SearchIcon style={{ paddingRight: 5 }} />
										Tìm
									</button>
								</div>
							</div>
						</form>
					</div>
					<div className={sx('main-tabslet')}>
						<ul className={sx('tabslet-tab')}>
							{TabMenu.map((item) => (
								<li className={sx(currentPath == item.path && 'active')}>
									<Link to={item.path}>{item.title}</Link>
								</li>
							))}
						</ul>
						<div className={sx('tabslet-content', 'active')}>
							<div className={sx('main-jobs-posting')}>
								<div className={sx('heading-jobs-posting')}>
									<div className={sx('left-heading')}>
										<p className={sx('name')}>Hiển thị </p>
									</div>
									<div className={sx('right-heading')}>
										<div className={sx('export-file')}>
											<a href='javascript:void(0);' onclick='exportJobs();'>
												<GetAppIcon style={{ paddingRight: 5 }} />
												Xuất file job
											</a>
										</div>
									</div>
								</div>
								<div className={sx('boding-jobs-posting')}>
									<div className={sx('table', 'table-jobs-posting')}>
										<table>
											<thead>
												<tr>
													<th width='1%' />
													<th width='32%'>Chức danh</th>
													<th width='12%' onclick="setTypeSort('posting', 'asc', 3)">
														Ngày đăng
														<ArrowDropDownIcon style={{ paddingLeft: 5 }} />
													</th>
													<th width='10%' onclick="setTypeSort('posting', 'asc', 4)">
														Hết hạn <SortIcon style={{ paddingLeft: 5 }} />
													</th>
													<th width='15%'>Thao tác</th>
												</tr>
											</thead>
											<tbody>
												{allJobPost?.data && allJobPost?.data.length > 0 ? (
													allJobPost?.data?.map((item) => (
														<tr>
															<td>
																<div className='checkbox'></div>
															</td>
															<td>
																<div className='title'>
																	<a
																		title='Xem chi tiết việc làm'
																		className='name'
																		href='https://careerbuilder.vn/vi/employers/hrcentral/viewjob/35BE12BA/user_id/lop7cttnq.1667207375/sort/desc/type/3/position/1'>
																		{item.job_title}
																	</a>
																</div>
															</td>
															<td>
																<time>{formatDate(item.posted_date)}</time>
															</td>
															<td>
																<time>{formatDate(item.expiry_date)}</time>
															</td>
															<td>
																<ul
																	className={cx('list-manipulation', 'd-flex')}
																	style={{ alignItems: 'center', justifyContent: 'center' }}>
																	<li>
																		<Link to={`/employers/postjobs/${item.id}`} title='Sửa'>
																			<em className={cx('material-icons')}>created</em>
																		</Link>
																	</li>

																	<li>
																		<Link
																			to={`/employers/hrcentral/viewjob/${item.id}`}
																			title='Chi tiết'>
																			<em className={cx('material-icons')}>visibility </em>
																		</Link>
																	</li>

																	<li style={{ width: 48, height: 30 }}>
																		<Link
																			title='Tạm dừng'
																			onClick={() => handlePausePosting(item.id)}>
																			<em>
																				<PauseIcon
																					style={{
																						marginBottom: 8,
																						marginLeft: 12,
																						cursor: 'pointer'
																					}}
																				/>
																			</em>
																		</Link>
																	</li>
																</ul>
															</td>
														</tr>
													))
												) : (
													<tr>
														<td colSpan={9} className={sx('cb-text-center')}>
															<p>
																<strong> Không có vị trí nào trong thư mục này.</strong>
															</p>
														</td>
													</tr>
												)}
											</tbody>
										</table>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
};

export default Posting;
