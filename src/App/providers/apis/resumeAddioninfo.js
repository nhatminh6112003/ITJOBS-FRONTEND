import baseQueryWithUser from '../fetchBaseQuery';
import { createApi } from '@reduxjs/toolkit/query/react';

const resumeAddioninfoApi = createApi({
	reducerPath: 'resumeAddioninfoApi',
	baseQuery: baseQueryWithUser,
	tagTypes: ['resume_addioninfo'],
	endpoints: (build) => ({
		getAllAddioninfo: build.query({
			query: (id) => {
				return { url: `/resume_addioninfo/getAll/${id}`, method: 'GET' };
			},
			providesTags: ['resume_addioninfo'],
			transformResponse: (response) => response.data
		}) ,
		getOneResumeAddioninfo: build.query({
			query: (id) => {
				return { url: `/resume_addioninfo/${id}`, method: 'GET' };
			},
			providesTags: ['resume_addioninfo'],
			transformResponse: (response) => response.data
		}), 
		createResumeAddioninfo: build.mutation({
			query: (payload) => {
				return { url: `/resume_addioninfo`, method: 'POST', body: payload };
			},
			invalidatesTags: ['resume_addioninfo']
		}),
		updateResumeAddioninfo: build.mutation({
			query: ({ id, payload }) => {
				return { url: `/resume_addioninfo/${id}`, method: 'PATCH', body: payload };
			},
			invalidatesTags: ['resume_addioninfo']
		}),
		deleteResumeAddioninfo: build.mutation({
			query: (id) => {
				return { url: `/resume_addioninfo/${id}`, method: 'DELETE' };
			},
			invalidatesTags: ['resume_addioninfo']
		})
	})
});

export const {
	useGetAllAddioninfoQuery,
	useGetOneResumeAddioninfoQuery,
	useCreateResumeAddioninfoMutation,
	useUpdateResumeAddioninfoMutation,
	useDeleteResumeAddioninfoMutation,
	useLazyGetOneResumeAddioninfoQuery
} = resumeAddioninfoApi;

export default resumeAddioninfoApi;
