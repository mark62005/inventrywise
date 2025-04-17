import StatCard from "@/components/dashboard/StatCard";
import { STAT_CARDS_CONFIG } from "@/lib/constants";

function StatCardsSection() {
	return (
		<>
			{STAT_CARDS_CONFIG.map((item) => (
				<StatCard
					key={item.title}
					title={item.title}
					PrimaryIcon={item.PrimaryIcon}
					dateRange={item.dateRange}
					details={item.details}
				/>
			))}
		</>
	);
}
export default StatCardsSection;
