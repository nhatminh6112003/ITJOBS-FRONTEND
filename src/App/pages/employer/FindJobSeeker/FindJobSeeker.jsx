import React from 'react';
import styles from './find-job-seeker.module.css';
import classNames from 'classnames/bind';
const sx = classNames.bind(styles);

const FindJobSeeker = ({ cx }) => {
	return (
		<section className={sx('resume-search', 'cb-section', 'bg-manage', 'main-tabslet')}>
			<div className={cx('container')}>
				<div className={sx('box-resume-search')}>
					<div className={sx('form-head')}>
						<h1 className={sx('title')}>Từ khóa</h1>
						<div className={sx('toolip-support')}>
							<p>(Hướng dẫn Tìm kiếm)</p>
						</div>
					</div>
					<div className={sx('form-body')}>
						<form name='frm_search' id='frm_search' onsubmit="return validataSearch('vi');">
							<div className={sx('form-wrap', 'form-normal')}>
								<div className={sx('form-group', 'form-text')}>
									<label>Nội dung hồ sơ</label>
									<input
										type='text'
										name='keyword'
										id='keyword'
										placeholder='Nhập từ khóa'
										defaultValue=''
										autoComplete='off'
									/>
									<div className={sx('search_option')}>
										<span>Tìm</span>
										<label>
											<input type='radio' name='keyword_match' defaultValue='all' defaultChecked='checked' />{' '}
											Nội dung hồ sơ
										</label>
										<label>
											<input type='radio' name='keyword_match' defaultValue='title' /> Chức danh/ Vị trí
										</label>
									</div>
								</div>
								<div className={sx('form-group', 'form-select-chosen')}>
									<label>Ngành nghề</label>
									<select
										name='list_industries[]'
										id='industry'
										className={sx('chosen-select-max-three')}
										multiple=''
										data-placeholder='Tất cả ngành nghề'>
										<optgroup label='Bán hàng / Tiếp thị'>
											<option value='tiep-thi-marketing'>Tiếp thị / Marketing</option>
											<option value='ban-le-ban-si'>Bán lẻ / Bán sỉ</option>
											<option value='ban-hang-kinh-doanh'>Bán hàng / Kinh doanh</option>
											<option value='tiep-thi-truc-tuyen'>Tiếp thị trực tuyến</option>
										</optgroup>
										<optgroup label='Chăm sóc sức khỏe'>
											<option value='duoc-pham'>Dược phẩm</option>
											<option value='y-te-cham-soc-suc-khoe'>Y tế / Chăm sóc sức khỏe</option>
										</optgroup>
										<optgroup label='Dịch vụ'>
											<option value='tu-van'>Tư vấn</option>
											<option value='dich-vu-khach-hang'>Dịch vụ khách hàng</option>
											<option value='phi-chinh-phu-phi-loi-nhuan'>Phi chính phủ / Phi lợi nhuận</option>
											<option value='luat-phap-ly'>Luật / Pháp lý</option>
											<option value='buu-chinh-vien-thong'>Bưu chính viễn thông</option>
											<option value='van-chuyen-giao-nhan-kho-van'>Vận chuyển / Giao nhận / Kho vận</option>
											<option value='lao-dong-pho-thong'>Lao động phổ thông</option>
											<option value='an-ninh-bao-ve'>An Ninh / Bảo Vệ</option>
										</optgroup>
										<optgroup label='Giáo dục / Đào tạo'>
											<option value='giao-duc-dao-tao'>Giáo dục / Đào tạo</option>
											<option value='thu-vien'>Thư viện</option>
										</optgroup>
										<optgroup label='Hàng tiêu dùng'>
											<option value='hang-gia-dung-cham-soc-ca-nhan'>
												Hàng gia dụng / Chăm sóc cá nhân
											</option>
											<option value='thuc-pham-do-uong'>Thực phẩm &amp; Đồ uống</option>
										</optgroup>
										<optgroup label='Hành chính / Nhân sự'>
											<option value='hanh-chinh-thu-ky'>Hành chính / Thư ký</option>
											<option value='quan-ly-dieu-hanh'>Quản lý điều hành</option>
											<option value='nhan-su'>Nhân sự</option>
											<option value='bien-phien-dich'>Biên phiên dịch</option>
										</optgroup>
										<optgroup label='Kế toán / Tài chính'>
											<option value='ke-toan-kiem-toan'>Kế toán / Kiểm toán</option>
											<option value='ngan-hang'>Ngân hàng</option>
											<option value='bao-hiem'>Bảo hiểm</option>
											<option value='chung-khoan'>Chứng khoán</option>
											<option value='tai-chinh-dau-tu'>Tài chính / Đầu tư</option>
										</optgroup>
										<optgroup label='Khách sạn / Du lịch'>
											<option value='nha-hang-khach-san'>Nhà hàng / Khách sạn</option>
											<option value='du-lich'>Du lịch</option>
											<option value='hang-khong'>Hàng không</option>
										</optgroup>
										<optgroup label='Khoa học'>
											<option value='nong-nghiep'>Nông nghiệp</option>
											<option value='thong-ke'>Thống kê</option>
											<option value='thuy-san-hai-san'>Thủy sản / Hải sản</option>
											<option value='lam-nghiep'>Lâm Nghiệp</option>
											<option value='chan-nuoi-thu-y'>Chăn nuôi / Thú y</option>
											<option value='thuy-loi'>Thủy lợi</option>
											<option value='trac-dia-dia-chat'>Trắc địa / Địa Chất</option>
											<option value='hang-hai'>Hàng hải</option>
											<option value='cong-nghe-sinh-hoc'>Công nghệ sinh học</option>
											<option value='cong-nghe-thuc-pham-dinh-duong'>
												Công nghệ thực phẩm / Dinh dưỡng
											</option>
										</optgroup>
										<optgroup label='Kỹ thuật'>
											<option value='co-khi-o-to-tu-dong-hoa'>Cơ khí / Ô tô / Tự động hóa</option>
											<option value='moi-truong'>Môi trường</option>
											<option value='dau-khi'>Dầu khí</option>
											<option value='hoa-hoc'>Hóa học</option>
											<option value='dien-dien-tu-dien-lanh'>Điện / Điện tử / Điện lạnh</option>
											<option value='khoang-san'>Khoáng sản</option>
											<option value='bao-tri-sua-chua'>Bảo trì / Sửa chữa</option>
										</optgroup>
										<optgroup label='Máy tính / Công nghệ thông tin'>
											<option value='cntt-phan-mem' selected='selected'>
												CNTT - Phần mềm
											</option>
											<option value='cntt-phan-cung-mang'>CNTT - Phần cứng / Mạng</option>
										</optgroup>
										<optgroup label='Truyền thông / Media'>
											<option value='my-thuat-nghe-thuat-thiet-ke'>Mỹ thuật / Nghệ thuật / Thiết kế</option>
											<option value='giai-tri'>Giải trí</option>
											<option value='truyen-hinh-bao-chi-bien-tap'>Truyền hình / Báo chí / Biên tập</option>
											<option value='quang-cao-doi-ngoai-truyen-thong'>
												Quảng cáo / Đối ngoại / Truyền Thông
											</option>
											<option value='to-chuc-su-kien'>Tổ chức sự kiện</option>
										</optgroup>
										<optgroup label='Sản xuất'>
											<option value='xuat-nhap-khau'>Xuất nhập khẩu</option>
											<option value='san-xuat-van-hanh-san-xuat'>Sản xuất / Vận hành sản xuất</option>
											<option value='do-go'>Đồ gỗ</option>
											<option value='det-may-da-giay-thoi-trang'>Dệt may / Da giày / Thời trang</option>
											<option value='quan-ly-chat-luong-qa-qc'>Quản lý chất lượng (QA/QC)</option>
											<option value='thu-mua-vat-tu'>Thu mua / Vật tư</option>
											<option value='an-toan-lao-dong'>An toàn lao động</option>
											<option value='in-an-xuat-ban'>In ấn / Xuất bản</option>
										</optgroup>
										<optgroup label='Xây dựng'>
											<option value='kien-truc'>Kiến trúc</option>
											<option value='xay-dung'>Xây dựng</option>
											<option value='bat-dong-san'>Bất động sản</option>
											<option value='noi-ngoai-that'>Nội ngoại thất</option>
										</optgroup>
										<optgroup label='Nhóm ngành khác'>
											<option value='nganh-khac'>Ngành khác</option>
											<option value='moi-tot-nghiep-thuc-tap'>Mới tốt nghiệp / Thực tập</option>
										</optgroup>
									</select>
								</div>
								<div className={sx('form-group', 'form-select-chosen')}>
									<label>Địa điểm</label>
									<select
										name='list_location[]'
										id='location'
										className={sx('chosen-select-max-three')}
										multiple=''
										data-placeholder='Tất cả địa điểm'>
										<optgroup label='Việt Nam'>
											<option value='ha-noi'>Hà Nội</option>
											<option value='ho-chi-minh'>Hồ Chí Minh</option>
											<option value='an-giang'>An Giang</option>
											<option value='ba-ria-vung-tau'>Bà Rịa - Vũng Tàu</option>
											<option value='bac-lieu'>Bạc Liêu</option>
											<option value='bac-can'>Bắc Cạn</option>
											<option value='bac-giang'>Bắc Giang</option>
											<option value='bac-ninh'>Bắc Ninh</option>
											<option value='ben-tre'>Bến Tre</option>
											<option value='binh-duong'>Bình Dương</option>
											<option value='binh-dinh'>Bình Định</option>
											<option value='binh-phuoc'>Bình Phước</option>
											<option value='binh-thuan'>Bình Thuận</option>
											<option value='ca-mau'>Cà Mau</option>
											<option value='cao-bang'>Cao Bằng</option>
											<option value='can-tho'>Cần Thơ</option>
											<option value='dak-lak'>Dak Lak</option>
											<option value='dak-nong'>Dak Nông</option>
											<option value='da-nang'>Đà Nẵng</option>
											<option value='dien-bien'>Điện Biên</option>
											<option value='dong-bang-song-cuu-long'>Đồng Bằng Sông Cửu Long</option>
											<option value='dong-nai'>Đồng Nai</option>
											<option value='dong-thap'>Đồng Tháp</option>
											<option value='gia-lai'>Gia Lai</option>
											<option value='ha-giang'>Hà Giang</option>
											<option value='ha-nam'>Hà Nam</option>
											<option value='ha-tinh'>Hà Tĩnh</option>
											<option value='hai-duong'>Hải Dương</option>
											<option value='hai-phong'>Hải Phòng</option>
											<option value='hau-giang'>Hậu Giang</option>
											<option value='hoa-binh'>Hòa Bình</option>
											<option value='hung-yen'>Hưng Yên</option>
											<option value='khac'>Khác</option>
											<option value='khanh-hoa'>Khánh Hòa</option>
											<option value='kien-giang'>Kiên Giang</option>
											<option value='kon-tum'>Kon Tum</option>
											<option value='kv-bac-trung-bo'>KV Bắc Trung Bộ</option>
											<option value='kv-dong-nam-bo'>KV Đông Nam Bộ</option>
											<option value='kv-nam-trung-bo'>KV Nam Trung Bộ</option>
											<option value='kv-tay-nguyen'>KV Tây Nguyên</option>
											<option value='lai-chau'>Lai Châu</option>
											<option value='lang-son'>Lạng Sơn</option>
											<option value='lao-cai'>Lào Cai</option>
											<option value='lam-dong'>Lâm Đồng</option>
											<option value='long-an'>Long An</option>
											<option value='nam-dinh'>Nam Định</option>
											<option value='nghe-an'>Nghệ An</option>
											<option value='ninh-binh'>Ninh Bình</option>
											<option value='ninh-thuan'>Ninh Thuận</option>
											<option value='phu-tho'>Phú Thọ</option>
											<option value='phu-yen'>Phú Yên</option>
											<option value='quang-binh'>Quảng Bình</option>
											<option value='quang-nam'>Quảng Nam</option>
											<option value='quang-ngai'>Quảng Ngãi</option>
											<option value='quang-ninh'>Quảng Ninh</option>
											<option value='quang-tri'>Quảng Trị</option>
											<option value='soc-trang'>Sóc Trăng</option>
											<option value='son-la'>Sơn La</option>
											<option value='tay-ninh'>Tây Ninh</option>
											<option value='thai-binh'>Thái Bình</option>
											<option value='thai-nguyen'>Thái Nguyên</option>
											<option value='thanh-hoa'>Thanh Hóa</option>
											<option value='thua-thien-hue'>Thừa Thiên- Huế</option>
											<option value='tien-giang'>Tiền Giang</option>
											<option value='toan-quoc'>Toàn quốc</option>
											<option value='tra-vinh'>Trà Vinh</option>
											<option value='tuyen-quang'>Tuyên Quang</option>
											<option value='vinh-long'>Vĩnh Long</option>
											<option value='vinh-phuc'>Vĩnh Phúc</option>
											<option value='yen-bai'>Yên Bái</option>
										</optgroup>
										<optgroup label='Bangladesh'></optgroup>
										<optgroup label='Campuchia'>
											<option value='banteay-meanchey'>Banteay Meanchey</option>
											<option value='battambang'>Battambang</option>
											<option value='kampong-chhnang'>Kampong Chhnang</option>
											<option value='kampong-speu'>Kampong Speu</option>
											<option value='kampot'>Kampot</option>
											<option value='kandal'>Kandal</option>
											<option value='kep'>Kep</option>
											<option value='koh-kong'>Koh Kong</option>
											<option value='kratie'>Kratie</option>
											<option value='otdar-meanchey'>Otdar Meanchey</option>
											<option value='pailin'>Pailin</option>
											<option value='phnompenh'>Phnompenh</option>
											<option value='preah-vihear'>Preah Vihear</option>
											<option value='prey-veng'>Prey Veng</option>
											<option value='siem-reap'>Siem Reap</option>
											<option value='stung-treng'>Stung Treng</option>
											<option value='svay-rieng'>Svay Rieng</option>
											<option value='tbong-khmum'>Tbong Khmum</option>
										</optgroup>
										<optgroup label='Canada'></optgroup>
										<optgroup label='Công Gô'></optgroup>
										<optgroup label='Đài Loan'></optgroup>
										<optgroup label='Hàn Quốc'></optgroup>
										<optgroup label='Hoa Kỳ'>
											<option value='chicago'>Chicago</option>
											<option value='florida'>Florida</option>
											<option value='miami'>Miami</option>
											<option value='san-diego'>San Diego</option>
										</optgroup>
										<optgroup label='Hồng Kông'>
											<option value='hong-kong'>Hồng Kông</option>
										</optgroup>
										<optgroup label='Khác'>
											<option value='khac'>Khác</option>
										</optgroup>
										<optgroup label='Lào'>
											<option value='attapeu'>Attapeu</option>
											<option value='bokeo'>Bokeo</option>
											<option value='champasak'>Champasak</option>
											<option value='houaphanh'>Houaphanh</option>
											<option value='khammouane'>Khammouane</option>
											<option value='luang-prabang'>Luang Prabang</option>
											<option value='phongsaly'>Phongsaly</option>
											<option value='vientiane'>Vientiane</option>
											<option value='xiangkhouang'>Xiangkhouang</option>
										</optgroup>
										<optgroup label='Malaysia'>
											<option value='kuala-lumpur'>Kuala Lumpur</option>
											<option value='malaysia'>Malaysia</option>
										</optgroup>
										<optgroup label='Myanmar'>
											<option value='yangon'>Yangon</option>
										</optgroup>
										<optgroup label='Nhật Bản'>
											<option value='hokkaido'>Hokkaido</option>
											<option value='tokyo'>Tokyo</option>
											<option value='yokohama'>Yokohama</option>
										</optgroup>
										<optgroup label='Qatar'>
											<option value='qatar'>Qatar</option>
										</optgroup>
										<optgroup label='Quốc tế'>
											<option value='quoc-te'>Quốc tế</option>
										</optgroup>
										<optgroup label='Singapore'>
											<option value='singapore'>Singapore</option>
										</optgroup>
										<optgroup label='Trung Quốc'></optgroup>
										<optgroup label='Úc'></optgroup>
										<optgroup label='Ukraine'>
											<option value='kharkiv'>Kharkiv</option>
										</optgroup>
									</select>
								</div>
								<div className={sx('form-group', 'form-select')}>
									<label>Trạng thái tìm việc</label>
									<select name='urgentjob' id='urgentjob'>
										<option value={0}>Tất cả</option>
										<option value={1}>Ứng viên tìm việc khẩn cấp</option>
									</select>
								</div>
							</div>
							<div className={sx('form-group', 'form-submit', 'btn-submit-top', 'form-hidden-advanced')}>
								<button className={sx('btn-gradient', 'btn-submit')} type='submit'>
									<em className={cx('material-icons')}>search</em>Tìm
								</button>
							</div>
							<div className={sx('form-group', 'form-link-advanced', 'form-hidden-advanced')}>
								<a
									className={sx('btn-history')}
									href='https://careerbuilder.vn/vi/employers/hrcentral/search-history'>
									<em className={cx('material-icons')}>update</em>
									<span>Lịch Sử Tìm Kiếm</span>
								</a>
								<a className={sx('btn-advanced', 'btn-show')} href='javascript:void(0)'>
									<em className={cx('material-icons')}>zoom_in</em>
									<span>Tìm kiếm nâng cao</span>
								</a>
							</div>
							<div className={sx('form-wrap', 'form-wrap-advanced')}>
								<div className={sx('row')}>
									<div className={sx('col-md-6', 'col-xl-4', 'col-cus-xxl-4')}>
										<div className={sx('form-group', 'form-select')}>
											<label>Cấp bậc</label>
											<select name='level_id' id='level'>
												<option value={0} selected='selected'>
													Tất cả cấp bậc
												</option>
												<option value='sinh-vien-thuc-tap-sinh'>Sinh viên/ Thực tập sinh</option>
												<option value='moi-tot-nghiep'>Mới tốt nghiệp</option>
												<option value='nhan-vien'>Nhân viên</option>
												<option value='truong-nhom-giam-sat'>Trưởng nhóm / Giám sát</option>
												<option value='quan-ly'>Quản lý</option>
												<option value='quan-ly-cap-cao'>Quản lý cấp cao</option>
												<option value='dieu-hanh-cap-cao'>Điều hành cấp cao</option>
											</select>
										</div>
									</div>
									<div className={sx('col-md-6', 'col-xl-4', 'col-cus-xxl-4')}>
										<div className={sx('form-group', 'form-select')}>
											<label>Bằng cấp</label>
											<select name='degree_id_from' id='degree_id_from'>
												<option value={-1} selected='selected'>
													Tất cả bằng cấp
												</option>
												<option value={0}>Chưa tốt nghiệp</option>
												<option value={1}>Trung học</option>
												<option value={2}>Trung cấp</option>
												<option value={3}>Cao đẳng</option>
												<option value={4}>Đại học</option>
												<option value={5}>Sau đại học</option>
												<option value={6}>Khác</option>
											</select>
										</div>
									</div>
									<div className={sx('col-md-6', 'col-xl-4', 'col-cus-xxl-4')}>
										<div className={sx('form-group', 'form-select')}>
											<label>Đến</label>
											<select disabled='' name='degree_id_to' id='degree_id_to'></select>
										</div>
									</div>
									<div className={sx('col-md-6', 'col-xl-4', 'col-cus-xxl-4')}>
										<div className={sx('form-group', 'form-select')}>
											<label>Hình thức</label>
											<select name='job_type' id='job_type'>
												<option value={0}>Tất cả</option>
												<option value={1}>Nhân viên chính thức</option>
												<option value={2}>Bán thời gian</option>
												<option value={3}>Thời vụ - Nghề tự do </option>
												<option value={4}>Thực tập</option>
											</select>
										</div>
									</div>
									<div className={sx('col-md-6', 'col-xl-4', 'col-cus-xxl-4')}>
										<div className={sx('form-group', 'form-select')}>
											<label>Kinh nghiệm</label>
											<select name='experience' id='experience'>
												<option value={0} selected='selected'>
													Tất cả
												</option>
												<option value={1}>Có kinh nghiệm</option>
												<option value={2}>Chưa có kinh nghiệm</option>
											</select>
										</div>
									</div>
									<div className={sx('col-md-6', 'col-xl-4', 'col-cus-xxl-4')}>
										<div className={sx('form-from-to', 'form-text-ab')}>
											<div className={sx('form-group', 'form-text')}>
												<label>Từ</label>
												<input
													type='text'
													name='experience_from'
													id='experience_from'
													defaultValue=''
													disabled=''
												/>
											</div>
											<div className={sx('form-group', 'form-text')}>
												<label>Đến</label>
												<input
													type='text'
													name='experience_to'
													id='experience_to'
													defaultValue=''
													disabled=''
												/>
											</div>
											<div className={sx('text-ab')}>
												<p>năm</p>
											</div>
										</div>
									</div>
									<div className={sx('col-md-6', 'col-xl-4', 'col-cus-xxl-4')}>
										<div className={sx('form-group', 'form-select')}>
											<label>Giới tính</label>
											<select name='gender' id='gender'>
												<option value={0}>Tất cả</option>
												<option value={1}>Nam</option>
												<option value={2}>Nữ</option>
											</select>
										</div>
									</div>
									<div className={sx('col-md-6', 'col-xl-4', 'col-cus-xxl-4')}>
										<div className={sx('form-group', 'form-select')}>
											<label>Ngoại ngữ</label>
											<select name='language' id='language'>
												<option value={0} selected='selected'>
													Chọn
												</option>
												<option value='TA'>Tiếng Anh</option>
												<option value='TP'>Tiếng Pháp</option>
												<option value='TD'>Tiếng Đức</option>
												<option value='TN'>Tiếng nga</option>
												<option value='TT'>Tiếng Hoa</option>
												<option value='TJ'>Tiếng Nhật</option>
												<option value='TH'>Tiếng Hàn</option>
												<option value='TK'>Tiếng Khác</option>
											</select>
										</div>
									</div>
									<div className={sx('col-md-6', 'col-xl-4', 'col-cus-xxl-4')}>
										<div className={sx('form-group', 'form-select')}>
											<label>Trình độ</label>
											<select name='languagelevel' id='languagelevel'>
												<option value={0} selected='selected'>
													Chọn
												</option>
												<option value={1}>Bản ngữ</option>
												<option value={2}>Sơ cấp</option>
												<option value={3}>Trung cấp</option>
												<option value={4}>Cao cấp</option>
											</select>
										</div>
									</div>
									<div className={sx('col-md-6', 'col-xl-4', 'col-cus-xxl-4')}>
										<div className={sx('form-group', 'form-select')}>
											<label>Mức lương</label>
											<select name='salary' id='salary'>
												<option value='all'>Chọn</option>
												<option value='ltt'>Thỏa thuận</option>
												<option value='vnd'>VND</option>
												<option value='usd'>USD</option>
											</select>
										</div>
									</div>
									<div className={sx('col-md-6', 'col-xl-4', 'col-cus-xxl-4')}>
										<div className={sx('form-from-to')}>
											<div className={sx('form-group', 'form-text')}>
												<label>Từ</label>
												<input
													type='text'
													name='salary_from'
													id='salary_from'
													defaultValue=''
													disabled=''
												/>
											</div>
											<div className={sx('form-group', 'form-text')}>
												<label>Đến</label>
												<input type='text' name='salary_to' id='salary_to' defaultValue='' disabled='' />
											</div>
										</div>
									</div>
									<div className={sx('col-md-6', 'col-xl-4', 'col-cus-xxl-4')} />
									<div className={sx('col-md-6', 'col-xl-4', 'col-cus-xxl-4')}>
										<div className={sx('form-group', 'form-select')}>
											<label>Ngày truy cập / cập nhật</label>
											<select name='resume_date' id='resume_date'>
												<option value={1}>1 ngày trước</option>
												<option value={2}>2 ngày trước</option>
												<option value={3}>3 ngày trước</option>
												<option value={7}>1 tuần trước</option>
												<option value={14}>2 tuần trước</option>
												<option value={30}>1 tháng trước</option>
												<option value={90}>3 tháng trước</option>
												<option value={180}>6 tháng trước</option>
												<option value={270}>9 tháng trước</option>
												<option value={365}>1 năm trước</option>
												<option value={3650} selected='selected'>
													Tất cả hồ sơ
												</option>
											</select>
										</div>
										<div className={sx('form-group', 'form-radio')}>
											<div className={sx('group')}>
												<input
													type='radio'
													name='resume_time_kind'
													id='date-1'
													defaultValue='last_active'
													defaultChecked='checked'
												/>
												<label htmlFor='date-1'>Ngày truy cập </label>
											</div>
											<div className={sx('group')}>
												<input
													type='radio'
													name='resume_time_kind'
													id='date-2'
													defaultValue='last_modify'
												/>
												<label htmlFor='date-2'>Ngày cập nhật</label>
											</div>
										</div>
									</div>
									<div className={sx('col-md-6', 'col-xl-4', 'col-cus-xxl-4')}>
										<div className={sx('form-from-to')}>
											<div className={sx('form-group', 'form-text')}>
												<label>Tuổi từ</label>
												<input type='text' name='from_age' id='from_age' defaultValue='' />
											</div>
											<div className={sx('form-group', 'form-text')}>
												<label>Đến</label>
												<input type='text' name='to_age' id='to_age' defaultValue='' />
											</div>
										</div>
									</div>
									<div className={sx('col-md-6', 'col-xl-4', 'col-cus-xxl-4', 'order-submit')}>
										<div className={sx('form-group', 'form-submit')}>
											<button className={sx('btn-gradient', 'btn-submit')} type='submit'>
												{' '}
												<em className={sx('material-icons')}>search</em>Tìm
											</button>
										</div>
									</div>
									<div className={sx('col-md-6', 'col-xl-4', 'col-cus-xxl-4')} />
								</div>
								<div className={sx('col-lg-12')}>
									<div className={sx('form-group', 'form-link-advanced')}>
										<a
											className={sx('btn-history')}
											href='https://careerbuilder.vn/vi/employers/hrcentral/search-history'>
											<em className={sx('material-icons')}>update</em>
											<span>Lịch Sử Tìm Kiếm</span>
										</a>
										<a
											className={sx('btn-advanced', 'btn-less', '', '')}
											href='javascript:void(0)'
											id='expand_search'>
											<em className={sx('material-icons')}>zoom_out</em>
											<span>Thu gọn tìm kiếm</span>
										</a>
									</div>
								</div>
							</div>
						</form>
					</div>
				</div>
				<div className={sx('search-support-modal')} style={{ display: 'none' }}>
					<div className={sx('modal-head')}>
						<p className={sx('title')}>Hướng dẫn tìm kiếm</p>
					</div>
					<div className={sx('modal-body')}>
						<div className={sx('search-support')}>
							<div className={sx('modal-body')}>
								<div className={sx('search-support')}>
									<p>
										{' '}
										<strong>Từ khóa giúp bạn có kết quả tìm kiếm chính xác nhất.</strong>
									</p>
									<ul>
										<li>
											<p>
												Nhập một từ khóa tìm kiếm, Công cụ tìm kiếm sẽ giúp bạn tìm kiếm thông tin trong{' '}
												<strong>toàn bộ nội dung của Hồ Sơ Ứng Viên.</strong>
											</p>
										</li>
										<li>
											<p>
												Nhập cụm từ khóa tìm kiếm, kết quả tìm kiếm sẽ bao gồm tất cả Hồ Sơ Ứng Viên chứa
												bất kỳ từ nào trong cụm từ khóa tìm kiếm của bạn, theo thứ tự bất kỳ và hiển thị
												theo thời gian ứng viên truy cập.
											</p>
										</li>
									</ul>
									<p>Để tìm kiếm chính xác, vui lòng sắp xếp kết quả theo thứ tự “Phù Hợp”</p>
									<p>
										{' '}
										<strong>Tìm kiếm nâng cao</strong>
									</p>
									<p>
										Sử dụng các ký tự hỗ trợ tìm kiếm như :“Ngoặc kép”, ( Ngoặc đơn ), AND, OR, dấu * trong
										phần từ khóa tìm kiếm. Chi tiết như sau :
									</p>
									<table>
										<thead>
											<tr>
												<th>cách sử dụng</th>
												<th>ví dụ</th>
											</tr>
										</thead>
										<tbody>
											<tr>
												<td className={sx('title')} colSpan={2}>
													<p>1.AND và OR</p>
												</td>
											</tr>
											<tr>
												<td>
													<p>
														{' '}
														<strong>AND </strong>cho phép bạn kết hợp các từ khóa tìm kiếm
													</p>
												</td>
												<td>
													<p>
														{' '}
														<strong>PHP AND JAVA </strong>(tất cả hồ sơ chứa từ PHP và từ JAVA)
													</p>
												</td>
											</tr>
											<tr>
												<td>
													<p>
														{' '}
														<strong>OR </strong>cho phép bạn tìm kiếm từ khóa bất kỳ
													</p>
												</td>
												<td>
													<p>
														{' '}
														<strong>PHP OR JAVA </strong>(tất cả hồ sơ chứa từ PHP và tất cả hồ sơ chứa từ
														JAVA)
													</p>
												</td>
											</tr>
											<tr>
												<td>
													<p>
														Kết hợp <strong>AND </strong>và <strong>OR</strong>
													</p>
												</td>
												<td>
													<p>
														{' '}
														<strong>PHP OR JAVA AND Developer </strong>(tất cả các hồ sơ chứa PHP
														Developer hoặc JAVA Developer)
													</p>
												</td>
											</tr>
											<tr>
												<td>
													<p>
														{' '}
														<strong className={sx('noted')}>Lưu ý : </strong>
													</p>
													<ul>
														<li>
															<p>
																{' '}
																<strong>AND </strong>và <strong>OR </strong>phải được viết hoa. Nếu viết
																thường sẽ được hiểu là từ khóa cần tìm kiếm
															</p>
														</li>
														<li>
															<p>Hỗ trợ sử dụng tối đa 3 AND hoặc OR trong mỗi cụm tìm kiếm</p>
														</li>
													</ul>
												</td>
												<td> </td>
											</tr>
											<tr>
												<td className={sx('title')} colSpan={2}>
													<p>2. Kết hợp () trong từ khóa tìm kiếm</p>
												</td>
											</tr>
											<tr>
												<td>
													<p>
														{' '}
														<strong>(A OR B) AND (C OR D)</strong>
													</p>
												</td>
												<td>
													<p>
														{' '}
														<strong>(Java OR PHP) AND (Developer OR Programmer) </strong>
														(tất cả hồ sơ chứa từ PHP Developer, PHP Programmer, Java Developer hoặc JAVA
														Programmer)
													</p>
												</td>
											</tr>
											<tr>
												<td className={sx('title')} colSpan={2}>
													<p>3. Tìm kiếm chính xác với “”</p>
												</td>
											</tr>
											<tr>
												<td>
													<p>
														{' '}
														<strong>“Ngoặc Kép”</strong> để tìm chính xác cụm từ
													</p>
												</td>
												<td>
													<p>
														{' '}
														<strong>“PHP Developer”</strong> ( tất cả hồ sơ chỉ chứa từ “PHP Developer” )
													</p>
												</td>
											</tr>
											<tr>
												<td>
													<p>
														Sử dụng <strong>kết hợp AND, OR, “Ngoặc Kép” </strong>để có kết quả tìm kiếm
														chính xác nhất
													</p>
												</td>
												<td>
													<p>
														{' '}
														<strong>"Software Engineer" AND Html5</strong> ( tất cả hồ sơ có từ khóa chính
														xác là Software Engineer và có từ khóa HTML5 hoặc các từ khóa đồng nghĩa với
														HTML5)
													</p>
												</td>
											</tr>
											<tr>
												<td>
													<p>
														{' '}
														<strong className={sx('noted')}>Lưu ý : </strong>
													</p>
													<p>
														Khi sử dụng “” hoặc (), nếu không có dấu đóng ngoặc: thông báo chuỗi tìm kiếm
														không hợp lệ.
													</p>
												</td>
												<td> </td>
											</tr>
											<tr>
												<td className={sx('title')} colSpan={2}>
													<p>
														4. Sử dụng cụm từ đại diện cho từ, cụm từ trong kết quả tìm kiếm với dấu *:
													</p>
												</td>
											</tr>
											<tr>
												<td>
													<p>Sử dụng dấu * sau một từ/cụm từ</p>
												</td>
												<td>
													<p>
														{' '}
														<strong>JAVA Dev*</strong> (các hồ sơ có chứa cụm JAVA Dev, có thể là JAVA
														Develop, JAVA Developing, JAVA Developer…)
													</p>
												</td>
											</tr>
											<tr>
												<td>
													<p>Sử dụng dấu * trước và sau một từ/cụm từ</p>
												</td>
												<td>
													<p>
														{' '}
														<strong>*Dev* </strong>(các hồ sơ có chứa Dev, có thể là JAVA Developer, PHP
														Develop, Game Develop…)Develop, JAVA Developing, JAVA Developer…)
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
				<div className={sx('box-resume-search-search-result')}>
					<div className={sx('search-result-top')}>
						<div className={sx('top')}>
							<p className={sx('success')}>
								Chúng tôi đã tìm thấy <strong> 52,143</strong> <strong>hồ sơ phù hợp</strong> theo như tiêu chí
								tìm kiếm của quý khách
							</p>
							<a href='javascript:void(0);' className={sx('created-alerts')}>
								Tạo thông báo email với tiêu chí tìm kiếm này
							</a>
						</div>
						<div className={sx('bottom')}>
							<div className={sx('job-name')}>
								<p>
									<strong>Ngành nghề: </strong>
									<span>
										<a href='https://careerbuilder.vn/vi/tim-ung-vien/nganh-nghe/cntt-phan-mem'>
											CNTT - Phần mềm
										</a>
									</span>
								</p>
							</div>
						</div>
					</div>
					<div className={sx('main-jobs-posting')}>
						<div className={sx('heading-jobs-posting')}>
							<div className={sx('left-heading')}>
								<p className={sx('name')}>Xem:</p>
								<ul className={sx('list-check')}>
									<li className={sx('view-posting-detail')}>
										<a href='javascript:;'>Chi tiết</a>
									</li>
									<li className={sx('view-posting-summary', 'active')}>
										<a href='javascript:void(0)'>Tóm tắt</a>
									</li>
								</ul>
							</div>
							<div className={sx('right-heading')}>
								<div className={sx('to-display')}>
									<p className={sx('name')}>Sắp xếp</p>
									<div className={sx('form-sort')}>
										<select
											id='box_sort_change'
											onchange="changesort('https://careerbuilder.vn/vi/tim-ung-vien/nganh-nghe/cntt-phan-mem');">
											<option value='phh'>Phù hợp</option>
											<option value='kng'>Kinh nghiệm</option>
											<option value='lng'>Mức lương</option>
											<option value='date' selected='selected'>
												Ngày truy cập
											</option>
										</select>
									</div>
									<p className={sx('name-display')}>
										Hiển thị <strong>1 - 20 </strong> trong <strong>52,143</strong> hồ sơ
									</p>
								</div>
							</div>
						</div>
						<div className={sx('boding-jobs-posting')}>
							<div className={sx('table', 'table-jobs-posting')}>
								<table>
									<thead>
										<tr>
											<th width='48%'>Ứng Viên</th>
											<th width='10%'>
												<a href='https://careerbuilder.vn/vi/tim-ung-vien/nganh-nghe/cntt-phan-mem/sort/kng_desc'>
													Kinh nghiệm
												</a>
											</th>
											<th width='10%'>
												<a href='https://careerbuilder.vn/vi/tim-ung-vien/nganh-nghe/cntt-phan-mem/sort/lng_desc'>
													Lương
												</a>
											</th>
											<th width='10%'>Nơi làm việc</th>
											<th width='12%'>
												<a href='https://careerbuilder.vn/vi/tim-ung-vien/nganh-nghe/cntt-phan-mem/sort/date_desc'>
													Ngày truy cập
													<em className={cx('material-icons')}>arrow_drop_down</em>
												</a>
											</th>
											<th width='10%'>Thao tác</th>
										</tr>
									</thead>
									<tbody>
										<tr>
											<td>
												<div className={sx('title')}>
													<div className={sx('job-name')}>
														<a
															className={sx('job-title')}
															href='https://careerbuilder.vn/vi/employers/popup/resumeinfo/35A4E900/35A4E900/director/35A57C18.html?'
															target='_blank'
															title='Director'>
															<b>Director</b>
														</a>
														<p className={sx('status', 'viewed', 'chkBuy')} data-idcheck='35A57C18'>
															<em className={sx('material-icons')}>visibility </em> Đã xem&nbsp;
														</p>
														<p className={sx('status', 'bought', 'hidden')}>
															<em className={sx('material-icons')}>visibility </em> Đã mua&nbsp;
														</p>
													</div>
													<div className={sx('status')}></div>
													<a
														className={sx('name')}
														href='https://careerbuilder.vn/vi/employers/popup/resumeinfo/35A4E900/35A4E900/director/35A57C18.html?'>
														Bảo mật
													</a>
													<a className={sx('attach-button')} href='javascript:;'>
														<img
															src='img/resume_type_0.gif'
															width={16}
															height={16}
															alt='
Hồ sơ Theo mẫu
'
															title='Hồ sơ Theo mẫu
'
														/>
													</a>
													<ul className={sx('info-list')}>
														<li>
															<p>
																{' '}
																<strong>Học vấn: </strong>Đại học
															</p>
														</li>
														<li>
															<p>
																{' '}
																<strong>Cấp bậc: </strong>Nhân viên
															</p>
														</li>
													</ul>
												</div>
												<div className={sx('jobs-view-detail')} style={{ display: 'block' }}>
													<p>
														1. Sẽ trở thành một giám đốc kinh doanh chuyên nghiệp 2. Được làm việc trong
														một công ty chuyên nghiệp và một môi trường năng động đặc biệt là PR hoặc Ma
													</p>
												</div>
												<div className={sx('tag-list')}>
													<a
														href='javascript:void(0);'
														className={sx('add-moretag', '')}
														onclick='return addResumeTag(37656)'>
														+ Thêm Tag
													</a>
												</div>
											</td>
											<td>
												<p>2 năm</p>
											</td>
											<td>
												<p>Thỏa thuận</p>
											</td>
											<td>Hà Nội</td>
											<td>
												<p>6 tháng</p>
											</td>
											<td>
												<ul className={sx('list-manipulation')}>
													<li>
														<a
															className={sx('btn-add-tag')}
															href='javascript:void(0);'
															onclick='return addResumeTag(37656)'
															title='Thêm tag'>
															<em className={cx('material-icons')}>local_offer</em>
														</a>
													</li>
													<li>
														<a
															className={sx('btn-popup-flipview')}
															title='Xem hồ sơ dạng Flipview'
															href='javascript:void(0)'
															onclick="windowFlipView('bmdhbmgtbmdoZS9jbnR0LXBoYW4tbWVtL3NvcnQvZGF0ZV9hc2M=',0, 3);">
															<em className={cx('material-icons')}>import_contacts </em>
														</a>
													</li>
													<li>
														<a
															href='javascript:void(0)'
															onclick="showFoldersSelected('35A57C18');"
															className={sx('btn-save-folder')}
															title='Lưu vào thư mục'>
															<em className={cx('material-icons')}>folder_shared </em>
														</a>
													</li>
													<li>
														<a
															href='https://careerbuilder.vn/vi/tim-ung-vien/tu-khoa/director/noi-lam-viec/ha-noi'
															title='Xem hồ sơ tương tự'>
															{' '}
															<em className={cx('material-icons')}>account_box </em>
														</a>
													</li>
													<li>
														<a
															className={sx('btn-delete')}
															href='javascript:void(0)'
															onclick='return addResumeHidden(1, 37656);'
															title='Ẩn hồ sơ'>
															{' '}
															<em className={cx('material-icons')}>cancel </em>
														</a>
													</li>
												</ul>
											</td>
										</tr>
										
									</tbody>
								</table>
							</div>
							<div className={sx('main-pagination')}>
								<div className={sx('main-pagination')}>
									<ul className={sx('pagination')}>
										<li className={sx('PagerOtherPageCells', 'active')}>
											<a href='javascript:void(0);'>1</a>
										</li>
										<li className={sx('PagerOtherPageCells')}>
											<a href='https://careerbuilder.vn/vi/tim-ung-vien/nganh-nghe/cntt-phan-mem/sort/date_asc/page/2'>
												2
											</a>
										</li>
										<li className={sx('PagerOtherPageCells')}>
											<a href='https://careerbuilder.vn/vi/tim-ung-vien/nganh-nghe/cntt-phan-mem/sort/date_asc/page/3'>
												3
											</a>
										</li>
										<li className={sx('PagerOtherPageCells')}>
											<a href='https://careerbuilder.vn/vi/tim-ung-vien/nganh-nghe/cntt-phan-mem/sort/date_asc/page/4'>
												4
											</a>
										</li>
										<li className={sx('PagerOtherPageCells')}>
											<a href='https://careerbuilder.vn/vi/tim-ung-vien/nganh-nghe/cntt-phan-mem/sort/date_asc/page/5'>
												5
											</a>
										</li>
										<li className={sx('PagerOtherPageCells')}>
											<a
												className={sx('LastPage')}
												href='https://careerbuilder.vn/vi/tim-ung-vien/nganh-nghe/cntt-phan-mem/sort/date_asc/page/2'>
												<em className={cx('mdi', 'mdi-chevron-right')} />
											</a>
										</li>
									</ul>
								</div>
							</div>
							<div className={sx('main-button-sticky')}>
								<div className={sx('button-prev', 'disabled')}>
									<em className={cx('mdi', 'mdi-chevron-left')} />
								</div>
								<div className={sx('button-next')}>
									<em className={cx('mdi', 'mdi-chevron-right')} />
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
};

export default FindJobSeeker;
