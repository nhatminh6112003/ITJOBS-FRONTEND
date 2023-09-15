import { combineReducers } from '@reduxjs/toolkit';
import authApi from './apis/authApi';
import authSlice from './slices/authSlice';
import userApi from './apis/userApi';
import cvTemplateApi from './apis/cvTemplateApi';
import resumeTemplateApi from './apis/resumeTemplateApi';
import resumeTitleApi from './apis/resumeTitleApi';
import resumeReferApi from './apis/resumeReferApi';
const rootReducer = combineReducers({
	[authSlice.name]: authSlice.reducer,
	[authApi.reducerPath]: authApi.reducer,
	[userApi.reducerPath]: userApi.reducer,
	[cvTemplateApi.reducerPath]: cvTemplateApi.reducer,
	[resumeTemplateApi.reducerPath]: resumeTemplateApi.reducer,
	[resumeTitleApi.reducerPath]: resumeTitleApi.reducer,
	[resumeReferApi.reducerPath]: resumeReferApi.reducer,



});

export default rootReducer;
