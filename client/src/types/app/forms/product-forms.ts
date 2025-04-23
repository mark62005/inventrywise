import { IProduct } from "@/types/api/products";

export type IProductFormData = Omit<IProduct, "id">;
