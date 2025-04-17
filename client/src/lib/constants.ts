import { ISidebarLink } from "@/types/app/config";
import {
	Archive,
	CircleDollarSign,
	Clipboard,
	Layout,
	SlidersHorizontal,
	User,
} from "lucide-react";

/* SIDEBAR CONFIG */
export const SIDEBAR_LINKS_CONFIG: ISidebarLink[] = [
	{
		href: "dashboard",
		label: "Dashboard",
		Icon: Layout,
	},
	{
		href: "inventory",
		label: "Inventory",
		Icon: Archive,
	},
	{
		href: "products",
		label: "Products",
		Icon: Clipboard,
	},
	{
		href: "users",
		label: "Users",
		Icon: User,
	},
	{
		href: "settings",
		label: "Settings",
		Icon: SlidersHorizontal,
	},
	{
		href: "expenses",
		label: "Expenses",
		Icon: CircleDollarSign,
	},
] as const;

/* EXPENSE SUMMARY */
export const PIE_CHART_COLORS = ["#00C49F", "#0088FE", "#FFBB28"] as const;
