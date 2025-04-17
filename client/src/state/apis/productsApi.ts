import { IProduct } from "@/types/api/products";
import { baseApi } from "./baseApi";

export const productsApi = baseApi.injectEndpoints({
	endpoints: (builder) => ({
		getProductsWith: builder.query<IProduct[], { searchQuery?: string }>({
			query: ({ searchQuery }) => ({
				url: "/products",
				params: searchQuery ? { search: searchQuery.trim() } : {},
			}),
			providesTags: ["Products"],
		}),
	}),
});

export const {} = productsApi;
