import { createApi } from '@reduxjs/toolkit/query/react';
import baseQueryWithAdmin from '../fetchBaseQueryAdmin';
const listProvincesApi = createApi({
	reducerPath: 'Provinces',
	baseQuery: baseQueryWithAdmin,
	endpoints: (build) => ({
		getAllProvinces: build.query({
			query: (arg) => {
				return { url: `https://provinces.open-api.vn/api/p/`, method: 'GET', params: arg.params };
			},
			providesTags: ['Provinces'],
			transformResponse: (response) => response
		})
	})
});

export const { useGetAllProvincesQuery } = listProvincesApi;

export default listProvincesApi;
