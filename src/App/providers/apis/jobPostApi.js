import { createApi } from '@reduxjs/toolkit/query/react';
import baseQueryWithEmployer from '../fetchBaseQueryEmployer';
const jobPostApi = createApi({
	reducerPath: 'jobPost',
	baseQuery: baseQueryWithEmployer,
	endpoints: (build) => ({
		getAllJobPost: build.query({
			query: () => {
				return { url: `/job_post`, method: 'GET' };
			},
			providesTags: ['job_post'],
			transformResponse: (response) => response
		}),
		getOneJobPost: build.query({
			query: (id) => {
				return { url: `/job_post/${id}`, method: 'GET' };
			},
			providesTags: ['job_post'],
			transformResponse: (response) => response.data
		}),
		createJobPost: build.mutation({
			query: (payload) => {
				return { url: `/job_post`, method: 'POST', body: payload };
			},
			invalidatesTags: ['job_post']
		}),
		updateJobPost: build.mutation({
			query: ({ id, payload }) => {
				return { url: `/job_post/${id}`, method: 'PATCH', body: payload };
			},
			invalidatesTags: ['job_post']
		}),
		deleteJobPost: build.mutation({
			query: (id) => {
				return { url: `/job_post/${id}`, method: 'DELETE' };
			},
			invalidatesTags: ['job_post']
		})
	})
});

export const {
	useCreateJobPostMutation,
	useGetAllJobPostQuery,
	useGetOneJobPostQuery,
	useDeleteJobPostMutation,
	useUpdateJobPostMutation
} = jobPostApi;

export default jobPostApi;
