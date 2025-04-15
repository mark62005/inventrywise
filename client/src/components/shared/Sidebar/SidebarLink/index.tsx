"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useAppSelector } from "@/state/redux";
import { selectIsSidebarCollapsed } from "@/state/slices/globalSlice";
import { SidebarLinkProps } from "@/types/app/page-props";
import { cn } from "@/lib/utils";

function SidebarLink({ link }: SidebarLinkProps) {
	const pathname = usePathname();
	const isSidebarCollapsed = useAppSelector(selectIsSidebarCollapsed);

	const { href, label, Icon } = link;
	const linkHref = `/${href}`;

	const isActive =
		pathname === linkHref || (pathname === "/" && href === linkHref);

	return (
		<Link href={linkHref}>
			<div
				className={cn(
					"cursor-pointer flex items-center py-4 hover:text-blue-500 hover:bg-blue-100 gap-3 transition-colors",
					isSidebarCollapsed ? "justify-center" : "justify-start px-8",
					isActive ? "isActive bg-blue-200 text-white" : ""
				)}
			>
				<Icon className="w-6 h-6 !text-gray-700" />

				<span
					className={cn(
						"font-medium text-gray-700",
						isSidebarCollapsed ? "hidden" : "block"
					)}
				>
					{label}
				</span>
			</div>
		</Link>
	);
}
export default SidebarLink;
