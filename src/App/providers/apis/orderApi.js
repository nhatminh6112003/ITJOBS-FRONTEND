import { createApi } from '@reduxjs/toolkit/query/react';
import baseQueryWithUser from '../fetchBaseQuery';

const orderApi = createApi({
	reducerPath: 'orderApi',
	baseQuery: baseQueryWithUser,
	tagTypes: ['order'],
	endpoints: (build) => ({
		getAllOrder: build.query({
			query: (arg) => {
				return { url: `/order`, method: 'GET', params: arg.params };
			},
			providesTags: ['order'],
			transformResponse: (response) => response
		}),
		getOneOrder: build.query({
			query: (id) => {
				return { url: `/order/${id}`, method: 'GET' };
			},
			providesTags: ['order'],
			transformResponse: (response) => response.data
		}),
		createOrder: build.mutation({
			query: (payload) => {
				return { url: `/order`, method: 'POST', body: payload };
			},
			invalidatesTags: ['order']
		}),
		updateOrder: build.mutation({
			query: ({ id, payload }) => {
				return { url: `/order/${id}`, method: 'PATCH', body: payload };
			},
			invalidatesTags: ['order']
		}),
		deleteOrder: build.mutation({
			query: (id) => {
				return { url: `/order/${id}`, method: 'DELETE' };
			},
			invalidatesTags: ['order']
		}),
		analysisOrder: build.query({
			query: () => {
				return { url: `/order/analysis`, method: 'GET' };
			},
			providesTags: ['order'],
			transformResponse: (response) => response.data
		})
	})
});

export const {
	useCreateOrderMutation,
	useDeleteOrderMutation,
	useGetAllOrderQuery,
	useGetOneOrderQuery,
	useLazyGetOneOrderQuery,
	useUpdateOrderMutation,
	useAnalysisOrderQuery
} = orderApi;

export default orderApi;
