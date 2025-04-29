import { IExpenseByCategorySummary } from "@/types/api/dashboardMetrics";
import { baseApi } from "./baseApi";
import { expensesAdapter } from "../slices/expenseSlice";
import { EntityState } from "@reduxjs/toolkit";

export const expensesApi = baseApi.injectEndpoints({
	endpoints: (builder) => ({
		getExpensesByCategory: builder.query<
			EntityState<IExpenseByCategorySummary, string>,
			void
		>({
			query: () => "/expenses",
			transformResponse: (response: IExpenseByCategorySummary[]) => {
				return expensesAdapter.setAll(
					expensesAdapter.getInitialState(),
					response
				);
			},
			providesTags: ["Expenses"],
		}),
	}),
});

export const { useGetExpensesByCategoryQuery } = expensesApi;
