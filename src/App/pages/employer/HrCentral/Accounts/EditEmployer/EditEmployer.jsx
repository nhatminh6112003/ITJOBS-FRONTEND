import React from 'react';
import styles from './editEmployer.module.css';
import classNames from 'classnames/bind';
const sx = classNames.bind(styles);
const EditEmployer = ({cx}) => {
	return (
		<section className={sx('manage-job-posting-post-jobs', 'cb-section', 'bg-manage')}>
			<div className={cx('container')}>
				<div className={sx('box-manage-job-posting')}>
					<div className={sx('heading-manage')}>
						<div className={sx('left-heading')}>
							<h1 className={sx('title-manage')}> Thông Tin Tài Khoản</h1>
						</div>
						<div className={sx('right-heading')}>
							{' '}
							<a className={sx('support')} href='https://careerbuilder.vn/vi/employers/faq'>
								Hướng dẫn{' '}
							</a>
						</div>
					</div>
					<div className={sx('main-tabslet')} data-toggle='tabslet'>
						<ul className={sx('tabslet-tab')}>
							<li>
								<a href='https://careerbuilder.vn/vi/employers/hrcentral/accounts/1' alt='Quản lý user'>
									<span>Quản lý user</span>
								</a>
							</li>
							<li className={sx('active')}>
								<a
									href='https://careerbuilder.vn/vi/employers/hrcentral/accounts/edit_employer'
									alt='Thông tin công ty'>
									<span>Thông tin công ty</span>
								</a>
							</li>
							<li>
								<a
									href='https://careerbuilder.vn/vi/employers/hrcentral/accounts/edit_contact'
									alt='Thông tin liên hệ'>
									<span>Thông tin liên hệ</span>
								</a>
							</li>
							<li>
								<a
									href='https://careerbuilder.vn/vi/employers/hrcentral/accounts/worklocation'
									alt='Quản Lý Địa Điểm Làm Việc'>
									<span>Quản Lý Địa Điểm Làm Việc</span>
								</a>
							</li>
							<li>
								<a
									href='https://careerbuilder.vn/vi/employers/hrcentral/accounts/report_task_log'
									alt='Báo cáo tác vụ'>
									<span>Báo cáo tác vụ</span>
								</a>
							</li>
							<li>
								<a
									href='https://careerbuilder.vn/vi/employers/hrcentral/accounts/changepassword'
									alt='Đổi mật khẩu'>
									<span>Đổi mật khẩu</span>
								</a>
							</li>
						</ul>
						<div className={sx('tabslet-content', 'active')} id='tab-2'>
							<form name='editCompany' id='editCompany' action='' method='post' encType='multipart/form-data'>
								<div className={sx('main-application-information')}>
									<h2 className={sx('title-application', 'no-bg', 'no-pad')}>CHỈNH SỬA THÔNG TIN CÔNG TY</h2>
									<h2 className={sx('title-application')}>THÔNG TIN CÔNG TY</h2>
									<div className={sx('form-wrap')}>
										<div className={sx('row')}>
											<div className={sx('col-lg-6')}>
												<div className={sx('form-group', 'form-text', 'form-input-label')}>
													<input
														type='text'
														name='EMP_NAME'
														id='EMP_NAME'
														defaultValue='Công ty it minh nguyễn'
														maxLength={350}
														onkeyup="this.setAttribute('value', this.value);"
													/>
													<label>
														Tên công ty <font style={{ color: 'red' }}>*</font>
													</label>
													<span className={sx('error', 'error_EMP_NAME')}> </span>
												</div>
											</div>
											<div className={sx('col-lg-6')}>
												<div className={sx('noti', 'mt-20')}>
													<em className={cx('material-icons')}>info</em>
													<div className={sx('toolip')}>
														<p>Vui lòng nhập tối thiểu 3 ký tự!</p>
													</div>
												</div>
											</div>
										</div>
										<div className={sx('row')}>
											<div className={sx('col-lg-6')}>
												<div className={sx('form-group', 'form-select')}>
													<label>Tổng số nhân viên</label>
													<select name='EMP_TOTALSTAFF'>
														<option value=''>Chọn số nhân viên</option>
														<option value='Ít hơn 10'>Ít hơn 10</option>
														<option value='10-20'>10-20</option>
														<option value='25-99'>25-99</option>
														<option value='100-499'>100-499</option>
														<option value='500-999' selected='selected'>
															500-999
														</option>
														<option value='1.000-4.999'>1.000-4.999</option>
														<option value='5.000-9.999'>5.000-9.999</option>
														<option value='10.000-19.999'>10.000-19.999</option>
														<option value='20.000-49.999'>20.000-49.999</option>
														<option value='Nhiều hơn 50.000'>Nhiều hơn 50.000</option>
													</select>
													<span className={sx('error', 'error_EMP_TOTALSTAFF')}> </span>
												</div>
											</div>
											<div className={sx('col-lg-6')}>
												<div className={sx('form-group', 'form-select')}>
													<label>Loại hình hoạt động</label>
													<select name='Company_type' id='company_type' className={sx('width_160')}>
														<option value=''>Vui lòng chọn</option>
														<option value={6}>100% vốn nước ngoài</option>
														<option value={4} selected='selected'>
															Cá nhân
														</option>
														<option value={7}>Công ty đa quốc gia</option>
														<option value={2}>Cổ phần</option>
														<option value={5}>Liên doanh</option>
														<option value={1}>Nhà nước</option>
														<option value={3}>Trách nhiệm hữu hạn</option>
													</select>
													<span className={sx('error', 'error_Company_type')}> </span>
												</div>
											</div>
										</div>
										<div className={sx('row')}>
											<div className={sx('col-lg-6')}>
												<div className={sx('form-group', 'form-text', 'form-input-label')}>
													<input
														type='text'
														name='EMP_WEBSITE'
														id='EMP_WEBSITE'
														defaultValue=''
														onkeyup="this.setAttribute('value', this.value);"
														maxLength={100}
													/>
													<label>Website công ty</label>
													<span className={sx('error', 'error_EMP_WEBSITE')}> </span>
												</div>
											</div>
											<div className={sx('col-lg-6')}>
												<div className={sx('form-group', 'form-text', 'form-input-label')}>
													<input
														type='text'
														name='EMP_TAXID'
														id='EMP_TAXID'
														defaultValue=''
														onkeyup="this.setAttribute('value', this.value);"
														maxLength={100}
													/>
													<label>Mã số thuế</label>
													<span className={sx('error', 'error_EMP_TAXID')}> </span>
												</div>
											</div>
										</div>
									</div>
									<div className={sx('form-wrap', 'logo-wrap')}>
										<div className={sx('main-image')}>
											<div className={sx('form-group')}>
												<p className={sx('title-label')}>Logo</p>
											</div>
											<div className={sx('list-image')}>
												<div className={sx('image-item')} id='logo_path'></div>
											</div>
											<div className={sx('upload-img')}>
												<input type='file' id='logo' name='logo' defaultValue='' />
												<input type='hidden' name='logo_h' id='logo_h' defaultValue='' />
												<input type='hidden' name='logo_old' id='logo_old' defaultValue='' />
												<input type='hidden' name='logo_new' id='logo_new' defaultValue='' />
												<label htmlFor='logo'>
													<em className={cx('material-icons')}>folder_open</em>Tải ảnh từ máy tính
												</label>
												<div className={sx('noti')}>
													{' '}
													<em className={cx('material-icons')}>info </em>
													<div className={cx('toolip')}>
														<p>Định dạng: gif, jpg, png, kích thước đẹp nhất 240x160px</p>
													</div>
												</div>
											</div>
										</div>
									</div>
									<div className={sx('form-wrap', 'banner-wrap')}>
										<div className={sx('main-image')}>
											<div className={sx('form-group')}>
												<p className={sx('title-label')}>
													Cover/ Banner
													<a
														className={sx('btn-view-banner-location')}
														href='https://static.careerbuilder.vn/themes/kiemviecv32/employersnews/images/graphics/cover-tip.jpg'>
														<img
															src='https://static.careerbuilder.vn/themes/kiemviecv32/images/icons/icon_help.png'
															align='absmiddle'
															title='Click để xem vị trí của Cover / Banner'
														/>
														Click để xem vị trí của Cover / Banner{' '}
													</a>
												</p>
											</div>
											<div className={sx('list-image')}>
												<div className={sx('image-item')} id='image1_path'></div>
											</div>
											<div className={sx('upload-img')}>
												<input type='file' name='image1' id='image1' defaultValue='' />
												<label htmlFor='image1'>
													<em className={cx('material-icons')}>folder_open</em>Tải ảnh từ máy tính
												</label>
												<input
													type='hidden'
													className={sx('li_dmk_width252')}
													name='image1_h'
													id='image1_h'
													defaultValue=''
												/>
												<input
													type='hidden'
													className={sx('li_dmk_width252')}
													name='image1_old'
													id='image1_old'
													defaultValue=''
												/>
												<input
													type='hidden'
													className={sx('li_dmk_width252')}
													name='image1_new'
													id='image1_new'
													defaultValue=''
												/>
												<div className={sx('noti')}>
													{' '}
													<em className={cx('material-icons')}>info </em>
													<div className={sx('toolip')}>
														<p>Định dạng: *.gif, *.jpg, *.png. Kích thước đẹp nhất 1410x290px</p>
													</div>
												</div>
											</div>
										</div>
									</div>
									<div className={sx('form-wrap')}>
										<div className={sx('form-group', 'form-editor')} id='div_jobdesc'>
											<label>
												Giới thiệu về công ty <font style={{ color: 'red' }}>*</font>
											</label>
											<textarea
												cols={80}
												rows={5}
												name='EMP_DESC'
												id='EMP_DESC'
												className={sx('editor')}
												defaultValue={
													'<p>Ngân hàng Thương mại Cổ phần Quân đội (tên giao dịch tiếng Anh là Military Commercial Joint Stock Bank), gọi tắt là Ngân hàng Quân đội, viết tắt là MB, là một ngân hàng thương mại cổ phần của Việt Nam, một doanh nghiệp trực thuộc Bộ Quốc phòng.</p>'
												}
											/>
											<div className={sx('note')}>
												<p>Vui lòng không nhập email,số điện thoại và số lượng kí tự phải lớn hơn 10</p>
											</div>
											<span className={sx('error', 'error_EMP_DESC')}> </span>
											<div className={sx('note')}>
												<p> </p>
											</div>
										</div>
										<div className={sx('form-group', 'form-editor')} id='div_jobreq'>
											<label>Thông điệp từ công ty</label>
											<textarea
												cols={80}
												rows={5}
												id='EMP_MESSAGE'
												name='EMP_MESSAGE'
												className={sx('editor')}
												defaultValue={''}
											/>
											<div className={sx('note')}>
												<p>Vui lòng không nhập email,số điện thoại và số lượng kí tự phải lớn hơn 10</p>
											</div>
											<span className={sx('error', 'error_EMP_MESSAGE')}> </span>
											<div className={sx('note')}>
												<p> </p>
											</div>
										</div>
										<div className={sx('main-image')}>
											<div className={sx('list-image')}>
												<div className={sx('image-item')} id='image2_path'></div>
											</div>
											<div className={sx('upload-img')}>
												<input type='file' name='image2' id='image2' defaultValue='' />
												<label htmlFor='image2'>
													<em className={cx('material-icons')}>folder_open</em>Tải ảnh từ máy tính
												</label>
												<input
													type='hidden'
													className={sx('li_dmk_width252')}
													name='image2_h'
													id='image2_h'
													defaultValue=''
												/>
												<input
													type='hidden'
													className={sx('li_dmk_width252')}
													name='image2_old'
													id='image2_old'
													defaultValue=''
												/>
												<input
													type='hidden'
													className={sx('li_dmk_width252')}
													name='image2_new'
													id='image2_new'
													defaultValue=''
												/>
												<div className={sx('noti')}>
													{' '}
													<em className={cx('material-icons')}>info </em>
													<div className={sx('toolip')}>
														<p>Định dạng: *.gif, *.jpg, *.png. Kích thước &lt;1mb</p>
													</div>
												</div>
											</div>
										</div>
									</div>
									<input type='hidden' id='strPhoto' name='strPhoto' defaultValue='' />
									<input type='hidden' id='strPhotoDelete' name='strPhotoDelete' defaultValue='' />
									<input type='hidden' id='checkYouTube' name='checkYouTube' />
									<h2 className={sx('title-application')}>
										Video và hình ảnh{' '}
										<span className={sx('txt_required', 'mả_left10')}>(Không bắt buộc)</span>{' '}
									</h2>
									<div className={sx('form-wrap', 'video-wrap')}>
										<div className={sx('noti')}>
											<p>
												{' '}
												<em className={cx('material-icons')}>info </em>Link video youtube
											</p>
											<div className={sx('toolip')}>
												Nhập thêm video và hình ảnh giới thiệu về công ty sẽ thu hút ứng viên nộp đơn ứng
												tuyển. <br />
												Video và hình ảnh này sẽ được sử dụng chung cho tất cả
												<a
													className={sx('line_bot', 'fancybox')}
													href='https://static.careerbuilder.vn/themes/kiemviecv32/employersnews/images/graphics/ex1.gif'>
													thông tin tuyển dụng
												</a>{' '}
												và
												<a
													className={sx('line_bot', 'fancybox')}
													href='https://static.careerbuilder.vn/themes/kiemviecv32/employersnews/images/graphics/ex2.gif'>
													trang giới thiệu về công ty
												</a>
											</div>
										</div>
										<div className={sx('row')}>
											<div className={sx('col-lg-6')}>
												<div className={sx('form-group', 'form-text')}>
													<input
														type='text'
														placeholder='Link video youtube'
														id='strVideo'
														name='strVideo'
														onblur='checkYoutubeValid(0);'
														defaultValue=''
													/>
												</div>
												<span className={sx('error', 'error_strVideo')}> </span>
											</div>
											<div className={sx('col-lg-6')}>
												<div className={sx('noti', 'toollips')}>
													<p>
														{' '}
														<em className={cx('material-icons')}>info </em>
													</p>
													<div className={sx('toolip')}>
														Ví dụ: https://www.youtube.com/watch?v=egYcmuk3dso
													</div>
												</div>
											</div>
										</div>
										<div className={sx('preview')}>
											<a
												className={sx('btn-preview')}
												href='javascript:void(0);'
												onclick='checkYoutubeValid(1)'>
												Xem trước
											</a>
										</div>
										<div className={sx('main-image')}>
											<div className={sx('form-group')}>
												<p className={sx('title-label')}>
													Hình ảnh <br />
													<span className={sx('note2')}>(Tối đa 5 ảnh)</span>
												</p>
											</div>
											<div className={sx('list-image')} id='list-image'></div>
											<div className={sx('upload-img')}>
												<input type='file' id='filephoto' onchange='return ajaxPhotoUpload();' />
												<label htmlFor='filephoto' className={sx('')}>
													<em className={cx('material-icons')}>folder_open</em>Tải Ảnh từ máy tính
												</label>
												<div className={sx('noti')}>
													{' '}
													<em className={cx('material-icons')}>info </em>
													<div className={sx('toolip')}>
														<div className={sx('clear', 'note2', 'pad_top8')}>
															- Hỗ trợ định dạng .jpg, .gif, .png; dung lượng mỗi ảnh không vượt quá 1mb
														</div>
														<div className={sx('clear', 'note2')}>
															- Chiều cao mỗi ảnh phải &gt;135px và &lt; 1,500px
														</div>
													</div>
												</div>
											</div>
										</div>
										<div className={sx('show-video')}>
											<div className={sx('form-group', 'form-checkbox')}>
												<input
													type='checkbox'
													id='isdisplay'
													name='isdisplay'
													defaultValue={1}
													disabled=''
												/>
												<label htmlFor='isdisplay'>
													<strong>Hiển thị video và ảnh này trên trang giới thiệu về công ty</strong>
												</label>
												<span id='loading' className={sx('img_loading')} style={{ display: 'none' }}>
													<img src='https://static.careerbuilder.vn/themes/kiemviecv32/css/images/graphics/loading.gif' />
												</span>
											</div>
										</div>
									</div>
									<h2 className={sx('title-application')}>Phúc lợi</h2>
									<div className={sx('checkbox-wrap')}>
										<div className={sx('row')}>
											<div className={sx('col-sm-6', 'col-lg-3')}>
												<div className={sx('form-group', 'form-checkbox')}>
													<input
														type='checkbox'
														className={sx('')}
														id='BENEFIT_ID_2'
														name='BENEFIT_ID[]'
														defaultValue={2}
														defaultChecked='checked'
													/>
													<label htmlFor='BENEFIT_ID_2'>
														{' '}
														<em className={sx('fa', 'fa-medkit')} />
														Chế độ bảo hiểm
													</label>
												</div>
											</div>
											<div className={sx('col-sm-6', 'col-lg-3')}>
												<div className={sx('form-group', 'form-checkbox')}>
													<input
														type='checkbox'
														className={sx('')}
														id='BENEFIT_ID_3'
														name='BENEFIT_ID[]'
														defaultValue={3}
														defaultChecked='checked'
													/>
													<label htmlFor='BENEFIT_ID_3'>
														{' '}
														<em className={sx('fa', 'fa-plane')} />
														Du Lịch
													</label>
												</div>
											</div>
											<div className={sx('col-sm-6', 'col-lg-3')}>
												<div className={sx('form-group', 'form-checkbox')}>
													<input
														type='checkbox'
														className={sx('')}
														id='BENEFIT_ID_8'
														name='BENEFIT_ID[]'
														defaultValue={8}
														defaultChecked='checked'
													/>
													<label htmlFor='BENEFIT_ID_8'>
														{' '}
														<em className={sx('fa', 'fa-usd')} />
														Chế độ thưởng
													</label>
												</div>
											</div>
											<div className={sx('col-sm-6', 'col-lg-3')}>
												<div className={sx('form-group', 'form-checkbox')}>
													<input
														type='checkbox'
														className={sx('')}
														id='BENEFIT_ID_9'
														name='BENEFIT_ID[]'
														defaultValue={9}
														defaultChecked='checked'
													/>
													<label htmlFor='BENEFIT_ID_9'>
														{' '}
														<em className={sx('fa', 'fa-user-md')} />
														Chăm sóc sức khỏe
													</label>
												</div>
											</div>
											<div className={sx('col-sm-6', 'col-lg-3')}>
												<div className={sx('form-group', 'form-checkbox')}>
													<input
														type='checkbox'
														className={sx('')}
														id='BENEFIT_ID_10'
														name='BENEFIT_ID[]'
														defaultValue={10}
														defaultChecked='checked'
													/>
													<label htmlFor='BENEFIT_ID_10'>
														{' '}
														<em className={sx('fa', 'fa-graduation-cap')} />
														Đào tạo
													</label>
												</div>
											</div>
											<div className={sx('col-sm-6', 'col-lg-3')}>
												<div className={sx('form-group', 'form-checkbox')}>
													<input
														type='checkbox'
														className={sx('')}
														id='BENEFIT_ID_11'
														name='BENEFIT_ID[]'
														defaultValue={11}
														defaultChecked='checked'
													/>
													<label htmlFor='BENEFIT_ID_11'>
														{' '}
														<em className={sx('fa', 'fa-line-chart')} />
														Tăng lương
													</label>
												</div>
											</div>
											<div className={sx('col-sm-6', 'col-lg-3')}>
												<div className={sx('form-group', 'form-checkbox')}>
													<input
														type='checkbox'
														className={sx('')}
														id='BENEFIT_ID_1'
														name='BENEFIT_ID[]'
														defaultValue={1}
													/>
													<label htmlFor='BENEFIT_ID_1'>
														{' '}
														<em className={sx('fa', 'fa-laptop')} />
														Laptop
													</label>
												</div>
											</div>
											<div className={sx('col-sm-6', 'col-lg-3')}>
												<div className={sx('form-group', 'form-checkbox')}>
													<input
														type='checkbox'
														className={sx('')}
														id='BENEFIT_ID_4'
														name='BENEFIT_ID[]'
														defaultValue={4}
													/>
													<label htmlFor='BENEFIT_ID_4'>
														{' '}
														<em className={sx('fa', 'fa-money')} />
														Phụ cấp
													</label>
												</div>
											</div>
											<div className={sx('col-sm-6', 'col-lg-3')}>
												<div className={sx('form-group', 'form-checkbox')}>
													<input
														type='checkbox'
														className={sx('')}
														id='BENEFIT_ID_5'
														name='BENEFIT_ID[]'
														defaultValue={5}
													/>
													<label htmlFor='BENEFIT_ID_5'>
														{' '}
														<em className={sx('fa', 'fa-taxi')} />
														Xe đưa đón
													</label>
												</div>
											</div>
											<div className={sx('col-sm-6', 'col-lg-3')}>
												<div className={sx('form-group', 'form-checkbox')}>
													<input
														type='checkbox'
														className={sx('')}
														id='BENEFIT_ID_6'
														name='BENEFIT_ID[]'
														defaultValue={6}
													/>
													<label htmlFor='BENEFIT_ID_6'>
														{' '}
														<em className={sx('fa', 'fa-fighter-jet')} />
														Du lịch nước ngoài
													</label>
												</div>
											</div>
											<div className={sx('col-sm-6', 'col-lg-3')}>
												<div className={sx('form-group', 'form-checkbox')}>
													<input
														type='checkbox'
														className={sx('')}
														id='BENEFIT_ID_7'
														name='BENEFIT_ID[]'
														defaultValue={7}
													/>
													<label htmlFor='BENEFIT_ID_7'>
														{' '}
														<em className={sx('fa', 'fa-black-tie')} />
														Đồng phục
													</label>
												</div>
											</div>
											<div className={sx('col-sm-6', 'col-lg-3')}>
												<div className={sx('form-group', 'form-checkbox')}>
													<input
														type='checkbox'
														className={sx('')}
														id='BENEFIT_ID_12'
														name='BENEFIT_ID[]'
														defaultValue={12}
													/>
													<label htmlFor='BENEFIT_ID_12'>
														{' '}
														<em className={sx('fa', 'fa-credit-card')} />
														Công tác phí
													</label>
												</div>
											</div>
											<div className={sx('col-sm-6', 'col-lg-3')}>
												<div className={sx('form-group', 'form-checkbox')}>
													<input
														type='checkbox'
														className={sx('')}
														id='BENEFIT_ID_13'
														name='BENEFIT_ID[]'
														defaultValue={13}
													/>
													<label htmlFor='BENEFIT_ID_13'>
														{' '}
														<em className={sx('fa', 'fa-money')} />
														Phụ cấp thâm niên
													</label>
												</div>
											</div>
											<div className={sx('col-sm-6', 'col-lg-3')}>
												<div className={sx('form-group', 'form-checkbox')}>
													<input
														type='checkbox'
														className={sx('')}
														id='BENEFIT_ID_14'
														name='BENEFIT_ID[]'
														defaultValue={14}
													/>
													<label htmlFor='BENEFIT_ID_14'>
														{' '}
														<em className={sx('fa', 'fa-briefcase')} />
														Nghỉ phép năm
													</label>
												</div>
											</div>
											<div className={sx('col-sm-6', 'col-lg-3')}>
												<div className={sx('form-group', 'form-checkbox')}>
													<input
														type='checkbox'
														className={sx('')}
														id='BENEFIT_ID_15'
														name='BENEFIT_ID[]'
														defaultValue={15}
													/>
													<label htmlFor='BENEFIT_ID_15'>
														{' '}
														<em className={sx('fa', 'fa-heartbeat')} />
														CLB thể thao
													</label>
												</div>
											</div>
										</div>
									</div>
									<div className={sx('noted')}>
										<p>
											<font style={{ color: 'red' }}>*</font> Thông tin bắt buộc
										</p>
									</div>
									<div className={sx('form-group', 'form-submit', 'form-continue')}>
										<a
											className={sx('btn-cancel', 'btn-preview-account-user')}
											href='javascript:;'
											onclick="window.open('https://careerbuilder.vn/vi/nha-tuyen-dung/cong-ty-it-minh-nguyen.35A94C80.html', '_blank'); return false; ">
											Xem lại
										</a>
										<button
											className={sx('btn-gradient', 'btn-submit')}
											type='submit'
											id='update_info_company_form'
											onclick='updateInfoCompany()'>
											Cập nhật
										</button>
									</div>
								</div>
							</form>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
};

export default EditEmployer;
