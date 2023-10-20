import React from 'react';
import { useParams } from 'react-router-dom';
import { useGetOneMyAttachQuery } from '~/App/providers/apis/myAttachApi';
import GenderEnum from '~/App/constants/genderEnum';
import formatDate from '~/Core/utils/formatDate';
import { useGetAllProvincesQuery } from '~/App/providers/apis/listProvincesApi';
import { useGetAllDistrictsQuery } from '~/App/providers/apis/districtsApi';
import { useGetAllWorkTypeQuery } from '~/App/providers/apis/workTypeApi';
import { useGetAllProfessionQuery } from '~/App/providers/apis/professionApi';
import { marialStatusEnum } from '~/App/constants/marialStatusEnum';
import { LevelArray } from '~/App/constants/levelEnum';
import formatVND from '~/Core/utils/formatVND';
const MyCvDetail = ({ cx }) => {
	const { id } = useParams();
	const { data } = useGetOneMyAttachQuery(id);
	const { data: listProvinces } = useGetAllProvincesQuery();
	const { data: listWorkType } = useGetAllWorkTypeQuery();
	const { data: listProfession } = useGetAllProfessionQuery({});
	

	const { data: listDistricts } = useGetAllDistrictsQuery(
		{
			params: {
				depth: 2
			},
			code: data?.resume_desired_job?.provinces
		},
		{
			skip: !data?.resume_desired_job?.provinces
		}
	);

	return (
		<section className={cx('cb-section')}>
			<div className={cx('container')}>
				<div className={cx('attach-resume-complete')}>
					<div className={cx('section-complete')}>
						<div className={cx('cb-title-h3')}>
							<h3>Xem hồ sơ đính kèm</h3>
						</div>
						<div className={cx('data-field')}>
							<div className={cx('form-group', 'row')}>
								<label className={cx('col-sm-3', 'col-form-label')}>Tiêu đề hồ sơ</label>
								<div className={cx('col-sm-9')}>{data?.resume_title?.title}</div>
							</div>
							<div className={cx('form-group', 'row')}>
								<div className={cx('col-12')}>
									<iframe
										id='frm_view_pdf'
										frameBorder={0}
										scrolling='no'
										src={`${import.meta.env.VITE_IMAGE_URL}/${data?.attachments?.file}`}
										height={934}
										width='100%'
									/>
								</div>
							</div>
						</div>
					</div>
					<div className={cx('section-complete')}>
						<div className={cx('cb-title-h3')}>
							<h3>Thông tin cá nhân</h3>
						</div>
						<div className={cx('data-field')}>
							<div className={cx('img-info')}>
								<div className={cx('figure')}>
									<div className={cx('image', 'img-result', 'hide')}>
										{/* <img
											className={cx('cropped')}
											src='https://images.careerbuilder.vn/jobseekers/20230129/6344693_1674976735.jpg'
											alt=''
										/> */}
									</div>
								</div>
							</div>
							<div className={cx('form-group', 'row')}>
								<label className={cx('col-sm-3', 'col-form-label')}>Họ &amp; tên</label>
								<div className={cx('col-sm-9')}>
									{data?.user_account?.firstname + data?.user_account?.lastname}
								</div>
							</div>
							<div className={cx('form-group', 'row')}>
								<label className={cx('col-sm-3', 'col-form-label')}>Giới tính</label>
								<div className={cx('col-sm-9')}> {GenderEnum[data?.resume_profile?.gender]} </div>
							</div>
							<div className={cx('form-group', 'row')}>
								<label className={cx('col-sm-3', 'col-form-label')}>Ngày sinh</label>
								<div className={cx('col-sm-9')}>{formatDate(data?.resume_profile?.birthday)}</div>
							</div>
							<div className={cx('form-group', 'row')}>
								<label className={cx('col-sm-3', 'col-form-label')}>Điện thoại</label>
								<div className={cx('col-sm-9')}>{data?.resume_profile?.phone_number}</div>
							</div>
							<div className={cx('form-group', 'row')}>
								<label className={cx('col-sm-3', 'col-form-label')}>Email</label>
								<div className={cx('col-sm-9')}>{data?.user_account?.email}</div>
							</div>
							<div className={cx('form-group', 'row')}>
								<label className={cx('col-sm-3', 'col-form-label')}>Tình trạng hôn nhân</label>
								<div className={cx('col-sm-9')}>{marialStatusEnum[data?.resume_profile?.marial_status]}</div>
							</div>
							<div className={cx('form-group', 'row')}>
								<label className={cx('col-sm-3', 'col-form-label')}>Tỉnh/ Thành phố</label>
								{listProvinces?.map((item) =>
									item.code === data?.resume_profile?.provinces ? (
										<div className={cx('col-sm-9')} key={item.code}>
											{item.name}
										</div>
									) : null
								)}
							</div>
							<div className={cx('form-group', 'row')}>
								<label className={cx('col-sm-3', 'col-form-label')}>Quận/ Huyện</label>
								<div className={cx('col-sm-9')}>
									{listDistricts?.districts?.map((item) =>
										item.code === data?.resume_profile?.districts ? item.name : null
									)}
								</div>
							</div>
							<div className={cx('form-group', 'row')}>
								<label className={cx('col-sm-3', 'col-form-label')}>Địa chỉ</label>
								<div className={cx('col-sm-9')}>{data?.resume_profile?.address}</div>
							</div>
						</div>
					</div>
					<div className={cx('section-complete')}>
						<div className={cx('cb-title-h3')}>
							<h3>Công Việc Mong Muốn</h3>
						</div>
						<div className={cx('data-field')}>
							{/* <div className={cx('form-group', 'row')}>
								<label className={cx('col-sm-3', 'col-form-label')}>Số năm kinh nghiệm</label>
								<div className={cx('col-sm-9')}>Chưa có kinh nghiệm</div>
							</div> */}
							{/* <div className={cx('form-group', 'row')}>
								<label className={cx('col-sm-3', 'col-form-label')}>Ngôn ngữ</label>
								<div className={cx('col-sm-9')}>Anh - Trung cấp, - 123</div>
							</div> */}
							<div className={cx('form-group', 'row')}>
								<label className={cx('col-sm-3', 'col-form-label')}>Cấp bậc mong muốn</label>
								{LevelArray?.map((item) =>
									item.value == data?.resume_desired_job?.position_id ? (
										<div className={cx('col-sm-9')}>{item.label}</div>
									) : null
								)}
							</div>
							<div className={cx('form-group', 'row')}>
								<label className={cx('col-sm-3', 'col-form-label')}>Mức lương</label>
								<div className={cx('col-sm-9')}>
									{' '}
									{formatVND(data?.resume_desired_job?.salary_to)} -{' '}
									{formatVND(data?.resume_desired_job?.salary_from)} VND
								</div>
							</div>
							<div className={cx('form-group', 'row')}>
								<label className={cx('col-sm-3', 'col-form-label')}>Hình thức làm việc</label>
								<div className={cx('col-sm-9')}>
									{listWorkType?.map((workType, index) => {
										const matchingWorkTypes = data?.resume_work_type.filter(
											(item) => item.work_type_id == workType.id
										);
										const workTypeNames = matchingWorkTypes?.map((item) => workType.name).join(',');

										if (index === 0) {
											return workTypeNames;
										} else {
											return `, ${workTypeNames}`;
										}
									})}
								</div>
							</div>
							{data?.resume_desired_job?.work_home ? (
								<div className={cx('form-group', 'row')}>
									<label className={cx('col-sm-3', 'col-form-label')}>Phương thức công việc</label>
								</div>
							) : null}
							<div className={cx('form-group', 'row')}>
								<label className={cx('col-sm-3', 'col-form-label')}>Ngành nghề</label>
								<div className={cx('col-sm-9')}>
									{listProfession?.data?.map((profession, index) => {
										const matchingProfession = data?.profession_desired_job.filter(
											(item) => item.profession_id == profession.id
											);
										console.log("TCL: matchingProfession", matchingProfession)

										const professionNames = matchingProfession?.map((item) => profession.name).join(',');

										if (index === 0) {
											return professionNames;
										} else {
											return `, ${professionNames}`;
										}
									})}
								</div>
							</div>
							<div className={cx('form-group', 'row')}>
								<label className={cx('col-sm-3', 'col-form-label')}>Nơi làm việc</label>
								<div className={cx('col-sm-9')}>
									{listProvinces?.map((item) =>
										item.code === data?.resume_desired_job?.provinces ? item.name : null
									)}{' '}
									-{' '}
									{listDistricts?.districts?.map((item) =>
										item.code === data?.resume_desired_job?.districts ? item.name : null
									)}
								</div>
							</div>
						</div>
					</div>
					<div className={cx('section-complete')}>
						<div className={cx('data-field')}>
							<div className={cx('form-group', 'row')}>
								<label className={cx('col-sm-3', 'col-form-label', 'nonetext')}>&nbsp;</label>
								<div className={cx('col-sm-9', 'list-button')}>
									<a className={cx('btn-white')} href='https://careerbuilder.vn/vi/jobseekers/dashboard'>
										Quản lý hồ sơ
										<em className={cx('fa', 'fa-bars')} />
									</a>
									<a
										className={cx('btn-gradient')}
										href='https://careerbuilder.vn/vi/jobseekers/myresume/myattach?id=18151080'>
										Chỉnh sửa
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

export default MyCvDetail;
