import { createSlice } from '@reduxjs/toolkit';

const authSlice = createSlice({
	name: 'auth',
	initialState: {
		login: {
			currentUser: null,
			isFetching: false,
			error: false
		},
		logout: {
			isFetching: false,
			error: false
		}
	},
	reducers: {
		loginStart(state) {
			state.login.isFetching = true;
		},
		loginSuccess(state, action) {
			state.login.isFetching = false;
			state.login.currentUser = action.payload;
			state.login.error = false;
		},
		loginFailed(state) {
			state.login.isFetching = false;
			state.login.error = true;
		},
		logoutSuccess(state) {
			state.login.isFetching = false;
			state.login.currentUser = null;
			state.logout.error = false;
		},
		logoutFailed(state) {
			state.login.isFetching = false;
			state.logout.error = true;
		},
		updateAccessToken(state, action) {
			state.login.currentUser.accessToken = action.payload;
		}
	}
});
export const { loginStart, loginSuccess, loginFailed, updateAccessToken, logoutSuccess, logoutFailed } =
	authSlice.actions;

export default authSlice.reducer;
