import { createApi } from '@reduxjs/toolkit/query/react';
import baseQueryWithUser from '../fetchBaseQuery';
const companyApi = createApi({
	reducerPath: 'companyApi',
	baseQuery: baseQueryWithUser,
	endpoints: (build) => ({
		getAllCompany: build.query({
			query: (payload) => {
				return { url: '/company', method: 'GET', body: payload };
			},
			providesTags: ['company']
		}),
		getOneCompany: build.query({
			query: (id) => {
				return { url: `/company/${id}`, method: 'GET' };
			},
			providesTags: ['company']
		}),
		createCompany: build.mutation({
			query: (payload) => {
				return { url: '/company', method: 'POST', body: payload };
			},
			invalidatesTags: ['company']
		}),
		updateCompany: build.mutation({
			query: ({ id, payload }) => {
				return { url: `/company/${id}`, method: 'PATCH', body: payload };
			},
			invalidatesTags: ['company']
		}),
		deleteCompany: build.mutation({
			query: (id) => {
				return { url: `/company/${id}`, method: 'DELETE' };
			},
			invalidatesTags: ['company']
		})
	})
});

export const {
	useGetAllCompanyQuery,
	useCreateCompanyMutation,
	useUpdateCompanyMutation,
	useDeleteCompanyMutation,
	useGetOneCompanyQuery
} = companyApi;

export default companyApi;
