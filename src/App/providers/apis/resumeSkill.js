import { createApi } from '@reduxjs/toolkit/query/react';
import baseQueryWithUser from '../fetchBaseQuery';

const resumeSkillApi = createApi({
	reducerPath: 'resumeSkillApi',
	baseQuery: baseQueryWithUser,
	tagTypes: ['resume_skill'],
	endpoints: (build) => ({
		getAllSkill: build.query({
			query: (id) => {
				return { url: `/resume_skill/getAll/${id}`, method: 'GET' };
			},
			providesTags: ['resume_skill'],
			transformResponse: (response) => response.data
		}),
		getOneResumeSkill: build.query({
			query: (id) => {
				return { url: `/resume_skill/${id}`, method: 'GET' };
			},
			providesTags: ['resume_skill'],
			transformResponse: (response) => response.data
		}),
		createResumeSkill: build.mutation({
			query: (payload) => {
				return { url: `/resume_skill`, method: 'POST', body: payload };
			},
			invalidatesTags: ['resume_skill']
		}),
		updateResumeSkill: build.mutation({
			query: ({ id, payload }) => {
				return { url: `/resume_skill/${id}`, method: 'PATCH', body: payload };
			},
			invalidatesTags: ['resume_skill']
		}),
		deleteResumeSkill: build.mutation({
			query: (id) => {
				return { url: `/resume_skill/${id}`, method: 'DELETE' };
			},
			invalidatesTags: ['resume_skill']
		})
	})
});

export const {
	useCreateResumeSkillMutation,
	useDeleteResumeSkillMutation,
	useGetAllSkillQuery,
	useGetOneResumeSkillQuery,
	useLazyGetOneResumeSkillQuery,
	useUpdateResumeSkillMutation
} = resumeSkillApi;

export default resumeSkillApi;
