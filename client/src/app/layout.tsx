import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { LayoutProps } from "@/types/app/page-props";
import DashboardWrapper from "./DashboardWrapper";

const interSans = Inter({
	variable: "--font-inter-sans",
	subsets: ["latin"],
});

export const metadata: Metadata = {
	title: "Inventory Management App",
	description:
		"Streamline your inventory with a real-time dashboard built using Next.js, Redux, Prisma, and AWS. Track stock levels, avoid shortages, and scale with ease—perfect for e-commerce operations managers.",
};

export default function RootLayout({ children }: LayoutProps) {
	return (
		<html lang="en">
			<body className={`${interSans.variable} antialiased`}>
				<DashboardWrapper>{children}</DashboardWrapper>
			</body>
		</html>
	);
}
