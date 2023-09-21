import { createApi } from '@reduxjs/toolkit/query/react';
import baseQueryWithUser from '../fetchBaseQuery';

const jobPositionCategoryApi = createApi({
	reducerPath: 'jobPositionCategory',
	baseQuery: baseQueryWithUser,
	endpoints: (build) => ({
		getAllJobPositionCategory: build.query({
			query: (arg) => {
				return { url: `/job_position_category`, method: 'GET', params: arg.params };
			},
			providesTags: ['job_position_category'],
			transformResponse: (response) => response
		}),
		getOneJobPositionCategory: build.query({
			query: (id) => {
				return { url: `/job_position_category/${id}`, method: 'GET' };
			},
			providesTags: ['job_position_category'],
			transformResponse: (response) => response.data
		}),
		createJobPositionCategory: build.mutation({
			query: (payload) => {
				return { url: `/job_position_category`, method: 'POST', body: payload };
			},
			invalidatesTags: ['job_position_category']
		}),
		updateJobPositionCategory: build.mutation({
			query: ({ id, payload }) => {
				return { url: `/job_position_category/${id}`, method: 'PATCH', body: payload };
			},
			invalidatesTags: ['job_position_category']
		}),
		deleteJobPositionCategory: build.mutation({
			query: (id) => {
				return { url: `/job_position_category/${id}`, method: 'DELETE' };
			},
			invalidatesTags: ['job_position_category']
		})
	})
});

export const {
	useCreateJobPositionCategoryMutation,
	useGetAllJobPositionCategoryQuery,
	useGetOneJobPositionCategoryQuery,
	useDeleteJobPositionCategoryMutation,
	useUpdateJobPositionCategoryMutation
} = jobPositionCategoryApi;

export default jobPositionCategoryApi;
