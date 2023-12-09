import React from 'react';
import { useSelector } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';
import { useLocation } from 'react-router-dom';
import routesPath from '~/App/config/routesPath';
import ServiceSlugEnum, { ServiceTypeSlugEnum } from '~/App/constants/serviceEnum';
import useRegisterServiceResume from '~/App/pages/employer/FindJobSeeker/components/useRegisterServiceResume';
import { toast } from 'react-toastify';
import moment from 'moment';
import { useGetAllCompany_serviceQuery } from '~/App/providers/apis/company_serviceApi';
import useRegisterService from '~/App/pages/employer/HrCentral/components/useRegisterService';
const NavBar = ({ className: cx }) => {
	const location = useLocation();
	const currentPath = location.pathname;

	const NavBarMenu = [
		{
			title: 'Dashboard',
			path: routesPath.EmployerPaths.dashboard,
			label: 'Dashboard'
		},
		{
			title: 'Quản Lý Đăng Tuyển',
			path: routesPath.EmployerPaths.posting,
			label: 'Quản Lý Đăng Tuyển'
		},
		{
			title: 'Quản Lý Ứng Viên',
			path: routesPath.EmployerPaths.manageResume,
			label: 'Quản Lý Ứng Viên'
		},
		{
			title: 'Đơn Hàng',
			path: routesPath.EmployerPaths.ordersAvailable,
			label: 'Đơn Hàng'
		},

		{
			title: 'Tài Khoản',
			path: routesPath.EmployerPaths.editEmployer,
			label: 'Tài Khoản'
		}
	];
	const employer = useSelector((state) => state.auth?.employer);

	const { isServiceExits, isServiceActive } = useRegisterService(
		employer?.company?.id,
		ServiceTypeSlugEnum.FindResume
	);

	const handleFindJobSeeker = () => {
		if (!isServiceExits) {
			toast.error('Bạn chưa đăng ký dịch vụ tìm hồ sơ ứng viên');
			return;
		}
		if (!isServiceActive) {
			toast.error('Bạn chưa kích hoạt sử dụng dịch vụ tìm hồ sơ ứng viên');
			return;
		}
	};
	return (
		<section className={cx('employer-navbar-2-1')}>
			<div className={cx('container')}>
				<div className={cx('category-nav')}>
					<p>Danh Mục</p>
					<em className={cx('mdi', 'mdi-chevron-down')} />
				</div>
				<div className={cx('main-wrap')}>
					<div className={cx('left-wrap')}>
						<ul className={cx('list-menu')}>
							{NavBarMenu.map((item) => (
								<li className={cx(currentPath == item.path ? 'active' : '')}>
									<Link to={item.path} title={item.title}>
										{item.label}
									</Link>
								</li>
							))}
						</ul>
					</div>
					<div className={cx('right-wrap')}>
						<ul className={cx('list-menu')}>
							<li>
								<Link
									to={isServiceActive && isServiceExits && routesPath.EmployerPaths.findJobSeeker}
									onClick={() => {
										handleFindJobSeeker();
									}}>
									<em className={cx('material-icons')}>find_in_page</em> Tìm Hồ Sơ
								</Link>
							</li>
							<li>
								<Link className={cx('but-createjob')} to={routesPath.EmployerPaths.postjobs}>
									<em className={cx('material-icons')}>assignment_ind</em> Đăng Tuyển Dụng
								</Link>
							</li>
						</ul>
					</div>
				</div>
			</div>
		</section>
	);
};

export default NavBar;
