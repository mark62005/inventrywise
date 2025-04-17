import { IProduct } from "../api/dashboardMetrics";

/* POPULAR PRODUCTS */
export interface PopularProductCardProps {
	product: IProduct;
}

export type RatingProps = Pick<IProduct, "rating">;
