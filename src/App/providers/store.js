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



const persistConfig = {
	key: 'root',
	storage,
	whitelist: ['auth','theme']
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
			// logger middleware
			RTKQueryLogger
		])
});

export const persistor = persistStore(store); // Save every thing of redux store in localstorage
export default store;
