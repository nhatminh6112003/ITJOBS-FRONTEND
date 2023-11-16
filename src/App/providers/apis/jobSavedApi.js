import { createApi } from '@reduxjs/toolkit/query/react';
import baseQueryWithUser from '../fetchBaseQuery';
const jobSavedApi = createApi({
	reducerPath: 'jobSaved',
	baseQuery: baseQueryWithUser,
	endpoints: (build) => ({
		getAllJobSaved: build.query({
			query: (id) => {
				return { url: `/job_saved/getAll/${id}`, method: 'GET' };
			},
			providesTags: ['jobSaved'],
			transformResponse: (response) => response.data
		}),
		getOneJobSaved: build.query({
			query: (id) => {
				return { url: `/job_saved/${id}`, method: 'GET' };
			},
			providesTags: ['jobSaved'],
			transformResponse: (response) => response.data
		}),
		createJobSaved: build.mutation({
			query: (payload) => {
				return { url: `/job_saved`, method: 'POST', body: payload };
			},
			invalidatesTags: ['jobSaved']
		}),
		updateJobSaved: build.mutation({
			query: ({ id, payload }) => {
				return { url: `/job_saved/${id}`, method: 'PATCH', body: payload };
			},
			invalidatesTags: ['jobSaved']
		}),
		deleteJobSaved: build.mutation({
			query: (id) => {
				return { url: `/job_saved/${id}`, method: 'DELETE' };
			},
			invalidatesTags: ['jobSaved']
		})
	})
});

export const {
	useGetAllJobSavedQuery,
	useGetOneJobSavedQuery,
	useCreateJobSavedMutation,
	useUpdateJobSavedMutation,
	useDeleteJobSavedMutation
} = jobSavedApi;

export default jobSavedApi;
