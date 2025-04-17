import { Request, Response } from "express";
import { PrismaClient } from "../generated/prisma-client";

const prisma = new PrismaClient();

export async function getDashboardMetrics(
	req: Request,
	res: Response
): Promise<void> {
	try {
		const popularProducts = await prisma.product.findMany({
			take: 15,
			orderBy: {
				stockQuantity: "desc",
			},
		});
		const salesSummary = await prisma.salesSummary.findMany({
			take: 5,
			orderBy: {
				date: "desc",
			},
		});
		const purchaseSummary = await prisma.purchaseSummary.findMany({
			take: 5,
			orderBy: {
				date: "desc",
			},
		});
		const expenseSummary = await prisma.expenseSummary.findMany({
			take: 5,
			orderBy: {
				date: "desc",
			},
		});
		const expenseByCategorySummaryRaw = await prisma.expenseByCategory.findMany(
			{
				take: 5,
				orderBy: {
					date: "desc",
				},
			}
		);
		const expenseByCategory = expenseByCategorySummaryRaw.map((item) => ({
			...item,
			amount: item.amount.toString(),
		}));

		console.log("Retrieved dashboard metrics successfully.");
		res.json({
			data: {
				popularProducts,
				salesSummary,
				purchaseSummary,
				expenseSummary,
				expenseByCategory,
			},
		});
	} catch (error) {
		res.status(500).json({ message: "Error retrieving dashboard metrics." });
	}
}
