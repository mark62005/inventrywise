export interface IProduct {
	id: string;
	name: string;
	price: number;
	rating?: number;
	stockQuantity: number;
}

export interface ISalesSummary {
	id: string;
	totalValue: number;
	changePercentage?: number;
	date: string;
}

export interface IPurchaseSummary {
	id: string;
	totalPurchased: number;
	changePercentage?: number;
	date: string;
}

export interface IExpenseSummary {
	id: string;
	totalExpenses: number;
	date: string;
}

export interface IExpenseByCategorySummary {
	id: string;
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
