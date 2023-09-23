import React from 'react';
import styles from './searchHistory.module.css';
import classNames from 'classnames/bind';
const sx = classNames.bind(styles);
const SearchHistory = ({ cx }) => {
	return (
		<section className={sx('manage-search-resumes-search-history', 'cb-section', 'bg-manage')}>
			<div className={cx('container')}>
				<div className={sx('box-manage-job-posting')}>
					<div className={sx('heading-manage')}>
						<div className={sx('left-heading')}>
							<h1 className={sx('title-manage')}>Tìm Kiếm Hồ Sơ</h1>
							<div className={sx('button')}>
								<a
									className={sx('btn-gradient')}
									href='https://careerbuilder.vn/vi/employers/saved_search/alert'>
									<em className={cx('material-icons')}>notifications_none</em>Thông Báo Ứng Viên
								</a>
							</div>
						</div>
					</div>
					<div className={sx('main-tabslet')} data-toggle='tabslet'>
						<ul className={sx('tabslet-tab')}>
							<li className={sx('active')}>
								<a href='https://careerbuilder.vn/vi/employers/hrcentral/search-history'>Lịch Sử Tìm Kiếm</a>
							</li>
							<li>
								<a href='https://careerbuilder.vn/vi/employers/hrcentral/resumes-hidden'>Hồ Sơ Ẩn</a>
							</li>
							<li>
								<a href='https://careerbuilder.vn/vi/employers/hrcentral/tags'>Quản Lý Tag</a>
							</li>
						</ul>
						<div className={sx('tabslet-content', 'active')} id='tab-1'>
							<div className={sx('main-jobs-posting')}>
								<div className={sx('heading-jobs-posting')}>
									<div className={sx('top-heading')}>
										<p className={sx('name')}>
											Mục “Lịch sử tìm kiếm” sẽ tự động lưu trữ 100 kết quả tìm kiếm mới nhất của bạn trong
											vòng 7 ngày. Để xem lại kết quả tìm kiếm trước đây, nhấn vào tên kết quả tìm kiếm trong
										</p>
									</div>
									<div className={sx('right-heading')}>
										<div className={sx('to-display')}>
											<p className={sx('name')}>Hiển thị</p>
											<div className={sx('form-display')}>
												<form
													method='post'
													action='https://careerbuilder.vn/vi/employers/hrcentral/search-history'
													id='form_fillter_limit_paging'
													className={sx('fl_right')}>
													<select id='limit' name='limit'>
														<option value={15} selected=''>
															15
														</option>
														<option value={30}>30</option>
														<option value={50}>50</option>
													</select>
												</form>
											</div>
											<p className={sx('name-display')}>
												Hiển thị <span> 0</span>-<span>0 </span>của <span>0 </span>
												kết quả
											</p>
										</div>
									</div>
								</div>
								<div className={sx('boding-jobs-posting')}>
									<div className={sx('table', 'table-search-history')}>
										<table>
											<thead>
												<tr>
													<th width='70%'>Tìm </th>
													<th width='15%'>Kết Quả Tìm Kiếm</th>
													<th width='15%'>Ngày </th>
												</tr>
											</thead>
											<tbody></tbody>
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

export default SearchHistory;
