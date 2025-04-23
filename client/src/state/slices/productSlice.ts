import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "../redux";

interface IProductSliceInitialState {
	searchQuery: string;
	isModalOpen: boolean;
}

export const initialState: IProductSliceInitialState = {
	searchQuery: "",
	isModalOpen: false,
};

export const productSlice = createSlice({
	name: "products",
	initialState,
	reducers: {
		setSearchQuery: (state, action: PayloadAction<string>) => {
			state.searchQuery = action.payload.trim();
		},
		toggleModalOpen: (state) => {
			state.isModalOpen = !state.isModalOpen;
		},
	},
});

export const { setSearchQuery, toggleModalOpen } = productSlice.actions;

export function selectSearchQuery(state: RootState): string {
	return state.products.searchQuery;
}

export function selectIsModalOpen(state: RootState): boolean {
	return state.products.isModalOpen;
}

export default productSlice.reducer;
