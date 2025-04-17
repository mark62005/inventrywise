import { LucideIcon } from "lucide-react";
import { IProduct } from "@/types/api/products";

/* GENERAL */
export interface PageTitleProps {
	name: string;
}

/* POPULAR PRODUCTS */
export interface PopularProductCardProps {
	product: IProduct;
}

export type RatingProps = Pick<IProduct, "rating">;

/* STAT CARD */
export interface StatDetail {
	title: string;
	amount: string;
	changePercentage: number;
}

export interface StatCardProps {
	title: string;
	PrimaryIcon: LucideIcon;
	details: StatDetail[];
	dateRange: string;
}
