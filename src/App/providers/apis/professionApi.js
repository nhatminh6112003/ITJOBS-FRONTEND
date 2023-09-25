import { createApi } from '@reduxjs/toolkit/query/react';
import fetchBaseQueryAdmin from '../fetchBaseQueryAdmin';

const professionApi = createApi({
	reducerPath: 'profession',
	baseQuery: fetchBaseQueryAdmin,
	endpoints: (build) => ({
		getAllProfession: build.query({
			query: (arg) => {
				return { url: `/profession`, method: 'GET', params: arg.params };
			},
			providesTags: ['profession'],
			transformResponse: (response) => response
		}),
		getOneProfession: build.query({
			query: (id) => {
				return { url: `/profession/${id}`, method: 'GET' };
			},
			providesTags: ['profession'],
			transformResponse: (response) => response.data
		}),
		createProfession: build.mutation({
			query: (payload) => {
				return { url: `/profession`, method: 'POST', body: payload };
			},
			invalidatesTags: ['profession']
		}),
		updateProfession: build.mutation({
			query: ({ id, payload }) => {
				return { url: `/profession/${id}`, method: 'PATCH', body: payload };
			},
			invalidatesTags: ['profession']
		}),
		deleteProfession: build.mutation({
			query: (id) => {
				return { url: `/profession/${id}`, method: 'DELETE' };
			},
			invalidatesTags: ['profession']
		})
	})
});

export const {
	useGetAllProfessionQuery,
	useGetOneProfessionQuery,
	useCreateProfessionMutation,
	useUpdateProfessionMutation,
	useDeleteProfessionMutation
} = professionApi;

export default professionApi;
