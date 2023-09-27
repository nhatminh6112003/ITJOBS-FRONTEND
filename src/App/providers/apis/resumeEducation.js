import { createApi } from '@reduxjs/toolkit/query/react';
import baseQueryWithUser from '../fetchBaseQuery';

const resumeEducationApi = createApi({
	reducerPath: 'resumeEducationApi',
	baseQuery: baseQueryWithUser,
	tagTypes: ['resume_education'],
	endpoints: (build) => ({
		getAllEducation: build.query({
			query: (id) => {
				return { url: `/resume_education/getAll/${id}`, method: 'GET' };
			},
			providesTags: ['resume_education'],
			transformResponse: (response) => response.data
		}),
		getOneResumeEducation: build.query({
			query: (id) => {
				return { url: `/resume_education/${id}`, method: 'GET' };
			},
			providesTags: ['resume_education'],
			transformResponse: (response) => response.data
		}),
		createResumeEducation: build.mutation({
			query: (payload) => {
				return { url: `/resume_education`, method: 'POST', body: payload };
			},
			invalidatesTags: ['resume_education']
		}),
		updateResumeEducation: build.mutation({
			query: ({ id, payload }) => {
				return { url: `/resume_education/${id}`, method: 'PATCH', body: payload };
			},
			invalidatesTags: ['resume_education']
		}),
		deleteResumeEducation: build.mutation({
			query: (id) => {
				return { url: `/resume_education/${id}`, method: 'DELETE' };
			},
			invalidatesTags: ['resume_education']
		})
	})
});

export const {
	useDeleteResumeEducationMutation,
	useCreateResumeEducationMutation,
	useGetOneResumeEducationQuery,
	useGetAllEducationQuery,
	useUpdateResumeEducationMutation,
	useLazyGetOneResumeEducationQuery
} = resumeEducationApi;

export default resumeEducationApi;
