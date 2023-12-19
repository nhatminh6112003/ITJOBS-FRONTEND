import CancelIcon from '@mui/icons-material/Cancel';
import CreateIcon from '@mui/icons-material/Create';
import EditIcon from '@mui/icons-material/Edit';
import PublishIcon from '@mui/icons-material/Publish';
import SortIcon from '@mui/icons-material/Sort';
import VisibilityIcon from '@mui/icons-material/Visibility';
import classNames from 'classnames/bind';
import { useForm } from 'react-hook-form';
import { useSelector } from 'react-redux';
import { Link, useLocation } from 'react-router-dom';
import { toast } from 'react-toastify';
import DateTypeEnum from '~/App/constants/dataTypeEnum';
import jobPostStatusEnum from '~/App/constants/jobPostStatusEnum';
import {
	useDeleteJobPostMutation,
	useGetAllJobPostQuery,
	useUpdateJobPostMutation
} from '~/App/providers/apis/jobPostApi';
import InputFieldControl from '~/Core/components/common/FormControl/InputFieldControl';
import SelectFieldControl from '~/Core/components/common/FormControl/SelectFieldControl';
import { SearchIcon } from '~/Core/resources';
import formatDate from '~/Core/utils/formatDate';
import useSearchJobPost from '../../components/useSearchJobPost';
import TabMenu from '../Posting/components/TabMenu';
import styles from '../Posting/posting.module.css';
import { useGetAllCompany_serviceQuery } from '~/App/providers/apis/company_serviceApi';
import ServiceSlugEnum from '~/App/constants/serviceEnum';
import { ServiceTypeSlugEnum } from '~/App/constants/serviceEnum';
import useRegisterService from '../components/useRegisterService.js';
import moment from 'moment';

const sx = classNames.bind(styles);

