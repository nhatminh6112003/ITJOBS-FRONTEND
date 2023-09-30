import React from 'react';
import styles from './myAttach.module.css';
import classNames from 'classnames/bind';
import FolderOutlinedIcon from '@mui/icons-material/FolderOutlined';
import InputFieldControl from '~/Core/components/common/FormControl/InputFieldControl';
import { useForm } from 'react-hook-form';
import SelectFieldControl from '~/Core/components/common/FormControl/SelectFieldControl';
import { yupResolver } from '@hookform/resolvers/yup';
import { DegreeArray } from '~/App/constants/degreeArray';
import { LevelArray } from '~/App/constants/levelEnum';
import CheckBoxFieldControl from '~/Core/components/common/FormControl/CheckBoxFieldControl';
import SelectMultipleFieldControl from '~/Core/components/common/FormControl/SelectMultipleFieldControl';
const sx = classNames.bind(styles);
const MyAttach = ({ cx }) => {
	const {
		control,
		handleSubmit,
		formState: { errors }
	} = useForm({
		// resolver: yupResolver(loginSchema)
	});

	const onCreateAttach = (data) => {
		console.log(data);
	};
	return (
		<section className={sx('cb-section')}>
			<div className={cx('container')}>
				<div className={cx('cb-title', 'cb-title-center', 'm-0')}>
					<h2 style={{ marginTop: 20 }}>Tạo Hồ Sơ Đính Kèm</h2>
				</div>
				<div className={sx('main-quick-upload-resume', 'created-now-wrap')}>
					<form onSubmit={handleSubmit(onCreateAttach)}>
						<div className={sx('quick-upload')}>
							<div className={sx('cb-title-h3')}>
								<h3>Hồ sơ</h3>
							</div>
							<div className={sx('form-show-file', '')} id='uploadFile_file'>
								<label>* Tên Hồ Sơ:</label>
								<em className={sx('material-icons')}>picture_as_pdf</em>
								<p className={sx('show-file')} />
								<a href='javascript:void(0)' className={sx('removefile')}>
									<em className={sx('material-icons')}>highlight_off </em>Xóa
								</a>
							</div>
							<div className={sx('form-choose')}>
								<div className={sx('form-group')}>
									<label>
										* Hồ Sơ Đính Kèm<span>*Hỗ trợ định dạng *.doc, *.dosx, *.pdf và không quá 5MB</span>
									</label>
								</div>
								<div className={sx('form-group')}>
									<div className={sx('list-choose')}>
										<div className={sx('choose-mycomputer')}>
											<label htmlFor='attach_file'>
												<FolderOutlinedIcon style={{ padding: 3 }} />
												Tải hồ sơ từ máy tính
											</label>
											<input
												className={sx('d-none')}
												type='file'
												id='attach_file'
												name='attach_file'
												onchange=' return ajaxOnlyFile(this);'
											/>
										</div>
									</div>
									<span className={sx('error_attach_file')} />
								</div>
							</div>
							<div className={sx('form-group', 'form-text')}>
								<input
									type='text'
									name='resume_title'
									id='resume_title'
									maxLength={400}
									className={sx('keyword')}
									autoComplete='off'
								/>
								<label>* Tiêu đề hồ sơ</label>
								<span className={sx('error_resume_title')} />
								<div className={sx('form-note')}>
									<p>Nhập vị trí hoặc chức danh. Ví dụ: Kế toán trưởng, Web designer</p>
								</div>
							</div>
							<div className={sx('form-group', 'form-note')}>
								<div className={sx('box-noti')}>
									<p></p>
									<div>
										<b>Lưu ý:</b> Theo thống kê của CareerBuilder.vn hồ sơ Tiếng Anh được nhà tuyển dụng xem
										nhiều hơn 150% so với hồ sơ Tiếng Việt
										<br />
										<span className={sx('note', '')}>
											Tất cả các bằng cấp, chứng chỉ kèm theo (nếu có) cần được gộp chung vào hồ sơ ứng tuyển
											với dung lượng không quá 5MB vì vượt quá dung lượng quy định có
											<br />
											khả năng dẫn đến việc Nhà tuyển dụng không nhận được hồ sơ ứng tuyển; và chỉ hỗ trợ các
											định dạng .doc, .dosx, *.pdf.
										</span>
									</div>
									<p />
								</div>
							</div>
						</div>
						<div className={sx('quick-upload', 'quick-upload-2', '')}>
							<div className={sx('cb-title-h3', 'd-flex', 'justify-content-sb', 'align-center', '')}>
								<h3>Thông tin cá nhân</h3>
								<div className={sx('link-edit', '')}>
									<a>
										<em className={cx('material-icons', '')}>create</em>
										<span> Chỉnh sửa</span>
									</a>
								</div>
							</div>
							<p className={sx('noted', '')}> Xin vui lòng cập nhật thông tin cá nhân để hoàn tất hồ sơ</p>
						</div>
						<div className={sx('quick-upload', 'quick-upload-2', '')}>
							<div className={sx('cb-title-h3', '')}>
								<h3>Thông tin nghề nghiệp</h3>
								<div className={sx('user-action', '')}>
									<ul>
										<li>
											<a title=' ' className={sx('action-1', '')}>
												<em className={sx('fa', 'fa-sync', '')} />
												Đồng bộ thông tin với Hồ Sơ CareerBuilder
											</a>
										</li>
									</ul>
								</div>
							</div>
							<div className={cx('row')}>
								<div className={cx('col-md-6')}>
									<div className={sx('form-group', 'form-select', '')}>
										<InputFieldControl
											label='* Số năm kinh nghiệm'
											control={control}
											name='year_experience'
											type='number'
											defaultValue={1}
										/>
										{/* <input
										type='number '
										name='yearOfExperience '
										id='year_experience '
										defaultValue={1}
										maxLength={2}
										min={1}
										max={55}
									/> */}
									</div>
								</div>
								<div className={cx('col-md-6', '')}>
									<div className={sx('form-group', 'form-select', '')}>
										<label>* Bằng cấp cao nhất</label>
										<select name='degree ' id='degree ' className={sx('required', 'width_186', '')}>
											<option value=' '>Chọn</option>
											<option value={0}>Chưa tốt nghiệp</option>
											<option value={1}>Trung học</option>
											<option value={2}>Trung cấp</option>
											<option value={3}>Cao đẳng</option>
											<option value={4}>Đại học</option>
											<option value={5}>Sau đại học</option>
											<option value={6}>Khác</option>
										</select>
										<span className={sx('error_degree', '')} />
									</div>
								</div>
								<div className={cx('col-md-12', '')}>
									<div className={sx('form-group', 'form-checkbox', 'form-no-exp', '')}>
										<input type='checkbox ' name='cboExper ' id='cboExper ' defaultValue={1} />
										<label htmlFor='cboExper '>Chưa có kinh nghiệm</label>
									</div>
								</div>
								<div className={cx('col-md-6', '')}>
									<div className={sx('form-group', 'form-select', '')}>
										<SelectFieldControl
											label='* Cấp bậc mong muốn'
											control={control}
											name='level_id'
											options={LevelArray}
										/>
									</div>
								</div>
								<div className={cx('col-md-6', '')}>
									<div className={sx('form-group', 'form-select', '')}>
										<SelectFieldControl
											label='* Cấp bậc hiện tại<'
											control={control}
											name='levelcurrent_id'
											options={DegreeArray}
										/>
									</div>
								</div>
								<div className={cx('col-md-6', '')}>
									<div className={sx('form-group', 'form-select-chosen', '')}>
										<label htmlFor=' '>* Ngành nghề mong muốn</label>
										<select
											name='INDUSTRY_ID[] '
											id='select_industry_db '
											data-placeholder='Vui lòng chọn ngành nghề '
											multiple
											className={sx('chosen-select-max-three', '')}
											title='Vui lòng chọn ngành nghề '>
											<optgroup label='Bán hàng / Tiếp thị '>
												<option value={4}>Tiếp thị / Marketing</option>
												<option value={30}>Bán lẻ / Bán sỉ</option>
												<option value={31}>Bán hàng / Kinh doanh</option>
												<option value={37}>Tiếp thị trực tuyến</option>
											</optgroup>
											<optgroup label='Chăm sóc sức khỏe '>
												<option value={7}>Dược phẩm</option>
												<option value={56}>Y tế / Chăm sóc sức khỏe</option>
											</optgroup>
											<optgroup label='Dịch vụ '>
												<option value={9}>Tư vấn</option>
												<option value={12}>Dịch vụ khách hàng</option>
												<option value={20}>Phi chính phủ / Phi lợi nhuận</option>
												<option value={24}>Luật / Pháp lý</option>
												<option value={32}>Bưu chính viễn thông</option>
												<option value={33}>Vận chuyển / Giao nhận / Kho vận</option>
												<option value={44}>Lao động phổ thông</option>
												<option value={51}>An Ninh / Bảo Vệ</option>
											</optgroup>
											<optgroup label='Giáo dục / Đào tạo '>
												<option value={13}>Giáo dục / Đào tạo</option>
												<option value={57}>Thư viện</option>
											</optgroup>
											<optgroup label='Hàng tiêu dùng '>
												<option value={10}>Hàng gia dụng / Chăm sóc cá nhân</option>
												<option value={21}>Thực phẩm &amp; Đồ uống</option>
											</optgroup>
											<optgroup label='Hành chính / Nhân sự '>
												<option value={3}>Hành chính / Thư ký</option>
												<option value={17}>Quản lý điều hành</option>
												<option value={22}>Nhân sự</option>
												<option value={38}>Biên phiên dịch</option>
											</optgroup>
											<optgroup label='Kế toán / Tài chính '>
												<option value={2}>Kế toán / Kiểm toán</option>
												<option value={19}>Ngân hàng</option>
												<option value={23}>Bảo hiểm</option>
												<option value={46}>Chứng khoán</option>
												<option value={59}>Tài chính / Đầu tư</option>
											</optgroup>
											<optgroup label='Khách sạn / Du lịch '>
												<option value={29}>Nhà hàng / Khách sạn</option>
												<option value={34}>Du lịch</option>
												<option value={60}>Hàng không</option>
											</optgroup>
											<optgroup label='Khoa học '>
												<option value={5}>Nông nghiệp</option>
												<option value={36}>Thống kê</option>
												<option value={49}>Thủy sản / Hải sản</option>
												<option value={50}>Lâm Nghiệp</option>
												<option value={52}>Chăn nuôi / Thú y</option>
												<option value={53}>Thủy lợi</option>
												<option value={54}>Trắc địa / Địa Chất</option>
												<option value={61}>Hàng hải</option>
												<option value={69}>Công nghệ sinh học</option>
												<option value={70}>Công nghệ thực phẩm / Dinh dưỡng</option>
											</optgroup>
											<optgroup label='Kỹ thuật '>
												<option value={14}>Cơ khí / Ô tô / Tự động hóa</option>
												<option value={16}>Môi trường</option>
												<option value={26}>Dầu khí</option>
												<option value={41}>Hóa học</option>
												<option value={48}>Điện / Điện tử / Điện lạnh</option>
												<option value={65}>Khoáng sản</option>
												<option value={71}>Bảo trì / Sửa chữa</option>
											</optgroup>
											<optgroup label='Máy tính / Công nghệ thông tin '>
												<option value={1}>CNTT - Phần mềm</option>
												<option value={63}>CNTT - Phần cứng / Mạng</option>
											</optgroup>
											<optgroup label='Truyền thông / Media '>
												<option value={11}>Mỹ thuật / Nghệ thuật / Thiết kế</option>
												<option value={15}>Giải trí</option>
												<option value={66}>Truyền hình / Báo chí / Biên tập</option>
												<option value={67}>Quảng cáo / Đối ngoại / Truyền Thông</option>
												<option value={68}>Tổ chức sự kiện</option>
											</optgroup>
											<optgroup label='Sản xuất '>
												<option value={18}>Xuất nhập khẩu</option>
												<option value={25}>Sản xuất / Vận hành sản xuất</option>
												<option value={35}>Đồ gỗ</option>
												<option value={39}>Dệt may / Da giày / Thời trang</option>
												<option value={42}>Quản lý chất lượng (QA/QC)</option>
												<option value={43}>Thu mua / Vật tư</option>
												<option value={58}>An toàn lao động</option>
												<option value={64}>In ấn / Xuất bản</option>
											</optgroup>
											<optgroup label='Xây dựng '>
												<option value={6}>Kiến trúc</option>
												<option value={8}>Xây dựng</option>
												<option value={28}>Bất động sản</option>
												<option value={47}>Nội ngoại thất</option>
											</optgroup>
											<optgroup label='Nhóm ngành khác '>
												<option value={27}>Ngành khác</option>
												<option value={45}>Mới tốt nghiệp / Thực tập</option>
											</optgroup>
										</select>
										<span className={sx('error_select_industry_db', '')} />
									</div>
								</div>
								<div className={sx('col-md-6', 'form-additional', 'form-salary-cus', '')}>
									<label>Mức lương mong muốn</label>
									<div className={sx('form-big', '')}>
										<div className={sx('form-group', 'form-select', '')}>
											<select name='salary_unit ' id='salary_unit '>
												<option value='ltt '>Thỏa thuận</option>
												<option value='vnd '>VNĐ</option>
												<option value='usd '>USD</option>
											</select>
										</div>
										<div className={sx('form-group', 'form-text', '')}>
											<InputFieldControl placeholder='Từ' control={control} name='salary_from' />
										</div>
										<div className={sx('form-group', 'form-text', '')}>
											<InputFieldControl placeholder='Đến' control={control} name='salary_to' />
										</div>
									</div>
								</div>
								<div className={cx('col-md-12', 'form-additional', '')}>
									<div className={sx('list-language', '')} id='list-language '>
										<div className={sx('item', 'row', 'active', '')}>
											<div className={cx('col-md-6', 'col-dt-1', 'd-flex')} style={{ display: 'flex' }}>
												<div className={sx('form-group', 'form-select', '')}>
													<label htmlFor=' '>Trình độ ngoại ngữ</label>

													<select name='rs_language[] ' className={sx('width_186', '')}>
														<option value=' '>Chọn</option>
														<option value='vn '>Việt Nam</option>
														<option value='en '>Anh</option>
														<option value='fr '>Pháp</option>
														<option value='de '>Đức</option>
														<option value='ru '>Nga</option>
														<option value='cn '>Trung Quốc</option>
														<option value='kr '>Hàn Quốc</option>
														<option value='jp '>Nhật</option>
														<option value='other '>Khác</option>
													</select>
												</div>
												<div className={sx('form-group', 'form-select', '')}>
													<label htmlFor=' '>Trình độ</label>
													<select name='rs_language_level[] ' className={sx('width_125', '')}>
														<option selected value={0}>
															Chọn
														</option>
														<option value={2}>Sơ cấp</option>
														<option value={3}>Trung cấp</option>
														<option value={4}>Cao cấp</option>
														<option value={1}>Bản ngữ</option>
													</select>
												</div>
											</div>
											<div className={cx('col-md-6', 'col-dt-2', '')}>
												<div className={sx('outer-form-group', '')}>
													<label>Chứng chỉ ngôn ngữ</label>
													<div className={sx('form-group', 'form-text', '')}>
														<input type='text ' name='rs_language_certify[] ' defaultValue=' ' />
														<a className={sx('btn-delete', '')}>
															<em className={cx('material-icons', '')}>highlight_off</em>
															<span>Xóa</span>
														</a>
													</div>
												</div>
											</div>
										</div>

										<a className={sx('btn-add', '')}>
											<em className={cx('material-icons', '')}>add_circle_outline</em>
											<span>Thêm </span>
										</a>
									</div>
								</div>
								<div className={cx('col-md-12', '')}>
									<div className={sx('list-workplace-desired', '')} id='list-workplace-desired '>
										<div className={cx('row', 'item', 'active', '')}>
											<div className={cx('col-md-6', '')}>
												<div className={sx('form-group', 'form-select', '')}>
													<label>* Nơi làm việc mong muốn</label>
													<select name='LOCATION_ID[] ' id='select_location_id_1'>
														<option value=' '>Chọn</option>
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
														<option value={74}>Trà Vinh</option>
														<option value={27}>Tuyên Quang</option>
														<option value={70}>Vĩnh Long</option>
														<option value={211}>Vĩnh Phúc</option>
														<option value={29}>Yên Bái</option>
													</select>
													<span className={sx('error_location_id', 'error_select_location_id_1', '')} />
												</div>
											</div>
											<div className={cx('col-md-6', '')}>
												<div style={{ marginBottom: 10 }}>
													{/* <SelectMultipleFieldControl
														label='Quận'
														options={[{ label: 'test', value: 'test' }]}
													name='test2'

														control={control}
													/> */}
													<SelectMultipleFieldControl
														label='Select Multiple Options'
														options={[{ label: 'test', value: 'test' }]}
														placeholder='Select options'
														maxItems={5}
														control={control}
														rules={{ required: 'Please select at least one option' }}
														name='selectMultipleField'
													/>
												</div>
												<div className={sx('delete', '')}>
													<a>
														<em className={cx('material-icons', '')}>highlight_off</em>Xóa
													</a>
												</div>
											</div>
										</div>

										<a className={sx('btn-add', '')}>
											<em className={cx('material-icons', '')}>add_circle_outline</em>
											<span>Thêm</span>
										</a>
									</div>
								</div>
								<div className={cx('col-md-12', '')}>
									<div className={cx('row', '')}>
										<div className={cx('col-md-6', '')}>
											<div className={sx('form-group', 'form-select-chosen', '')} id='outcountry '>
												<select
													name='OUTCOUNTRY_ID[] '
													className={sx('chosen-select-max-three', '')}
													data-placeholder='Nước ngoài '>
													<option value={22}>Bangladesh</option>
													<option value={14}>Campuchia</option>
													<option value={4}>Canada</option>
													<option value={25}>Công Gô</option>
													<option value={20}>Đài Loan</option>
													<option value={8}>Hàn Quốc</option>
													<option value={13}>Hoa Kỳ</option>
													<option value={24}>Hồng Kông</option>
													<option value={169}>Khác</option>
													<option value={19}>Lào</option>
													<option value={9}>Malaysia</option>
													<option value={21}>Myanmar</option>
													<option value={2}>Nhật Bản</option>
													<option value={17}>Qatar</option>
													<option value={23}>Quốc tế</option>
													<option value={10}>Singapore</option>
													<option value={5}>Trung Quốc</option>
													<option value={3}>Úc</option>
													<option value={16}>Ukraine</option>
												</select>
											</div>
										</div>
										<div className={cx('col-md-6', '')}>
											<div>
												<SelectMultipleFieldControl
													control={control}
													options={[
														{ value: 'Spring', label: 'Spring' },
														{ value: 'Summer', label: 'Summer' },
														{ value: 'Autumn', label: 'Autumn' }
													]}
													label={'Phúc lợi mong muốn'}
													placeholder='Chọn'
													maxItems={2}
													name='test'
												/>
												{/* <select
													name='BENEFIT_ID[] '
													className={sx('chosen-select-max-three', '')}
													multiple='multiple '
													data-placeholder='Phúc lợi mong muốn '>
													<option value={2}>Chế độ bảo hiểm</option>
													<option value={3}>Du Lịch</option>
													<option value={8}>Chế độ thưởng</option>
													<option value={9}>Chăm sóc sức khỏe</option>
													<option value={10}>Đào tạo</option>
													<option value={11}>Tăng lương</option>
													<option value={1}>Laptop</option>
													<option value={4}>Phụ cấp</option>
													<option value={5}>Xe đưa đón</option>
													<option value={6}>Du lịch nước ngoài</option>
													<option value={7}>Đồng phục</option>
													<option value={12}>Công tác phí</option>
													<option value={13}>Phụ cấp thâm niên</option>
													<option value={14}>Nghỉ phép năm</option>
													<option value={15}>CLB thể thao</option>
												</select> */}
											</div>
										</div>
									</div>
								</div>
								<div className={cx('col-md-12', 'form-of-work', '')}>
									<h6>* Hình thức làm việc</h6>
									<div className={cx('row')} style={{ marginTop: 6 }}>
										<div className={cx('col-md-6', '')}>
											<div className={cx('d-flex')}>
												<CheckBoxFieldControl
													control={control}
													name='chkResumeType_1'
													label='Nhân viên chính thức'
												/>
											</div>
										</div>
										<div className={cx('col-md-6', '')}>
											<div>
												<CheckBoxFieldControl
													control={control}
													name='chkResumeType_1'
													label='Bán thời gian'
													defaultValue={3}
												/>
											</div>
										</div>
										<div className={cx('col-md-6', '')}>
											<div>
												<CheckBoxFieldControl
													control={control}
													name='chkResumeType_1'
													label='Nghề tự do'
													defaultValue={2}
												/>
											</div>
										</div>
										<div className={cx('col-md-6', '')}>
											<div>
												<CheckBoxFieldControl
													control={control}
													name='chkResumeType_1'
													label='Thực tập'
													defaultValue={4}
												/>
											</div>
										</div>
									</div>
									<span className={sx('error_chkResumeType_1', '')} />
								</div>
								<div className={cx('col-md-12', 'form-of-work', '')}>
									<h6>Phương thức công việc</h6>
									<div className={cx('row', '')} style={{ marginTop: 6 }}>
										<div className={cx('col-md-6', '')}>
											<div>
												<CheckBoxFieldControl
													control={control}
													label='Làm việc từ nhà'
													name='chkWorkHome'
													defaultValue={1}
												/>
											</div>
										</div>
									</div>
								</div>
							</div>
						</div>
						<div className={sx('quick-upload', 'quick-upload-2', '')}>
							<div className={sx('cb-title-h3', '')}>
								<h3>
									Người tham khảo <span>Không bắt buộc</span>
								</h3>
							</div>
							<div className={sx('list-references', '')}>
								<div className={cx('row')} id='list_refer '></div>
								<div className={cx('row', '')}>
									<div className={cx('col-md-6', '')}>
										<a>
											<em className={cx('material-icons', '')}>note_add</em>
											<span>Thêm người tham khảo</span>
										</a>
									</div>
								</div>
							</div>
						</div>
						<div className={sx('quick-upload', 'quick-upload-2', '')}>
							<div className={sx('cb-title-h3', '')}>
								<h3>Quyền riêng tư của hồ sơ</h3>
							</div>
							<div className={sx('status-area', '')}>
								<div className={sx('switch-status', 'switch-status-element', '')}>
									<a data-type={1} className={sx('lock', 'switch-status-element-1', 'active', '')}>
										<em className={cx('mdi', 'mdi-lock', '')} />
										Khóa
									</a>
									<a data-type={2} className={sx('public', 'switch-status-element-2', '')}>
										<em className={cx('mdi', 'mdi-web', '')} />
										Công khai
									</a>
									<a data-type={3} className={cx('flash', 'switch-status-element-3', '')}>
										<em className={cx('mdi', 'mdi-flash', '')} />
										Khẩn cấp
									</a>
								</div>
								<div className={sx('swap-content-1', '')}>
									<p className={sx('content-1', 'active', '')}>
										Bạn đang <span>vô hiệu hóa</span> hồ sơ. Nhà tuyển dụng sẽ không thấy được hồ sơ này của
										bạn.
									</p>
									<p className={sx('content-2', '')}>
										Hồ sơ của bạn đang ở trạng thái <span>Công Khai</span>. Nhà tuyển dụng có thể tìm thấy Hồ
										sơ này của bạn.
									</p>
									<p className={sx('content-3', '')}>
										Hồ sơ của bạn đang ở trạng thái <span>Khẩn cấp</span>. Hồ sơ của bạn sẽ được ưu tiên tìm
										thấy bởi các nhà tuyển dụng.
									</p>
								</div>
							</div>
							<div className={cx('row', 'search-resume', '')}>
								<div className={cx('col-md-6', '')}>
									<div className={sx('form-group', '')}>
										<span className={sx('hide-infor', '')}>Ẩn một số thông tin</span>
									</div>
								</div>
							</div>
							<div className={cx('row', '')}>
								<div className={cx('col-md-12')}>
									<div className={sx('form-group', 'form-submit', 'form-back', '')}>
										<button type='submit' className={sx('btn-gradient', 'save-and-finish', '')}>
											Lưu và hoàn thành
										</button>
									</div>
								</div>
								<div className={cx('col-md-12')}>
									<div className={sx('form-group', 'form-note', '')}>
										<p>* Thông tin bắt buộc</p>
									</div>
								</div>
							</div>
						</div>
					</form>
				</div>
			</div>
		</section>
	);
};

export default MyAttach;
