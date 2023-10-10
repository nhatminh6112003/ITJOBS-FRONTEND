import { createApi } from '@reduxjs/toolkit/query/react';
import baseQueryWithUser from '../fetchBaseQuery';

const resumeDesiredJobApi = createApi({
	reducerPath: 'resumeDesiredJobApi',
	baseQuery: baseQueryWithUser,
	tagTypes: ['resume_desired_job'],
	endpoints: (build) => ({
		getOneResumeDesiredJob: build.query({
			query: (id) => {
				return { url: `/resume_desired_job/${id}`, method: 'GET' };
			},
			providesTags: ['resume_desired_job'],
			transformResponse: (response) => response.data
		}),
		updateResumeDesiredJob: build.mutation({
			query: ({ id, payload }) => {
				return { url: `/resume_desired_job/${id}`, method: 'PATCH', body: payload };
			},
			invalidatesTags: ['resume_desired_job']
		})
	})
});

export const { useUpdateResumeDesiredJobMutation, useGetOneResumeDesiredJobQuery, useLazyGetOneResumeDesiredJobQuery } =
	resumeDesiredJobApi;

export default resumeDesiredJobApi;
