import { LayoutProps } from "@/types/app/page-props";

function DashboardWrapper({ children }: LayoutProps) {
	return (
		<div className="flex w-full min-h-screen bg-gray-50 text-gray-900">
			{/* TODO: Create Sidebar component */}
			Sidebar
			<main className="flex flex-col w-full h-full py-7 px-9 bg-gray-50 md:pl-24">
				{children}
			</main>
		</div>
	);
}
export default DashboardWrapper;
