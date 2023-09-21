import { createApi } from '@reduxjs/toolkit/query/react';
import baseQueryWithUser from '../fetchBaseQuery';

const jobWelfareApi = createApi({
	reducerPath: 'jobWelfare',
	baseQuery: baseQueryWithUser,
	endpoints: (build) => ({
		getAllJobWelfare: build.query({
			query: (arg) => {
				return { url: `/job_welfare`, method: 'GET', params: arg.params };
			},
			providesTags: ['job_welfare'],
			transformResponse: (response) => response
		}),
		getOneJobWelfare: build.query({
			query: (id) => {
				return { url: `/job_welfare/${id}`, method: 'GET' };
			},
			providesTags: ['job_welfare'],
			transformResponse: (response) => response.data
		}),
		createJobWelfare: build.mutation({
			query: (payload) => {
				return { url: `/job_welfare`, method: 'POST', body: payload };
			},
			invalidatesTags: ['job_welfare']
		}),
		updateJobWelfare: build.mutation({
			query: ({ id, payload }) => {
				return { url: `/job_welfare/${id}`, method: 'PATCH', body: payload };
			},
			invalidatesTags: ['job_welfare']
		}),
		deleteJobWelfare: build.mutation({
			query: (id) => {
				return { url: `/job_welfare/${id}`, method: 'DELETE' };
			},
			invalidatesTags: ['job_welfare']
		})
	})
});

export const {
	useCreateJobWelfareMutation,
	useGetAllJobWelfareQuery,
	useGetOneJobWelfareQuery,
	useDeleteJobWelfareMutation,
	useUpdateJobWelfareMutation
} = jobWelfareApi;

export default jobWelfareApi;