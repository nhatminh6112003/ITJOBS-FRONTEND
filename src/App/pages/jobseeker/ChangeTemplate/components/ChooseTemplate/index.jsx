import React from 'react';
import styles from './chooseTemplate.module.css';
import classNames from 'classnames/bind';
import Modal from '~/Core/components/common/Modal';
import { CloseIcon } from '~/Core/resources';
import { useGetAllTemplateQuery } from '~/App/providers/apis/cvTemplateApi';
import { useChangeTemplateMutation } from '~/App/providers/apis/resumeTemplateApi';
import { useSelector } from 'react-redux';
import Loading from '~/Core/components/common/Loading';
import { toast } from 'react-toastify';

const sx = classNames.bind(styles);
const ChooseTemplate = ({ isShowing, refetch,toggle, hide, classNames: cx }) => {
	const resume = useSelector((state) => state.auth?.user?.resume);
	const { data, isFetching } = useGetAllTemplateQuery();

	const [changeTemplateMutation, changeTemplateMutationState] = useChangeTemplateMutation();
	const handleChangeCv = async (cv_template_id) => {
		const handleChangeTemplate = await changeTemplateMutation({
			id: resume?.id,
			payload: {
				cv_template_id
			}
		});
		const {isSuccess}=handleChangeTemplate.data;

		if (isSuccess){
			toast.success('Thay đổi template thành công!');
		}
		refetch()
		toggle('chooseTemplate');
	};

	if (isFetching) return <Loading />;
	return isShowing ? (
		<>
			<Modal isOpen={isShowing} onRequestClose={hide}>
				<div className={cx('change-cv-template-modal', 'fancybox-content')} style={{ display: 'inline-block' }}>
					<div className={cx('title')}>
						<h3>Chọn template</h3>
					</div>
					<div className={cx('list-template')}>
						<div className={cx('row')}>
							{data?.map((item) => (
								<div className={cx('col-xs-12', 'col-sm-6', 'col-md-4', 'cv-item')}>
									<div className={cx('figure')}>
										<div className={cx('image')}>
											<img src={item.image_cv} />
										</div>
										<div className={cx('figcaption')}>
											<p>{item.default_template_name}</p>
										</div>
										<div className={cx('el-horizontal')}>
											<button
												className={cx('btn-gradient', 'select-template-new')}			
												
												style={{ border: 'none' }}
												onClick={() => handleChangeCv(item.id)}>
												Chọn template
											</button>
										</div>
									</div>
								</div>
							))}
						</div>
					</div>
					<CloseIcon className={sx('close-icon')} onClick={hide} />
				</div>
			</Modal>
		</>
	) : null;
};
export default ChooseTemplate;
