import { createApi } from '@reduxjs/toolkit/query/react';
import baseQueryWithUser from '../fetchBaseQuery';

const cvTemplateApi = createApi({
	reducerPath: 'cvTemplateApi',
	baseQuery: baseQueryWithUser,
	endpoints: (build) => ({
		getAllTemplate: build.query({
			query: () => {
				return { url: `/cv_template`, method: 'GET' };
			},
			transformResponse: (response) => response.data
		}),
		getOne: build.query({
			query: (id) => {
				return { url: `/cv_template/${id}`, method: 'GET' };
			}
		})
	})
});

export const { useGetAllTemplateQuery, useGetOneQuery } = cvTemplateApi;

export default cvTemplateApi;
