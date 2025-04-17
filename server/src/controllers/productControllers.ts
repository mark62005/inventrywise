import { Request, Response } from "express";
import { PrismaClient } from "../generated/prisma-client";

const prisma = new PrismaClient();

export async function getProducts(req: Request, res: Response): Promise<void> {
	try {
		const searchQuery = req.query.search?.toString().trim();

		const products = await prisma.product.findMany({
			where: {
				name: {
					contains: searchQuery,
					mode: "insensitive",
				},
			},
		});

		if (searchQuery === "" && !products) {
			res.status(404).json({ message: "Products not found." });
			return;
		}

		res.status(200).json({ data: products });
	} catch (error) {
		console.error(error);
		res.status(500).json({ message: "Error retrieving products." });
	}
}

export async function createProduct(
	req: Request,
	res: Response
): Promise<void> {
	try {
		const { name, price, rating, stockQuantity } = req.body;

		if (!name || !price || !rating || !stockQuantity) {
			res
				.status(400)
				.json({ message: "At least one of the fields is missing." });
			return;
		}

		const newProduct = await prisma.product.create({
			data: {
				name,
				price,
				rating,
				stockQuantity,
			},
		});

		console.log(`Created product with id: ${newProduct.id} successfully.`);
		res.status(200).json({ data: newProduct });
	} catch (error) {
		console.error(error);
		res.status(500).json({ message: "Error creating product." });
	}
}
