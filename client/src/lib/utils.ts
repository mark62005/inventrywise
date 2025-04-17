import { ISalesSummary } from "@/types/api/dashboardMetrics";
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
