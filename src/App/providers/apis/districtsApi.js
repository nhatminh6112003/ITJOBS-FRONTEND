import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
const districtsApi = createApi({
	reducerPath: 'Districts',
	baseQuery: fetchBaseQuery({ baseUrl: 'https://provinces.open-api.vn/api' }),
	endpoints: (build) => ({
		getAllDistricts: build.query({
			query: (arg) => {
				const code = arg.code || '';
				return { url: `p/${code}`, method: 'GET', params: arg.params };
			},
			providesTags: ['Districts'],
			transformResponse: (response) => response
		})
	})
});

export const { useGetAllDistrictsQuery } = districtsApi;

export default districtsApi;
