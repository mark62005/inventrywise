import { createSelector } from "@reduxjs/toolkit";
import { parseISO } from "date-fns";
import { expensesApi } from "../apis/expensesApi";
import { IExpenseByCategorySummary } from "@/types/api/dashboardMetrics";
import { IAggregatedDataItem } from "@/types/app/expenses";
import { expensesAdapter } from "../slices/expenseSlice";
import { RootState } from "../redux";

export const selectExpensesResult =
	expensesApi.endpoints.getExpensesByCategory.select();

export const selectExpensesdata = createSelector(
	selectExpensesResult,
	(result) => result.data ?? expensesAdapter.getInitialState()
);

export const {
	selectAll: selectAllExpenses,
	selectById: selectExpenseById,
	selectEntities: selectExpensesEntities,
} = expensesAdapter.getSelectors((state: RootState) =>
	selectExpensesdata(state)
);

export const selectFilteredAggregatedExpenses = (
	selectedCategory: string,
	startDate?: string,
	endDate?: string
) => {
	return createSelector(
		selectAllExpenses,
		(expenses: IExpenseByCategorySummary[]): IAggregatedDataItem[] => {
			const filtered = expenses
				.filter((data: IExpenseByCategorySummary) => {
					const matchesCategory =
						selectedCategory === "All" || data.category === selectedCategory;

					const dataDate = getParsedDate(data.date);

					const matchesDate =
						!startDate ||
						!endDate ||
						(dataDate >= startDate && dataDate <= endDate);

					return matchesCategory && matchesDate;
				})
				.reduce(
					(
						acc: Record<string, IAggregatedDataItem>,
						data: IExpenseByCategorySummary
					) => {
						const amount = parseInt(data.amount);

						if (!acc[data.category]) {
							acc[data.category] = {
								name: data.category,
								amount: 0,
								color: stringToColor(data.category),
							};
						}

						acc[data.category].amount += amount;
						return acc;
					},
					{}
				);

			return Object.values(filtered);
		}
	);
};

/* HELPER FUNCTIONS */
function getParsedDate(dateString: string): string {
	return parseISO(dateString).toISOString().split("T")[0];
}

function stringToColor(str: string): string {
	let hash = 0;
	for (let i = 0; i < str.length; i++) {
		hash = str.charCodeAt(i) + ((hash << 5) - hash);
	}
	const color = Math.floor(Math.abs(hash) % 16777215).toString(16);

	return `#${"000000".substring(0, 6 - color.length)}${color}`;
}
