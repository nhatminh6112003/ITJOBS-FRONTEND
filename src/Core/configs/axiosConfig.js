import store from '~/App/providers/store';
import { logout } from '~/App/providers/slices/authSlice';
import UserRoleEnum from '~/App/constants/roleEnum';
import { UserType } from '~/App/constants/roleEnum';
import axios from 'axios';

const axiosClient = axios.create({
	baseURL: import.meta.env.VITE_API_URL
});

axiosClient.interceptors.request.use(
	(config) => {
		const skippingCheckTokenEndpoints = ['/login-google']; // Do not attach access token to header with these endpoints
		if (skippingCheckTokenEndpoints.includes(config.url)) {
			return config;
		}
      const user = store.getState().auth.user;
		const accessToken = user?.accessToken;
		config.headers.Authorization = `Bearer ${accessToken}`;
		return config;
	},
	(error) => {
		return Promise.reject(error);
	}
);

axiosClient.interceptors.response.use(
	(config) => {
		return config.data;
	},
	(error) => {
		if (error.response.status === 401) {
			// Cancel request
			const controller = new AbortController();
			axios.request({ signal: controller.signal, ...error.config });
			// Force signout if access token expired
         store.dispatch(logout({ Role: UserType[UserRoleEnum.JOBSEEKER] }));
			return Promise.reject(error);
		}
		return Promise.reject(error);
	}
);

export default axiosClient;
