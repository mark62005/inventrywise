"use client";

import Link from "next/link";
import { Bell, Menu, Settings, Sun } from "lucide-react";

function Navbar() {
	function toggleSidebar() {
		// TODO: Finish the feature for toggling sidebar with redux
	}

	function toggleDarkMode() {
		// TODO: Finish the feature for toggling dark mode with redux
	}

	return (
		<div className="flex justify-between items-center w-full mb-7">
			{/* LEFT SIDE */}
			<div className="flex justify-between items-center gap-5">
				<button
					className="p-3 bg-gray-100 rounded-full cursor-pointer hover:bg-blue-100"
					onClick={toggleSidebar}
				>
					<Menu className="w-4 h-4" />
				</button>

				<div className="relative">
					<input
						type="search"
						placeholder="Start type to search groups & products"
						className="pl-10 pr-4 py-2 w-50 md:w-60 border-2 border-gray-300 bg-white rounded-lg focus:outline-none focus:border-blue-500"
					/>

					<div className="absolute inset-y-0 left-0 pl-3 flex items-center cursor-pointer">
						<Bell
							className="text-gray-500"
							size={20}
						/>
					</div>
				</div>
			</div>

			{/* RIGHT SIDE */}
			<div className="flex justify-between items-center gap-4">
				<div className="hidden md:flex justify-between items-center gap-3">
					{/* DARK MODE BUTTON */}
					<button
						onClick={toggleDarkMode}
						className="block cursor-pointer p-3"
					>
						{/* TODO: Conditional rendering for dark mode or light mode */}
						<Sun
							className="text-gray-500"
							size={24}
						/>
					</button>

					{/* NOTIFICATION BUTTON */}
					<div className="relative cursor-pointer p-3">
						<Bell
							className="text-gray-500"
							size={24}
						/>
						<span className="absolute -top-2 -right-2 inline-flex items-center justify-center px-[0.4rem] py-1 text-xs font-semibold leading-none text-red-100 bg-red-400 rounded-full">
							3
						</span>
					</div>

					<hr className="w-0 h-7 border border-solid border-l border-gray-300 mx-3" />

					{/* AVATAR */}
					<div className="flex items-center gap-3 p-3 cursor-pointer">
						<div className="w-9 h-9">Image</div>
						<span className="font-semibold">Mark</span>
					</div>
				</div>

				<Link
					href="/settings"
					className="cursor-pointer p-3"
				>
					<Settings
						className="text-gray-500"
						size={24}
					/>
				</Link>
			</div>
		</div>
	);
}
export default Navbar;
