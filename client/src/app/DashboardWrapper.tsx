import { LayoutProps } from "@/types/app/page-props";

function DashboardWrapper({ children }: LayoutProps) {
	return (
		<div className="">
			{/* TODO: Create Sidebar component */}
			Sidebar
			<main className="">{children}</main>
		</div>
	);
}
export default DashboardWrapper;
