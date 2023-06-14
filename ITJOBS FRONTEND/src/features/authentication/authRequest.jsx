import { loginStart, loginSuccess, loginFailed, logoutSuccess, logoutFailed } from './authSlice';
import config from '~/config/config.routes';
import authApi from '~/api/authApi';
import axiosClient from '~/api/axiosClient';

export const loginUser = async (data, dispatch, navigate) => {
	try {
		dispatch(loginStart());

		const response = await authApi.login(data);
		dispatch(loginSuccess(response.data));
		if (response.isSuccess) {
			axiosClient.defaults.headers.common['Authorization'] = `Bearer ${response.data.accessToken}`;
			navigate(config.jobSeekerRoutes.dashboard);
		}
	} catch (error) {
		dispatch(loginFailed());
	}
};
export const logoutUser = async (dispatch, navigate) => {
	try {
		const response = await authApi.logout();
		if (response.status == 200) {
			dispatch(logoutSuccess());
		}
		navigate(config.jobSeekerRoutes.login);
	} catch (error) {
		dispatch(logoutFailed());
	}
};
