import {
	IExpenseByCategorySummary,
	IExpenseCategory,
	IExpenseSums,
	ISalesSummary,
} from "@/types/api/dashboardMetrics";
import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
	return twMerge(clsx(inputs));
}

/* SALES SUMMARY */
export function getTotalValueSumFor(salesSummary: ISalesSummary[]): number {
	return salesSummary.reduce((acc, curr) => acc + curr.totalValue, 0) || 0;
}

export function getAvgChangePercentageFor(
	salesSummary: ISalesSummary[]
): number {
	return (
		salesSummary.reduce((acc, curr, _, array) => {
			return acc + curr.changePercentage! / array.length;
		}, 0) || 0
	);
}

export function getHighestValueSaleFor(
	salesSummary: ISalesSummary[]
): ISalesSummary {
	return salesSummary.reduce((acc, curr) => {
		return acc.totalValue > curr.totalValue ? acc : curr;
	}, salesSummary[0] || {});
}

export function getFormattedDateFor(highestValueSaleDate?: string): string {
	return highestValueSaleDate
		? new Date(highestValueSaleDate).toLocaleDateString("en-US", {
				month: "numeric",
				day: "numeric",
				year: "2-digit",
			})
		: "N/A";
}

/* EXPENSE SUMMARY */
export function getExpenseSumsFor(
	expenseByCategorySummary: IExpenseByCategorySummary[]
): IExpenseSums {
	return expenseByCategorySummary.reduce(
		(acc: IExpenseSums, item: IExpenseByCategorySummary): IExpenseSums => {
			const category = item.category + " Expenses";
			const amount = parseInt(item.amount, 10);

			if (!acc[category]) {
				acc[category] = 0;
			}

			acc[category] += amount;

			console.log("cat ", category);

			return acc;
		},
		{}
	);
}

export function getTotalExpensesFor(expenseCategories: IExpenseCategory[]) {
	return expenseCategories.reduce(
		(acc, category: { value: number }) => acc + category.value,
		0
	);
}
