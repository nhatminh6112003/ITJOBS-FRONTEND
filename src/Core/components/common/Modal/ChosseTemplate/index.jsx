import React from 'react';
import styles from './chosseTemplate.module.css';
import classNames from 'classnames/bind';
import Modal from '..';
import { CloseIcon } from '~/Core/resources';
const sx = classNames.bind(styles);
const ChosseTemplate = ({ isShowing, hide, classNames: cx }) => {
	return isShowing ? (
		<>
			<Modal isOpen={isShowing} onRequestClose={hide}>
				<div className={cx('change-cv-template-modal', 'fancybox-content')} style={{ display: 'inline-block' }}>
					<div className={cx('title')}>
						<h3>Chọn template</h3>
					</div>
					<div className={cx('list-template')}>
						<div className={cx('row')}>
							<div className={cx('col-xs-12', 'col-sm-6', 'col-md-4', 'cv-item')}>
								<div className={cx('figure')}>
									<div className={cx('image')}>
										<img
											src='https://static.careerbuilder.vn/themes/cv_tool/images/template/cvtemplate15_1605606748.jpg'
											alt='Template 15'
										/>
									</div>
									<div className={cx('figcaption')}>
										<p>Template 15</p>
									</div>
									<div className={cx('el-horizontal')}>
										<a
											className={cx('btn-gradient', 'select-template-new')}
											href='javascript:void(0);'
											data-template-id={15}
											data-template-name='Template 15'>
											Chọn template
										</a>
									</div>
								</div>
							</div>
							<div className={cx('col-xs-12', 'col-sm-6', 'col-md-4', 'cv-item')}>
								<div className={cx('figure')}>
									<div className={cx('image')}>
										<img
											src='https://static.careerbuilder.vn/themes/cv_tool/images/template/cvtemplate14_1605606737.jpg'
											alt='Template 14'
										/>
									</div>
									<div className={cx('figcaption')}>
										<p>Template 14</p>
									</div>
									<div className={cx('el-horizontal')}>
										<a
											className={cx('btn-gradient', 'select-template-new')}
											href='javascript:void(0);'
											data-template-id={14}
											data-template-name='Template 14'>
											Chọn template
										</a>
									</div>
								</div>
							</div>
							<div className={cx('col-xs-12', 'col-sm-6', 'col-md-4', 'cv-item')}>
								<div className={cx('figure')}>
									<div className={cx('image')}>
										<img
											src='https://static.careerbuilder.vn/themes/cv_tool/images/template/cvtemplate13_1605606716.jpg'
											alt='Template 13'
										/>
									</div>
									<div className={cx('figcaption')}>
										<p>Template 13</p>
									</div>
									<div className={cx('el-horizontal')}>
										<a
											className={cx('btn-gradient', 'select-template-new')}
											href='javascript:void(0);'
											data-template-id={13}
											data-template-name='Template 13'>
											Chọn template
										</a>
									</div>
								</div>
							</div>
							<div className={cx('col-xs-12', 'col-sm-6', 'col-md-4', 'cv-item')}>
								<div className={cx('figure')}>
									<div className={cx('image')}>
										<img
											src='https://static.careerbuilder.vn/themes/cv_tool/images/template/cvtemplate12_1605606705.jpg'
											alt='Template 12'
										/>
									</div>
									<div className={cx('figcaption')}>
										<p>Template 12</p>
									</div>
									<div className={cx('el-horizontal')}>
										<a
											className={cx('btn-gradient', 'select-template-new')}
											href='javascript:void(0);'
											data-template-id={12}
											data-template-name='Template 12'>
											Chọn template
										</a>
									</div>
								</div>
							</div>
							<div className={cx('col-xs-12', 'col-sm-6', 'col-md-4', 'cv-item')}>
								<div className={cx('figure')}>
									<div className={cx('image')}>
										<img
											src='https://static.careerbuilder.vn/themes/cv_tool/images/template/cvtemplate11_1605606695.jpg'
											alt='Template 11'
										/>
									</div>
									<div className={cx('figcaption')}>
										<p>Template 11</p>
									</div>
									<div className={cx('el-horizontal')}>
										<a
											className={cx('btn-gradient', 'select-template-new')}
											href='javascript:void(0);'
											data-template-id={11}
											data-template-name='Template 11'>
											Chọn template
										</a>
									</div>
								</div>
							</div>
							<div className={cx('col-xs-12', 'col-sm-6', 'col-md-4', 'cv-item')}>
								<div className={cx('figure')}>
									<div className={cx('image')}>
										<img
											src='https://static.careerbuilder.vn/themes/cv_tool/images/template/cvtemplate10_1605606686.jpg'
											alt='Template 10'
										/>
									</div>
									<div className={cx('figcaption')}>
										<p>Template 10</p>
									</div>
									<div className={cx('el-horizontal')}>
										<a
											className={cx('btn-gradient', 'select-template-new')}
											href='javascript:void(0);'
											data-template-id={10}
											data-template-name='Template 10'>
											Chọn template
										</a>
									</div>
								</div>
							</div>
							<div className={cx('col-xs-12', 'col-sm-6', 'col-md-4', 'cv-item')}>
								<div className={cx('figure')}>
									<div className={cx('image')}>
										<img
											src='https://static.careerbuilder.vn/themes/cv_tool/images/template/cvtemplate09_1605606677.jpg'
											alt='Template 9'
										/>
									</div>
									<div className={cx('figcaption')}>
										<p>Template 9</p>
									</div>
									<div className={cx('el-horizontal')}>
										<a
											className={cx('btn-gradient', 'select-template-new')}
											href='javascript:void(0);'
											data-template-id={9}
											data-template-name='Template 9'>
											Chọn template
										</a>
									</div>
								</div>
							</div>
							<div className={cx('col-xs-12', 'col-sm-6', 'col-md-4', 'cv-item')}>
								<div className={cx('figure')}>
									<div className={cx('image')}>
										<img
											src='https://static.careerbuilder.vn/themes/cv_tool/images/template/cvtemplate08_1605606667.jpg'
											alt='Template 8'
										/>
									</div>
									<div className={cx('figcaption')}>
										<p>Template 8</p>
									</div>
									<div className={cx('el-horizontal')}>
										<a
											className={cx('btn-gradient', 'select-template-new')}
											href='javascript:void(0);'
											data-template-id={8}
											data-template-name='Template 8'>
											Chọn template
										</a>
									</div>
								</div>
							</div>
							<div className={cx('col-xs-12', 'col-sm-6', 'col-md-4', 'cv-item')}>
								<div className={cx('figure')}>
									<div className={cx('image')}>
										<img
											src='https://static.careerbuilder.vn/themes/cv_tool/images/template/cvtemplate07_1605606659.jpg'
											alt='Template 7'
										/>
									</div>
									<div className={cx('figcaption')}>
										<p>Template 7</p>
									</div>
									<div className={cx('el-horizontal')}>
										<a
											className={cx('btn-gradient', 'select-template-new')}
											href='javascript:void(0);'
											data-template-id={7}
											data-template-name='Template 7'>
											Chọn template
										</a>
									</div>
								</div>
							</div>
							<div className={cx('col-xs-12', 'col-sm-6', 'col-md-4', 'cv-item')}>
								<div className={cx('figure')}>
									<div className={cx('image')}>
										<img
											src='https://static.careerbuilder.vn/themes/cv_tool/images/template/cvtemplate06_1605606647.jpg'
											alt='Template 6'
										/>
									</div>
									<div className={cx('figcaption')}>
										<p>Template 6</p>
									</div>
									<div className={cx('el-horizontal')}>
										<a
											className={cx('btn-gradient', 'select-template-new')}
											href='javascript:void(0);'
											data-template-id={6}
											data-template-name='Template 6'>
											Chọn template
										</a>
									</div>
								</div>
							</div>
							<div className={cx('col-xs-12', 'col-sm-6', 'col-md-4', 'cv-item')}>
								<div className={cx('figure')}>
									<div className={cx('image')}>
										<img
											src='https://static.careerbuilder.vn/themes/cv_tool/images/template/cvtemplate05_1605606637.jpg'
											alt='Template 5'
										/>
									</div>
									<div className={cx('figcaption')}>
										<p>Template 5</p>
									</div>
									<div className={cx('el-horizontal')}>
										<a
											className={cx('btn-gradient', 'select-template-new')}
											href='javascript:void(0);'
											data-template-id={5}
											data-template-name='Template 5'>
											Chọn template
										</a>
									</div>
								</div>
							</div>
							<div className={cx('col-xs-12', 'col-sm-6', 'col-md-4', 'cv-item')}>
								<div className={cx('figure')}>
									<div className={cx('image')}>
										<img
											src='https://static.careerbuilder.vn/themes/cv_tool/images/template/cvtemplate04_1605606626.jpg'
											alt='Template 4'
										/>
									</div>
									<div className={cx('figcaption')}>
										<p>Template 4</p>
									</div>
									<div className={cx('el-horizontal')}>
										<a
											className={cx('btn-gradient', 'select-template-new')}
											href='javascript:void(0);'
											data-template-id={4}
											data-template-name='Template 4'>
											Chọn template
										</a>
									</div>
								</div>
							</div>
							<div className={cx('col-xs-12', 'col-sm-6', 'col-md-4', 'cv-item')}>
								<div className={cx('figure')}>
									<div className={cx('image')}>
										<img
											src='https://static.careerbuilder.vn/themes/cv_tool/images/template/cvtemplate03_1605606616.jpg'
											alt='Template 3'
										/>
									</div>
									<div className={cx('figcaption')}>
										<p>Template 3</p>
									</div>
									<div className={cx('el-horizontal')}>
										<a
											className={cx('btn-gradient', 'select-template-new')}
											href='javascript:void(0);'
											data-template-id={3}
											data-template-name='Template 3'>
											Chọn template
										</a>
									</div>
								</div>
							</div>
							<div className={cx('col-xs-12', 'col-sm-6', 'col-md-4', 'cv-item')}>
								<div className={cx('figure')}>
									<div className={cx('image')}>
										<img
											src='https://static.careerbuilder.vn/themes/cv_tool/images/template/cvtemplate02_1605606605.jpg'
											alt='Template 2'
										/>
									</div>
									<div className={cx('figcaption')}>
										<p>Template 2</p>
									</div>
									<div className={cx('el-horizontal')}>
										<a
											className={cx('btn-gradient', 'select-template-new')}
											href='javascript:void(0);'
											data-template-id={2}
											data-template-name='Template 2'>
											Chọn template
										</a>
									</div>
								</div>
							</div>
							<div className={cx('col-xs-12', 'col-sm-6', 'col-md-4', 'cv-item')}>
								<div className={cx('figure')}>
									<div className={cx('image')}>
										<img
											src='https://static.careerbuilder.vn/themes/cv_tool/images/template/cvtemplate01_1605606576.jpg'
											alt='Template 1'
										/>
									</div>
									<div className={cx('figcaption')}>
										<p>Template 1</p>
									</div>
									<div className={cx('el-horizontal')}>
										<a
											className={cx('btn-gradient', 'select-template-new')}
											href='javascript:void(0);'
											data-template-id={1}
											data-template-name='Template 1'>
											Chọn template
										</a>
									</div>
								</div>
							</div>
							<div className={cx('col-xs-12', 'col-sm-6', 'col-md-4', 'cv-item')}>
								<div className={cx('figure')}>
									<div className={cx('image')}>
										<img
											src='https://static.careerbuilder.vn/themes/cv_tool/images/template/cb-cvhay_template-2020_16-02_1630384185.png'
											alt='Template 16'
										/>
									</div>
									<div className={cx('figcaption')}>
										<p>Template 16</p>
									</div>
									<div className={cx('el-horizontal')}>
										<a
											className={cx('btn-gradient', 'select-template-new')}
											href='javascript:void(0);'
											data-template-id={16}
											data-template-name='Template 16'>
											Chọn template
										</a>
									</div>
								</div>
							</div>
							<div className={cx('col-xs-12', 'col-sm-6', 'col-md-4', 'cv-item')}>
								<div className={cx('figure')}>
									<div className={cx('image')}>
										<img
											src='https://static.careerbuilder.vn/themes/cv_tool/images/template/cb-cvhay_template-2020_17-02_1630384203.png'
											alt='Template 17'
										/>
									</div>
									<div className={cx('figcaption')}>
										<p>Template 17</p>
									</div>
									<div className={cx('el-horizontal')}>
										<a
											className={cx('btn-gradient', 'select-template-new')}
											href='javascript:void(0);'
											data-template-id={17}
											data-template-name='Template 17'>
											Chọn template
										</a>
									</div>
								</div>
							</div>
							<div className={cx('col-xs-12', 'col-sm-6', 'col-md-4', 'cv-item')}>
								<div className={cx('figure')}>
									<div className={cx('image')}>
										<img
											src='https://static.careerbuilder.vn/themes/cv_tool/images/template/cb-cvhay_template-2020_18-02_1630384223.png'
											alt='Template 18'
										/>
									</div>
									<div className={cx('figcaption')}>
										<p>Template 18</p>
									</div>
									<div className={cx('el-horizontal')}>
										<a
											className={cx('btn-gradient', 'select-template-new')}
											href='javascript:void(0);'
											data-template-id={18}
											data-template-name='Template 18'>
											Chọn template
										</a>
									</div>
								</div>
							</div>
						</div>
					</div>
					<CloseIcon className={sx('close-icon')} onClick={hide} />
				</div>
			</Modal>
		</>
	) : null;
};
export default ChosseTemplate;
