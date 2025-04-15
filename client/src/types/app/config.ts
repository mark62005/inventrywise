import { LucideIcon } from "lucide-react";

export interface INavLink {
	href: string;
	label: string;
	className?: string;
}

export interface ISidebarLink extends INavLink {
	Icon: LucideIcon;
}
