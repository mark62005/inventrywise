"use client";

import Image from "next/image";
import { useAppDispatch, useAppSelector } from "@/state/redux";
import {
	selectIsSidebarCollapsed,
	toggleSidebarCollapsed,
} from "@/state/slices/globalSlice";
import { Menu } from "lucide-react";
import { cn } from "@/lib/utils";
import { SIDEBAR_LINKS_CONFIG } from "@/lib/constants";
import SidebarLink from "./SidebarLink";

function Sidebar() {
	const dispatch = useAppDispatch();
	const isSidebarCollapsed = useAppSelector(selectIsSidebarCollapsed);

	function toggleSidebar() {
		dispatch(toggleSidebarCollapsed());
	}

	return (
		<div
			className={cn(
				`fixed flex flex-col bg-white transition-all duration-300 overflow-hidden h-full shadow-md z-40`,
				isSidebarCollapsed ? "w-0 md:w-16" : "w-72 md:w-64"
			)}
		>
			{/* LOGO */}
			<div
				className={cn(
					`flex gap-3 justify-between md:justify-normal items-center pt-8`,
					isSidebarCollapsed ? "px-5" : "px-8"
				)}
			>
				<Image
					src="/logo.png"
					alt="Logo of MStock"
					width={27}
					height={27}
					className="rounded w-8"
				/>
				<h1
					className={cn(
						"font-extrabold text-2xl",
						isSidebarCollapsed ? "hidden" : "block"
					)}
				>
					MSTOCK
				</h1>

				<button
					className="md:hidden px-3 py-3 bg-gray-100 rounded-full cursor-pointer hover:bg-blue-100"
					onClick={toggleSidebar}
				>
					<Menu className="w-4 h-4" />
				</button>
			</div>

			{/* SIDEBAR LINKS */}
			<div className="flex-grow mt-8">
				{SIDEBAR_LINKS_CONFIG.map((sidebarLink) => (
					<SidebarLink
						link={sidebarLink}
						key={sidebarLink.href}
					/>
				))}
			</div>

			{/* FOOTER */}
			<footer className={cn("mb-10", isSidebarCollapsed ? "hidden" : "block")}>
				<p className="text-center text-xs text-gray-500">
					&copy; 2025 Mark Wong
				</p>
			</footer>
		</div>
	);
}
export default Sidebar;
