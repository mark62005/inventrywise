import { IProduct, TNewProduct } from "@/types/api/products";
import { baseApi } from "./baseApi";

export const productsApi = baseApi.injectEndpoints({
	endpoints: (builder) => ({
		getProductsWith: builder.query<IProduct[], { searchQuery?: string }>({
			query: ({ searchQuery }) => ({
				url: "/products",
				params:
					searchQuery && searchQuery.trim() !== ""
						? { search: searchQuery.trim() }
						: {},
			}),
			providesTags: ["Products"],
		}),

		createNewProductWith: builder.mutation<IProduct, TNewProduct>({
			query: (newProduct: TNewProduct) => ({
				url: "/products",
				method: "POST",
				body: newProduct,
			}),
			invalidatesTags: ["Products"],
		}),
	}),
});

export const { useGetProductsWithQuery, useCreateNewProductWithMutation } =
	productsApi;
