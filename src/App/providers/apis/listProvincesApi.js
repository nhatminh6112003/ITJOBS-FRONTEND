import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
const listProvincesApi = createApi({
	reducerPath: 'Provinces',
	baseQuery: fetchBaseQuery({ baseUrl: 'https://provinces.open-api.vn/api' }),
	endpoints: (build) => ({
		getAllProvinces: build.query({
			query: () => {
				return { url: `p`, method: 'GET'};
			},
			providesTags: ['Provinces'],
			transformResponse: (response) => response
		})
	})
});

export const { useGetAllProvincesQuery } = listProvincesApi;

export default listProvincesApi;
