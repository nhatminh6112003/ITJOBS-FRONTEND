import { createApi } from '@reduxjs/toolkit/query/react';
import baseQueryWithUser from '../fetchBaseQuery';

const resumeCertificateApi = createApi({
	reducerPath: 'resumeCertificateApi',
	baseQuery: baseQueryWithUser,
	tagTypes: ['resume_certificate'],
	endpoints: (build) => ({
		getAllCertificate: build.query({
			query: (id) => {
				return { url: `/resume_certificate/getAll/${id}`, method: 'GET' };
			},
			providesTags: ['resume_certificate'],
			transformResponse: (response) => response.data
		}),
		getOneResumeCertificate: build.query({
			query: (id) => {
				return { url: `/resume_certificate/${id}`, method: 'GET' };
			},
			providesTags: ['resume_certificate'],
			transformResponse: (response) => response.data
		}),
		createResumeCertificate: build.mutation({
			query: (payload) => {
				return { url: `/resume_certificate`, method: 'POST', body: payload };
			},
			invalidatesTags: ['resume_certificate']
		}),
		updateResumeCertificate: build.mutation({
			query: ({ id, payload }) => {
				return { url: `/resume_certificate/${id}`, method: 'PATCH', body: payload };
			},
			invalidatesTags: ['resume_certificate']
		}),
		deleteResumeCertificate: build.mutation({
			query: (id) => {
				return { url: `/resume_certificate/${id}`, method: 'DELETE' };
			},
			invalidatesTags: ['resume_certificate']
		})
	})
});

export const {
	useCreateResumeCertificateMutation,
	useDeleteResumeCertificateMutation,
	useGetAllCertificateQuery,
	useGetOneResumeCertificateQuery,
	useLazyGetOneResumeCertificateQuery,
	useUpdateResumeCertificateMutation
} = resumeCertificateApi;

export default resumeCertificateApi;
