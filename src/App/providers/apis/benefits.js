import { createApi } from '@reduxjs/toolkit/query/react';
import baseQueryWithAdmin from '../fetchBaseQueryAdmin';

const benefitsApi = createApi({
	reducerPath: 'benefits',
	baseQuery: baseQueryWithAdmin,
	endpoints: (build) => ({
		getAllBenefits: build.query({
			query: (arg) => {
				return { url: `/benefits`, method: 'GET', params: arg?.params };
			},
			providesTags: ['benefits'],
			transformResponse: (response) => response
		}),
		getOneBenefits: build.query({
			query: (id) => {
				return { url: `/benefits/${id}`, method: 'GET' };
			},
			providesTags: ['benefits'],
			transformResponse: (response) => response.data
		}),
		createBenefits: build.mutation({
			query: (payload) => {
				return { url: `/benefits`, method: 'POST', body: payload };
			},
			invalidatesTags: ['benefits'],
		}),
		updateBenefits: build.mutation({
			query: ({ id, payload }) => {
				return { url: `/benefits/${id}`, method: 'PATCH', body: payload };
			},
			invalidatesTags: ['benefits'],
		}),
		deleteBenefits: build.mutation({
			query: (id) => {
				return { url: `/benefits/${id}`, method: 'DELETE' };
			},
			invalidatesTags: ['benefits'],
		})
	})
});

export const {
	useCreateBenefitsMutation,
	useGetAllBenefitsQuery,
	useGetOneBenefitsQuery,
	useDeleteBenefitsMutation,
	useUpdateBenefitsMutation
} = benefitsApi;

export default benefitsApi;