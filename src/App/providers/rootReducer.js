import { combineReducers } from '@reduxjs/toolkit';
import authApi from './apis/authApi';
import authSlice from './slices/authSlice';
import userApi from './apis/userApi';
const rootReducer = combineReducers({
	[authSlice.name]: authSlice.reducer,
	[authApi.reducerPath]: authApi.reducer,
	[userApi.reducerPath]: userApi.reducer
});

export default rootReducer;
