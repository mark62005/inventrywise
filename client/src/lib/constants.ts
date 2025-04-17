import { StatCardProps } from "@/types/app/components";
import { ISidebarLink } from "@/types/app/config";
import { GridColDef } from "@mui/x-data-grid";
import {
	Archive,
	CheckCircle,
	CircleDollarSign,
	Clipboard,
	Layout,
	Package,
	SlidersHorizontal,
	Tag,
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

/* STAT CARDS CONFIG */
const STAT_CARD_DATE_RANGE = "22 - 29 October 2023" as const;

export const STAT_CARDS_CONFIG: StatCardProps[] = [
	{
		title: "Customer & Expenses",
		PrimaryIcon: Package,
		dateRange: STAT_CARD_DATE_RANGE,
		details: [
			{
				title: "Customer Growth",
				amount: "175.00",
				changePercentage: 131,
			},
			{
				title: "Expenses",
				amount: "10.00",
				changePercentage: -56,
			},
		],
	},
	{
		title: "Dues & Pending Orders",
		PrimaryIcon: CheckCircle,
		dateRange: STAT_CARD_DATE_RANGE,
		details: [
			{
				title: "Dues",
				amount: "250.00",
				changePercentage: 131,
			},
			{
				title: "Pending Orders",
				amount: "147",
				changePercentage: -56,
			},
		],
	},
	{
		title: "Sales & Discount",
		PrimaryIcon: Tag,
		dateRange: STAT_CARD_DATE_RANGE,
		details: [
			{
				title: "Sales",
				amount: "1000.00",
				changePercentage: 20,
			},
			{
				title: "Discount",
				amount: "200.00",
				changePercentage: -10,
			},
		],
	},
];

/* INVENTORY PAGE */
export const INVENTORY_COL_CONFIG: GridColDef[] = [
	{ field: "id", headerName: "ID", width: 90 },
	{ field: "name", headerName: "Product Name", width: 200 },
	{
		field: "price",
		headerName: "Price",
		width: 110,
		type: "number",
		valueGetter: (_value, row) => `$${row.price}`,
	},
	{
		field: "rating",
		headerName: "Rating",
		width: 110,
		type: "number",
		valueGetter: (_value, row) => (row.rating ? row.rating : "N/A"),
	},
	{
		field: "stockQuantity",
		headerName: "Stock Quantity",
		width: 150,
		type: "number",
	},
] as const;
