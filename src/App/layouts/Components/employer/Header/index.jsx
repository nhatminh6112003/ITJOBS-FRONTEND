import { Link } from 'react-router-dom';
import routesPath from '~/App/config/routesPath';
import { useNavigate } from 'react-router-dom';
import styles from './Header.module.css';
import classNames from 'classnames/bind';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import CheckIcon from '@mui/icons-material/Check';
const cx = classNames.bind(styles);
const Header = () => {
	return (
		<header className={cx('for-customers')}>
			<div className={cx('container-fluid')}>
				<div className={cx('main-wrap')}>
					<div className={cx('left-wrap')}>
						<div className={cx('button-hambuger')}>
							<span className={cx('mdi mdi-menu')} />
						</div>
						<div className={cx('logo')}>
							<Link to={routesPath.JobseekerPaths.home}>
								<img
									src='./img/logo.png'
									alt='CareerBuilder.vn - Nghĩ Nhân Tài, Nghĩ CareerBuilder'
									title='CareerBuilder.vn - Nghĩ Nhân Tài, Nghĩ CareerBuilder'
								/>
							</Link>
						</div>
						<div className={cx('main-menu')}>
							<ul className={cx('menu')}>
								<li className={cx('')}>
									<a href='https://careerbuilder.vn/vi/employers' alt='Trang chủ' title='Trang chủ'>
										Trang Chủ
									</a>
								</li>
								<li className={cx('dropdown')}>
									<a href='https://careerbuilder.vn/vi/employers/products-and-services'>Sản Phẩm và Dịch Vụ</a>
									<div className={cx('dropdown-menu')}>
										<ul>
											<li>
												<a href='https://careerbuilder.vn/vi/employers/products-and-services/dang-tuyen-dung/3'>
													Đăng Tuyển Dụng
												</a>
											</li>
											<li>
												<a href='https://careerbuilder.vn/vi/employers/products-and-services/tim-ho-so-ung-vien/8'>
													Tìm Hồ Sơ Ứng Viên
												</a>
											</li>
											<li>
												<a href='https://careerbuilder.vn/vi/employers/products-and-services/talent-solution/'>
													Talent Solution
												</a>
											</li>
											<li>
												<a href='https://careerbuilder.vn/vi/employers/products-and-services/quang-cao-tuyen-dung/9'>
													Quảng Cáo Tuyển Dụng
												</a>
											</li>
											<li>
												<a href='https://careerbuilder.vn/vi/employers/products-and-services/talent-driver/14'>
													Talent Driver
												</a>
											</li>
											<li>
												<a href='https://careerbuilder.vn/vi/employers/products-and-services/targeted-email-marketing/'>
													Targeted Email Marketing
												</a>
											</li>
											<li>
												<a href='https://careerbuilder.vn/vi/employers/products-and-services/talent-referral/'>
													Talent Referral
												</a>
											</li>
											<li>
												<a href='https://careerbuilder.vn/vi/employers/products-and-services/dang-tuyen-dung-va-tim-ho-so-quoc-te/10'>
													Đăng Tuyển Dụng và Tìm Hồ Sơ Quốc tế
												</a>
											</li>
											<li>
												<a href='https://careerbuilder.vn/vi/employers/products-and-services'>
													Xem tất cả sản phẩm / dịch vụ
												</a>
											</li>
										</ul>
									</div>
								</li>
								<li className={cx('dropdown')}>
									<a href='https://careerbuilder.vn/vi/employers/dashboard'>HR Central</a>
									<div className={cx('dropdown-menu')}>
										<ul>
											<li>
												<a href='https://careerbuilder.vn/vi/employers/dashboard'>Dashboard</a>
											</li>
											<li>
												<a href='https://careerbuilder.vn/vi/employers/postjobs'>Đăng Tuyển Dụng</a>
											</li>
											<li>
												<a href='https://careerbuilder.vn/vi/tim-ung-vien.html'>Tìm Hồ Sơ</a>
											</li>
										</ul>
									</div>
								</li>
								<li className=''>
									<a href='https://careerbuilder.vn/vi/hiringsite'>Cẩm Nang Tuyển Dụng</a>
								</li>
								<li className=''>
									<a href='https://careerbuilder.vn/vi/employers/services/contact'>Liên hệ</a>
								</li>
							</ul>
						</div>
					</div>
					<div className={cx('right-wrap')}>
						<div className={cx('main-login', 'dropdown')}>
							<div className={cx('title-login')}>
								<Link to={routesPath.EmployerPaths.login}>
									<AccountCircleIcon sx={{ fontSize: 20, paddingRight: '5px' }} />
									Đăng nhập
								</Link>
							</div>
							{/* <div className={cx("dropdown-menu")}>
            <div className={cx("login-wrapper")}>
              <form
                method="post"
                action="https://careerbuilder.vn/vi/employers/login"
                id={cx("frm_login_header")}
              >
                <div className={cx("row")}>
                  <div className={cx("form-group col-12")}>
                    <input
                      type="text"
                      placeholder="Email/Tên đăng nhập"
                      autoComplete="off"
                      id={cx("username_box")}
                      name="username"
                    />
                  </div>
                  <div className={cx("form-group col-8")}>
                    <input
                      type="password"
                      placeholder="Mật khẩu"
                      id={cx("password_box")}
                      name="password"
                      autoComplete="off"
                    />
                  </div>
                  <div className={cx("form-group col-4")}>
                    <input
                      type="hidden"
                      name="csrf_token_login"
                      defaultValue="2e42d3e89f13fec49a9a6c0aa7b9db54feb1cdddcce6dc5680b3476dfcba5dd7"
                    />
                    <button type="submit">Đăng nhập</button>
                  </div>
                </div>
                <a
                  className={cx("forget-password")}
                  href="https://careerbuilder.vn/vi/employers/forgetpassword.html"
                >
                  Quên mật khẩu
                </a>
                <a
                  className={cx("forget-password register")}
                  href="https://careerbuilder.vn/vi/employers/register"
                >
                  Đăng ký
                </a>
              </form>
            </div>
          </div> */}
						</div>
						<div className={cx('main-register')}>
							<Link to={routesPath.EmployerPaths.register}>Đăng ký</Link>
						</div>
						<div className={cx('main-noti')} style={{ display: 'none' }}>
							<a href=''>
								{' '}
								<span className='mdi mdi-cart' />
							</a>
						</div>
						<div className={cx('main-language', 'dropdown')}>
							<div className={cx('dropdown-toggle')}>
								<p>
									VI
									<ExpandMoreIcon fontSize='small' />
								</p>
							</div>
							<div className={cx('dropdown-menu')}>
								<div className={cx('item', 'active')}>
									<CheckIcon fontSize='small' sx={{ paddingRight: '5px' }} />
									<a className='dropdown-item' href='' title='Change language'>
										VI
									</a>
								</div>
								<div className={cx('item')}>
									<CheckIcon fontSize='small' sx={{ paddingRight: '5px' }} />
									<a
										className={cx('dropdown-item')}
										href='https://careerbuilder.vn/en/employers/login'
										title='Change language'>
										EN
									</a>
								</div>
							</div>
						</div>
						<div className={cx('main-candidates')}>
							<Link to={routesPath.JobseekerPaths.home}>
								<em className='fa fa-external-link' />
								<h4>Dành cho Ứng Viên</h4>
							</Link>
						</div>
					</div>
				</div>
			</div>
			{/* <div className="mobile-menu">
    <div className="mobile-wrap">
      <div className="header-logo">
        <a
          href="https://careerbuilder.vn/vi/employers"
          title="homepage-employers"
        >
          <img
            src="https://images.careerbuilder.vn/logo/logo_1644552010.png"
            alt="CareerBuilder.vn - Nghĩ Nhân Tài, Nghĩ CareerBuilder"
            title="CareerBuilder.vn - Nghĩ Nhân Tài, Nghĩ CareerBuilder"
          />
        </a>
      </div>
      <div className="header-bottom">
        <div className="header-bottom-top">
          <div className="profile">
            <div className="avatar">
              <a href="#">
                <img src="./img/avata-new.png" alt="" />
              </a>
            </div>
            <div className="username">
              <a href="">Xin chào!</a>
              <div className="authentication-links">
                <ul>
                  <li>
                    <a href="https://careerbuilder.vn/vi/employers/login">
                      {" "}
                      <i className="mdi mdi-login-variant" />
                      Đăng nhập
                    </a>
                  </li>
                  <li>
                    <a href="https://careerbuilder.vn/vi/employers/register">
                      {" "}
                      <i className="mdi mdi-account-plus-outline" />
                      Đăng ký
                    </a>
                  </li>
                </ul>
              </div>
            </div>
            <div className="back-menu-normal">
              <em className="mdi mdi-arrow-left" />
            </div>
          </div>
          <div className="menu">
            <ul className="menu-normal">
              <li className="active">
                <a
                  href="https://careerbuilder.vn/vi/employers"
                  title="homepage-employers"
                >
                  <i className="mdi mdi-home-outline" />
                  Trang Chủ
                </a>
              </li>
              <li className="dropdown-mobile">
                <a href="https://careerbuilder.vn/vi/employers/products-and-services">
                  {" "}
                  <i className="mdi mdi-apps" />
                  Sản Phẩm và Dịch Vụ
                </a>
                <div className="dropdown-menu">
                  <ul>
                    <li>
                      <a href="https://careerbuilder.vn/vi/employers/products-and-services/dang-tuyen-dung/3">
                        Đăng Tuyển Dụng
                      </a>
                    </li>
                    <li>
                      <a href="https://careerbuilder.vn/vi/employers/products-and-services/tim-ho-so-ung-vien/8">
                        Tìm Hồ Sơ Ứng Viên
                      </a>
                    </li>
                    <li>
                      <a href="https://careerbuilder.vn/vi/employers/products-and-services/talent-solution/">
                        Talent Solution
                      </a>
                    </li>
                    <li>
                      <a href="https://careerbuilder.vn/vi/employers/products-and-services/quang-cao-tuyen-dung/9">
                        Quảng Cáo Tuyển Dụng
                      </a>
                    </li>
                    <li>
                      <a href="https://careerbuilder.vn/vi/employers/products-and-services/talent-driver/14">
                        Talent Driver
                      </a>
                    </li>
                    <li>
                      <a href="https://careerbuilder.vn/vi/employers/products-and-services/targeted-email-marketing/">
                        Targeted Email Marketing
                      </a>
                    </li>
                    <li>
                      <a href="https://careerbuilder.vn/vi/employers/products-and-services/talent-referral/">
                        Talent Referral
                      </a>
                    </li>
                    <li>
                      <a href="https://careerbuilder.vn/vi/employers/products-and-services/dang-tuyen-dung-va-tim-ho-so-quoc-te/10">
                        Đăng Tuyển Dụng và Tìm Hồ Sơ Quốc tế
                      </a>
                    </li>
                    <li>
                      <a href="https://careerbuilder.vn/vi/employers/products-and-services">
                        Xem tất cả sản phẩm / dịch vụ
                      </a>
                    </li>
                  </ul>
                </div>
              </li>
              <li className="dropdown-mobile">
                <a href="https://careerbuilder.vn/vi/employers/dashboard">
                  {" "}
                  <i className="mdi mdi-briefcase-account" />
                  HR Central
                </a>
                <div className="dropdown-menu">
                  <ul>
                    <li>
                      <a href="https://careerbuilder.vn/vi/employers/dashboard">
                        Dashboard
                      </a>
                    </li>
                    <li>
                      <a href="https://careerbuilder.vn/vi/employers/postjobs">
                        Đăng Tuyển Dụng
                      </a>
                    </li>
                    <li>
                      <a href="https://careerbuilder.vn/vi/tim-ung-vien.html">
                        Tìm Hồ Sơ
                      </a>
                    </li>
                  </ul>
                </div>
              </li>
              <li>
                <a href="https://careerbuilder.vn/vi/hiringsite">
                  {" "}
                  <i className="mdi mdi-lightbulb-on-outline" />
                  Cẩm Nang Tuyển Dụng
                </a>
              </li>
              <li>
                <a href="https://careerbuilder.vn/vi/employers/services/contact">
                  {" "}
                  <i className="mdi mdi-contacts" />
                  Liên hệ
                </a>
              </li>
              <li>
                <a href="https://careerbuilder.vn/en/employers/login">
                  {" "}
                  <i className="mdi mdi-web" />
                  <span>English</span>
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div className="header-bottom-bottom">
          <div className="header-alert">
            <h4>
              <a href="https://careerbuilder.vn/">
                {" "}
                <strong> Dành Cho Ứng Viên</strong>
              </a>
              <br />
              <a href="https://careerbuilder.vn/viec-lam/tat-ca-viec-lam-vi.html">
                <span> Tìm Việc Làm</span>
              </a>
            </h4>
          </div>
          <div className="employer-site">
            <ul>
              <li>
                {" "}
                <a>
                  {" "}
                  <i className="mdi mdi-phone" />
                  <span>HCM: (84.28) 3822 6060</span>
                </a>
              </li>
              <li>
                {" "}
                <a>
                  {" "}
                  <i className="mdi mdi-phone" />
                  <span>HN: (84.24) 6268 1919</span>
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </div> */}
		</header>
	);
};

export default Header;
