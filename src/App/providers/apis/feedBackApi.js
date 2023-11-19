import { createApi } from '@reduxjs/toolkit/query/react';
import baseQueryWithUser from '../fetchBaseQuery';

const feedBackApi = createApi({
	reducerPath: 'feedback',
	baseQuery: baseQueryWithUser,
	endpoints: (build) => ({
		getAllFeedBack: build.query({
			query: (arg) => {
				return { url: `/feedback`, method: 'GET', params: arg?.params };
			},
			providesTags: ['feedback'],
			transformResponse: (response) => response
		}),
		getOneFeedBack: build.query({
			query: (id) => {
				return { url: `/feedback/${id}`, method: 'GET' };
			},
			providesTags: ['feedback'],
			transformResponse: (response) => response.data
		}),
		createFeedBack: build.mutation({
			query: (payload) => {
				return { url: `/feedback`, method: 'POST', body: payload };
			},
			invalidatesTags: ['feedback']
		}),
		updateFeedBack: build.mutation({
			query: ({ id, payload }) => {
				return { url: `/feedback/${id}`, method: 'PATCH', body: payload };
			},
			invalidatesTags: ['feedback']
		}),
		deleteFeedBack: build.mutation({
			query: (id) => {
				return { url: `/feedback/${id}`, method: 'DELETE' };
			},
			invalidatesTags: ['feedback']
		})
	})
});

export const {
	useCreateFeedBackMutation,
	useGetAllFeedBackQuery,
	useGetOneFeedBackQuery,
	useDeleteFeedBackMutation,
	useUpdateFeedBackMutation
} = feedBackApi;

export default feedBackApi;
