import { Link } from 'react-router-dom';
import routesPath from '~/App/config/routesPath';

const Footer = ({ cx }) => {
	return (
		<>
			<footer>
				<div className={cx('container')}>
					<section className={cx('top-footer', 'cb-section', 'cb-section-border-bottom')}>
						<div className={cx('row')}>
							<div className={cx('col-lg-12', 'logo')}>
								<img
									className={cx('lazy-bg')}
									src='/logo.png'
									alt='Tuyển dụng & Tìm kiếm việc làm nhanh'
									style={{ height: 50 }}
								/>
							</div>
							<div className={cx('col-lg-2', 'col-sm-6')}>
								<div className={cx('footer-links')}>
									<h3>Dành Cho Ứng Viên</h3>
									<ul>
										<li>
											<a
												href='https://careerbuilder.vn/viec-lam/tat-ca-viec-lam-vi.html'
												title='Việc làm mới nhất'>
												Việc làm mới nhất
											</a>
										</li>
										<li>
											<a href='https://careerbuilder.vn/cv-hay/' title='CV Hay'>
												CV Hay
											</a>
										</li>
										<li>
											<a href='https://vietnamsalary.careerbuilder.vn/' title='VietnamSalary'>
												VietnamSalary
											</a>
										</li>
										<li>
											<a href='https://careerbuilder.vn/careermap' title='CareerMap'>
												CareerMap
											</a>
										</li>
										<li>
											<a href='https://careerbuilder.vn/vi/talentcommunity' title='Cẩm Nang'>
												Cẩm Nang
											</a>
										</li>
										<li>
											<a href='https://vieclamit.careerbuilder.vn/advices' title='IT Blogs'>
												IT Blogs
											</a>
										</li>
										<li>
											<a href='https://careerbuilder.vn/vi/mobile' title='Ứng Dụng Di Động'>
												Ứng Dụng Di Động
											</a>
										</li>
										<li>
											<a href='https://careerbuilder.vn/vi/jobseekers/sitemap' title='Sơ Đồ Trang Web'>
												Sơ Đồ Trang Web
											</a>
										</li>
										<li>
											<a href='https://careerstart.vn/' title='CareerStart'>
												CareerStart
											</a>
										</li>
									</ul>
								</div>
							</div>
							<div className={cx('col-lg-2', 'col-sm-6')}>
								<div className={cx('footer-links')}>
									<h3>Nhà Tuyển Dụng</h3>
									<ul>
										<li>
											<a href='https://careerbuilder.vn/vi/employers/postjobs' title='Đăng Tuyển Dụng'>
												Đăng Tuyển Dụng
											</a>
										</li>
										<li>
											<Link to={routesPath.EmployerPaths.findJobSeeker} title='Tìm Hồ Sơ'>
												Tìm Hồ Sơ
											</Link>
										</li>
										<li>
											<a href='https://careerbuilder.vn/vi/talentnetwork'>Giải Pháp Talent Solution</a>
										</li>
										<li>
											<a
												href='https://careerbuilder.vn/vi/employers/products-and-services'
												title='Sản Phẩm Dịch Vụ'>
												Sản Phẩm Dịch Vụ
											</a>
										</li>
									</ul>
								</div>
							</div>
							<div className={cx('col-lg-2', 'col-sm-6')}>
								<div className={cx('footer-links')}>
									<h3>Trung tâm trợ giúp</h3>
									<ul>
										<li>
											<a href='https://careerbuilder.vn/vi/jobseekers/about' title='Về CareerBuilder.vn'>
												Về CareerBuilder.vn
											</a>
										</li>
										<li>
											<a
												rel='nofollow'
												href='https://careerbuilder.vn/vi/jobseekers/regulations'
												title='Chính Sách BV Thông Tin'>
												Chính Sách BV Thông Tin
											</a>
										</li>
										<li>
											<a
												rel='nofollow'
												href='https://advertising.careerbuilder.vn/html/customer/cbvn/GDPR.PDF'
												title='Chính sách GDPR'>
												Chính sách GDPR
											</a>
										</li>
										<li>
											<a
												rel='nofollow'
												href='https://images.careerbuilder.vn/regulations.pdf'
												title='Quy chế sàn giao dịch'>
												Quy chế sàn giao dịch
											</a>
										</li>
										<li>
											<a
												rel='nofollow'
												href='https://careerbuilder.vn/vi/jobseekers/use'
												title='Điều khoản sử dụng'>
												Điều khoản sử dụng
											</a>
										</li>
										<li>
											<a
												rel='nofollow'
												href='https://careerbuilder.vn/vi/jobseekers/security'
												title='Chính sách quyền riêng tư'>
												Chính sách quyền riêng tư
											</a>
										</li>
										<li>
											<a
												rel='nofollow'
												href='https://careerbuilder.vn/vi/jobseekers/process'
												title='QT Giải Quyết Tranh Chấp'>
												QT Giải Quyết Tranh Chấp
											</a>
										</li>
										<li>
											<a rel='nofollow' href='https://careerbuilder.vn/vi/jobseekers/faq' title='Trợ giúp'>
												Trợ giúp
											</a>
										</li>
									</ul>
								</div>
							</div>
							<div className={cx('col-lg-2', 'col-sm-6')}>
								<div className={cx('footer-links')}>
									<h3>Website Đối Tác</h3>
									<ul>
										<li>
											<a rel='nofollow' href='https://vieclam.tuoitre.vn/'>
												Vieclam.Tuoitre.vn
											</a>
										</li>
										<li>
											<a rel='nofollow' href='https://vieclam.vietnamnet.vn/'>
												Vieclam.Vietnamnet.vn
											</a>
										</li>
										<li>
											<a rel='nofollow' href='https://vieclam.thanhnien.vn/'>
												Vieclam.Thanhnien.vn
											</a>
										</li>
										<li>
											<a rel='”nofollow”' href='https://vieclamit.careerbuilder.vn/'>
												VieclamIT.vn
											</a>
										</li>
										<li>
											<a href='https://careerbuilder.vn/vi/jobseekers/contact'>Liên Hệ</a>
										</li>
									</ul>
								</div>
							</div>
							<div className={cx('col-lg-2', 'col-sm-6')}>
								<div className={cx('footer-links')}>
									<h3>XÂY DỰNG SỰ NGHIỆP</h3>
									<ul>
										<li>
											<a href='https://careerbuilder.vn/viec-lam/Freelancer-k-vi.html' title='Freelancer'>
												Freelancer
											</a>
										</li>
										<li>
											<a
												href='https://careerbuilder.vn/viec-lam/Thi%E1%BA%BFt-k%E1%BA%BF-n%E1%BB%99i-th%E1%BA%A5t-k-vi.html'
												title='Thiết kế nội thất'>
												Thiết kế nội thất
											</a>
										</li>
										<li>
											<a
												href='https://careerbuilder.vn/viec-lam/tiep-thi-truc-tuyen-c37-vi.html'
												title='Digital marketing'>
												Digital marketing
											</a>
										</li>
										<li>
											<a
												href='https://careerbuilder.vn/viec-lam/thi%E1%BA%BFt-k%E1%BA%BF-%C4%91%E1%BB%93-h%E1%BB%8Da-k-vi.html'
												title='Thiết kế đồ họa'>
												Thiết kế đồ họa
											</a>
										</li>
										<li>
											<a
												href='https://careerbuilder.vn/viec-lam/Gi%C3%A1m-s%C3%A1t-an-to%C3%A0n-lao-%C4%91%E1%BB%99ng-k-vi.html'
												title='Giám sát an toàn'>
												Giám sát an toàn
											</a>
										</li>
										<li>
											<a
												href='https://careerbuilder.vn/viec-lam/Nh%C3%A2n-Vi%C3%AAn-Telesale-k-vi.html'
												title='Telesale'>
												Telesale
											</a>
										</li>
										<li>
											<a
												href='https://careerbuilder.vn/viec-lam/ban-hang-kinh-doanh-tai-ho-chi-minh-c31l8-vi.html'
												title='Nhân viên kinh doanh'>
												Nhân viên kinh doanh
											</a>
										</li>
										<li>
											<a
												href='https://careerbuilder.vn/viec-lam/Administrator-k-vi.html'
												title='Administrator'>
												Administrator
											</a>
										</li>
									</ul>
								</div>
							</div>
							<div className={cx('col-lg-2', 'col-sm-6')}>
								<div className={cx('footer-app-links')}>
									<h3>Tìm Kiếm Mọi Lúc Mọi Nơi</h3>
									<div className={cx('app-links')}>
										{' '}
										<a
											href='https://itunes.apple.com/vn/app/careerbuilder.vn-job-search/id882391884?l=vi&mt=8'
											rel='nofollow,noreferrer'
											title='careerbuilder.vn-job-search'>
											{' '}
											<img
												className={cx('lazy-bg')}
												src='https://static.careerbuilder.vn/themes/careerbuilder/img/apple.png'
												alt='app'
												style={{}}
											/>{' '}
										</a>{' '}
										<a
											href='https://play.google.com/store/apps/details?id=vn.careerbuilder.android.app'
											rel='nofollow,noreferrer'
											title='careerbuilder.vn-job-search'>
											{' '}
											<img
												className={cx('lazy-bg')}
												src='https://static.careerbuilder.vn/themes/careerbuilder/img/android.png'
												alt='app'
												style={{}}
											/>{' '}
										</a>{' '}
									</div>
								</div>
								<div className={cx('footer-social-links')}>
									<h3></h3>
									<ul>
										<li>
											<a
												rel='nofollow,noreferrer'
												title='Facebook'
												href='https://www.facebook.com/pages/CareerBuilder-Vietnam/265321726945679?ref=tn_tnmn'>
												{' '}
												<span className={cx('fa', 'fa-facebook')} />
											</a>
										</li>
										<li>
											<a href='https://www.linkedin.com/company/careerbuilder-vietnam'>
												{' '}
												<span className={cx('fa', 'fa-linkedin')} />
											</a>
										</li>
										<li>
											<a
												rel='nofollow,noreferrer'
												title='Youtube'
												href='https://www.youtube.com/user/CareerBuilderVietnam'>
												{' '}
												<span className={cx('fa', 'fa-youtube-play')} />
											</a>
										</li>
									</ul>
								</div>
							</div>
						</div>
					</section>
					<section className={cx('bottom-footer')}>
						<div className={cx('left-bottom-footer')}>
							{/* <p>
								Trụ sở chính: Tầng 6, Tòa nhà Pasteur, 139 Pasteur, Phường Võ Thị Sáu, Quận 3, TP. Hồ Chí Minh -
								Tel: (84.28) 3822 6060{' '}
							</p>
							<p>
								Văn phòng Hà Nội: Tầng 17, Tòa nhà VIT, 519 Kim Mã, Quận Ba Đình, Hà Nội - Tel: (84.24) 7305
								6060{' '}
							</p> */}
							{/* <p>Email: contact@careerbuilder.vn</p> */}
							{/* <p>Copyright © CareerBuilder Vietnam.</p> */}
						</div>
						<div className={cx('right-bottom-footer')}></div>
					</section>
				</div>
			</footer>
		</>
	);
};

export default Footer;
