import { createEntityAdapter } from "@reduxjs/toolkit";
import { IExpenseByCategorySummary } from "@/types/api/dashboardMetrics";

export const expensesAdapter = createEntityAdapter({
	selectId: (expense: IExpenseByCategorySummary) => expense.id,
	sortComparer: (a, b) => a.date.localeCompare(b.date),
});

const initialState = expensesAdapter.getInitialState();
