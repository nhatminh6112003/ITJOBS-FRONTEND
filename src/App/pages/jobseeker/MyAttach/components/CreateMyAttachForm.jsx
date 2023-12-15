import { yupResolver } from '@hookform/resolvers/yup';
import BoltIcon from '@mui/icons-material/Bolt';
import LanguageIcon from '@mui/icons-material/Language';
import { useForm } from 'react-hook-form';
import { LevelArray } from '~/App/constants/levelEnum';
import { useGetAllDistrictsQuery } from '~/App/providers/apis/districtsApi';
import { useGetAllJobWelfareQuery } from '~/App/providers/apis/jobWelfareApi';
import { useGetAllProvincesQuery } from '~/App/providers/apis/listProvincesApi';
import { useGetAllProfessionQuery } from '~/App/providers/apis/professionApi';
import { useGetAllWorkTypeQuery } from '~/App/providers/apis/workTypeApi';
import { myAttachSchema } from '~/App/schemas/myAttachSchema';
import CheckBoxFieldControl from '~/Core/components/common/FormControl/CheckBoxFieldControl';
import FileUploadFieldControl from '~/Core/components/common/FormControl/FileUploadFieldControl/FileUploadFieldControl';
import InputFieldControl from '~/Core/components/common/FormControl/InputFieldControl';
import SelectFieldControl from '~/Core/components/common/FormControl/SelectFieldControl';
import SelectMultipleFieldControl from '~/Core/components/common/FormControl/SelectMultipleFieldControl';
import { LockIcon } from '~/Core/resources';
import { DegreeArray } from '~/App/constants/degreeArray';
import useModal from '~/App/hooks/useModal';
import Information, { Form } from './Information';
import { useGetOneResumeProfileQuery, useUpdateResumeProfileMutation } from '~/App/providers/apis/resumeProfileApi';
import { useSelector } from 'react-redux';
import ModalMyAttach from './ModalMyAttach';
import styles from '~/App/pages/jobseeker/MyProfile/MyProfile.module.css';
import classNames from 'classnames/bind';
import { resumeProfileSchema } from '~/App/schemas/resumeProfileSchema';
import { toast } from 'react-toastify';
import GenderEnum from '~/App/constants/genderEnum';
import formatDate from '~/Core/utils/formatDate';
import { marialStatusEnum } from '~/App/constants/marialStatusEnum';

