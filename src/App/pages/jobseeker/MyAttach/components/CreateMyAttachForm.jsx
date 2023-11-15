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
import { Link } from 'react-router-dom';
import routesPath from '~/App/config/routesPath';
import { DegreeArray } from '~/App/constants/degreeArray';
const CreateMyAttachForm = ({ sx, cx, onCreateAttach, handleClick, selectedValue }) => {
	const { control, handleSubmit, watch, setValue } = useForm({
		resolver: yupResolver(myAttachSchema)
	});

	const selectFile = watch('file');

	const { data: listJobWelfare } = useGetAllJobWelfareQuery({});
	const { data: listProfession } = useGetAllProfessionQuery({});
	const { data: listWorkType } = useGetAllWorkTypeQuery();
	const { data: listProvinces } = useGetAllProvincesQuery();
	const selectedProvince = watch('provinces', null);
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
									{/* <label htmlFor='file'>
										<FolderOutlinedIcon style={{ padding: 3 }} />
										Tải hồ sơ từ máy tínhf
									</label> */}
									<FileUploadFieldControl
										htmlFor='file'
										control={control}
										name='file'
										label='Tải hồ sơ từ máy tính'
									/>
									{/* <InputFieldControl
										control={control}
										name='file'
										id='file'
										type='file'
										style={{display:'none'}}
									/> */}
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
							<p></p>
							<div>
								<b>Lưu ý:</b> Theo thống kê của CareerBuilder.vn hồ sơ Tiếng Anh được nhà tuyển dụng xem nhiều
								hơn 150% so với hồ sơ Tiếng Việt
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
							<Link to={routesPath.JobseekerPaths.myProfile + '#personalinfo-section'}>
								<em className={cx('material-icons', '')}>create</em>
								<span> Chỉnh sửa </span>
							</Link>
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
									maxItems={3}
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
												name='provinces'
												id='provinces'
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
												name='districts'
												id='districts'
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
					<div className={sx('status-area', '')}>
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
						{/* <div className={sx('swap-content-1', '')}>
							<p className={sx('content-1', 'active', '')}>
								Bạn đang <span>vô hiệu hóa</span> hồ sơ. Nhà tuyển dụng sẽ không thấy được hồ sơ này của bạn.
							</p>
							<p className={sx('content-2', '')}>
								Hồ sơ của bạn đang ở trạng thái <span>Công Khai</span>. Nhà tuyển dụng có thể tìm thấy Hồ sơ này
								của bạn.
							</p>
							<p className={sx('content-3', '')}>
								Hồ sơ của bạn đang ở trạng thái <span>Khẩn cấp</span>. Hồ sơ của bạn sẽ được ưu tiên tìm thấy
								bởi các nhà tuyển dụng.
							</p>
						</div> */}
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
						<div className={cx('col-md-12')}>
							<div className={sx('form-group', 'form-note', '')}>
								<p>* Thông tin bắt buộc</p>
							</div>
						</div>
					</div>
				</div>
			</form>
		</>
	);
};

export default CreateMyAttachForm;
