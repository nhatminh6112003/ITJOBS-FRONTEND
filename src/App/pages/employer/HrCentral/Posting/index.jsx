import React from 'react';
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

const sx = classNames.bind(styles);

const Posting = ({ cx }) => {
	const location = useLocation();
	const currentPath = location.pathname;
	return (
		<section className={sx('manage-job-posting-active-jobs', 'cb-section', 'bg-manage')}>
			<div className={cx('container')}>
				<div className={sx('box-manage-job-posting')}>
					<div className={sx('heading-manage')}>
						<div className={sx('left-heading')}>
							<h1 className={sx('title-manage')}>Quản Lý Tuyển Dụng</h1>
							<div className={sx('button')}>
								<a className={sx('btn-gradient')} href='https://careerbuilder.vn/vi/employers/postjobs'>
									<CreateIcon style={{ paddingRight: 5 }} />
									Tạo Mẫu Tuyển Dụng
								</a>
							</div>
						</div>
						<div className={sx('right-heading')}>
							<a href='https://careerbuilder.vn/vi/employers/faq' className={sx('support')}>
								Hướng dẫn
							</a>
						</div>
					</div>
					<div className={sx('main-form-posting')}>
						<form
							name='frmSearchJob'
							id='frmSearchJob'
							action=''
							method='post'
							onsubmit='return validateSearch();'>
							<div className={sx('form-wrap')}>
								<div className={sx('form-group', 'form-text')}>
									<label>Từ khóa</label>
									<input type='text' name='keyword' id='keyword' placeholder='Nhập từ khóa' defaultValue='' />
								</div>
								<div className={sx('form-group', 'form-select')}>
									<label>Tìm theo ngày</label>
									<select className={sx('fl_left', 'mar_left46')} name='date_type' id='date_type'>
										<option value={0}>Ngày đăng</option>
										<option value={1}>Ngày hết hạn</option>
									</select>
								</div>
								<div className={sx('form-group', 'form-date', 'start-date')}>
									<label>Từ</label>
									<input
										type='text'
										readOnly=''
										name='date_from'
										id='date_from'
										placeholder='Chọn'
										className={sx('dates_cus_select')}
										defaultValue=''
									/>
									<div className={sx('icon')}>
										<em className={sx('material-icons')}>event</em>
									</div>
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
									<label>Đến</label>
									<input
										type='text'
										readOnly=''
										name='date_to'
										id='date_to'
										placeholder='Chọn'
										className={sx('dates_cus_select')}
										defaultValue=''
									/>
									<div className={sx('icon')}>
										<em className={sx('material-icons')}>event</em>
									</div>
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
					<div className={sx('filter-emp-user-create')}>
						<label>Việc làm đăng bởi</label>
						<select name='user_id' onchange="SetUserId(this.value, 'posting');">
							&gt;
							<option value={0}>Tất cả</option>
							<option value='lop7cttnq.1667207375' selected='selected'>
								minh nguyễn 123
							</option>
							<option value='nhatminhnguyen6112003.1672041283'>nguyễn minh</option>
						</select>
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
										<ul className={sx('list-check')}>
											<li className={sx('view-posting-detail', 'active')}>
												<a href='javascript:void(0);' id='dtail'>
													Chi tiết
												</a>
											</li>
											<li className={sx('view-posting-summary')}>
												<a href='javascript:void(0)'>Xem tóm tắt </a>
											</li>
											<li>
												<a href='javascript:void(0);' id='copy_multi_job'>
													Nhân bản
												</a>
											</li>
											<li>
												{' '}
												<a href='javascript:void(0);' id='unposting_multi_job'>
													Tạm Dừng Đăng
												</a>
											</li>
										</ul>
									</div>
									<div className={sx('right-heading')}>
										<div className={sx('export-file')}>
											<a href='javascript:void(0);' onclick='exportJobs();'>
												<GetAppIcon style={{ paddingRight: 5 }} />
												Xuất file job
											</a>
										</div>
										<div className={sx('to-display')}>
											<p className={sx('name')}>Hiển thị </p>
											<div className={sx('form-display')}>
												<select name='limit' id='limit'>
													<option value={20} selected=''>
														20
													</option>
													<option value={30}>30</option>
													<option value={50}>50</option>
													<option value={100}>100</option>
												</select>
											</div>
											<p className={sx('name-display')} />
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
													<th width='10%' onclick="setTypeSort('posting', 'asc', 0)">
														Lượt Xem <SortIcon style={{ paddingLeft: 5 }} />
													</th>
													<th width='10%' onclick="setTypeSort('posting', 'asc', 1)">
														Lượt Nộp <SortIcon style={{ paddingLeft: 5 }} />
													</th>
													<th width='10%'>CV Gợi Ý</th>
													<th width='15%'>Thao tác</th>
												</tr>
											</thead>
											<tbody>
												<tr>
													<td colSpan={9} className={sx('cb-text-center')}>
														<p>
															<strong> Không có vị trí nào trong thư mục này.</strong>
														</p>
													</td>
												</tr>
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
