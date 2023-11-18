import { configureStore } from '@reduxjs/toolkit';
import storage from 'redux-persist/lib/storage';
import { FLUSH, PAUSE, PERSIST, persistReducer, persistStore, PURGE, REGISTER, REHYDRATE } from 'redux-persist';

import RTKQueryLogger from './middlewares/RTKQueryLogger';

// APIs
import rootReducer from './rootReducer';
import authApi from './apis/authApi';
import userApi from './apis/userApi';
import resumeTemplateApi from './apis/resumeTemplateApi';
import cvTemplateApi from './apis/cvTemplateApi';
import resumeTitleApi from './apis/resumeTitleApi';
import resumeReferApi from './apis/resumeReferApi';
import jobPositionCategoryApi from './apis/jobPositionCategoryApi';
import jobWelfareApi from './apis/jobWelfareApi';
import professionApi from './apis/professionApi';
import resumeEducationApi from './apis/resumeEducation';
import resumeSkillApi from './apis/resumeSkill';
import resumeCertificateApi from './apis/resumeCertificate';
import resumeObjectiveApi from './apis/resumeObjectiveApi';
import resumeActivityApi from './apis/resumeAcitivity';
import resumeExperienceApi from './apis/resumeExperienceApi';
import resumeAddioninfoApi from './apis/resumeAddioninfo';
import resumeLanguageApi from './apis/resumeLanguageApi';
import workTypeApi from './apis/workTypeApi';
import resumeDesiredJobApi from './apis/resumeDesiredJobApi';
import listProvincesApi from './apis/listProvincesApi';
import districtsApi from './apis/districtsApi';
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
import feedBackApi from './apis/feedbackApi';

const persistConfig = {
	key: 'root',
	storage,
	whitelist: ['auth', 'theme']
};

const persistedReducer = persistReducer(persistConfig, rootReducer); // Provide a way to combine redux's root reducer

const store = configureStore({
	reducer: persistedReducer,
	middleware: (getDefaultMiddleware) =>
		getDefaultMiddleware({
			serializableCheck: {
				ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER]
			}
		}).concat([
			authApi.middleware,
			userApi.middleware,
			resumeTemplateApi.middleware,
			cvTemplateApi.middleware,
			resumeTitleApi.middleware,
			resumeReferApi.middleware,
			jobPositionCategoryApi.middleware,
			jobWelfareApi.middleware,
			professionApi.middleware,
			resumeEducationApi.middleware,
			resumeSkillApi.middleware,
			resumeCertificateApi.middleware,
			resumeObjectiveApi.middleware,
			resumeActivityApi.middleware,
			resumeExperienceApi.middleware,
			resumeAddioninfoApi.middleware,
			resumeDesiredJobApi.middleware,
			resumeLanguageApi.middleware,
			workTypeApi.middleware,
			listProvincesApi.middleware,
			districtsApi.middleware,
			myAttachApi.middleware,
			companyApi.middleware,
			resumeProfileApi.middleware,
			jobPostApi.middleware,
			resumeApi.middleware,
			jobPostActivityApi.middleware,
			benefitsApi.middleware,
			employerResumeApi.middleware,
			serviceApi.middleware,
			serviceTypeApi.middleware,
			jobSavedApi.middleware,
			feedBackApi.middleware,
			// logger middleware
			RTKQueryLogger
		])
});

export const persistor = persistStore(store); // Save every thing of redux store in localstorage
export default store;
