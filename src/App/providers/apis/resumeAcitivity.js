import baseQueryWithUser from '../fetchBaseQuery';
import { createApi } from '@reduxjs/toolkit/query/react';

const resumeActivityApi = createApi({
	reducerPath: 'resumeActivityApi',
	baseQuery: baseQueryWithUser,
	tagTypes: ['resume_activity'],
	endpoints: (build) => ({
		getAllActivity: build.query({
			query: (id) => {
				return { url: `/resume_activity/getAll/${id}`, method: 'GET' };
			},
			providesTags: ['resume_activity'],
			transformResponse: (response) => response.data
		}),
		getOneResumeActivity: build.query({
			query: (id) => {
				return { url: `/resume_activity/${id}`, method: 'GET' };
			},
			providesTags: ['resume_activity'],
			transformResponse: (response) => response.data
		}),
		createResumeActivity: build.mutation({
			query: (payload) => {
				return { url: `/resume_activity`, method: 'POST', body: payload };
			},
			invalidatesTags: ['resume_activity']
		}),
		updateResumeActivity: build.mutation({
			query: ({ id, payload }) => {
				return { url: `/resume_activity/${id}`, method: 'PATCH', body: payload };
			},
			invalidatesTags: ['resume_activity']
		}),
		deleteResumeActivity: build.mutation({
			query: (id) => {
				return { url: `/resume_activity/${id}`, method: 'DELETE' };
			},
			invalidatesTags: ['resume_activity']
		})
	})
});

export const {
	useGetAllActivityQuery,
	useGetOneResumeActivityQuery,
	useCreateResumeActivityMutation,
	useUpdateResumeActivityMutation,
	useDeleteResumeActivityMutation,
	useLazyGetOneResumeActivityQuery
} = resumeActivityApi;

export default resumeActivityApi;
