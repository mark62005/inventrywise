import { RatingProps } from "@/types/app/components";
import { Star } from "lucide-react";

const RATINGS = [1, 2, 3, 4, 5] as const;

function Rating({ rating }: RatingProps) {
	return RATINGS.map((index) => (
		<Star
			key={index}
			color={index <= rating! ? "#FFC107" : "#E4E5E9"}
			className="w-4 h-4"
		/>
	));
}
export default Rating;
