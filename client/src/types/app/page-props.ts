import { ReactNode } from "react";
import { ISidebarLink } from "./config";

export interface LayoutProps {
	children: ReactNode;
}

export interface SidebarLinkProps {
	link: ISidebarLink;
}
