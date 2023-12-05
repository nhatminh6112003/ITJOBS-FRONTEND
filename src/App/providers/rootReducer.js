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
import resumeAddioninfoApi from './apis/resumeAddioninfo';
import resumeSkillApi from './apis/resumeSkill';
import workTypeApi from './apis/workTypeApi';
import resumeDesiredJobApi from './apis/resumeDesiredJobApi';
import listProvincesApi from './apis/listProvincesApi';
import districtsApi from './apis/districtsApi';
import resumeLanguageApi from './apis/resumeLanguageApi';
import myAttachApi from './apis/myAttachApi';
import companyApi from './apis/companyApi';
import resumeProfileApi from './apis/resumeProfileApi';
import jobPostApi from './apis/jobPostApi';
import resumeApi from './apis/resumeApi';
import jobPostActivityApi from './apis/jobPostActivityApi';
import benefitsApi from './apis/benefits';
import employerResumeApi from './apis/employerResumeApi';
import serviceApi from './apis/serviceApi';
import serviceTypeApi from './apis/serviceTypeApi';
import jobSavedApi from './apis/jobSavedApi';
import feedBackApi from './apis/feedBackApi';
import company_serviceApi from './apis/company_serviceApi';
import orderApi from './apis/orderApi';
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
	[resumeAddioninfoApi.reducerPath]: resumeAddioninfoApi.reducer,
	[workTypeApi.reducerPath]: workTypeApi.reducer,
	[resumeSkillApi.reducerPath]: resumeSkillApi.reducer,
	[resumeDesiredJobApi.reducerPath]: resumeDesiredJobApi.reducer,
	[workTypeApi.reducerPath]: workTypeApi.reducer,
	[listProvincesApi.reducerPath]: listProvincesApi.reducer,
	[districtsApi.reducerPath]: districtsApi.reducer,
	[resumeLanguageApi.reducerPath]: resumeLanguageApi.reducer,
	[myAttachApi.reducerPath]: myAttachApi.reducer,
	[companyApi.reducerPath]: companyApi.reducer,
	[resumeProfileApi.reducerPath]: resumeProfileApi.reducer,
	[jobPostApi.reducerPath]: jobPostApi.reducer,
	[resumeApi.reducerPath]: resumeApi.reducer,
	[jobPostActivityApi.reducerPath]: jobPostActivityApi.reducer,
	[benefitsApi.reducerPath]: benefitsApi.reducer,
	[employerResumeApi.reducerPath]: employerResumeApi.reducer,
	[serviceApi.reducerPath]: serviceApi.reducer,
	[serviceTypeApi.reducerPath]: serviceTypeApi.reducer,
	[jobSavedApi.reducerPath]: jobSavedApi.reducer,
	[feedBackApi.reducerPath]: feedBackApi.reducer,
	[company_serviceApi.reducerPath]: company_serviceApi.reducer,
	[orderApi.reducerPath]: orderApi.reducer,
});

export default rootReducer;
