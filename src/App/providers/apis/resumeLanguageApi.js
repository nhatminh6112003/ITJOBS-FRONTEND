import baseQueryWithUser from '../fetchBaseQuery';
import { createApi } from '@reduxjs/toolkit/query/react';

const resumeLanguageApi = createApi({
	reducerPath: 'resumeLanguageApi',
	baseQuery: baseQueryWithUser,
	tagTypes: ['resume_language'],
	endpoints: (build) => ({
		getAllResumeLanguage: build.query({
			query: (id) => {
				return { url: `/resume_language/getAll/${id}`, method: 'GET' };
			},
			providesTags: ['resume_language'],
			transformErrorResponse: (response) => response.data
		}),
		getOneResumeLanguage: build.query({
			query: (id) => {
				return { url: `/resume_language/${id}`, method: 'GET' };
			},
			providesTags: ['resume_language'],
			transformResponse: (response) => response.data
		}),
		createResumeLanguage: build.mutation({
			query: (payload) => {
				return { url: `/resume_language`, method: 'POST', body: payload };
			},
			invalidatesTags: ['resume_language']
		}),
		updateResumeLanguage: build.mutation({
			query: ({ id, payload }) => {
				return { url: `/resume_language/${id}`, method: 'PATCH', body: payload };
			},
			invalidatesTags: ['resume_language']
		}),
		deleteResumeLanguage: build.mutation({
			query: (id) => {
				return { url: `/resume_language/${id}`, method: 'DELETE' };
			},
			invalidatesTags: ['resume_language']
		})
	})
});

export const {
	useGetOneResumeLanguageQuery,
	useGetAllResumeLanguageQuery,
	useCreateResumeLanguageMutation,
	useUpdateResumeLanguageMutation,
	useDeleteResumeLanguageMutation,
	useLazyGetOneResumeLanguageQuery
} = resumeLanguageApi;

export default resumeLanguageApi;
