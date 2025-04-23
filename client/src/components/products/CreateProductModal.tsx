"use client";

import { ChangeEvent, FormEvent, useState } from "react";
import { ProductModalProps } from "@/types/app/components";
import PageTitle from "../shared/PageTitle";
import { IProductFormData } from "@/types/app/forms/product-forms";
import { useAppDispatch } from "@/state/redux";
import { toggleModalOpen } from "@/state/slices/productSlice";
import Button from "../shared/Button";

const LABEL_CLASSNAME = "block text-sm font-medium text-gray-700" as const;
const INPUT_CLASSNAME =
	"block w-full mb-2 p-2 border-gray-500 border-2 rounded-md" as const;

function CreateProductModal({
	initiatialData,
	isOpen,
	isLoading,
	onSubmit,
}: ProductModalProps) {
	const [formData, setFormData] = useState<IProductFormData>(initiatialData);

	const dispatch = useAppDispatch();

	function onClose() {
		dispatch(toggleModalOpen());
	}

	function handleFieldChange(e: ChangeEvent<HTMLInputElement>): void {
		const { name, value } = e.target;

		setFormData({
			...formData,
			[name]: name === "name" ? value : parseFloat(value),
		});
	}

	function handleSubmit(e: FormEvent<HTMLFormElement>) {
		e.preventDefault();

		onSubmit(formData);
		onClose();
	}

	if (!isOpen) return null;

	return (
		<div className="fixed inset-0 bg-gray-600/50 overflow-y-auto h-full w-full z-20">
			<div className="relative top-1/5 mx-auto p-5 border w-96 shadow-lg rounded-md bg-white">
				<PageTitle name="Create New Product" />

				<form
					onSubmit={handleSubmit}
					className="mt-5"
				>
					{/* PRODUCT NAME */}
					<label
						htmlFor="productName"
						className={LABEL_CLASSNAME}
					>
						Product Name
					</label>
					<input
						id="productName"
						type="text"
						name="name"
						placeholder="Name"
						minLength={1}
						onChange={handleFieldChange}
						value={formData.name}
						className={INPUT_CLASSNAME}
						required
					/>

					{/* PRICE */}
					<label
						htmlFor="productPrice"
						className={LABEL_CLASSNAME}
					>
						Price
					</label>
					<input
						id="productPrice"
						type="number"
						name="price"
						placeholder="Price"
						min={0}
						onChange={handleFieldChange}
						value={formData.price}
						className={INPUT_CLASSNAME}
						required
					/>

					{/* STOCK QUANTITY */}
					<label
						htmlFor="stockQuantity"
						className={LABEL_CLASSNAME}
					>
						Stock Quantity
					</label>
					<input
						id="stockQuantity"
						type="number"
						name="stockQuantity"
						placeholder="Stock Quantity"
						min={0}
						onChange={handleFieldChange}
						value={formData.stockQuantity}
						className={INPUT_CLASSNAME}
						required
					/>

					{/* RATING */}
					<label
						htmlFor="rating"
						className={LABEL_CLASSNAME}
					>
						Rating
					</label>
					<input
						id="rating"
						type="number"
						name="rating"
						placeholder="Rating"
						min={0}
						max={5}
						onChange={handleFieldChange}
						value={formData.rating}
						className={INPUT_CLASSNAME}
						required
					/>

					{/* CREATE ACTIONS */}
					<div className="flex justify-end items-center gap-4 mt-4">
						<Button
							type="submit"
							disabled={formData.name.trim() === "" || isLoading}
						>
							Create
						</Button>

						<Button
							variant="secondary"
							onClick={onClose}
						>
							Cancel
						</Button>
					</div>
				</form>
			</div>
		</div>
	);
}
export default CreateProductModal;
