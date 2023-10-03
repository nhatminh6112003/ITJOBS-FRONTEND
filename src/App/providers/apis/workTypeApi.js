import { createApi } from '@reduxjs/toolkit/query/react';
import baseQueryWithUser from '../fetchBaseQuery';

const workTypeApi = createApi({
	reducerPath: 'workTypeApi',
	baseQuery: baseQueryWithUser,
	tagTypes: ['work_type'],
	endpoints: (build) => ({
		getAllWorkType: build.query({
			query: () => {
				return { url: `/work_type/`, method: 'GET' };
			},
			providesTags: ['work_type'],
			transformResponse: (response) => response.data
		})
	})
});

export const { useGetAllWorkTypeQuery } = workTypeApi;

export default workTypeApi;
