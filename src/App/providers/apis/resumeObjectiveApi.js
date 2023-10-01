import { createApi } from '@reduxjs/toolkit/query/react';
import baseQueryWithUser from '../fetchBaseQuery';

const resumeObjectiveApi = createApi({
	reducerPath: 'resumeObjectiveApi',
	baseQuery: baseQueryWithUser,
	tagTypes: ['resume_objective'],
	endpoints: (build) => ({
		getAllObjective: build.query({
			query: (id) => {
				return { url: `/resume_objective/getAll/${id}`, method: 'GET' };
			},
			providesTags: ['resume_objective'],
			transformResponse: (response) => response.data
		}),
		getOneResumeObjective: build.query({
			query: (id) => {
				return { url: `/resume_objective/${id}`, method: 'GET' };
			},
			providesTags: ['resume_objective'],
			transformResponse: (response) => response.data
		}),
		createResumeObjective: build.mutation({
			query: (payload) => {
				return { url: `/resume_objective`, method: 'POST', body: payload };
			},
			invalidatesTags: ['resume_objective']
		}),
		updateResumeObjective: build.mutation({
			query: ({ id, payload }) => {
				return { url: `/resume_objective/${id}`, method: 'PATCH', body: payload };
			},
			invalidatesTags: ['resume_objective']
		}),
		deleteResumeObjective: build.mutation({
			query: (id) => {
				return { url: `/resume_objective/${id}`, method: 'DELETE' };
			},
			invalidatesTags: ['resume_objective']
		})
	})
});

export const {
	useDeleteResumeObjectiveMutation,
	useCreateResumeObjectiveMutation,
	useGetOneResumeObjectiveQuery,
	useGetAllObjectiveQuery,
	useUpdateResumeObjectiveMutation,
	useLazyGetOneResumeObjectiveQuery
} = resumeObjectiveApi;

export default resumeObjectiveApi;
