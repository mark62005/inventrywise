"use client";

import { useGetDashboardMetricsQuery } from "@/state/apis/dashboadMetricsApi";
import { IProduct } from "@/types/api/dashboardMetrics";
import PopularProductCard from "./PopularProductCard";

function PopularProductsSection() {
	const {
		data: dashboardMetrics,
		isLoading,
		error,
	} = useGetDashboardMetricsQuery();

	if (error || !dashboardMetrics)
		return <section>Error fetching dashboard metrics.</section>;

	return (
		<section className="row-span-3 xl:row-span-6 bg-gray-50 shadow-md rounded-2xl pb-16">
			{isLoading ? (
				<div className="m-5">Loading metrics...</div>
			) : (
				<>
					<h3 className="text-lg font-semibold px-7 pt-5 pb-2">
						Popular Products
					</h3>
					<hr />

					<div className="h-full overflow-auto">
						{dashboardMetrics.popularProducts.map((product: IProduct) => (
							<PopularProductCard
								key={product.id}
								product={product}
							/>
						))}
					</div>
				</>
			)}
		</section>
	);
}
export default PopularProductsSection;
