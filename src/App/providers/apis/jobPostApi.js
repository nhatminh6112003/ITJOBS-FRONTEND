import { createApi } from '@reduxjs/toolkit/query/react';
import baseQueryWithEmployer from '../fetchBaseQueryEmployer';
const jobPostApi = createApi({
	reducerPath: 'jobPost',
	baseQuery: baseQueryWithEmployer,
	endpoints: (build) => ({
		getAllJobPost: build.query({
			query: (arg) => {
				return { url: `/job_post`, method: 'GET', params: arg.params };
			},
			providesTags: ['job_post'],
			transformResponse: (response) => response
		}),
		getAllJobPostByPriority: build.query({
			query: (arg) => {
				return { url: `/job_post/sort`, method: 'GET', params: arg.params };
			},
			providesTags: ['job_post'],
			transformResponse: (response) => response
		}),
		analytics: build.query({
			query: (arg) => {
				return { url: `/job_post/analytics`, method: 'GET', params: arg.params };
			},
			providesTags: ['job_post'],
			transformResponse: (response) => response.data
		}),
		calculateCorrelationIndex: build.query({
			query: (arg) => {
				return { url: `/job_post/analytics/calculateCorrelationIndex`, method: 'GET', params: arg.params };
			},
			providesTags: ['job_post'],
			transformResponse: (response) => response.data
		}),
		analyticJobSeekerApplyByDay: build.query({
			query: (arg) => {
				return { url: `/job_post/analytics/analyticJobSeekerApplyByDay`, method: 'GET', params: arg.params };
			},
			providesTags: ['job_post'],
			transformResponse: (response) => response.data
		}),
		analyticResumeStatus: build.query({
			query: (arg) => {
				return { url: `/job_post/analytics/analyticResumeStatus`, method: 'GET', params: arg.params };
			},
			providesTags: ['job_post'],
			transformResponse: (response) => response.data
		}),
		analyticDegreeValue: build.query({
			query: (arg) => {
				return { url: `/job_post/analytics/analyticDegreeValue`, method: 'GET', params: arg.params };
			},
			providesTags: ['job_post'],
			transformResponse: (response) => response.data
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
		}),
		analyticTotalPost: build.query({
			query: () => {
				return { url: `/job_post/analyticTotalPost`, method: 'GET' };
			},
			providesTags: ['job_post'],
			transformResponse: (response) => response.data
		})
	})
});

export const {
	useCreateJobPostMutation,
	useGetAllJobPostQuery,
	useGetAllJobPostByPriorityQuery,
	useGetOneJobPostQuery,
	useDeleteJobPostMutation,
	useUpdateJobPostMutation,
	useAnalyticsQuery,
	useCalculateCorrelationIndexQuery,
	useAnalyticJobSeekerApplyByDayQuery,
	useAnalyticResumeStatusQuery,
	useAnalyticDegreeValueQuery,
	useAnalyticTotalPostQuery
} = jobPostApi;

export default jobPostApi;
