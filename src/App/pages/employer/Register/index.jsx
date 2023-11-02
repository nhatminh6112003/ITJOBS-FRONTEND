import RegisterForm from './components/RegisterForm';
const Register = ({ cx }) => {
	return (
		<section className={cx('employer-signup-new', 'step-1', 'cb-section')}>
			<div className={cx('container')}>
				<div className={cx('row', 'row-sp')}>
					<div className={cx('col-xl-12')}>
						<div className={cx('box-info-signup')}>
							<div className={cx('title')}>
								<h2>Đăng Ký Tài Khoản Nhà Tuyển Dụng</h2>
							</div>
							<RegisterForm cx={cx} />
						</div>
					</div>
				</div>
				<div className={cx('row', 'row-intro')}>
					<div className={cx('col-12', 'col-xl-4')}>
						<div className={cx('box-intro', 'box-intro-1', 'd-flex', 'align-center')}>
							<img src='/icon-folder.webp' />
							<p>
								Hơn <strong>50.000</strong> hồ sơ cập nhật mỗi tháng
							</p>
						</div>
					</div>
					<div className={cx('col-12', 'col-xl-4')}>
						<div className={cx('box-intro', 'box-intro-2', 'd-flex', 'align-center')}>
							<img src='/icon-link.webp' />
							<p>
								Website tuyển dụng toàn cầu <strong>duy nhất</strong> tại <strong>Việt Nam</strong>
							</p>
						</div>
					</div>
					<div className={cx('col-12', 'col-xl-4')}>
						<div className={cx('box-intro', 'box-intro-3', 'd-flex', 'align-center')}>
							<img src='/icon-triangle.webp' />
							<p>
								Hơn <strong>18 triệu </strong>lượt xem mỗi tháng
							</p>
						</div>
					</div>{' '}
					<div className={cx('col-12')}>
						<div className={cx('right-note')}>
							<p>
								Nếu bạn đã có tài khoản. Vui lòng
								<a href='https://careerbuilder.vn/vi/employers/login'>Đăng nhập</a>
							</p>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
};

export default Register;
