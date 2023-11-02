import { createApi } from '@reduxjs/toolkit/query/react';
import baseQueryWithUser from '../fetchBaseQuery';

const resumeProfileApi = createApi({
	reducerPath: 'resumeProfileApi',
	baseQuery: baseQueryWithUser,
	tagTypes: ['resume_profile'],
	endpoints: (build) => ({
		getOneResumeProfile: build.query({
			query: (id) => {
				return { url: `/resume_profile/${id}`, method: 'GET' };
			},
			providesTags: ['resume_profile'],
			transformResponse: (response) => response.data
		}),
		updateResumeProfile: build.mutation({
			query: ({ id, payload }) => {
				return { url: `/resume_profile/${id}`, method: 'PATCH', body: payload };
			},
			invalidatesTags: ['resume_profile']
		})
	})
});

export const { useUpdateResumeProfileMutation, useGetOneResumeProfileQuery } = resumeProfileApi;

export default resumeProfileApi;
