import {
	ExpenseSummary,
	Product,
	PurchaseSummary,
	SalesSummary,
} from "../prismaTypes";

export interface ExpenseByCategorySummary {
	expenseByCategorySummaryId: string;
	catgory: string;
	amount: string;
	date: string;
}

export interface DashboardMetrics {
	popularProducts: Product[];
	salesSummary: SalesSummary[];
	purchaseSummary: PurchaseSummary[];
	expenseSummary: ExpenseSummary[];
	expenseByCategorySummary: ExpenseByCategorySummary[];
}