export const sw = classNames.bind(styles);
const CreateMyAttachForm = ({ sx, cx, onCreateAttach, handleClick, selectedValue }) => {
	const { control, handleSubmit, watch, setValue } = useForm({
		resolver: yupResolver(myAttachSchema)
	});
	const {
		control: updateControl,
		handleSubmit: handleUpdateSubmit,
		reset,
		watch: watchUpdateProfile
	} = useForm({
		resolver: yupResolver(resumeProfileSchema)
	});
	const selectFile = watch('file');
	const selectedProvince2 = watchUpdateProfile('provinces', null);
	const { data: listDistricts2 } = useGetAllDistrictsQuery(
		{
			params: {
				depth: 2
			},
			code: selectedProvince2
		},
		{
			skip: !selectedProvince2
		}
	);

	const { data: listJobWelfare } = useGetAllJobWelfareQuery({});
	const { data: listProfession } = useGetAllProfessionQuery({});
	const { data: listWorkType } = useGetAllWorkTypeQuery();
	const { data: listProvinces } = useGetAllProvincesQuery();
	const selectedProvince = watch('provincesMyAttach', null);
	const [updateProfileMutation] = useUpdateResumeProfileMutation();
	const user = useSelector((state) => state.auth?.user);
	const id = useSelector((state) => state.auth?.user?.id);
	const { data: resume_profile } = useGetOneResumeProfileQuery(id);

	const { data: listDistricts } = useGetAllDistrictsQuery(
		{
			params: {
				depth: 2
			},
			code: selectedProvince
		},
		{
			skip: !selectedProvince
		}
	);
	const { isShowing, toggle } = useModal({
		update_resume_profile: false
	});
	const onUpdateSubmit = async (data) => {
		updateProfileMutation({
			id: user?.id,
			payload: {
				...data
			}
		})
			.unwrap()
			.then((r) => {
				if (r.status == 200) {
					toast.success(r?.message);
					toggle('update_resume_profile');
				}
			});
	};
	return (
		<>
			<form onSubmit={handleSubmit(onCreateAttach)}>
				<div className={sx('quick-upload')}>
					<div className={sx('cb-title-h3')}>
						<h3>Hồ sơ</h3>
					</div>
					<div className={sx('form-show-file', selectFile?.name ? 'active' : '')} id='uploadFile_file'>
						<label>* Tên Hồ Sơ:</label>
						<em className={cx('material-icons')}>picture_as_pdf</em>

						<p className={sx('show-file')}>{selectFile?.name}</p>
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
									<FileUploadFieldControl
										htmlFor='file'
										control={control}
										name='file'
										label='Tải hồ sơ từ máy tính'
									/>
								</div>
							</div>
							<span className={sx('error_attach_file')} />
						</div>
					</div>
					<div className={sx('form-group', 'form-text')}>
						<InputFieldControl control={control} name='title' id='title' placeholder='Tiều đề hồ sơ' />
						<span className={sx('error_resume_title')} />
						<div className={sx('form-note')}>
							<p>Nhập vị trí hoặc chức danh. Ví dụ: Kế toán trưởng, Web designer</p>
						</div>
					</div>
					<div className={sx('form-group', 'form-note')}>
						<div className={sx('box-noti')} style={{ color: 'red' }}>
							<div>
								<b>Lưu ý:</b> Theo thống kê của JobHunters.vn hồ sơ Tiếng Anh được nhà tuyển dụng xem nhiều hơn
								150% so với hồ sơ Tiếng Việt
								<br />
								<span
									className={sx('note', '')}
									style={{
										color: 'red',
										fontSize: '12px',
										fontStyle: 'italic',
										paddingTop: '7px',
										display: 'flex'
									}}>
									Tất cả các bằng cấp, chứng chỉ kèm theo (nếu có) cần được gộp chung vào hồ sơ ứng tuyển với
									dung lượng không quá 5MB vì vượt quá dung lượng quy định có
									<br />
									khả năng dẫn đến việc Nhà tuyển dụng không nhận được hồ sơ ứng tuyển; và chỉ hỗ trợ các định
									dạng .doc, .dosx, *.pdf.
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
							<Information
								className={cx}
								isShowing={isShowing}
								toggle={toggle}
								onUpdateSubmit={onUpdateSubmit}
								resume_profile={resume_profile}
								reset={reset}
								watch={watchUpdateProfile}
							/>
						</div>
					</div>
					<div className={cx('data-field')}>
						<div className={cx('img-info')}>
							<div className={cx('figure')}>
								<div className={cx('image', 'img-result', 'hide')}></div>
							</div>
						</div>
						<div className={cx('form-group', 'row')}>
							<label className={cx('col-sm-3', 'col-form-label')}>Họ &amp; tên</label>
							<div className={cx('col-sm-9')}>{resume_profile?.firstname + ' ' + resume_profile?.lastname}</div>
						</div>
						<div className={cx('form-group', 'row')}>
							<label className={cx('col-sm-3', 'col-form-label')}>Giới tính</label>
							<div className={cx('col-sm-9')}> {GenderEnum[resume_profile?.gender]} </div>
						</div>
						<div className={cx('form-group', 'row')}>
							<label className={cx('col-sm-3', 'col-form-label')}>Ngày sinh</label>
							<div className={cx('col-sm-9')}>{formatDate(resume_profile?.birthday)}</div>
						</div>
						<div className={cx('form-group', 'row')}>
							<label className={cx('col-sm-3', 'col-form-label')}>Điện thoại</label>
							<div className={cx('col-sm-9')}>{resume_profile?.phone_number}</div>
						</div>
						<div className={cx('form-group', 'row')}>
							<label className={cx('col-sm-3', 'col-form-label')}>Email</label>
							<div className={cx('col-sm-9')}>{user?.email}</div>
						</div>
						<div className={cx('form-group', 'row')}>
							<label className={cx('col-sm-3', 'col-form-label')}>Tình trạng hôn nhân</label>
							<div className={cx('col-sm-9')}>{marialStatusEnum[resume_profile?.marial_status]}</div>
						</div>
						<div className={cx('form-group', 'row')}>
							<label className={cx('col-sm-3', 'col-form-label')}>Tỉnh/ Thành phố</label>
							{listProvinces?.map((item) =>
								item.code === resume_profile?.provinces ? (
									<div className={cx('col-sm-9')} key={item.code}>
										{item.name}
									</div>
								) : null
							)}
						</div>
						<div className={cx('form-group', 'row')}>
							<label className={cx('col-sm-3', 'col-form-label')}>Quận/ Huyện</label>
							<div className={cx('col-sm-9')}>
								{listDistricts2?.districts?.map((item) =>
									item.code === resume_profile?.districts ? item.name : null
								)}
							</div>
						</div>
						<div className={cx('form-group', 'row')}>
							<label className={cx('col-sm-3', 'col-form-label')}>Địa chỉ</label>
							<div className={cx('col-sm-9')}>{resume_profile?.address}</div>
						</div>
					</div>
					<p className={sx('noted', '')}> Xin vui lòng cập nhật thông tin cá nhân để hoàn tất hồ sơ</p>
				</div>
				<div className={sx('quick-upload', 'quick-upload-2', '')}>
					<div className={sx('cb-title-h3', '')}>
						<h3>Thông tin nghề nghiệp</h3>
					</div>
					<div className={cx('row')}>
						<div className={cx('col-md-6')}>
							<div className={sx('form-group')} style={{ display: 'flex', flexDirection: 'column', gap: 5 }}>
								<label>* Số năm kinh nghiệm</label>
								<InputFieldControl
									id='year_experience'
									type='number'
									control={control}
									name='yearOfExperience'
								/>
							</div>
						</div>
						<div className={cx('col-md-6')}>
							<div className={sx('form-group')} style={{ display: 'flex', flexDirection: 'column', gap: 5 }}>
								<label>* Bằng cấp cao nhất</label>
								<SelectFieldControl name='job_degree_value' control={control} options={DegreeArray} />
							</div>
						</div>
						<div className={cx('col-md-12', '')}>
							<div className={sx('form-group', 'form-select', '')}>
								<SelectFieldControl
									label='* Cấp bậc mong muốn'
									control={control}
									name='position_id'
									options={LevelArray}
								/>
							</div>
						</div>
						<div className={cx('col-md-6', '')}>
							<div className={sx()}>
								{/* ngành nghề mon muốn */}
								<SelectMultipleFieldControl
									label='Ngành nghề mong muốn'
									options={listProfession?.data?.map((value) => ({
										value: value.id,
										label: value.name
									}))}
									placeholder='Chọn'
									maxItems={2}
									control={control}
									name='profession_id'
								/>
							</div>
						</div>
						<div className={sx('col-md-6', 'form-additional', 'form-salary-cus', '')}>
							<label>Mức lương mong muốn</label>
							<div className={sx('form-big', '')}>
								<div className={sx('form-group', 'form-text', '')}>
									<InputFieldControl placeholder='Từ' control={control} name='salary_from' />
								</div>
								<div className={sx('form-group', 'form-text', '')}>
									<InputFieldControl placeholder='Đến' control={control} name='salary_to' />
								</div>
							</div>
						</div>
						{/* <div className={cx('col-md-12', 'form-additional', '')}>
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
													</div>
												</div>
											</div>
										</div>
									</div>
								</div> */}
						<div className={cx('col-md-12', '')}>
							<div className={sx('list-workplace-desired', '')} id='list-workplace-desired '>
								<div className={cx('row', 'item', 'active', '')}>
									<div className={cx('col-md-6', '')}>
										<div className={sx('form-group', 'form-select', '')}>
											{/* thành phố */}
											<SelectFieldControl
												control={control}
												options={listProvinces?.map((value) => {
													return {
														value: value.code,
														label: value.name
													};
												})}
												name='provincesMyAttach'
												id='provincesMyAttach'
												label='Nơi làm việc mong muốn'
											/>
										</div>
									</div>
									<div className={cx('col-md-6', '')}>
										<div style={{ marginBottom: 10 }} className={sx('form-group', 'form-select', '')}>
											{/* quận */}
											<SelectFieldControl
												control={control}
												options={listDistricts?.districts?.map((value) => {
													return {
														value: value.code,
														label: value.name
													};
												})}
												placeholder='Chọn'
												name='districtsMyAttach'
												id='districtsMyAttach'
												label='Quận'
											/>
										</div>
									</div>
								</div>
							</div>
						</div>
						<div className={cx('col-md-12', '')}>
							<div className={cx('row', '')}>
								<div className={cx('col-md-12', '')}>
									<div>
										<SelectMultipleFieldControl
											label='Phúc lợi mong muốn'
											options={listJobWelfare?.data?.map((value) => {
												return {
													value: value.id,
													label: value.welfare_type
												};
											})}
											placeholder='Chọn'
											maxItems={3}
											control={control}
											name='welfare_id'
										/>
									</div>
								</div>
							</div>
						</div>
						<div className={cx('col-md-12', 'form-of-work', '')}>
							<h6>* Hình thức làm việc</h6>
							<div className={cx('row')} style={{ marginTop: 6 }}>
								{listWorkType?.map((listWork, index) => {
									return (
										<div className={cx('col-md-6', '')}>
											<div className={cx('d-flex')}>
												<CheckBoxFieldControl
													name={`work_type_id_${listWork.id}`}
													id='work_type_id'
													control={control}
													label={listWork.name}
													value={listWork.id}
													onChange={(e) => {
														if (e.target.checked)
															setValue(`work_type_id_${listWork.id}`, Number(e.target.value));
													}}
												/>
											</div>
										</div>
									);
								})}
							</div>
							<span className={sx('error_chkResumeType_1', '')} />
						</div>
						<div className={cx('col-md-12', 'form-of-work', '')}>
							<h6>Phương thức công việc</h6>
							<div className={cx('row', '')} style={{ marginTop: 6 }}>
								<div className={cx('col-md-6', '')}>
									<div>
										<CheckBoxFieldControl
											name='work_home'
											id='work_home'
											control={control}
											label='Work from home'
											value={false}
										/>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
				<div className={sx('quick-upload', 'quick-upload-2', '')}>
					<div className={sx('cb-title-h3', '')}>
						<h3>Quyền riêng tư của hồ sơ</h3>
					</div>
					<div className={sx('status-area')} style={{ margin: '20px 0' }}>
						<div className={sx('switch-status', 'switch-status-element', '')}>
							<a
								data-type={1}
								className={sx(
									selectedValue === 1
										? sx('lock', 'switch-status-element-1', 'active')
										: sx('lock', 'switch-status-element-1')
								)}
								style={{
									cursor: 'pointer',
									display: 'flex',
									alignItems: 'center',
									gap: 3,
									justifyContent: 'center'
								}}
								onClick={() => handleClick(1)}>
								{/* <em className={cx('mdi', 'mdi-lock', '')} /> */}
								<LockIcon fontSize='20' />
								Khóa
							</a>
							<a
								data-type={2}
								className={
									selectedValue === 2
										? sx('public', 'switch-status-element-2', 'active')
										: sx('public', 'switch-status-element-2')
								}
								style={{
									cursor: 'pointer',
									display: 'flex',
									alignItems: 'center',
									gap: 3,
									justifyContent: 'center'
								}}
								onClick={() => handleClick(2)}>
								<LanguageIcon fontSize='20' />
								Công khai
							</a>
							<a
								data-type={3}
								className={cx(
									'flash',
									'switch-status-element-3',
									selectedValue === 3
										? sx('flash', 'switch-status-element-3', 'active')
										: sx('flash', 'switch-status-element-3')
								)}
								style={{
									cursor: 'pointer',
									display: 'flex',
									alignItems: 'center',
									gap: 3,
									justifyContent: 'center'
								}}
								onClick={() => handleClick(3)}>
								<BoltIcon fontSize='20' />
								Khẩn cấp
							</a>
						</div>
						<div className={sx('swap-content-1', '')}></div>
						{selectedValue === 1 && (
							<p className={sx('content-1', 'active', '')}>
								Bạn đang <span>vô hiệu hóa</span> hồ sơ. Nhà tuyển dụng sẽ không thấy được hồ sơ này của bạn.
							</p>
						)}
						{selectedValue === 2 && (
							<p className={sx('content-2', '')}>
								Hồ sơ của bạn đang ở trạng thái <span>Công Khai</span>. Nhà tuyển dụng có thể tìm thấy Hồ sơ này
								của bạn.
							</p>
						)}
						{selectedValue === 3 && (
							<p className={sx('content-3', '')}>
								Hồ sơ của bạn đang ở trạng thái <span>Khẩn cấp</span>. Hồ sơ của bạn sẽ được ưu tiên tìm thấy
								bởi các nhà tuyển dụng.
							</p>
						)}
					</div>
					{/* <div className={cx('row', 'search-resume', '')}>
						<div className={cx('col-md-6', '')}>
							<div className={sx('form-group', '')}>
								<span className={sx('hide-infor', '')}>Ẩn một số thông tin</span>
							</div>
						</div>
					</div> */}
					<div className={cx('row', '')}>
						<div className={cx('col-md-12')}>
							<div className={sx('form-group', 'form-submit', 'form-back', '')}>
								<button type='submit' className={sx('btn-gradient', 'save-and-finish', '')}>
									Lưu và hoàn thành
								</button>
							</div>
						</div>
					</div>
				</div>
			</form>
			<ModalMyAttach
				isOpen={isShowing.update_resume_profile}
				hide={() => toggle('update_resume_profile')}
				className={sw}
				title='Thông tin cá nhân'>
				<Form
					control={updateControl}
					onSubmit={onUpdateSubmit}
					handleSubmit={handleUpdateSubmit}
					cx={sw}
					resume_profile={resume_profile}
					listProvinces={listProvinces}
					listDistricts={listDistricts2?.districts}
					setValue={setValue}
					user={user}
				/>
			</ModalMyAttach>
		</>
	);
};

export default CreateMyAttachForm;
