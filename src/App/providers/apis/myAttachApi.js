import baseQueryWithUser from '../fetchBaseQuery';
import { createApi } from '@reduxjs/toolkit/query/react';

const myAttachApi = createApi({
	reducerPath: 'myAttachApi',
	baseQuery: baseQueryWithUser,
	tagTypes: ['my_attach'],
	endpoints: (build) => ({
		getAllMyAttach: build.query({
			query: (id) => {
				return { url: `/my_attach/getAll/${id}`, method: 'GET' };
			},
			providesTags: ['my_attach'],
			transformResponse: (response) => response.data
		}),
		getOneMyAttach: build.query({
			query: (id) => {
				return { url: `/my_attach/${id}`, method: 'GET' };
			},
			providesTags: ['my_attach'],
			transformResponse: (response) => response.data
		}),
		createMyAttach: build.mutation({
			query: (payload) => {
				return { url: `/my_attach`, method: 'POST', body: payload };
			},
			invalidatesTags: ['my_attach']
		}),
		updateMyAttach: build.mutation({
			query: ({ id, payload }) => {
				return { url: `/my_attach/${id}`, method: 'PATCH', body: payload };
			},
			invalidatesTags: ['my_attach']
		}),
		deleteMyAttach: build.mutation({
			query: (id) => {
				return { url: `/my_attach/${id}`, method: 'DELETE' };
			},
			invalidatesTags: ['my_attach']
		})
	})
});

export const {
	useGetAllMyAttachQuery,
	useCreateMyAttachMutation,
	useUpdateMyAttachMutation,
	useDeleteMyAttachMutation,
	useGetOneMyAttachQuery,
	useLazyGetOneMyAttachQuery
} = myAttachApi;

export default myAttachApi;
