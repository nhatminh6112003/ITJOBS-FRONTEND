import { combineReducers } from '@reduxjs/toolkit';
import authApi from './apis/authApi';
import authSlice from './slices/authSlice';
import themeSlice from './slices/ThemeSlice';
import userApi from './apis/userApi';
import cvTemplateApi from './apis/cvTemplateApi';
import resumeTemplateApi from './apis/resumeTemplateApi';
import resumeTitleApi from './apis/resumeTitleApi';
import resumeReferApi from './apis/resumeReferApi';
import jobPositionCategoryApi from './apis/jobPositionCategoryApi';
import jobWelfareApi from './apis/jobWelfareApi';
import professionApi from './apis/professionApi';
import resumeEducationApi from './apis/resumeEducation';
import resumeCertificateApi from './apis/resumeCertificate';
import resumeObjectiveApi from './apis/resumeObjectiveApi';
import resumeActivityApi from './apis/resumeAcitivity';
import resumeExperienceApi from './apis/resumeExperienceApi';
import workTypeApi from './apis/workTypeApi';
const rootReducer = combineReducers({
	[authSlice.name]: authSlice.reducer,
	[themeSlice.name]: themeSlice.reducer,
	[authApi.reducerPath]: authApi.reducer,
	[userApi.reducerPath]: userApi.reducer,
	[cvTemplateApi.reducerPath]: cvTemplateApi.reducer,
	[resumeTemplateApi.reducerPath]: resumeTemplateApi.reducer,
	[resumeTitleApi.reducerPath]: resumeTitleApi.reducer,
	[resumeReferApi.reducerPath]: resumeReferApi.reducer,
	[jobPositionCategoryApi.reducerPath]: jobPositionCategoryApi.reducer,
	[jobWelfareApi.reducerPath]: jobWelfareApi.reducer,
	[professionApi.reducerPath]: professionApi.reducer,
	[resumeEducationApi.reducerPath]: resumeEducationApi.reducer,
	[resumeCertificateApi.reducerPath]: resumeCertificateApi.reducer,
	[resumeObjectiveApi.reducerPath]: resumeObjectiveApi.reducer,
	[resumeActivityApi.reducerPath]: resumeActivityApi.reducer,
	[resumeExperienceApi.reducerPath]: resumeExperienceApi.reducer,
	[workTypeApi.reducerPath]: workTypeApi.reducer
});

export default rootReducer;
