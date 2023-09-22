import { createSlice } from '@reduxjs/toolkit';
const initialState = {
	mode: 'theme-mode-dark',
	color: 'theme-color-blue'
};
const themeSlice = createSlice({
	name: 'theme',
	reducers: {
		setMode: (state, action) => {
			return { ...state, mode: action.payload };
		},
		setColor(state, action) {
			return {
				...state,
				color: action.payload
			};
		}
	},
	initialState: initialState
});

export const { setMode, setColor } = themeSlice.actions;
export default themeSlice;
