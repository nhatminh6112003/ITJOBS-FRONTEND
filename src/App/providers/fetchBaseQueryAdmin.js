import { fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { logout, updateAccessToken } from './slices/authSlice';
import UserRoleEnum, { UserType } from '../constants/roleEnum';
const baseQuery = fetchBaseQuery({
	baseUrl: import.meta.env.VITE_API_URL,
	prepareHeaders: async (headers, { getState }) => {
		const admin = getState().auth.admin;
		const accessToken = admin?.accessToken;

		if (accessToken) {
			headers.set('Authorization', `Bearer ${accessToken}`);
		}
		headers.set('Accept', 'application/json');
		headers.set('Content-Type', 'application/json');
		return headers;
	}
});
const baseQueryWithEmployer = async (args, api, extraOptions) => {
	let result = await baseQuery(args, api, extraOptions);
	if (result?.data?.code && result?.data?.code == 401) {
		if (result?.data?.message && result?.data?.message == 'jwt expired') {
			const admin = api.getState().auth.admin;
			const refreshToken = admin?.refreshToken;
			const { data: refreshResult } = await baseQuery(
				{
					url: 'auth/refresh-token',
					method: 'POST',
					body: { refreshToken }
				},
				api,
				extraOptions
			);
			if (refreshResult?.isSuccess) {
				await api.dispatch(updateAccessToken(refreshResult?.data?.accessToken));
				result = await baseQuery(args, api, extraOptions);
			} else {
				api.dispatch(logout({ Role: UserType[UserRoleEnum.ADMIN] }));
			}
		}
	}
	return result;
};
export default baseQueryWithEmployer;
