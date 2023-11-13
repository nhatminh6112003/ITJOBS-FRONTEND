import { createApi } from '@reduxjs/toolkit/query/react';
import baseQueryWithEmployer from '../fetchBaseQueryEmployer';

const employerResumeApi = createApi({
	reducerPath: 'employerResume',
	baseQuery: baseQueryWithEmployer,
	endpoints: (build) => ({
		getAllEmployerResumeApi: build.query({
			query: (arg) => {
				return { url: `/employer_resume`, method: 'GET', params: arg?.params };
			},
			providesTags: ['employerResume'],
			transformResponse: (response) => response
		}),
		getOneEmployerResumeApi: build.query({
			query: (id) => {
				return { url: `/employer_resume/${id}`, method: 'GET' };
			},
			providesTags: ['employerResume'],
			transformResponse: (response) => response.data
		}),
		createEmployerResumeApi: build.mutation({
			query: (payload) => {
				return { url: `/employer_resume`, method: 'POST', body: payload };
			},
			invalidatesTags: ['employerResume']
		}),
		updateEmployerResumeApi: build.mutation({
			query: ({ id, payload }) => {
				return { url: `/employer_resume/${id}`, method: 'PATCH', body: payload };
			},
			invalidatesTags: ['employerResume']
		}),
		deleteEmployerResumeApi: build.mutation({
			query: (id) => {
				return { url: `/employer_resume/${id}`, method: 'DELETE' };
			},
			invalidatesTags: ['employerResume']
		})
	})
});

export const {
	useCreateEmployerResumeApiMutation,
	useGetAllEmployerResumeApiQuery,
	useGetOneEmployerResumeApiQuery,
	useDeleteEmployerResumeApiMutation,
	useUpdateEmployerResumeApiMutation
} = employerResumeApi;

export default employerResumeApi;
