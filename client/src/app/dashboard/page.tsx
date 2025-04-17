import ExpenseSummarySection from "@/components/dashboard/(sections)/ExpenseSummarySection";
import PopularProductsSection from "@/components/dashboard/(sections)/PopularProductsSection";
import PurchaseSummarySection from "@/components/dashboard/(sections)/PurchaseSummarySection";
import SalesSummarySection from "@/components/dashboard/(sections)/SalesSummarySection";
import StatCardsSection from "@/components/dashboard/(sections)/StatCardsSection";

function DashboardPage() {
	return (
		<div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 xl:overflow-auto gap-10 pb-4 custom-grid-rows">
			<PopularProductsSection />
			<SalesSummarySection />
			<PurchaseSummarySection />
			<ExpenseSummarySection />
			<StatCardsSection />
		</div>
	);
}
export default DashboardPage;
