import { createSlice } from '@reduxjs/toolkit';
import authApi from '../apis/authApi';
import { UserType } from '~/App/constants/roleEnum';
const initialState = {
	user: false,
	employer: false,
	admin: false
};
const authSlice = createSlice({
	name: 'auth',
	reducers: {
		logout: (state, { payload }) => {
			const { Role } = payload;
			state[Role] = false;
		},
		updateAccessToken(state, action) {
			state.user.accessToken = action.payload;
		},
		updateAdminAccessToken(state, action) {
			state.admin.accessToken = action.payload;
		}
	},
	initialState: initialState,
	extraReducers: (build) => {
		build.addMatcher(authApi.endpoints.login.matchFulfilled, (state, { payload }) => {
			if (payload.isSuccess) {
				const { data } = payload;

				const roleKey = UserType[data.user_type_id];
				return {
					...state,
					[roleKey]: roleKey ? data : false
				};
			}
		});
	}
});

export const { logout, updateAccessToken,updateAdminAccessToken } = authSlice.actions;
export default authSlice;
