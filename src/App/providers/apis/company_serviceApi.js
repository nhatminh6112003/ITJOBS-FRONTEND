import { createApi } from '@reduxjs/toolkit/query/react';
import baseQueryWithAdmin from '../fetchBaseQueryAdmin';

const serviceApi = createApi({
	reducerPath: 'company_service',
	baseQuery: baseQueryWithAdmin,
	endpoints: (build) => ({
		getAllCompany_service: build.query({
			query: (arg) => {
				return { url: `/company_service`, method: 'GET', params: arg?.params };
			},
			providesTags: ['company_service'],
			transformResponse: (response) => response
		}),
		getOneCompany_service: build.query({
			query: (id) => {
				return { url: `/company_service/${id}`, method: 'GET' };
			},
			providesTags: ['company_service'],
			transformResponse: (response) => response.data
		}),
		createCompany_service: build.mutation({
			query: (payload) => {
				return { url: `/company_service`, method: 'POST', body: payload };
			},
			invalidatesTags: ['company_service'],
		}),
		updateCompany_service: build.mutation({
			query: ({ id, payload }) => {
				return { url: `/company_service/${id}`, method: 'PATCH', body: payload };
			},
			invalidatesTags: ['company_service'],
		}),
		deleteCompany_service: build.mutation({
			query: (id) => {
				return { url: `/company_service/${id}`, method: 'DELETE' };
			},
			invalidatesTags: ['company_service'],
		})
	})
});

export const {
	useCreateCompany_serviceMutation,
   useDeleteCompany_serviceMutation,
   useGetAllCompany_serviceQuery,
   useGetOneCompany_serviceQuery,
   useUpdateCompany_serviceMutation,
} = serviceApi;

export default serviceApi;