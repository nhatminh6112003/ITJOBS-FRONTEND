import axios from 'axios';
import { store } from '~/redux/store';
import authApi from './authApi';
import { updateAccessToken, logoutSuccess, logoutFailed } from '~/features/authentication/authSlice';
import config from '~/config/config.routes';
const axiosClient = axios.create({
	baseURL: 'http://localhost:8085/api',
	headers: {
		'Content-Type': 'application/json'
	}
});
axiosClient.getLocalAccessToken = async () => {
	const state = store.getState();
	return state.auth.login?.currentUser?.accessToken ?? null;
};
// axiosClient.getLocalAccessToken = async () => {
//   const accessToken = useSelector(state => state.auth.accessToken);
//   return accessToken ? accessToken : null;
// }
axiosClient.defaults.withCredentials = true;

// Add a request interceptor
axiosClient.interceptors.request.use(
	async function (config) {
		// Do something before request is sent
		const token = await axiosClient.getLocalAccessToken();
		config.headers['Authorization'] = `Bearer ${token}`;
		return config;
	},
	function (error) {
		// Do something with request error
		return Promise.reject(error);
	}
);

axiosClient.interceptors.response.use(
	async function (response) {
		const config = response.config;
		const { code, message } = response.data;
		if (code && code == 401) {
			if (message && message == 'jwt expired') {
				if (!config.__isRetryRequest) {
					config.__isRetryRequest = true;
					const newAccessToken = await authApi.refreshToken();
					if (newAccessToken.status == 200) {
						store.dispatch(updateAccessToken(newAccessToken.data.accessToken));
						config.headers['Authorization'] = `Bearer ${newAccessToken.data.accessToken}`;
						return axiosClient(config);
					}
				}
			}
		}
		return response.data;
	},
	async function (error) {
		const { status, data } = error.response;
		if (status === 401 && data.message === 'Refresh token expired') {
			const response = await authApi.logout();
			if (response.status == 200) {
				store.dispatch(logoutSuccess());
			}
			// window.location.href = '/login';
		}
		return Promise.reject(error);
	}
);

// Add a response interceptor
// axiosClient.interceptors.response.use(
//   (resp) => resp,
//   async (error) => {
//     console.log(error)
//     if (error?.response?.status === 401) {
//       const response = await axiosClient.get('users/refresh-token', { withCredentials: true });

//       if (response.status === 200) {
//         axiosClient.defaults.headers.common['Authorization'] =`Bearer ${response.data.accessToken}` ;
//         return axiosClient(error.config);
//       }
//     }
//   }
// );

export default axiosClient;
