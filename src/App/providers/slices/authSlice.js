import { createSlice } from '@reduxjs/toolkit';
import authApi from '../apis/authApi';

const initialState = {
	isSignedIn: false,
	user: false
};
const authSlice = createSlice({
	name: 'auth',
	reducers: {
		logout: (state, { payload }) => initialState,
		updateAccessToken(state, action) {
			state.user.accessToken = action.payload;
		}
	},
	initialState: initialState,
	extraReducers: (build) => {
		build.addMatcher(authApi.endpoints.login.matchFulfilled, (state, { payload }) => {
			if (payload.isSuccess) {
				return {
					isSignedIn: true,
					user: payload.data
				};
			}
		});
	}
});

export const { logout, updateAccessToken } = authSlice.actions;
export default authSlice;