const WaitPosting = ({ cx }) => {
	const employer = useSelector((state) => state.auth?.employer);
	const location = useLocation();
	const currentPath = location.pathname;

	const { pushQuery, query } = useSearchJobPost();
	const { data: allJobPost } = useGetAllJobPostQuery({
		params: {
			keyword: query.keyword || '',
			dateType: query.dateType || '',
			fromDate: query.fromDate || '',
			toDate: query.toDate || '',
			user_account_id: employer?.id,
			status: jobPostStatusEnum.Pending,
			isDeleted: false
		}
	});
	const { isServiceExits, isServiceActive, companyService } = useRegisterService(
		employer?.company?.id,
		ServiceTypeSlugEnum.PostJob
	);

	const [deleteJobPost] = useDeleteJobPostMutation();
	const [updateJobPost] = useUpdateJobPostMutation();

	const handleDeleteJobPost = (id) => {
		deleteJobPost(id)
			.unwrap()
			.then((r) => {
				if (r.status == 200) {
					toast.success(r?.message);
				}
			});
	};

	const { control, handleSubmit } = useForm({
		values: {
			keyword: query.keyword || '',
			fromDate: query.fromDate || '',
			toDate: query.toDate || '',
			dateType: query.dateType || ''
		}
	});

	const updateStatusJobPost = async (id) => {
		if (!isServiceExits) {
			toast.error('Bạn chưa đăng kí dịch vụ đăng tuyển');
			return;
		}
		if (!isServiceActive) {
			toast.error('Bạn chưa kích hoạt sử dụng dịch vụ đăng tuyển');
			return;
		}
		const company_service_isActive = companyService.find(
			(item) => item.isActive === true && item?.service?.service_type?.slug === ServiceTypeSlugEnum.PostJob
		);

		updateJobPost({
			id,
			payload: {
				status: jobPostStatusEnum.Publish,
				posted_date: new Date(),
				company_service_id: company_service_isActive.id
			}
		})
			.unwrap()
			.then((r) => {
				if (r.status == 200) {
					toast.success('Đăng tuyển thành công');
				}
			});
	};
	const onSubmit = (data) => {
		pushQuery({ ...data });
	};
	return (
		<section className={sx('manage-job-posting-active-jobs', 'cb-section', 'bg-manage')}>
			<div className={cx('container')}>
				<div className={sx('box-manage-job-posting')}>
					<div className={sx('heading-manage')}>
						<div className={sx('left-heading')}>
							<h1 className={sx('title-manage')}>Việc Làm Chờ Đăng </h1>
							<div className={sx('button')}>
								<Link className={sx('btn-gradient')} to='/employers/postjobs'>
									<CreateIcon style={{ paddingRight: 5 }} />
									Tạo Mẫu Tuyển Dụng
								</Link>
							</div>
						</div>
					</div>
					<div className={sx('main-form-posting')}>
						<form name='frmSearchJob' id='frmSearchJob' action='' method='post' onSubmit={handleSubmit(onSubmit)}>
							<div className={sx('form-wrap')}>
								<div className={sx('form-group', 'form-text')}>
									<InputFieldControl
										name='keyword'
										id='keyword'
										placeholder='Nhập từ khóa'
										control={control}
										label='Từ khóa'
									/>
								</div>
								<div className={sx('form-group', 'form-select')}>
									<SelectFieldControl
										name='dateType'
										id='dateType'
										control={control}
										options={[{ value: DateTypeEnum.CreateAt, label: 'Ngày cập nhật' }]}
										label='Tìm theo ngày'
									/>
								</div>
								<div className={sx('form-group', 'form-date', 'start-date')}>
									<InputFieldControl
										name='fromDate'
										id='fromDate'
										placeholder='Chọn'
										type='date'
										control={control}
										className={sx('dates_cus_select')}
										label='Từ'
									/>
									<div id='start-date' className={sx('dtpicker-overlay', 'dtpicker-mobile')}>
										<div className={sx('dtpicker-bg')}>
											<div className={sx('dtpicker-cont')}>
												<div className={sx('dtpicker-content')}>
													<div className={sx('dtpicker-subcontent')} />
												</div>
											</div>
										</div>
									</div>
								</div>
								<div className={sx('form-group', 'form-date', 'end-date')}>
									<InputFieldControl
										type='date'
										control={control}
										name='toDate'
										id='toDate'
										placeholder='Chọn'
										className={sx('dates_cus_select')}
										label='Đến'
									/>
									<div id='end-date' className={sx('dtpicker-overlay', 'dtpicker-mobile')}>
										<div className={sx('dtpicker-bg')}>
											<div className={sx('dtpicker-cont')}>
												<div className={sx('dtpicker-content')}>
													<div className={sx('dtpicker-subcontent')} />
												</div>
											</div>
										</div>
									</div>
								</div>
								<div className={sx('form-group', 'form-submit')}>
									<button className={sx('btn-submit', 'btn-gradient')} type='submit'>
										<SearchIcon style={{ paddingRight: 5 }} />
										Tìm
									</button>
								</div>
							</div>
						</form>
					</div>
					<div className={sx('main-tabslet')}>
						<ul className={sx('tabslet-tab')}>
							{TabMenu.map((item) => (
								<li className={sx(currentPath == item.path && 'active')}>
									<Link to={item.path}>{item.title}</Link>
								</li>
							))}
						</ul>
						<div className={sx('tabslet-content', 'active')}>
							<div className={sx('main-jobs-posting')}>
								<div className={sx('heading-jobs-posting')}>
									<div className={sx('left-heading')}>
										<p className={sx('name')}>Chọn và thao tác</p>
									</div>
								</div>
								<div className={sx('boding-jobs-posting')}>
									<div className={sx('table', 'table-jobs-posting')}>
										<table>
											<thead>
												<tr>
													<th width='1%' />
													<th width='49%'>Chức danh</th>
													<th width='10%' onClick="setTypeSort('waitposting', 'asc', 0)">
														Cập nhật
														<SortIcon style={{ paddingLeft: 5 }} />
													</th>
													<th width='10%'>
														Đăng tuyển
														<em className={sx('material-icons')} />
													</th>
													<th width='15%'>Thao tác</th>
												</tr>
											</thead>
											<tbody>
												{allJobPost?.data && allJobPost?.data?.length > 0 ? (
													allJobPost?.data?.map((job_post) => {
														return (
															<tr key={job_post.id}>
																<td></td>
																<td>
																	<div className={sx('title')}>
																		<Link to={`/employers/hrcentral/viewjob/${job_post.id}`}>
																			{job_post.job_title}
																		</Link>
																	</div>
																	<div className={sx('jobs-view-detail')}>
																		<p>
																			<strong>Ngành nghề:</strong> Bán hàng / Kinh doanh, CNTT - Phần
																			mềm
																		</p>
																		<p>
																			<strong>Địa điểm:</strong> Hà Nội
																		</p>
																	</div>
																</td>
																<td>
																	<time>{formatDate(job_post.updatedAt)}</time>
																</td>
																<td>
																	<a
																		href='javascript:void(0);'
																		onClick={() => updateStatusJobPost(job_post.id)}
																		title='Thực hiện đăng tuyển'>
																		<img
																			alt='Thực hiện đăng tuyển'
																			src='https://static.careerbuilder.vn/images/icons/posted_13x16.png'
																		/>
																	</a>
																</td>
																<td>
																	<ul className={sx('list-manipulation')}>
																		<li>
																			<a
																				onClick={() => updateStatusJobPost(job_post.id)}
																				title='Đăng tuyển'>
																				<PublishIcon />
																			</a>
																		</li>
																		<li>
																			<Link
																				to={`/employers/hrcentral/viewjob/${job_post.id}`}
																				title='Chi tiết'>
																				<VisibilityIcon />
																			</Link>
																		</li>

																		<li>
																			<Link
																				to={`/employers/postjobs/${job_post.id}`}
																				title='Sửa'
																				style={{ cursor: 'pointer' }}>
																				<EditIcon />
																			</Link>
																		</li>
																		<li className={sx('end')}>
																			<a
																				title='Xóa'
																				onClick={() => handleDeleteJobPost(job_post.id)}
																				style={{ cursor: 'pointer' }}>
																				<CancelIcon />
																			</a>
																		</li>
																	</ul>
																</td>
															</tr>
														);
													})
												) : (
													<tr>
														<td colspan='8'>
															<p align='center'>
																<strong> Không có vị trí nào trong thư mục này.</strong>
															</p>
														</td>
													</tr>
												)}
											</tbody>
										</table>
									</div>
									<div className={sx('main-pagination')}>
										<ul className={sx('pagination')} />
									</div>
								</div>
							</div>
						</div>
						<div className={sx('jobs-posting-modal', 'jobs-posting-1-modal')} style={{ display: 'none' }}>
							<div className={sx('modal-body')}>
								<div className={sx('img-error')}>
									<img src='./img/employer/error.png' alt='' />
								</div>
								<p className={sx('name')}>Thông báo</p>
								<div className={sx('des')}>
									Quý khách chưa đăng ký gói dịch vụ phù hợp. <br />
									Vui lòng liên hệ với chúng tôi để được tư vấn sử dụng dịch vụ
								</div>
								<div className={sx('button')}>
									<a
										className={sx('btn-gradient')}
										href='https://careerbuilder.vn/vi/employers/services/contact'
										onClick='closeAllmodal();'>
										Đồng ý
									</a>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
};

export default WaitPosting;
