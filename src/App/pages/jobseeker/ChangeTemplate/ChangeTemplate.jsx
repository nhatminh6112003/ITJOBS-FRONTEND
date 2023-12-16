import classNames from 'classnames/bind';
import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { toast } from 'react-toastify';
import routesPath from '~/App/config/routesPath';
import { colorsEnum, fontSize, fontsEnum } from '~/App/constants/resumeTemplateEnum';
import useModal from '~/App/hooks/useModal';
import SideBar from '~/App/layouts/Components/jobseeker/SideBar';
import { useGetOneQuery, useUpdateUiMutation } from '~/App/providers/apis/resumeTemplateApi';
import Tips from '~/Core/components/common/Modal/Tips';
import styles from './changetemplate.module.css';
import ChooseTemplate from './components/ChooseTemplate';
const cx = classNames.bind(styles);
const ChangeTemplate = () => {
	let [currentFont, changeFont] = useState('');
	let [currentFontSize, changeFontSize] = useState('fontCVsize14');
	let [language, changeLanguage] = useState('');
	let [cvColor, setCvColor] = useState('');
	const resume = useSelector((state) => state.auth?.user?.resume);
	const user = useSelector((state) => state.auth?.user);
	const { data: myResume, refetch } = useGetOneQuery(resume?.id);
	const [updateUi, updateUiState] = useUpdateUiMutation();

	const { isShowing, toggle } = useModal({
		tips: false,
		chooseTemplate: false
	});

	const toggleLanguage = (e) => {
		changeLanguage(e.target.value);
	};

	const handleSetFontSize = (e) => {
		changeFontSize(e.currentTarget.dataset.fontsize);
	};

	const handleSelectedColor = (id) => {
		setCvColor(id);
	};
	const handleUpdateUi = async () => {
		const data = {
			cv_color: cvColor ? cvColor : myResume?.cv_color,
			cv_font: currentFont,
			cv_language: language,
			cv_size: currentFontSize ? currentFontSize : myResume?.cv_size
		};
		updateUi({
			id: resume?.id,
			payload: data
		})
			.unwrap()
			.then((r) => {
				toast.success(r?.message);
			});
	};

	useEffect(() => {
		changeLanguage(myResume?.cv_language);
		changeFont(myResume?.cv_font);
		changeFontSize(myResume?.cv_size);
	}, [myResume]);
	return (
		<div className={cx('page-content', 'd-flex', 'align-items-stretch')}>
			<SideBar className={cx} />
			<div className={cx('content-inner')}>
				<div className={cx('container-fluid')}>
					<div className={cx('change-cv-template-wrap')}>
						<div className={cx('button')}>
							<div className={cx('left')}>
								<div className={cx('view-back')}>
									<a href={routesPath.BasePaths.ResumeStyle.replace(/:id/g, user.resume.id)} id='btn_preview'>
										Xem CV Template
									</a>
								</div>
							</div>
							<div className={cx('right')}>
								<div className={cx('save')}>
									<a id='btn_savetemplate' onClick={handleUpdateUi}>
										<span style={{ cursor: 'pointer' }}>Lưu Lại</span>
									</a>
								</div>
								{/* <div className={cx('download-profile')}>
									<a
										className={cx('btn-gradient')}
										href='javascript:void(0);'
										onClick='downloadCvProfile(17722295);'>
										<span>Tải hồ sơ</span>
										<em className={cx('material-icons')}>get_app</em>
									</a>
								</div> */}
							</div>
						</div>
						<form method='post' name='frmTemplatePattern' id='frmTemplatePattern'>
							<div className={cx('row')}>
								<div className={cx('col-tools')}>
									<div className={cx('tools-schemes')}>
										<div className={cx('head-tools')}>
											<div className={cx('figure')}>
												<div className={cx('image')}>
													<img
														src='https://static.careerbuilder.vn/themes/careerbuilder/img/dash-board/i9.png'
														alt='Công cụ'
													/>
												</div>
												<div className={cx('figcaption')}>
													<h2>Công cụ</h2>
												</div>
												<div className={cx('tips')} onClick={() => toggle('tips')}>
													<div className={cx('icon')}>
														<em className={cx('mdi', 'mdi-lightbulb')} />
													</div>
													<p>Gợi ý</p>
												</div>
											</div>
											<div className={cx('view-less')}>
												<em className={cx('material-icons')}>expand_more</em>
											</div>
										</div>
										<div className={cx('mb-show')}>
											<div className={cx('row')}>
												<div className={cx('col-sm-6', 'col-md-5', 'col-xl-12', 'col-xxxl-6')}>
													<ul className={cx('list-tools')}>
														<li className={cx('item-tools')}>
															<div className={cx('title-tools')}>
																<h3>Mẫu CV</h3>
															</div>
															<div className={cx('template')}>
																<div className={cx('name')}>
																	<p id='cv_template_name'>{myResume?.default_template_name}</p>
																</div>
																<div className={cx('change')}>
																	{/* <Link
																		onClick={() => toggle('chooseTemplate')}
																		className={cx('btn-change-template')}>
																		Đổi Mẫu
																	</Link> */}
																</div>
															</div>
														</li>
														<li className={cx('item-tools')}>
															<div className={cx('title-tools')}>
																<h3>Ngôn ngữ</h3>
															</div>
															<div className={cx('language')}>
																<div className={cx('form-group', 'form-select')}>
																	<label>Hơn 80% Nhà tuyển dụng ưa thích CV tiếng Anh</label>
																	<select
																		onChange={toggleLanguage}
																		name='cv_language'
																		id='cv_language'>
																		<option value='en' selected={language == 'en' ? true : ''}>
																			Tiếng Anh
																		</option>
																		<option value='vi' selected={language == 'vi' ? true : ''}>
																			Tiếng Việt
																		</option>
																	</select>
																</div>
															</div>
														</li>
														<li className={cx('item-tools')}>
															<div className={cx('title-tools')}>
																<h3>Font chữ</h3>
															</div>
															<div className={cx('font-family')}>
																<div className={cx('form-group', 'form-select')}>
																	<select
																		onChange={(e) => {
																			changeFont(e.target.value);
																		}}
																		className={cx('form-control')}
																		name='cv_font'
																		id='cv_font'>
																		{Object.entries(fontsEnum).map(([key, value]) => (
																			<option
																				selected={currentFont == key ? true : ''}
																				key={key}
																				value={key}>
																				{key}
																			</option>
																		))}
																	</select>
																</div>
															</div>
														</li>
														<li className={cx('item-tools')}>
															<div className={cx('title-tools')}>
																<h3>Cỡ chữ</h3>
															</div>
															<div className={cx('font-size')}>
																<ul className={cx('list-font-size')}>
																	<li
																		className={cx(
																			'fontsize',
																			'fontsize12',
																			currentFontSize == fontSize['fontCVsize12'] ? 'active' : ''
																		)}
																		id='fontCVsize12'>
																		<Link
																			className={cx('select-size')}
																			data-fontsize='fontCVsize12'
																			onClick={handleSetFontSize}
																			style={{ fontSize: '0.8em' }}>
																			<svg
																				style={{ color: '#212529' }}
																				className={cx('svg-inline--fa', 'fa-font', 'fa-w-14')}
																				aria-hidden='true'
																				focusable='false'
																				data-prefix='fa'
																				data-icon='font'
																				role='img'
																				xmlns='http://www.w3.org/2000/svg'
																				viewBox='0 0 448 512'
																				data-fa-i2svg=''>
																				<path
																					fill='currentColor'
																					d='M432 416h-23.41L277.88 53.69A32 32 0 0 0 247.58 32h-47.16a32 32 0 0 0-30.3 21.69L39.41 416H16a16 16 0 0 0-16 16v32a16 16 0 0 0 16 16h128a16 16 0 0 0 16-16v-32a16 16 0 0 0-16-16h-19.58l23.3-64h152.56l23.3 64H304a16 16 0 0 0-16 16v32a16 16 0 0 0 16 16h128a16 16 0 0 0 16-16v-32a16 16 0 0 0-16-16zM176.85 272L224 142.51 271.15 272z'></path>
																			</svg>
																		</Link>
																	</li>
																	<li
																		className={cx(
																			'fontsize',
																			'fontsize14',
																			currentFontSize == fontSize['fontCVsize14'] ? 'active' : ''
																		)}
																		id='fontCVsize14'>
																		<Link
																			className={cx('select-size')}
																			data-fontsize='fontCVsize14'
																			onClick={handleSetFontSize}
																			style={{ fontSize: '1.0em' }}>
																			<svg
																				style={{ color: '#212529' }}
																				className={cx('svg-inline--fa', 'fa-font', 'fa-w-14')}
																				aria-hidden='true'
																				focusable='false'
																				data-prefix='fa'
																				data-icon='font'
																				role='img'
																				xmlns='http://www.w3.org/2000/svg'
																				viewBox='0 0 448 512'
																				data-fa-i2svg=''>
																				<path
																					fill='currentColor'
																					d='M432 416h-23.41L277.88 53.69A32 32 0 0 0 247.58 32h-47.16a32 32 0 0 0-30.3 21.69L39.41 416H16a16 16 0 0 0-16 16v32a16 16 0 0 0 16 16h128a16 16 0 0 0 16-16v-32a16 16 0 0 0-16-16h-19.58l23.3-64h152.56l23.3 64H304a16 16 0 0 0-16 16v32a16 16 0 0 0 16 16h128a16 16 0 0 0 16-16v-32a16 16 0 0 0-16-16zM176.85 272L224 142.51 271.15 272z'></path>
																			</svg>
																		</Link>
																	</li>
																	<li
																		className={cx(
																			'fontsize',
																			'fontsize16',
																			currentFontSize == fontSize['fontCVsize16'] ? 'active' : ''
																		)}
																		id='fontCVsize16'>
																		<Link
																			className={cx('select-size')}
																			data-fontsize='fontCVsize16'
																			onClick={handleSetFontSize}
																			style={{ fontSize: '1.2em' }}>
																			<svg
																				style={{ color: '#212529' }}
																				className={cx('svg-inline--fa', 'fa-font', 'fa-w-14')}
																				aria-hidden='true'
																				focusable='false'
																				data-prefix='fa'
																				data-icon='font'
																				role='img'
																				xmlns='http://www.w3.org/2000/svg'
																				viewBox='0 0 448 512'
																				data-fa-i2svg=''>
																				<path
																					fill='currentColor'
																					d='M432 416h-23.41L277.88 53.69A32 32 0 0 0 247.58 32h-47.16a32 32 0 0 0-30.3 21.69L39.41 416H16a16 16 0 0 0-16 16v32a16 16 0 0 0 16 16h128a16 16 0 0 0 16-16v-32a16 16 0 0 0-16-16h-19.58l23.3-64h152.56l23.3 64H304a16 16 0 0 0-16 16v32a16 16 0 0 0 16 16h128a16 16 0 0 0 16-16v-32a16 16 0 0 0-16-16zM176.85 272L224 142.51 271.15 272z'></path>
																			</svg>
																		</Link>
																	</li>
																</ul>
															</div>
														</li>
													</ul>
												</div>
												<div className={cx('col-sm-6', 'col-md-5', 'col-xl-12', 'col-xxxl-6')}>
													<ul className={cx('list-tools')}>
														<li className={cx('item-tools')}>
															<div className={cx('title-tools')}>
																<h3>Màu sắc</h3>
															</div>
															<div className={cx('row', 'color-schemes-wrapper')} id={cx('colorItems')}>
																{myResume?.color_pick?.map((item, index) => {
																	const isSelected = cvColor === item.id;

																	return (
																		<div
																			className={cx(
																				'col-xs-12',
																				'col-sm-3',
																				'col-md-6',
																				'color-selector-mb'
																			)}>
																			<div
																				className={cx(
																					'color-selector',
																					myResume?.cv_color === item.id && !cvColor && 'selected',
																					isSelected && 'selected'
																				)}
																				data-color-id={item.id}>
																				<div className={cx('color-item', 'mb2')}>
																					{item?.color.map((color, colorIndex) => (
																						<div
																							key={colorIndex}
																							onClick={() => handleSelectedColor(item.id)}
																							style={{
																								backgroundColor: color.background,
																								marginRight: colorIndex === 1 ? 2 : '',
																								marginLeft:
																									colorIndex === 3
																										? 2
																										: colorIndex === 1
																										? 2
																										: ''
																							}}
																							className={cx('color-block')}
																						/>
																					))}
																				</div>
																			</div>
																		</div>
																	);
																})}
															</div>
														</li>
													</ul>
												</div>
											</div>
										</div>
									</div>
								</div>
								<div className={cx('col-template')}>
									<div className={cx('main-template')}>
										{language == 'en' ? (
											<div
												id='ZoneShowCVTemplateEn'
												className={cx(
													'cv-template-wrapper',
													currentFont ? fontsEnum[currentFont] : '',
													currentFontSize ? fontSize[currentFontSize] : fontSize['fontCVsize14'],
													myResume?.default_template,
													colorsEnum[cvColor] ? colorsEnum[cvColor] : colorsEnum[myResume?.cv_color]
												)}
												dangerouslySetInnerHTML={{ __html: myResume?.cvTemplate?.html_template_en }}></div>
										) : (
											<div
												id='ZoneShowCVTemplateVi'
												className={cx(
													'cv-template-wrapper',
													currentFont ? fontsEnum[currentFont] : '',
													currentFontSize ? fontSize[currentFontSize] : fontSize['fontCVsize14'],
													myResume?.default_template,
													colorsEnum[cvColor] ? colorsEnum[cvColor] : colorsEnum[myResume?.cv_color]
												)}
												dangerouslySetInnerHTML={{ __html: myResume?.cvTemplate?.html_template_vi }}></div>
										)}

										{/* tiếng anh */}

										{/*end tiếng anh */}
									</div>
								</div>
							</div>
						</form>
					</div>
					<Tips isShowing={isShowing.tips} hide={() => toggle('tips')} title='>Gợi ý'>
						<p>
							Ảnh chân dung trong CV tuy không quyết định tất cả nhưng lại có khả năng gây ấn tượng với Nhà tuyển
							dụng từ cái nhìn đầu tiên. Nếu CV của bạn có thêm ảnh chân dung, bạn cần nhớ những nguyên tắc cơ
							bản sau: Mỉm cười vừa đủ tạo thiện cảm; Trang phục trong ảnh nên có màu đơn sắc và tông tươi tắn,
							nhẹ nhàng; Phông nền của ảnh không rườm rà hay có nhiều chi tiết phụ.
						</p>
					</Tips>
					<ChooseTemplate
						isShowing={isShowing.chooseTemplate}
						hide={() => toggle('chooseTemplate')}
						classNames={cx}
						toggle={toggle}
						refetch={refetch}
					/>
				</div>
			</div>
		</div>
	);
};

export default ChangeTemplate;
