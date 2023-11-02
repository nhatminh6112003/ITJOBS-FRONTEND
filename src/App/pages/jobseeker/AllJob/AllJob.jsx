import styles from './AllJob.module.css';
import classNames from 'classnames/bind';
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import jobPostStatusEnum from '~/App/constants/jobPostStatusEnum';
import { useGetAllJobPostQuery } from '~/App/providers/apis/jobPostApi';
import { useGetAllProvincesQuery } from '~/App/providers/apis/listProvincesApi';

import { SearchIcon, FavoriteBorderIcon } from '~/Core/resources';
import formatDate from '~/Core/utils/formatDate';
const cx = classNames.bind(styles);
const AllJob = () => {
	const { data: allJobPost, isLoading } = useGetAllJobPostQuery({
		params: {
			status: jobPostStatusEnum.Publish,
			isDeleted: false
		}
	});
	const { data: listProvinces } = useGetAllProvincesQuery();
	const [provinces, setProvinces] = useState('');
	const [isChecked, setIsChecked] = useState(false);

	const activeJobPosts = allJobPost?.data;
	const activeJobPostsWorkHome = allJobPost?.data.filter((job_post) => job_post.work_home === true);
	const handleCheckboxChange = () => {
		setIsChecked(!isChecked);
	};

	useEffect(() => {
		allJobPost?.data?.map((detailJob) => {
			return listProvinces?.map((item) => {
				if (item.code == detailJob?.provinces) {
					setProvinces(item.name);
				}
			});
		});
	}, [allJobPost, listProvinces]);

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
											checked={isChecked}
											onChange={handleCheckboxChange}
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
									<h1>{isChecked ? activeJobPostsWorkHome?.length : activeJobPosts?.length} việc làm</h1>
								</div>
								<div className={cx('job-found-sort')}>
									<span className={cx('sort-title dropdown')}>
										Sắp xếp theo
										<em className={cx('mdi mdi-chevron-down')} />
										<div className={cx('dropdown-menu')}>
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
							<div className={cx('main-slide')}>
								<div className={cx('jobs-side-list')} id='jobs-side-list-content'>
									{isChecked
										? allJobPost?.data.map((job_post) => {
												if (job_post.work_home === true) {
													return (
														<>
															<div className={cx('job-item')} id='job-item-35BB3D60'>
																<div className={cx('figure')}>
																	<div className={cx('image')}>
																		<Link
																			to={`/nha-tuyen-dung/${job_post?.company_id}`}
																			target='_blank'
																			title={job_post?.company?.company_name}
																			rel='noreferrer'>
																			<img
																				className={cx('lazy-img')}
																				src={job_post?.company?.logo}
																				alt={job_post?.company?.company_name}
																			/>
																		</Link>
																	</div>
																	<div className={cx('figcaption')}>
																		<div className={cx('title')}>
																			<h2>
																				<a
																					className={cx('job_link')}
																					data-id='35BB3D60'
																					href={`/tim-viec-lam/${job_post?.id}`}
																					target='_blank'
																					title={job_post?.job_title}
																					rel='noreferrer'>
																					{job_post?.job_title}
																					<span className={cx('new')}>
																						<font color='ff0000'>(Mới)</font>
																					</span>{' '}
																				</a>
																			</h2>
																		</div>
																		<div className={cx('caption')}>
																			<a
																				className={cx('company-name')}
																				target='_blank'
																				href={`/nha-tuyen-dung/${job_post?.company_id}`}
																				title={job_post?.company?.company_name}
																				rel='noreferrer'>
																				{job_post?.company?.company_name}
																			</a>
																			<a
																				className={cx('job_link')}
																				data-id='35BB3D60'
																				href={`/tim-viec-lam/${job_post?.id}`}
																				target='_blank'
																				title={job_post?.job_title}
																				rel='noreferrer'>
																				<div className={cx('salary')}>
																					<p>
																						<em className='fa fa-usd' />
																						Lương:{' '}
																						{parseInt(job_post?.min_salary)
																							.toString()
																							.charAt(0)}{' '}
																						Tr -{' '}
																						{parseInt(job_post?.max_salary).toString().charAt(0)}{' '}
																						Tr VND
																					</p>
																				</div>
																				<div className={cx('location')}>
																					<em className='mdi mdi-map-marker' />
																					<ul>{provinces && <li>{provinces}</li>}</ul>
																				</div>
																				{/* <ul className={cx('welfare')}>
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
																			</ul> */}
																			</a>
																		</div>
																		<div className={cx('bottom-right-icon')}>
																			<ul>
																				<li>
																					<a
																						className={cx(
																							'toollips',
																							'save-job',
																							'chk_save_35BB3D60'
																						)}
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
																				<time>{formatDate(job_post?.updatedAt)}</time>
																				{/* <div className={cx("toolip")}>
									  <p>Ngày cập nhật</p>
									</div> */}
																			</div>
																		</div>
																	</div>
																</div>
															</div>
														</>
													);
												}
										  })
										: allJobPost?.data.map((job_post) => {
												return (
													<>
														<div className={cx('job-item')} id='job-item-35BB3D60'>
															<div className={cx('figure')}>
																<div className={cx('image')}>
																	<Link
																		to={`/nha-tuyen-dung/${job_post?.company_id}`}
																		target='_blank'
																		title={job_post?.company?.company_name}
																		rel='noreferrer'>
																		<img
																			className={cx('lazy-img')}
																			src={job_post?.company?.logo}
																			alt={job_post?.company?.company_name}
																		/>
																	</Link>
																</div>
																<div className={cx('figcaption')}>
																	<div className={cx('title')}>
																		<h2>
																			<a
																				className={cx('job_link')}
																				data-id='35BB3D60'
																				href={`/tim-viec-lam/${job_post?.id}`}
																				target='_blank'
																				title={job_post?.job_title}
																				rel='noreferrer'>
																				{job_post?.job_title}
																				<span className={cx('new')}>
																					<font color='ff0000'>(Mới)</font>
																				</span>{' '}
																			</a>
																		</h2>
																	</div>
																	<div className={cx('caption')}>
																		<a
																			className={cx('company-name')}
																			target='_blank'
																			href={`/nha-tuyen-dung/${job_post?.company_id}`}
																			title={job_post?.company?.company_name}
																			rel='noreferrer'>
																			{job_post?.company?.company_name}
																		</a>
																		<a
																			className={cx('job_link')}
																			data-id='35BB3D60'
																			href={`/tim-viec-lam/${job_post?.id}`}
																			target='_blank'
																			title={job_post?.job_title}
																			rel='noreferrer'>
																			<div className={cx('salary')}>
																				<p>
																					<em className='fa fa-usd' />
																					Lương:{' '}
																					{parseInt(job_post?.min_salary).toString().charAt(0)} Tr
																					- {parseInt(job_post?.max_salary).toString().charAt(0)}{' '}
																					Tr VND
																				</p>
																			</div>
																			<div className={cx('location')}>
																				<em className='mdi mdi-map-marker' />
																				<ul>{provinces && <li>{provinces}</li>}</ul>
																			</div>
																			{/* <ul className={cx('welfare')}>
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
																		</ul> */}
																		</a>
																	</div>
																	<div className={cx('bottom-right-icon')}>
																		<ul>
																			<li>
																				<a
																					className={cx(
																						'toollips',
																						'save-job',
																						'chk_save_35BB3D60'
																					)}
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
																			<time>{formatDate(job_post?.updatedAt)}</time>
																			{/* <div className={cx("toolip")}>
								  <p>Ngày cập nhật</p>
								</div> */}
																		</div>
																	</div>
																</div>
															</div>
														</div>
													</>
												);
										  })}
								</div>

								{/* <div className={cx('pagination')}>
									<ul>
										<li className={cx('active')}>
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
										<li className={cx('next-page')}>
											<a href='https://careerbuilder.vn/viec-lam/tat-ca-viec-lam-trang-2-vi.html'>
												{' '}
												<span className={cx('mdi mdi-chevron-right')} />
											</a>
										</li>
									</ul>
								</div> */}
							</div>
							<div className={cx('job-bottom-banner')} style={{ textAlign: 'center' }}></div>
						</div>
						<div className={cx('col-lg-4 col-custom-xxl-3')}>
							<div className={cx('box-most-find')}>
								<div className={cx('box-title')}>
									<h4>Việc làm được tìm kiếm nhiều nhất</h4>
								</div>
								<div className={cx('box-content')}>
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
							<div className={cx('list-banner-search-result')}>
								{/* remve class sticky*/}
								<div className={cx('banner-ad loadAds')} id={854} />
								<div className={cx('banner-ad loadAds')} id={855} />
								<div className={cx('banner-ad loadAds')} id={856} />
								<div className={cx('banner-ad')} style={{ textAlign: 'center' }}></div>
							</div>
						</div>{' '}
					</div>
				</div>
			</section>
			<div className={cx('sticker-jobs')}>
				<div className={cx('icons')}>
					<em className={cx('material-icons')}>access_alarms</em>
				</div>
				<div className={cx('content')}>
					<p>Gửi tôi việc làm tương tự</p>
				</div>
				<div className={cx('button')}>
					{' '}
					<a href='' onClick='return adVanceJobalert();'>
						Đăng ký ngay
					</a>
				</div>
			</div>
		</>
	);
};

export default AllJob;
