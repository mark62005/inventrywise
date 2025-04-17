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
	category: string;
	amount: string;
	date: string;
}

export interface IDashboardMetrics {
	popularProducts: IProduct[];
	salesSummary: ISalesSummary[];
	purchaseSummary: IPurchaseSummary[];
	expenseSummary: IExpenseSummary[];
	expenseByCategory: IExpenseByCategorySummary[];
}

export type IExpenseSums = {
	[category: string]: number;
};

export interface IExpenseCategory {
	name: string;
	value: number;
}
