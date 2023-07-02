import { createApi } from '@reduxjs/toolkit/query/react';
import baseQueryWithAuth from '../fetchBaseQuery';
const authApi = createApi({
	reducerPath: 'authApi',
	baseQuery: baseQueryWithAuth,
	endpoints: (build) => ({
		login: build.mutation({
			query: (payload) => {
				return { url: '/auth/login', method: 'POST', body: payload };
			}
		}),
		register: build.mutation({
			query: (payload) => {
				return { url: '/auth/register', method: 'POST', body: payload };
			}
		})
	})
});

export const { useLoginMutation, useRegisterMutation } = authApi;

export default authApi;
