"use client";

import { useGetProductsWithQuery } from "@/state/apis/productsApi";
import { INVENTORY_COL_CONFIG } from "@/lib/constants";
import { DataGrid } from "@mui/x-data-grid";
import PageTitle from "@/components/shared/PageTitle";

function InventoryPage() {
	const {
		data: products,
		isLoading,
		isError,
	} = useGetProductsWithQuery({
		searchQuery: undefined,
	});

	if (isLoading) {
		return <div className="py-4">Loading...</div>;
	}

	if (isError || !products) {
		return (
			<div className="text-center text-red-500 py-4">
				Error fetching products.
			</div>
		);
	}

	return (
		<div className="flex flex-col">
			<PageTitle name="Inventory" />

			<DataGrid
				rows={products}
				columns={INVENTORY_COL_CONFIG}
				getRowId={(row) => row.id}
				checkboxSelection
				className="bg-gray-50 shadow rounded-lg border border-gray-200 mt-5 !text-gray-700"
			/>
		</div>
	);
}
export default InventoryPage;
