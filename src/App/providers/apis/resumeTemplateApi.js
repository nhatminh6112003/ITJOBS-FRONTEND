import { createApi } from '@reduxjs/toolkit/query/react';
import baseQueryWithUser from '../fetchBaseQuery';

const resumeTemplateApi = createApi({
	reducerPath: 'resumeTemplateApi',
	baseQuery: baseQueryWithUser,
	endpoints: (build) => ({
		getOne: build.query({
			query: (id) => {
				return { url: `/resume_template/${id}`, method: 'GET' };
			},
			transformResponse: (response) => {
				const {
					id,
					cvTemplate: { color_pick }
				} = response.data;
				const covertData = {
					...response.data,
					id: Number(id),
					color_pick: JSON.parse(color_pick)
				};
				return covertData;
			}
		}),
		changeTemplate: build.mutation({
			query: ({ id, payload }) => {
				return { url: `/resume_template/update-template/${id}`, method: 'PATCH', body: payload };
			}
		}),
		updateUi: build.mutation({
			query: ({ id, payload }) => {
				return { url: `/resume_template/update-ui-cv/${id}`, method: 'PATCH', body: payload };
			}
		})
	})
});

export const { useGetOneQuery, useChangeTemplateMutation, useUpdateUiMutation } = resumeTemplateApi;

export default resumeTemplateApi;
