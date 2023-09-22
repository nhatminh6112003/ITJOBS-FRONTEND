import { createApi } from '@reduxjs/toolkit/query/react';
import baseQueryWithUser from '../fetchBaseQuery';

const resumeReferApi = createApi({
	reducerPath: 'resumeReferApi',
	baseQuery: baseQueryWithUser,
	tagTypes: ['resume_refer'],
	endpoints: (build) => ({
		getAllRefer: build.query({
			query: (id) => {
				return { url: `/resume_refer/getAll/${id}`, method: 'GET' };
			},
			providesTags: ['resume_refer'],
			transformResponse: (response) => response.data
		}),
		getOneResumeRefer: build.query({
			query: (id) => {
				return { url: `/resume_refer/${id}`, method: 'GET' };
			},
			providesTags: ['resume_refer'],
			transformResponse: (response) => response.data
		}),
		createResumeRefer: build.mutation({
			query: (payload) => {
				return { url: `/resume_refer`, method: 'POST', body: payload };
			},
			invalidatesTags: ['resume_refer']
		}),
		updateResumeRefer: build.mutation({
			query: ({ id, payload }) => {
				return { url: `/resume_refer/${id}`, method: 'PATCH', body: payload };
			},
			invalidatesTags: ['resume_refer']
		}),
		deleteResumeRefer: build.mutation({
			query: (id) => {
				return { url: `/resume_refer/${id}`, method: 'DELETE' };
			},
			invalidatesTags: ['resume_refer']
		})
	})
});

export const {
	useCreateResumeReferMutation,
	useUpdateResumeReferMutation,
	useGetOneResumeReferQuery,
	useGetAllReferQuery,
	useLazyGetOneResumeReferQuery,
	useDeleteResumeReferMutation
} = resumeReferApi;

export default resumeReferApi;
