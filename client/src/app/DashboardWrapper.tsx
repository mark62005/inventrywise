"use client";

import { LayoutProps } from "@/types/app/page-props";
import Sidebar from "@/components/shared/Sidebar";
import Navbar from "@/components/shared/Navbar";
import { useAppSelector } from "@/state/redux";
import { selectIsSidebarCollapsed } from "@/state/slices/globalSlice";
import { cn } from "@/lib/utils";

function DashboardWrapper({ children }: LayoutProps) {
	const isSidebarCollapsed = useAppSelector(selectIsSidebarCollapsed);

	return (
		<div className="flex w-full min-h-screen bg-gray-50 text-gray-900">
			<Sidebar />

			<main
				className={cn(
					"flex flex-col w-full h-full py-5 px-9 bg-gray-50",
					isSidebarCollapsed ? "md:pl-24" : "md:pl-72"
				)}
			>
				<Navbar />

				{children}
			</main>
		</div>
	);
}
export default DashboardWrapper;
