import axiosClient from './axiosClient';
import axios from 'axios';
const authApi = {
	register(data) {
		const url = `/auth/register`;
		return axiosClient.post(url, data);
	},
	login(data) {
		const url = `/api/auth/login`;
		return axios.post(url, data);
	},
	logout() {
		const url = `/auth/logout`;
		return axiosClient.post(url);
	},
	refreshToken() {
		const url = `/auth/refresh-token`;
		return axiosClient.post(url);
	}
};
export default authApi;
