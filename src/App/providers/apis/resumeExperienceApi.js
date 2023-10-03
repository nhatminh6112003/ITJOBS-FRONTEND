import { createApi } from '@reduxjs/toolkit/query/react';
import baseQueryWithUser from '../fetchBaseQuery';

const resumeExperienceApi = createApi({
	reducerPath: 'resumeExperienceApi',
	baseQuery: baseQueryWithUser,
	tagTypes: ['resume_experience'],
	endpoints: (build) => ({
		getAllResumeExperience: build.query({
			query: (id) => {
				return { url: `/resume_experience/getAll/${id}`, method: 'GET' };
			},
			providesTags: ['resume_experience'],
			transformResponse: (response) => response.data
		}),
		getOneResumeExperience: build.query({
			query: (id) => {
				return { url: `/resume_experience/${id}`, method: 'GET' };
			},
			providesTags: ['resume_experience'],
			transformResponse: (response) => response.data
		}),
		createResumeExperience: build.mutation({
			query: (payload) => {
				return { url: `/resume_experience`, method: 'POST', body: payload };
			},
			invalidatesTags: ['resume_experience']
		}),
		updateResumeExperience: build.mutation({
			query: ({ id, payload }) => {
				return { url: `/resume_experience/${id}`, method: 'PATCH', body: payload };
			},
			invalidatesTags: ['resume_experience']
		}),
		deleteResumeExperience: build.mutation({
			query: (id) => {
				return { url: `/resume_experience/${id}`, method: 'DELETE' };
			},
			invalidatesTags: ['resume_experience']
		})
	})
});

export const {
	useDeleteResumeExperienceMutation,
	useCreateResumeExperienceMutation,
	useGetOneResumeExperienceQuery,
	useGetAllResumeExperienceQuery,
	useUpdateResumeExperienceMutation,
	useLazyGetOneResumeExperienceQuery
} = resumeExperienceApi;

export default resumeExperienceApi;
