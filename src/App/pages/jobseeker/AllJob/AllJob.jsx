import styles from './AllJob.module.css';
import classNames from 'classnames/bind';
import { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import { Link, useNavigate } from 'react-router-dom';
import { dateFilterEnum } from '~/App/constants/dateFilterEnum';
import jobPostStatusEnum from '~/App/constants/jobPostStatusEnum';
import { LevelArray } from '~/App/constants/levelEnum';
import { priceFilterEnum } from '~/App/constants/priceFilterEnum';
import { useGetAllJobPostSortedQuery } from '~/App/providers/apis/jobPostApi';
import { useGetAllProvincesQuery } from '~/App/providers/apis/listProvincesApi';
import { useGetAllProfessionQuery } from '~/App/providers/apis/professionApi';
import InputFieldControl from '~/Core/components/common/FormControl/InputFieldControl';
import SelectFieldControl from '~/Core/components/common/FormControl/SelectFieldControl';

import { SearchIcon, FavoriteBorderIcon } from '~/Core/resources';
import formatDate from '~/Core/utils/formatDate';
import useSearchJobPost from '../../employer/components/useSearchJobPost';
import Pagination from '~/Core/components/common/Pagination';
import { useDispatch } from 'react-redux';
import { PaginationActionEnums } from '~/App/hooks/useServerPagination';
import useCustomRouter from '~/App/hooks/useCustomRouter';
import { toast } from 'react-toastify';
import {
	useCreateJobSavedMutation,
	useDeleteJobSavedMutation,
	useGetAllJobSavedQuery
} from '~/App/providers/apis/jobSavedApi';
import { useSelector } from 'react-redux';

const cx = classNames.bind(styles);
const AllJob = () => {
	const { pushQuery, query } = useSearchJobPost();
	const {
		query: { page }
	} = useCustomRouter();
	const dispatch = useDispatch();
	const { data: allJobPost, isLoading } = useGetAllJobPostSortedQuery({
		params: {
			keyword: query.keyword || '',
			provinces: query.provinces || '',
			job_position_value: query.job_position_value || '',
			profession_id: query.profession_id || '',
			salary: query.salary || '',
			days: query.days || '',
			status: jobPostStatusEnum.Publish,
			isDeleted: false,
			page: page || ''
		}
	});
	const { data: listProvinces } = useGetAllProvincesQuery();
	const [provinces, setProvinces] = useState('');

	const { control, handleSubmit, reset } = useForm({
		values: {
			keyword: query.keyword || '',
			job_position_value: query.job_position_value || '',
			profession_id: query.profession_id || '',
			salary: query.salary || '',
			days: query.days || '',
			provinces: query.provinces || ''
		}
	});

	const { data: listProfession } = useGetAllProfessionQuery({});
	const user = useSelector((state) => state.auth.user);
	const { data: allJobSaved } = useGetAllJobSavedQuery(user?.id);
	const [createJobSaved] = useCreateJobSavedMutation();
	const [deleteJobSaved] = useDeleteJobSavedMutation();
	const navigate = useNavigate();

	useEffect(() => {
		allJobPost?.data?.map((detailJob) => {
			return listProvinces?.map((item) => {
				if (item.code == detailJob?.provinces) {
					setProvinces(item.name);
				}
			});
		});
	}, [allJobPost, listProvinces]);

	const onSubmit = (data) => {
		pushQuery({ ...data });
	};

	const handleReset = () => {
		reset({
			keyword: '',
			job_position_value: '',
			profession_id: '',
			salary: '',
			days: '',
			provinces: ''
		});
		pushQuery({
			keyword: '',
			job_position_value: '',
			profession_id: '',
			salary: '',
			days: '',
			provinces: ''
		});
	};

	const gotoPreviousPage = () => {
		dispatch({ type: PaginationActionEnums.GO_TO_PREV_PAGE });
	};
	const gotoNextPage = () => {
		dispatch({ type: PaginationActionEnums.GO_TO_NEXT_PAGE });
	};

	const changePageIndex = (value) => {
		if (allJobPost?.pagination?.pageIndex >= allJobPost?.pagination?.totalPages) gotoPreviousPage();
		dispatch({
			type: PaginationActionEnums.CHANGE_PAGE_INDEX,
			payload: value
		});
	};
	const handleCreateJobSaved = (id) => {
		if (!user.id) {
			navigate('/account/login');
			return;
		}
		const data = {
			user_account_id: user?.id,
			job_id: id
		};
		createJobSaved(data)
			.unwrap()
			.then((value) => {
				toast.success('Lưu thành công');
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
			<section className={cx('page-heading-tool')}>
				<div className={cx('container')}>
					<div className={cx('tool-wrapper')}>
						{' '}
						<div className={cx('close-input-filter')}>
							<em className={cx('lnr', 'lnr-cross')} />
						</div>
						<div className={cx('search-job')}>
							<form onSubmit={handleSubmit(onSubmit)}>
								<div className={cx('form-wrap')}>
									<div className={cx('form-group', 'form-keyword')}>
										<InputFieldControl
											type='search'
											className={cx('keyword')}
											name='keyword'
											id='keyword'
											placeholder='Chức danh, Kỹ năng, Tên công ty'
											autoComplete='off'
											control={control}
										/>
										<div className={cx('cleartext')}>
											<em className='mdi mdi-close-circle' />
										</div>
									</div>
									<div className={cx('form-group')}>
										<SelectFieldControl
											id='profession_id'
											name='profession_id'
											className={cx('select-custom-nosearch', 'select-custom')}
											initialValue='Chọn ngành nghề'
											options={listProfession?.data?.map((item) => ({
												value: item.id,
												label: item.name
											}))}
											control={control}
										/>
									</div>
									<div className={cx('form-group', 'form-select-chosen')}>
										{listProvinces && listProvinces?.length > 0 && (
											<SelectFieldControl
												control={control}
												id='provinces'
												name='provinces'
												style={{ width: 240 }}
												className={cx('select-custom-nosearch', 'select-custom')}
												initialValue='Tất cả địa điểm'
												options={listProvinces?.map((item) => ({
													value: item?.code,
													label: item?.name
												}))}
											/>
										)}
									</div>
									<div className={cx('form-group', 'form-submit')}>
										<button className={cx('btn-gradient')} type='submit'>
											<p>Tìm Ngay</p>
											<SearchIcon />
										</button>
									</div>
								</div>
							</form>
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
											<SelectFieldControl
												name='salary'
												id='salary'
												className={cx('select-custom', 'select-custom-nosearch')}
												initialValue='Mức lương'
												options={priceFilterEnum.map((item) => ({
													value: item.value,
													label: item.label
												}))}
												control={control}
											/>
										</div>
									</div>
									<div className='item'>
										<div className={cx('form-group', 'form-select')}>
											<SelectFieldControl
												name='job_position_value'
												id='job_position_value'
												className={cx('select-custom', 'select-custom-nosearch')}
												initialValue='Cấp bậc'
												options={LevelArray.map((item) => ({
													value: item.value,
													label: item.label
												}))}
												control={control}
											/>
										</div>
									</div>
									<div className='item'>
										<div className={cx('form-group', 'form-select')}>
											<SelectFieldControl
												control={control}
												name='days'
												id='days'
												className={cx('select-custom', 'select-custom-nosearch')}
												initialValue='Đăng trong vòng'
												options={dateFilterEnum.map((item) => ({
													value: item.value,
													label: item.label
												}))}
											/>
										</div>
									</div>
								</div>
								<div className={cx('filter-action')}>
									<a href='' className={cx('btn-apply')}>
										Tìm Ngay
									</a>
									<a className={cx('btn-clear')} onClick={() => handleReset()}>
										Xóa bộ lọc
									</a>
								</div>
							</div>
						</div>
					</div>
				</div>
			</section>
			<section className={cx('search-result-list')}>
				<div className={cx('container')}>
					<div className={cx('row')}>
						<div className={cx('col-lg-8', 'col-custom-xxl-9')}>
							<div className={cx('job-found')}>
								<div className={cx('job-found-amout')}>
									<h1>{allJobPost?.data?.length} việc làm</h1>
								</div>
							</div>
							<div className={cx('main-slide')}>
								<div className={cx('jobs-side-list')} id='jobs-side-list-content'>
									{allJobPost?.data.map((job_post) => {
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
																	alt={job_post?.company?.company_name}
																	src={`${import.meta.env.VITE_IMAGE_URL}/${job_post?.company?.logo}`}
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
																	<div style={{ color: '#008563', fontSize: '14px' }}>
																		<p>
																			{job_post?.isAgreement === false ? (
																				<>
																					<em className={cx('fa', 'fa-usd')} />
																					Lương:{' '}
																					{parseInt(job_post?.min_salary).toString().charAt(0)} Tr
																					- {parseInt(job_post?.max_salary).toString().charAt(0)}{' '}
																					Tr VND
																				</>
																			) : (
																				<>
																					<div>Lương: Thỏa thuận</div>
																				</>
																			)}
																		</p>
																	</div>
																	<div style={{ color: '#333333', fontSize: '14px' }}>
																		<em className='mdi mdi-map-marker' />
																		<p>{provinces}</p>
																	</div>
																	<div style={{ color: '#333333', fontSize: '14px' }}>
																		<em className='fa fa-clock-o' />
																		<p>Hạn nộp: {formatDate(job_post?.expiry_date)}</p>
																	</div>
																</a>
															</div>
															<div className={cx('bottom-right-icon')}>
																<ul>
																	<li>
																		<a
																			className={cx('toollips', 'save-job', 'chk_save_35BB3D60')}
																			data-id='35BB3D60'
																			style={{ cursor: 'pointer' }}
																			onClick={
																				allJobSaved?.length > 0 &&
																				allJobSaved.some(
																					(item) => item.job_post_saved.id === job_post?.id
																				)
																					? () =>
																							handleDeleteJobSaved(
																								allJobSaved.find(
																									(item) =>
																										item.job_post_saved.id === job_post?.id
																								).id
																							)
																					: () => handleCreateJobSaved(job_post?.id)
																			}>
																			{allJobSaved?.length > 0 &&
																			allJobSaved.some(
																				(item) => item.job_post_saved.id === job_post?.id
																			) ? (
																				<>
																					<FavoriteBorderIcon
																						fontSize='small'
																						style={{
																							color: 'rgba(93, 103, 122, 0.5)',
																							marginRight: '8px'
																						}}
																					/>
																					<span
																						className={cx('text')}
																						style={{ color: 'rgba(93, 103, 122, 0.5)' }}>
																						Việc làm đã lưu
																					</span>
																				</>
																			) : (
																				<>
																					<FavoriteBorderIcon
																						fontSize='small'
																						style={{ marginRight: '8px' }}
																					/>
																					<span className={cx('text')}>Lưu việc làm</span>
																				</>
																			)}
																		</a>
																	</li>
																</ul>
																<div className={cx('time')}>
																	<em className='mdi mdi-calendar' />
																	Cập nhật:
																	<time>{formatDate(job_post?.updatedAt)}</time>
																</div>
															</div>
														</div>
													</div>
												</div>
											</>
										);
									})}
									{allJobPost?.data?.length === 0 && <div>Hiện tại chưa có dữ liệu</div>}
								</div>

								<Pagination
									style={{ display: 'flex', justifyContent: 'center' }}
									total={allJobPost?.pagination?.totalPages}
									pageSize={allJobPost?.pagination?.pageSize}
									currentPage={allJobPost?.pagination?.pageIndex}
									onChange={changePageIndex}
									gotoNextPage={gotoNextPage}
									gotoPreviousPage={gotoPreviousPage}
								/>
							</div>
							<div className={cx('job-bottom-banner')} style={{ textAlign: 'center' }}></div>
						</div>
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
