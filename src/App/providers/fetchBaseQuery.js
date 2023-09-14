import { fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { logout, updateAccessToken } from './slices/authSlice';
const baseQuery = fetchBaseQuery({
	baseUrl: import.meta.env.VITE_API_URL,
	prepareHeaders: async (headers, { getState }) => {
		const user = getState().auth.user;
		const accessToken = user?.accessToken;

		if (accessToken) {
			headers.set('Authorization', `Bearer ${accessToken}`);
		}
		headers.set('Accept', 'application/json');
		headers.set('Content-Type', 'application/json');
		return headers;
	}
});
const baseQueryWithAuth = async (args, api, extraOptions) => {
	let result = await baseQuery(args, api, extraOptions);
	if ( result?.data?.code &&  result?.data?.code == 401) {
		if ( result?.data?.message &&  result?.data?.message == 'jwt expired') {
			const user = api.getState().auth.user;
			const refreshToken = user?.refreshToken;
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
				api.dispatch(logout());
			}
		}
	}
	return result;
};
export default baseQueryWithAuth;
