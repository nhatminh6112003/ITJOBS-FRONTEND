import { createApi } from '@reduxjs/toolkit/query/react';
import baseQueryWithUser from '../fetchBaseQuery';

const userApi = createApi({
	reducerPath: 'userApi',
	baseQuery: baseQueryWithUser,
	endpoints: (build) => ({
		getAll: build.query({
			query: (arg) => {
				return { url: '/users', method: 'GET', params: arg.params };
			}
		}),
		getOneUser: build.query({
			query: (id) => {
				return { url: `/users/${id}`, method: 'GET' };
			},
			providesTags: ['users'],
			transformResponse: (response) => response.data
		})
	})
});

export const { useGetAllQuery, useGetOneUserQuery } = userApi;

export default userApi;
