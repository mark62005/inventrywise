import ExpenseSummarySection from "./(sections)/ExpenseSummarySection";
import PopularProductsSection from "./(sections)/PopularProductsSection";
import PurchaseSummarySection from "./(sections)/PurchaseSummarySection";
import SalesSummarySection from "./(sections)/SalesSummarySection";

function DashboardPage() {
	return (
		<div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 xl:overflow-auto gap-10 pb-4 custom-grid-rows">
			<PopularProductsSection />
			<SalesSummarySection />
			<PurchaseSummarySection />
			<ExpenseSummarySection />
			<div className="md:row-span-1 xl:row-span-2 bg-gray-500" />
			<div className="md:row-span-1 xl:row-span-2 bg-gray-500" />
			<div className="md:row-span-1 xl:row-span-2 bg-gray-500" />
		</div>
	);
}
export default DashboardPage;
