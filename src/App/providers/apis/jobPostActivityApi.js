import { createApi } from '@reduxjs/toolkit/query/react';
import baseQueryWithUser from '../fetchBaseQuery';

const jobPostActivityApi = createApi({
	reducerPath: 'jobPostActivityApi',
	baseQuery: baseQueryWithUser,
	endpoints: (build) => ({
		getAllJobPostActivityApi: build.query({
			query: (arg) => {
				return { url: `/job_post_activity`, method: 'GET', params: arg?.params };
			},
			providesTags: ['job_post_activity'],
			transformResponse: (response) => response
		}),
		getOneJobPostActivityApi: build.query({
			query: (id) => {
				return { url: `/job_post_activity/${id}`, method: 'GET' };
			},
			providesTags: ['job_post_activity'],
			transformResponse: (response) => response.data
		}),
		createJobPostActivityApi: build.mutation({
			query: (payload) => {
				return { url: `/job_post_activity`, method: 'POST', body: payload };
			},
			invalidatesTags: ['job_post_activity']
		}),
		updateJobPostActivityApi: build.mutation({
			query: ({ id, payload }) => {
				return { url: `/job_post_activity/${id}`, method: 'PATCH', body: payload };
			},
			invalidatesTags: ['job_post_activity']
		}),
		updateStatusJobPostActivityResume: build.mutation({
			query: ({ id, payload }) => {
				return { url: `/job_post_activity/update-status-resume/${id}`, method: 'PATCH', body: payload };
			},
			invalidatesTags: ['job_post_activity']
		}),
		sendMailJobSeeker: build.mutation({
			query: (payload) => {
				return { url: `/job_post_activity/send-mail-jobSeeker`, method: 'POST', body: payload };
			},
			invalidatesTags: ['job_post_activity']
		}),

		deleteJobPostActivityApi: build.mutation({
			query: (id) => {
				return { url: `/job_post_activity/${id}`, method: 'DELETE' };
			},
			invalidatesTags: ['job_post_activity']
		})
	})
});

export const {
	useCreateJobPostActivityApiMutation,
	useGetAllJobPostActivityApiQuery,
	useGetOneJobPostActivityApiQuery,
	useDeleteJobPostActivityApiMutation,
	useUpdateJobPostActivityApiMutation,
	useUpdateStatusJobPostActivityResumeMutation,
	useSendMailJobSeekerMutation
} = jobPostActivityApi;

export default jobPostActivityApi;
