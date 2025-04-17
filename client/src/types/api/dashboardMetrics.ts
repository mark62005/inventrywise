export interface IProduct {
	productId: string;
	name: string;
	price: number;
	rating?: number;
	stockQuantity: number;
}

export interface ISalesSummary {
	salesSummaryId: string;
	totalValue: number;
	changePercentage?: number;
	date: string;
}

export interface IPurchaseSummary {
	purchaseSummaryId: string;
	totalPurchased: number;
	changePercentage?: number;
	date: string;
}

export interface IExpenseSummary {
	expenseSummarId: string;
	totalExpenses: number;
	date: string;
}

export interface IExpenseByCategorySummary {
	expenseByCategorySummaryId: string;
	catgory: string;
	amount: string;
	date: string;
}

export interface IDashboardMetrics {
	popularProducts: IProduct[];
	salesSummary: ISalesSummary[];
	purchaseSummary: IPurchaseSummary[];
	expenseSummary: IExpenseSummary[];
	expenseByCategorySummary: IExpenseByCategorySummary[];
}
