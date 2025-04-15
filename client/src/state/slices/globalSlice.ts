import { createSlice } from "@reduxjs/toolkit";
import { RootState } from "../redux";

interface IGlobalSliceInitialState {
	isSidebarCollapsed: boolean;
	isDarkMode: boolean;
}

export const initialState: IGlobalSliceInitialState = {
	isSidebarCollapsed: false,
	isDarkMode: false,
};

export const globalSlice = createSlice({
	name: "global",
	initialState,
	reducers: {
		toggleSidebarCollapsed: (state) => {
			state.isSidebarCollapsed = !state.isSidebarCollapsed;
		},
		toggleDarkMode: (state) => {
			state.isDarkMode = !state.isDarkMode;
		},
	},
});

export const { toggleSidebarCollapsed, toggleDarkMode } = globalSlice.actions;

export function selectIsSidebarCollapsed(state: RootState): boolean {
	return state.global.isSidebarCollapsed;
}

export function selectIsDarkMode(state: RootState): boolean {
	return state.global.isDarkMode;
}

export default globalSlice.reducer;
