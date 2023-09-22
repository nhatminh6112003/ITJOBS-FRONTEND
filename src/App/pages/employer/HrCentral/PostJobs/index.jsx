import React from 'react';
import styles from './postjobs.module.css';
import classNames from 'classnames/bind';
import Tooltip from '@mui/material/Tooltip';
// import { TextareaAutosize } from '@mui/material';
import Textarea from '~/Core/components/common/Textarea';
const sx = classNames.bind(styles);
const PostJobs = ({ cx }) => {
	return (
		<section className={sx('manage-job-posting-post-jobs', 'cb-section', 'bg-manage')}>
			<div className={cx('container')}>
				<div className={sx('box-manage-job-posting')}>
					<div className={sx('heading-manage')}>
						<div className={sx('left-heading')}>
							<h1 className={sx('title-manage')}>Đăng Tuyển Dụng</h1>
						</div>
						<div className={sx('right-heading')}>
							<a href='https://careerbuilder.vn/vi/employers/faq' className={sx('support')}>
								Hướng dẫn
							</a>
						</div>
					</div>
					<form
						name='frmEditJob'
						id='frmEditJob'
						method='post'
						action='https://careerbuilder.vn/vi/employers/postjobs/savejob'>
						<div className={sx('main-tabslet')}>
							<ul className={sx('tabslet-tab')}>
								<li className={sx('active')}>
									{' '}
									<a href='javascript:void(0);'>Thông Tin Tuyển Dụng</a>
								</li>
								<li>
									{' '}
									<a href='javascript:void(0)' onclick='is_Filter_Form();'>
										Thông Tin Liên Hệ
									</a>
								</li>
								<li>
									{' '}
									<a href='javascript:void(0)' onclick='is_Filter_Form();'>
										Thiết Lập Độ Phù Hợp Ứng Viên
									</a>
								</li>
							</ul>
							<div className={sx('tabslet-content', 'active')} id='tab-1'>
								<input name='ispublic' type='hidden' defaultValue={0} />
								<input name='emp_id' type='hidden' defaultValue='35A94C80' />
								<input name='job_id' type='hidden' defaultValue='35A4E900' />
								<input type='hidden' id='jobsamp_id' name='jobsamp_id' defaultValue='' />
								<input type='hidden' id='lang' name='lang' defaultValue='' />
								<input name='intSave' id='intSave' type='hidden' defaultValue={1} />
								<input name='job_source' id='job_source' type='hidden' defaultValue={1} />
								<input name='work_location_0' id='work_location_0' type='hidden' defaultValue='' />
								<input name='work_location_1' id='work_location_1' type='hidden' defaultValue='' />
								<input name='work_location_2' id='work_location_2' type='hidden' defaultValue='' />
								<div className={sx('main-application-information')}>
									<h2 className={sx('title-application')}>Thông tin tuyển dụng</h2>
									<div className={sx('form-wrap')}>
										<div className={cx('row')}>
											<div className={cx('col-lg-6')}>
												<div className={sx('form-group', 'form-text')}>
													<input
														type='text'
														id='job_title'
														className={sx('keyword')}
														name='job_title'
														defaultValue=''
														onblur='loadTagKey()'
														placeholder='Chức danh tuyển dụng'
														autoComplete='off'
													/>
													<span className={sx('form-error')} />
												</div>
											</div>
											<div className={cx('col-lg-6')}>
												<div className={sx('noti', 'mt-20')}>
													<Tooltip
														title={
															<div className={sx('toolip')}>
																Lưu ý: Chức danh nên mô tả chính xác vị trí tuyển dụng cần tuyển. Đây là
																một phần quan trọng thu hút người tìm việc ứng tuyển và hệ thống gợi ý
																hồ sơ phù hợp.
															</div>
														}>
														<em className={cx('material-icons')}>info</em>
													</Tooltip>
												</div>
											</div>
										</div>
										<div className={cx('row')}>
											<div className={cx('col-lg-3')}>
												<div className={sx('form-group', 'form-text')}>
													<input
														type='text'
														id='job_code'
														name='job_code'
														maxLength={12}
														defaultValue=''
														placeholder='Mã công việc'
													/>
													<span className={sx('form-error')} />
												</div>
											</div>
											<div className={cx('col-lg-6')}>
												<div className={cx('d-flex', 'mt-20', 'align-center')}>
													<div className={sx('noti')}>
														<Tooltip
															title={
																<div className={sx('toolip')}>
																	Quý khách có thể chọn <strong>Mẫu Quảng Cáo Tuyển Dụng</strong> có
																	sẵn của chúng tôi.
																</div>
															}>
															<em className={cx('material-icons')}>info</em>
														</Tooltip>
													</div>
													<ul className={sx('list-link')}>
														<li>
															<a
																href='javascript:void(0);'
																id='job_template'
																className={sx('btn-use-templates')}>
																Sử dụng mẫu có sẵn
															</a>
														</li>
														<li>
															<a
																href='javascript:void(0);'
																onclick="chooseFromListJob('lop7cttnq.1667207375');"
																className={sx('btn-created-job-list')}>
																Chọn từ danh sách việc làm đã tạo
															</a>
														</li>
													</ul>
												</div>
											</div>
										</div>
										<div className={cx('row')}>
											<div className={cx('col-lg-6')}>
												<div className={sx('form-group', 'form-select-chosen')}>
													<label>
														Ngành nghề <font style={{ color: 'red' }}>*</font>
													</label>
													<select
														name='LOCATION_ID[]'
														onchange='loadWorkLocation(this)'
														className={sx('select_location')}>
														<option value=''>Chọn</option>
														<optgroup label='Việt Nam'>
															<option value={4}>Hà Nội</option>
															<option value={8}>Hồ Chí Minh</option>
															<option value={76}>An Giang</option>
															<option value={64}>Bà Rịa - Vũng Tàu</option>
															<option value={781}>Bạc Liêu</option>
															<option value={281}>Bắc Cạn</option>
															<option value={240}>Bắc Giang</option>
															<option value={241}>Bắc Ninh</option>
															<option value={75}>Bến Tre</option>
															<option value={650}>Bình Dương</option>
															<option value={56}>Bình Định</option>
															<option value={651}>Bình Phước</option>
															<option value={62}>Bình Thuận</option>
															<option value={78}>Cà Mau</option>
															<option value={26}>Cao Bằng</option>
															<option value={71}>Cần Thơ</option>
															<option value={50}>Dak Lak</option>
															<option value={1042}>Dak Nông</option>
															<option value={511}>Đà Nẵng</option>
															<option value={900}>Điện Biên</option>
															<option value={1064}>Đồng Bằng Sông Cửu Long</option>
															<option value={61}>Đồng Nai</option>
															<option value={67}>Đồng Tháp</option>
															<option value={59}>Gia Lai</option>
															<option value={19}>Hà Giang</option>
															<option value={351}>Hà Nam</option>
															<option value={39}>Hà Tĩnh</option>
															<option value={320}>Hải Dương</option>
															<option value={31}>Hải Phòng</option>
															<option value={780}>Hậu Giang</option>
															<option value={18}>Hòa Bình</option>
															<option value={321}>Hưng Yên</option>
															<option value={901}>Khác</option>
															<option value={58}>Khánh Hòa</option>
															<option value={77}>Kiên Giang</option>
															<option value={60}>Kon Tum</option>
															<option value={1071}>KV Bắc Trung Bộ</option>
															<option value={1069}>KV Đông Nam Bộ</option>
															<option value={1070}>KV Nam Trung Bộ</option>
															<option value={1072}>KV Tây Nguyên</option>
															<option value={23}>Lai Châu</option>
															<option value={25}>Lạng Sơn</option>
															<option value={20}>Lào Cai</option>
															<option value={63}>Lâm Đồng</option>
															<option value={72}>Long An</option>
															<option value={350}>Nam Định</option>
															<option value={38}>Nghệ An</option>
															<option value={30}>Ninh Bình</option>
															<option value={68}>Ninh Thuận</option>
															<option value={210}>Phú Thọ</option>
															<option value={57}>Phú Yên</option>
															<option value={52}>Quảng Bình</option>
															<option value={510}>Quảng Nam</option>
															<option value={55}>Quảng Ngãi</option>
															<option value={33}>Quảng Ninh</option>
															<option value={53}>Quảng Trị</option>
															<option value={79}>Sóc Trăng</option>
															<option value={22}>Sơn La</option>
															<option value={66}>Tây Ninh</option>
															<option value={36}>Thái Bình</option>
															<option value={280}>Thái Nguyên</option>
															<option value={37}>Thanh Hóa</option>
															<option value={54}>Thừa Thiên- Huế</option>
															<option value={73}>Tiền Giang</option>
															<option value={1065}>Toàn quốc</option>
															<option value={74}>Trà Vinh</option>
															<option value={27}>Tuyên Quang</option>
															<option value={70}>Vĩnh Long</option>
															<option value={211}>Vĩnh Phúc</option>
															<option value={29}>Yên Bái</option>
														</optgroup>
														<optgroup label='Campuchia'>
															<option value={1098}>Banteay Meanchey</option>
															<option value={1096}>Battambang</option>
															<option value={1092}>Kampong Chhnang</option>
															<option value={1090}>Kampong Speu</option>
															<option value={1085}>Kampot</option>
															<option value={1088}>Kandal</option>
															<option value={1084}>Kep</option>
															<option value={1091}>Koh Kong</option>
															<option value={1093}>Kratie</option>
															<option value={1104}>Otdar Meanchey</option>
															<option value={1103}>Pailin</option>
															<option value={1041}>Phnompenh</option>
															<option value={1099}>Preah Vihear</option>
															<option value={1089}>Prey Veng</option>
															<option value={1097}>Siem Reap</option>
															<option value={1100}>Stung Treng</option>
															<option value={1087}>Svay Rieng</option>
															<option value={1082}>Tbong Khmum</option>
														</optgroup>
														<optgroup label='Hoa Kỳ'>
															<option value={1034}>Chicago</option>
															<option value={1077}>Florida</option>
															<option value={1033}>Miami</option>
															<option value={1039}>San Diego</option>
														</optgroup>
														<optgroup label='Hồng Kông'>
															<option value={1079}>Hồng Kông</option>
														</optgroup>
														<optgroup label='Khác'>
															<option value={1318}>Khác</option>
														</optgroup>
														<optgroup label='Lào'>
															<option value={1106}>Attapeu</option>
															<option value={1107}>Bokeo</option>
															<option value={1109}>Champasak</option>
															<option value={1110}>Houaphanh</option>
															<option value={1111}>Khammouane</option>
															<option value={1113}>Luang Prabang</option>
															<option value={1115}>Phongsaly</option>
															<option value={1059}>Vientiane</option>
															<option value={1120}>Xiangkhouang</option>
														</optgroup>
														<optgroup label='Malaysia'>
															<option value={1019}>Kuala Lumpur</option>
															<option value={1078}>Malaysia</option>
														</optgroup>
														<optgroup label='Myanmar'>
															<option value={1320}>Yangon</option>
														</optgroup>
														<optgroup label='Nhật Bản'>
															<option value={1043}>Hokkaido</option>
															<option value={1001}>Tokyo</option>
															<option value={1002}>Yokohama</option>
														</optgroup>
														<optgroup label='Qatar'>
															<option value={1055}>Qatar</option>
														</optgroup>
														<optgroup label='Quốc tế'>
															<option value={1073}>Quốc tế</option>
														</optgroup>
														<optgroup label='Singapore'>
															<option value={1040}>Singapore</option>
														</optgroup>
														<optgroup label='Ukraine'>
															<option value={1053}>Kharkiv</option>
														</optgroup>
													</select>

													<span className={sx('form-error', 'error_select_industry_db_1')} />
												</div>
											</div>
										</div>
										<div id='post_job_location'>
											<div className={sx('item_post_job_location')}>
												<div className={cx('row')}>
													<div className={cx('col-lg-6')}>
														<div className={sx('form-group', 'form-select')}>
															<label>
																Nơi làm việc <font style={{ color: 'red' }}>*</font>
																<a
																	className={sx('btn-add-location', 'ml-5')}
																	href='javascript:void(0);'
																	onclick='addWorkLocation();'>
																	+ Thêm Địa Điểm
																	<div className={sx('toolip')}>
																		- Bổ sung thông tin địa điểm làm việc cho vị trí đăng tuyển
																		<br />- Vị trí đăng tuyển của bạn sẽ được hiển thị trên bản đồ
																		việc làm dành cho ứng viên trên thiết bị di động, qua đó gia tăng
																		hiệu quả tuyển dụng
																	</div>
																</a>
															</label>
															<select
																name='LOCATION_ID[]'
																onchange='loadWorkLocation(this)'
																className={sx('select_location')}>
																<option value=''>Chọn</option>
																<optgroup label='Việt Nam'>
																	<option value={4}>Hà Nội</option>
																	<option value={8}>Hồ Chí Minh</option>
																	<option value={76}>An Giang</option>
																	<option value={64}>Bà Rịa - Vũng Tàu</option>
																	<option value={781}>Bạc Liêu</option>
																	<option value={281}>Bắc Cạn</option>
																	<option value={240}>Bắc Giang</option>
																	<option value={241}>Bắc Ninh</option>
																	<option value={75}>Bến Tre</option>
																	<option value={650}>Bình Dương</option>
																	<option value={56}>Bình Định</option>
																	<option value={651}>Bình Phước</option>
																	<option value={62}>Bình Thuận</option>
																	<option value={78}>Cà Mau</option>
																	<option value={26}>Cao Bằng</option>
																	<option value={71}>Cần Thơ</option>
																	<option value={50}>Dak Lak</option>
																	<option value={1042}>Dak Nông</option>
																	<option value={511}>Đà Nẵng</option>
																	<option value={900}>Điện Biên</option>
																	<option value={1064}>Đồng Bằng Sông Cửu Long</option>
																	<option value={61}>Đồng Nai</option>
																	<option value={67}>Đồng Tháp</option>
																	<option value={59}>Gia Lai</option>
																	<option value={19}>Hà Giang</option>
																	<option value={351}>Hà Nam</option>
																	<option value={39}>Hà Tĩnh</option>
																	<option value={320}>Hải Dương</option>
																	<option value={31}>Hải Phòng</option>
																	<option value={780}>Hậu Giang</option>
																	<option value={18}>Hòa Bình</option>
																	<option value={321}>Hưng Yên</option>
																	<option value={901}>Khác</option>
																	<option value={58}>Khánh Hòa</option>
																	<option value={77}>Kiên Giang</option>
																	<option value={60}>Kon Tum</option>
																	<option value={1071}>KV Bắc Trung Bộ</option>
																	<option value={1069}>KV Đông Nam Bộ</option>
																	<option value={1070}>KV Nam Trung Bộ</option>
																	<option value={1072}>KV Tây Nguyên</option>
																	<option value={23}>Lai Châu</option>
																	<option value={25}>Lạng Sơn</option>
																	<option value={20}>Lào Cai</option>
																	<option value={63}>Lâm Đồng</option>
																	<option value={72}>Long An</option>
																	<option value={350}>Nam Định</option>
																	<option value={38}>Nghệ An</option>
																	<option value={30}>Ninh Bình</option>
																	<option value={68}>Ninh Thuận</option>
																	<option value={210}>Phú Thọ</option>
																	<option value={57}>Phú Yên</option>
																	<option value={52}>Quảng Bình</option>
																	<option value={510}>Quảng Nam</option>
																	<option value={55}>Quảng Ngãi</option>
																	<option value={33}>Quảng Ninh</option>
																	<option value={53}>Quảng Trị</option>
																	<option value={79}>Sóc Trăng</option>
																	<option value={22}>Sơn La</option>
																	<option value={66}>Tây Ninh</option>
																	<option value={36}>Thái Bình</option>
																	<option value={280}>Thái Nguyên</option>
																	<option value={37}>Thanh Hóa</option>
																	<option value={54}>Thừa Thiên- Huế</option>
																	<option value={73}>Tiền Giang</option>
																	<option value={1065}>Toàn quốc</option>
																	<option value={74}>Trà Vinh</option>
																	<option value={27}>Tuyên Quang</option>
																	<option value={70}>Vĩnh Long</option>
																	<option value={211}>Vĩnh Phúc</option>
																	<option value={29}>Yên Bái</option>
																</optgroup>
																<optgroup label='Campuchia'>
																	<option value={1098}>Banteay Meanchey</option>
																	<option value={1096}>Battambang</option>
																	<option value={1092}>Kampong Chhnang</option>
																	<option value={1090}>Kampong Speu</option>
																	<option value={1085}>Kampot</option>
																	<option value={1088}>Kandal</option>
																	<option value={1084}>Kep</option>
																	<option value={1091}>Koh Kong</option>
																	<option value={1093}>Kratie</option>
																	<option value={1104}>Otdar Meanchey</option>
																	<option value={1103}>Pailin</option>
																	<option value={1041}>Phnompenh</option>
																	<option value={1099}>Preah Vihear</option>
																	<option value={1089}>Prey Veng</option>
																	<option value={1097}>Siem Reap</option>
																	<option value={1100}>Stung Treng</option>
																	<option value={1087}>Svay Rieng</option>
																	<option value={1082}>Tbong Khmum</option>
																</optgroup>
																<optgroup label='Hoa Kỳ'>
																	<option value={1034}>Chicago</option>
																	<option value={1077}>Florida</option>
																	<option value={1033}>Miami</option>
																	<option value={1039}>San Diego</option>
																</optgroup>
																<optgroup label='Hồng Kông'>
																	<option value={1079}>Hồng Kông</option>
																</optgroup>
																<optgroup label='Khác'>
																	<option value={1318}>Khác</option>
																</optgroup>
																<optgroup label='Lào'>
																	<option value={1106}>Attapeu</option>
																	<option value={1107}>Bokeo</option>
																	<option value={1109}>Champasak</option>
																	<option value={1110}>Houaphanh</option>
																	<option value={1111}>Khammouane</option>
																	<option value={1113}>Luang Prabang</option>
																	<option value={1115}>Phongsaly</option>
																	<option value={1059}>Vientiane</option>
																	<option value={1120}>Xiangkhouang</option>
																</optgroup>
																<optgroup label='Malaysia'>
																	<option value={1019}>Kuala Lumpur</option>
																	<option value={1078}>Malaysia</option>
																</optgroup>
																<optgroup label='Myanmar'>
																	<option value={1320}>Yangon</option>
																</optgroup>
																<optgroup label='Nhật Bản'>
																	<option value={1043}>Hokkaido</option>
																	<option value={1001}>Tokyo</option>
																	<option value={1002}>Yokohama</option>
																</optgroup>
																<optgroup label='Qatar'>
																	<option value={1055}>Qatar</option>
																</optgroup>
																<optgroup label='Quốc tế'>
																	<option value={1073}>Quốc tế</option>
																</optgroup>
																<optgroup label='Singapore'>
																	<option value={1040}>Singapore</option>
																</optgroup>
																<optgroup label='Ukraine'>
																	<option value={1053}>Kharkiv</option>
																</optgroup>
															</select>
															<span className={sx('form-error')} />
														</div>
													</div>
												</div>
												<div className={cx('row')}>
													<div className={cx('col-lg-6')}>
														<div className={sx('form-group', 'form-select-chosen')}>
															<label>Địa chỉ làm việc</label>
															<select
																name='work_location[]'
																className={sx('chosen-select', 'work_location')}
																multiple=''
																data-placeholder='Địa điểm làm việc'
																disabled=''
																style={{ display: 'none' }}>
																<option value=''>Chọn địa điểm làm việc</option>
															</select>
															<div
																className={sx(
																	'chosen-container',
																	'chosen-container-multi',
																	'chosen-disabled'
																)}
																title=''
																style={{ width: 0 }}>
																<ul className={sx('chosen-choices')}>
																	<li className={sx('search-field')}>
																		<input
																			className={sx('chosen-search-input', 'default')}
																			type='search'
																			autoComplete='off'
																			defaultValue='Địa điểm làm việc'
																			disabled=''
																			style={{ width: '148.45px' }}
																		/>
																	</li>
																</ul>
																<div className={sx('chosen-drop')}>
																	<ul className={sx('chosen-results')} />
																</div>
															</div>
															<span className={sx('form-error')} />
														</div>
													</div>
													<div className={cx('col-lg-6', 'd-flex', 'align-center')}>
														<div className={sx('form-group', 'form-checkbox', 'mt-5')}>
															<input
																className={sx('input_margin')}
																id='hidden_worklocation_'
																type='checkbox'
																name='hidden_worklocation[]'
																defaultValue={1}
															/>
															<label htmlFor='hidden_worklocation_'>Bảo mật địa điểm làm việc</label>
														</div>
														<a
															className={sx('btn-add-location', 'ml-40', 'mt-5', 'add-location-more')}
															href='javascript:void(0)'>
															<em className={cx('material-icons')}>add_circle </em>Thêm
														</a>
													</div>
												</div>
											</div>
										</div>
										<div className={sx('form-group', 'form-editor')} id='div_jobdesc'>
											<label>
												Mô Tả Công Việc <font style={{ color: 'red' }}>*</font>
											</label>
											<Textarea minRows={4} placeholder='Mô Tả Công Việc' />

											<div
												id='cke_job_desc'
												className={sx(
													'cke_1',
													'cke',
													'cke_reset',
													'cke_chrome',
													'cke_editor_job_desc',
													'cke_ltr',
													'cke_browser_webkit'
												)}
												dir='ltr'
												lang='vi'
												role='application'
												aria-labelledby='cke_job_desc_arialbl'>
												<span id='cke_job_desc_arialbl' className={sx('cke_voice_label')}>
													Bộ soạn thảo văn bản có định dạng, job_desc
												</span>
												<div className={sx('cke_inner', 'cke_reset')} role='presentation'>
													<span
														id='cke_1_top'
														className={sx('cke_top', 'cke_reset_all')}
														role='presentation'
														style={{ height: 'auto', userSelect: 'none' }}>
														<span id='cke_9' className={sx('cke_voice_label')}>
															Thanh công cụ
														</span>
														<span
															id='cke_1_toolbox'
															className={sx('cke_toolbox')}
															role='group'
															aria-labelledby='cke_9'
															onmousedown='return false;'>
															<span
																id='cke_10'
																className={sx('cke_toolbar')}
																aria-labelledby='cke_10_label'
																role='toolbar'>
																<span id='cke_10_label' className={sx('cke_voice_label')}>
																	Kiểu cơ bản
																</span>
																<span className={sx('cke_toolbar_start')} />
																<span className={sx('cke_toolgroup')} role='presentation'>
																	<a
																		id='cke_11'
																		className={sx(
																			'cke_button',
																			'cke_button__bold',
																			'',
																			'cke_button_off'
																		)}
																		href="javascript:void('Đậm')"
																		title='Đậm'
																		tabIndex={-1}
																		hidefocus='true'
																		role='button'
																		aria-labelledby='cke_11_label'
																		aria-haspopup='false'
																		onkeydown='return CKEDITOR.tools.callFunction(0,event);'
																		onfocus='return CKEDITOR.tools.callFunction(1,event);'
																		onclick='CKEDITOR.tools.callFunction(2,this);return false;'>
																		<span
																			className={sx('cke_button_icon', 'cke_button__bold_icon')}
																			style={{
																				backgroundImage:
																					'url(https://static.careerbuilder.vn/ckeditor445/plugins/icons.png?t=E8PB)',
																				backgroundPosition: '0 -24px',
																				backgroundSize: 'auto'
																			}}>
																			&nbsp;
																		</span>
																		<span
																			id='cke_11_label'
																			className={sx('cke_button_label', 'cke_button__bold_label')}
																			aria-hidden='false'>
																			Đậm
																		</span>
																	</a>
																	<a
																		id='cke_12'
																		className={sx(
																			'cke_button',
																			'cke_button__italic',
																			'',
																			'cke_button_off'
																		)}
																		href="javascript:void('Nghiêng')"
																		title='Nghiêng'
																		tabIndex={-1}
																		hidefocus='true'
																		role='button'
																		aria-labelledby='cke_12_label'
																		aria-haspopup='false'
																		onkeydown='return CKEDITOR.tools.callFunction(3,event);'
																		onfocus='return CKEDITOR.tools.callFunction(4,event);'
																		onclick='CKEDITOR.tools.callFunction(5,this);return false;'>
																		<span
																			className={sx('cke_button_icon', 'cke_button__italic_icon')}
																			style={{
																				backgroundImage:
																					'url(https://static.careerbuilder.vn/ckeditor445/plugins/icons.png?t=E8PB)',
																				backgroundPosition: '0 -48px',
																				backgroundSize: 'auto'
																			}}>
																			&nbsp;
																		</span>
																		<span
																			id='cke_12_label'
																			className={sx('cke_button_label', 'cke_button__italic_label')}
																			aria-hidden='false'>
																			Nghiêng
																		</span>
																	</a>
																</span>
																<span className={sx('cke_toolbar_end')} />
															</span>
															<span
																id='cke_13'
																className={sx('cke_toolbar')}
																aria-labelledby='cke_13_label'
																role='toolbar'>
																<span id='cke_13_label' className={sx('cke_voice_label')}>
																	Đoạn
																</span>
																<span className={sx('cke_toolbar_start')} />
																<span className={sx('cke_toolgroup')} role='presentation'>
																	<a
																		id='cke_14'
																		className={sx(
																			'cke_button',
																			'cke_button__numberedlist',
																			'',
																			'cke_button_off'
																		)}
																		href="javascript:void('Chèn/Xoá Danh sách có thứ tự')"
																		title='Chèn/Xoá Danh sách có thứ tự'
																		tabIndex={-1}
																		hidefocus='true'
																		role='button'
																		aria-labelledby='cke_14_label'
																		aria-haspopup='false'
																		onkeydown='return CKEDITOR.tools.callFunction(6,event);'
																		onfocus='return CKEDITOR.tools.callFunction(7,event);'
																		onclick='CKEDITOR.tools.callFunction(8,this);return false;'>
																		<span
																			className={sx(
																				'cke_button_icon',
																				'cke_button__numberedlist_icon'
																			)}
																			style={{
																				backgroundImage:
																					'url(https://static.careerbuilder.vn/ckeditor445/plugins/icons.png?t=E8PB)',
																				backgroundPosition: '0 -576px',
																				backgroundSize: 'auto'
																			}}>
																			&nbsp;
																		</span>
																		<span
																			id='cke_14_label'
																			className={sx(
																				'cke_button_label',
																				'cke_button__numberedlist_label'
																			)}
																			aria-hidden='false'>
																			Chèn/Xoá Danh sách có thứ tự
																		</span>
																	</a>
																	<a
																		id='cke_15'
																		className={sx(
																			'cke_button',
																			'cke_button__bulletedlist',
																			'',
																			'cke_button_off'
																		)}
																		href="javascript:void('Chèn/Xoá Danh sách không thứ tự')"
																		title='Chèn/Xoá Danh sách không thứ tự'
																		tabIndex={-1}
																		hidefocus='true'
																		role='button'
																		aria-labelledby='cke_15_label'
																		aria-haspopup='false'
																		onkeydown='return CKEDITOR.tools.callFunction(9,event);'
																		onfocus='return CKEDITOR.tools.callFunction(10,event);'
																		onclick='CKEDITOR.tools.callFunction(11,this);return false;'>
																		<span
																			className={sx(
																				'cke_button_icon',
																				'cke_button__bulletedlist_icon'
																			)}
																			style={{
																				backgroundImage:
																					'url(https://static.careerbuilder.vn/ckeditor445/plugins/icons.png?t=E8PB)',
																				backgroundPosition: '0 -528px',
																				backgroundSize: 'auto'
																			}}>
																			&nbsp;
																		</span>
																		<span
																			id='cke_15_label'
																			className={sx(
																				'cke_button_label',
																				'cke_button__bulletedlist_label'
																			)}
																			aria-hidden='false'>
																			Chèn/Xoá Danh sách không thứ tự
																		</span>
																	</a>
																</span>
																<span className={sx('cke_toolbar_end')} />
															</span>
														</span>
													</span>
													<div
														id='cke_1_contents'
														className={sx('cke_contents', 'cke_reset')}
														role='presentation'
														style={{ height: 200 }}>
														<iframe
															src=''
															frameBorder={0}
															className={sx('cke_wysiwyg_frame', 'cke_reset')}
															style={{ width: 1300, height: '100%' }}
															title='Bộ soạn thảo văn bản có định dạng, job_desc'
															tabIndex={0}
															allowTransparency='true'
														/>
													</div>
												</div>
											</div>
											<span className={sx('form-error')} />
											<div className={sx('note')}>
												<p>Nhỏ hơn 10 000 kí tự</p>
												<div className={sx('note-right')} style={{ display: 'none' }}>
													<p>
														Hệ thống có sẵn file mô tả cho vị trí <ins> </ins>
													</p>
													<a href='javascript:void(0);' onclick='suggest(1);'>
														Sử dụng
													</a>
												</div>
											</div>
										</div>
										<div className={cx('row')}>
											<div className={cx('col-lg-12')}>
												<label>Video Giới Thiệu Công Việc</label>
											</div>
											<div className={cx('col-lg-6')}>
												<div className={sx('form-group', 'form-text')}>
													<input
														type='text'
														placeholder='Link video youtube'
														id='strVideoRecruiment'
														name='strVideoRecruiment[]'
														onblur='checkYoutubeValid(4);'
													/>
												</div>
												<span className={sx('error', 'error_strVideoRecruiment')}> </span>
											</div>
											<div className={cx('col-lg-6')}>
												<div className={sx('preview')}>
													<a
														className={sx('btn-preview')}
														href='javascript:void(0);'
														onclick='checkYoutubeValid(3)'>
														Xem trước
													</a>
												</div>
											</div>
										</div>
										<div className={cx('row')}>
											<div className={cx('col-lg-12')}>
												<label>Video Giới Thiệu Công Việc</label>
											</div>
											<div className={cx('col-lg-6')}>
												<div className={sx('form-group', 'form-text')}>
													<input
														type='text'
														placeholder='Link video youtube'
														id='strVideoRecruiment2'
														name='strVideoRecruiment[]'
														onblur='checkYoutubeValid(6);'
													/>
												</div>
												<span className={sx('error', 'error_strVideoRecruiment')}> </span>
											</div>
											<div className={cx('col-lg-6')}>
												<div className={sx('preview')}>
													<a
														className={sx('btn-preview')}
														href='javascript:void(0);'
														onclick='checkYoutubeValid(5)'>
														Xem trước
													</a>
												</div>
											</div>
										</div>
										<div className={sx('form-group', 'form-editor')} id='div_jobreq'>
											<label>
												Yêu cầu công việc <font style={{ color: 'red' }}>*</font>
											</label>
											<textarea
												cols={80}
												rows={5}
												id='job_req'
												name='job_req'
												className={sx('editor')}
												style={{ visibility: 'hidden', display: 'none' }}
												defaultValue={''}
											/>
											<div
												id='cke_job_req'
												className={sx(
													'cke_2',
													'cke',
													'cke_reset',
													'cke_chrome',
													'cke_editor_job_req',
													'cke_ltr',
													'cke_browser_webkit'
												)}
												dir='ltr'
												lang='vi'
												role='application'
												aria-labelledby='cke_job_req_arialbl'>
												<span id='cke_job_req_arialbl' className={sx('cke_voice_label')}>
													Bộ soạn thảo văn bản có định dạng, job_req
												</span>
												<div className={sx('cke_inner', 'cke_reset')} role='presentation'>
													<span
														id='cke_2_top'
														className={sx('cke_top', 'cke_reset_all')}
														role='presentation'
														style={{ height: 'auto', userSelect: 'none' }}>
														<span id='cke_23' className={sx('cke_voice_label')}>
															Thanh công cụ
														</span>
														<span
															id='cke_2_toolbox'
															className={sx('cke_toolbox')}
															role='group'
															aria-labelledby='cke_23'
															onmousedown='return false;'>
															<span
																id='cke_24'
																className={sx('cke_toolbar')}
																aria-labelledby='cke_24_label'
																role='toolbar'>
																<span id='cke_24_label' className={sx('cke_voice_label')}>
																	Kiểu cơ bản
																</span>
																<span className={sx('cke_toolbar_start')} />
																<span className={sx('cke_toolgroup')} role='presentation'>
																	<a
																		id='cke_25'
																		className={sx(
																			'cke_button',
																			'cke_button__bold',
																			'',
																			'cke_button_off'
																		)}
																		href="javascript:void('Đậm')"
																		title='Đậm'
																		tabIndex={-1}
																		hidefocus='true'
																		role='button'
																		aria-labelledby='cke_25_label'
																		aria-haspopup='false'
																		onkeydown='return CKEDITOR.tools.callFunction(13,event);'
																		onfocus='return CKEDITOR.tools.callFunction(14,event);'
																		onclick='CKEDITOR.tools.callFunction(15,this);return false;'>
																		<span
																			className={sx('cke_button_icon', 'cke_button__bold_icon')}
																			style={{
																				backgroundImage:
																					'url(https://static.careerbuilder.vn/ckeditor445/plugins/icons.png?t=E8PB)',
																				backgroundPosition: '0 -24px',
																				backgroundSize: 'auto'
																			}}>
																			&nbsp;
																		</span>
																		<span
																			id='cke_25_label'
																			className={sx('cke_button_label', 'cke_button__bold_label')}
																			aria-hidden='false'>
																			Đậm
																		</span>
																	</a>
																	<a
																		id='cke_26'
																		className={sx(
																			'cke_button',
																			'cke_button__italic',
																			'',
																			'cke_button_off'
																		)}
																		href="javascript:void('Nghiêng')"
																		title='Nghiêng'
																		tabIndex={-1}
																		hidefocus='true'
																		role='button'
																		aria-labelledby='cke_26_label'
																		aria-haspopup='false'
																		onkeydown='return CKEDITOR.tools.callFunction(16,event);'
																		onfocus='return CKEDITOR.tools.callFunction(17,event);'
																		onclick='CKEDITOR.tools.callFunction(18,this);return false;'>
																		<span
																			className={sx('cke_button_icon', 'cke_button__italic_icon')}
																			style={{
																				backgroundImage:
																					'url(https://static.careerbuilder.vn/ckeditor445/plugins/icons.png?t=E8PB)',
																				backgroundPosition: '0 -48px',
																				backgroundSize: 'auto'
																			}}>
																			&nbsp;
																		</span>
																		<span
																			id='cke_26_label'
																			className={sx('cke_button_label', 'cke_button__italic_label')}
																			aria-hidden='false'>
																			Nghiêng
																		</span>
																	</a>
																</span>
																<span className={sx('cke_toolbar_end')} />
															</span>
															<span
																id='cke_27'
																className={sx('cke_toolbar')}
																aria-labelledby='cke_27_label'
																role='toolbar'>
																<span id='cke_27_label' className={sx('cke_voice_label')}>
																	Đoạn
																</span>
																<span className={sx('cke_toolbar_start')} />
																<span className={sx('cke_toolgroup')} role='presentation'>
																	<a
																		id='cke_28'
																		className={sx(
																			'cke_button',
																			'cke_button__numberedlist',
																			'',
																			'cke_button_off'
																		)}
																		href="javascript:void('Chèn/Xoá Danh sách có thứ tự')"
																		title='Chèn/Xoá Danh sách có thứ tự'
																		tabIndex={-1}
																		hidefocus='true'
																		role='button'
																		aria-labelledby='cke_28_label'
																		aria-haspopup='false'
																		onkeydown='return CKEDITOR.tools.callFunction(19,event);'
																		onfocus='return CKEDITOR.tools.callFunction(20,event);'
																		onclick='CKEDITOR.tools.callFunction(21,this);return false;'>
																		<span
																			className={sx(
																				'cke_button_icon',
																				'cke_button__numberedlist_icon'
																			)}
																			style={{
																				backgroundImage:
																					'url(https://static.careerbuilder.vn/ckeditor445/plugins/icons.png?t=E8PB)',
																				backgroundPosition: '0 -576px',
																				backgroundSize: 'auto'
																			}}>
																			&nbsp;
																		</span>
																		<span
																			id='cke_28_label'
																			className={sx(
																				'cke_button_label',
																				'cke_button__numberedlist_label'
																			)}
																			aria-hidden='false'>
																			Chèn/Xoá Danh sách có thứ tự
																		</span>
																	</a>
																	<a
																		id='cke_29'
																		className={sx(
																			'cke_button',
																			'cke_button__bulletedlist',
																			'',
																			'cke_button_off'
																		)}
																		href="javascript:void('Chèn/Xoá Danh sách không thứ tự')"
																		title='Chèn/Xoá Danh sách không thứ tự'
																		tabIndex={-1}
																		hidefocus='true'
																		role='button'
																		aria-labelledby='cke_29_label'
																		aria-haspopup='false'
																		onkeydown='return CKEDITOR.tools.callFunction(22,event);'
																		onfocus='return CKEDITOR.tools.callFunction(23,event);'
																		onclick='CKEDITOR.tools.callFunction(24,this);return false;'>
																		<span
																			className={sx(
																				'cke_button_icon',
																				'cke_button__bulletedlist_icon'
																			)}
																			style={{
																				backgroundImage:
																					'url(https://static.careerbuilder.vn/ckeditor445/plugins/icons.png?t=E8PB)',
																				backgroundPosition: '0 -528px',
																				backgroundSize: 'auto'
																			}}>
																			&nbsp;
																		</span>
																		<span
																			id='cke_29_label'
																			className={sx(
																				'cke_button_label',
																				'cke_button__bulletedlist_label'
																			)}
																			aria-hidden='false'>
																			Chèn/Xoá Danh sách không thứ tự
																		</span>
																	</a>
																</span>
																<span className={sx('cke_toolbar_end')} />
															</span>
														</span>
													</span>
													<div
														id='cke_2_contents'
														className={sx('cke_contents', 'cke_reset')}
														role='presentation'
														style={{ height: 200 }}>
														<iframe
															src=''
															frameBorder={0}
															className={sx('cke_wysiwyg_frame', 'cke_reset')}
															style={{ width: 1300, height: '100%' }}
															title='Bộ soạn thảo văn bản có định dạng, job_req'
															tabIndex={0}
															allowTransparency='true'
														/>
													</div>
												</div>
											</div>
											<span className={sx('form-error')} />
											<div className={sx('note')}>
												<p>Nhỏ hơn 10 000 kí tự</p>
												<div className={sx('note-right')} style={{ display: 'none' }}>
													<p>
														Hệ thống có sẵn file mô tả cho vị trí <ins> </ins>
													</p>
													<a href='javascript:void(0);' onclick='suggest(2);'>
														Sử dụng
													</a>
												</div>
											</div>
										</div>
										<input type='hidden' name='job_desc_tmp' id='job_desc_tmp' defaultValue='' />
										<input type='hidden' name='job_req_tmp' id='job_req_tmp' defaultValue='' />
										<div className={cx('row')}>
											<div className={cx('col-lg-6')}>
												<label htmlFor=''>
													Mức lương <font style={{ color: 'red' }}>*</font>
												</label>
												<div className={sx('form-salary', 'd-flex', 'align-center')}>
													<div className={sx('form-group', 'form-select')}>
														<select name='job_salaryunit' id='job_salaryunit'>
															<option value='vnd'>VNĐ</option>
															<option value='usd'>USD</option>
														</select>
													</div>
													<div className={sx('form-group', 'form-text')}>
														<input
															type='text'
															name='salary_from'
															id='salary_from'
															maxLength={12}
															defaultValue=''
															onblur='checkAlertSalary();'
															placeholder='Tối Thiểu *'
														/>
													</div>
													<div className={sx('form-group', 'form-text')}>
														<input
															type='text'
															name='salary_to'
															id='salary_to'
															maxLength={12}
															defaultValue=''
															onblur='checkAlertSalary();'
															placeholder='Tối Đa *'
														/>
													</div>
													<span
														className={sx('form-error')}
														id='error_salary'
														style={{ width: '100%', maxWidth: 'none', flex: 1 }}
													/>
												</div>
											</div>
											<div className={cx('col-lg-6', 'd-flex', 'align-center', 'salaryOnPostJob')}>
												<div className={sx('form-group', 'form-checkbox', 'mt-5')}>
													<input
														type='checkbox'
														id='0-2'
														name='JOB_ISSECURITY'
														defaultValue={0}
														defaultChecked='checked'
													/>
													<label htmlFor='0-2'>
														<span>Hiển thị trên tin tuyển dụng để thu hút ứng viên hơn</span>
													</label>
												</div>
												<div className={sx('noti')}>
													<Tooltip
														title={
															<div className={sx('toolip')}>
																<p className={sx('width_62', 'fl_left')}>
																	<b>Lưu ý:</b>
																</p>
																<br />- 72% ứng viên chia sẻ rằng thông tin lương ảnh hưởng đến quyết
																định ứng tuyển của họ.
																<br />- Bạn có thể quyết định “hiển thị thông tin lương” để thu hút thêm
																nhiều hồ sơ ứng tuyển vào vị trí tuyển dụng.
																<p style={{ color: 'white', fontWeight: 'bold' }}>
																	- Bạn nên nhập cả hai mức lương tối thiểu và tối đa cho vị trí cần
																	đăng tuyển.
																</p>
															</div>
														}>
														<em className={cx('material-icons')}>info</em>
													</Tooltip>
												</div>
											</div>
										</div>
										<div className={sx('salary-suggest')}>
											<div className={sx('box-title')}>
												<p> Mức lương đề xuất của công việc</p>
												<a>Xem Thêm</a>
											</div>
											<div className={sx('box-suggest')} style={{ display: 'none' }}></div>
										</div>
										<div className={sx('formality')}>
											<div className={sx('form-group')}>
												<p className={sx('title-label')}>
													Hình thức <font style={{ color: 'red' }}>*</font>
												</p>
											</div>
											<div className={cx('row')}>
												<div className={cx('col-sm-6', 'col-lg-3')}>
													<div className={sx('form-group', 'form-checkbox')}>
														<input
															type='checkbox'
															className={sx('require-one-job-type', 'input_margin')}
															id='job_type1'
															name='job_type1'
															defaultValue={1}
														/>
														<label htmlFor='job_type1'>Nhân viên chính thức</label>
													</div>
													<span className={sx('form-error')} id='last_jobtype' />
												</div>
												<div className={cx('col-sm-6', 'col-lg-3')}>
													<div className={sx('form-group', 'form-checkbox')}>
														<input
															type='checkbox'
															className={sx('require-one-job-type', 'input_margin')}
															id='job_type2'
															name='job_type2'
															defaultValue={1}
														/>
														<label htmlFor='job_type2'>Bán thời gian</label>
													</div>
												</div>
												<div className={cx('col-sm-6', 'col-lg-3')}>
													<div className={sx('form-group', 'form-checkbox')}>
														<input
															type='checkbox'
															className={sx('require-one-job-type', 'input_margin')}
															id='job_type3'
															name='job_type3'
															defaultValue={1}
														/>
														<label htmlFor='job_type3'>Thời vụ - Nghề tự do </label>
													</div>
												</div>
												<div className={cx('col-sm-6', 'col-lg-3')}>
													<div className={sx('form-group', 'form-checkbox')}>
														<input
															type='checkbox'
															className={sx('require-one-job-type', 'input_margin')}
															id='job_type4'
															name='job_type4'
															defaultValue={1}
														/>
														<label htmlFor='job_type4'>Thực tập</label>
													</div>
												</div>
											</div>
										</div>
										<div className={cx('row')}>
											<div className={cx('col-lg-3')}>
												<div className={sx('form-group', 'form-date')}>
													<label>
														Hạn nhận hồ sơ <font style={{ color: 'red' }}>*</font>
													</label>
													<input
														type='text'
														name='JOB_LASTDATE'
														id='JOB_LASTDATE'
														className={sx('dates_cus_select_postjob', 'required')}
														defaultValue=''
														readOnly=''
													/>
													<div className={sx('icon')}>
														<em className={cx('material-icons')}>event</em>
													</div>
													<span className={sx('form-error', 'error_job_lastdate')} />
												</div>
											</div>
										</div>
									</div>
									<h2 className={sx('title-application')}>Phúc lợi</h2>
									<div className={sx('checkbox-wrap')}>
										<div className={cx('row')}>
											<div className={cx('col-sm-6', 'col-lg-3')}>
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
											<div className={cx('col-sm-6', 'col-lg-3')}>
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
											<div className={cx('col-sm-6', 'col-lg-3')}>
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
											<div className={cx('col-sm-6', 'col-lg-3')}>
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
											<div className={cx('col-sm-6', 'col-lg-3')}>
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
											<div className={cx('col-sm-6', 'col-lg-3')}>
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
											<div className={cx('col-sm-6', 'col-lg-3')}>
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
											<div className={cx('col-sm-6', 'col-lg-3')}>
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
														<em className={cx('fa', 'fa-money')} />
														Phụ cấp
													</label>
												</div>
											</div>
											<div className={cx('col-sm-6', 'col-lg-3')}>
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
											<div className={cx('col-sm-6', 'col-lg-3')}>
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
											<div className={cx('col-sm-6', 'col-lg-3')}>
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
											<div className={cx('col-sm-6', 'col-lg-3')}>
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
											<div className={cx('col-sm-6', 'col-lg-3')}>
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
											<div className={cx('col-sm-6', 'col-lg-3')}>
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
											<div className={cx('col-sm-6', 'col-lg-3')}>
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
									<h2 className={sx('title-application')}>Yêu cầu chung</h2>
									<div className={sx('form-wrap')}>
										<div className={cx('row')}>
											<div className={cx('col-lg-6')}>
												<div className={sx('form-group')}>
													<p className={sx('title-label')}>Giới tính</p>
												</div>
												<div className={sx('d-flex', 'gender-wrap')}>
													<div className={sx('form-group', 'form-radio')}>
														<input
															type='radio'
															id='rnamnu'
															name='JOB_GENDER'
															defaultValue={0}
															defaultChecked='checked'
														/>
														<label htmlFor='rnamnu'>Nam/Nữ</label>
													</div>
													<div className={sx('form-group', 'form-radio')}>
														<input type='radio' id='rnam' name='JOB_GENDER' defaultValue={1} />
														<label htmlFor='rnam'>Nam</label>
													</div>
													<div className={sx('form-group', 'form-radio')}>
														<input type='radio' id='rnu' name='JOB_GENDER' defaultValue={2} />
														<label htmlFor='rnu'>Nữ</label>
													</div>
												</div>
											</div>
										</div>
										<div className={cx('row')}>
											<div className={cx('col-lg-6')}>
												<div className={sx('form-group')}>
													<p className={sx('title-label')}>Tuổi</p>
												</div>
												<div className={sx('d-flex', 'form-age', 'align-center')}>
													<div className={sx('form-group', 'form-text')}>
														<label>Từ</label>
														<input
															type='text'
															maxLength={2}
															name='JOB_FROMAGE'
															id='JOB_FROMAGE'
															onkeyup='change_age(this);'
															onblur='chckage();'
														/>
													</div>
													<div className={sx('form-group', 'form-text')}>
														<label>Đến</label>
														<input
															type='text'
															maxLength={2}
															name='JOB_TOAGE'
															id='JOB_TOAGE'
															onkeyup='change_age(this);'
															onblur='chckage();'
														/>
													</div>
												</div>
											</div>
										</div>
										<div className={cx('row')}>
											<div className={cx('col-lg-6')}>
												<div className={sx('form-group', 'form-select')}>
													<label>
														Kinh nghiệm <font style={{ color: 'red' }}>*</font>
													</label>
													<select
														className={sx('')}
														name='JOB_ISEXPERIENCE'
														id='JOB_ISEXPERIENCE'
														onchange='loadExperience(this.value);'>
														<option value=''>Chọn Kinh nghiệm</option>
														<option value={2}>Không yêu cầu kinh nghiệm</option>
														<option value={1}>Có kinh nghiệm</option>
														<option value={0}>Chưa có kinh nghiệm</option>
													</select>
													<span className={sx('form-error')} />
												</div>
											</div>
											<div className={cx('col-lg-6')} id='JOB_EXPERIENCE' style={{ display: 'none' }}>
												<div className={sx('form-group')}>
													<p className={sx('title-label')}>năm</p>
												</div>
												<div className={sx('d-flex', 'form-age', 'align-center')}>
													<div className={sx('form-group', 'form-text')}>
														<label>Từ</label>
														<input
															name='JOB_FROMEXPERIENCE'
															id='JOB_FROMEXPERIENCE'
															onkeyup='change_number(this);'
															onblur='chcknumber();'
														/>
													</div>
													<div className={sx('form-group', 'form-text')}>
														<label>Đến</label>
														<input
															name='JOB_TOEXPERIENCE'
															id='JOB_TOEXPERIENCE'
															onkeyup='change_number(this);'
															onblur='chcknumber();'
														/>
													</div>
												</div>
											</div>
										</div>
										<div className={cx('row')}>
											<div className={cx('col-lg-6')}>
												<div className={sx('form-group', 'form-select')}>
													<label>
														Cấp bậc <font style={{ color: 'red' }}>*</font>
													</label>
													<select name='LEVEL_ID' id='LEVEL_ID'>
														<option value=''>Chọn Cấp bậc</option>
														<option value={1}>Sinh viên/ Thực tập sinh</option>
														<option value={2}>Mới tốt nghiệp</option>
														<option value={3}>Nhân viên</option>
														<option value={4}>Trưởng nhóm / Giám sát</option>
														<option value={5}>Quản lý</option>
														<option value={6}>Phó Giám đốc</option>
														<option value={7}>Giám đốc </option>
														<option value={8}>Tổng giám đốc</option>
														<option value={9}>Chủ tịch / Phó Chủ tịch</option>
													</select>
													<span className={sx('form-error')} />
												</div>
											</div>
										</div>
										<div className={cx('row')}>
											<div className={cx('col-lg-6')}>
												<div className={sx('form-group', 'form-select')}>
													<label>Bằng cấp</label>
													<select name='DEGREE_ID' id='DEGREE_ID'>
														<option value={0}>Không yêu cầu bằng cấp</option>
														<option value={1}>Trung học</option>
														<option value={2}>Trung cấp</option>
														<option value={3}>Cao đẳng</option>
														<option value={4}>Đại học</option>
														<option value={5}>Sau đại học</option>
														<option value={6}>Khác</option>
													</select>
												</div>
											</div>
										</div>
										<div className={cx('row')}>
											<div className={cx('col-lg-8')}>
												<div className={sx('form-group')}>
													<p className={sx('title-label')}>Ngôn Ngữ Trình Bày Hồ Sơ</p>
												</div>
												<div className={sx('list-profile-requirement')} id='div_lang_req'>
													<div className={sx('checkbox-group')}>
														<div className={sx('form-group', 'form-checkbox')}>
															<input
																type='checkbox'
																id='language_require_1'
																name='LANGUAGE_REQUIRE[]'
																defaultValue={1}
																className={sx('chk_lang_req')}
															/>
															<label htmlFor='language_require_1'>Tiếng Anh</label>
														</div>
														<div
															className={sx('form-group', 'form-checkbox')}
															id='lang_priority_1'
															style={{ display: 'none' }}>
															<input
																type='checkbox'
																id='language_priority_1'
																name='LANGUAGE_PRIORITY[]'
																defaultValue={1}
																defaultChecked='checked'
																className={sx('chk_lang_pri', 'unique')}
															/>
															<label htmlFor='language_priority_1'>Ưu tiên</label>
														</div>
													</div>
													<div className={sx('checkbox-group')}>
														<div className={sx('form-group', 'form-checkbox')}>
															<input
																type='checkbox'
																id='language_require_2'
																name='LANGUAGE_REQUIRE[]'
																defaultValue={2}
																className={sx('chk_lang_req')}
															/>
															<label htmlFor='language_require_2'>Tiếng Việt</label>
														</div>
														<div
															className={sx('form-group', 'form-checkbox')}
															id='lang_priority_2'
															style={{ display: 'none' }}>
															<input
																type='checkbox'
																id='language_priority_2'
																name='LANGUAGE_PRIORITY[]'
																defaultValue={2}
																defaultChecked='checked'
																className={sx('chk_lang_pri', 'unique')}
															/>
															<label htmlFor='language_priority_2'>Ưu tiên</label>
														</div>
													</div>
													<div className={sx('checkbox-group')}>
														<div className={sx('form-group', 'form-checkbox')}>
															<input
																type='checkbox'
																id='language_require_3'
																name='LANGUAGE_REQUIRE[]'
																defaultValue={3}
																className={sx('chk_lang_req')}
															/>
															<label htmlFor='language_require_3'>Tiếng Pháp</label>
														</div>
														<div
															className={sx('form-group', 'form-checkbox')}
															id='lang_priority_3'
															style={{ display: 'none' }}>
															<input
																type='checkbox'
																id='language_priority_3'
																name='LANGUAGE_PRIORITY[]'
																defaultValue={3}
																defaultChecked='checked'
																className={sx('chk_lang_pri', 'unique')}
															/>
															<label htmlFor='language_priority_3'>Ưu tiên</label>
														</div>
													</div>
													<div className={sx('checkbox-group')}>
														<div className={sx('form-group', 'form-checkbox')}>
															<input
																type='checkbox'
																id='language_require_4'
																name='LANGUAGE_REQUIRE[]'
																defaultValue={4}
																className={sx('chk_lang_req')}
															/>
															<label htmlFor='language_require_4'>Tiếng Trung</label>
														</div>
														<div
															className={sx('form-group', 'form-checkbox')}
															id='lang_priority_4'
															style={{ display: 'none' }}>
															<input
																type='checkbox'
																id='language_priority_4'
																name='LANGUAGE_PRIORITY[]'
																defaultValue={4}
																defaultChecked='checked'
																className={sx('chk_lang_pri', 'unique')}
															/>
															<label htmlFor='language_priority_4'>Ưu tiên</label>
														</div>
													</div>
													<div className={sx('checkbox-group')}>
														<div className={sx('form-group', 'form-checkbox')}>
															<input
																type='checkbox'
																id='language_require_5'
																name='LANGUAGE_REQUIRE[]'
																defaultValue={5}
																className={sx('chk_lang_req')}
															/>
															<label htmlFor='language_require_5'>Tiếng Nhật</label>
														</div>
														<div
															className={sx('form-group', 'form-checkbox')}
															id='lang_priority_5'
															style={{ display: 'none' }}>
															<input
																type='checkbox'
																id='language_priority_5'
																name='LANGUAGE_PRIORITY[]'
																defaultValue={5}
																defaultChecked='checked'
																className={sx('chk_lang_pri', 'unique')}
															/>
															<label htmlFor='language_priority_5'>Ưu tiên</label>
														</div>
													</div>
													<div className={sx('checkbox-group')}>
														<div className={sx('form-group', 'form-checkbox')}>
															<input
																type='checkbox'
																id='language_require_6'
																name='LANGUAGE_REQUIRE[]'
																defaultValue={6}
																className={sx('chk_lang_req')}
															/>
															<label htmlFor='language_require_6'>Tiếng Hàn Quốc</label>
														</div>
														<div
															className={sx('form-group', 'form-checkbox')}
															id='lang_priority_6'
															style={{ display: 'none' }}>
															<input
																type='checkbox'
																id='language_priority_6'
																name='LANGUAGE_PRIORITY[]'
																defaultValue={6}
																defaultChecked='checked'
																className={sx('chk_lang_pri', 'unique')}
															/>
															<label htmlFor='language_priority_6'>Ưu tiên</label>
														</div>
													</div>
												</div>
											</div>
										</div>
									</div>
									<input type='hidden' id='strPhoto' name='strPhoto' defaultValue='' />
									<input type='hidden' id='strPhotoDelete' name='strPhotoDelete' defaultValue='' />
									<input type='hidden' id='checkYouTube' name='checkYouTube' defaultValue='true' />
									<h2 className={sx('title-application')}>
										Video và hình ảnh{' '}
										<span className={sx('txt_required', 'mar_left10')}>(Không bắt buộc)</span>{' '}
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
												</a>
												và
												<a
													className={sx('line_bot', 'fancybox')}
													href='https://static.careerbuilder.vn/themes/kiemviecv32/employersnews/images/graphics/ex2.gif'>
													trang giới thiệu về công ty
												</a>
											</div>
										</div>
										<div className={cx('row')}>
											<div className={cx('col-lg-6')}>
												<div className={sx('form-group', 'form-text')}>
													<input
														type='text'
														placeholder='Link video youtube'
														id='strVideo'
														name='strVideo'
														onblur='checkYoutubeValid(0);'
														defaultValue='https://www.youtube.com/watch?v=ona6XcLmgcs&list=PLiyVagO7GfBE1j4vjp-QLc1KHR1LPIl3G&index=2'
													/>
												</div>
												<span className={sx('error', 'error_strVideo')}> </span>
											</div>
											<div className={cx('col-lg-6')}>
												<div className={sx('noti', 'toollips')}>
													<p></p>
													<Tooltip title='Ví dụ: https://www.youtube.com/watch?v=egYcmuk3dso'>
														<em className={cx('material-icons')}>info </em>
													</Tooltip>
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
													defaultChecked='checked'
												/>
												<label htmlFor='isdisplay'>
													<strong>Hiển thị video và ảnh cho tuyển dụng này</strong>
												</label>
												<span id='loading' className={sx('img_loading')} style={{ display: 'none' }}>
													<img src='https://static.careerbuilder.vn/themes/kiemviecv32/css/images/graphics/loading.gif' />
												</span>
											</div>
										</div>
									</div>
									<h2 className={sx('title-application')}>
										Thông tin khác{' '}
										<span>
											<span className={sx('txt_required', 'mar_left10')}>(Không bắt buộc)</span>
										</span>
									</h2>
									<div className={sx('form-wrap', 'other-information-wrap')}>
										<div className={cx('row')}>
											<div className={cx('col-lg-7')}>
												<p>
													Giới thiệu về môi trường làm việc, thời gian thử việc, cơ hội huấn luyện, đồng
													nghiệp,....
												</p>
												<a className={sx('btnlink', 'btn-show-additional')} href='javascript:;'>
													+ Bổ sung
												</a>
												<div className={sx('form-wrap', 'other-additional-wrap')}>
													<div className={sx('form-group', 'form-text', 'mt-20')}>
														<label htmlFor=''>Thử việc</label>
														<input
															type='text'
															id='JOB_PROBATIONTIME'
															name='JOB_PROBATIONTIME'
															maxLength={70}
															defaultValue=''
															placeholder='Nhập nội dung'
														/>
														<div className={sx('note')}>
															<p>Tối đa 70 kí tự</p>
														</div>
													</div>
													<div className={sx('form-group', 'form-text', 'mt-20')}>
														<label htmlFor=''>Thời gian làm việc</label>
														<input
															type='text'
															id='JOB_WORKTIME'
															name='JOB_WORKTIME'
															maxLength={70}
															defaultValue=''
															placeholder='Nhập nội dung'
														/>
														<div className={sx('note')}>
															<p>Tối đa 70 kí tự</p>
														</div>
													</div>
													<div className={sx('form-group', 'form-textarea')}>
														<label htmlFor=''>Cơ hội huấn luyện</label>
														<textarea
															id='JOB_TRAINOPPORTUNITY'
															name='JOB_TRAINOPPORTUNITY'
															placeholder='Nhập nội dung'
															defaultValue={''}
														/>
														<div className={sx('note')}>
															<p>Tối đa 300 kí tự</p>
														</div>
													</div>
													<div className={sx('form-group', 'form-textarea')}>
														<label htmlFor=''>Đồng nghiệp</label>
														<textarea
															id='JOB_COLLEAGUE'
															name='JOB_COLLEAGUE'
															placeholder='Nhập nội dung'
															defaultValue={''}
														/>
														<div className={sx('note')}>
															<p>Tối đa 300 kí tự</p>
														</div>
													</div>
													<div className={sx('form-group', 'form-textarea')}>
														<label htmlFor=''>Phúc lợi</label>
														<textarea
															id='JOB_BENEFIT'
															name='JOB_BENEFIT'
															placeholder='Nhập nội dung'
															defaultValue={''}
														/>
														<div className={sx('note')}>
															<p>Tối đa 300 kí tự</p>
														</div>
													</div>
													<div className={sx('form-group', 'form-textarea')}>
														<label htmlFor=''>Phụ cấp khác</label>
														<textarea
															name='JOB_ADDSALARY'
															id='JOB_ADDSALARY'
															placeholder='Nhập nội dung'
															defaultValue={''}
														/>
														<div className={sx('note')}>
															<p>Tối đa 300 kí tự</p>
														</div>
													</div>
													<div className={sx('form-group', 'form-textarea')}>
														<label htmlFor=''>Ngày nghỉ</label>
														<textarea
															id='JOB_ANNUALLEAVE'
															name='JOB_ANNUALLEAVE'
															placeholder='Nhập nội dung'
															defaultValue={''}
														/>
														<div className={sx('note')}>
															<p>Tối đa 300 kí tự</p>
														</div>
													</div>
												</div>
												<div className={sx('form-group', 'form-qs', 'mt-20')}>
													<label htmlFor=''>
														Tên resume tag
														<Tooltip
															title='	-Là các cụm từ xuất hiện trong hồ sơ ứng viên phù hợp cho nhu cầu tuyển
																dụng của quý công ty.
																
																- Dựa vào resume tag name hệ thống sẽ tìm và gợi ý những hồ sơ ứng viên
																phù hợp với tag name mà quý công ty đã tạo. 
																- Lựa chọn các tag name phù hợp với vị trí tuyển dụng của quý công ty.
																- Bạn được phép tạo tối đa 10 tag name cho một vị trí tuyển dụng.'>
															<span className={sx('btnlink')}>(Resume tag name là gì ? )</span>
														</Tooltip>
													</label>
												</div>
												<div className={sx('form-group', 'form-text', 'form-submit')}>
													<input
														type='text'
														className={sx('auto_suggest')}
														id='synonym'
														name='synonym'
														autoComplete='off'
														onkeydown='if (event.keyCode == 13) addWord();'
													/>
													<a
														className={sx('btn-submit-add')}
														href='javascript:void(0)'
														onclick='return addWord()'>
														Thêm Tag
													</a>
												</div>
												<div className={sx('list-tag')} id='list-tag'></div>
												<div className={sx('form-group', 'form-checkbox')}>
													<input
														type='checkbox'
														defaultValue={1}
														name='JOB_WFH'
														id='JOB_WFH'
														className={sx('input_margin')}
													/>
													<label htmlFor='JOB_WFH'>Work from home</label>
												</div>
												<div className={sx('form-group', 'mt-0', 'form-note-workfromhome')}>
													Tick chọn nếu vị trí tuyển dụng này cho phép ứng viên có thể chọn chế độ làm việc
													tại nhà trong thời điểm hiện tại (Work from home) mà không nhất thiết phải có mặt
													tại văn phòng công ty. Hệ thống sẽ phân loại và đánh dấu đăng tuyển này vào danh
													mục tìm kiếm loại công việc là “Work from Home”.
												</div>
											</div>
										</div>
									</div>
									<div className={sx('form-group', 'form-submit', 'form-continue')}>
										<button
											className={sx('btn-gradient', 'btn-submit')}
											id='btn_submit_form_postjobs'
											type='button'
											onclick='is_Filter_Form();'>
											Tiếp tục
										</button>
										<button
											className={sx('btn-gradient', 'btn-post')}
											id='btn_submit_form_postjobs_finish'
											type='button'
											onclick='is_Filter_Form3();'>
											Lưu
										</button>
									</div>
								</div>
							</div>
							<div className={sx('tabslet-content')} id='tab-2'>
								<div className={sx('main-application-information')}>
									<h2 className={sx('title-application')}>Thông tin liên hệ</h2>
									<div className={sx('form-wrap')}>
										<div className={cx('row')}>
											<div className={cx('col-lg-7')}>
												<div className={sx('form-group', 'form-checkbox')}>
													<input type='checkbox' name='checkprofile' id='checkprofile' defaultValue={1} />
													<label htmlFor='checkprofile'>
														Ẩn thông tin công ty: tên công ty và giới thiệu về công ty
													</label>
													<a
														className={sx('btnlink', 'preview-company')}
														href='javascript:void(0)'
														onclick='popupProfileAjax(); return false;'>
														(Xem lại thông tin công ty đã tạo)
													</a>
												</div>
											</div>
										</div>
										<div className={cx('row')}>
											<div className={cx('col-lg-7')}>
												<div className={sx('form-group', 'form-checkbox')}>
													<input
														type='checkbox'
														className={sx('input_margin')}
														onclick='change_security(this);'
														name='hide_contact'
														id='hide_contact'
														defaultValue={1}
													/>
													<label htmlFor='hide_contact'>
														Ẩn thông tin liên hệ: tên công ty, địa chỉ, người liên hệ
													</label>
												</div>
											</div>
										</div>
										<div className={cx('row')}>
											<div className={cx('col-lg-7')}>
												<div className={sx('form-group', 'form-text')}>
													<input
														type='text'
														name='JOB_CONTACT_COMPANY'
														id='JOB_CONTACT_COMPANY'
														defaultValue='Công ty it minh nguyễn'
														placeholder='Tên công ty *'
													/>
												</div>
												<div id='security_client' style={{ display: 'none' }}>
													<div className={sx('form-group', 'form-checkbox')}>
														<input
															type='radio'
															name='Hide_Job'
															id='JOB_CONTACT_SECRECY'
															defaultChecked='checked'
															defaultValue={0}
														/>
														<label htmlFor='JOB_CONTACT_SECRECY'>Bảo mật</label>
													</div>
													<div className={sx('form-group', 'form-checkbox')}>
														<input
															type='radio'
															className={sx('input_margin')}
															name='Hide_Job'
															defaultValue={1}
															id='JOB_CONTACT_CLIENT'
														/>
														<label htmlFor='JOB_CONTACT_CLIENT'>CareerBuilder's client</label>
													</div>
												</div>
												<input
													name='company_profile'
													id='company_profile'
													type='hidden'
													defaultValue='35A94C80'
												/>
											</div>
										</div>
										<div className={cx('row')}>
											<div className={cx('col-lg-7')}>
												<div className={sx('form-group', 'form-text')}>
													<input
														type='text'
														id='JOB_CONTACT_ADDRESS'
														name='JOB_CONTACT_ADDRESS'
														defaultValue='phố bái thị trấn nho quan ninh bình'
														placeholder='Địa chỉ *'
													/>
												</div>
											</div>
										</div>
										<div className={cx('row')}>
											<div className={cx('col-lg-7')}>
												<div className={sx('form-group', 'form-text')}>
													<input
														type='text'
														name='JOB_CONTACT_NAME'
														id='JOB_CONTACT_NAME'
														defaultValue='minh nguyễn 123'
														placeholder='Người liên hệ *'
													/>
												</div>
											</div>
										</div>
										<div className={cx('row')}>
											<div className={cx('col-lg-7')}>
												<div className={sx('form-group', 'form-text')}>
													<input
														type='text'
														className={sx('width_295')}
														name='JOB_CONTACT_EMAIL'
														id='JOB_CONTACT_EMAIL'
														maxLength={150}
														defaultValue='lop7cttnq@gmail.com'
														placeholder='Email 1 *'
													/>
												</div>
											</div>
											<div className={cx('col-lg-5', 'd-flex', 'align-center')}>
												<div className={sx('noti')}>
													<em className={cx('material-icons')}>info</em>
													<div className={sx('toolip')}>
														<p>(Email sẽ được bảo mật)</p>
													</div>
												</div>
											</div>
										</div>
										<div className={cx('row')}>
											<div className={cx('col-lg-7')}>
												<div className={sx('form-group', 'form-text')}>
													<input
														type='text'
														name='JOB_CONTACT_EMAIL2'
														id='JOB_CONTACT_EMAIL2'
														maxLength={150}
														defaultValue=''
														placeholder='Email 2'
													/>
												</div>
											</div>
											<div className={cx('col-lg-5', 'd-flex', 'align-center')}>
												<div className={sx('noti')}>
													<em className={cx('material-icons')}>info</em>
													<div className={sx('toolip')}>
														<p>(Email sẽ được bảo mật)</p>
													</div>
												</div>
											</div>
										</div>
										<div className={cx('row')}>
											<div className={cx('col-lg-7')}>
												<div className={sx('form-group', 'form-select')}>
													<select name='receivemail'>
														<option value={0}>Tiếng Việt</option>
														<option value={1}>Tiếng Anh</option>
														<option value={2}>Không nhận email thông báo</option>
													</select>
												</div>
											</div>
											<div className={cx('col-lg-5', 'd-flex', 'align-center')}>
												<div className={sx('noti')}>
													<em className={cx('material-icons')}>info</em>
													<div className={sx('toolip')}>
														<p>Nhận email thông báo khi có ứng viên nộp đơn trực tuyến.</p>
														<p>
															Khi nhấn chọn chức năng này, Quý công ty sẽ nhận được email thông báo từ hệ
															thống mỗi khi có ứng viên nộp đơn trực tuyến vào các vị trí công việc tương
															ứng mà Quý công ty đang đăng tuyển trên hệ thống.
														</p>
													</div>
												</div>
											</div>
										</div>
										<div className={cx('row')}>
											<div className={cx('col-lg-7')}>
												<div className={sx('form-group', 'form-checkbox')}>
													<input
														type='checkbox'
														name='JOB_RECEIVEEMAIL_RESUME'
														defaultChecked='checked'
														defaultValue={1}
														id='records1'
													/>
													<label htmlFor='records1'>Nhận hồ sơ gợi ý phù hợp với vị trí tuyển dụng</label>
												</div>
												<div className={sx('form-group', 'form-checkbox')}>
													<input
														type='checkbox'
														className={sx('input_margin')}
														name='JOB_APPLYONLINE'
														id='JOB_APPLYONLINE'
														defaultValue={1}
													/>
													<label htmlFor='JOB_APPLYONLINE'>
														Thiết lập thư trả lời tự động khi có ứng viên nộp đơn ứng tuyển
													</label>
													<div className={sx('noti')}>
														<em className={cx('material-icons')}>info</em>
														<div className={sx('toolip')}>
															<p>
																Hệ thống sẽ tự động gửi Thư tự động trả lời cho các ứng viên nộp hồ sơ
																trực tuyến. Thư này sẽ không đính kèm trong quảng cáo đăng tuyển của quý
																khách.
															</p>
														</div>
													</div>
												</div>
											</div>
										</div>
										<div className={sx('form-standard')} id='MailReply'>
											<div className={cx('row')}>
												<div className={cx('col-lg-7')}>
													<input name='job_id' type='hidden' defaultValue='35A4E900' />
													<input name='savetype' type='hidden' defaultValue={1} />
													<input name='emp_id' type='hidden' defaultValue={287616} />
													<div className={sx('form-wrap')}>
														<div className={sx('form-group', 'form-select')}>
															<label htmlFor=''>Thư trả lời</label>
															<select name='slAutoReply' id='slAutoReply'>
																<option value={0}>Chọn</option>
															</select>
														</div>
														<div className={sx('form-group', 'form-text')}>
															<label htmlFor=''>Tiêu đề</label>
															<input
																type='text'
																placeholder='Nhập tiêu đề'
																name='reply_title'
																id='reply_title'
																defaultValue=''
															/>
															<span className={sx('error')} />
															<span className={sx('noted')}>Tối đa 70 kí tự</span>
														</div>
														<div className={sx('form-group', 'form-textarea')}>
															<label>Nội dung thư</label>
															<div className={sx('d-flex')}>
																<p>Smart Fields</p>
																<select
																	name='addfield'
																	id='addfield'
																	onchange="addSmartField('reply_content', this.value);">
																	<option value=''>Chọn</option>
																	<option value='[firstname]'>[firstname]</option>
																	<option value='[lastname]'>[lastname]</option>
																	<option value='[job-title]'>[job-title]</option>
																	<option value='[contact-name]'>[contact-name]</option>
																</select>
																<a
																	className={sx('see-sample')}
																	href='javascript:void(0);'
																	id='view_sample'>
																	Xem mẫu
																</a>
															</div>
															<textarea name='reply_content' id='reply_content' defaultValue={''} />
															<span className={sx('error')} />
															<span className={sx('noted')}>
																{' '}
																Ít nhất 30 ký tự, Nhiều nhất 3000 ký tự
															</span>
														</div>
														<div className={sx('form-group', 'form-radio')}>
															<div className={sx('group')}>
																<input
																	type='radio'
																	className={sx('input_margin')}
																	name='replyto'
																	defaultValue={1}
																	id='edit-email-1'
																/>
																<label htmlFor='edit-email-1'>Chỉ riêng vị trí tuyển dụng này</label>
															</div>
															<div className={sx('group')}>
																<input
																	type='radio'
																	className={sx('input_margin')}
																	name='replyto'
																	defaultValue={0}
																	id='edit-email-2'
																/>
																<label htmlFor='edit-email-2'>Tất cả các tuyển dụng</label>
															</div>
														</div>
													</div>
												</div>
											</div>
										</div>
										<div
											className={sx('jobs-posting-modal', 'jobs-posting-17-modal')}
											id='LetterAbout'
											style={{ display: 'none' }}>
											<div className={sx('modal-head')}>
												<p className={sx('title')}>Thư trả lời tự động mẫu</p>
											</div>
											<div className={sx('modal-body')}>
												<div className={sx('preview-reply-letter')}>
													<div className={sx('title')}>
														<p>Tiêu đề: Thanks you for applying</p>
													</div>
													<div className={sx('full-content')}>
														Dear <strong>[firstname] [lastname]</strong>,<br />
														We have received your resume submission for the <strong>
															[job-title]
														</strong>{' '}
														position. We appreciate your interest and look forward to reviewing your
														resume.
														<br />
														We will contact you within seven days if your qualifications meet the
														requirements of the position.
														<br />
														Thanks you again for applying!
														<br />
														<br />
														Best regards,
														<br />
														<strong>[contact-name]</strong>
													</div>
												</div>
												<div className={sx('form-group', 'form-submit')}>
													<button
														className={sx('btn-gradient')}
														type='button'
														name='save'
														id='btn_preview_sample'
														onclick="createMail('35A4E900');">
														Trở lại
													</button>
													<a
														className={sx('btn-cancel')}
														href='javascript:void(0);'
														data-fancybox-close=''>
														Bỏ qua
													</a>
												</div>
											</div>
										</div>
									</div>
									<div className={sx('form-group', 'form-submit', 'form-continue', 'form-back-continue')}>
										<button
											className={sx('btn-gradient', 'btn-save')}
											href='javascript:void(0);'
											onclick='is_Filter_Form2()'>
											Tiếp tục
										</button>
									</div>
								</div>
							</div>
							<div className={sx('tabslet-content')} id='tab-3'></div>
						</div>
						<input type='hidden' name='inputchange' id='inputchange' defaultValue={0} />
					</form>
				</div>
			</div>
		</section>
	);
};

export default PostJobs;
