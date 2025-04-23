"use client";

import { ChangeEvent } from "react";
import { useAppDispatch, useAppSelector } from "@/state/redux";
import {
	useCreateNewProductWithMutation,
	useGetProductsWithQuery,
} from "@/state/apis/productsApi";
import {
	selectIsModalOpen,
	selectSearchQuery,
	setSearchQuery,
	toggleModalOpen,
} from "@/state/slices/productSlice";
import { IProductFormData } from "@/types/app/forms/product-forms";
import { PlusCircleIcon, SearchIcon } from "lucide-react";
import PageTitle from "@/components/shared/PageTitle";
import Rating from "@/components/shared/Rating";
import CreateProductModal from "@/components/products/CreateProductModal";
import Button from "@/components/shared/Button";

function ProductsPage() {
	const dispatch = useAppDispatch();
	const searchQuery = useAppSelector(selectSearchQuery);
	const isModalOpen = useAppSelector(selectIsModalOpen);

	const {
		data: products,
		isLoading,
		isError,
	} = useGetProductsWithQuery({ searchQuery });

	const [createNewProductWith, { isLoading: isSubmitLoading }] =
		useCreateNewProductWithMutation();

	const initialData: IProductFormData = {
		name: "",
		price: 0,
		stockQuantity: 0,
		rating: 0,
	};

	function handleSearchQueryChange(e: ChangeEvent<HTMLInputElement>): void {
		dispatch(setSearchQuery(e.target.value.trim()));
	}

	function handleToggleOpenButtonClick() {
		dispatch(toggleModalOpen());
	}

	async function handleCreateProduct(productData: IProductFormData) {
		await createNewProductWith(productData);
	}

	if (isLoading) {
		return <div className="py-4">Loading...</div>;
	}

	if (isError || !products) {
		return (
			<div className="text-center text-red-500 py-4">
				Failed to fetch products
			</div>
		);
	}

	return (
		<div className="mx-auto pb-5 w-full">
			{/* SEARCH BAR */}
			<div className="mb-6">
				<div className="flex items-center border-2 border-gray-200 rounded">
					<SearchIcon className="w-5 h-5 text-gray-500 m-2" />

					<input
						className="w-full py-2 px-4 rounded bg-white"
						placeholder="Search products..."
						value={searchQuery}
						onChange={handleSearchQueryChange}
					/>
				</div>
			</div>

			{/* HEADER BAR */}
			<div className="flex justify-between items-center mb-6">
				<PageTitle name="Products" />

				<Button
					onClick={handleToggleOpenButtonClick}
					className="flex items-center justify-center gap-2"
				>
					<PlusCircleIcon className="w-5 h-5 !text-gray-100" /> Create Product
				</Button>
			</div>

			{/* BODY PRODUCTS LIST */}
			<div className="grid grid-cols-1 sm:grid-cols-2 lg-grid-cols-3 gap-10 justify-between">
				{isLoading ? (
					<div>Loading...</div>
				) : (
					products.map((product) => (
						<div
							key={product.id}
							className="border shadow rounded-md p-4 max-w-full w-full mx-auto"
						>
							<div className="flex flex-col items-center">
								<div>img</div>

								<h3 className="text-lg text-gray-900 font-semibold">
									{product.name}
								</h3>

								<p className="text-gray-800">${product.price.toFixed(2)}</p>

								<div className="text-sm text-gray-600 mt-1">
									Stock: {product.stockQuantity}
								</div>

								<div className="flex items-center mt-2">
									<Rating rating={product.rating || 0} />
								</div>
							</div>
						</div>
					))
				)}
			</div>

			{/* MODAL */}
			<CreateProductModal
				initiatialData={initialData}
				isOpen={isModalOpen}
				isLoading={isSubmitLoading}
				onSubmit={handleCreateProduct}
			/>
		</div>
	);
}
export default ProductsPage;
