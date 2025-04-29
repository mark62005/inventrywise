"use client";

import { useState } from "react";
import { useAppSelector } from "@/state/redux";
import { useGetExpensesByCategoryQuery } from "@/state/apis/expensesApi";
import { selectFilteredAggregatedExpenses } from "@/state/selectors/expensesSelectors";
import { IAggregatedDataItem } from "@/types/app/expenses";
import {
	Cell,
	Legend,
	Pie,
	PieChart,
	ResponsiveContainer,
	Tooltip,
} from "recharts";
import PageTitle from "@/components/shared/PageTitle";

const LABEL_CLASSNAME = "block text-sm font-medium text-gray-700" as const;
const SELECT_INPUT_CLASSNAME =
	"mt-1 block w-full pl-3 pr-10 py-2 text-base border-gray-300 focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm rounded-md cursor-pointer" as const;

function ExpensesPage() {
	const [activeIndex, setActiveIndex] = useState(0);
	const [selectedCategory, setSelectedCategory] = useState("All");
	const [startDate, setStartDate] = useState("");
	const [endDate, setEndDate] = useState("");

	const { isLoading, isError } = useGetExpensesByCategoryQuery();

	const aggregatedData = useAppSelector(
		selectFilteredAggregatedExpenses(selectedCategory, startDate, endDate)
	);

	if (isLoading) {
		return <div className="py-4">Loading...</div>;
	}

	if (!aggregatedData || isError) {
		return (
			<div className="text-center text-red-500 py-4">
				Error fetching expenses.
			</div>
		);
	}

	return (
		<>
			{/* HEADER */}
			<div className="mb-5">
				<PageTitle name="Expenses" />
				<p className="text-sm text-gray-500">
					A visual representation of expenses over time.
				</p>
			</div>

			{/* FILTERS */}
			<div className="flex flex-col md:flex-row justify-between gap-4">
				<div className="w-full md:w-1/3 bg-gray-50 shadow rounded-lg p-6">
					<h3 className="text-lg font-semibold mb-4">
						Filter by Category and Date
					</h3>

					<div className="space-y-4">
						{/* CATEGORY */}
						<div>
							<label
								htmlFor="category"
								className={LABEL_CLASSNAME}
							>
								Category
							</label>

							<select
								id="category"
								name="category"
								className={SELECT_INPUT_CLASSNAME}
								defaultValue="All"
								onChange={(e) => setSelectedCategory(e.target.value)}
							>
								<option>All</option>
								<option>Office</option>
								<option>Professional</option>
								<option>Salaries</option>
							</select>
						</div>

						{/* START DATE */}
						<div>
							<label
								htmlFor="start-date"
								className={LABEL_CLASSNAME}
							>
								Start Date
							</label>

							<input
								type="date"
								id="start-date"
								name="start-date"
								className={SELECT_INPUT_CLASSNAME}
								onChange={(e) => setStartDate(e.target.value)}
							/>
						</div>

						{/* END DATE */}
						<div>
							<label
								htmlFor="end-date"
								className={LABEL_CLASSNAME}
							>
								End Date
							</label>

							<input
								type="date"
								id="end-date"
								name="end-date"
								className={SELECT_INPUT_CLASSNAME}
								onChange={(e) => setEndDate(e.target.value)}
							/>
						</div>
					</div>
				</div>

				{/* PIE CHART */}
				<div className="flex-grow bg-white shadow rounded-lg p-4 md:p-6">
					<ResponsiveContainer
						width="100%"
						height={400}
					>
						<PieChart>
							<Pie
								data={aggregatedData}
								cx="50%"
								cy="50%"
								label
								outerRadius={150}
								fill="#8884d8"
								dataKey="amount"
								onMouseEnter={(_, index) => setActiveIndex(index)}
							>
								{aggregatedData.map(
									(entry: IAggregatedDataItem, index: number) => (
										<Cell
											key={`cell-${index}`}
											fill={
												index === activeIndex ? "rgb(29, 78, 216)" : entry.color
											}
										/>
									)
								)}
							</Pie>

							<Tooltip />
							<Legend />
						</PieChart>
					</ResponsiveContainer>
				</div>
			</div>
		</>
	);
}
export default ExpensesPage;
