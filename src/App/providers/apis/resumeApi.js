import { createApi } from '@reduxjs/toolkit/query/react';
import baseQueryWithUser from '../fetchBaseQuery';

const resumeApi = createApi({
	reducerPath: 'resumeApi',
	baseQuery: baseQueryWithUser,
	tagTypes: ['resume'],
	endpoints: (build) => ({
		getAllResume: build.query({
			query: (arg) => {
				return { url: `/resume`, method: 'GET', params: arg.params };
			},
			providesTags: ['resume'],
			transformResponse: (response) => response.data
		}),
		getOneResume: build.query({
			query: (id) => {
				return { url: `/resume/${id}`, method: 'GET' };
			},
			providesTags: ['resume'],
			transformResponse: (response) => response.data
		}),
		createResume: build.mutation({
			query: (payload) => {
				return { url: `/resume`, method: 'POST', body: payload };
			},
			invalidatesTags: ['resume']
		}),
		updateResume: build.mutation({
			query: ({ id, payload }) => {
				return { url: `/resume/${id}`, method: 'PATCH', body: payload };
			},
			invalidatesTags: ['resume']
		}),
		deleteResume: build.mutation({
			query: (id) => {
				return { url: `/resume/${id}`, method: 'DELETE' };
			},
			invalidatesTags: ['resume']
		})
	})
});

export const {
	useCreateResumeMutation,
	useDeleteResumeMutation,
	useGetAllResumeQuery,
	useGetOneResumeQuery,
	useLazyGetOneResumeQuery,
	useUpdateResumeMutation
} = resumeApi;

export default resumeApi;
