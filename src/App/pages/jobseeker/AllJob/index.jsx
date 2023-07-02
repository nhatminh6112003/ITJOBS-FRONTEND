import styles from './AllJob.module.css';
import classNames from 'classnames/bind';

import { SearchIcon, FavoriteBorderIcon } from '~/Core/resources';
const cx = classNames.bind(styles);
const AllJob = () => {
	return (
		<>
			<section className={cx('page-heading-tool')}>
				<div className={cx('container')}>
					<div className={cx('tool-wrapper')}>
						{' '}
						<div className={cx('close-input-filter')}>
							<em className={cx('lnr', 'lnr-cross')} />
						</div>
						<div className={cx('search-job')}>
							<form>
								<div className={cx('form-wrap')}>
									<div className={cx('form-group', 'form-keyword')}>
										<input
											type='search'
											className={cx('keyword')}
											name='keyword'
											id='keyword'
											placeholder='Chức danh, Kỹ năng, Tên công ty'
											autoComplete='off'
										/>
										<div className={cx('cleartext')}>
											<em className='mdi mdi-close-circle' />
										</div>
									</div>
									<div className={cx('form-group')}>
										<select
											id='industry'
											name='industry'
											className={cx('select-custom-nosearch', 'select-custom')}
											data-placeholder='Tất cả ngành nghề'>
											<option value=''>Chọn ngành nghề</option>
											<option value='an-ninh-bao-ve_51'>An Ninh / Bảo Vệ</option>
											<option value='an-toan-lao-dong_58'>An toàn lao động</option>
											<option value='ban-hang-kinh-doanh_31'>Bán hàng / Kinh doanh</option>
											<option value='ban-le-ban-si_30'>Bán lẻ / Bán sỉ</option>
											<option value='bao-hiem_23'>Bảo hiểm</option>
											<option value='bat-dong-san_28'>Bất động sản</option>
											<option value='bien-phien-dich_38'>Biên phiên dịch</option>
											<option value='buu-chinh-vien-thong_32'>Bưu chính viễn thông</option>
											<option value='chan-nuoi-thu-y_52'>Chăn nuôi / Thú y</option>
											<option value='chung-khoan_46'>Chứng khoán</option>
											<option value='cntt-phan-cung-mang_63'>CNTT - Phần cứng / Mạng</option>
											<option value='cntt-phan-mem_1'>CNTT - Phần mềm</option>
											<option value='cong-nghe-sinh-hoc_69'>Công nghệ sinh học</option>
											<option value='cong-nghe-thuc-pham-dinh-duong_70'>
												Công nghệ thực phẩm / Dinh dưỡng
											</option>
											<option value='co-khi-o-to-tu-dong-hoa_14'>Cơ khí / Ô tô / Tự động hóa</option>
											<option value='dau-khi_26'>Dầu khí</option>
											<option value='det-may-da-giay-thoi-trang_39'>Dệt may / Da giày / Thời trang</option>
										</select>
									</div>
									<div className={cx('form-group', 'form-select-chosen')}>
										<select
											id='location'
											name='location'
											className={cx('select-custom-nosearch', 'select-custom')}
											data-placeholder='Tất cả địa điểm'
											multiple=''>
											<option value=''>Chọn địa điểm</option>
											<option value='ha-noi_4'>Hà Nội</option>
											<option value='ho-chi-minh_8'>Hồ Chí Minh</option>
										</select>
									</div>
									<div className={cx('form-group', 'form-submit')}>
										<button className={cx('btn-gradient')} onClick="return validataSearchHomePage('vi');">
											<p>Tìm Ngay</p>
											<SearchIcon />
										</button>
									</div>
								</div>
							</form>
						</div>
						<div className={cx('box-right-action')}>
							<div className='mobile-filter toollips'>
								<span className='mdi mdi-filter-outline'></span>
								<p>Lọc</p>
							</div>
							<div className={cx('switch-group', 'toollips', 'switch-group-sp')}>
								<div className={cx('form-group')}>
									<label htmlFor='work-home-fli'>
										Work from home
										<input
											id='work-home-fli'
											type='checkbox'
											onClick="validFilterdataSearch('vi', 'homework', this);"
										/>
										<span className={cx('slider')} />
									</label>
								</div>
							</div>
							<input
								type='hidden'
								name='url_page_search'
								id='url_page_search'
								defaultValue='https://careerbuilder.vn/viec-lam/tat-ca-viec-lam-vi.html'
							/>
							{/* <div className={cx("change-display")}>
            <ul>
              <li className={cx("list-view-mode","active")}>
                <a href="javascript:searchJobView('list')" className="active">
                  <em className="mdi mdi-view-list" />
                </a>
                <div className="toolip">
                  <p>Chuyển qua chế độ xem danh sách</p>
                </div>
              </li>
              <li className={cx("quick-view-mode")}>
                <a href="javascript:searchJobView('detail')">
                  <em className="mdi mdi-view-quilt" />
                </a>
                <div className={cx("toolip")}>
                  <p>Chuyển qua chế độ xem nhanh</p>
                </div>
              </li>
            </ul>
          </div> */}
						</div>
					</div>
				</div>
				<div className={cx('filters-wrapper')}>
					<div className={cx('inner')}>
						<div className={cx('container')}>
							<div className={cx('filter-extend')} style={{ height: 536 }}>
								<div className={cx('list-filter-extend')}>
									<div className={cx('item', 'show-mb')}>
										<div className={cx('form-group', 'form-select-chosen')}>
											<select
												id='industry_mb'
												name='industry'
												className={cx('select-custom-nosearch', 'select-custom')}
												data-placeholder='Tất cả ngành nghề'
												multiple=''>
												<option value=''>Chọn ngành nghề</option>
												<option value='an-ninh-bao-ve_51'>An Ninh / Bảo Vệ</option>
											</select>
										</div>
									</div>
									<div className={cx('item', 'show-mb')}>
										<div className={cx('form-group', 'form-select-chosen')}>
											<select
												id='location_mb'
												name='location'
												className={cx('select-custom-nosearch', 'select-custom')}
												data-placeholder='Tất cả địa điểm'
												multiple=''>
												<option value=''>Chọn địa điểm</option>
												<option value='ha-noi_4'>Hà Nội</option>
												<option value='ho-chi-minh_8'>Hồ Chí Minh</option>
												<option value='an-giang_76'>An Giang</option>
												<option value='ba-ria-vung-tau_64'>Bà Rịa - Vũng Tàu</option>
												<option value='bac-lieu_781'>Bạc Liêu</option>
												<option value='bac-can_281'>Bắc Cạn</option>
												<option value='bac-giang_240'>Bắc Giang</option>
												<option value='bac-ninh_241'>Bắc Ninh</option>
												<option value='ben-tre_75'>Bến Tre</option>
												<option value='binh-duong_650'>Bình Dương</option>
												<option value='binh-dinh_56'>Bình Định</option>
												<option value='binh-phuoc_651'>Bình Phước</option>
												<option value='binh-thuan_62'>Bình Thuận</option>
												<option value='ca-mau_78'>Cà Mau</option>
												<option value='cao-bang_26'>Cao Bằng</option>
												<option value='can-tho_71'>Cần Thơ</option>
												<option value='dak-lak_50'>Dak Lak</option>
												<option value='dak-nong_1042'>Dak Nông</option>
												<option value='da-nang_511'>Đà Nẵng</option>
												<option value='dien-bien_900'>Điện Biên</option>
												<option value='dong-bang-song-cuu-long_1064'>Đồng Bằng Sông Cửu Long</option>
												<option value='dong-nai_61'>Đồng Nai</option>
												<option value='dong-thap_67'>Đồng Tháp</option>
												<option value='gia-lai_59'>Gia Lai</option>
												<option value='ha-giang_19'>Hà Giang</option>
												<option value='ha-nam_351'>Hà Nam</option>
												<option value='ha-tinh_39'>Hà Tĩnh</option>
												<option value='hai-duong_320'>Hải Dương</option>
												<option value='hai-phong_31'>Hải Phòng</option>
												<option value='hau-giang_780'>Hậu Giang</option>
												<option value='hoa-binh_18'>Hòa Bình</option>
												<option value='hung-yen_321'>Hưng Yên</option>
												<option value='khac_901'>Khác</option>
												<option value='khanh-hoa_58'>Khánh Hòa</option>
												<option value='kien-giang_77'>Kiên Giang</option>
												<option value='kon-tum_60'>Kon Tum</option>
												<option value='kv-bac-trung-bo_1071'>KV Bắc Trung Bộ</option>
												<option value='kv-dong-nam-bo_1069'>KV Đông Nam Bộ</option>
												<option value='kv-nam-trung-bo_1070'>KV Nam Trung Bộ</option>
												<option value='kv-tay-nguyen_1072'>KV Tây Nguyên</option>
												<option value='lai-chau_23'>Lai Châu</option>
												<option value='lang-son_25'>Lạng Sơn</option>
												<option value='lao-cai_20'>Lào Cai</option>
												<option value='lam-dong_63'>Lâm Đồng</option>
												<option value='long-an_72'>Long An</option>
												<option value='nam-dinh_350'>Nam Định</option>
												<option value='nghe-an_38'>Nghệ An</option>
												<option value='ninh-binh_30'>Ninh Bình</option>
												<option value='ninh-thuan_68'>Ninh Thuận</option>
												<option value='phu-tho_210'>Phú Thọ</option>
												<option value='phu-yen_57'>Phú Yên</option>
												<option value='quang-binh_52'>Quảng Bình</option>
												<option value='quang-nam_510'>Quảng Nam</option>
												<option value='quang-ngai_55'>Quảng Ngãi</option>
												<option value='quang-ninh_33'>Quảng Ninh</option>
												<option value='quang-tri_53'>Quảng Trị</option>
												<option value='soc-trang_79'>Sóc Trăng</option>
												<option value='son-la_22'>Sơn La</option>
												<option value='tay-ninh_66'>Tây Ninh</option>
												<option value='thai-binh_36'>Thái Bình</option>
												<option value='thai-nguyen_280'>Thái Nguyên</option>
												<option value='thanh-hoa_37'>Thanh Hóa</option>
												<option value='thua-thien-hue_54'>Thừa Thiên- Huế</option>
												<option value='tien-giang_73'>Tiền Giang</option>
												<option value='toan-quoc_1065'>Toàn quốc</option>
												<option value='tra-vinh_74'>Trà Vinh</option>
												<option value='tuyen-quang_27'>Tuyên Quang</option>
												<option value='vinh-long_70'>Vĩnh Long</option>
												<option value='vinh-phuc_211'>Vĩnh Phúc</option>
												<option value='yen-bai_29'>Yên Bái</option>{' '}
												<option value='banteay-meanchey_1098'>Banteay Meanchey</option>
												<option value='battambang_1096'>Battambang</option>
												<option value='kampong-chhnang_1092'>Kampong Chhnang</option>
												<option value='kampong-speu_1090'>Kampong Speu</option>
												<option value='kampot_1085'>Kampot</option>
												<option value='kandal_1088'>Kandal</option>
												<option value='kep_1084'>Kep</option>
												<option value='koh-kong_1091'>Koh Kong</option>
												<option value='kratie_1093'>Kratie</option>
												<option value='otdar-meanchey_1104'>Otdar Meanchey</option>
												<option value='pailin_1103'>Pailin</option>
												<option value='phnompenh_1041'>Phnompenh</option>
												<option value='preah-vihear_1099'>Preah Vihear</option>
												<option value='prey-veng_1089'>Prey Veng</option>
												<option value='siem-reap_1097'>Siem Reap</option>
												<option value='stung-treng_1100'>Stung Treng</option>
												<option value='svay-rieng_1087'>Svay Rieng</option>
												<option value='tbong-khmum_1082'>Tbong Khmum</option>{' '}
												<option value='chicago_1034'>Chicago</option>
												<option value='florida_1077'>Florida</option>
												<option value='miami_1033'>Miami</option>
												<option value='san-diego_1039'>San Diego</option>{' '}
												<option value='hong-kong_1079'>Hồng Kông</option>{' '}
												<option value='khac_1318'>Khác</option>{' '}
												<option value='attapeu_1106'>Attapeu</option>
												<option value='bokeo_1107'>Bokeo</option>
												<option value='champasak_1109'>Champasak</option>
												<option value='houaphanh_1110'>Houaphanh</option>
												<option value='khammouane_1111'>Khammouane</option>
												<option value='luang-prabang_1113'>Luang Prabang</option>
												<option value='phongsaly_1115'>Phongsaly</option>
												<option value='vientiane_1059'>Vientiane</option>
												<option value='xiangkhouang_1120'>Xiangkhouang</option>{' '}
												<option value='kuala-lumpur_1019'>Kuala Lumpur</option>
												<option value='malaysia_1078'>Malaysia</option>{' '}
												<option value='yangon_1320'>Yangon</option>{' '}
												<option value='hokkaido_1043'>Hokkaido</option>
												<option value='tokyo_1001'>Tokyo</option>
												<option value='yokohama_1002'>Yokohama</option>{' '}
												<option value='qatar_1055'>Qatar</option>{' '}
												<option value='quoc-te_1073'>Quốc tế</option>{' '}
												<option value='singapore_1040'>Singapore</option>{' '}
												<option value='kharkiv_1053'>Kharkiv</option>{' '}
											</select>
										</div>
									</div>
									<div className='item'>
										<div className={cx('form-group', 'form-select')}>
											<select
												name='salary'
												id='salary'
												className={cx('select-custom', 'select-custom-nosearch')}
												data-placeholder='Mức lương'>
												<option value='' data-id={-1}>
													Mức lương
												</option>
												<option value={3}>Từ 3.000.000 đ</option>
												<option value={5}>Từ 5.000.000 đ</option>
												<option value={7}>Từ 7.000.000 đ</option>
												<option value={10}>Từ 10.000.000 đ</option>
												<option value={15}>Từ 15.000.000 đ</option>
												<option value={20}>Từ 20.000.000 đ</option>
												<option value={30}>Từ 30.000.000 đ</option>
												<option value={40}>Từ 40.000.000 đ</option>
												<option value={50}>Từ 50.000.000 đ</option>
												<option value={60}>Từ 60.000.000 đ</option>
												<option value={70}>Từ 70.000.000 đ</option>
											</select>
										</div>
									</div>
									<div className='item'>
										<div className={cx('form-group', 'form-select')}>
											<select
												id='level'
												name='level'
												className={cx('select-custom', 'select-custom-nosearch')}
												data-placeholder='Cấp bậc'>
												<option value='' data-id={-1}>
													Cấp bậc
												</option>
												<option value='sinh-vien-thuc-tap-sinh_1' data-id={1}>
													Sinh viên/ Thực tập sinh
												</option>
												<option value='moi-tot-nghiep_2' data-id={2}>
													Mới tốt nghiệp
												</option>
												<option value='nhan-vien_3' data-id={3}>
													Nhân viên
												</option>
												<option value='truong-nhom-giam-sat_4' data-id={4}>
													Trưởng nhóm / Giám sát
												</option>
												<option value='quan-ly_5' data-id={5}>
													Quản lý
												</option>
												<option value='quan-ly-cap-cao_11' data-id={11}>
													Quản lý cấp cao
												</option>
												<option value='dieu-hanh-cap-cao_12' data-id={12}>
													Điều hành cấp cao
												</option>
											</select>
										</div>
									</div>
									<div className='item'>
										<div className={cx('form-group', 'form-select')}>
											<select
												name='days'
												id='days'
												className={cx('select-custom', 'select-custom-nosearch')}
												data-placeholder='Đăng trong vòng'>
												<option value=''>Đăng trong vòng</option>
												<option value={3} data-id={3}>
													3 ngày trước
												</option>
												<option value={7} data-id={7}>
													1 tuần trước
												</option>
												<option value={14} data-id={14}>
													2 tuần trước
												</option>
												<option value={30} data-id={30}>
													1 tháng trước{' '}
												</option>
											</select>
										</div>
									</div>
									<div className='item'>
										<div className={cx('form-group', 'form-select')}>
											<select
												name='job_type'
												id='job_type'
												className={cx('select-custom', 'select-custom-nosearch')}
												data-placeholder='Hình thức việc làm'>
												<option value=''>Hình thức việc làm</option>
												<option value='nhan-vien-chinh-thuc_1000'>Nhân viên chính thức</option>
												<option value='tam-thoi-du-an_0100'>Tạm thời/Dự án</option>
												<option value='thoi-vu-nghe-tu-do_0010'>Thời vụ - Nghề tự do</option>
												<option value='thuc-tap_0001'>Thực tập</option>
											</select>
										</div>
									</div>
									<div className='item'>
										<div className={cx('form-group', 'form-select-chosen')}>
											<select
												multiple='multiple'
												name='benefit'
												id='benefit'
												size={1}
												className={cx('select-custom-nosearch', 'select-custom')}
												data-placeholder='Phúc lợi mong muốn'
												title='Chọn'
												style={{ width: 240, display: 'none' }}>
												<option value='che-do-bao-hiem_2' data-id={2}>
													Chế độ bảo hiểm
												</option>
												<option value='du-lich_3' data-id={3}>
													Du Lịch
												</option>
												<option value='che-do-thuong_8' data-id={8}>
													Chế độ thưởng
												</option>
												<option value='cham-soc-suc-khoe_9' data-id={9}>
													Chăm sóc sức khỏe
												</option>
												<option value='dao-tao_10' data-id={10}>
													Đào tạo
												</option>
												<option value='tang-luong_11' data-id={11}>
													Tăng lương
												</option>
												<option value='laptop_1' data-id={1}>
													Laptop
												</option>
												<option value='phu-cap_4' data-id={4}>
													Phụ cấp
												</option>
												<option value='xe-dua-don_5' data-id={5}>
													Xe đưa đón
												</option>
												<option value='du-lich-nuoc-ngoai_6' data-id={6}>
													Du lịch nước ngoài
												</option>
												<option value='dong-phuc_7' data-id={7}>
													Đồng phục
												</option>
												<option value='cong-tac-phi_12' data-id={12}>
													Công tác phí
												</option>
												<option value='phu-cap-tham-nien_13' data-id={13}>
													Phụ cấp thâm niên
												</option>
												<option value='nghi-phep-nam_14' data-id={14}>
													Nghỉ phép năm
												</option>
												<option value='clb-the-thao_15' data-id={15}>
													CLB thể thao
												</option>
											</select>
										</div>
									</div>
								</div>
								<div className={cx('filter-action')}>
									<a href='' className={cx('btn-apply')}>
										Tìm Ngay
									</a>
									<a className={cx('btn-clear')} href=''>
										Xóa bộ lọc
									</a>
								</div>
							</div>
						</div>
					</div>
				</div>
				<input type='hidden' id='recommend' name='recommend' defaultValue='' />
			</section>
			<section className={cx('search-result-list')}>
				<div className={cx('container')}>
					<div className={cx('row')}>
						<div className={cx('col-lg-8', 'col-custom-xxl-9')}>
							<div className={cx('job-found')}>
								<div className={cx('job-found-amout')}>
									<h1>16,654 việc làm</h1>
								</div>
								<div className={cx('job-found-sort')}>
									<span className='sort-title dropdown'>
										Sắp xếp theo
										<em className='mdi mdi-chevron-down' />
										<div className='dropdown-menu'>
											<ul>
												<li>
													{' '}
													<a
														title='Cập nhật'
														className='active'
														href='https://careerbuilder.vn/viec-lam/tat-ca-viec-lam-sortdv-vi.html'>
														Cập nhật
													</a>
												</li>
												<li>
													<a
														title='Mức lương'
														href='https://careerbuilder.vn/viec-lam/tat-ca-viec-lam-sortlg-vi.html'>
														Mức lương
													</a>
												</li>
											</ul>
										</div>
									</span>
								</div>
							</div>
							<div className='main-slide'>
								<div className='jobs-side-list' id='jobs-side-list-content'>
									<div className={cx('job-item')} id='job-item-35BB3D60'>
										<div className={cx('figure')}>
											<div className={cx('image')}>
												<a
													href='https://careerbuilder.vn/vi/nha-tuyen-dung/cong-ty-cp-thanh-thanh-cong-bien-hoa.35A7FCC0.html'
													target='_blank'
													title='Công ty CP Thành Thành Công - Biên Hòa'
													rel='noreferrer'>
													<img
														className='lazy-img'
														src='https://images.careerbuilder.vn/employer_folders/lot4/201664/155x155/90931untitled-1.png'
														alt='Công ty CP Thành Thành Công - Biên Hòa'
														style={{}}
													/>
												</a>
											</div>
											<div className={cx('figcaption')}>
												<div className={cx('title')}>
													<h2>
														<a
															className={cx('job_link')}
															data-id='35BB3D60'
															href='https://careerbuilder.vn/vi/tim-viec-lam/ke-toan-thanh-toan-lam-viec-tai-nha-may-mia-duong-cambodia.35BB3D60.html'
															target='_blank'
															title='Kế Toán Thanh toán (Làm việc tại nhà máy mía đường Cambodia)'
															rel='noreferrer'>
															Kế Toán Thanh toán (Làm việc tại nhà máy mía đường Cambodia)
															<span className='new'>
																<font color='ff0000'>(Mới)</font>
															</span>{' '}
														</a>
													</h2>
												</div>
												<div className={cx('caption')}>
													<a
														className={cx('company-name')}
														target='_blank'
														href='https://careerbuilder.vn/vi/nha-tuyen-dung/cong-ty-cp-thanh-thanh-cong-bien-hoa.35A7FCC0.html'
														title='Công ty CP Thành Thành Công - Biên Hòa'
														rel='noreferrer'>
														Công ty CP Thành Thành Công - Biên Hòa
													</a>
													<a
														className={cx('job_link')}
														data-id='35BB3D60'
														href='https://careerbuilder.vn/vi/tim-viec-lam/ke-toan-thanh-toan-lam-viec-tai-nha-may-mia-duong-cambodia.35BB3D60.html'
														target='_blank'
														title='Kế Toán Thanh toán (Làm việc tại nhà máy mía đường Cambodia)'
														rel='noreferrer'>
														<div className={cx('salary')}>
															<p>
																<em className='fa fa-usd' />
																Lương: Cạnh tranh
															</p>
														</div>
														<div className={cx('location')}>
															<em className='mdi mdi-map-marker' />
															<ul>
																<li>Hồ Chí Minh</li>
																<li> An Giang</li>
																<li> Tây Ninh</li>
															</ul>
														</div>
														<ul className={cx('welfare')}>
															<li>
																<span className='fa fa-medkit' />
																Chế độ bảo hiểm
															</li>
															<li>
																<span className='fa fa-plane' />
																Du Lịch
															</li>
															<li>
																<span className='fa fa-usd' />
																Chế độ thưởng
															</li>
														</ul>
													</a>
												</div>
												<div className={cx('bottom-right-icon')}>
													<ul>
														<li>
															<a
																className={cx('toollips', 'save-job', 'chk_save_35BB3D60')}
																href=''
																data-id='35BB3D60'
																onClick='popuplogin()'>
																<FavoriteBorderIcon fontSize='small' />
																<span className={cx('text')}>Lưu việc làm</span>
															</a>
														</li>
													</ul>
													<div className={cx('time')}>
														<em className='mdi mdi-calendar' />
														<time>16-01-2023</time>
														{/* <div className={cx("toolip")}>
                          <p>Ngày cập nhật</p>
                        </div> */}
													</div>
												</div>
											</div>
										</div>
									</div>
									<div className='job-item ' id='job-item-35BB3D5F'>
										<div className='figure'>
											<div className='image'>
												<a
													href='https://careerbuilder.vn/vi/nha-tuyen-dung/cong-ty-tai-chinh-tnhh-mb-shinsei-mcredit.35A78FCD.html'
													target='_blank'
													title='Công ty Tài chính TNHH MB SHINSEI (MCREDIT)'
													rel='noreferrer'>
													<img
														className='lazy-img'
														src='https://images.careerbuilder.vn/employer_folders/lot3/173773/155x155/160149logopng_rgb_digitaluse_onwhitebg.png'
														alt='Công ty Tài chính TNHH MB SHINSEI (MCREDIT)'
														style={{}}
													/>
												</a>
											</div>
											<div className='figcaption'>
												<div className='title '>
													<h2>
														<a
															className='job_link'
															data-id='35BB3D5F'
															href='https://careerbuilder.vn/vi/tim-viec-lam/chuyen-vien-cao-cap-kiem-toan-noi-bo.35BB3D5F.html'
															target='_blank'
															title='Chuyên viên cao cấp Kiểm toán nội bộ'
															rel='noreferrer'>
															Chuyên viên cao cấp Kiểm toán nội bộ
															<span className='new'>
																<font color='ff0000'>(Mới)</font>
															</span>{' '}
														</a>
													</h2>
												</div>
												<div className='caption'>
													<a
														className='company-name'
														target='_blank'
														href='https://careerbuilder.vn/vi/nha-tuyen-dung/cong-ty-tai-chinh-tnhh-mb-shinsei-mcredit.35A78FCD.html'
														title='Công ty Tài chính TNHH MB SHINSEI (MCREDIT)'
														rel='noreferrer'>
														Công ty Tài chính TNHH MB SHINSEI (MCREDIT)
													</a>
													<a
														className='job_link'
														data-id='35BB3D5F'
														href='https://careerbuilder.vn/vi/tim-viec-lam/chuyen-vien-cao-cap-kiem-toan-noi-bo.35BB3D5F.html'
														target='_blank'
														title='Chuyên viên cao cấp Kiểm toán nội bộ'
														rel='noreferrer'>
														<div className='salary'>
															<p>
																<em className='fa fa-usd' />
																Lương: Cạnh tranh
															</p>
														</div>
														<div className='location'>
															<em className='mdi mdi-map-marker' />
															<ul>
																<li>Hà Nội</li>
															</ul>
														</div>
														<ul className='welfare'>
															<li>
																<span className='fa fa-medkit' />
																Chế độ bảo hiểm
															</li>
															<li>
																<span className='fa fa-plane' />
																Du Lịch
															</li>
															<li>
																<span className='fa fa-usd' />
																Chế độ thưởng
															</li>
														</ul>
													</a>
												</div>
												<div className='bottom-right-icon'>
													<ul>
														<li>
															<a
																className='toollips save-job chk_save_35BB3D5F '
																href=''
																data-id='35BB3D5F'
																onClick='popuplogin()'>
																<i className='mdi mdi-heart-outline' />
																<span className='text'>Lưu việc làm</span>
															</a>
														</li>
													</ul>
													<div className='time'>
														{' '}
														<em className='mdi mdi-calendar' />
														<time>16-01-2023</time>
														<div className='toolip'>
															<p>Ngày cập nhật</p>
														</div>
													</div>
												</div>
											</div>
										</div>
									</div>
									<div className='job-item ' id='job-item-35BB3D5D'>
										<div className='figure'>
											<div className='image'>
												<a
													href='https://careerbuilder.vn/vi/nha-tuyen-dung/cong-ty-cp-thanh-thanh-cong-bien-hoa.35A7FCC0.html'
													target='_blank'
													title='Công ty CP Thành Thành Công - Biên Hòa'
													rel='noreferrer'>
													<img
														className='lazy-img'
														src='https://images.careerbuilder.vn/employer_folders/lot4/201664/155x155/90931untitled-1.png'
														alt='Công ty CP Thành Thành Công - Biên Hòa'
														style={{}}
													/>
												</a>
											</div>
											<div className='figcaption'>
												<div className='title '>
													<h2>
														<a
															className='job_link'
															data-id='35BB3D5D'
															href='https://careerbuilder.vn/vi/tim-viec-lam/pho-truong-khu-vuc-mien-bac.35BB3D5D.html'
															target='_blank'
															title='Phó trưởng khu vực miền Bắc'
															rel='noreferrer'>
															Phó trưởng khu vực miền Bắc
															<span className='new'>
																<font color='ff0000'>(Mới)</font>
															</span>{' '}
														</a>
													</h2>
												</div>
												<div className='caption'>
													<a
														className='company-name'
														target='_blank'
														href='https://careerbuilder.vn/vi/nha-tuyen-dung/cong-ty-cp-thanh-thanh-cong-bien-hoa.35A7FCC0.html'
														title='Công ty CP Thành Thành Công - Biên Hòa'
														rel='noreferrer'>
														Công ty CP Thành Thành Công - Biên Hòa
													</a>
													<a
														className='job_link'
														data-id='35BB3D5D'
														href='https://careerbuilder.vn/vi/tim-viec-lam/pho-truong-khu-vuc-mien-bac.35BB3D5D.html'
														target='_blank'
														title='Phó trưởng khu vực miền Bắc'
														rel='noreferrer'>
														<div className='salary'>
															<p>
																<em className='fa fa-usd' />
																Lương: Cạnh tranh
															</p>
														</div>
														<div className='location'>
															<em className='mdi mdi-map-marker' />
															<ul>
																<li>Nghệ An</li>
																<li> Hà Nội</li>
																<li> Hải Phòng</li>
															</ul>
														</div>
														<ul className='welfare'>
															<li>
																<span className='fa fa-medkit' />
																Chế độ bảo hiểm
															</li>
															<li>
																<span className='fa fa-plane' />
																Du Lịch
															</li>
															<li>
																<span className='fa fa-usd' />
																Chế độ thưởng
															</li>
														</ul>
													</a>
												</div>
												<div className='bottom-right-icon'>
													<ul>
														<li>
															<a
																className='toollips save-job chk_save_35BB3D5D '
																href=''
																data-id='35BB3D5D'
																onClick='popuplogin()'>
																<i className='mdi mdi-heart-outline' />
																<span className='text'>Lưu việc làm</span>
															</a>
														</li>
													</ul>
													<div className='time'>
														{' '}
														<em className='mdi mdi-calendar' />
														<time>16-01-2023</time>
														<div className='toolip'>
															<p>Ngày cập nhật</p>
														</div>
													</div>
												</div>
											</div>
										</div>
									</div>
									<div className='job-item ' id='job-item-35BB3D5C'>
										<div className='figure'>
											<div className='image'>
												<a
													href='https://careerbuilder.vn/vi/nha-tuyen-dung/ngan-hang-tmcp-phuong-dong-ocb.35A5022A.html'
													target='_blank'
													title='Ngân Hàng TMCP Phương Đông - OCB'
													rel='noreferrer'>
													<img
														className='lazy-img'
														src='https://images.careerbuilder.vn/employers/6442/155x155/112123logo-ocb.png'
														alt='Ngân Hàng TMCP Phương Đông - OCB'
														style={{}}
													/>
												</a>
											</div>
											<div className='figcaption'>
												<div className='title '>
													<h2>
														<a
															className='job_link'
															data-id='35BB3D5C'
															href='https://careerbuilder.vn/vi/tim-viec-lam/cvcc-cv-thuc-day-chi-tieu-the-phu-trach-chuong-trinh-uu-dai-the-hoac-lien-ket-doi-tac.35BB3D5C.html'
															target='_blank'
															title='CVCC/ CV Thúc đẩy chi tiêu thẻ - Phụ trách chương trình ưu đãi thẻ hoặc liên kết đối tác'
															rel='noreferrer'>
															CVCC/ CV Thúc đẩy chi tiêu thẻ - Phụ trách chương trình ưu đãi thẻ hoặc
															liên kết đối tác
															<span className='new'>
																<font color='ff0000'>(Mới)</font>
															</span>{' '}
														</a>
													</h2>
												</div>
												<div className='caption'>
													<a
														className='company-name'
														target='_blank'
														href='https://careerbuilder.vn/vi/nha-tuyen-dung/ngan-hang-tmcp-phuong-dong-ocb.35A5022A.html'
														title='Ngân Hàng TMCP Phương Đông - OCB'
														rel='noreferrer'>
														Ngân Hàng TMCP Phương Đông - OCB
													</a>
													<a
														className='job_link'
														data-id='35BB3D5C'
														href='https://careerbuilder.vn/vi/tim-viec-lam/cvcc-cv-thuc-day-chi-tieu-the-phu-trach-chuong-trinh-uu-dai-the-hoac-lien-ket-doi-tac.35BB3D5C.html'
														target='_blank'
														title='CVCC/ CV Thúc đẩy chi tiêu thẻ - Phụ trách chương trình ưu đãi thẻ hoặc liên kết đối tác'
														rel='noreferrer'>
														<div className='salary'>
															<p>
																<em className='fa fa-usd' />
																Lương: Cạnh tranh
															</p>
														</div>
														<div className='location'>
															<em className='mdi mdi-map-marker' />
															<ul>
																<li>Hồ Chí Minh</li>
															</ul>
														</div>
													</a>
												</div>
												<div className='bottom-right-icon'>
													<ul>
														<li>
															<a
																className='toollips save-job chk_save_35BB3D5C '
																href=''
																data-id='35BB3D5C'
																onClick='popuplogin()'>
																<i className='mdi mdi-heart-outline' />
																<span className='text'>Lưu việc làm</span>
															</a>
														</li>
													</ul>
													<div className='time'>
														{' '}
														<em className='mdi mdi-calendar' />
														<time>16-01-2023</time>
														<div className='toolip'>
															<p>Ngày cập nhật</p>
														</div>
													</div>
												</div>
											</div>
										</div>
									</div>
									<div className='job-item ' id='job-item-35BB3D5B'>
										<div className='figure'>
											<div className='image'>
												<a
													href='https://careerbuilder.vn/vi/nha-tuyen-dung/cong-ty-cp-thanh-thanh-cong-bien-hoa.35A7FCC0.html'
													target='_blank'
													title='Công ty CP Thành Thành Công - Biên Hòa'
													rel='noreferrer'>
													<img
														className='lazy-img'
														src='https://images.careerbuilder.vn/employer_folders/lot4/201664/155x155/90931untitled-1.png'
														alt='Công ty CP Thành Thành Công - Biên Hòa'
														style={{}}
													/>
												</a>
											</div>
											<div className='figcaption'>
												<div className='title '>
													<h2>
														<a
															className='job_link'
															data-id='35BB3D5B'
															href='https://careerbuilder.vn/vi/tim-viec-lam/nhan-vien-kinh-doanh.35BB3D5B.html'
															target='_blank'
															title='Nhân viên Kinh doanh'
															rel='noreferrer'>
															Nhân viên Kinh doanh
															<span className='new'>
																<font color='ff0000'>(Mới)</font>
															</span>{' '}
														</a>
													</h2>
												</div>
												<div className='caption'>
													<a
														className='company-name'
														target='_blank'
														href='https://careerbuilder.vn/vi/nha-tuyen-dung/cong-ty-cp-thanh-thanh-cong-bien-hoa.35A7FCC0.html'
														title='Công ty CP Thành Thành Công - Biên Hòa'
														rel='noreferrer'>
														Công ty CP Thành Thành Công - Biên Hòa
													</a>
													<a
														className='job_link'
														data-id='35BB3D5B'
														href='https://careerbuilder.vn/vi/tim-viec-lam/nhan-vien-kinh-doanh.35BB3D5B.html'
														target='_blank'
														title='Nhân viên Kinh doanh'
														rel='noreferrer'>
														<div className='salary'>
															<p>
																<em className='fa fa-usd' />
																Lương: Cạnh tranh
															</p>
														</div>
														<div className='location'>
															<em className='mdi mdi-map-marker' />
															<ul>
																<li>An Giang</li>
																<li> Tây Ninh</li>
																<li> Gia Lai</li>
															</ul>
														</div>
														<ul className='welfare'>
															<li>
																<span className='fa fa-medkit' />
																Chế độ bảo hiểm
															</li>
															<li>
																<span className='fa fa-plane' />
																Du Lịch
															</li>
															<li>
																<span className='fa fa-usd' />
																Chế độ thưởng
															</li>
														</ul>
													</a>
												</div>
												<div className='bottom-right-icon'>
													<ul>
														<li>
															<a
																className='toollips save-job chk_save_35BB3D5B '
																href=''
																data-id='35BB3D5B'
																onClick='popuplogin()'>
																<i className='mdi mdi-heart-outline' />
																<span className='text'>Lưu việc làm</span>
															</a>
														</li>
													</ul>
													<div className='time'>
														{' '}
														<em className='mdi mdi-calendar' />
														<time>16-01-2023</time>
														<div className='toolip'>
															<p>Ngày cập nhật</p>
														</div>
													</div>
												</div>
											</div>
										</div>
									</div>
									<div className='job-item ' id='job-item-35BB3D5A'>
										<div className='figure'>
											<div className='image'>
												<a
													href='https://careerbuilder.vn/vi/nha-tuyen-dung/cong-ty-sua-dau-nanh-viet-nam-vinasoy.35A6067E.html'
													target='_blank'
													title='Công Ty Sữa Đậu Nành Việt Nam - Vinasoy '
													rel='noreferrer'>
													<img
														className='lazy-img'
														data-src='https://images.careerbuilder.vn/employers/73086/155x155/151253logovinasoycorp&slogan(vi)-01.png'
														src='../kiemviecv32/images/graphics/blank.gif'
														alt='Công Ty Sữa Đậu Nành Việt Nam - Vinasoy '
													/>
												</a>
											</div>
											<div className='figcaption'>
												<div className='title '>
													<h2>
														<a
															className='job_link'
															data-id='35BB3D5A'
															href='https://careerbuilder.vn/vi/tim-viec-lam/ky-thuat-vien-van-hanh-thiet-bi-luong-khoi-diem-8-trieu-thang-nha-may-sua-dau-nanh-vinasoy-bac-ninh.35BB3D5A.html'
															target='_blank'
															title='Kỹ Thuật Viên Vận Hành Thiết Bị - Lương Khởi Điểm 8 Triệu / Tháng - Nhà Máy Sữa Đậu Nành Vinasoy Bắc Ninh'
															rel='noreferrer'>
															Kỹ Thuật Viên Vận Hành Thiết Bị - Lương Khởi Điểm 8 Triệu / Tháng - Nhà Máy
															Sữa Đậu Nành Vinasoy Bắc Ninh
															<span className='new'>
																<font color='ff0000'>(Mới)</font>
															</span>{' '}
														</a>
													</h2>
												</div>
												<div className='caption'>
													<a
														className='company-name'
														target='_blank'
														href='https://careerbuilder.vn/vi/nha-tuyen-dung/cong-ty-sua-dau-nanh-viet-nam-vinasoy.35A6067E.html'
														title='Công Ty Sữa Đậu Nành Việt Nam - Vinasoy '
														rel='noreferrer'>
														Công Ty Sữa Đậu Nành Việt Nam - Vinasoy{' '}
													</a>
													<a
														className='job_link'
														data-id='35BB3D5A'
														href='https://careerbuilder.vn/vi/tim-viec-lam/ky-thuat-vien-van-hanh-thiet-bi-luong-khoi-diem-8-trieu-thang-nha-may-sua-dau-nanh-vinasoy-bac-ninh.35BB3D5A.html'
														target='_blank'
														title='Kỹ Thuật Viên Vận Hành Thiết Bị - Lương Khởi Điểm 8 Triệu / Tháng - Nhà Máy Sữa Đậu Nành Vinasoy Bắc Ninh'
														rel='noreferrer'>
														<div className='salary'>
															<p>
																<em className='fa fa-usd' />
																Lương: Cạnh tranh
															</p>
														</div>
														<div className='location'>
															<em className='mdi mdi-map-marker' />
															<ul>
																<li>Bắc Ninh</li>
															</ul>
														</div>
														<ul className='welfare'>
															<li>
																<span className='fa fa-medkit' />
																Chế độ bảo hiểm
															</li>
															<li>
																<span className='fa fa-plane' />
																Du Lịch
															</li>
															<li>
																<span className='fa fa-money' />
																Phụ cấp
															</li>
														</ul>
													</a>
												</div>
												<div className='bottom-right-icon'>
													<ul>
														<li>
															<a
																className='toollips save-job chk_save_35BB3D5A '
																href=''
																data-id='35BB3D5A'
																onClick='popuplogin()'>
																<i className='mdi mdi-heart-outline' />
																<span className='text'>Lưu việc làm</span>
															</a>
														</li>
													</ul>
													<div className='time'>
														{' '}
														<em className='mdi mdi-calendar' />
														<time>16-01-2023</time>
														<div className='toolip'>
															<p>Ngày cập nhật</p>
														</div>
													</div>
												</div>
											</div>
										</div>
									</div>
									<div className='job-item ' id='job-item-35BB3D59'>
										<div className='figure'>
											<div className='image'>
												<a
													href='https://careerbuilder.vn/vi/nha-tuyen-dung/ngan-hang-tmcp-phuong-dong-ocb.35A5022A.html'
													target='_blank'
													title='Ngân Hàng TMCP Phương Đông - OCB'
													rel='noreferrer'>
													<img
														className='lazy-img'
														data-src='https://images.careerbuilder.vn/employers/6442/155x155/112123logo-ocb.png'
														src='../kiemviecv32/images/graphics/blank.gif'
														alt='Ngân Hàng TMCP Phương Đông - OCB'
													/>
												</a>
											</div>
											<div className='figcaption'>
												<div className='title '>
													<h2>
														<a
															className='job_link'
															data-id='35BB3D59'
															href='https://careerbuilder.vn/vi/tim-viec-lam/truong-bo-phan-kiem-soat-giao-dich-the.35BB3D59.html'
															target='_blank'
															title='Trưởng bộ phận Kiểm soát giao dịch thẻ'
															rel='noreferrer'>
															Trưởng bộ phận Kiểm soát giao dịch thẻ
															<span className='new'>
																<font color='ff0000'>(Mới)</font>
															</span>{' '}
														</a>
													</h2>
												</div>
												<div className='caption'>
													<a
														className='company-name'
														target='_blank'
														href='https://careerbuilder.vn/vi/nha-tuyen-dung/ngan-hang-tmcp-phuong-dong-ocb.35A5022A.html'
														title='Ngân Hàng TMCP Phương Đông - OCB'
														rel='noreferrer'>
														Ngân Hàng TMCP Phương Đông - OCB
													</a>
													<a
														className='job_link'
														data-id='35BB3D59'
														href='https://careerbuilder.vn/vi/tim-viec-lam/truong-bo-phan-kiem-soat-giao-dich-the.35BB3D59.html'
														target='_blank'
														title='Trưởng bộ phận Kiểm soát giao dịch thẻ'
														rel='noreferrer'>
														<div className='salary'>
															<p>
																<em className='fa fa-usd' />
																Lương: Cạnh tranh
															</p>
														</div>
														<div className='location'>
															<em className='mdi mdi-map-marker' />
															<ul>
																<li>Hồ Chí Minh</li>
															</ul>
														</div>
													</a>
												</div>
												<div className='bottom-right-icon'>
													<ul>
														<li>
															<a
																className='toollips save-job chk_save_35BB3D59 '
																href=''
																data-id='35BB3D59'
																onClick='popuplogin()'>
																<i className='mdi mdi-heart-outline' />
																<span className='text'>Lưu việc làm</span>
															</a>
														</li>
													</ul>
													<div className='time'>
														{' '}
														<em className='mdi mdi-calendar' />
														<time>16-01-2023</time>
														<div className='toolip'>
															<p>Ngày cập nhật</p>
														</div>
													</div>
												</div>
											</div>
										</div>
									</div>
									<div className='job-item ' id='job-item-35BB3D57'>
										<div className='figure'>
											<div className='image'>
												<a
													href='https://careerbuilder.vn/vi/nha-tuyen-dung/cong-ty-sua-dau-nanh-viet-nam-vinasoy.35A6067E.html'
													target='_blank'
													title='Công Ty Sữa Đậu Nành Việt Nam - Vinasoy '
													rel='noreferrer'>
													<img
														className='lazy-img'
														data-src='https://images.careerbuilder.vn/employers/73086/155x155/151253logovinasoycorp&slogan(vi)-01.png'
														src='../kiemviecv32/images/graphics/blank.gif'
														alt='Công Ty Sữa Đậu Nành Việt Nam - Vinasoy '
													/>
												</a>
											</div>
											<div className='figcaption'>
												<div className='title '>
													<h2>
														<a
															className='job_link'
															data-id='35BB3D57'
															href='https://careerbuilder.vn/vi/tim-viec-lam/nhan-vien-kiem-soat-chat-luong-qc-nha-may-sua-dau-nanh-vinasoy-bac-ninh.35BB3D57.html'
															target='_blank'
															title='Nhân Viên Kiểm Soát Chất Lượng (QC) - Nhà Máy Sữa Đậu Nành Vinasoy Bắc Ninh'
															rel='noreferrer'>
															Nhân Viên Kiểm Soát Chất Lượng (QC) - Nhà Máy Sữa Đậu Nành Vinasoy Bắc Ninh
															<span className='new'>
																<font color='ff0000'>(Mới)</font>
															</span>{' '}
														</a>
													</h2>
												</div>
												<div className='caption'>
													<a
														className='company-name'
														target='_blank'
														href='https://careerbuilder.vn/vi/nha-tuyen-dung/cong-ty-sua-dau-nanh-viet-nam-vinasoy.35A6067E.html'
														title='Công Ty Sữa Đậu Nành Việt Nam - Vinasoy '
														rel='noreferrer'>
														Công Ty Sữa Đậu Nành Việt Nam - Vinasoy{' '}
													</a>
													<a
														className='job_link'
														data-id='35BB3D57'
														href='https://careerbuilder.vn/vi/tim-viec-lam/nhan-vien-kiem-soat-chat-luong-qc-nha-may-sua-dau-nanh-vinasoy-bac-ninh.35BB3D57.html'
														target='_blank'
														title='Nhân Viên Kiểm Soát Chất Lượng (QC) - Nhà Máy Sữa Đậu Nành Vinasoy Bắc Ninh'
														rel='noreferrer'>
														<div className='salary'>
															<p>
																<em className='fa fa-usd' />
																Lương: Cạnh tranh
															</p>
														</div>
														<div className='location'>
															<em className='mdi mdi-map-marker' />
															<ul>
																<li>Bắc Ninh</li>
															</ul>
														</div>
														<ul className='welfare'>
															<li>
																<span className='fa fa-medkit' />
																Chế độ bảo hiểm
															</li>
															<li>
																<span className='fa fa-plane' />
																Du Lịch
															</li>
															<li>
																<span className='fa fa-taxi' />
																Xe đưa đón
															</li>
														</ul>
													</a>
												</div>
												<div className='bottom-right-icon'>
													<ul>
														<li>
															<a
																className='toollips save-job chk_save_35BB3D57 '
																href=''
																data-id='35BB3D57'
																onClick='popuplogin()'>
																<i className='mdi mdi-heart-outline' />
																<span className='text'>Lưu việc làm</span>
															</a>
														</li>
													</ul>
													<div className='time'>
														{' '}
														<em className='mdi mdi-calendar' />
														<time>16-01-2023</time>
														<div className='toolip'>
															<p>Ngày cập nhật</p>
														</div>
													</div>
												</div>
											</div>
										</div>
									</div>
									<div className='job-item ' id='job-item-35BB3D55'>
										<div className='figure'>
											<div className='image'>
												<a
													href='https://careerbuilder.vn/vi/nha-tuyen-dung/cong-ty-tnhh-tham-my-quoc-te-linh-anh.35A8F78C.html'
													target='_blank'
													title='CÔNG TY TNHH THẨM MỸ QUỐC TẾ LINH ANH'
													rel='noreferrer'>
													<img
														className='lazy-img'
														data-src='https://images.careerbuilder.vn/employer_folders/lot8/265868/155x155/172429logolinhanh.jpg'
														src='../kiemviecv32/images/graphics/blank.gif'
														alt='CÔNG TY TNHH THẨM MỸ QUỐC TẾ LINH ANH'
													/>
												</a>
											</div>
											<div className='figcaption'>
												<div className='title '>
													<h2>
														<a
															className='job_link'
															data-id='35BB3D55'
															href='https://careerbuilder.vn/vi/tim-viec-lam/nhan-vien-cham-soc-khach-hang.35BB3D55.html'
															target='_blank'
															title='Nhân viên chăm sóc khách hàng'
															rel='noreferrer'>
															Nhân viên chăm sóc khách hàng
															<span className='new'>
																<font color='ff0000'>(Mới)</font>
															</span>{' '}
														</a>
													</h2>
												</div>
												<div className='caption'>
													<a
														className='company-name'
														target='_blank'
														href='https://careerbuilder.vn/vi/nha-tuyen-dung/cong-ty-tnhh-tham-my-quoc-te-linh-anh.35A8F78C.html'
														title='CÔNG TY TNHH THẨM MỸ QUỐC TẾ LINH ANH'
														rel='noreferrer'>
														CÔNG TY TNHH THẨM MỸ QUỐC TẾ LINH ANH
													</a>
													<a
														className='job_link'
														data-id='35BB3D55'
														href='https://careerbuilder.vn/vi/tim-viec-lam/nhan-vien-cham-soc-khach-hang.35BB3D55.html'
														target='_blank'
														title='Nhân viên chăm sóc khách hàng'
														rel='noreferrer'>
														<div className='salary'>
															<p>
																<em className='fa fa-usd' />
																Lương: 12 Tr - 15 Tr VND
															</p>
														</div>
														<div className='location'>
															<em className='mdi mdi-map-marker' />
															<ul>
																<li>Hồ Chí Minh</li>
															</ul>
														</div>
														<ul className='welfare'>
															<li>
																<span className='fa fa-medkit' />
																Chế độ bảo hiểm
															</li>
															<li>
																<span className='fa fa-plane' />
																Du Lịch
															</li>
															<li>
																<span className='fa fa-usd' />
																Chế độ thưởng
															</li>
														</ul>
													</a>
												</div>
												<div className='bottom-right-icon'>
													<ul>
														<li>
															<a
																className='toollips save-job chk_save_35BB3D55 '
																href=''
																data-id='35BB3D55'
																onClick='popuplogin()'>
																<i className='mdi mdi-heart-outline' />
																<span className='text'>Lưu việc làm</span>
															</a>
														</li>
													</ul>
													<div className='time'>
														{' '}
														<em className='mdi mdi-calendar' />
														<time>16-01-2023</time>
														<div className='toolip'>
															<p>Ngày cập nhật</p>
														</div>
													</div>
												</div>
											</div>
										</div>
									</div>
									<div className='job-item ' id='job-item-35BB3D54'>
										<div className='figure'>
											<div className='image'>
												<a
													href='https://careerbuilder.vn/vi/nha-tuyen-dung/cong-ty-sua-dau-nanh-viet-nam-vinasoy.35A6067E.html'
													target='_blank'
													title='Công Ty Sữa Đậu Nành Việt Nam - Vinasoy '
													rel='noreferrer'>
													<img
														className='lazy-img'
														data-src='https://images.careerbuilder.vn/employers/73086/155x155/151253logovinasoycorp&slogan(vi)-01.png'
														src='../kiemviecv32/images/graphics/blank.gif'
														alt='Công Ty Sữa Đậu Nành Việt Nam - Vinasoy '
													/>
												</a>
											</div>
											<div className='figcaption'>
												<div className='title '>
													<h2>
														<a
															className='job_link'
															data-id='35BB3D54'
															href='https://careerbuilder.vn/vi/tim-viec-lam/ky-su-phu-trach-thiet-bi-dien-tu-dong-hoa-nha-may-sua-dau-nanh-vinasoy-bac-ninh.35BB3D54.html'
															target='_blank'
															title='Kỹ Sư Phụ Trách Thiết Bị Điện, Tự Động Hóa - Nhà Máy Sữa Đậu Nành Vinasoy Bắc Ninh'
															rel='noreferrer'>
															Kỹ Sư Phụ Trách Thiết Bị Điện, Tự Động Hóa - Nhà Máy Sữa Đậu Nành Vinasoy
															Bắc Ninh
															<span className='new'>
																<font color='ff0000'>(Mới)</font>
															</span>{' '}
														</a>
													</h2>
												</div>
												<div className='caption'>
													<a
														className='company-name'
														target='_blank'
														href='https://careerbuilder.vn/vi/nha-tuyen-dung/cong-ty-sua-dau-nanh-viet-nam-vinasoy.35A6067E.html'
														title='Công Ty Sữa Đậu Nành Việt Nam - Vinasoy '
														rel='noreferrer'>
														Công Ty Sữa Đậu Nành Việt Nam - Vinasoy{' '}
													</a>
													<a
														className='job_link'
														data-id='35BB3D54'
														href='https://careerbuilder.vn/vi/tim-viec-lam/ky-su-phu-trach-thiet-bi-dien-tu-dong-hoa-nha-may-sua-dau-nanh-vinasoy-bac-ninh.35BB3D54.html'
														target='_blank'
														title='Kỹ Sư Phụ Trách Thiết Bị Điện, Tự Động Hóa - Nhà Máy Sữa Đậu Nành Vinasoy Bắc Ninh'
														rel='noreferrer'>
														<div className='salary'>
															<p>
																<em className='fa fa-usd' />
																Lương: Cạnh tranh
															</p>
														</div>
														<div className='location'>
															<em className='mdi mdi-map-marker' />
															<ul>
																<li>Bắc Ninh</li>
															</ul>
														</div>
														<ul className='welfare'>
															<li>
																<span className='fa fa-medkit' />
																Chế độ bảo hiểm
															</li>
															<li>
																<span className='fa fa-plane' />
																Du Lịch
															</li>
															<li>
																<span className='fa fa-money' />
																Phụ cấp
															</li>
														</ul>
													</a>
												</div>
												<div className='bottom-right-icon'>
													<ul>
														<li>
															<a
																className='play-video'
																href='https://www.youtube.com/watch?v=fnyFAfalxZY&feature=youtu.be&t=11'
																data-fancybox=''>
																<i className='mdi mdi-play-circle-outline' />
																<span className='text'> Xem video</span>
															</a>
														</li>
														<li>
															<a
																className='toollips save-job chk_save_35BB3D54 '
																href=''
																data-id='35BB3D54'
																onClick='popuplogin()'>
																<i className='mdi mdi-heart-outline' />
																<span className='text'>Lưu việc làm</span>
															</a>
														</li>
													</ul>
													<div className='time'>
														{' '}
														<em className='mdi mdi-calendar' />
														<time>16-01-2023</time>
														<div className='toolip'>
															<p>Ngày cập nhật</p>
														</div>
													</div>
												</div>
											</div>
										</div>
									</div>
									<div className='job-item ' id='job-item-35BB3D53'>
										<div className='figure'>
											<div className='image'>
												<a
													href='https://careerbuilder.vn/vi/nha-tuyen-dung/cong-ty-quan-ly-no-va-khai-thac-tai-san-ngan-hang-tmcp-quan-doi.35A59298.html'
													target='_blank'
													title='Công Ty Quản Lý Nợ Và Khai Thác Tài Sản - Ngân Hàng TMCP Quân Đội'
													rel='noreferrer'>
													<img
														className='lazy-img'
														data-src='https://images.careerbuilder.vn/employers/43416/155x155/113211logo.png'
														src='../kiemviecv32/images/graphics/blank.gif'
														alt='Công Ty Quản Lý Nợ Và Khai Thác Tài Sản - Ngân Hàng TMCP Quân Đội'
													/>
												</a>
											</div>
											<div className='figcaption'>
												<div className='title '>
													<h2>
														<a
															className='job_link'
															data-id='35BB3D53'
															href='https://careerbuilder.vn/vi/tim-viec-lam/chuyen-vien-tien-luong-va-dai-ngo.35BB3D53.html'
															target='_blank'
															title='Chuyên viên Tiền lương và Đãi ngộ'
															rel='noreferrer'>
															Chuyên viên Tiền lương và Đãi ngộ
															<span className='new'>
																<font color='ff0000'>(Mới)</font>
															</span>{' '}
														</a>
													</h2>
												</div>
												<div className='caption'>
													<a
														className='company-name'
														target='_blank'
														href='https://careerbuilder.vn/vi/nha-tuyen-dung/cong-ty-quan-ly-no-va-khai-thac-tai-san-ngan-hang-tmcp-quan-doi.35A59298.html'
														title='Công Ty Quản Lý Nợ Và Khai Thác Tài Sản - Ngân Hàng TMCP Quân Đội'
														rel='noreferrer'>
														Công Ty Quản Lý Nợ Và Khai Thác Tài Sản - Ngân Hàng TMCP Quân Đội
													</a>
													<a
														className='job_link'
														data-id='35BB3D53'
														href='https://careerbuilder.vn/vi/tim-viec-lam/chuyen-vien-tien-luong-va-dai-ngo.35BB3D53.html'
														target='_blank'
														title='Chuyên viên Tiền lương và Đãi ngộ'
														rel='noreferrer'>
														<div className='salary'>
															<p>
																<em className='fa fa-usd' />
																Lương: 13 Tr - 25 Tr VND
															</p>
														</div>
														<div className='location'>
															<em className='mdi mdi-map-marker' />
															<ul>
																<li>Hà Nội</li>
															</ul>
														</div>
														<ul className='welfare'>
															<li>
																<span className='fa fa-medkit' />
																Chế độ bảo hiểm
															</li>
															<li>
																<span className='fa fa-plane' />
																Du Lịch
															</li>
															<li>
																<span className='fa fa-usd' />
																Chế độ thưởng
															</li>
														</ul>
													</a>
												</div>
												<div className='bottom-right-icon'>
													<ul>
														<li>
															<a
																className='toollips save-job chk_save_35BB3D53 '
																href=''
																data-id='35BB3D53'
																onClick='popuplogin()'>
																<i className='mdi mdi-heart-outline' />
																<span className='text'>Lưu việc làm</span>
															</a>
														</li>
													</ul>
													<div className='time'>
														{' '}
														<em className='mdi mdi-calendar' />
														<time>16-01-2023</time>
														<div className='toolip'>
															<p>Ngày cập nhật</p>
														</div>
													</div>
												</div>
											</div>
										</div>
									</div>
									<div className='job-item ' id='job-item-35BB3D52'>
										<div className='figure'>
											<div className='image'>
												<a
													href='https://careerbuilder.vn/vi/nha-tuyen-dung/cong-ty-tnhh-tham-my-quoc-te-linh-anh.35A8F78C.html'
													target='_blank'
													title='CÔNG TY TNHH THẨM MỸ QUỐC TẾ LINH ANH'
													rel='noreferrer'>
													<img
														className='lazy-img'
														data-src='https://images.careerbuilder.vn/employer_folders/lot8/265868/155x155/172429logolinhanh.jpg'
														src='../kiemviecv32/images/graphics/blank.gif'
														alt='CÔNG TY TNHH THẨM MỸ QUỐC TẾ LINH ANH'
													/>
												</a>
											</div>
											<div className='figcaption'>
												<div className='title '>
													<h2>
														<a
															className='job_link'
															data-id='35BB3D52'
															href='https://careerbuilder.vn/vi/tim-viec-lam/nhan-vien-tu-van-tuyen-sinh.35BB3D52.html'
															target='_blank'
															title='Nhân viên tư vấn tuyển sinh'
															rel='noreferrer'>
															Nhân viên tư vấn tuyển sinh
															<span className='new'>
																<font color='ff0000'>(Mới)</font>
															</span>{' '}
														</a>
													</h2>
												</div>
												<div className='caption'>
													<a
														className='company-name'
														target='_blank'
														href='https://careerbuilder.vn/vi/nha-tuyen-dung/cong-ty-tnhh-tham-my-quoc-te-linh-anh.35A8F78C.html'
														title='CÔNG TY TNHH THẨM MỸ QUỐC TẾ LINH ANH'
														rel='noreferrer'>
														CÔNG TY TNHH THẨM MỸ QUỐC TẾ LINH ANH
													</a>
													<a
														className='job_link'
														data-id='35BB3D52'
														href='https://careerbuilder.vn/vi/tim-viec-lam/nhan-vien-tu-van-tuyen-sinh.35BB3D52.html'
														target='_blank'
														title='Nhân viên tư vấn tuyển sinh'
														rel='noreferrer'>
														<div className='salary'>
															<p>
																<em className='fa fa-usd' />
																Lương: 10 Tr - 18 Tr VND
															</p>
														</div>
														<div className='location'>
															<em className='mdi mdi-map-marker' />
															<ul>
																<li>Hồ Chí Minh</li>
															</ul>
														</div>
														<ul className='welfare'>
															<li>
																<span className='fa fa-medkit' />
																Chế độ bảo hiểm
															</li>
															<li>
																<span className='fa fa-plane' />
																Du Lịch
															</li>
															<li>
																<span className='fa fa-usd' />
																Chế độ thưởng
															</li>
														</ul>
													</a>
												</div>
												<div className='bottom-right-icon'>
													<ul>
														<li>
															<a
																className='toollips save-job chk_save_35BB3D52 '
																href=''
																data-id='35BB3D52'
																onClick='popuplogin()'>
																<i className='mdi mdi-heart-outline' />
																<span className='text'>Lưu việc làm</span>
															</a>
														</li>
													</ul>
													<div className='time'>
														{' '}
														<em className='mdi mdi-calendar' />
														<time>16-01-2023</time>
														<div className='toolip'>
															<p>Ngày cập nhật</p>
														</div>
													</div>
												</div>
											</div>
										</div>
									</div>
									<div className='job-item ' id='job-item-35BB3D50'>
										<div className='figure'>
											<div className='image'>
												<a
													href='https://careerbuilder.vn/vi/nha-tuyen-dung/hanoi-family-medical-practice.35A6A65C.html'
													target='_blank'
													title='Hanoi Family Medical Practice'
													rel='noreferrer'>
													<img
														className='lazy-img'
														data-src='https://static.careerbuilder.vn/themes/kiemviecv32/images/graphics/logo-default.png'
														src='../kiemviecv32/images/graphics/blank.gif'
														alt='Hanoi Family Medical Practice'
													/>
												</a>
											</div>
											<div className='figcaption'>
												<div className='title '>
													<h2>
														<a
															className='job_link'
															data-id='35BB3D50'
															href='https://careerbuilder.vn/vi/tim-viec-lam/hr-admin-officer.35BB3D50.html'
															target='_blank'
															title='HR & Admin Officer'
															rel='noreferrer'>
															HR &amp; Admin Officer
															<span className='new'>
																<font color='ff0000'>(Mới)</font>
															</span>{' '}
														</a>
													</h2>
												</div>
												<div className='caption'>
													<a
														className='company-name'
														target='_blank'
														href='https://careerbuilder.vn/vi/nha-tuyen-dung/hanoi-family-medical-practice.35A6A65C.html'
														title='Hanoi Family Medical Practice'
														rel='noreferrer'>
														Hanoi Family Medical Practice
													</a>
													<a
														className='job_link'
														data-id='35BB3D50'
														href='https://careerbuilder.vn/vi/tim-viec-lam/hr-admin-officer.35BB3D50.html'
														target='_blank'
														title='HR & Admin Officer'
														rel='noreferrer'>
														<div className='salary'>
															<p>
																<em className='fa fa-usd' />
																Lương: Trên 15 Tr VND
															</p>
														</div>
														<div className='location'>
															<em className='mdi mdi-map-marker' />
															<ul>
																<li>Hà Nội</li>
															</ul>
														</div>
														<ul className='welfare'>
															<li>
																<span className='fa fa-medkit' />
																Chế độ bảo hiểm
															</li>
															<li>
																<span className='fa fa-plane' />
																Du Lịch
															</li>
															<li>
																<span className='fa fa-usd' />
																Chế độ thưởng
															</li>
														</ul>
													</a>
												</div>
												<div className='bottom-right-icon'>
													<ul>
														<li>
															<a
																className='play-video'
																href='https://www.youtube.com/watch?v=awYz7RDDf9s'
																data-fancybox=''>
																<i className='mdi mdi-play-circle-outline' />
																<span className='text'> Xem video</span>
															</a>
														</li>
														<li>
															<a
																className='toollips save-job chk_save_35BB3D50 '
																href=''
																data-id='35BB3D50'
																onClick='popuplogin()'>
																<i className='mdi mdi-heart-outline' />
																<span className='text'>Lưu việc làm</span>
															</a>
														</li>
													</ul>
													<div className='time'>
														{' '}
														<em className='mdi mdi-calendar' />
														<time>16-01-2023</time>
														<div className='toolip'>
															<p>Ngày cập nhật</p>
														</div>
													</div>
												</div>
											</div>
										</div>
									</div>
									<div className='job-item ' id='job-item-35BB3D4C'>
										<div className='figure'>
											<div className='image'>
												<a
													href='https://careerbuilder.vn/vi/nha-tuyen-dung/fukushima-galilei-vietnam-company-limited.35A79A22.html'
													target='_blank'
													title='FUKUSHIMA GALILEI VIETNAM COMPANY LIMITED'
													rel='noreferrer'>
													<img
														className='lazy-img'
														data-src='https://images.careerbuilder.vn/employer_folders/lot8/176418/155x155/1055521.jpg'
														src='../kiemviecv32/images/graphics/blank.gif'
														alt='FUKUSHIMA GALILEI VIETNAM COMPANY LIMITED'
													/>
												</a>
											</div>
											<div className='figcaption'>
												<div className='title '>
													<h2>
														<a
															className='job_link'
															data-id='35BB3D4C'
															href='https://careerbuilder.vn/vi/tim-viec-lam/pho-giam-doc.35BB3D4C.html'
															target='_blank'
															title='Phó Giám Đốc'
															rel='noreferrer'>
															Phó Giám Đốc
															<span className='new'>
																<font color='ff0000'>(Mới)</font>
															</span>{' '}
														</a>
													</h2>
												</div>
												<div className='caption'>
													<a
														className='company-name'
														target='_blank'
														href='https://careerbuilder.vn/vi/nha-tuyen-dung/fukushima-galilei-vietnam-company-limited.35A79A22.html'
														title='FUKUSHIMA GALILEI VIETNAM COMPANY LIMITED'
														rel='noreferrer'>
														FUKUSHIMA GALILEI VIETNAM COMPANY LIMITED
													</a>
													<a
														className='job_link'
														data-id='35BB3D4C'
														href='https://careerbuilder.vn/vi/tim-viec-lam/pho-giam-doc.35BB3D4C.html'
														target='_blank'
														title='Phó Giám Đốc'
														rel='noreferrer'>
														<div className='salary'>
															<p>
																<em className='fa fa-usd' />
																Lương: Cạnh tranh
															</p>
														</div>
														<div className='location'>
															<em className='mdi mdi-map-marker' />
															<ul>
																<li>Hồ Chí Minh</li>
															</ul>
														</div>
														<ul className='welfare'>
															<li>
																<span className='fa fa-laptop' />
																Laptop
															</li>
															<li>
																<span className='fa fa-medkit' />
																Chế độ bảo hiểm
															</li>
															<li>
																<span className='fa fa-plane' />
																Du Lịch
															</li>
														</ul>
													</a>
												</div>
												<div className='bottom-right-icon'>
													<ul>
														<li>
															<a
																className='toollips save-job chk_save_35BB3D4C '
																href=''
																data-id='35BB3D4C'
																onClick='popuplogin()'>
																<i className='mdi mdi-heart-outline' />
																<span className='text'>Lưu việc làm</span>
															</a>
														</li>
													</ul>
													<div className='time'>
														{' '}
														<em className='mdi mdi-calendar' />
														<time>16-01-2023</time>
														<div className='toolip'>
															<p>Ngày cập nhật</p>
														</div>
													</div>
												</div>
											</div>
										</div>
									</div>
									<div className='job-item ' id='job-item-35BB3D4F'>
										<div className='figure'>
											<div className='image'>
												<a
													href='https://careerbuilder.vn/vi/nha-tuyen-dung/benh-vien-da-khoa-quoc-te-dolife.35A7FA0F.html'
													target='_blank'
													title='BỆNH VIỆN ĐA KHOA QUỐC TẾ DOLIFE'
													rel='noreferrer'>
													<img
														className='lazy-img'
														data-src='https://images.careerbuilder.vn/employer_folders/lot5/200975/155x155/105059download-15.png'
														src='../kiemviecv32/images/graphics/blank.gif'
														alt='BỆNH VIỆN ĐA KHOA QUỐC TẾ DOLIFE'
													/>
												</a>
											</div>
											<div className='figcaption'>
												<div className='title '>
													<h2>
														<a
															className='job_link'
															data-id='35BB3D4F'
															href='https://careerbuilder.vn/vi/tim-viec-lam/truong-phong-van-hanh.35BB3D4F.html'
															target='_blank'
															title='Trưởng Phòng Vận Hành'
															rel='noreferrer'>
															Trưởng Phòng Vận Hành
															<span className='new'>
																<font color='ff0000'>(Mới)</font>
															</span>{' '}
														</a>
													</h2>
												</div>
												<div className='caption'>
													<a
														className='company-name'
														target='_blank'
														href='https://careerbuilder.vn/vi/nha-tuyen-dung/benh-vien-da-khoa-quoc-te-dolife.35A7FA0F.html'
														title='BỆNH VIỆN ĐA KHOA QUỐC TẾ DOLIFE'
														rel='noreferrer'>
														BỆNH VIỆN ĐA KHOA QUỐC TẾ DOLIFE
													</a>
													<a
														className='job_link'
														data-id='35BB3D4F'
														href='https://careerbuilder.vn/vi/tim-viec-lam/truong-phong-van-hanh.35BB3D4F.html'
														target='_blank'
														title='Trưởng Phòng Vận Hành'
														rel='noreferrer'>
														<div className='salary'>
															<p>
																<em className='fa fa-usd' />
																Lương: 15 Tr - 25 Tr VND
															</p>
														</div>
														<div className='location'>
															<em className='mdi mdi-map-marker' />
															<ul>
																<li>Hà Nội</li>
															</ul>
														</div>
														<ul className='welfare'>
															<li>
																<span className='fa fa-medkit' />
																Chế độ bảo hiểm
															</li>
															<li>
																<span className='fa fa-usd' />
																Chế độ thưởng
															</li>
															<li>
																<span className='fa fa-user-md' />
																Chăm sóc sức khỏe
															</li>
														</ul>
													</a>
												</div>
												<div className='bottom-right-icon'>
													<ul>
														<li>
															<a
																className='play-video'
																href='https://www.youtube.com/watch?v=HpABlb0AxqI&t=4s'
																data-fancybox=''>
																<i className='mdi mdi-play-circle-outline' />
																<span className='text'> Xem video</span>
															</a>
														</li>
														<li>
															<a
																className='toollips save-job chk_save_35BB3D4F '
																href=''
																data-id='35BB3D4F'
																onClick='popuplogin()'>
																<i className='mdi mdi-heart-outline' />
																<span className='text'>Lưu việc làm</span>
															</a>
														</li>
													</ul>
													<div className='time'>
														{' '}
														<em className='mdi mdi-calendar' />
														<time>16-01-2023</time>
														<div className='toolip'>
															<p>Ngày cập nhật</p>
														</div>
													</div>
												</div>
											</div>
										</div>
									</div>
									<div className='job-item ' id='job-item-35BB3D4D'>
										<div className='figure'>
											<div className='image'>
												<a
													href='https://careerbuilder.vn/vi/nha-tuyen-dung/fpt-play.35A8CF49.html'
													target='_blank'
													title='FPT Play'
													rel='noreferrer'>
													<img
														className='lazy-img'
														data-src='https://images.careerbuilder.vn/employer_folders/lot1/255561/155x155/114116100334240.png'
														src='../kiemviecv32/images/graphics/blank.gif'
														alt='FPT Play'
													/>
												</a>
											</div>
											<div className='figcaption'>
												<div className='title '>
													<h2>
														<a
															className='job_link'
															data-id='35BB3D4D'
															href='https://careerbuilder.vn/vi/tim-viec-lam/frontend-developer-reactjs-fpt-play.35BB3D4D.html'
															target='_blank'
															title='Frontend Developer (ReactJS - FPT Play)'
															rel='noreferrer'>
															Frontend Developer (ReactJS - FPT Play)
															<span className='new'>
																<font color='ff0000'>(Mới)</font>
															</span>{' '}
														</a>
													</h2>
												</div>
												<div className='caption'>
													<a
														className='company-name'
														target='_blank'
														href='https://careerbuilder.vn/vi/nha-tuyen-dung/fpt-play.35A8CF49.html'
														title='FPT Play'
														rel='noreferrer'>
														FPT Play
													</a>
													<a
														className='job_link'
														data-id='35BB3D4D'
														href='https://careerbuilder.vn/vi/tim-viec-lam/frontend-developer-reactjs-fpt-play.35BB3D4D.html'
														target='_blank'
														title='Frontend Developer (ReactJS - FPT Play)'
														rel='noreferrer'>
														<div className='salary'>
															<p>
																<em className='fa fa-usd' />
																Lương: Cạnh tranh
															</p>
														</div>
														<div className='location'>
															<em className='mdi mdi-map-marker' />
															<ul>
																<li>Hồ Chí Minh</li>
															</ul>
														</div>
														<ul className='welfare'>
															<li>
																<span className='fa fa-laptop' />
																Laptop
															</li>
															<li>
																<span className='fa fa-medkit' />
																Chế độ bảo hiểm
															</li>
															<li>
																<span className='fa fa-plane' />
																Du Lịch
															</li>
														</ul>
													</a>
												</div>
												<div className='bottom-right-icon'>
													<ul>
														<li>
															<a
																className='play-video'
																href='https://www.youtube.com/watch?v=t--XieyX_Xc'
																data-fancybox=''>
																<i className='mdi mdi-play-circle-outline' />
																<span className='text'> Xem video</span>
															</a>
														</li>
														<li>
															<a
																className='toollips save-job chk_save_35BB3D4D '
																href=''
																data-id='35BB3D4D'
																onClick='popuplogin()'>
																<i className='mdi mdi-heart-outline' />
																<span className='text'>Lưu việc làm</span>
															</a>
														</li>
													</ul>
													<div className='time'>
														{' '}
														<em className='mdi mdi-calendar' />
														<time>16-01-2023</time>
														<div className='toolip'>
															<p>Ngày cập nhật</p>
														</div>
													</div>
												</div>
											</div>
										</div>
									</div>
									<div className='job-item ' id='job-item-35BB3D4B'>
										<div className='figure'>
											<div className='image'>
												<a
													href='https://careerbuilder.vn/vi/nha-tuyen-dung/coca-cola-vietnam.35A4FE5F.html'
													target='_blank'
													title='Coca-Cola Vietnam'
													rel='noreferrer'>
													<img
														className='lazy-img'
														data-src='https://images.careerbuilder.vn/employers/5471/155x155/153006logococa.png'
														src='../kiemviecv32/images/graphics/blank.gif'
														alt='Coca-Cola Vietnam'
													/>
												</a>
											</div>
											<div className='figcaption'>
												<div className='title '>
													<h2>
														<a
															className='job_link'
															data-id='35BB3D4B'
															href='https://careerbuilder.vn/vi/tim-viec-lam/giam-sat-ban-hang-tp-vung-tau.35BB3D4B.html'
															target='_blank'
															title='Giám Sát Bán Hàng - TP. Vũng Tàu'
															rel='noreferrer'>
															Giám Sát Bán Hàng - TP. Vũng Tàu
															<span className='new'>
																<font color='ff0000'>(Mới)</font>
															</span>{' '}
														</a>
													</h2>
												</div>
												<div className='caption'>
													<a
														className='company-name'
														target='_blank'
														href='https://careerbuilder.vn/vi/nha-tuyen-dung/coca-cola-vietnam.35A4FE5F.html'
														title='Coca-Cola Vietnam'
														rel='noreferrer'>
														Coca-Cola Vietnam
													</a>
													<a
														className='job_link'
														data-id='35BB3D4B'
														href='https://careerbuilder.vn/vi/tim-viec-lam/giam-sat-ban-hang-tp-vung-tau.35BB3D4B.html'
														target='_blank'
														title='Giám Sát Bán Hàng - TP. Vũng Tàu'
														rel='noreferrer'>
														<div className='salary'>
															<p>
																<em className='fa fa-usd' />
																Lương: Cạnh tranh
															</p>
														</div>
														<div className='location'>
															<em className='mdi mdi-map-marker' />
															<ul>
																<li>Bà Rịa - Vũng Tàu</li>
															</ul>
														</div>
														<ul className='welfare'>
															<li>
																<span className='fa fa-medkit' />
																Chế độ bảo hiểm
															</li>
															<li>
																<span className='fa fa-plane' />
																Du Lịch
															</li>
															<li>
																<span className='fa fa-money' />
																Phụ cấp
															</li>
														</ul>
													</a>
												</div>
												<div className='bottom-right-icon'>
													<ul>
														<li>
															<a
																className='play-video'
																href='https://www.youtube.com/watch?v=4VR9Iemy8SM'
																data-fancybox=''>
																<i className='mdi mdi-play-circle-outline' />
																<span className='text'> Xem video</span>
															</a>
														</li>
														<li>
															<a
																className='toollips save-job chk_save_35BB3D4B '
																href=''
																data-id='35BB3D4B'
																onClick='popuplogin()'>
																<i className='mdi mdi-heart-outline' />
																<span className='text'>Lưu việc làm</span>
															</a>
														</li>
													</ul>
													<div className='time'>
														{' '}
														<em className='mdi mdi-calendar' />
														<time>16-01-2023</time>
														<div className='toolip'>
															<p>Ngày cập nhật</p>
														</div>
													</div>
												</div>
											</div>
										</div>
									</div>
									<div className='job-item ' id='job-item-35BB3D4A'>
										<div className='figure'>
											<div className='image'>
												<a
													href='https://careerbuilder.vn/vi/nha-tuyen-dung/cong-ty-quan-ly-no-va-khai-thac-tai-san-ngan-hang-tmcp-quan-doi.35A59298.html'
													target='_blank'
													title='Công Ty Quản Lý Nợ Và Khai Thác Tài Sản - Ngân Hàng TMCP Quân Đội'
													rel='noreferrer'>
													<img
														className='lazy-img'
														data-src='https://images.careerbuilder.vn/employers/43416/155x155/113211logo.png'
														src='../kiemviecv32/images/graphics/blank.gif'
														alt='Công Ty Quản Lý Nợ Và Khai Thác Tài Sản - Ngân Hàng TMCP Quân Đội'
													/>
												</a>
											</div>
											<div className='figcaption'>
												<div className='title '>
													<h2>
														<a
															className='job_link'
															data-id='35BB3D4A'
															href='https://careerbuilder.vn/vi/tim-viec-lam/chuyen-vien-cao-cap-tai-chinh-ke-hoach.35BB3D4A.html'
															target='_blank'
															title='Chuyên viên cao cấp tài chính - kế hoạch'
															rel='noreferrer'>
															Chuyên viên cao cấp tài chính - kế hoạch
															<span className='new'>
																<font color='ff0000'>(Mới)</font>
															</span>{' '}
														</a>
													</h2>
												</div>
												<div className='caption'>
													<a
														className='company-name'
														target='_blank'
														href='https://careerbuilder.vn/vi/nha-tuyen-dung/cong-ty-quan-ly-no-va-khai-thac-tai-san-ngan-hang-tmcp-quan-doi.35A59298.html'
														title='Công Ty Quản Lý Nợ Và Khai Thác Tài Sản - Ngân Hàng TMCP Quân Đội'
														rel='noreferrer'>
														Công Ty Quản Lý Nợ Và Khai Thác Tài Sản - Ngân Hàng TMCP Quân Đội
													</a>
													<a
														className='job_link'
														data-id='35BB3D4A'
														href='https://careerbuilder.vn/vi/tim-viec-lam/chuyen-vien-cao-cap-tai-chinh-ke-hoach.35BB3D4A.html'
														target='_blank'
														title='Chuyên viên cao cấp tài chính - kế hoạch'
														rel='noreferrer'>
														<div className='salary'>
															<p>
																<em className='fa fa-usd' />
																Lương: 20 Tr - 35 Tr VND
															</p>
														</div>
														<div className='location'>
															<em className='mdi mdi-map-marker' />
															<ul>
																<li>Hà Nội</li>
															</ul>
														</div>
														<ul className='welfare'>
															<li>
																<span className='fa fa-medkit' />
																Chế độ bảo hiểm
															</li>
															<li>
																<span className='fa fa-plane' />
																Du Lịch
															</li>
															<li>
																<span className='fa fa-usd' />
																Chế độ thưởng
															</li>
														</ul>
													</a>
												</div>
												<div className='bottom-right-icon'>
													<ul>
														<li>
															<a
																className='toollips save-job chk_save_35BB3D4A '
																href=''
																data-id='35BB3D4A'
																onClick='popuplogin()'>
																<i className='mdi mdi-heart-outline' />
																<span className='text'>Lưu việc làm</span>
															</a>
														</li>
													</ul>
													<div className='time'>
														{' '}
														<em className='mdi mdi-calendar' />
														<time>16-01-2023</time>
														<div className='toolip'>
															<p>Ngày cập nhật</p>
														</div>
													</div>
												</div>
											</div>
										</div>
									</div>
									<div className='job-item ' id='job-item-35BB3D23'>
										<div className='figure'>
											<div className='image'>
												<a
													href='https://careerbuilder.vn/vi/nha-tuyen-dung/goldbell-equipment-co-ltd.35A6FE63.html'
													target='_blank'
													title='Goldbell Equipment Co., Ltd.'
													rel='noreferrer'>
													<img
														className='lazy-img'
														data-src='https://images.careerbuilder.vn/employer_folders/lot7/136547/155x155/102114logo.jpg'
														src='../kiemviecv32/images/graphics/blank.gif'
														alt='Goldbell Equipment Co., Ltd.'
													/>
												</a>
											</div>
											<div className='figcaption'>
												<div className='title '>
													<h2>
														<a
															className='job_link'
															data-id='35BB3D23'
															href='https://careerbuilder.vn/vi/tim-viec-lam/nhan-vien-xuat-nhap-khau.35BB3D23.html'
															target='_blank'
															title='Nhân Viên Xuất Nhập Khẩu'
															rel='noreferrer'>
															Nhân Viên Xuất Nhập Khẩu
															<span className='new'>
																<font color='ff0000'>(Mới)</font>
															</span>{' '}
														</a>
													</h2>
												</div>
												<div className='caption'>
													<a
														className='company-name'
														target='_blank'
														href='https://careerbuilder.vn/vi/nha-tuyen-dung/goldbell-equipment-co-ltd.35A6FE63.html'
														title='Goldbell Equipment Co., Ltd.'
														rel='noreferrer'>
														Goldbell Equipment Co., Ltd.
													</a>
													<a
														className='job_link'
														data-id='35BB3D23'
														href='https://careerbuilder.vn/vi/tim-viec-lam/nhan-vien-xuat-nhap-khau.35BB3D23.html'
														target='_blank'
														title='Nhân Viên Xuất Nhập Khẩu'
														rel='noreferrer'>
														<div className='salary'>
															<p>
																<em className='fa fa-usd' />
																Lương: Cạnh tranh
															</p>
														</div>
														<div className='location'>
															<em className='mdi mdi-map-marker' />
															<ul>
																<li>Hà Nội</li>
															</ul>
														</div>
														<ul className='welfare'>
															<li>
																<span className='fa fa-medkit' />
																Chế độ bảo hiểm
															</li>
															<li>
																<span className='fa fa-plane' />
																Du Lịch
															</li>
															<li>
																<span className='fa fa-usd' />
																Chế độ thưởng
															</li>
														</ul>
													</a>
												</div>
												<div className='bottom-right-icon'>
													<ul>
														<li>
															<a
																className='play-video'
																href='https://www.youtube.com/watch?v=lQi8zD9DYI0#action=share'
																data-fancybox=''>
																<i className='mdi mdi-play-circle-outline' />
																<span className='text'> Xem video</span>
															</a>
														</li>
														<li>
															<a
																className='toollips save-job chk_save_35BB3D23 '
																href=''
																data-id='35BB3D23'
																onClick='popuplogin()'>
																<i className='mdi mdi-heart-outline' />
																<span className='text'>Lưu việc làm</span>
															</a>
														</li>
													</ul>
													<div className='time'>
														{' '}
														<em className='mdi mdi-calendar' />
														<time>16-01-2023</time>
														<div className='toolip'>
															<p>Ngày cập nhật</p>
														</div>
													</div>
												</div>
											</div>
										</div>
									</div>
									<div className='job-item ' id='job-item-35BB3D47'>
										<div className='figure'>
											<div className='image'>
												<a
													href='https://careerbuilder.vn/vi/nha-tuyen-dung/cong-ty-tnhh-thai-corp-international-viet-nam.35A7ECD7.html'
													target='_blank'
													title='CÔNG TY TNHH THAI CORP INTERNATIONAL (VIỆT NAM)'
													rel='noreferrer'>
													<img
														className='lazy-img'
														data-src='https://images.careerbuilder.vn/employer_folders/lot1/197591/155x155/111210z3834860912615_1465f266f2125359075c6de8c1bfa764.jpg'
														src='../kiemviecv32/images/graphics/blank.gif'
														alt='CÔNG TY TNHH THAI CORP INTERNATIONAL (VIỆT NAM)'
													/>
												</a>
											</div>
											<div className='figcaption'>
												<div className='title '>
													<h2>
														<a
															className='job_link'
															data-id='35BB3D47'
															href='https://careerbuilder.vn/vi/tim-viec-lam/facilities-supervisor-english-required.35BB3D47.html'
															target='_blank'
															title='Facilities Supervisor (English Required!!!)'
															rel='noreferrer'>
															Facilities Supervisor (English Required!!!)
															<span className='new'>
																<font color='ff0000'>(Mới)</font>
															</span>{' '}
														</a>
													</h2>
												</div>
												<div className='caption'>
													<a
														className='company-name'
														target='_blank'
														href='https://careerbuilder.vn/vi/nha-tuyen-dung/cong-ty-tnhh-thai-corp-international-viet-nam.35A7ECD7.html'
														title='CÔNG TY TNHH THAI CORP INTERNATIONAL (VIỆT NAM)'
														rel='noreferrer'>
														CÔNG TY TNHH THAI CORP INTERNATIONAL (VIỆT NAM)
													</a>
													<a
														className='job_link'
														data-id='35BB3D47'
														href='https://careerbuilder.vn/vi/tim-viec-lam/facilities-supervisor-english-required.35BB3D47.html'
														target='_blank'
														title='Facilities Supervisor (English Required!!!)'
														rel='noreferrer'>
														<div className='salary'>
															<p>
																<em className='fa fa-usd' />
																Lương: Cạnh tranh
															</p>
														</div>
														<div className='location'>
															<em className='mdi mdi-map-marker' />
															<ul>
																<li>Hồ Chí Minh</li>
															</ul>
														</div>
														<ul className='welfare'>
															<li>
																<span className='fa fa-medkit' />
																Chế độ bảo hiểm
															</li>
															<li>
																<span className='fa fa-plane' />
																Du Lịch
															</li>
															<li>
																<span className='fa fa-black-tie' />
																Đồng phục
															</li>
														</ul>
													</a>
												</div>
												<div className='bottom-right-icon'>
													<ul>
														<li>
															<a
																className='toollips save-job chk_save_35BB3D47 '
																href=''
																data-id='35BB3D47'
																onClick='popuplogin()'>
																<i className='mdi mdi-heart-outline' />
																<span className='text'>Lưu việc làm</span>
															</a>
														</li>
													</ul>
													<div className='time'>
														{' '}
														<em className='mdi mdi-calendar' />
														<time>16-01-2023</time>
														<div className='toolip'>
															<p>Ngày cập nhật</p>
														</div>
													</div>
												</div>
											</div>
										</div>
									</div>
									<div className='job-item' id='job-item-35BB3D17'>
										<div className='figure'>
											<div className='image'>
												<a
													href='https://careerbuilder.vn/vi/nha-tuyen-dung/tyre-pacific-viet-nam-co-ltd.35A5C515.html'
													target='_blank'
													title='Tyre Pacific Viet Nam Co., Ltd.'
													rel='noreferrer'>
													<img
														className='lazy-img'
														src='../kiemviecv32/images/graphics/blank.gif'
														data-src='https://images.careerbuilder.vn/employers/56341/155x155/110840logo.png'
														alt='Tyre Pacific Viet Nam Co., Ltd.'
													/>
												</a>
											</div>
											<div className='figcaption'>
												<div className='title '>
													<h2>
														<a
															className='job_link'
															data-id='35BB3D17'
															href='https://careerbuilder.vn/vi/tim-viec-lam/sales-executive.35BB3D17.html'
															target='_blank'
															title='Sales Executive'
															rel='noreferrer'>
															Sales Executive
															<span className='new'>
																<font color='ff0000'>(Mới)</font>
															</span>
														</a>
													</h2>
												</div>
												<div className='caption'>
													<a
														className='company-name'
														target='_blank'
														href='https://careerbuilder.vn/vi/nha-tuyen-dung/tyre-pacific-viet-nam-co-ltd.35A5C515.html'
														title='Tyre Pacific Viet Nam Co., Ltd.'
														rel='noreferrer'>
														Tyre Pacific Viet Nam Co., Ltd.
													</a>
													<a
														className='job_link'
														data-id='35BB3D17'
														href='https://careerbuilder.vn/vi/tim-viec-lam/sales-executive.35BB3D17.html'
														target='_blank'
														title='Sales Executive'
														rel='noreferrer'>
														<div className='salary'>
															<p>
																<em className='fa fa-usd' />
																Lương: Cạnh Tranh
															</p>
														</div>
														<div className='location'>
															<em className='mdi mdi-map-marker' />
															<ul>
																<li>Hồ Chí Minh</li>
																<li> Hà Nội</li>
															</ul>
														</div>
														<ul className='welfare'>
															<li>
																<span className='fa fa-medkit' />
																Chế độ bảo hiểm
															</li>
															,
															<li>
																<span className='fa fa-plane' />
																Du Lịch
															</li>
														</ul>
													</a>
												</div>
												<div className='bottom-right-icon'>
													<ul>
														<li>
															<a
																className='toollips save-job chk_save_35BB3D17 '
																href=''
																data-id='35BB3D17'
																onClick='popuplogin()'>
																<i className='mdi mdi-heart-outline' />
																<span className='text'>Lưu việc làm</span>
															</a>
														</li>
													</ul>
													<div className='time'>
														{' '}
														<em className='mdi mdi-calendar' />
														<time>16-01-2023</time>
													</div>
												</div>
											</div>
										</div>
									</div>
									<div className='job-item' id='job-item-35BB3D18'>
										<div className='figure'>
											<div className='image'>
												<a
													href='https://careerbuilder.vn/vi/nha-tuyen-dung/tyre-pacific-viet-nam-co-ltd.35A5C515.html'
													target='_blank'
													title='Tyre Pacific Viet Nam Co., Ltd.'
													rel='noreferrer'>
													<img
														className='lazy-img'
														src='../kiemviecv32/images/graphics/blank.gif'
														data-src='https://images.careerbuilder.vn/employers/56341/155x155/110840logo.png'
														alt='Tyre Pacific Viet Nam Co., Ltd.'
													/>
												</a>
											</div>
											<div className='figcaption'>
												<div className='title '>
													<h2>
														<a
															className='job_link'
															data-id='35BB3D18'
															href='https://careerbuilder.vn/vi/tim-viec-lam/sales-manager-north.35BB3D18.html'
															target='_blank'
															title='Sales Manager (North)'
															rel='noreferrer'>
															Sales Manager (North)
															<span className='new'>
																<font color='ff0000'>(Mới)</font>
															</span>
														</a>
													</h2>
												</div>
												<div className='caption'>
													<a
														className='company-name'
														target='_blank'
														href='https://careerbuilder.vn/vi/nha-tuyen-dung/tyre-pacific-viet-nam-co-ltd.35A5C515.html'
														title='Tyre Pacific Viet Nam Co., Ltd.'
														rel='noreferrer'>
														Tyre Pacific Viet Nam Co., Ltd.
													</a>
													<a
														className='job_link'
														data-id='35BB3D18'
														href='https://careerbuilder.vn/vi/tim-viec-lam/sales-manager-north.35BB3D18.html'
														target='_blank'
														title='Sales Manager (North)'
														rel='noreferrer'>
														<div className='salary'>
															<p>
																<em className='fa fa-usd' />
																Lương: Cạnh Tranh
															</p>
														</div>
														<div className='location'>
															<em className='mdi mdi-map-marker' />
															<ul>
																<li>Hà Nội</li>
															</ul>
														</div>
														<ul className='welfare'>
															<li>
																<span className='fa fa-medkit' />
																Chế độ bảo hiểm
															</li>
															,
															<li>
																<span className='fa fa-plane' />
																Du Lịch
															</li>
														</ul>
													</a>
												</div>
												<div className='bottom-right-icon'>
													<ul>
														<li>
															<a
																className='toollips save-job chk_save_35BB3D18 '
																href=''
																data-id='35BB3D18'
																onClick='popuplogin()'>
																<i className='mdi mdi-heart-outline' />
																<span className='text'>Lưu việc làm</span>
															</a>
														</li>
													</ul>
													<div className='time'>
														{' '}
														<em className='mdi mdi-calendar' />
														<time>16-01-2023</time>
													</div>
												</div>
											</div>
										</div>
									</div>
									<div className='job-item' id='job-item-35BB3D46'>
										<div className='figure'>
											<div className='image'>
												<a
													href='https://careerbuilder.vn/vi/nha-tuyen-dung/cong-ty-tnhh-sx-tm-duoc-pham-tam-binh.35A6C98B.html'
													target='_blank'
													title='Công ty TNHH SX & TM Dược phẩm Tâm Bình'
													rel='noreferrer'>
													<img
														className='lazy-img'
														src='../kiemviecv32/images/graphics/blank.gif'
														data-src='https://images.careerbuilder.vn/employer_folders/lot9/123019/155x155/150651logo-tb-huan.gif'
														alt='Công ty TNHH SX & TM Dược phẩm Tâm Bình'
													/>
												</a>
											</div>
											<div className='figcaption'>
												<div className='title '>
													<h2>
														<a
															className='job_link'
															data-id='35BB3D46'
															href='https://careerbuilder.vn/vi/tim-viec-lam/pho-phong-truyen-thong-marketing-phu-trach-noi-dung.35BB3D46.html'
															target='_blank'
															title='Phó phòng Truyền thông & Marketing phụ trách nội dung'
															rel='noreferrer'>
															Phó phòng Truyền thông &amp; Marketing phụ trách nội dung
															<span className='new'>
																<font color='ff0000'>(Mới)</font>
															</span>
														</a>
													</h2>
												</div>
												<div className='caption'>
													<a
														className='company-name'
														target='_blank'
														href='https://careerbuilder.vn/vi/nha-tuyen-dung/cong-ty-tnhh-sx-tm-duoc-pham-tam-binh.35A6C98B.html'
														title='Công ty TNHH SX & TM Dược phẩm Tâm Bình'
														rel='noreferrer'>
														Công ty TNHH SX &amp; TM Dược phẩm Tâm Bình
													</a>
													<a
														className='job_link'
														data-id='35BB3D46'
														href='https://careerbuilder.vn/vi/tim-viec-lam/pho-phong-truyen-thong-marketing-phu-trach-noi-dung.35BB3D46.html'
														target='_blank'
														title='Phó phòng Truyền thông & Marketing phụ trách nội dung'
														rel='noreferrer'>
														<div className='salary'>
															<p>
																<em className='fa fa-usd' />
																Lương: 25 Tr - 30 Tr VND
															</p>
														</div>
														<div className='location'>
															<em className='mdi mdi-map-marker' />
															<ul>
																<li>Hà Nội</li>
															</ul>
														</div>
														<ul className='welfare'>
															<li>
																<span className='fa fa-laptop' />
																Laptop
															</li>
															,
															<li>
																<span className='fa fa-medkit' />
																Chế độ bảo hiểm
															</li>
														</ul>
													</a>
												</div>
												<div className='bottom-right-icon'>
													<ul>
														<li>
															<a
																className='play-video'
																href='https://www.youtube.com/watch?v=DdvG606jmSk'
																data-fancybox=''>
																<i className='mdi mdi-play-circle-outline' />
																<span className='text'>Xem video</span>
															</a>
														</li>
														<li>
															<a
																className='toollips save-job chk_save_35BB3D46 '
																href=''
																data-id='35BB3D46'
																onClick='popuplogin()'>
																<i className='mdi mdi-heart-outline' />
																<span className='text'>Lưu việc làm</span>
															</a>
														</li>
													</ul>
													<div className='time'>
														{' '}
														<em className='mdi mdi-calendar' />
														<time>16-01-2023</time>
													</div>
												</div>
											</div>
										</div>
									</div>
									<div className='job-item' id='job-item-35BB3D44'>
										<div className='figure'>
											<div className='image'>
												<a
													href='https://careerbuilder.vn/vi/nha-tuyen-dung/cong-ty-tnhh-sx-tm-duoc-pham-tam-binh.35A6C98B.html'
													target='_blank'
													title='Công ty TNHH SX & TM Dược phẩm Tâm Bình'
													rel='noreferrer'>
													<img
														className='lazy-img'
														src='../kiemviecv32/images/graphics/blank.gif'
														data-src='https://images.careerbuilder.vn/employer_folders/lot9/123019/155x155/150651logo-tb-huan.gif'
														alt='Công ty TNHH SX & TM Dược phẩm Tâm Bình'
													/>
												</a>
											</div>
											<div className='figcaption'>
												<div className='title '>
													<h2>
														<a
															className='job_link'
															data-id='35BB3D44'
															href='https://careerbuilder.vn/vi/tim-viec-lam/truong-phong-nghien-cuu-phat-trien-25-35-trieu.35BB3D44.html'
															target='_blank'
															title='Trưởng phòng Nghiên cứu phát triển (25-35 triệu)'
															rel='noreferrer'>
															Trưởng phòng Nghiên cứu phát triển (25-35 triệu)
															<span className='new'>
																<font color='ff0000'>(Mới)</font>
															</span>
														</a>
													</h2>
												</div>
												<div className='caption'>
													<a
														className='company-name'
														target='_blank'
														href='https://careerbuilder.vn/vi/nha-tuyen-dung/cong-ty-tnhh-sx-tm-duoc-pham-tam-binh.35A6C98B.html'
														title='Công ty TNHH SX & TM Dược phẩm Tâm Bình'
														rel='noreferrer'>
														Công ty TNHH SX &amp; TM Dược phẩm Tâm Bình
													</a>
													<a
														className='job_link'
														data-id='35BB3D44'
														href='https://careerbuilder.vn/vi/tim-viec-lam/truong-phong-nghien-cuu-phat-trien-25-35-trieu.35BB3D44.html'
														target='_blank'
														title='Trưởng phòng Nghiên cứu phát triển (25-35 triệu)'
														rel='noreferrer'>
														<div className='salary'>
															<p>
																<em className='fa fa-usd' />
																Lương: 25 Tr - 35 Tr VND
															</p>
														</div>
														<div className='location'>
															<em className='mdi mdi-map-marker' />
															<ul>
																<li>Hà Nội</li>
															</ul>
														</div>
														<ul className='welfare'>
															<li>
																<span className='fa fa-laptop' />
																Laptop
															</li>
															,
															<li>
																<span className='fa fa-medkit' />
																Chế độ bảo hiểm
															</li>
														</ul>
													</a>
												</div>
												<div className='bottom-right-icon'>
													<ul>
														<li>
															<a
																className='play-video'
																href='https://www.youtube.com/watch?v=DdvG606jmSk'
																data-fancybox=''>
																<i className='mdi mdi-play-circle-outline' />
																<span className='text'>Xem video</span>
															</a>
														</li>
														<li>
															<a
																className='toollips save-job chk_save_35BB3D44 '
																href=''
																data-id='35BB3D44'
																onClick='popuplogin()'>
																<i className='mdi mdi-heart-outline' />
																<span className='text'>Lưu việc làm</span>
															</a>
														</li>
													</ul>
													<div className='time'>
														{' '}
														<em className='mdi mdi-calendar' />
														<time>16-01-2023</time>
													</div>
												</div>
											</div>
										</div>
									</div>
									<div className='job-item' id='job-item-35BB3D43'>
										<div className='figure'>
											<div className='image'>
												<a
													href='https://careerbuilder.vn/vi/nha-tuyen-dung/careerbuilder-s-client.35A90091.html'
													target='_blank'
													title="CareerBuilder's Client"
													rel='noreferrer'>
													<img
														className='lazy-img'
														src='../kiemviecv32/images/graphics/blank.gif'
														data-src='https://static.careerbuilder.vn/themes/kiemviecv32/images/graphics/logo-default.png'
														alt="CareerBuilder's Client"
													/>
												</a>
											</div>
											<div className='figcaption'>
												<div className='title '>
													<h2>
														<a
															className='job_link'
															data-id='35BB3D43'
															href='https://careerbuilder.vn/vi/tim-viec-lam/hrga-staff-cho-cty-nhat-tai-kcn-yen-phong-bac-ninh-tu-tuc-di-lai.35BB3D43.html'
															target='_blank'
															title='HRGA Staff cho cty Nhật tại KCN Yên Phong - Bắc Ninh (tự túc đi lại)'
															rel='noreferrer'>
															HRGA Staff cho cty Nhật tại KCN Yên Phong - Bắc Ninh (tự túc đi lại)
															<span className='new'>
																<font color='ff0000'>(Mới)</font>
															</span>
														</a>
													</h2>
												</div>
												<div className='caption'>
													<a
														className='company-name'
														target='_blank'
														href='https://careerbuilder.vn/vi/nha-tuyen-dung/careerbuilder-s-client.35A90091.html'
														title="CareerBuilder's Client"
														rel='noreferrer'>
														CareerBuilder's Client
													</a>
													<a
														className='job_link'
														data-id='35BB3D43'
														href='https://careerbuilder.vn/vi/tim-viec-lam/hrga-staff-cho-cty-nhat-tai-kcn-yen-phong-bac-ninh-tu-tuc-di-lai.35BB3D43.html'
														target='_blank'
														title='HRGA Staff cho cty Nhật tại KCN Yên Phong - Bắc Ninh (tự túc đi lại)'
														rel='noreferrer'>
														<div className='salary'>
															<p>
																<em className='fa fa-usd' />
																Lương: Lên đến 22 Tr VND
															</p>
														</div>
														<div className='location'>
															<em className='mdi mdi-map-marker' />
															<ul>
																<li>Bắc Ninh</li>
															</ul>
														</div>
														<ul className='welfare'>
															<li>
																<span className='fa fa-medkit' />
																Chế độ bảo hiểm
															</li>
															,
															<li>
																<span className='fa fa-plane' />
																Du Lịch
															</li>
														</ul>
													</a>
												</div>
												<div className='bottom-right-icon'>
													<ul>
														<li>
															<a
																className='toollips save-job chk_save_35BB3D43 '
																href=''
																data-id='35BB3D43'
																onClick='popuplogin()'>
																<i className='mdi mdi-heart-outline' />
																<span className='text'>Lưu việc làm</span>
															</a>
														</li>
													</ul>
													<div className='time'>
														{' '}
														<em className='mdi mdi-calendar' />
														<time>16-01-2023</time>
													</div>
												</div>
											</div>
										</div>
									</div>
									<div className='job-item' id='job-item-35BB3D42'>
										<div className='figure'>
											<div className='image'>
												<a
													href='https://careerbuilder.vn/vi/nha-tuyen-dung/cong-ty-tnhh-sx-tm-duoc-pham-tam-binh.35A6C98B.html'
													target='_blank'
													title='Công ty TNHH SX & TM Dược phẩm Tâm Bình'
													rel='noreferrer'>
													<img
														className='lazy-img'
														src='../kiemviecv32/images/graphics/blank.gif'
														data-src='https://images.careerbuilder.vn/employer_folders/lot9/123019/155x155/150651logo-tb-huan.gif'
														alt='Công ty TNHH SX & TM Dược phẩm Tâm Bình'
													/>
												</a>
											</div>
											<div className='figcaption'>
												<div className='title '>
													<h2>
														<a
															className='job_link'
															data-id='35BB3D42'
															href='https://careerbuilder.vn/vi/tim-viec-lam/truong-phong-dam-bao-chat-luong-25-30-trieu.35BB3D42.html'
															target='_blank'
															title='Trưởng phòng Đảm bảo chất lượng (25-30 triệu)'
															rel='noreferrer'>
															Trưởng phòng Đảm bảo chất lượng (25-30 triệu)
															<span className='new'>
																<font color='ff0000'>(Mới)</font>
															</span>
														</a>
													</h2>
												</div>
												<div className='caption'>
													<a
														className='company-name'
														target='_blank'
														href='https://careerbuilder.vn/vi/nha-tuyen-dung/cong-ty-tnhh-sx-tm-duoc-pham-tam-binh.35A6C98B.html'
														title='Công ty TNHH SX & TM Dược phẩm Tâm Bình'
														rel='noreferrer'>
														Công ty TNHH SX &amp; TM Dược phẩm Tâm Bình
													</a>
													<a
														className='job_link'
														data-id='35BB3D42'
														href='https://careerbuilder.vn/vi/tim-viec-lam/truong-phong-dam-bao-chat-luong-25-30-trieu.35BB3D42.html'
														target='_blank'
														title='Trưởng phòng Đảm bảo chất lượng (25-30 triệu)'
														rel='noreferrer'>
														<div className='salary'>
															<p>
																<em className='fa fa-usd' />
																Lương: 25 Tr - 30 Tr VND
															</p>
														</div>
														<div className='location'>
															<em className='mdi mdi-map-marker' />
															<ul>
																<li>Hà Nội</li>
															</ul>
														</div>
														<ul className='welfare'>
															<li>
																<span className='fa fa-laptop' />
																Laptop
															</li>
															,
															<li>
																<span className='fa fa-medkit' />
																Chế độ bảo hiểm
															</li>
														</ul>
													</a>
												</div>
												<div className='bottom-right-icon'>
													<ul>
														<li>
															<a
																className='play-video'
																href='https://www.youtube.com/watch?v=DdvG606jmSk'
																data-fancybox=''>
																<i className='mdi mdi-play-circle-outline' />
																<span className='text'>Xem video</span>
															</a>
														</li>
														<li>
															<a
																className='toollips save-job chk_save_35BB3D42 '
																href=''
																data-id='35BB3D42'
																onClick='popuplogin()'>
																<i className='mdi mdi-heart-outline' />
																<span className='text'>Lưu việc làm</span>
															</a>
														</li>
													</ul>
													<div className='time'>
														{' '}
														<em className='mdi mdi-calendar' />
														<time>16-01-2023</time>
													</div>
												</div>
											</div>
										</div>
									</div>
									<div className='job-item' id='job-item-35BB3D40'>
										<div className='figure'>
											<div className='image'>
												<a
													href='https://careerbuilder.vn/vi/nha-tuyen-dung/ngan-hang-tmcp-quan-doi.35A66D70.html'
													target='_blank'
													title='Ngân Hàng TMCP Quân Đội'
													rel='noreferrer'>
													<img
														className='lazy-img'
														src='../kiemviecv32/images/graphics/blank.gif'
														data-src='https://images.careerbuilder.vn/employer_folders/lot0/99440/155x155/134506mb-logo-main-01.png'
														alt='Ngân Hàng TMCP Quân Đội'
													/>
												</a>
											</div>
											<div className='figcaption'>
												<div className='title '>
													<h2>
														<a
															className='job_link'
															data-id='35BB3D40'
															href='https://careerbuilder.vn/vi/tim-viec-lam/chuyen-vien-khach-hang-doanh-nghiep-sme-khu-vuc-da-nang.35BB3D40.html'
															target='_blank'
															title='Chuyên viên Khách hàng Doanh nghiệp (SME)  - Khu vực Đà Nẵng'
															rel='noreferrer'>
															Chuyên viên Khách hàng Doanh nghiệp (SME) - Khu vực Đà Nẵng
															<span className='new'>
																<font color='ff0000'>(Mới)</font>
															</span>
														</a>
													</h2>
												</div>
												<div className='caption'>
													<a
														className='company-name'
														target='_blank'
														href='https://careerbuilder.vn/vi/nha-tuyen-dung/ngan-hang-tmcp-quan-doi.35A66D70.html'
														title='Ngân Hàng TMCP Quân Đội'
														rel='noreferrer'>
														Ngân Hàng TMCP Quân Đội
													</a>
													<a
														className='job_link'
														data-id='35BB3D40'
														href='https://careerbuilder.vn/vi/tim-viec-lam/chuyen-vien-khach-hang-doanh-nghiep-sme-khu-vuc-da-nang.35BB3D40.html'
														target='_blank'
														title='Chuyên viên Khách hàng Doanh nghiệp (SME)  - Khu vực Đà Nẵng'
														rel='noreferrer'>
														<div className='salary'>
															<p>
																<em className='fa fa-usd' />
																Lương: Cạnh Tranh
															</p>
														</div>
														<div className='location'>
															<em className='mdi mdi-map-marker' />
															<ul>
																<li>Đà Nẵng</li>
															</ul>
														</div>
														<ul className='welfare'>
															<li>
																<span className='fa fa-medkit' />
																Chế độ bảo hiểm
															</li>
															,
															<li>
																<span className='fa fa-plane' />
																Du Lịch
															</li>
														</ul>
													</a>
												</div>
												<div className='bottom-right-icon'>
													<ul>
														<li>
															<a
																className='play-video'
																href='https://www.youtube.com/watch?v=HXpXgZWk-4g'
																data-fancybox=''>
																<i className='mdi mdi-play-circle-outline' />
																<span className='text'>Xem video</span>
															</a>
														</li>
														<li>
															<a
																className='toollips save-job chk_save_35BB3D40 '
																href=''
																data-id='35BB3D40'
																onClick='popuplogin()'>
																<i className='mdi mdi-heart-outline' />
																<span className='text'>Lưu việc làm</span>
															</a>
														</li>
													</ul>
													<div className='time'>
														{' '}
														<em className='mdi mdi-calendar' />
														<time>16-01-2023</time>
													</div>
												</div>
											</div>
										</div>
									</div>
									<div className='job-item' id='job-item-35BB3D3D'>
										<div className='figure'>
											<div className='image'>
												<a
													href='https://careerbuilder.vn/vi/nha-tuyen-dung/cong-ty-tnhh-gofingo-vietnam.35A86542.html'
													target='_blank'
													title='Công ty TNHH Gofingo Vietnam '
													rel='noreferrer'>
													<img
														className='lazy-img'
														src='../kiemviecv32/images/graphics/blank.gif'
														data-src='https://images.careerbuilder.vn/employer_folders/lot8/228418/155x155/162749gofingo_logo_1-thumb7.png'
														alt='Công ty TNHH Gofingo Vietnam '
													/>
												</a>
											</div>
											<div className='figcaption'>
												<div className='title '>
													<h2>
														<a
															className='job_link'
															data-id='35BB3D3D'
															href='https://careerbuilder.vn/vi/tim-viec-lam/general-accountant-fintech-industry.35BB3D3D.html'
															target='_blank'
															title='General Accountant (Fintech industry)'
															rel='noreferrer'>
															General Accountant (Fintech industry)
															<span className='new'>
																<font color='ff0000'>(Mới)</font>
															</span>
														</a>
													</h2>
												</div>
												<div className='caption'>
													<a
														className='company-name'
														target='_blank'
														href='https://careerbuilder.vn/vi/nha-tuyen-dung/cong-ty-tnhh-gofingo-vietnam.35A86542.html'
														title='Công ty TNHH Gofingo Vietnam '
														rel='noreferrer'>
														Công ty TNHH Gofingo Vietnam{' '}
													</a>
													<a
														className='job_link'
														data-id='35BB3D3D'
														href='https://careerbuilder.vn/vi/tim-viec-lam/general-accountant-fintech-industry.35BB3D3D.html'
														target='_blank'
														title='General Accountant (Fintech industry)'
														rel='noreferrer'>
														<div className='salary'>
															<p>
																<em className='fa fa-usd' />
																Lương: 20 Tr - 25 Tr VND
															</p>
														</div>
														<div className='location'>
															<em className='mdi mdi-map-marker' />
															<ul>
																<li>Hồ Chí Minh</li>
															</ul>
														</div>
														<ul className='welfare'>
															<li>
																<span className='fa fa-laptop' />
																Laptop
															</li>
															,
															<li>
																<span className='fa fa-medkit' />
																Chế độ bảo hiểm
															</li>
														</ul>
													</a>
												</div>
												<div className='bottom-right-icon'>
													<ul>
														<li>
															<a
																className='toollips save-job chk_save_35BB3D3D '
																href=''
																data-id='35BB3D3D'
																onClick='popuplogin()'>
																<i className='mdi mdi-heart-outline' />
																<span className='text'>Lưu việc làm</span>
															</a>
														</li>
													</ul>
													<div className='time'>
														{' '}
														<em className='mdi mdi-calendar' />
														<time>16-01-2023</time>
													</div>
												</div>
											</div>
										</div>
									</div>
									<div className='job-item' id='job-item-35BB3D3E'>
										<div className='figure'>
											<div className='image'>
												<a
													href='https://careerbuilder.vn/vi/nha-tuyen-dung/cong-ty-tnhh-reeracoen-viet-nam.35A7932C.html'
													target='_blank'
													title='Công Ty TNHH Reeracoen Việt Nam'
													rel='noreferrer'>
													<img
														className='lazy-img'
														src='../kiemviecv32/images/graphics/blank.gif'
														data-src='https://images.careerbuilder.vn/employer_folders/lot6/174636/155x155/121614reeracoenlogonobackground.png'
														alt='Công Ty TNHH Reeracoen Việt Nam'
													/>
												</a>
											</div>
											<div className='figcaption'>
												<div className='title '>
													<h2>
														<a
															className='job_link'
															data-id='35BB3D3E'
															href='https://careerbuilder.vn/vi/tim-viec-lam/hcm-sales-cum-admin-staff-n2-up-to-32-000-000-vnd-20701.35BB3D3E.html'
															target='_blank'
															title='[ HCM ] - Sales cum Admin staff (N2) - Up to 32,000,000 VND (20701)'
															rel='noreferrer'>
															[ HCM ] - Sales cum Admin staff (N2) - Up to 32,000,000 VND (20701)
															<span className='new'>
																<font color='ff0000'>(Mới)</font>
															</span>
														</a>
													</h2>
												</div>
												<div className='caption'>
													<a
														className='company-name'
														target='_blank'
														href='https://careerbuilder.vn/vi/nha-tuyen-dung/cong-ty-tnhh-reeracoen-viet-nam.35A7932C.html'
														title='Công Ty TNHH Reeracoen Việt Nam'
														rel='noreferrer'>
														Công Ty TNHH Reeracoen Việt Nam
													</a>
													<a
														className='job_link'
														data-id='35BB3D3E'
														href='https://careerbuilder.vn/vi/tim-viec-lam/hcm-sales-cum-admin-staff-n2-up-to-32-000-000-vnd-20701.35BB3D3E.html'
														target='_blank'
														title='[ HCM ] - Sales cum Admin staff (N2) - Up to 32,000,000 VND (20701)'
														rel='noreferrer'>
														<div className='salary'>
															<p>
																<em className='fa fa-usd' />
																Lương: 19 Tr - 32 Tr VND
															</p>
														</div>
														<div className='location'>
															<em className='mdi mdi-map-marker' />
															<ul>
																<li>Hồ Chí Minh</li>
															</ul>
														</div>
														<ul className='welfare'>
															<li>
																<span className='fa fa-laptop' />
																Laptop
															</li>
															,
															<li>
																<span className='fa fa-medkit' />
																Chế độ bảo hiểm
															</li>
														</ul>
													</a>
												</div>
												<div className='bottom-right-icon'>
													<ul>
														<li>
															<a
																className='toollips save-job chk_save_35BB3D3E '
																href=''
																data-id='35BB3D3E'
																onClick='popuplogin()'>
																<i className='mdi mdi-heart-outline' />
																<span className='text'>Lưu việc làm</span>
															</a>
														</li>
													</ul>
													<div className='time'>
														{' '}
														<em className='mdi mdi-calendar' />
														<time>16-01-2023</time>
													</div>
												</div>
											</div>
										</div>
									</div>
									<div className='job-item' id='job-item-35BB3CFE'>
										<div className='figure'>
											<div className='image'>
												<a
													href='https://careerbuilder.vn/vi/nha-tuyen-dung/truyen-hinh-fpt.35A8CF49.html'
													target='_blank'
													title='Truyền Hình FPT'
													rel='noreferrer'>
													<img
														className='lazy-img'
														src='../kiemviecv32/images/graphics/blank.gif'
														data-src='https://images.careerbuilder.vn/employer_folders/lot1/255561/155x155/114116100334240.png'
														alt='Truyền Hình FPT'
													/>
												</a>
											</div>
											<div className='figcaption'>
												<div className='title '>
													<h2>
														<a
															className='job_link'
															data-id='35BB3CFE'
															href='https://careerbuilder.vn/vi/tim-viec-lam/data-scientist.35BB3CFE.html'
															target='_blank'
															title='Data Scientist'
															rel='noreferrer'>
															Data Scientist
															<span className='new'>
																<font color='ff0000'>(Mới)</font>
															</span>
														</a>
													</h2>
												</div>
												<div className='caption'>
													<a
														className='company-name'
														target='_blank'
														href='https://careerbuilder.vn/vi/nha-tuyen-dung/truyen-hinh-fpt.35A8CF49.html'
														title='Truyền Hình FPT'
														rel='noreferrer'>
														Truyền Hình FPT
													</a>
													<a
														className='job_link'
														data-id='35BB3CFE'
														href='https://careerbuilder.vn/vi/tim-viec-lam/data-scientist.35BB3CFE.html'
														target='_blank'
														title='Data Scientist'
														rel='noreferrer'>
														<div className='salary'>
															<p>
																<em className='fa fa-usd' />
																Lương: Cạnh Tranh
															</p>
														</div>
														<div className='location'>
															<em className='mdi mdi-map-marker' />
															<ul>
																<li>Hồ Chí Minh</li>
															</ul>
														</div>
														<ul className='welfare'>
															<li>
																<span className='fa fa-laptop' />
																Laptop
															</li>
															,
															<li>
																<span className='fa fa-medkit' />
																Chế độ bảo hiểm
															</li>
														</ul>
													</a>
												</div>
												<div className='bottom-right-icon'>
													<ul>
														<li>
															<a
																className='play-video'
																href='https://www.youtube.com/watch?v=t--XieyX_Xc'
																data-fancybox=''>
																<i className='mdi mdi-play-circle-outline' />
																<span className='text'>Xem video</span>
															</a>
														</li>
														<li>
															<a
																className='toollips save-job chk_save_35BB3CFE '
																href=''
																data-id='35BB3CFE'
																onClick='popuplogin()'>
																<i className='mdi mdi-heart-outline' />
																<span className='text'>Lưu việc làm</span>
															</a>
														</li>
													</ul>
													<div className='time'>
														{' '}
														<em className='mdi mdi-calendar' />
														<time>16-01-2023</time>
													</div>
												</div>
											</div>
										</div>
									</div>
									<div className='job-item' id='job-item-35BB3D3B'>
										<div className='figure'>
											<div className='image'>
												<a
													href='https://careerbuilder.vn/vi/nha-tuyen-dung/fpt-telecom-chi-nhanh-cong-ty-co-phan-vien-thong-fpt.35A8CF49.html'
													target='_blank'
													title='FPT Telecom - Chi nhánh Công ty Cổ Phần Viễn Thông FPT'
													rel='noreferrer'>
													<img
														className='lazy-img'
														src='../kiemviecv32/images/graphics/blank.gif'
														data-src='https://images.careerbuilder.vn/employer_folders/lot1/255561/155x155/114116100334240.png'
														alt='FPT Telecom - Chi nhánh Công ty Cổ Phần Viễn Thông FPT'
													/>
												</a>
											</div>
											<div className='figcaption'>
												<div className='title '>
													<h2>
														<a
															className='job_link'
															data-id='35BB3D3B'
															href='https://careerbuilder.vn/vi/tim-viec-lam/international-sales-representative-b2b-hn.35BB3D3B.html'
															target='_blank'
															title='International Sales Representative (B2B) - HN'
															rel='noreferrer'>
															International Sales Representative (B2B) - HN
															<span className='new'>
																<font color='ff0000'>(Mới)</font>
															</span>
														</a>
													</h2>
												</div>
												<div className='caption'>
													<a
														className='company-name'
														target='_blank'
														href='https://careerbuilder.vn/vi/nha-tuyen-dung/fpt-telecom-chi-nhanh-cong-ty-co-phan-vien-thong-fpt.35A8CF49.html'
														title='FPT Telecom - Chi nhánh Công ty Cổ Phần Viễn Thông FPT'
														rel='noreferrer'>
														FPT Telecom - Chi nhánh Công ty Cổ Phần Viễn Thông FPT
													</a>
													<a
														className='job_link'
														data-id='35BB3D3B'
														href='https://careerbuilder.vn/vi/tim-viec-lam/international-sales-representative-b2b-hn.35BB3D3B.html'
														target='_blank'
														title='International Sales Representative (B2B) - HN'
														rel='noreferrer'>
														<div className='salary'>
															<p>
																<em className='fa fa-usd' />
																Lương: Cạnh Tranh
															</p>
														</div>
														<div className='location'>
															<em className='mdi mdi-map-marker' />
															<ul>
																<li>Hà Nội</li>
															</ul>
														</div>
														<ul className='welfare'>
															<li>
																<span className='fa fa-medkit' />
																Chế độ bảo hiểm
															</li>
															,
															<li>
																<span className='fa fa-plane' />
																Du Lịch
															</li>
														</ul>
													</a>
												</div>
												<div className='bottom-right-icon'>
													<ul>
														<li>
															<a
																className='play-video'
																href='https://www.youtube.com/watch?v=t--XieyX_Xc'
																data-fancybox=''>
																<i className='mdi mdi-play-circle-outline' />
																<span className='text'>Xem video</span>
															</a>
														</li>
														<li>
															<a
																className='toollips save-job chk_save_35BB3D3B '
																href=''
																data-id='35BB3D3B'
																onClick='popuplogin()'>
																<i className='mdi mdi-heart-outline' />
																<span className='text'>Lưu việc làm</span>
															</a>
														</li>
													</ul>
													<div className='time'>
														{' '}
														<em className='mdi mdi-calendar' />
														<time>16-01-2023</time>
													</div>
												</div>
											</div>
										</div>
									</div>
									<div className='job-item' id='job-item-35BB3D3A'>
										<div className='figure'>
											<div className='image'>
												<a
													href='https://careerbuilder.vn/vi/nha-tuyen-dung/ngan-hang-tmcp-quan-doi.35A66D70.html'
													target='_blank'
													title='Ngân Hàng TMCP Quân Đội'
													rel='noreferrer'>
													<img
														className='lazy-img'
														src='../kiemviecv32/images/graphics/blank.gif'
														data-src='https://images.careerbuilder.vn/employer_folders/lot0/99440/155x155/134506mb-logo-main-01.png'
														alt='Ngân Hàng TMCP Quân Đội'
													/>
												</a>
											</div>
											<div className='figcaption'>
												<div className='title '>
													<h2>
														<a
															className='job_link'
															data-id='35BB3D3A'
															href='https://careerbuilder.vn/vi/tim-viec-lam/chuyen-vien-khach-hang-doanh-nghiep-sme-kv-ha-noi.35BB3D3A.html'
															target='_blank'
															title='Chuyên viên Khách hàng Doanh nghiệp (SME) - KV Hà Nội'
															rel='noreferrer'>
															Chuyên viên Khách hàng Doanh nghiệp (SME) - KV Hà Nội
															<span className='new'>
																<font color='ff0000'>(Mới)</font>
															</span>
														</a>
													</h2>
												</div>
												<div className='caption'>
													<a
														className='company-name'
														target='_blank'
														href='https://careerbuilder.vn/vi/nha-tuyen-dung/ngan-hang-tmcp-quan-doi.35A66D70.html'
														title='Ngân Hàng TMCP Quân Đội'
														rel='noreferrer'>
														Ngân Hàng TMCP Quân Đội
													</a>
													<a
														className='job_link'
														data-id='35BB3D3A'
														href='https://careerbuilder.vn/vi/tim-viec-lam/chuyen-vien-khach-hang-doanh-nghiep-sme-kv-ha-noi.35BB3D3A.html'
														target='_blank'
														title='Chuyên viên Khách hàng Doanh nghiệp (SME) - KV Hà Nội'
														rel='noreferrer'>
														<div className='salary'>
															<p>
																<em className='fa fa-usd' />
																Lương: Cạnh Tranh
															</p>
														</div>
														<div className='location'>
															<em className='mdi mdi-map-marker' />
															<ul>
																<li>Hà Nội</li>
															</ul>
														</div>
														<ul className='welfare'>
															<li>
																<span className='fa fa-medkit' />
																Chế độ bảo hiểm
															</li>
															,
															<li>
																<span className='fa fa-plane' />
																Du Lịch
															</li>
														</ul>
													</a>
												</div>
												<div className='bottom-right-icon'>
													<ul>
														<li>
															<a
																className='play-video'
																href='https://www.youtube.com/watch?v=HXpXgZWk-4g'
																data-fancybox=''>
																<i className='mdi mdi-play-circle-outline' />
																<span className='text'>Xem video</span>
															</a>
														</li>
														<li>
															<a
																className='toollips save-job chk_save_35BB3D3A '
																href=''
																data-id='35BB3D3A'
																onClick='popuplogin()'>
																<i className='mdi mdi-heart-outline' />
																<span className='text'>Lưu việc làm</span>
															</a>
														</li>
													</ul>
													<div className='time'>
														{' '}
														<em className='mdi mdi-calendar' />
														<time>16-01-2023</time>
													</div>
												</div>
											</div>
										</div>
									</div>
									<div className='job-item' id='job-item-35BB3D39'>
										<div className='figure'>
											<div className='image'>
												<a
													href='https://careerbuilder.vn/vi/nha-tuyen-dung/cong-ty-tnhh-lectra-viet-nam.35A8EFD0.html'
													target='_blank'
													title='Công Ty TNHH Lectra Việt Nam'
													rel='noreferrer'>
													<img
														className='lazy-img'
														src='../kiemviecv32/images/graphics/blank.gif'
														data-src='https://images.careerbuilder.vn/employer_folders/lot8/263888/155x155/165503logo.png'
														alt='Công Ty TNHH Lectra Việt Nam'
													/>
												</a>
											</div>
											<div className='figcaption'>
												<div className='title  is-red'>
													<h2>
														<a
															className='job_link'
															data-id='35BB3D39'
															href='https://careerbuilder.vn/vi/tim-viec-lam/sales-coordinator.35BB3D39.html'
															target='_blank'
															title='Sales Coordinator'
															rel='noreferrer'>
															Sales Coordinator
															<span className='new'>
																<font color='ff0000'>(Mới)</font>
															</span>
														</a>
													</h2>
												</div>
												<div className='caption'>
													<a
														className='company-name'
														target='_blank'
														href='https://careerbuilder.vn/vi/nha-tuyen-dung/cong-ty-tnhh-lectra-viet-nam.35A8EFD0.html'
														title='Công Ty TNHH Lectra Việt Nam'
														rel='noreferrer'>
														Công Ty TNHH Lectra Việt Nam
													</a>
													<a
														className='job_link'
														data-id='35BB3D39'
														href='https://careerbuilder.vn/vi/tim-viec-lam/sales-coordinator.35BB3D39.html'
														target='_blank'
														title='Sales Coordinator'
														rel='noreferrer'>
														<div className='salary'>
															<p>
																<em className='fa fa-usd' />
																Lương: Cạnh Tranh
															</p>
														</div>
														<div className='location'>
															<em className='mdi mdi-map-marker' />
															<ul>
																<li>Hồ Chí Minh</li>
															</ul>
														</div>
														<ul className='welfare'>
															<li>
																<span className='fa fa-laptop' />
																Laptop
															</li>
															,
															<li>
																<span className='fa fa-medkit' />
																Chế độ bảo hiểm
															</li>
														</ul>
													</a>
												</div>
												<div className='bottom-right-icon'>
													<ul>
														<li>
															<a
																className='toollips save-job chk_save_35BB3D39 '
																href=''
																data-id='35BB3D39'
																onClick='popuplogin()'>
																<i className='mdi mdi-heart-outline' />
																<span className='text'>Lưu việc làm</span>
															</a>
														</li>
													</ul>
													<div className='time'>
														{' '}
														<em className='mdi mdi-calendar' />
														<time>16-01-2023</time>
													</div>
												</div>
											</div>
										</div>
									</div>
									<div className='job-item' id='job-item-35BB3D38'>
										<div className='figure'>
											<div className='image'>
												<a
													href='https://careerbuilder.vn/vi/nha-tuyen-dung/cong-ty-co-phan-dong-tam.35A4F126.html'
													target='_blank'
													title='Công Ty Cổ Phần Đồng Tâm'
													rel='noreferrer'>
													<img
														className='lazy-img'
														src='../kiemviecv32/images/graphics/blank.gif'
														data-src='https://images.careerbuilder.vn/employers/2086/155x155/152814z2868232729205_f2d45539d65614eccab3a2a2eb2b7728.jpg'
														alt='Công Ty Cổ Phần Đồng Tâm'
													/>
												</a>
											</div>
											<div className='figcaption'>
												<div className='title '>
													<h2>
														<a
															className='job_link'
															data-id='35BB3D38'
															href='https://careerbuilder.vn/vi/tim-viec-lam/chuyen-vien-phat-trien-phan-mem.35BB3D38.html'
															target='_blank'
															title='Chuyên Viên Phát Triển Phần Mềm'
															rel='noreferrer'>
															Chuyên Viên Phát Triển Phần Mềm
															<span className='new'>
																<font color='ff0000'>(Mới)</font>
															</span>
														</a>
													</h2>
												</div>
												<div className='caption'>
													<a
														className='company-name'
														target='_blank'
														href='https://careerbuilder.vn/vi/nha-tuyen-dung/cong-ty-co-phan-dong-tam.35A4F126.html'
														title='Công Ty Cổ Phần Đồng Tâm'
														rel='noreferrer'>
														Công Ty Cổ Phần Đồng Tâm
													</a>
													<a
														className='job_link'
														data-id='35BB3D38'
														href='https://careerbuilder.vn/vi/tim-viec-lam/chuyen-vien-phat-trien-phan-mem.35BB3D38.html'
														target='_blank'
														title='Chuyên Viên Phát Triển Phần Mềm'
														rel='noreferrer'>
														<div className='salary'>
															<p>
																<em className='fa fa-usd' />
																Lương: Cạnh Tranh
															</p>
														</div>
														<div className='location'>
															<em className='mdi mdi-map-marker' />
															<ul>
																<li>Long An</li>
															</ul>
														</div>
														<ul className='welfare'>
															<li>
																<span className='fa fa-laptop' />
																Laptop
															</li>
															,
															<li>
																<span className='fa fa-medkit' />
																Chế độ bảo hiểm
															</li>
														</ul>
													</a>
												</div>
												<div className='bottom-right-icon'>
													<ul>
														<li>
															<a
																className='play-video'
																href='https://www.youtube.com/watch?v=JN2CZymeE-Q'
																data-fancybox=''>
																<i className='mdi mdi-play-circle-outline' />
																<span className='text'>Xem video</span>
															</a>
														</li>
														<li>
															<a
																className='toollips save-job chk_save_35BB3D38 '
																href=''
																data-id='35BB3D38'
																onClick='popuplogin()'>
																<i className='mdi mdi-heart-outline' />
																<span className='text'>Lưu việc làm</span>
															</a>
														</li>
													</ul>
													<div className='time'>
														{' '}
														<em className='mdi mdi-calendar' />
														<time>16-01-2023</time>
													</div>
												</div>
											</div>
										</div>
									</div>
									<div className='job-item' id='job-item-35BB3D37'>
										<div className='figure'>
											<div className='image'>
												<a
													href='https://careerbuilder.vn/vi/nha-tuyen-dung/cong-ty-tai-chinh-tnhh-mb-shinsei-mcredit.35A78FCD.html'
													target='_blank'
													title='Công ty Tài chính TNHH MB SHINSEI (MCREDIT)'
													rel='noreferrer'>
													<img
														className='lazy-img'
														src='../kiemviecv32/images/graphics/blank.gif'
														data-src='https://images.careerbuilder.vn/employer_folders/lot3/173773/155x155/160149logopng_rgb_digitaluse_onwhitebg.png'
														alt='Công ty Tài chính TNHH MB SHINSEI (MCREDIT)'
													/>
												</a>
											</div>
											<div className='figcaption'>
												<div className='title '>
													<h2>
														<a
															className='job_link'
															data-id='35BB3D37'
															href='https://careerbuilder.vn/vi/tim-viec-lam/chuyen-vien-cao-cap-kiem-toan-it.35BB3D37.html'
															target='_blank'
															title='Chuyên viên cao cấp kiểm toán IT'
															rel='noreferrer'>
															Chuyên viên cao cấp kiểm toán IT
															<span className='new'>
																<font color='ff0000'>(Mới)</font>
															</span>
														</a>
													</h2>
												</div>
												<div className='caption'>
													<a
														className='company-name'
														target='_blank'
														href='https://careerbuilder.vn/vi/nha-tuyen-dung/cong-ty-tai-chinh-tnhh-mb-shinsei-mcredit.35A78FCD.html'
														title='Công ty Tài chính TNHH MB SHINSEI (MCREDIT)'
														rel='noreferrer'>
														Công ty Tài chính TNHH MB SHINSEI (MCREDIT)
													</a>
													<a
														className='job_link'
														data-id='35BB3D37'
														href='https://careerbuilder.vn/vi/tim-viec-lam/chuyen-vien-cao-cap-kiem-toan-it.35BB3D37.html'
														target='_blank'
														title='Chuyên viên cao cấp kiểm toán IT'
														rel='noreferrer'>
														<div className='salary'>
															<p>
																<em className='fa fa-usd' />
																Lương: Cạnh Tranh
															</p>
														</div>
														<div className='location'>
															<em className='mdi mdi-map-marker' />
															<ul>
																<li>Hà Nội</li>
															</ul>
														</div>
														<ul className='welfare'>
															<li>
																<span className='fa fa-medkit' />
																Chế độ bảo hiểm
															</li>
															,
															<li>
																<span className='fa fa-plane' />
																Du Lịch
															</li>
														</ul>
													</a>
												</div>
												<div className='bottom-right-icon'>
													<ul>
														<li>
															<a
																className='play-video'
																href='https://www.youtube.com/watch?v=s9WJQrkGOKA'
																data-fancybox=''>
																<i className='mdi mdi-play-circle-outline' />
																<span className='text'>Xem video</span>
															</a>
														</li>
														<li>
															<a
																className='toollips save-job chk_save_35BB3D37 '
																href=''
																data-id='35BB3D37'
																onClick='popuplogin()'>
																<i className='mdi mdi-heart-outline' />
																<span className='text'>Lưu việc làm</span>
															</a>
														</li>
													</ul>
													<div className='time'>
														{' '}
														<em className='mdi mdi-calendar' />
														<time>16-01-2023</time>
													</div>
												</div>
											</div>
										</div>
									</div>
									<div className='job-item' id='job-item-35BB3D35'>
										<div className='figure'>
											<div className='image'>
												<a
													href='https://careerbuilder.vn/vi/nha-tuyen-dung/cong-ty-tnhh-san-xuat-va-thuong-mai-snake-viet.35A92033.html'
													target='_blank'
													title='Công ty TNHH sản xuất và thương mại Snake Việt'
													rel='noreferrer'>
													<img
														className='lazy-img'
														src='../kiemviecv32/images/graphics/blank.gif'
														data-src='https://static.careerbuilder.vn/themes/kiemviecv32/images/graphics/logo-default.png'
														alt='Công ty TNHH sản xuất và thương mại Snake Việt'
													/>
												</a>
											</div>
											<div className='figcaption'>
												<div className='title '>
													<h2>
														<a
															className='job_link'
															data-id='35BB3D35'
															href='https://careerbuilder.vn/vi/tim-viec-lam/chuyen-vien-nhan-su.35BB3D35.html'
															target='_blank'
															title='Chuyên Viên Nhân Sự'
															rel='noreferrer'>
															Chuyên Viên Nhân Sự
															<span className='new'>
																<font color='ff0000'>(Mới)</font>
															</span>
														</a>
													</h2>
												</div>
												<div className='caption'>
													<a
														className='company-name'
														target='_blank'
														href='https://careerbuilder.vn/vi/nha-tuyen-dung/cong-ty-tnhh-san-xuat-va-thuong-mai-snake-viet.35A92033.html'
														title='Công ty TNHH sản xuất và thương mại Snake Việt'
														rel='noreferrer'>
														Công ty TNHH sản xuất và thương mại Snake Việt
													</a>
													<a
														className='job_link'
														data-id='35BB3D35'
														href='https://careerbuilder.vn/vi/tim-viec-lam/chuyen-vien-nhan-su.35BB3D35.html'
														target='_blank'
														title='Chuyên Viên Nhân Sự'
														rel='noreferrer'>
														<div className='salary'>
															<p>
																<em className='fa fa-usd' />
																Lương: Cạnh Tranh
															</p>
														</div>
														<div className='location'>
															<em className='mdi mdi-map-marker' />
															<ul>
																<li>Hà Nội</li>
															</ul>
														</div>
														<ul className='welfare'>
															<li>
																<span className='fa fa-medkit' />
																Chế độ bảo hiểm
															</li>
															,
															<li>
																<span className='fa fa-plane' />
																Du Lịch
															</li>
														</ul>
													</a>
												</div>
												<div className='bottom-right-icon'>
													<ul>
														<li>
															<a
																className='toollips save-job chk_save_35BB3D35 '
																href=''
																data-id='35BB3D35'
																onClick='popuplogin()'>
																<i className='mdi mdi-heart-outline' />
																<span className='text'>Lưu việc làm</span>
															</a>
														</li>
													</ul>
													<div className='time'>
														{' '}
														<em className='mdi mdi-calendar' />
														<time>16-01-2023</time>
													</div>
												</div>
											</div>
										</div>
									</div>
									<div className='job-item' id='job-item-35BB3D36'>
										<div className='figure'>
											<div className='image'>
												<a
													href='https://careerbuilder.vn/vi/nha-tuyen-dung/cong-ty-tnhh-reeracoen-viet-nam.35A7932C.html'
													target='_blank'
													title='Công Ty TNHH Reeracoen Việt Nam'
													rel='noreferrer'>
													<img
														className='lazy-img'
														src='../kiemviecv32/images/graphics/blank.gif'
														data-src='https://images.careerbuilder.vn/employer_folders/lot6/174636/155x155/121614reeracoenlogonobackground.png'
														alt='Công Ty TNHH Reeracoen Việt Nam'
													/>
												</a>
											</div>
											<div className='figcaption'>
												<div className='title '>
													<h2>
														<a
															className='job_link'
															data-id='35BB3D36'
															href='https://careerbuilder.vn/vi/tim-viec-lam/hcm-sales-staff-nha-kinh-nong-nghiep-up-to-16-000-000-vnd-22043.35BB3D36.html'
															target='_blank'
															title='[ HCM ] - Sales staff (Nhà kính nông nghiệp) - Up to 16,000,000 VND (22043)'
															rel='noreferrer'>
															[ HCM ] - Sales staff (Nhà kính nông nghiệp) - Up to 16,000,000 VND (22043)
															<span className='new'>
																<font color='ff0000'>(Mới)</font>
															</span>
														</a>
													</h2>
												</div>
												<div className='caption'>
													<a
														className='company-name'
														target='_blank'
														href='https://careerbuilder.vn/vi/nha-tuyen-dung/cong-ty-tnhh-reeracoen-viet-nam.35A7932C.html'
														title='Công Ty TNHH Reeracoen Việt Nam'
														rel='noreferrer'>
														Công Ty TNHH Reeracoen Việt Nam
													</a>
													<a
														className='job_link'
														data-id='35BB3D36'
														href='https://careerbuilder.vn/vi/tim-viec-lam/hcm-sales-staff-nha-kinh-nong-nghiep-up-to-16-000-000-vnd-22043.35BB3D36.html'
														target='_blank'
														title='[ HCM ] - Sales staff (Nhà kính nông nghiệp) - Up to 16,000,000 VND (22043)'
														rel='noreferrer'>
														<div className='salary'>
															<p>
																<em className='fa fa-usd' />
																Lương: 12 Tr - 16 Tr VND
															</p>
														</div>
														<div className='location'>
															<em className='mdi mdi-map-marker' />
															<ul>
																<li>Hồ Chí Minh</li>
															</ul>
														</div>
														<ul className='welfare'>
															<li>
																<span className='fa fa-medkit' />
																Chế độ bảo hiểm
															</li>
															,
															<li>
																<span className='fa fa-money' />
																Phụ cấp
															</li>
														</ul>
													</a>
												</div>
												<div className='bottom-right-icon'>
													<ul>
														<li>
															<a
																className='toollips save-job chk_save_35BB3D36 '
																href=''
																data-id='35BB3D36'
																onClick='popuplogin()'>
																<i className='mdi mdi-heart-outline' />
																<span className='text'>Lưu việc làm</span>
															</a>
														</li>
													</ul>
													<div className='time'>
														{' '}
														<em className='mdi mdi-calendar' />
														<time>16-01-2023</time>
													</div>
												</div>
											</div>
										</div>
									</div>
									<div className='job-item' id='job-item-35BB3D34'>
										<div className='figure'>
											<div className='image'>
												<a
													href='https://careerbuilder.vn/vi/nha-tuyen-dung/cong-ty-tnhh-san-xuat-va-thuong-mai-snake-viet.35A92033.html'
													target='_blank'
													title='Công ty TNHH sản xuất và thương mại Snake Việt'
													rel='noreferrer'>
													<img
														className='lazy-img'
														src='../kiemviecv32/images/graphics/blank.gif'
														data-src='https://static.careerbuilder.vn/themes/kiemviecv32/images/graphics/logo-default.png'
														alt='Công ty TNHH sản xuất và thương mại Snake Việt'
													/>
												</a>
											</div>
											<div className='figcaption'>
												<div className='title '>
													<h2>
														<a
															className='job_link'
															data-id='35BB3D34'
															href='https://careerbuilder.vn/vi/tim-viec-lam/nhan-vien-marketing.35BB3D34.html'
															target='_blank'
															title='Nhân Viên Marketing'
															rel='noreferrer'>
															Nhân Viên Marketing
															<span className='new'>
																<font color='ff0000'>(Mới)</font>
															</span>
														</a>
													</h2>
												</div>
												<div className='caption'>
													<a
														className='company-name'
														target='_blank'
														href='https://careerbuilder.vn/vi/nha-tuyen-dung/cong-ty-tnhh-san-xuat-va-thuong-mai-snake-viet.35A92033.html'
														title='Công ty TNHH sản xuất và thương mại Snake Việt'
														rel='noreferrer'>
														Công ty TNHH sản xuất và thương mại Snake Việt
													</a>
													<a
														className='job_link'
														data-id='35BB3D34'
														href='https://careerbuilder.vn/vi/tim-viec-lam/nhan-vien-marketing.35BB3D34.html'
														target='_blank'
														title='Nhân Viên Marketing'
														rel='noreferrer'>
														<div className='salary'>
															<p>
																<em className='fa fa-usd' />
																Lương: Cạnh Tranh
															</p>
														</div>
														<div className='location'>
															<em className='mdi mdi-map-marker' />
															<ul>
																<li>Hà Nội</li>
															</ul>
														</div>
														<ul className='welfare'>
															<li>
																<span className='fa fa-medkit' />
																Chế độ bảo hiểm
															</li>
															,
															<li>
																<span className='fa fa-plane' />
																Du Lịch
															</li>
														</ul>
													</a>
												</div>
												<div className='bottom-right-icon'>
													<ul>
														<li>
															<a
																className='toollips save-job chk_save_35BB3D34 '
																href=''
																data-id='35BB3D34'
																onClick='popuplogin()'>
																<i className='mdi mdi-heart-outline' />
																<span className='text'>Lưu việc làm</span>
															</a>
														</li>
													</ul>
													<div className='time'>
														{' '}
														<em className='mdi mdi-calendar' />
														<time>16-01-2023</time>
													</div>
												</div>
											</div>
										</div>
									</div>
									<div className='job-item' id='job-item-35BB3D30'>
										<div className='figure'>
											<div className='image'>
												<a
													href='https://careerbuilder.vn/vi/nha-tuyen-dung/cong-ty-tnhh-san-xuat-va-thuong-mai-snake-viet.35A92033.html'
													target='_blank'
													title='Công ty TNHH sản xuất và thương mại Snake Việt'
													rel='noreferrer'>
													<img
														className='lazy-img'
														src='../kiemviecv32/images/graphics/blank.gif'
														data-src='https://static.careerbuilder.vn/themes/kiemviecv32/images/graphics/logo-default.png'
														alt='Công ty TNHH sản xuất và thương mại Snake Việt'
													/>
												</a>
											</div>
											<div className='figcaption'>
												<div className='title '>
													<h2>
														<a
															className='job_link'
															data-id='35BB3D30'
															href='https://careerbuilder.vn/vi/tim-viec-lam/truong-kenh-ban-le.35BB3D30.html'
															target='_blank'
															title='Trưởng Kênh Bán Lẻ'
															rel='noreferrer'>
															Trưởng Kênh Bán Lẻ
															<span className='new'>
																<font color='ff0000'>(Mới)</font>
															</span>
														</a>
													</h2>
												</div>
												<div className='caption'>
													<a
														className='company-name'
														target='_blank'
														href='https://careerbuilder.vn/vi/nha-tuyen-dung/cong-ty-tnhh-san-xuat-va-thuong-mai-snake-viet.35A92033.html'
														title='Công ty TNHH sản xuất và thương mại Snake Việt'
														rel='noreferrer'>
														Công ty TNHH sản xuất và thương mại Snake Việt
													</a>
													<a
														className='job_link'
														data-id='35BB3D30'
														href='https://careerbuilder.vn/vi/tim-viec-lam/truong-kenh-ban-le.35BB3D30.html'
														target='_blank'
														title='Trưởng Kênh Bán Lẻ'
														rel='noreferrer'>
														<div className='salary'>
															<p>
																<em className='fa fa-usd' />
																Lương: Cạnh Tranh
															</p>
														</div>
														<div className='location'>
															<em className='mdi mdi-map-marker' />
															<ul>
																<li>Hà Nội</li>
															</ul>
														</div>
														<ul className='welfare'>
															<li>
																<span className='fa fa-medkit' />
																Chế độ bảo hiểm
															</li>
															,
															<li>
																<span className='fa fa-plane' />
																Du Lịch
															</li>
														</ul>
													</a>
												</div>
												<div className='bottom-right-icon'>
													<ul>
														<li>
															<a
																className='toollips save-job chk_save_35BB3D30 '
																href=''
																data-id='35BB3D30'
																onClick='popuplogin()'>
																<i className='mdi mdi-heart-outline' />
																<span className='text'>Lưu việc làm</span>
															</a>
														</li>
													</ul>
													<div className='time'>
														{' '}
														<em className='mdi mdi-calendar' />
														<time>16-01-2023</time>
													</div>
												</div>
											</div>
										</div>
									</div>
									<div className='job-item' id='job-item-35BB3D31'>
										<div className='figure'>
											<div className='image'>
												<a
													href='https://careerbuilder.vn/vi/nha-tuyen-dung/fpt-telecom-chi-nhanh-cong-ty-co-phan-vien-thong-fpt.35A8CF49.html'
													target='_blank'
													title='FPT Telecom - Chi nhánh Công ty Cổ Phần Viễn Thông FPT'
													rel='noreferrer'>
													<img
														className='lazy-img'
														src='../kiemviecv32/images/graphics/blank.gif'
														data-src='https://images.careerbuilder.vn/employer_folders/lot1/255561/155x155/114116100334240.png'
														alt='FPT Telecom - Chi nhánh Công ty Cổ Phần Viễn Thông FPT'
													/>
												</a>
											</div>
											<div className='figcaption'>
												<div className='title '>
													<h2>
														<a
															className='job_link'
															data-id='35BB3D31'
															href='https://careerbuilder.vn/vi/tim-viec-lam/nhan-vien-kinh-doanh-tai-fpt-telecom-thanh-hoa.35BB3D31.html'
															target='_blank'
															title='Nhân Viên Kinh Doanh Tại FPT Telecom Thanh Hoá'
															rel='noreferrer'>
															Nhân Viên Kinh Doanh Tại FPT Telecom Thanh Hoá
															<span className='new'>
																<font color='ff0000'>(Mới)</font>
															</span>
														</a>
													</h2>
												</div>
												<div className='caption'>
													<a
														className='company-name'
														target='_blank'
														href='https://careerbuilder.vn/vi/nha-tuyen-dung/fpt-telecom-chi-nhanh-cong-ty-co-phan-vien-thong-fpt.35A8CF49.html'
														title='FPT Telecom - Chi nhánh Công ty Cổ Phần Viễn Thông FPT'
														rel='noreferrer'>
														FPT Telecom - Chi nhánh Công ty Cổ Phần Viễn Thông FPT
													</a>
													<a
														className='job_link'
														data-id='35BB3D31'
														href='https://careerbuilder.vn/vi/tim-viec-lam/nhan-vien-kinh-doanh-tai-fpt-telecom-thanh-hoa.35BB3D31.html'
														target='_blank'
														title='Nhân Viên Kinh Doanh Tại FPT Telecom Thanh Hoá'
														rel='noreferrer'>
														<div className='salary'>
															<p>
																<em className='fa fa-usd' />
																Lương: 7 Tr - 20 Tr VND
															</p>
														</div>
														<div className='location'>
															<em className='mdi mdi-map-marker' />
															<ul>
																<li>Thanh Hóa</li>
															</ul>
														</div>
														<ul className='welfare'>
															<li>
																<span className='fa fa-medkit' />
																Chế độ bảo hiểm
															</li>
															,
															<li>
																<span className='fa fa-plane' />
																Du Lịch
															</li>
														</ul>
													</a>
												</div>
												<div className='bottom-right-icon'>
													<ul>
														<li>
															<a
																className='play-video'
																href='https://www.youtube.com/watch?v=t--XieyX_Xc'
																data-fancybox=''>
																<i className='mdi mdi-play-circle-outline' />
																<span className='text'>Xem video</span>
															</a>
														</li>
														<li>
															<a
																className='toollips save-job chk_save_35BB3D31 '
																href=''
																data-id='35BB3D31'
																onClick='popuplogin()'>
																<i className='mdi mdi-heart-outline' />
																<span className='text'>Lưu việc làm</span>
															</a>
														</li>
													</ul>
													<div className='time'>
														{' '}
														<em className='mdi mdi-calendar' />
														<time>16-01-2023</time>
													</div>
												</div>
											</div>
										</div>
									</div>
									<div className='job-item' id='job-item-35BB3D33'>
										<div className='figure'>
											<div className='image'>
												<a
													href='https://careerbuilder.vn/vi/nha-tuyen-dung/cong-ty-co-phan-dong-tam.35A4F126.html'
													target='_blank'
													title='Công Ty Cổ Phần Đồng Tâm'
													rel='noreferrer'>
													<img
														className='lazy-img'
														src='../kiemviecv32/images/graphics/blank.gif'
														data-src='https://images.careerbuilder.vn/employers/2086/155x155/152814z2868232729205_f2d45539d65614eccab3a2a2eb2b7728.jpg'
														alt='Công Ty Cổ Phần Đồng Tâm'
													/>
												</a>
											</div>
											<div className='figcaption'>
												<div className='title '>
													<h2>
														<a
															className='job_link'
															data-id='35BB3D33'
															href='https://careerbuilder.vn/vi/tim-viec-lam/chuyen-vien-phan-tich-nghiep-vu-cntt.35BB3D33.html'
															target='_blank'
															title='Chuyên Viên Phân Tích Nghiệp Vụ CNTT'
															rel='noreferrer'>
															Chuyên Viên Phân Tích Nghiệp Vụ CNTT
															<span className='new'>
																<font color='ff0000'>(Mới)</font>
															</span>
														</a>
													</h2>
												</div>
												<div className='caption'>
													<a
														className='company-name'
														target='_blank'
														href='https://careerbuilder.vn/vi/nha-tuyen-dung/cong-ty-co-phan-dong-tam.35A4F126.html'
														title='Công Ty Cổ Phần Đồng Tâm'
														rel='noreferrer'>
														Công Ty Cổ Phần Đồng Tâm
													</a>
													<a
														className='job_link'
														data-id='35BB3D33'
														href='https://careerbuilder.vn/vi/tim-viec-lam/chuyen-vien-phan-tich-nghiep-vu-cntt.35BB3D33.html'
														target='_blank'
														title='Chuyên Viên Phân Tích Nghiệp Vụ CNTT'
														rel='noreferrer'>
														<div className='salary'>
															<p>
																<em className='fa fa-usd' />
																Lương: Cạnh Tranh
															</p>
														</div>
														<div className='location'>
															<em className='mdi mdi-map-marker' />
															<ul>
																<li>Long An</li>
															</ul>
														</div>
														<ul className='welfare'>
															<li>
																<span className='fa fa-laptop' />
																Laptop
															</li>
															,
															<li>
																<span className='fa fa-medkit' />
																Chế độ bảo hiểm
															</li>
														</ul>
													</a>
												</div>
												<div className='bottom-right-icon'>
													<ul>
														<li>
															<a
																className='play-video'
																href='https://www.youtube.com/watch?v=JN2CZymeE-Q'
																data-fancybox=''>
																<i className='mdi mdi-play-circle-outline' />
																<span className='text'>Xem video</span>
															</a>
														</li>
														<li>
															<a
																className='toollips save-job chk_save_35BB3D33 '
																href=''
																data-id='35BB3D33'
																onClick='popuplogin()'>
																<i className='mdi mdi-heart-outline' />
																<span className='text'>Lưu việc làm</span>
															</a>
														</li>
													</ul>
													<div className='time'>
														{' '}
														<em className='mdi mdi-calendar' />
														<time>16-01-2023</time>
													</div>
												</div>
											</div>
										</div>
									</div>
									<div className='job-item' id='job-item-35BB3D32'>
										<div className='figure'>
											<div className='image'>
												<a
													href='https://careerbuilder.vn/vi/nha-tuyen-dung/cong-ty-co-phan-dong-tam.35A4F126.html'
													target='_blank'
													title='Công Ty Cổ Phần Đồng Tâm'
													rel='noreferrer'>
													<img
														className='lazy-img'
														src='../kiemviecv32/images/graphics/blank.gif'
														data-src='https://images.careerbuilder.vn/employers/2086/155x155/152814z2868232729205_f2d45539d65614eccab3a2a2eb2b7728.jpg'
														alt='Công Ty Cổ Phần Đồng Tâm'
													/>
												</a>
											</div>
											<div className='figcaption'>
												<div className='title '>
													<h2>
														<a
															className='job_link'
															data-id='35BB3D32'
															href='https://careerbuilder.vn/vi/tim-viec-lam/truong-phong-quan-ly-thiet-bi-va-nguon-luc.35BB3D32.html'
															target='_blank'
															title='Trưởng Phòng Quản Lý Thiết Bị Và Nguồn Lực'
															rel='noreferrer'>
															Trưởng Phòng Quản Lý Thiết Bị Và Nguồn Lực
															<span className='new'>
																<font color='ff0000'>(Mới)</font>
															</span>
														</a>
													</h2>
												</div>
												<div className='caption'>
													<a
														className='company-name'
														target='_blank'
														href='https://careerbuilder.vn/vi/nha-tuyen-dung/cong-ty-co-phan-dong-tam.35A4F126.html'
														title='Công Ty Cổ Phần Đồng Tâm'
														rel='noreferrer'>
														Công Ty Cổ Phần Đồng Tâm
													</a>
													<a
														className='job_link'
														data-id='35BB3D32'
														href='https://careerbuilder.vn/vi/tim-viec-lam/truong-phong-quan-ly-thiet-bi-va-nguon-luc.35BB3D32.html'
														target='_blank'
														title='Trưởng Phòng Quản Lý Thiết Bị Và Nguồn Lực'
														rel='noreferrer'>
														<div className='salary'>
															<p>
																<em className='fa fa-usd' />
																Lương: Cạnh Tranh
															</p>
														</div>
														<div className='location'>
															<em className='mdi mdi-map-marker' />
															<ul>
																<li>Long An</li>
															</ul>
														</div>
														<ul className='welfare'>
															<li>
																<span className='fa fa-laptop' />
																Laptop
															</li>
															,
															<li>
																<span className='fa fa-medkit' />
																Chế độ bảo hiểm
															</li>
														</ul>
													</a>
												</div>
												<div className='bottom-right-icon'>
													<ul>
														<li>
															<a
																className='play-video'
																href='https://www.youtube.com/watch?v=JN2CZymeE-Q'
																data-fancybox=''>
																<i className='mdi mdi-play-circle-outline' />
																<span className='text'>Xem video</span>
															</a>
														</li>
														<li>
															<a
																className='toollips save-job chk_save_35BB3D32 '
																href=''
																data-id='35BB3D32'
																onClick='popuplogin()'>
																<i className='mdi mdi-heart-outline' />
																<span className='text'>Lưu việc làm</span>
															</a>
														</li>
													</ul>
													<div className='time'>
														{' '}
														<em className='mdi mdi-calendar' />
														<time>16-01-2023</time>
													</div>
												</div>
											</div>
										</div>
									</div>
									<div className='job-item' id='job-item-35BB3D2F'>
										<div className='figure'>
											<div className='image'>
												<a
													href='https://careerbuilder.vn/vi/nha-tuyen-dung/cong-ty-tnhh-san-xuat-va-thuong-mai-snake-viet.35A92033.html'
													target='_blank'
													title='Công ty TNHH sản xuất và thương mại Snake Việt'
													rel='noreferrer'>
													<img
														className='lazy-img'
														src='../kiemviecv32/images/graphics/blank.gif'
														data-src='https://static.careerbuilder.vn/themes/kiemviecv32/images/graphics/logo-default.png'
														alt='Công ty TNHH sản xuất và thương mại Snake Việt'
													/>
												</a>
											</div>
											<div className='figcaption'>
												<div className='title '>
													<h2>
														<a
															className='job_link'
															data-id='35BB3D2F'
															href='https://careerbuilder.vn/vi/tim-viec-lam/nhan-vien-cham-soc-khach-hang.35BB3D2F.html'
															target='_blank'
															title='Nhân Viên Chăm Sóc Khách Hàng'
															rel='noreferrer'>
															Nhân Viên Chăm Sóc Khách Hàng
															<span className='new'>
																<font color='ff0000'>(Mới)</font>
															</span>
														</a>
													</h2>
												</div>
												<div className='caption'>
													<a
														className='company-name'
														target='_blank'
														href='https://careerbuilder.vn/vi/nha-tuyen-dung/cong-ty-tnhh-san-xuat-va-thuong-mai-snake-viet.35A92033.html'
														title='Công ty TNHH sản xuất và thương mại Snake Việt'
														rel='noreferrer'>
														Công ty TNHH sản xuất và thương mại Snake Việt
													</a>
													<a
														className='job_link'
														data-id='35BB3D2F'
														href='https://careerbuilder.vn/vi/tim-viec-lam/nhan-vien-cham-soc-khach-hang.35BB3D2F.html'
														target='_blank'
														title='Nhân Viên Chăm Sóc Khách Hàng'
														rel='noreferrer'>
														<div className='salary'>
															<p>
																<em className='fa fa-usd' />
																Lương: Cạnh Tranh
															</p>
														</div>
														<div className='location'>
															<em className='mdi mdi-map-marker' />
															<ul>
																<li>Hà Nội</li>
															</ul>
														</div>
														<ul className='welfare'>
															<li>
																<span className='fa fa-medkit' />
																Chế độ bảo hiểm
															</li>
															,
															<li>
																<span className='fa fa-plane' />
																Du Lịch
															</li>
														</ul>
													</a>
												</div>
												<div className='bottom-right-icon'>
													<ul>
														<li>
															<a
																className='toollips save-job chk_save_35BB3D2F '
																href=''
																data-id='35BB3D2F'
																onClick='popuplogin()'>
																<i className='mdi mdi-heart-outline' />
																<span className='text'>Lưu việc làm</span>
															</a>
														</li>
													</ul>
													<div className='time'>
														{' '}
														<em className='mdi mdi-calendar' />
														<time>16-01-2023</time>
													</div>
												</div>
											</div>
										</div>
									</div>
									<div className='job-item' id='job-item-35BB3D2E'>
										<div className='figure'>
											<div className='image'>
												<a
													href='https://careerbuilder.vn/vi/nha-tuyen-dung/cong-ty-co-phan-dong-tam.35A4F126.html'
													target='_blank'
													title='Công Ty Cổ Phần Đồng Tâm'
													rel='noreferrer'>
													<img
														className='lazy-img'
														src='../kiemviecv32/images/graphics/blank.gif'
														data-src='https://images.careerbuilder.vn/employers/2086/155x155/152814z2868232729205_f2d45539d65614eccab3a2a2eb2b7728.jpg'
														alt='Công Ty Cổ Phần Đồng Tâm'
													/>
												</a>
											</div>
											<div className='figcaption'>
												<div className='title '>
													<h2>
														<a
															className='job_link'
															data-id='35BB3D2E'
															href='https://careerbuilder.vn/vi/tim-viec-lam/giam-sat-ke-hoach-bai.35BB3D2E.html'
															target='_blank'
															title='Giám Sát Kế Hoạch Bãi'
															rel='noreferrer'>
															Giám Sát Kế Hoạch Bãi
															<span className='new'>
																<font color='ff0000'>(Mới)</font>
															</span>
														</a>
													</h2>
												</div>
												<div className='caption'>
													<a
														className='company-name'
														target='_blank'
														href='https://careerbuilder.vn/vi/nha-tuyen-dung/cong-ty-co-phan-dong-tam.35A4F126.html'
														title='Công Ty Cổ Phần Đồng Tâm'
														rel='noreferrer'>
														Công Ty Cổ Phần Đồng Tâm
													</a>
													<a
														className='job_link'
														data-id='35BB3D2E'
														href='https://careerbuilder.vn/vi/tim-viec-lam/giam-sat-ke-hoach-bai.35BB3D2E.html'
														target='_blank'
														title='Giám Sát Kế Hoạch Bãi'
														rel='noreferrer'>
														<div className='salary'>
															<p>
																<em className='fa fa-usd' />
																Lương: Cạnh Tranh
															</p>
														</div>
														<div className='location'>
															<em className='mdi mdi-map-marker' />
															<ul>
																<li>Long An</li>
															</ul>
														</div>
														<ul className='welfare'>
															<li>
																<span className='fa fa-laptop' />
																Laptop
															</li>
															,
															<li>
																<span className='fa fa-medkit' />
																Chế độ bảo hiểm
															</li>
														</ul>
													</a>
												</div>
												<div className='bottom-right-icon'>
													<ul>
														<li>
															<a
																className='play-video'
																href='https://www.youtube.com/watch?v=JN2CZymeE-Q'
																data-fancybox=''>
																<i className='mdi mdi-play-circle-outline' />
																<span className='text'>Xem video</span>
															</a>
														</li>
														<li>
															<a
																className='toollips save-job chk_save_35BB3D2E '
																href=''
																data-id='35BB3D2E'
																onClick='popuplogin()'>
																<i className='mdi mdi-heart-outline' />
																<span className='text'>Lưu việc làm</span>
															</a>
														</li>
													</ul>
													<div className='time'>
														{' '}
														<em className='mdi mdi-calendar' />
														<time>16-01-2023</time>
													</div>
												</div>
											</div>
										</div>
									</div>
									<div className='job-item' id='job-item-35BB3D2C'>
										<div className='figure'>
											<div className='image'>
												<a
													href='https://careerbuilder.vn/vi/nha-tuyen-dung/cong-ty-tnhh-mtv-thep-vas-an-hung-tuong.35A5A619.html'
													target='_blank'
													title='Công Ty TNHH MTV Thép VAS An Hưng Tường'
													rel='noreferrer'>
													<img
														className='lazy-img'
														src='../kiemviecv32/images/graphics/blank.gif'
														data-src='https://images.careerbuilder.vn/employer_folders/lot9/48409/155x155/150903image001.png'
														alt='Công Ty TNHH MTV Thép VAS An Hưng Tường'
													/>
												</a>
											</div>
											<div className='figcaption'>
												<div className='title '>
													<h2>
														<a
															className='job_link'
															data-id='35BB3D2C'
															href='https://careerbuilder.vn/vi/tim-viec-lam/nhan-vien-thu-mua.35BB3D2C.html'
															target='_blank'
															title='NHÂN VIÊN THU MUA'
															rel='noreferrer'>
															NHÂN VIÊN THU MUA
															<span className='new'>
																<font color='ff0000'>(Mới)</font>
															</span>
														</a>
													</h2>
												</div>
												<div className='caption'>
													<a
														className='company-name'
														target='_blank'
														href='https://careerbuilder.vn/vi/nha-tuyen-dung/cong-ty-tnhh-mtv-thep-vas-an-hung-tuong.35A5A619.html'
														title='Công Ty TNHH MTV Thép VAS An Hưng Tường'
														rel='noreferrer'>
														Công Ty TNHH MTV Thép VAS An Hưng Tường
													</a>
													<a
														className='job_link'
														data-id='35BB3D2C'
														href='https://careerbuilder.vn/vi/tim-viec-lam/nhan-vien-thu-mua.35BB3D2C.html'
														target='_blank'
														title='NHÂN VIÊN THU MUA'
														rel='noreferrer'>
														<div className='salary'>
															<p>
																<em className='fa fa-usd' />
																Lương: 10 Tr - 12 Tr VND
															</p>
														</div>
														<div className='location'>
															<em className='mdi mdi-map-marker' />
															<ul>
																<li>Hồ Chí Minh</li>
															</ul>
														</div>
														<ul className='welfare'>
															<li>
																<span className='fa fa-medkit' />
																Chế độ bảo hiểm
															</li>
															,
															<li>
																<span className='fa fa-plane' />
																Du Lịch
															</li>
														</ul>
													</a>
												</div>
												<div className='bottom-right-icon'>
													<ul>
														<li>
															<a
																className='toollips save-job chk_save_35BB3D2C '
																href=''
																data-id='35BB3D2C'
																onClick='popuplogin()'>
																<i className='mdi mdi-heart-outline' />
																<span className='text'>Lưu việc làm</span>
															</a>
														</li>
													</ul>
													<div className='time'>
														{' '}
														<em className='mdi mdi-calendar' />
														<time>16-01-2023</time>
													</div>
												</div>
											</div>
										</div>
									</div>
									<div className='job-item' id='job-item-35BB3D2D'>
										<div className='figure'>
											<div className='image'>
												<a
													href='https://careerbuilder.vn/vi/nha-tuyen-dung/cong-ty-cp-thiet-ke-kien-truc-noi-that-xay-dung-aaa.35A8DC59.html'
													target='_blank'
													title='Công ty CP Thiết kế Kiến trúc - Nội thất - Xây dựng AAA '
													rel='noreferrer'>
													<img
														className='lazy-img'
														src='../kiemviecv32/images/graphics/blank.gif'
														data-src='https://images.careerbuilder.vn/employer_folders/lot5/258905/155x155/143409logoaaa.png'
														alt='Công ty CP Thiết kế Kiến trúc - Nội thất - Xây dựng AAA '
													/>
												</a>
											</div>
											<div className='figcaption'>
												<div className='title '>
													<h2>
														<a
															className='job_link'
															data-id='35BB3D2D'
															href='https://careerbuilder.vn/vi/tim-viec-lam/chuyen-vien-nhan-su-tong-hop-manh-ve-tuyen-dung.35BB3D2D.html'
															target='_blank'
															title='Chuyên viên Nhân sự Tổng hợp (Mạnh về Tuyển dụng)'
															rel='noreferrer'>
															Chuyên viên Nhân sự Tổng hợp (Mạnh về Tuyển dụng)
															<span className='new'>
																<font color='ff0000'>(Mới)</font>
															</span>
														</a>
													</h2>
												</div>
												<div className='caption'>
													<a
														className='company-name'
														target='_blank'
														href='https://careerbuilder.vn/vi/nha-tuyen-dung/cong-ty-cp-thiet-ke-kien-truc-noi-that-xay-dung-aaa.35A8DC59.html'
														title='Công ty CP Thiết kế Kiến trúc - Nội thất - Xây dựng AAA '
														rel='noreferrer'>
														Công ty CP Thiết kế Kiến trúc - Nội thất - Xây dựng AAA{' '}
													</a>
													<a
														className='job_link'
														data-id='35BB3D2D'
														href='https://careerbuilder.vn/vi/tim-viec-lam/chuyen-vien-nhan-su-tong-hop-manh-ve-tuyen-dung.35BB3D2D.html'
														target='_blank'
														title='Chuyên viên Nhân sự Tổng hợp (Mạnh về Tuyển dụng)'
														rel='noreferrer'>
														<div className='salary'>
															<p>
																<em className='fa fa-usd' />
																Lương: 12 Tr - 14 Tr VND
															</p>
														</div>
														<div className='location'>
															<em className='mdi mdi-map-marker' />
															<ul>
																<li>Hà Nội</li>
															</ul>
														</div>
														<ul className='welfare'>
															<li>
																<span className='fa fa-laptop' />
																Laptop
															</li>
															,
															<li>
																<span className='fa fa-medkit' />
																Chế độ bảo hiểm
															</li>
														</ul>
													</a>
												</div>
												<div className='bottom-right-icon'>
													<ul>
														<li>
															<a
																className='toollips save-job chk_save_35BB3D2D '
																href=''
																data-id='35BB3D2D'
																onClick='popuplogin()'>
																<i className='mdi mdi-heart-outline' />
																<span className='text'>Lưu việc làm</span>
															</a>
														</li>
													</ul>
													<div className='time'>
														{' '}
														<em className='mdi mdi-calendar' />
														<time>16-01-2023</time>
													</div>
												</div>
											</div>
										</div>
									</div>
									<div className='job-item' id='job-item-35BB3D25'>
										<div className='figure'>
											<div className='image'>
												<a
													href='https://careerbuilder.vn/vi/nha-tuyen-dung/cong-ty-co-phan-dong-tam.35A4F126.html'
													target='_blank'
													title='Công Ty Cổ Phần Đồng Tâm'
													rel='noreferrer'>
													<img
														className='lazy-img'
														src='../kiemviecv32/images/graphics/blank.gif'
														data-src='https://images.careerbuilder.vn/employers/2086/155x155/152814z2868232729205_f2d45539d65614eccab3a2a2eb2b7728.jpg'
														alt='Công Ty Cổ Phần Đồng Tâm'
													/>
												</a>
											</div>
											<div className='figcaption'>
												<div className='title '>
													<h2>
														<a
															className='job_link'
															data-id='35BB3D25'
															href='https://careerbuilder.vn/vi/tim-viec-lam/giam-sat-chung-tu-khai-thac.35BB3D25.html'
															target='_blank'
															title='Giám Sát Chứng Từ Khai Thác'
															rel='noreferrer'>
															Giám Sát Chứng Từ Khai Thác
															<span className='new'>
																<font color='ff0000'>(Mới)</font>
															</span>
														</a>
													</h2>
												</div>
												<div className='caption'>
													<a
														className='company-name'
														target='_blank'
														href='https://careerbuilder.vn/vi/nha-tuyen-dung/cong-ty-co-phan-dong-tam.35A4F126.html'
														title='Công Ty Cổ Phần Đồng Tâm'
														rel='noreferrer'>
														Công Ty Cổ Phần Đồng Tâm
													</a>
													<a
														className='job_link'
														data-id='35BB3D25'
														href='https://careerbuilder.vn/vi/tim-viec-lam/giam-sat-chung-tu-khai-thac.35BB3D25.html'
														target='_blank'
														title='Giám Sát Chứng Từ Khai Thác'
														rel='noreferrer'>
														<div className='salary'>
															<p>
																<em className='fa fa-usd' />
																Lương: Cạnh Tranh
															</p>
														</div>
														<div className='location'>
															<em className='mdi mdi-map-marker' />
															<ul>
																<li>Long An</li>
															</ul>
														</div>
														<ul className='welfare'>
															<li>
																<span className='fa fa-laptop' />
																Laptop
															</li>
															,
															<li>
																<span className='fa fa-medkit' />
																Chế độ bảo hiểm
															</li>
														</ul>
													</a>
												</div>
												<div className='bottom-right-icon'>
													<ul>
														<li>
															<a
																className='play-video'
																href='https://www.youtube.com/watch?v=JN2CZymeE-Q'
																data-fancybox=''>
																<i className='mdi mdi-play-circle-outline' />
																<span className='text'>Xem video</span>
															</a>
														</li>
														<li>
															<a
																className='toollips save-job chk_save_35BB3D25 '
																href=''
																data-id='35BB3D25'
																onClick='popuplogin()'>
																<i className='mdi mdi-heart-outline' />
																<span className='text'>Lưu việc làm</span>
															</a>
														</li>
													</ul>
													<div className='time'>
														{' '}
														<em className='mdi mdi-calendar' />
														<time>16-01-2023</time>
													</div>
												</div>
											</div>
										</div>
									</div>
									<div className='job-item' id='job-item-35BB3D2A'>
										<div className='figure'>
											<div className='image'>
												<a
													href='https://careerbuilder.vn/vi/nha-tuyen-dung/cong-ty-co-phan-dong-tam.35A4F126.html'
													target='_blank'
													title='Công Ty Cổ Phần Đồng Tâm'
													rel='noreferrer'>
													<img
														className='lazy-img'
														src='../kiemviecv32/images/graphics/blank.gif'
														data-src='https://images.careerbuilder.vn/employers/2086/155x155/152814z2868232729205_f2d45539d65614eccab3a2a2eb2b7728.jpg'
														alt='Công Ty Cổ Phần Đồng Tâm'
													/>
												</a>
											</div>
											<div className='figcaption'>
												<div className='title '>
													<h2>
														<a
															className='job_link'
															data-id='35BB3D2A'
															href='https://careerbuilder.vn/vi/tim-viec-lam/giam-sat-ke-hoach-tau-sa-lan.35BB3D2A.html'
															target='_blank'
															title='Giám Sát Kế Hoạch Tàu/ Sà Lan'
															rel='noreferrer'>
															Giám Sát Kế Hoạch Tàu/ Sà Lan
															<span className='new'>
																<font color='ff0000'>(Mới)</font>
															</span>
														</a>
													</h2>
												</div>
												<div className='caption'>
													<a
														className='company-name'
														target='_blank'
														href='https://careerbuilder.vn/vi/nha-tuyen-dung/cong-ty-co-phan-dong-tam.35A4F126.html'
														title='Công Ty Cổ Phần Đồng Tâm'
														rel='noreferrer'>
														Công Ty Cổ Phần Đồng Tâm
													</a>
													<a
														className='job_link'
														data-id='35BB3D2A'
														href='https://careerbuilder.vn/vi/tim-viec-lam/giam-sat-ke-hoach-tau-sa-lan.35BB3D2A.html'
														target='_blank'
														title='Giám Sát Kế Hoạch Tàu/ Sà Lan'
														rel='noreferrer'>
														<div className='salary'>
															<p>
																<em className='fa fa-usd' />
																Lương: Cạnh Tranh
															</p>
														</div>
														<div className='location'>
															<em className='mdi mdi-map-marker' />
															<ul>
																<li>Long An</li>
															</ul>
														</div>
														<ul className='welfare'>
															<li>
																<span className='fa fa-laptop' />
																Laptop
															</li>
															,
															<li>
																<span className='fa fa-medkit' />
																Chế độ bảo hiểm
															</li>
														</ul>
													</a>
												</div>
												<div className='bottom-right-icon'>
													<ul>
														<li>
															<a
																className='play-video'
																href='https://www.youtube.com/watch?v=JN2CZymeE-Q'
																data-fancybox=''>
																<i className='mdi mdi-play-circle-outline' />
																<span className='text'>Xem video</span>
															</a>
														</li>
														<li>
															<a
																className='toollips save-job chk_save_35BB3D2A '
																href=''
																data-id='35BB3D2A'
																onClick='popuplogin()'>
																<i className='mdi mdi-heart-outline' />
																<span className='text'>Lưu việc làm</span>
															</a>
														</li>
													</ul>
													<div className='time'>
														{' '}
														<em className='mdi mdi-calendar' />
														<time>16-01-2023</time>
													</div>
												</div>
											</div>
										</div>
									</div>
									<div className='job-item' id='job-item-35BB3D26'>
										<div className='figure'>
											<div className='image'>
												<a
													href='https://careerbuilder.vn/vi/nha-tuyen-dung/cong-ty-tnhh-dau-tu-va-quan-ly-bao-lam-holdings.35A92380.html'
													target='_blank'
													title='CÔNG TY TNHH ĐẦU TƯ VÀ QUẢN LÝ BẢO LÂM HOLDINGS'
													rel='noreferrer'>
													<img
														className='lazy-img'
														src='../kiemviecv32/images/graphics/blank.gif'
														data-src='https://images.careerbuilder.vn/employer_folders/lot0/277120/155x155/153804logoblh.jpg'
														alt='CÔNG TY TNHH ĐẦU TƯ VÀ QUẢN LÝ BẢO LÂM HOLDINGS'
													/>
												</a>
											</div>
											<div className='figcaption'>
												<div className='title '>
													<h2>
														<a
															className='job_link'
															data-id='35BB3D26'
															href='https://careerbuilder.vn/vi/tim-viec-lam/sales-admin.35BB3D26.html'
															target='_blank'
															title='Sales Admin'
															rel='noreferrer'>
															Sales Admin
															<span className='new'>
																<font color='ff0000'>(Mới)</font>
															</span>
														</a>
													</h2>
												</div>
												<div className='caption'>
													<a
														className='company-name'
														target='_blank'
														href='https://careerbuilder.vn/vi/nha-tuyen-dung/cong-ty-tnhh-dau-tu-va-quan-ly-bao-lam-holdings.35A92380.html'
														title='CÔNG TY TNHH ĐẦU TƯ VÀ QUẢN LÝ BẢO LÂM HOLDINGS'
														rel='noreferrer'>
														CÔNG TY TNHH ĐẦU TƯ VÀ QUẢN LÝ BẢO LÂM HOLDINGS
													</a>
													<a
														className='job_link'
														data-id='35BB3D26'
														href='https://careerbuilder.vn/vi/tim-viec-lam/sales-admin.35BB3D26.html'
														target='_blank'
														title='Sales Admin'
														rel='noreferrer'>
														<div className='salary'>
															<p>
																<em className='fa fa-usd' />
																Lương: Cạnh Tranh
															</p>
														</div>
														<div className='location'>
															<em className='mdi mdi-map-marker' />
															<ul>
																<li>Hà Nội</li>
															</ul>
														</div>
														<ul className='welfare'>
															<li>
																<span className='fa fa-medkit' />
																Chế độ bảo hiểm
															</li>
															,
															<li>
																<span className='fa fa-plane' />
																Du Lịch
															</li>
														</ul>
													</a>
												</div>
												<div className='bottom-right-icon'>
													<ul>
														<li>
															<a
																className='toollips save-job chk_save_35BB3D26 '
																href=''
																data-id='35BB3D26'
																onClick='popuplogin()'>
																<i className='mdi mdi-heart-outline' />
																<span className='text'>Lưu việc làm</span>
															</a>
														</li>
													</ul>
													<div className='time'>
														{' '}
														<em className='mdi mdi-calendar' />
														<time>16-01-2023</time>
													</div>
												</div>
											</div>
										</div>
									</div>
									<div className='job-item' id='job-item-35BB3D29'>
										<div className='figure'>
											<div className='image'>
												<a
													href='https://careerbuilder.vn/vi/nha-tuyen-dung/coca-cola.35A4FE5F.html'
													target='_blank'
													title='Coca-Cola '
													rel='noreferrer'>
													<img
														className='lazy-img'
														src='../kiemviecv32/images/graphics/blank.gif'
														data-src='https://images.careerbuilder.vn/employers/5471/155x155/153006logococa.png'
														alt='Coca-Cola '
													/>
												</a>
											</div>
											<div className='figcaption'>
												<div className='title '>
													<h2>
														<a
															className='job_link'
															data-id='35BB3D29'
															href='https://careerbuilder.vn/vi/tim-viec-lam/electrical-technician-ky-thuat-vien-dien-lam-viec-theo-ca.35BB3D29.html'
															target='_blank'
															title='Electrical Technician - Kỹ Thuật Viên Điện (Làm việc theo ca)'
															rel='noreferrer'>
															Electrical Technician - Kỹ Thuật Viên Điện (Làm việc theo ca)
															<span className='new'>
																<font color='ff0000'>(Mới)</font>
															</span>
														</a>
													</h2>
												</div>
												<div className='caption'>
													<a
														className='company-name'
														target='_blank'
														href='https://careerbuilder.vn/vi/nha-tuyen-dung/coca-cola.35A4FE5F.html'
														title='Coca-Cola '
														rel='noreferrer'>
														Coca-Cola{' '}
													</a>
													<a
														className='job_link'
														data-id='35BB3D29'
														href='https://careerbuilder.vn/vi/tim-viec-lam/electrical-technician-ky-thuat-vien-dien-lam-viec-theo-ca.35BB3D29.html'
														target='_blank'
														title='Electrical Technician - Kỹ Thuật Viên Điện (Làm việc theo ca)'
														rel='noreferrer'>
														<div className='salary'>
															<p>
																<em className='fa fa-usd' />
																Lương: Cạnh Tranh
															</p>
														</div>
														<div className='location'>
															<em className='mdi mdi-map-marker' />
															<ul>
																<li>Đà Nẵng</li>
															</ul>
														</div>
														<ul className='welfare'>
															<li>
																<span className='fa fa-medkit' />
																Chế độ bảo hiểm
															</li>
															,
															<li>
																<span className='fa fa-plane' />
																Du Lịch
															</li>
														</ul>
													</a>
												</div>
												<div className='bottom-right-icon'>
													<ul>
														<li>
															<a
																className='play-video'
																href='https://www.youtube.com/watch?v=4VR9Iemy8SM'
																data-fancybox=''>
																<i className='mdi mdi-play-circle-outline' />
																<span className='text'>Xem video</span>
															</a>
														</li>
														<li>
															<a
																className='toollips save-job chk_save_35BB3D29 '
																href=''
																data-id='35BB3D29'
																onClick='popuplogin()'>
																<i className='mdi mdi-heart-outline' />
																<span className='text'>Lưu việc làm</span>
															</a>
														</li>
													</ul>
													<div className='time'>
														{' '}
														<em className='mdi mdi-calendar' />
														<time>16-01-2023</time>
													</div>
												</div>
											</div>
										</div>
									</div>
								</div>
								<div className='pagination'>
									<ul>
										<li className='active'>
											<a href=''>1</a>
										</li>
										<li>
											<a href='https://careerbuilder.vn/viec-lam/tat-ca-viec-lam-trang-2-vi.html'>2</a>
										</li>
										<li>
											<a href='https://careerbuilder.vn/viec-lam/tat-ca-viec-lam-trang-3-vi.html'>3</a>
										</li>
										<li>
											<a href='https://careerbuilder.vn/viec-lam/tat-ca-viec-lam-trang-4-vi.html'>4</a>
										</li>
										<li>
											<a href='https://careerbuilder.vn/viec-lam/tat-ca-viec-lam-trang-5-vi.html'>5</a>
										</li>
										<li className='next-page'>
											<a href='https://careerbuilder.vn/viec-lam/tat-ca-viec-lam-trang-2-vi.html'>
												{' '}
												<span className='mdi mdi-chevron-right' />
											</a>
										</li>
									</ul>
								</div>
							</div>
							<div className='job-bottom-banner' style={{ textAlign: 'center' }}></div>
						</div>
						<div className='col-lg-4 col-custom-xxl-3'>
							<div className='box-most-find'>
								<div className='box-title'>
									<h4>Việc làm được tìm kiếm nhiều nhất</h4>
								</div>
								<div className='box-content'>
									<ul>
										<li>
											<a
												href='https://careerbuilder.vn/viec-lam/Kế-toán-trưởng-k-vi.html'
												title='Kế toán trưởng'>
												Kế toán trưởng
											</a>
										</li>
										<li>
											<a
												href='https://careerbuilder.vn/viec-lam/Đại-diện-kinh-doanh-k-vi.html'
												title='Đại diện kinh doanh'>
												Đại diện kinh doanh
											</a>
										</li>
										<li>
											<a href='https://careerbuilder.vn/viec-lam/Purchasing-k-vi.html' title='Purchasing'>
												Purchasing
											</a>
										</li>
										<li>
											<a href='https://careerbuilder.vn/viec-lam/Giám-đốc-k-vi.html' title='Giám đốc'>
												Giám đốc
											</a>
										</li>
										<li>
											<a
												href='https://careerbuilder.vn/viec-lam/Nhân-viên-kế-toán-k-vi.html'
												title='Nhân viên kế toán'>
												Nhân viên kế toán
											</a>
										</li>
										<li>
											<a
												href='https://careerbuilder.vn/viec-lam/General-Accountant-k-vi.html'
												title='General Accountant'>
												General Accountant
											</a>
										</li>
										<li>
											<a
												href='https://careerbuilder.vn/viec-lam/Head-of-Office-k-vi.html'
												title='Head of Office'>
												Head of Office
											</a>
										</li>
										<li>
											<a
												href='https://careerbuilder.vn/viec-lam/Sales-Executive-k-vi.html'
												title='Sales Executive'>
												Sales Executive
											</a>
										</li>
										<li>
											<a href='https://careerbuilder.vn/viec-lam/Buyer-k-vi.html' title='Buyer'>
												Buyer
											</a>
										</li>
										<li>
											<a
												href='https://careerbuilder.vn/viec-lam/Head-of-sales-k-vi.html'
												title='Head of sales'>
												Head of sales
											</a>
										</li>
									</ul>
								</div>
							</div>
							<div className='list-banner-search-result'>
								{/* remve class sticky*/}
								<div className='banner-ad loadAds' id={854} />
								<div className='banner-ad loadAds' id={855} />
								<div className='banner-ad loadAds' id={856} />
								<div className='banner-ad' style={{ textAlign: 'center' }}></div>
							</div>
						</div>{' '}
					</div>
				</div>
			</section>
			<div className={cx('sticker-jobs')}>
				<div className={cx('icons')}>
					<em className='material-icons'>access_alarms</em>
				</div>
				<div className='content'>
					<p>Gửi tôi việc làm tương tự</p>
				</div>
				<div className='button'>
					{' '}
					<a href='' onClick='return adVanceJobalert();'>
						Đăng ký ngay
					</a>
				</div>
			</div>
			<div className={cx('login-modal')}>
				<div className={cx('modal-title')}>
					<p>Vui lòng đăng nhập để thực hiện chức năng này</p>
				</div>
				<div className='modal-body'>
					<p className='notes' />
					<form
						method='POST'
						id='popup_login_form'
						action='https://careerbuilder.vn/vi/jobseekers/member/login'
						autoComplete='off'>
						<div className='row'>
							<div className='form-group col-12'>
								<input
									type='text'
									id='username'
									name='username'
									placeholder='Username / Email'
									autoComplete='off'
								/>
							</div>
							<div className='form-group col-8'>
								<input
									type='password'
									name='password'
									id='password'
									placeholder='Mật khẩu'
									autoComplete='off'
								/>
							</div>
							<div className='form-group col-4'>
								<input
									type='hidden'
									name='csrf_token'
									defaultValue='464ade6fd66b31c0c98201a38f039410980b13769bccd3122f9bb92627214426'
								/>
								<input type='hidden' name='apply_url' defaultValue='' />
								<button type='submit'>Đăng nhập</button>
							</div>
						</div>
					</form>
					<div className='sign-in-by'>
						<span>Đăng nhập bằng:</span>
						<ul className='list-follow'>
							<li>
								<a
									className='fb'
									href=''
									onClick="popupapi('facebook','aHR0cHM6Ly9jYXJlZXJidWlsZGVyLnZuL3ZpL2pvYnNlZWtlcnMvbG9naW5mYWNlYm9vaw==');">
									<em className='fa fa-facebook' />
									Facebook
								</a>
							</li>
							<li>
								<a
									className='gg'
									href=''
									onClick="popupapi('google','aHR0cHM6Ly9jYXJlZXJidWlsZGVyLnZuL3ZpL2pvYnNlZWtlcnMvbG9naW5nb29nbGU=');">
									<em className='fa fa-google' />
									Google
								</a>
							</li>
						</ul>
					</div>
					<a className='register' href='https://careerbuilder.vn/vi/jobseekers/register' title='Đăng ký'>
						Đăng ký{' '}
					</a>
					<a
						className='forget-password'
						href='https://careerbuilder.vn/vi/jobseekers/forgotpassword'
						title='Quên mật khẩu?'
						rel='nofollow'>
						Quên mật khẩu?
					</a>
				</div>
			</div>
		</>
	);
};

export default AllJob;
