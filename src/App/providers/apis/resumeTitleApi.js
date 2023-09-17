import { createApi } from '@reduxjs/toolkit/query/react';
import baseQueryWithUser from '../fetchBaseQuery';

const resumeTitleApi = createApi({
	reducerPath: 'resumeTitleApi',
	baseQuery: baseQueryWithUser,
	tagTypes: ['resume_title'],
	endpoints: (build) => ({
		getOneResumeTitle: build.query({
			query: (id) => {
				return { url: `/resume_title/${id}`, method: 'GET' };
			},
			providesTags: ['resume_title'],
			transformResponse: (response) => response.data
		}),
		updateResumeTitle: build.mutation({
			query: ({ id, payload }) => {
				return { url: `/resume_title/${id}`, method: 'PATCH', body: payload };
			},
			invalidatesTags: ['resume_title']
		})
	})
});

export const { useUpdateResumeTitleMutation, useGetOneResumeTitleQuery } = resumeTitleApi;

export default resumeTitleApi;
