import React, { useEffect, useState } from 'react';
import styles from './DetailJobPost.module.css';
import classNames from 'classnames/bind';
import { useGetOneJobPostQuery } from '~/App/providers/apis/jobPostApi';
import { Link, useParams } from 'react-router-dom';
import formatDate from '~/Core/utils/formatDate';
import { experienceEnum } from '~/App/constants/experienceEnum';
import { LevelArray } from '~/App/constants/levelEnum';
import { DegreeArray } from '~/App/constants/degreeArray';
import GenderEnum from '~/App/constants/genderEnum';
import { useGetAllProvincesQuery } from '~/App/providers/apis/listProvincesApi';
import { useGetAllDistrictsQuery } from '~/App/providers/apis/districtsApi';
import { useGetAllJobPostActivityApiQuery } from '~/App/providers/apis/jobPostActivityApi';
import { useSelector } from 'react-redux';
import {
	useCreateJobSavedMutation,
	useDeleteJobSavedMutation,
	useGetAllJobSavedQuery
} from '~/App/providers/apis/jobSavedApi';
import { toast } from 'react-toastify';
const sx = classNames.bind(styles);

const DetailJobPost = ({ cx }) => {
	const { id } = useParams();
	const user = useSelector((state) => state.auth.user);
	const { data: detailJobPost } = useGetOneJobPostQuery(id);
	const { data: listProvinces } = useGetAllProvincesQuery();
	const [provinces, setProvinces] = useState('');
	const [districts, setDistricts] = useState('');
	const { data: allJobSaved } = useGetAllJobSavedQuery(user?.id);
	const jobExperienceLabel = experienceEnum[detailJobPost?.job_experience_value]?.label;
	const jobFormExperience = detailJobPost?.job_formExperience;
	const jobToExperience = detailJobPost?.job_ToExperience;
	const { data: listDistricts } = useGetAllDistrictsQuery(
		{
			params: {
				depth: 2
			},
			code: detailJobPost?.provinces
		},
		{
			skip: !detailJobPost?.provinces
		}
	);
	const [createJobSaved] = useCreateJobSavedMutation();
	const [deleteJobSaved] = useDeleteJobSavedMutation();
	const { data: allJobPostActivity } = useGetAllJobPostActivityApiQuery(
		{
			params: {
				user_account_id: user?.id
			}
		},
		{ skip: !user?.id }
	);
	const isIdInData = allJobPostActivity?.data.some((item) => item.job_id === id);

	useEffect(() => {
		listProvinces?.map((item) => {
			if (item.code == detailJobPost?.provinces) {
				setProvinces(item.name);
			}
		});
		listDistricts?.districts?.map((item) => {
			if (item.code == detailJobPost?.districts) {
				setDistricts(item.name);
			}
		});
	}, [detailJobPost, listProvinces, listDistricts, allJobSaved]);
	const handleCreateJobSaved = (id) => {
		const data = {
			user_account_id: user?.id,
			job_id: id
		};
		createJobSaved(data)
			.unwrap()
			.then((value) => {
				toast.success('Đã lưu tin tuyển dụng');
			})
			.catch((error) => {
				toast.error(error.data.message);
			});
	};
	const handleDeleteJobSaved = (id) => {
		deleteJobSaved(id)
			.unwrap()
			.then((res) => {
				toast.success('Xóa thành công');
			})
			.catch((err) => {
				toast.error(err.data?.message);
			});
	};
	return (
		<>
			<section className={sx('find-jobs-form')}>
				<div className={cx('container')}>
					<div className={sx('main-form')}>
						<div className={sx('close-input-filter')}>
							<em className={sx('lnr', 'lnr-cross')} />
						</div>
						<form>
							<div className={sx('advanced-search')}>
								<div className={sx('form-group', 'form-keyword')}>
									<input
										type='search'
										className={sx('keyword')}
										name='keyword'
										id='keyword'
										placeholder='Chức danh, Kỹ năng, Tên công ty'
									/>
									<div className={sx('cleartext')}>
										<em className={cx('mdi', 'mdi-close-circle')} />
									</div>
								</div>
								<div className={sx('form-group', 'form-select-chosen')}>
									<select
										id='industry'
										name='industry'
										className={sx('chosen-select-max-three')}
										data-placeholder='Tất cả ngành nghề'
										multiple=''>
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
										<option value='dich-vu-khach-hang_12'>Dịch vụ khách hàng</option>
										<option value='du-lich_34'>Du lịch</option>
										<option value='duoc-pham_7'>Dược phẩm</option>
										<option value='dien-dien-tu-dien-lanh_48'>Điện / Điện tử / Điện lạnh</option>
										<option value='do-go_35'>Đồ gỗ</option>
										<option value='giai-tri_15'>Giải trí</option>
										<option value='giao-duc-dao-tao_13'>Giáo dục / Đào tạo</option>
										<option value='hang-gia-dung-cham-soc-ca-nhan_10'>
											Hàng gia dụng / Chăm sóc cá nhân
										</option>
										<option value='hang-hai_61'>Hàng hải</option>
										<option value='hang-khong_60'>Hàng không</option>
										<option value='hanh-chinh-thu-ky_3'>Hành chính / Thư ký</option>
										<option value='hoa-hoc_41'>Hóa học</option>
										<option value='in-an-xuat-ban_64'>In ấn / Xuất bản</option>
										<option value='ke-toan-kiem-toan_2'>Kế toán / Kiểm toán</option>
										<option value='khoang-san_65'>Khoáng sản</option>
										<option value='kien-truc_6'>Kiến trúc</option>
										<option value='lao-dong-pho-thong_44'>Lao động phổ thông</option>
										<option value='lam-nghiep_50'>Lâm Nghiệp</option>
										<option value='luat-phap-ly_24'>Luật / Pháp lý</option>
										<option value='moi-truong_16'>Môi trường</option>
										<option value='moi-tot-nghiep-thuc-tap_45'>Mới tốt nghiệp / Thực tập</option>
										<option value='my-thuat-nghe-thuat-thiet-ke_11'>Mỹ thuật / Nghệ thuật / Thiết kế</option>
										<option value='ngan-hang_19'>Ngân hàng</option>
										<option value='nha-hang-khach-san_29'>Nhà hàng / Khách sạn</option>
										<option value='nhan-su_22'>Nhân sự</option>
										<option value='noi-ngoai-that_47'>Nội ngoại thất</option>
										<option value='nong-nghiep_5'>Nông nghiệp</option>
										<option value='phi-chinh-phu-phi-loi-nhuan_20'>Phi chính phủ / Phi lợi nhuận</option>
										<option value='quan-ly-chat-luong-qa-qc_42'>Quản lý chất lượng (QA/QC)</option>
										<option value='quan-ly-dieu-hanh_17'>Quản lý điều hành</option>
										<option value='quang-cao-doi-ngoai-truyen-thong_67'>
											Quảng cáo / Đối ngoại / Truyền Thông
										</option>
										<option value='san-xuat-van-hanh-san-xuat_25'>Sản xuất / Vận hành sản xuất</option>
										<option value='tai-chinh-dau-tu_59'>Tài chính / Đầu tư</option>
										<option value='thong-ke_36'>Thống kê</option>
										<option value='thu-mua-vat-tu_43'>Thu mua / Vật tư</option>
										<option value='thuy-loi_53'>Thủy lợi</option>
										<option value='thuy-san-hai-san_49'>Thủy sản / Hải sản</option>
										<option value='thu-vien_57'>Thư viện</option>
										<option value='thuc-pham-do-uong_21'>Thực phẩm &amp; Đồ uống</option>
										<option value='tiep-thi-marketing_4'>Tiếp thị / Marketing</option>
										<option value='tiep-thi-truc-tuyen_37'>Tiếp thị trực tuyến</option>
										<option value='to-chuc-su-kien_68'>Tổ chức sự kiện</option>
										<option value='trac-dia-dia-chat_54'>Trắc địa / Địa Chất</option>
										<option value='truyen-hinh-bao-chi-bien-tap_66'>Truyền hình / Báo chí / Biên tập</option>
										<option value='tu-van_9'>Tư vấn</option>
										<option value='van-chuyen-giao-nhan-kho-van_33'>Vận chuyển / Giao nhận / Kho vận</option>
										<option value='xay-dung_8'>Xây dựng</option>
										<option value='xuat-nhap-khau_18'>Xuất nhập khẩu</option>
										<option value='y-te-cham-soc-suc-khoe_56'>Y tế / Chăm sóc sức khỏe</option>
										<option value='bao-tri-sua-chua_71'>Bảo trì / Sửa chữa</option>
										<option value='nganh-khac_27'>Ngành khác</option>
									</select>
								</div>
								<div className={sx('form-group', 'form-select-chosen')}>
									<select
										id='location'
										name='location'
										className={sx('chosen-select-max-three')}
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
										<option value='yen-bai_29'>Yên Bái</option>
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
										<option value='tbong-khmum_1082'>Tbong Khmum</option>
										<option value='chicago_1034'>Chicago</option>
										<option value='florida_1077'>Florida</option>
										<option value='miami_1033'>Miami</option>
										<option value='san-diego_1039'>San Diego</option>
										<option value='hong-kong_1079'>Hồng Kông</option>
										<option value='khac_1318'>Khác</option>
										<option value='attapeu_1106'>Attapeu</option>
										<option value='bokeo_1107'>Bokeo</option>
										<option value='champasak_1109'>Champasak</option>
										<option value='houaphanh_1110'>Houaphanh</option>
										<option value='khammouane_1111'>Khammouane</option>
										<option value='luang-prabang_1113'>Luang Prabang</option>
										<option value='phongsaly_1115'>Phongsaly</option>
										<option value='vientiane_1059'>Vientiane</option>
										<option value='xiangkhouang_1120'>Xiangkhouang</option>
										<option value='kuala-lumpur_1019'>Kuala Lumpur</option>
										<option value='malaysia_1078'>Malaysia</option>
										<option value='yangon_1320'>Yangon</option>
										<option value='hokkaido_1043'>Hokkaido</option>
										<option value='tokyo_1001'>Tokyo</option>
										<option value='yokohama_1002'>Yokohama</option>
										<option value='qatar_1055'>Qatar</option>
										<option value='quoc-te_1073'>Quốc tế</option>
										<option value='singapore_1040'>Singapore</option>
										<option value='kharkiv_1053'>Kharkiv</option>
									</select>
								</div>
								<div className={sx('form-group', 'find-jobs')}>
									<button className={sx('btn-gradient')} onclick="return validDatasearchJobsByKeyword('vi');">
										<p>Tìm Ngay</p>
										<span className={sx('mdi', 'mdi-magnify')} />{' '}
									</button>
								</div>
								<div className={sx('form-group', 'animation')}>
									<button className={sx('btn-gradient')} onclick="return validDatasearchJobsByKeyword('vi');">
										<p>Tìm Ngay</p>
										<span className={sx('mdi', 'mdi-magnify')} />{' '}
									</button>
								</div>
							</div>
						</form>
					</div>
				</div>
			</section>
			<section className={sx('search-result-list-detail', 'template-2')}>
				<div className={cx('container')}>
					<div className={cx('row', 'no-gutters')}>
						<div className={cx('col-12', 'mb-15')}>
							<section className={sx('apply-now-banner', '', '')}>
								<div className={sx('image')}>
									<img
										src={
											detailJobPost?.company?.banner
												? `${import.meta.env.VITE_IMAGE_URL}/${detailJobPost.company.banner}`
												: 'https://images.careerbuilder.vn/employer_folders/lot6/181286/131718banner-doitac.jpg'
										}
										alt={detailJobPost?.company?.company_name}
									/>
								</div>
								<div className={sx('apply-now-content')}>
									<div className={sx('job-desc')}>
										<h1 className={sx('title')}>{detailJobPost?.job_title}</h1>
										<a
											className={sx('employer', 'job-company-name')}
											href='https://careerbuilder.vn/vi/nha-tuyen-dung/cong-ty-luat-tnhh-dentons-luat-viet.35A93D3A.html'>
											{detailJobPost?.company?.company_name}
										</a>
									</div>
									<div className={sx('apply-type')}>
										{/* <a
											tabIndex={0}
											role='button'
											className={sx('btn-check-fit', '', 'matching-scores', 'matching-scores-35BE1408')}
											id='matching-scores-35BE1408'
											data-loader='customLoaderName'
											dataid='35BE1408'>
											Mức độ phù hợp...
										</a> */}
										<div className={sx('apply-now-btn', isIdInData ? 'success' : '')}>
											{isIdInData ? (
												<a style={{ cursor: 'pointer' }} className={sx('btn-gradient', 'btnApplyClick')}>
													Nộp Đơn Ứng Tuyển
												</a>
											) : (
												<Link
													to={`/jobseekers/jobs/apply/${detailJobPost?.id}`}
													className={sx('btn-gradient', 'btnApplyClick')}>
													Nộp Đơn Ứng Tuyển
												</Link>
											)}
										</div>
									</div>
								</div>
							</section>
						</div>
						<div className={sx('col-lg-7', 'col-custom-xxl-9')}>
							<div className={sx('tabs')}>
								<nav className={sx('job-result-nav')}>
									<ul className={sx('tabs-toggle')}>
										<li id='tabs-job-detail'>
											<a
												href='https://careerbuilder.vn/vi/tim-viec-lam/ke-toan-noi-bo.35BE1408.html'
												data-href='#tab-1'
												title='Chi tiết'>
												Chi tiết
											</a>
										</li>
										<li id='tabs-job-company'>
											<a
												href='https://careerbuilder.vn/vi/nha-tuyen-dung/cong-ty-luat-tnhh-dentons-luat-viet.35A93D3A.html'
												data-href='#tab-2'
												title='Tổng quan công ty'>
												Tổng quan công ty
											</a>
										</li>
									</ul>
									<input type='hidden' name='job_id_tmp' id='job_id_tmp' defaultValue={1649416} />
									<div className={sx('job-detail-tool')}>
										<ol className={sx('tabs-saved')}>
											<li>
												<a
													tabIndex={0}
													role='button'
													className={sx('toollips', 'save-job', 'chk_save_35BE1408', '')}
													data-id='35BE1408'
													onclick="savejob('35BE1408')">
													<i className={sx('mdi', 'mdi-heart-outline')} />
													<div className={sx('toolip')}>
														<p>Lưu việc làm</p>
													</div>
												</a>
											</li>
											<li>
												<div className={sx('dropdown')}>
													{' '}
													<i className={sx('mdi', 'mdi-share-variant')} />
													<div className={sx('dropdown-menu')}>
														<div className={sx('social-list')}>
															<a
																rel='nofollow noreferrer'
																target='_blank'
																href='https://www.facebook.com/sharer/sharer.php?u=https://careerbuilder.vn/vi/tim-viec-lam/ke-toan-noi-bo.35BE1408.html&t=Kế Toán Nội Bộ'>
																<i className={sx('fa', 'fa-facebook')} />
															</a>
															<a
																rel='nofollow noreferrer'
																target='_blank'
																href='https://api.addthis.com/oexchange/0.8/forward/linkedin/offer?url=https://careerbuilder.vn/vi/tim-viec-lam/ke-toan-noi-bo.35BE1408.html&pubid=ra-559220ee7f9c15d6&title=Kế Toán Nội Bộ&ct=1&pco=tbxnj-1.0'>
																<i className={sx('fa', 'fa-linkedin')} />
															</a>
															<a
																rel='nofollow noreferrer'
																target='_blank'
																href='https://api.addthis.com/oexchange/0.8/forward/gmail/offer?url=https://careerbuilder.vn/vi/tim-viec-lam/ke-toan-noi-bo.35BE1408.html&pubid=ra-559220ee7f9c15d6&title=Kế Toán Nội Bộ&ct=1&pco=tbxnj-1.0'>
																<i className={sx('fa', 'fa-google')} />
															</a>
															<div
																className={sx('zalo-share-button')}
																data-href=''
																data-oaid={579745863508352884}
																data-layout={2}
																data-color='white'
																data-customize='false'
															/>
														</div>
													</div>
												</div>
											</li>
											<li>
												<a tabIndex={0} role='button' className={sx('report-job', 'toollips')}>
													<i className={sx('fa', 'fa-flag-o')} />
													<div className={sx('toolip')}>
														<p> Báo xấu </p>
													</div>
												</a>{' '}
											</li>
										</ol>
									</div>
								</nav>
								<div className={sx('tab-content')} id='tab-1'>
									<section className={sx('job-detail-content')}>
										<div className={sx('bg-blue')}>
											<div className={sx('row')}>
												<div className={sx('col-lg-4', 'col-sm-6', 'item-blue')}>
													<div className={sx('detail-box')}>
														<div className={sx('map')}>
															<strong>
																<em className={sx('mdi', 'mdi-map-marker')} />
																Địa điểm
															</strong>
															{detailJobPost?.is_address_work_hidden === 1 && (
																<>
																	<p style={{ marginBottom: 2, marginTop: 2 }}>{provinces}</p>
																	<p>Địa điểm chi tiết đã được bảo mật</p>
																</>
															)}
															{detailJobPost?.is_address_work_hidden === 0 && (
																<p>
																	<a href='https://careerbuilder.vn/viec-lam/ho-chi-minh-l8-vi.html'>
																		{provinces} / {districts} / {detailJobPost?.address}
																	</a>
																</p>
															)}
															{/* <a tabIndex={0} role='button' onclick='show_map_detail_job();'>
																<img src='img/icon-map.svg' alt=' Hồ Chí Minh' />
															</a> */}
														</div>
													</div>
												</div>
												<div className={sx('col-lg-4', 'col-sm-6', 'item-blue')}>
													<div className={sx('detail-box', 'has-background')}>
														<ul>
															<li>
																{' '}
																<strong>
																	<em className={sx('mdi', 'mdi-update')}> </em>Ngày cập nhật
																</strong>
																<p>{formatDate(detailJobPost?.updatedAt)}</p>
															</li>
															<li>
																{' '}
																<strong>
																	{' '}
																	<em className={sx('mdi', 'mdi-briefcase')} />
																	Ngành nghề
																</strong>
																<p>
																	{detailJobPost?.jobProfessionDetail?.map((jobProfessionDetail) => {
																		return (
																			<>
																				{' '}
																				<Link to='/viec-lam/ke-toan-kiem-toan-c2-vi.html'>
																					{jobProfessionDetail?.profession?.name},
																				</Link>
																			</>
																		);
																	})}
																</p>
															</li>
															<li>
																{' '}
																<strong>
																	<em className={sx('mdi', 'mdi-briefcase-edit')}> </em>Hình thức
																</strong>
																{detailJobPost?.jobWorkTypeDetail?.map((jobWorkTypeDetail) => {
																	return (
																		<p style={{ marginBottom: '2px' }}>
																			{jobWorkTypeDetail?.work_type?.name}
																		</p>
																	);
																})}
															</li>
														</ul>
													</div>
												</div>
												<div className={sx('col-lg-4', 'col-sm-6', 'item-blue')}>
													<div className={sx('detail-box', 'has-background')}>
														<ul>
															<li>
																<strong>
																	<i className={sx('fa', 'fa-usd')} />
																	Lương
																</strong>
																<p>
																	{parseInt(detailJobPost?.min_salary).toString().charAt(0)} Tr -{' '}
																	{parseInt(detailJobPost?.max_salary).toString().charAt(0)} Tr VND
																</p>
															</li>
															<li>
																<strong>
																	<i className={sx('fa', 'fa-briefcase')} />
																	Kinh nghiệm
																</strong>
																{jobExperienceLabel !== 'Có kinh nghiệm' && <p>{jobExperienceLabel}</p>}
																{jobExperienceLabel === 'Có kinh nghiệm' && (
																	<p>
																		{jobFormExperience} - {jobToExperience} Năm
																	</p>
																)}
															</li>
															<li>
																<strong>
																	<i className={sx('mdi', 'mdi-account')} />
																	Cấp bậc
																</strong>
																<p> {LevelArray[detailJobPost?.job_position_value]?.label}</p>
															</li>
															<li>
																<strong>
																	<i className={sx('mdi', 'mdi-calendar-check')} />
																	Hết hạn nộp
																</strong>
																<p>23/11/2023</p>
															</li>
														</ul>
													</div>
												</div>
											</div>
										</div>
										<div className={sx('detail-row')}>
											<h2 className={sx('detail-title')}>Phúc lợi </h2>
											<ul className={sx('welfare-list')}>
												{detailJobPost?.jobWelfare?.map((jobWelfare) => {
													return (
														<li>
															<span className={sx('fa', 'fa-medkit')} />{' '}
															{jobWelfare?.job_welfare?.welfare_type}
														</li>
													);
												})}
											</ul>
										</div>
										<div className={sx('detail-row', 'reset-bullet')}>
											<h2 className={sx('detail-title')}>Mô tả Công việc</h2>
											{/* <p>
												<strong>Tóm tắt nhiệm vụ:</strong>
											</p>
											<ul>
												<li>Hoàn thành các công việc trên phần mềm theo dõi vụ việc luật sư</li>
												<li>Hoàn thành chính xác, đầy đủ các công việc trên Phần Mềm Kế toán</li>
												<li>Công việc phân bổ doanh số và các công việc phát sinh khác</li>
												<li>Các nhiệm vụ chính:</li>
											</ul>
											<p>
												<strong>
													Nhiệm vụ 1: Hoàn thành các công việc trên phần mềm theo dõi vụ việc luật sư
												</strong>
											</p>
											<ul>
												<li>
													Theo dõi, tập hợp danh sách khách hàng, thông tin hợp đồng, chi tiết các vụ việc
													(giá trị hợp đồng, phương thức thanh toán, kỳ hạn thanh toán…), lập báo cáo tiến
													độ của các hợp đồng hàng tháng
												</li>
												<li>
													Đảm bảo theo dõi kịp thời các yêu cầu ra Đề Nghị Thanh Toán cho khách hàng, thực
													hiện lập Đề Nghị Thanh Toán theo quy trình của Công ty, gửi Đề Nghị thanh toán
													cho khách hàng trong và ngoài nước
												</li>
												<li>
													Chủ động theo dõi tiến độ thanh toán của khách hàng, liên hệ trực tiếp với khách
													để yêu cầu thanh toán, nhắc nợ
												</li>
												<li>
													Lập file theo dõi các Đề Nghị Thanh Toán, lập báo cáo Công nợ phải thu và tình
													hình thu tiền hàng tuần, hàng tháng
												</li>
											</ul>
											<p>
												<strong>
													Nhiệm vụ 2: Hoàn thành chính xác, đầy đủ các công việc trên Phần Mềm Kế toán
												</strong>
											</p>
											<ul>
												<li>
													Kiểm tra sao kê ngân hàng mỗi ngày, ghi nhận lên file theo dõi và phần mềm kế
													toán các khoản thanh toán của khách hàng
												</li>
												<li>
													Xuất hóa đơn GTGT cho các khoản phí dịch vụ, xử lý các vấn đề phát sinh liên quan
													đến hóa đơn GTGT, lập và trình ký biên bản điều chỉnh hóa đơn, biên bản hủy hóa
													đơn, chỉnh sửa các thông tin sai xót trên Đề nghị thanh toán
												</li>
												<li>
													Ghi nhận các hóa đơn GTGT lên Phần mềm kế toán, kiểm tra số liệu và tổng hợp bảng
													kê thuế GTGT đầu ra hàng quý.
												</li>
											</ul>
											<p>
												<strong>
													Nhiệm vụ 3: Công việc phân bổ doanh số và các công việc phát sinh khác
												</strong>
											</p>
											<ul>
												<li>Nhập các bảng phân bổ doanh số của từng hợp đồng lên phần mềm</li>
												<li>
													Tổng hợp và gửi báo cáo cập nhật doanh số theo từng người phụ trách hàng tháng,
													hàng quý
												</li>
												<li>
													Hỗ trợ các công việc liên quan và các báo cáo khác khi có yêu cầu từ trưởng bộ
													phận hoặc Giám đốc.
												</li>
											</ul> */}
											<div>{detailJobPost?.job_desc}</div>
										</div>
										<div className={sx('detail-row')} reset-bullet=''>
											<h2 className={sx('detail-title')}>Yêu Cầu Công Việc</h2>
											{/* <ul>
												<li>
													<strong>Nữ</strong>, tốt nghiệp Cao Đẳng chuyên ngành Kế toán trở lên;
												</li>
												<li>
													Tuổi: <strong>sinh năm từ 1995-2000</strong>
												</li>
												<li>
													Sử dụng Excel thành thạo; sử dụng khá các kỹ năng tiếng Anh, đặc biệt là kỹ năng
													đọc và viết. <strong>Ưu tiên: TOEIC 500.</strong>
												</li>
												<li>Có ít nhất 1 năm kinh nghiệm làm Kế toán nội bộ hoặc Kế toán thanh toán;</li>
												<li>
													Năng động, có khả năng làm việc độc lập, làm việc nhóm, chịu được áp lực công
													việc,;
												</li>
												<li>Tôn trọng kỷ luật làm việc.</li>
											</ul>
											<p>
												<strong>QUYỀN LỢI</strong>
											</p>
											<ul>
												<li>Mức lương: 8-10tr</li>
												<li>Được tham gia bảo hiểm đầy đủ theo quy định nhà nước</li>
												<li>Được hỗ trợ tiền ăn trưa</li>
												<li>Được hỗ trợ chi phí gởi xe</li>
												<li>Tổng số ngày nghỉ có phép 17 ngày/năm</li>
												<li>Được xem xét lương thưởng hàng năm</li>
												<li>Làm việc trong môi trường thân thiện, quản lý nhiệt tình hỗ trợ</li>
												<li>Các hoạt động sinh nhật, team building, …</li>
											</ul>
											<p>
												<strong>Địa điểm: Hồ Chí Minh</strong>
											</p> */}
											<div>{detailJobPost?.job_request}</div>
										</div>
										<div className={sx('detail-row')}>
											<h3 className={sx('detail-title')}>Thông tin khác</h3>
											{/*---
   <div class="content_fck ">
   ----*/}
											<div className={sx('content_fck', '')}>
												<ul>
													<li> Bằng cấp: {DegreeArray[detailJobPost?.job_degree_value]?.label}</li>
													<li> Giới tính: {GenderEnum[detailJobPost?.gender]} </li>
													<li>
														{' '}
														Độ tuổi: {detailJobPost?.form_age} - {detailJobPost?.to_age}
													</li>
													<li>
														Lương:
														<span>
															{parseInt(detailJobPost?.min_salary).toString().charAt(0)} Tr -{' '}
															{parseInt(detailJobPost?.max_salary).toString().charAt(0)} Tr VND
														</span>
													</li>
												</ul>
											</div>
										</div>
										<div className={sx('detail-row', 'request')}>
											<h3 className={sx('detail-title')}>Gợi ý hồ sơ</h3>
											<div className={sx('list-item')}>
												<div className={sx('item', 'item-1')}>
													<a tabIndex={0} role='button'>
														<img src='images/icon-cv.png' />
														<span></span>
													</a>
													<a href='https://careerbuilder.vn/cv-hay' target='_blank' rel='noreferrer'>
														Thiết kế CV Ứng Tuyển
													</a>
												</div>
											</div>
										</div>
										<div className={sx('share-this-job')}>
											<span>Chia sẻ việc làm này:</span>
											<a
												target='_blank'
												href='https://www.facebook.com/sharer/sharer.php?u=https://careerbuilder.vn/vi/tim-viec-lam/ke-toan-noi-bo.35BE1408.html&t=Kế Toán Nội Bộ'
												rel='noreferrer'>
												{' '}
												<i className={sx('fa', 'fa-facebook')} />{' '}
											</a>
											<a
												target='_blank'
												href='https://api.addthis.com/oexchange/0.8/forward/linkedin/offer?url=https://careerbuilder.vn/vi/tim-viec-lam/ke-toan-noi-bo.35BE1408.html&pubid=ra-559220ee7f9c15d6&title=Kế Toán Nội Bộ&ct=1&pco=tbxnj-1.0'
												rel='noreferrer'>
												{' '}
												<i className={sx('fa', 'fa-linkedin')} />
											</a>
											<a
												target='_blank'
												href='https://api.addthis.com/oexchange/0.8/forward/gmail/offer?url=https://careerbuilder.vn/vi/tim-viec-lam/ke-toan-noi-bo.35BE1408.html&pubid=ra-559220ee7f9c15d6&title=Kế Toán Nội Bộ&ct=1&pco=tbxnj-1.0'
												rel='noreferrer'>
												{' '}
												<i className={sx('fa', 'fa-google')} />
											</a>
											<div
												className={sx('zalo-share-button')}
												data-href=''
												data-oaid={579745863508352884}
												data-layout={2}
												data-color='white'
												data-customize='false'
											/>
										</div>
										<div className={sx('job-detail-bottom')}>
											<div className={sx('job-detail-bottom-wrapper')}>
												<div className={sx('apply-now-content')}>
													<div className={sx('job-desc')}>
														<a
															tabIndex={0}
															role='button'
															className={sx('toollips', 'save-job', 'chk_save_35BE1408', '')}
															onClick={
																allJobSaved?.length > 0 &&
																allJobSaved.some((item) => item.job_post_saved.id === detailJobPost?.id)
																	? () =>
																			handleDeleteJobSaved(
																				allJobSaved.find(
																					(item) => item.job_post_saved.id === detailJobPost?.id
																				).id
																			)
																	: () => handleCreateJobSaved(detailJobPost?.id)
															}
															style={{ cursor: 'pointer' }}>
															<i className={sx('mdi', 'mdi-heart-outline')} />
															{allJobSaved?.length > 0 &&
															allJobSaved.some(
																(item) => item.job_post_saved.id === detailJobPost?.id
															) ? (
																<span className={sx('text')} style={{ color: '#e8c80d' }}>
																	Việc làm đã lưu
																</span>
															) : (
																<span className={sx('text')}>Lưu việc làm</span>
															)}
														</a>
														<a
															tabIndex={0}
															role='button'
															className={sx('report-job', 'toollips')}
															style={{ cursor: 'pointer' }}>
															<i className={sx('fa', 'fa-flag-o')} />
															<span>Báo xấu</span>
														</a>
														<div className={sx('report-modal')} style={{ display: 'none' }}>
															<div className={sx('modal-title')}>
																<p>Vì sao bạn muốn báo xấu nhà tuyển dụng này? </p>
															</div>
															<div className={sx('modal-body')}>
																<form
																	name='feedback_job'
																	id='feedback_job'
																	method='POST'
																	autoComplete='off'>
																	<input
																		type='hidden'
																		name='job_url'
																		id='job_url'
																		defaultValue='https://careerbuilder.vn/vi/tim-viec-lam/ke-toan-noi-bo.35BE1408.html'
																	/>
																	<div className={sx('form-group')}>
																		<input
																			type='text'
																			id='email'
																			name='email'
																			placeholder='Nhập địa chỉ email '
																			onkeyup="this.setAttribute('value', this.value);"
																			defaultValue='lop7cttnq@gmail.com'
																		/>
																		<p className={sx('text-validate', 'error_email')}> </p>
																	</div>
																	<div className={sx('list-radio')} id='reason' name='reason'>
																		<input
																			type='radio'
																			id='reason-1'
																			name='reason'
																			defaultValue={1}
																		/>
																		<label htmlFor='reason-1'> Việc làm không hợp pháp </label>
																		<br />
																		<input
																			type='radio'
																			id='reason-2'
																			name='reason'
																			defaultValue={2}
																		/>
																		<label htmlFor='reason-2'> Không cung cấp đủ thông tin </label>
																		<br />
																		<input
																			type='radio'
																			id='reason-3'
																			name='reason'
																			defaultValue={3}
																		/>
																		<label htmlFor='reason-3'> Khác </label>
																		<p className={sx('text-validate', 'error_reason')} />
																	</div>
																	<div className={sx('box-reason', 'form-group')}>
																		<input type='text' id='box_reason' name='box_reason' />
																		<p className={sx('text-validate', 'error_box_reason')}> </p>
																	</div>
																	<div className={sx('form-group')}>
																		<input
																			type='text'
																			name='captcha'
																			id='captcha'
																			autoComplete='off'
																			placeholder='Mã xác nhận'
																			onkeyup="this.setAttribute('value', this.value);"
																			defaultValue=''
																		/>
																		<p className={sx('text-validate', 'error_captcha')} />
																	</div>
																	<div
																		id='captchaim'
																		style={{ float: 'left' }}
																		className={sx('form-group')}>
																		<img
																			width={150}
																			height={50}
																			alt='captcha'
																			src='https://images.careerbuilder.vn/rws/captcha/9046b657648bb882d009f3360396542b.png'
																			className={sx('img_code')}
																		/>
																		<input
																			type='hidden'
																			name='key_captcha'
																			id='key_captcha'
																			defaultValue='9046b657648bb882d009f3360396542b'
																		/>
																	</div>
																	<a
																		tabIndex={0}
																		role='button'
																		style={{ paddingLeft: 10 }}
																		onclick="refeshImgCaptcha('captchaim');"
																		className={sx('line_bot')}
																		id='trynewcode'>
																		Thử mã mới
																	</a>
																	<div className={sx('form-group')} style={{ clear: 'left' }}>
																		<button
																			className={sx('btn-send-report')}
																			onclick='saveFeedbackJob();return false;'>
																			{' '}
																			Báo xấu{' '}
																		</button>
																	</div>
																</form>
															</div>
														</div>
													</div>
													<div className={sx('apply-now-btn', isIdInData ? 'success' : '')}>
														{isIdInData ? (
															<a
																style={{ cursor: 'pointer' }}
																className={sx('btn-gradient', 'btnApplyClick')}>
																Nộp Đơn Ứng Tuyển
															</a>
														) : (
															<Link
																to={`/jobseekers/jobs/apply/${detailJobPost?.id}`}
																className={sx('btn-gradient', 'btnApplyClick')}>
																Nộp Đơn Ứng Tuyển
															</Link>
														)}
													</div>
												</div>
											</div>
										</div>

										<div className={sx('job-detail-bottom-banner', '')} id=''>
											<div className={sx('adsBannerOA')} data-id={852} />
										</div>
									</section>
									<div className={sx('maps-modal')} style={{ display: 'none' }}>
										<div className={sx('d-flex', 'box-modal')}>
											<div className={sx('map')} id='jobMap' style={{ display: 'none' }} />
											<div className={sx('info')}>
												<div className={sx('tabs-toggle')}>
													<a tabIndex={0} role='button' className={sx('item', 'active')} data-tab={1}>
														Thông Tin Tuyển Dụng
													</a>
													<a tabIndex={0} role='button' className={sx('item')} data-tab={2}>
														Các công việc tương tự
													</a>
												</div>
												<div className={sx('main-content')}>
													<div className={sx('tab-content', 'active')} id='maps-tab-1'>
														<div className={sx('box-about')}>
															<div className={sx('title-h4')}>
																<h4>Giới thiệu về công ty</h4>
															</div>
															<div className={sx('figure')}>
																<div className={sx('image')}>
																	<a
																		href='https://careerbuilder.vn/vi/nha-tuyen-dung/cong-ty-luat-tnhh-dentons-luat-viet.35A93D3A.html'
																		target='_blank'
																		rel='noreferrer'>
																		<img
																			className={sx('lazy-hidden')}
																			data-src='https://images.careerbuilder.vn/employer_folders/lot6/283706/110x55/142718dentonslogo-002.jpg'
																			src='../kiemviecv32/images/graphics/blank.gif'
																			alt='CÔNG TY LUẬT TNHH DENTONS LUẬT VIỆT'
																		/>
																	</a>
																</div>
																<div className={sx('figcaption')}>
																	<h5>CÔNG TY LUẬT TNHH DENTONS LUẬT VIỆT</h5>
																</div>
															</div>
														</div>
														<div className={sx('box-info')}>
															<div className={sx('title-h4')}>
																<h4>Thông Tin Tuyển Dụng</h4>
															</div>
															<div className={sx('content')}>
																<p className={sx('blue')}>Kế Toán Nội Bộ</p>
																<table>
																	<tbody>
																		<tr>
																			<td>Cấp bậc</td>
																			<td>Nhân viên</td>
																		</tr>
																		<tr>
																			<td>Lương</td>
																			<td>$ 8,000,000 - 10,000,000 VND</td>
																		</tr>
																		<tr>
																			<td>Hết hạn nộp</td>
																			<td>23/11/2023</td>
																		</tr>
																		<tr>
																			<td>Ngành nghề</td>
																			<td>
																				<a href='https://careerbuilder.vn/viec-lam/luat-phap-ly-c24-vi.html'>
																					Luật / Pháp lý ,{' '}
																				</a>
																				<a href='https://careerbuilder.vn/viec-lam/ke-toan-kiem-toan-c2-vi.html'>
																					Kế toán / Kiểm toán
																				</a>
																			</td>
																		</tr>
																		<tr>
																			<td>Kinh nghiệm</td>
																			<td>Trên 1 Năm</td>
																		</tr>
																	</tbody>
																</table>
															</div>
														</div>
														<div className={sx('box-local')}>
															<div className={sx('title-h4')}>
																<h4>Địa điểm</h4>
															</div>
															<div className={sx('content')}>
																<p>Hồ Chí Minh</p>
																<ul className={sx('clearall')}>
																	<li>
																		<em className={sx('mdi', 'mdi-map-marker')} />
																		<a tabIndex={0} role='button' onclick='movetoCenter(0)'>
																			Phòng L15-08, Tầng 15, Tòa Nhà Vincom Center, Số 72 Lê Thánh
																			Tôn, Phường Bến Nghé, Quận 1, Tp. Hồ Chí Minh
																		</a>
																	</li>
																</ul>
															</div>
														</div>
														<div className={sx('box-apply', '')}>
															<div className={sx('apply-now-btn', isIdInData ? 'success' : '')}>
																{isIdInData ? (
																	<a
																		style={{ cursor: 'pointer' }}
																		className={sx('btn-gradient', 'btnApplyClick')}>
																		Nộp Đơn Ứng Tuyển
																	</a>
																) : (
																	<Link
																		to={`/jobseekers/jobs/apply/${detailJobPost?.id}`}
																		className={sx('btn-gradient', 'btnApplyClick')}>
																		Nộp Đơn Ứng Tuyển
																	</Link>
																)}
															</div>
														</div>
														<div className={sx('box-contact')}>
															<ul>
																<li>
																	<a
																		tabIndex={0}
																		role='button'
																		className={sx('toollips', 'save-job', 'chk_save_35BE1408', '')}
																		data-id='35BE1408'
																		onclick="savejob('35BE1408')">
																		<i className={sx('mdi', 'mdi-heart-outline')} />
																		<div className={sx('toolip')}>
																			<p>Lưu việc làm</p>
																		</div>
																	</a>
																</li>
																<li>
																	{' '}
																	<a
																		tabIndex={0}
																		role='button'
																		className={sx('email')}
																		onclick='showboxJobalert()'>
																		<i className={sx('mdi', 'mdi-email')} />
																	</a>
																</li>
															</ul>
														</div>
													</div>
													<div className={sx('tab-content')} id='maps-tab-2'>
														<section className={sx('jobs-side-list')} />
														<div className={sx('jobs-list')}>
															<div className={sx('job-item')}>
																<div className={sx('figure')}>
																	<div className={sx('image')}>
																		<a
																			href='https://careerbuilder.vn/vi/nha-tuyen-dung/cong-ty-trach-nhiem-huu-han-san-xuat-thuong-mai-dich-vu-bgc.35A98DDC.html'
																			target='_blank'
																			title='Công Ty Trách Nhiệm Hữu Hạn Sản Xuất Thương Mại Dịch Vụ BGC'
																			rel='noreferrer'>
																			<img
																				className={sx('lazy-hidden')}
																				data-src='https://static.careerbuilder.vn/themes/kiemviecv32/images/graphics/logo-default.png'
																				src='../kiemviecv32/images/graphics/blank.gif'
																				alt='Công Ty Trách Nhiệm Hữu Hạn Sản Xuất Thương Mại Dịch Vụ BGC'
																			/>
																		</a>
																	</div>
																	<div className={sx('figcaption')}>
																		<div className={sx('timeago')} />
																		<div className={sx('title')}>
																			<a
																				target='_blank'
																				title='KẾ TOÁN NỘI BỘ'
																				href='https://careerbuilder.vn/vi/tim-viec-lam/ke-toan-noi-bo.35BDF58C.html?s=rec'
																				rel='noreferrer'>
																				KẾ TOÁN NỘI BỘ
																			</a>
																		</div>
																		<div className={sx('caption')}>
																			<p className={sx('company-name')}>
																				Công Ty Trách Nhiệm Hữu Hạn Sản Xuất Thương Mại Dịch Vụ BGC
																			</p>
																			<p className={sx('salary')}>$ 8 Tr - 12 Tr VND</p>
																			<div className={sx('location')}>
																				<ul>
																					<li>Hồ Chí Minh</li>
																				</ul>
																			</div>
																		</div>
																	</div>
																</div>
															</div>
															<div className={sx('job-item')}>
																<div className={sx('figure')}>
																	<div className={sx('image')}>
																		<a
																			href='https://careerbuilder.vn/vi/nha-tuyen-dung/bao-mat.35A66147.html'
																			target='_blank'
																			title='Bảo mật'
																			rel='noreferrer'>
																			<img
																				className={sx('lazy-hidden')}
																				data-src='https://images.careerbuilder.vn/employer_folders/lot7/96327/67x67/160753nhakhoa_logo.jpg'
																				src='../kiemviecv32/images/graphics/blank.gif'
																				alt='Bảo mật'
																			/>
																		</a>
																	</div>
																	<div className={sx('figcaption')}>
																		<div className={sx('timeago')} />
																		<div className={sx('title')}>
																			<a
																				target='_blank'
																				title='KẾ TOÁN NỘI BỘ'
																				href='https://careerbuilder.vn/vi/tim-viec-lam/ke-toan-noi-bo.35BDC2DE.html?s=rec'
																				rel='noreferrer'>
																				KẾ TOÁN NỘI BỘ
																			</a>
																		</div>
																		<div className={sx('caption')}>
																			<p className={sx('company-name')}>Bảo mật</p>
																			<p className={sx('salary')}>$ 8 Tr - 12 Tr VND</p>
																			<div className={sx('location')}>
																				<ul>
																					<li>Hồ Chí Minh</li>
																				</ul>
																			</div>
																		</div>
																	</div>
																</div>
															</div>
															<div className={sx('job-item')}>
																<div className={sx('figure')}>
																	<div className={sx('image')}>
																		<a
																			href='https://careerbuilder.vn/vi/nha-tuyen-dung/mac-media.35A81912.html'
																			target='_blank'
																			title='MAC Media'
																			rel='noreferrer'>
																			<img
																				className={sx('lazy-hidden')}
																				data-src='https://images.careerbuilder.vn/employer_folders/lot4/208914/67x67/172317capture.jpg'
																				src='../kiemviecv32/images/graphics/blank.gif'
																				alt='MAC Media'
																			/>
																		</a>
																	</div>
																	<div className={sx('figcaption')}>
																		<div className={sx('timeago')} />
																		<div className={sx('title')}>
																			<a
																				target='_blank'
																				title='Kế Toán Nội Bộ'
																				href='https://careerbuilder.vn/vi/tim-viec-lam/ke-toan-noi-bo.35BE098A.html?s=rec'
																				rel='noreferrer'>
																				Kế Toán Nội Bộ
																			</a>
																		</div>
																		<div className={sx('caption')}>
																			<p className={sx('company-name')}>MAC Media</p>
																			<p className={sx('salary')}>$ 10 Tr - 13 Tr VND</p>
																			<div className={sx('location')}>
																				<ul>
																					<li>Hồ Chí Minh</li>
																				</ul>
																			</div>
																		</div>
																	</div>
																</div>
															</div>
															<div className={sx('job-item')}>
																<div className={sx('figure')}>
																	<div className={sx('image')}>
																		<a
																			href='https://careerbuilder.vn/vi/nha-tuyen-dung/readingq.35A95A55.html'
																			target='_blank'
																			title='ReadingQ'
																			rel='noreferrer'>
																			<img
																				className={sx('lazy-hidden')}
																				data-src='https://images.careerbuilder.vn/employer_folders/lot7/291157/67x67/20365949312072_232490014322965_5879210762458628096_n.png'
																				src='../kiemviecv32/images/graphics/blank.gif'
																				alt='ReadingQ'
																			/>
																		</a>
																	</div>
																	<div className={sx('figcaption')}>
																		<div className={sx('timeago')} />
																		<div className={sx('title')}>
																			<a
																				target='_blank'
																				title='Kế Toán Nội Bộ'
																				href='https://careerbuilder.vn/vi/tim-viec-lam/ke-toan-noi-bo.35BDCEAB.html?s=rec'
																				rel='noreferrer'>
																				Kế Toán Nội Bộ
																			</a>
																		</div>
																		<div className={sx('caption')}>
																			<p className={sx('company-name')}>ReadingQ</p>
																			<p className={sx('salary')}>$ 12 Tr - 12 Tr VND</p>
																			<div className={sx('location')}>
																				<ul>
																					<li>Hồ Chí Minh</li>
																				</ul>
																			</div>
																		</div>
																	</div>
																</div>
															</div>
															<div className={sx('job-item')}>
																<div className={sx('figure')}>
																	<div className={sx('image')}>
																		<a
																			href='https://careerbuilder.vn/vi/nha-tuyen-dung/cong-ty-tnhh-mtv-tin-nha.35A95C6B.html'
																			target='_blank'
																			title='Công ty TNHH MTV Tín Nha'
																			rel='noreferrer'>
																			<img
																				className={sx('lazy-hidden')}
																				data-src='https://images.careerbuilder.vn/employer_folders/lot1/291691/67x67/143456277527354_107239305278551_3701203795594275674_n.jpg'
																				src='../kiemviecv32/images/graphics/blank.gif'
																				alt='Công ty TNHH MTV Tín Nha'
																			/>
																		</a>
																	</div>
																	<div className={sx('figcaption')}>
																		<div className={sx('timeago')} />
																		<div className={sx('title')}>
																			<a
																				target='_blank'
																				title='Kế toán Nội bộ'
																				href='https://careerbuilder.vn/vi/tim-viec-lam/ke-toan-noi-bo.35BE14E9.html?s=rec'
																				rel='noreferrer'>
																				Kế toán Nội bộ
																			</a>
																		</div>
																		<div className={sx('caption')}>
																			<p className={sx('company-name')}>Công ty TNHH MTV Tín Nha</p>
																			<p className={sx('salary')}>$ 8 Tr - 10 Tr VND</p>
																			<div className={sx('location')}>
																				<ul>
																					<li>Hồ Chí Minh</li>
																				</ul>
																			</div>
																		</div>
																	</div>
																</div>
															</div>
															<div className={sx('job-item')}>
																<div className={sx('figure')}>
																	<div className={sx('image')}>
																		<a
																			href='https://careerbuilder.vn/vi/nha-tuyen-dung/cong-ty-co-phan-du-lich-intertour-viet-nam.35A84F82.html'
																			target='_blank'
																			title='Công ty Cổ phần du lịch Intertour Việt Nam'
																			rel='noreferrer'>
																			<img
																				className={sx('lazy-hidden')}
																				data-src='https://static.careerbuilder.vn/themes/kiemviecv32/images/graphics/logo-default.png'
																				src='../kiemviecv32/images/graphics/blank.gif'
																				alt='Công ty Cổ phần du lịch Intertour Việt Nam'
																			/>
																		</a>
																	</div>
																	<div className={sx('figcaption')}>
																		<div className={sx('timeago')} />
																		<div className={sx('title')}>
																			<a
																				target='_blank'
																				title='Nhân viên kế toán nội bộ'
																				href='https://careerbuilder.vn/vi/tim-viec-lam/nhan-vien-ke-toan-noi-bo.35BDE7DC.html?s=rec'
																				rel='noreferrer'>
																				Nhân viên kế toán nội bộ
																			</a>
																		</div>
																		<div className={sx('caption')}>
																			<p className={sx('company-name')}>
																				Công ty Cổ phần du lịch Intertour Việt Nam
																			</p>
																			<p className={sx('salary')}>$ 8 Tr - 12 Tr VND</p>
																			<div className={sx('location')}>
																				<ul>
																					<li>Hồ Chí Minh</li>
																				</ul>
																			</div>
																		</div>
																	</div>
																</div>
															</div>
															<div className={sx('job-item')}>
																<div className={sx('figure')}>
																	<div className={sx('image')}>
																		<a
																			href='https://careerbuilder.vn/vi/nha-tuyen-dung/cong-ty-co-phan-tap-doan-unis.35A7CDF2.html'
																			target='_blank'
																			title='CÔNG TY CỔ PHẦN TẬP ĐOÀN UNIS'
																			rel='noreferrer'>
																			<img
																				className={sx('lazy-hidden')}
																				data-src='https://images.careerbuilder.vn/employer_folders/lot2/189682/67x67/130030logo.jpg'
																				src='../kiemviecv32/images/graphics/blank.gif'
																				alt='CÔNG TY CỔ PHẦN TẬP ĐOÀN UNIS'
																			/>
																		</a>
																	</div>
																	<div className={sx('figcaption')}>
																		<div className={sx('timeago')} />
																		<div className={sx('title')}>
																			<a
																				target='_blank'
																				title='Kế Toán Quản Lý Nội Bộ'
																				href='https://careerbuilder.vn/vi/tim-viec-lam/ke-toan-quan-ly-noi-bo.35BDE8A8.html?s=rec'
																				rel='noreferrer'>
																				Kế Toán Quản Lý Nội Bộ
																			</a>
																		</div>
																		<div className={sx('caption')}>
																			<p className={sx('company-name')}>
																				CÔNG TY CỔ PHẦN TẬP ĐOÀN UNIS
																			</p>
																			<p className={sx('salary')}>$ 10 Tr - 12 Tr VND</p>
																			<div className={sx('location')}>
																				<ul>
																					<li>Hồ Chí Minh</li>
																				</ul>
																			</div>
																		</div>
																	</div>
																</div>
															</div>
															<div className={sx('job-item')}>
																<div className={sx('figure')}>
																	<div className={sx('image')}>
																		<a
																			href='https://careerbuilder.vn/vi/nha-tuyen-dung/cong-ty-tnhh-dau-tu-thuong-mai-dich-vu-moc-lan-vien.35A97442.html'
																			target='_blank'
																			title='CÔNG TY TNHH ĐẦU TƯ THƯƠNG MẠI DỊCH VỤ MỘC LAN VIÊN'
																			rel='noreferrer'>
																			<img
																				className={sx('lazy-hidden')}
																				data-src='https://images.careerbuilder.vn/employer_folders/lot4/297794/67x67/110544logomlv2.jpg'
																				src='../kiemviecv32/images/graphics/blank.gif'
																				alt='CÔNG TY TNHH ĐẦU TƯ THƯƠNG MẠI DỊCH VỤ MỘC LAN VIÊN'
																			/>
																		</a>
																	</div>
																	<div className={sx('figcaption')}>
																		<div className={sx('timeago')} />
																		<div className={sx('title')}>
																			<a
																				target='_blank'
																				title='Nhân viên kế toán nội bộ'
																				href='https://careerbuilder.vn/vi/tim-viec-lam/nhan-vien-ke-toan-noi-bo.35BDF2E4.html?s=rec'
																				rel='noreferrer'>
																				Nhân viên kế toán nội bộ
																			</a>
																		</div>
																		<div className={sx('caption')}>
																			<p className={sx('company-name')}>
																				CÔNG TY TNHH ĐẦU TƯ THƯƠNG MẠI DỊCH VỤ MỘC LAN VIÊN
																			</p>
																			<p className={sx('salary')}>$ 10 Tr - 15 Tr VND</p>
																			<div className={sx('location')}>
																				<ul>
																					<li>Hồ Chí Minh</li>
																				</ul>
																			</div>
																		</div>
																	</div>
																</div>
															</div>
															<div className={sx('job-item')}>
																<div className={sx('figure')}>
																	<div className={sx('image')}>
																		<a
																			href='https://careerbuilder.vn/vi/nha-tuyen-dung/cong-ty-tnhh-dau-tu-tam-anh.35A95D97.html'
																			target='_blank'
																			title='Công Ty TNHH Đầu Tư Tam Anh'
																			rel='noreferrer'>
																			<img
																				className={sx('lazy-hidden')}
																				data-src='https://images.careerbuilder.vn/employer_folders/lot1/291991/67x67/133253asset1-2x.png'
																				src='../kiemviecv32/images/graphics/blank.gif'
																				alt='Công Ty TNHH Đầu Tư Tam Anh'
																			/>
																		</a>
																	</div>
																	<div className={sx('figcaption')}>
																		<div className={sx('timeago')} />
																		<div className={sx('title')}>
																			<a
																				target='_blank'
																				title='[HCM] Kế Toán Tổng Hợp Nội Bộ'
																				href='https://careerbuilder.vn/vi/tim-viec-lam/hcm-ke-toan-tong-hop-noi-bo.35BDC425.html?s=rec'
																				rel='noreferrer'>
																				[HCM] Kế Toán Tổng Hợp Nội Bộ
																			</a>
																		</div>
																		<div className={sx('caption')}>
																			<p className={sx('company-name')}>
																				Công Ty TNHH Đầu Tư Tam Anh
																			</p>
																			<p className={sx('salary')}>$ 8 Tr - 12 Tr VND</p>
																			<div className={sx('location')}>
																				<ul>
																					<li>Hồ Chí Minh</li>
																				</ul>
																			</div>
																		</div>
																	</div>
																</div>
															</div>
															<div className={sx('job-item')}>
																<div className={sx('figure')}>
																	<div className={sx('image')}>
																		<a
																			href='https://careerbuilder.vn/vi/nha-tuyen-dung/cong-ty-cp-co-khi-tan-minh.35A83784.html'
																			target='_blank'
																			title='CÔNG TY CP CƠ KHÍ TÂN MINH'
																			rel='noreferrer'>
																			<img
																				className={sx('lazy-hidden')}
																				data-src='https://images.careerbuilder.vn/employer_folders/lot8/216708/67x67/151622img_2263.png'
																				src='../kiemviecv32/images/graphics/blank.gif'
																				alt='CÔNG TY CP CƠ KHÍ TÂN MINH'
																			/>
																		</a>
																	</div>
																	<div className={sx('figcaption')}>
																		<div className={sx('timeago')} />
																		<div className={sx('title')}>
																			<a
																				target='_blank'
																				title='Nhân viên Kế toán nội bộ'
																				href='https://careerbuilder.vn/vi/tim-viec-lam/nhan-vien-ke-toan-noi-bo.35BE1312.html?s=rec'
																				rel='noreferrer'>
																				Nhân viên Kế toán nội bộ
																			</a>
																		</div>
																		<div className={sx('caption')}>
																			<p className={sx('company-name')}>
																				CÔNG TY CP CƠ KHÍ TÂN MINH
																			</p>
																			<p className={sx('salary')}>$ 8 Tr - 12 Tr VND</p>
																			<div className={sx('location')}>
																				<ul>
																					<li>Hồ Chí Minh</li>
																				</ul>
																			</div>
																		</div>
																	</div>
																</div>
															</div>
														</div>
													</div>
												</div>
											</div>
										</div>
									</div>
									<link
										href='https://cdn.jsdelivr.net/npm/@goongmaps/goong-js@1.0.6/dist/goong-js.css'
										rel='stylesheet'
									/>
								</div>
								<div className={sx('tab-content')} id='tab-2' />
							</div>
						</div>
						<div className={sx('col-lg-5', 'col-custom-xxl-3')}>
							<div className={sx('side-wrapper')}>
								<div className={sx('banner-ad')}></div>
								<div className={sx('similar-jobs')}>
									<p>Các công việc tương tự</p>
								</div>
								<section className={sx('jobs-side-list')}>
									<div className={sx('jobs-list')}>
										<div className={sx('job-item')}>
											<div className={sx('figure')}>
												<div className={sx('image')}>
													{' '}
													<a
														href='https://careerbuilder.vn/vi/nha-tuyen-dung/cong-ty-trach-nhiem-huu-han-san-xuat-thuong-mai-dich-vu-bgc.35A98DDC.html'
														target='_blank'
														title='Công Ty Trách Nhiệm Hữu Hạn Sản Xuất Thương Mại Dịch Vụ BGC'
														rel='noreferrer'>
														{' '}
														<img
															className={sx('lazy-bg')}
															data-src='https://static.careerbuilder.vn/themes/kiemviecv32/images/graphics/logo-default.png'
															src='../kiemviecv32/images/graphics/blank.gif'
															alt='Công Ty Trách Nhiệm Hữu Hạn Sản Xuất Thương Mại Dịch Vụ BGC'
														/>{' '}
													</a>{' '}
												</div>
												<div className={sx('figcaption')}>
													<div className={sx('timeago')} />
													<div className={sx('title')}>
														{' '}
														<a
															className={sx('job_link')}
															href='https://careerbuilder.vn/vi/tim-viec-lam/ke-toan-noi-bo.35BDF58C.html'
															target='_blank'
															title='KẾ TOÁN NỘI BỘ'
															rel='noreferrer'>
															{' '}
															KẾ TOÁN NỘI BỘ{' '}
														</a>{' '}
													</div>
													<div className={sx('caption')}>
														<a
															className={sx('company-name')}
															href='https://careerbuilder.vn/vi/nha-tuyen-dung/cong-ty-trach-nhiem-huu-han-san-xuat-thuong-mai-dich-vu-bgc.35A98DDC.html'
															target='_blank'
															title='Công Ty Trách Nhiệm Hữu Hạn Sản Xuất Thương Mại Dịch Vụ BGC'
															rel='noreferrer'>
															Công Ty Trách Nhiệm Hữu Hạn Sản Xuất Thương Mại Dịch Vụ BGC
														</a>
														<p className={sx('salary')}>
															<em className={sx('fa', 'fa-usd')} />
															Lương: 8 Tr - 12 Tr VND
														</p>
														<div className={sx('location')}>
															<em className={sx('mdi', 'mdi-map-marker')} />
															<ul>
																<li>Hồ Chí Minh</li>
															</ul>
														</div>
													</div>
												</div>
												<div className={sx('top-icon')} />
											</div>
										</div>
										<div className={sx('job-item')}>
											<div className={sx('figure')}>
												<div className={sx('image')}>
													{' '}
													<a tabIndex={0} role='button' title='Bảo mật'>
														{' '}
														<img
															className={sx('lazy-bg')}
															data-src='https://static.careerbuilder.vn/themes/kiemviecv32/images/graphics/logo-default.png'
															src='../kiemviecv32/images/graphics/blank.gif'
															alt='Bảo mật'
														/>{' '}
													</a>{' '}
												</div>
												<div className={sx('figcaption')}>
													<div className={sx('timeago')} />
													<div className={sx('title')}>
														{' '}
														<a
															className={sx('job_link')}
															href='https://careerbuilder.vn/vi/tim-viec-lam/ke-toan-noi-bo.35BDC2DE.html'
															target='_blank'
															title='KẾ TOÁN NỘI BỘ'
															rel='noreferrer'>
															{' '}
															KẾ TOÁN NỘI BỘ{' '}
														</a>{' '}
													</div>
													<div className={sx('caption')}>
														<a className={sx('company-name')} tabIndex={0} role='button' title='Bảo mật'>
															Bảo mật
														</a>
														<p className={sx('salary')}>
															<em className={sx('fa', 'fa-usd')} />
															Lương: 8 Tr - 12 Tr VND
														</p>
														<div className={sx('location')}>
															<em className={sx('mdi', 'mdi-map-marker')} />
															<ul>
																<li>Hồ Chí Minh</li>
															</ul>
														</div>
													</div>
												</div>
												<div className={sx('top-icon')} />
											</div>
										</div>
										<div className={sx('job-item')}>
											<div className={sx('figure')}>
												<div className={sx('image')}>
													{' '}
													<a
														href='https://careerbuilder.vn/vi/nha-tuyen-dung/mac-media.35A81912.html'
														target='_blank'
														title='MAC Media'
														rel='noreferrer'>
														{' '}
														<img
															className={sx('lazy-bg')}
															data-src='https://images.careerbuilder.vn/employer_folders/lot4/208914/67x67/172317capture.jpg'
															src='../kiemviecv32/images/graphics/blank.gif'
															alt='MAC Media'
														/>{' '}
													</a>{' '}
												</div>
												<div className={sx('figcaption')}>
													<div className={sx('timeago')} />
													<div className={sx('title')}>
														{' '}
														<a
															className={sx('job_link')}
															href='https://careerbuilder.vn/vi/tim-viec-lam/ke-toan-noi-bo.35BE098A.html'
															target='_blank'
															title='Kế Toán Nội Bộ'
															rel='noreferrer'>
															{' '}
															Kế Toán Nội Bộ{' '}
														</a>{' '}
													</div>
													<div className={sx('caption')}>
														<a
															className={sx('company-name')}
															href='https://careerbuilder.vn/vi/nha-tuyen-dung/mac-media.35A81912.html'
															target='_blank'
															title='MAC Media'
															rel='noreferrer'>
															MAC Media
														</a>
														<p className={sx('salary')}>
															<em className={sx('fa', 'fa-usd')} />
															Lương: 10 Tr - 13 Tr VND
														</p>
														<div className={sx('location')}>
															<em className={sx('mdi', 'mdi-map-marker')} />
															<ul>
																<li>Hồ Chí Minh</li>
															</ul>
														</div>
													</div>
												</div>
												<div className={sx('top-icon')} />
											</div>
										</div>
										<div className={sx('job-item')}>
											<div className={sx('figure')}>
												<div className={sx('image')}>
													{' '}
													<a
														href='https://careerbuilder.vn/vi/nha-tuyen-dung/readingq.35A95A55.html'
														target='_blank'
														title='ReadingQ'
														rel='noreferrer'>
														{' '}
														<img
															className={sx('lazy-bg')}
															data-src='https://images.careerbuilder.vn/employer_folders/lot7/291157/67x67/20365949312072_232490014322965_5879210762458628096_n.png'
															src='../kiemviecv32/images/graphics/blank.gif'
															alt='ReadingQ'
														/>{' '}
													</a>{' '}
												</div>
												<div className={sx('figcaption')}>
													<div className={sx('timeago')} />
													<div className={sx('title')}>
														{' '}
														<a
															className={sx('job_link')}
															href='https://careerbuilder.vn/vi/tim-viec-lam/ke-toan-noi-bo.35BDCEAB.html'
															target='_blank'
															title='Kế Toán Nội Bộ'
															rel='noreferrer'>
															{' '}
															Kế Toán Nội Bộ{' '}
														</a>{' '}
													</div>
													<div className={sx('caption')}>
														<a
															className={sx('company-name')}
															href='https://careerbuilder.vn/vi/nha-tuyen-dung/readingq.35A95A55.html'
															target='_blank'
															title='ReadingQ'
															rel='noreferrer'>
															ReadingQ
														</a>
														<p className={sx('salary')}>
															<em className={sx('fa', 'fa-usd')} />
															Lương: 12 Tr - 12 Tr VND
														</p>
														<div className={sx('location')}>
															<em className={sx('mdi', 'mdi-map-marker')} />
															<ul>
																<li>Hồ Chí Minh</li>
															</ul>
														</div>
													</div>
												</div>
												<div className={sx('top-icon')} />
											</div>
										</div>
										<div className={sx('job-item')}>
											<div className={sx('figure')}>
												<div className={sx('image')}>
													{' '}
													<a
														href='https://careerbuilder.vn/vi/nha-tuyen-dung/cong-ty-tnhh-mtv-tin-nha.35A95C6B.html'
														target='_blank'
														title='Công ty TNHH MTV Tín Nha'
														rel='noreferrer'>
														{' '}
														<img
															className={sx('lazy-bg')}
															data-src='https://images.careerbuilder.vn/employer_folders/lot1/291691/67x67/143456277527354_107239305278551_3701203795594275674_n.jpg'
															src='../kiemviecv32/images/graphics/blank.gif'
															alt='Công ty TNHH MTV Tín Nha'
														/>{' '}
													</a>{' '}
												</div>
												<div className={sx('figcaption')}>
													<div className={sx('timeago')} />
													<div className={sx('title')}>
														{' '}
														<a
															className={sx('job_link')}
															href='https://careerbuilder.vn/vi/tim-viec-lam/ke-toan-noi-bo.35BE14E9.html'
															target='_blank'
															title='Kế toán Nội bộ'
															rel='noreferrer'>
															{' '}
															Kế toán Nội bộ{' '}
														</a>{' '}
													</div>
													<div className={sx('caption')}>
														<a
															className={sx('company-name')}
															href='https://careerbuilder.vn/vi/nha-tuyen-dung/cong-ty-tnhh-mtv-tin-nha.35A95C6B.html'
															target='_blank'
															title='Công ty TNHH MTV Tín Nha'
															rel='noreferrer'>
															Công ty TNHH MTV Tín Nha
														</a>
														<p className={sx('salary')}>
															<em className={sx('fa', 'fa-usd')} />
															Lương: 8 Tr - 10 Tr VND
														</p>
														<div className={sx('location')}>
															<em className={sx('mdi', 'mdi-map-marker')} />
															<ul>
																<li>Hồ Chí Minh</li>
															</ul>
														</div>
													</div>
												</div>
												<div className={sx('top-icon')} />
											</div>
										</div>
										<div className={sx('job-item')}>
											<div className={sx('figure')}>
												<div className={sx('image')}>
													{' '}
													<a
														href='https://careerbuilder.vn/vi/nha-tuyen-dung/cong-ty-co-phan-du-lich-intertour-viet-nam.35A84F82.html'
														target='_blank'
														title='Công ty Cổ phần du lịch Intertour Việt Nam'
														rel='noreferrer'>
														{' '}
														<img
															className={sx('lazy-bg')}
															data-src='https://static.careerbuilder.vn/themes/kiemviecv32/images/graphics/logo-default.png'
															src='../kiemviecv32/images/graphics/blank.gif'
															alt='Công ty Cổ phần du lịch Intertour Việt Nam'
														/>{' '}
													</a>{' '}
												</div>
												<div className={sx('figcaption')}>
													<div className={sx('timeago')} />
													<div className={sx('title')}>
														{' '}
														<a
															className={sx('job_link')}
															href='https://careerbuilder.vn/vi/tim-viec-lam/nhan-vien-ke-toan-noi-bo.35BDE7DC.html'
															target='_blank'
															title='Nhân viên kế toán nội bộ'
															rel='noreferrer'>
															{' '}
															Nhân viên kế toán nội bộ{' '}
														</a>{' '}
													</div>
													<div className={sx('caption')}>
														<a
															className={sx('company-name')}
															href='https://careerbuilder.vn/vi/nha-tuyen-dung/cong-ty-co-phan-du-lich-intertour-viet-nam.35A84F82.html'
															target='_blank'
															title='Công ty Cổ phần du lịch Intertour Việt Nam'
															rel='noreferrer'>
															Công ty Cổ phần du lịch Intertour Việt Nam
														</a>
														<p className={sx('salary')}>
															<em className={sx('fa', 'fa-usd')} />
															Lương: 8 Tr - 12 Tr VND
														</p>
														<div className={sx('location')}>
															<em className={sx('mdi', 'mdi-map-marker')} />
															<ul>
																<li>Hồ Chí Minh</li>
															</ul>
														</div>
													</div>
												</div>
												<div className={sx('top-icon')} />
											</div>
										</div>
										<div className={sx('job-item')}>
											<div className={sx('figure')}>
												<div className={sx('image')}>
													{' '}
													<a
														href='https://careerbuilder.vn/vi/nha-tuyen-dung/cong-ty-co-phan-tap-doan-unis.35A7CDF2.html'
														target='_blank'
														title='CÔNG TY CỔ PHẦN TẬP ĐOÀN UNIS'
														rel='noreferrer'>
														{' '}
														<img
															className={sx('lazy-bg')}
															data-src='https://images.careerbuilder.vn/employer_folders/lot2/189682/67x67/130030logo.jpg'
															src='../kiemviecv32/images/graphics/blank.gif'
															alt='CÔNG TY CỔ PHẦN TẬP ĐOÀN UNIS'
														/>{' '}
													</a>{' '}
												</div>
												<div className={sx('figcaption')}>
													<div className={sx('timeago')} />
													<div className={sx('title')}>
														{' '}
														<a
															className={sx('job_link')}
															href='https://careerbuilder.vn/vi/tim-viec-lam/ke-toan-quan-ly-noi-bo.35BDE8A8.html'
															target='_blank'
															title='Kế Toán Quản Lý Nội Bộ'
															rel='noreferrer'>
															{' '}
															Kế Toán Quản Lý Nội Bộ{' '}
														</a>{' '}
													</div>
													<div className={sx('caption')}>
														<a
															className={sx('company-name')}
															href='https://careerbuilder.vn/vi/nha-tuyen-dung/cong-ty-co-phan-tap-doan-unis.35A7CDF2.html'
															target='_blank'
															title='CÔNG TY CỔ PHẦN TẬP ĐOÀN UNIS'
															rel='noreferrer'>
															CÔNG TY CỔ PHẦN TẬP ĐOÀN UNIS
														</a>
														<p className={sx('salary')}>
															<em className={sx('fa', 'fa-usd')} />
															Lương: 10 Tr - 12 Tr VND
														</p>
														<div className={sx('location')}>
															<em className={sx('mdi', 'mdi-map-marker')} />
															<ul>
																<li>Hồ Chí Minh</li>
															</ul>
														</div>
													</div>
												</div>
												<div className={sx('top-icon')} />
											</div>
										</div>
										<div className={sx('job-item')}>
											<div className={sx('figure')}>
												<div className={sx('image')}>
													{' '}
													<a
														href='https://careerbuilder.vn/vi/nha-tuyen-dung/cong-ty-tnhh-dau-tu-thuong-mai-dich-vu-moc-lan-vien.35A97442.html'
														target='_blank'
														title='CÔNG TY TNHH ĐẦU TƯ THƯƠNG MẠI DỊCH VỤ MỘC LAN VIÊN'
														rel='noreferrer'>
														{' '}
														<img
															className={sx('lazy-bg')}
															data-src='https://images.careerbuilder.vn/employer_folders/lot4/297794/67x67/110544logomlv2.jpg'
															src='../kiemviecv32/images/graphics/blank.gif'
															alt='CÔNG TY TNHH ĐẦU TƯ THƯƠNG MẠI DỊCH VỤ MỘC LAN VIÊN'
														/>{' '}
													</a>{' '}
												</div>
												<div className={sx('figcaption')}>
													<div className={sx('timeago')} />
													<div className={sx('title')}>
														{' '}
														<a
															className={sx('job_link')}
															href='https://careerbuilder.vn/vi/tim-viec-lam/nhan-vien-ke-toan-noi-bo.35BDF2E4.html'
															target='_blank'
															title='Nhân viên kế toán nội bộ'
															rel='noreferrer'>
															{' '}
															Nhân viên kế toán nội bộ{' '}
														</a>{' '}
													</div>
													<div className={sx('caption')}>
														<a
															className={sx('company-name')}
															href='https://careerbuilder.vn/vi/nha-tuyen-dung/cong-ty-tnhh-dau-tu-thuong-mai-dich-vu-moc-lan-vien.35A97442.html'
															target='_blank'
															title='CÔNG TY TNHH ĐẦU TƯ THƯƠNG MẠI DỊCH VỤ MỘC LAN VIÊN'
															rel='noreferrer'>
															CÔNG TY TNHH ĐẦU TƯ THƯƠNG MẠI DỊCH VỤ MỘC LAN VIÊN
														</a>
														<p className={sx('salary')}>
															<em className={sx('fa', 'fa-usd')} />
															Lương: 10 Tr - 15 Tr VND
														</p>
														<div className={sx('location')}>
															<em className={sx('mdi', 'mdi-map-marker')} />
															<ul>
																<li>Hồ Chí Minh</li>
															</ul>
														</div>
													</div>
												</div>
												<div className={sx('top-icon')} />
											</div>
										</div>
										<div className={sx('job-item')}>
											<div className={sx('figure')}>
												<div className={sx('image')}>
													{' '}
													<a
														href='https://careerbuilder.vn/vi/nha-tuyen-dung/cong-ty-tnhh-dau-tu-tam-anh.35A95D97.html'
														target='_blank'
														title='Công Ty TNHH Đầu Tư Tam Anh'
														rel='noreferrer'>
														{' '}
														<img
															className={sx('lazy-bg')}
															data-src='https://images.careerbuilder.vn/employer_folders/lot1/291991/67x67/133253asset1-2x.png'
															src='../kiemviecv32/images/graphics/blank.gif'
															alt='Công Ty TNHH Đầu Tư Tam Anh'
														/>{' '}
													</a>{' '}
												</div>
												<div className={sx('figcaption')}>
													<div className={sx('timeago')} />
													<div className={sx('title')}>
														{' '}
														<a
															className={sx('job_link')}
															href='https://careerbuilder.vn/vi/tim-viec-lam/hcm-ke-toan-tong-hop-noi-bo.35BDC425.html'
															target='_blank'
															title='[HCM] Kế Toán Tổng Hợp Nội Bộ'
															rel='noreferrer'>
															{' '}
															[HCM] Kế Toán Tổng Hợp Nội Bộ{' '}
														</a>{' '}
													</div>
													<div className={sx('caption')}>
														<a
															className={sx('company-name')}
															href='https://careerbuilder.vn/vi/nha-tuyen-dung/cong-ty-tnhh-dau-tu-tam-anh.35A95D97.html'
															target='_blank'
															title='Công Ty TNHH Đầu Tư Tam Anh'
															rel='noreferrer'>
															Công Ty TNHH Đầu Tư Tam Anh
														</a>
														<p className={sx('salary')}>
															<em className={sx('fa', 'fa-usd')} />
															Lương: 8 Tr - 12 Tr VND
														</p>
														<div className={sx('location')}>
															<em className={sx('mdi', 'mdi-map-marker')} />
															<ul>
																<li>Hồ Chí Minh</li>
															</ul>
														</div>
													</div>
												</div>
												<div className={sx('top-icon')} />
											</div>
										</div>
										<div className={sx('job-item')}>
											<div className={sx('figure')}>
												<div className={sx('image')}>
													{' '}
													<a
														href='https://careerbuilder.vn/vi/nha-tuyen-dung/cong-ty-cp-co-khi-tan-minh.35A83784.html'
														target='_blank'
														title='CÔNG TY CP CƠ KHÍ TÂN MINH'
														rel='noreferrer'>
														{' '}
														<img
															className={sx('lazy-bg')}
															data-src='https://images.careerbuilder.vn/employer_folders/lot8/216708/67x67/151622img_2263.png'
															src='../kiemviecv32/images/graphics/blank.gif'
															alt='CÔNG TY CP CƠ KHÍ TÂN MINH'
														/>{' '}
													</a>{' '}
												</div>
												<div className={sx('figcaption')}>
													<div className={sx('timeago')} />
													<div className={sx('title')}>
														{' '}
														<a
															className={sx('job_link')}
															href='https://careerbuilder.vn/vi/tim-viec-lam/nhan-vien-ke-toan-noi-bo.35BE1312.html'
															target='_blank'
															title='Nhân viên Kế toán nội bộ'
															rel='noreferrer'>
															{' '}
															Nhân viên Kế toán nội bộ{' '}
														</a>{' '}
													</div>
													<div className={sx('caption')}>
														<a
															className={sx('company-name')}
															href='https://careerbuilder.vn/vi/nha-tuyen-dung/cong-ty-cp-co-khi-tan-minh.35A83784.html'
															target='_blank'
															title='CÔNG TY CP CƠ KHÍ TÂN MINH'
															rel='noreferrer'>
															CÔNG TY CP CƠ KHÍ TÂN MINH
														</a>
														<p className={sx('salary')}>
															<em className={sx('fa', 'fa-usd')} />
															Lương: 8 Tr - 12 Tr VND
														</p>
														<div className={sx('location')}>
															<em className={sx('mdi', 'mdi-map-marker')} />
															<ul>
																<li>Hồ Chí Minh</li>
															</ul>
														</div>
													</div>
												</div>
												<div className={sx('top-icon')} />
											</div>
										</div>
									</div>
									<div className={sx('load-more')}>
										<a
											href='https://careerbuilder.vn/viec-lam-tuong-tu/Kế-Toán-Nội-Bộ-tai-ho-chi-minh-kl8-vi.html'
											title='jobs recommend'>
											Xem tất cả
										</a>
									</div>
								</section>
							</div>
						</div>
					</div>
				</div>
			</section>
		</>
	);
};

export default DetailJobPost;
