import React from 'react';
import styles from './manageResume.module.css';
import classNames from 'classnames/bind';
import { useSelector } from 'react-redux';
import { useGetAllJobPostActivityApiQuery } from '~/App/providers/apis/jobPostActivityApi';

const sx = classNames.bind(styles);

const ManageResume = ({ cx }) => {
	return (
		<section className={sx('manage-candidates-resume-applied', 'cb-section', 'bg-manage')}>
			<div className={cx('container')}>
				<div className={sx('box-candidates-resume-applied')}>
					<div className={sx('heading-manage')}>
						<div className={sx('left-heading')}>
							<h1 className={sx('title-manage')}>Việc Làm Đang Đăng</h1>
							<div className={sx('button')}>
								<a className={sx('btn-gradient')} href='https://careerbuilder.vn/vi/employers/saved_search'>
									<em className={cx('material-icons')}>notifications_none</em>
									Thông Báo Ứng Viên
								</a>
							</div>
						</div>
						<div className={sx('right-heading')}>
							<a className={sx('support')} href='https://careerbuilder.vn/vi/employers/faq'>
								Hướng dẫn
							</a>
						</div>
					</div>
					<div className={sx('main-form-posting')}>
						<form name='frmSearchResume'>
							<div className={sx('form-wrap')}>
								<div className={sx('form-group', 'form-text')}>
									<label>Từ khóa</label>
									<input
										type='text'
										id='strKeyword'
										defaultValue=''
										maxLength={200}
										placeholder='Nhập từ khóa'
									/>
								</div>
								<div className={sx('form-group', 'form-select')}>
									<label>Tìm theo</label>
									<select id='intKeywordType'>
										<option value={0}>Tên hồ sơ</option>
										<option value={1}>Tên ứng viên</option>
									</select>
								</div>
								<div className={sx('form-group', 'form-select')}>
									<label>Trạng thái tìm việc</label>
									<select name='urgentjob' id='inturgentjob'>
										<option value={0}>Tất cả</option>
										<option value={1}>Ứng viên tìm việc khẩn cấp</option>
									</select>
								</div>
								<div className={sx('form-group', 'form-date', 'start-date')}>
									<label>Từ</label>
									<input
										type='text'
										name=''
										id='strFromDate'
										defaultValue=''
										className={sx('dates_cus_select')}
										placeholder='Chọn'
										autoComplete='off'
										readOnly=''
									/>
									<div className={sx('icon')}>
										<em className={cx('material-icons')}>event</em>
									</div>
								</div>
								<div className={sx('form-group', 'form-date', 'end-date')}>
									<label>Đến</label>
									<input
										type='text'
										name=''
										id='strToDate'
										defaultValue=''
										className={sx('dates_cus_select')}
										placeholder='Chọn'
										autoComplete='off'
										readOnly=''
									/>
									<div className={sx('icon')}>
										<em className={cx('material-icons')}>event</em>
									</div>
								</div>
								<div className={sx('form-group', 'form-submit', 'form-submit-less')}>
									<button
										className={sx('btn-submit', 'btn-gradient')}
										type='button'
										onclick='searchResumeApply()'>
										<em className={cx('material-icons')}>find_in_page</em>Tìm
									</button>
								</div>
								<div className={sx('form-group', 'form-filter-advanced')}>
									<a className={sx('btn-filter-advanced')} href='javascript:void(0);'>
										<em className={cx('material-icons')}>zoom_in</em> Lọc nâng cao
									</a>
								</div>
							</div>
							<div className={sx('form-wrap-advanced')}>
								<div className={sx('form-wrap')}>
									<div className={sx('form-group', 'form-select')}>
										<label>Trạng thái</label>
										<select id='intStatus'>
											<option value={7}>Tất cả</option>
											<option value={8}>Chưa Xem </option>
											<option value={0}>Chưa quyết định</option>
											<option value={1}>Không phù hợp</option>
											<option value={2}>Từ chối</option>
											<option value={3}>Kiểm tra</option>
											<option value={4}>Phỏng vấn</option>
											<option value={5}>Đề nghị tuyển dụng</option>
											<option value={6}>Nhận việc</option>
										</select>
									</div>
									<div className={sx('form-group', 'form-select')}>
										<label>Phân loại tự động</label>
										<select id='intSuitable'>
											<option value={2} selected='selected'>
												Tất cả
											</option>
											<option value={1}>Phù hợp</option>
											<option value={0}>Tiềm Năng</option>
										</select>
									</div>
									<div className={sx('form-group', 'form-select')}>
										<label>Xếp loại</label>
										<select id='intType'>
											<option value={6}>Tất cả</option>
											<option value={0}>Chưa xếp loại</option>
											<option value={1}>Kém</option>
											<option value={2}>Trung bình</option>
											<option value={3}>Khá</option>
											<option value={4}>Tốt</option>
											<option value={5}>Rất Tốt</option>
										</select>
									</div>
									<div className={sx('form-group', 'form-select')}>
										<label>Ghi chú</label>
										<select id='intNote'>
											<option value={2} selected='selected'>
												Tất cả
											</option>
											<option value={1}>Có ghi chú</option>
											<option value={0}>Không có ghi chú</option>
										</select>
									</div>
									<div className={sx('form-group', 'form-reset')}>
										<button className={sx('btn-reset')} type='button' onclick='resetFormSearchResume()'>
											<em className={sx('material-icons')}>loop</em>Xóa
										</button>
									</div>
									<div className={sx('form-group', 'form-submit')}>
										<button
											className={sx('btn-submit', 'btn-gradient')}
											type='button'
											onclick='searchResumeApply()'>
											<em className={sx('material-icons')}>find_in_page</em>Tìm
										</button>
									</div>
									<div className={sx('form-group', 'form-filter-less')}>
										<a className={sx('btn-filter-less')} href='javascript:void(0);;'>
											<em className={sx('material-icons')}>highlight_off</em>
											Thu gọn
										</a>
									</div>
								</div>
							</div>
						</form>
					</div>
					<div className={sx('main-tabslet')} data-toggle='tabslet'>
						<ul className={sx('tabslet-tab')}>
							<li className={sx('active')}>
								<a href='https://careerbuilder.vn/vi/employers/hrcentral/manageresume/1/35A4E900/*/0/0/*/*/7/2/6/2/0/desc/lop7cttnq.1667207375/1'>
									Hồ Sơ Ứng Tuyển (0)
								</a>
							</li>
							<li>
								<a href='https://careerbuilder.vn/vi/employers/hrcentral/manageresume/4/35A4E900/*/0/0/*/*/7/2/6/2/1/desc/lop7cttnq.1667207375/1'>
									Hồ Sơ Đã Lưu (6)
								</a>
							</li>
							<li>
								<a href='https://careerbuilder.vn/vi/employers/hrcentral/manageresume/5/*/*/0/0/*/*/7/2/6/2/1/desc/lop7cttnq.1667207375/1'>
									Hồ Sơ Đã Xóa (0)
								</a>
							</li>
						</ul>
						<div className={sx('tabslet-content', 'active')} id='tab-1'>
							<div className={sx('main-resume-applied')}>
								<div className={sx('heading-resume-applied')}>
									<div className={sx('left-heading')}>
										<div className={sx('form-group', 'form-select', 'form-filter')}>
											<label>User</label>
											<select id='foward_username' onchange='onchangeUserResume()'>
												<option value='alluser' selected='selected'>
													Tất cả
												</option>
												<option value='lop7cttnq.1667207375' selected='selected'>
													minh nguyễn 123
												</option>
												<option value='nhatminhnguyen6112003.1672041283'>nguyễn minh</option>
											</select>
										</div>
										<div className={sx('form-group', 'form-select', 'form-filter')}>
											<select id='select-group'>
												<option
													data-group={1}
													value='https://careerbuilder.vn/vi/employers/hrcentral/manageresume/1/35A4E900/*/0/0/*/*/7/2/6/2/0/desc/lop7cttnq.1667207375/1'
													selected=''>
													Việc Làm Đang Đăng (0)
												</option>
												<option
													data-group={3}
													value='https://careerbuilder.vn/vi/employers/hrcentral/manageresume/3/35A4E900/*/0/0/*/*/7/2/6/2/0/desc/lop7cttnq.1667207375/1'>
													Việc Làm Tạm Dừng Đăng (0)
												</option>
												<option
													data-group={2}
													value='https://careerbuilder.vn/vi/employers/hrcentral/manageresume/2/35A4E900/*/0/0/*/*/7/2/6/2/0/desc/lop7cttnq.1667207375/1'>
													Việc Làm Hết Hạn (0)
												</option>
											</select>
										</div>
										<div className={sx('form-group', 'form-select', 'form-filter')}>
											<select
												className={sx('go-link', 'select2-hidden-accessible')}
												id='select-folder'
												data-select2-id='select-folder'
												tabIndex={-1}
												aria-hidden='true'>
												<option value={-1} data-select2-id={2}>
													Chọn thư mục
												</option>
											</select>
											<span
												className={sx('select2', 'select2-container', 'select2-container--default')}
												dir='ltr'
												data-select2-id={1}
												style={{ width: '150.4px' }}>
												<span className={sx('selection')}>
													<span
														className={sx('select2-selection', 'select2-selection--single')}
														role='combobox'
														aria-haspopup='true'
														aria-expanded='false'
														tabIndex={0}
														aria-disabled='false'
														aria-labelledby='select2-select-folder-container'>
														<span
															className={sx('select2-selection__rendered')}
															id='select2-select-folder-container'
															role='textbox'
															aria-readonly='true'
															title='Chọn thư mục'>
															Chọn thư mục
														</span>
														<span className={sx('select2-selection__arrow')} role='presentation'>
															<b role='presentation' />
														</span>
													</span>
												</span>
												<span className={sx('dropdown-wrapper')} aria-hidden='true' />
											</span>
										</div>
									</div>
								</div>
								<div className={sx('heading-resume-applied')}>
									<div className={sx('left-heading')}>
										<ul className={sx('list-check')}>
											<li className={sx('view-posting-detail', '')}>
												<a href='javascript:void(0);'>Chi tiết</a>
											</li>
											<li className={sx('view-posting-summary', 'active')}>
												<a href='javascript:void(0);'>Xem tóm tắt</a>
											</li>
											<li className={sx('view-flip')}>
												<a
													href='javascript:void(0);'
													onclick="windowFlipViewHR('aW50Rm9sZGVySUQ9MCZpbnRFbXBJRD0yODc2MTYmaW50VXNlcklEPWxvcDdjdHRucS4xNjY3MjA3Mzc1JmludEdldFN0YXR1cz0xJnN0cktleXdvcmQ9JmludEtleXdvcmRUeXBlPTAmanNrX3R5cGU9MCZzdHJGcm9tRGF0ZT0mc3RyVG9EYXRlPSZpbnRTdGF0dXM9NyZpbnRSZXN1bWVWaWV3PTImaW50U3VpdGFibGU9MiZpbnRUeXBlPTYmaW50Tm90ZT0yJmludEtpbmQ9MSZpbnRTb3J0VHlwZT0wJnN0clNvcnQ9ZGVzYyZpbnRQYWdlPTEmaW50TGltaXQ9MjAmc2NvcmU9LTImaW50Rm9sZGVyVHlwZT0x', 1, 1)">
													Flipview All
												</a>
											</li>
										</ul>
									</div>
								</div>
								<div className={sx('heading-resume-applied')}>
									<div className={sx('left-heading')}>
										<div className={sx('hor-var')}>
											{/* <img src='./img/employer/2-arrow.png' alt='2-arrow' /> */}
										</div>
										<p className={sx('name')}>Chọn và xử lý:</p>
										<ul className={sx('list-check')}>
											<li>
												<a href='javascript:void(0);' onclick="editResume('listresumes[]')">
													Xem và Đánh giá hồ sơ
												</a>
											</li>
											<li>
												<a href='javascript:void(0);' onclick="deleteFolderResume('listresumes[]')">
													Xóa hồ sơ
												</a>
											</li>
											<li>
												<a href='javascript:void(0);' onclick="showFoldersSelected('', 'listresumes[]');">
													Lưu thư mục
												</a>
											</li>
										</ul>
									</div>{' '}
									<div className={sx('right-heading')}>
										<div className={sx('to-display')}>
											<p className={sx('name-display')}></p>
										</div>
									</div>
								</div>
								<div className={sx('boding-resume-applied')}>
									<div className={sx('table', 'table-resume-applied')}>
										<table>
											<thead>
												<tr>
													<th width='1%'>
														<div className={sx('checkbox')}>
															<input type='checkbox' id='check-all' />
														</div>
													</th>
													<th width='27%'>Chọn tất cả</th>
													<th width='10%'>Ngày nộp</th>
													<th width='10%'>Cập nhật</th>
													<th width='10%%'>Trạng thái</th>
													<th width='10%'>Xếp loại</th>
													<th width='10%'>Kinh nghiệm</th>
													<th width='10%'>Mức lương</th>
													<th width='12%'>Thao tác</th>
												</tr>
											</thead>
											<tbody>
												<tr>
													<td>
														<div className='checkbox'></div>
													</td>
													<td>
														<div className='title'>
															<a>Huỳnh Hồng Khánh Linh</a>
														</div>
														<div className='detail'>
															<p>
																<strong>Chức danh:</strong> Senior Card and Digital Partnership
																Development Supervisor
															</p>
															<p>
																<strong>Địa điểm:</strong>
																Hồ Chí Minh{' '}
															</p>
															<p>
																<strong>Thư mục</strong>
																<a
																	href='https://careerbuilder.vn/vi/employers/hrcentral/manageresume/4/35BFE874/*/0/*/*/7/2/6/2/1/desc/lop7cttnq.1667207375/1'
																	title='Xem thư mục lưu trữ'>
																	ứng viên
																</a>{' '}
															</p>
															<p>
																<strong>Việc làm gần nhất:</strong> KS Chất Lượng Và Quản Lý Khiếu Nại
															</p>
															<p>
																<strong>Công ty gần nhất:</strong> Công Ty CP DV Di Động Trực Tuyến
																Mservice - Ví Momo
															</p>
														</div>
													</td>
													<td>
														<time>12-12-2022</time>
													</td>
													<td>
														<time>13-12-2022</time>
													</td>
													<td>
														<p>Chưa quyết định</p>
													</td>
													<td>
														<p>Chưa xếp loại</p>
													</td>
													<td>
														<p>9 năm</p>
													</td>
													<td>
														<p>30 Tr - 35 Tr VND</p>
													</td>
												</tr>

												{/* <tr>
													<td colSpan={9}>
														<p align='center'>
															<strong> Hiện tại không có hồ sơ nào trong thư mục này!</strong>
														</p>
													</td>
												</tr> */}
											</tbody>
										</table>
									</div>
									<div className={sx('main-pagination')}></div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
};

export default ManageResume;
