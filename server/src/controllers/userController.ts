import { Request, Response } from "express";
import { PrismaClient } from "../generated/prisma-client";

const prisma = new PrismaClient();

export async function getUsers(req: Request, res: Response): Promise<void> {
	try {
		const users = await prisma.user.findMany();

		if (!users) {
			res.status(404).json({ message: "Users not found." });
			return;
		}

		res.status(200).json({ data: users });
	} catch (error) {
		console.error(error);
		res.status(500).json({ message: "Error retrieving users." });
	}
}
