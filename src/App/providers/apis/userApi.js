import { createApi } from '@reduxjs/toolkit/query/react';
import baseQueryWithUser from '../fetchBaseQuery';

const userApi = createApi({
	reducerPath: 'userApi',
	baseQuery: baseQueryWithUser,
	endpoints: (build) => ({
		getAll: build.query({
			query: () => {
				return { url: '/users', method: 'GET' };
			}
		})
	})
});

export const { useGetAllQuery } = userApi;

export default userApi;
