import { createApi } from '@reduxjs/toolkit/query/react';
import baseQueryWithAdmin from '../fetchBaseQueryAdmin';

const serviceTypeApi = createApi({
	reducerPath: 'service_type',
	baseQuery: baseQueryWithAdmin,
	endpoints: (build) => ({
		getAllServiceType: build.query({
			query: (arg) => {
				return { url: `/service_type`, method: 'GET', params: arg?.params };
			},
			providesTags: ['service_type'],
			transformResponse: (response) => response
		}),
		getOneServiceType: build.query({
			query: (id) => {
				return { url: `/service_type/${id}`, method: 'GET' };
			},
			providesTags: ['service_type'],
			transformResponse: (response) => response.data
		}),
		createServiceType: build.mutation({
			query: (payload) => {
				return { url: `/service_type`, method: 'POST', body: payload };
			},
			invalidatesTags: ['service_type'],
		}),
		updateServiceType: build.mutation({
			query: ({ id, payload }) => {
				return { url: `/service_type/${id}`, method: 'PATCH', body: payload };
			},
			invalidatesTags: ['service_type'],
		}),
		deleteServiceType: build.mutation({
			query: (id) => {
				return { url: `/service_type/${id}`, method: 'DELETE' };
			},
			invalidatesTags: ['service_type'],
		})
	})
});

export const {
	useCreateServiceTypeMutation,
	useGetAllServiceTypeQuery,
	useGetOneServiceTypeQuery,
	useDeleteServiceTypeMutation,
	useUpdateServiceTypeMutation
} = serviceTypeApi;

export default serviceTypeApi;