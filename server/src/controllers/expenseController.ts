import { Request, Response } from "express";
import { PrismaClient } from "../generated/prisma-client";

const prisma = new PrismaClient();

export async function getExpensesByCategory(
	req: Request,
	res: Response
): Promise<void> {
	try {
		const expenseByCategorySummaryRaw = await prisma.expenseByCategory.findMany(
			{
				orderBy: {
					date: "desc",
				},
			}
		);

		if (!expenseByCategorySummaryRaw) {
			res.status(404).json({ message: "Expense by category not found." });
			return;
		}

		const expenseByCategorySummary = expenseByCategorySummaryRaw.map(
			(item) => ({
				...item,
				amount: item.amount.toString(),
			})
		);

		res.status(200).json({ data: expenseByCategorySummary });
	} catch (error) {
		console.error(error);
		res.status(500).json({ message: "Error retrieving expense by category." });
	}
}
