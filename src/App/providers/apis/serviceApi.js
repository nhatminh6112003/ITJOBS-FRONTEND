import { createApi } from '@reduxjs/toolkit/query/react';
import baseQueryWithAdmin from '../fetchBaseQueryAdmin';

const serviceApi = createApi({
	reducerPath: 'service',
	baseQuery: baseQueryWithAdmin,
	endpoints: (build) => ({
		getAllService: build.query({
			query: (arg) => {
				return { url: `/service`, method: 'GET', params: arg?.params };
			},
			providesTags: ['service'],
			transformResponse: (response) => response
		}),
		getOneService: build.query({
			query: (id) => {
				return { url: `/service/${id}`, method: 'GET' };
			},
			providesTags: ['service'],
			transformResponse: (response) => response.data
		}),
		createService: build.mutation({
			query: (payload) => {
				return { url: `/service`, method: 'POST', body: payload };
			},
			invalidatesTags: ['service'],
		}),
		updateService: build.mutation({
			query: ({ id, payload }) => {
				return { url: `/service/${id}`, method: 'PATCH', body: payload };
			},
			invalidatesTags: ['service'],
		}),
		deleteService: build.mutation({
			query: (id) => {
				return { url: `/service/${id}`, method: 'DELETE' };
			},
			invalidatesTags: ['service'],
		})
	})
});

export const {
	useCreateServiceMutation,
	useGetAllServiceQuery,
	useGetOneServiceQuery,
	useDeleteServiceMutation,
	useUpdateServiceMutation
} = serviceApi;

export default serviceApi;