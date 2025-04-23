"use client";

import { DataGrid } from "@mui/x-data-grid";
import { USERS_COL_CONFIG } from "@/lib/constants";
import PageTitle from "@/components/shared/PageTitle";
import { useGetUsersQuery } from "@/state/apis/usersApi";

function UsersPage() {
	const { data: users, isError, isLoading } = useGetUsersQuery();

	if (isLoading) {
		return <div className="py-4">Loading...</div>;
	}

	if (isError || !users) {
		return (
			<div className="text-center text-red-500 py-4">Error fetching users.</div>
		);
	}

	return (
		<div className="flex flex-col">
			<PageTitle name="Users" />

			<DataGrid
				rows={users}
				columns={USERS_COL_CONFIG}
				getRowId={(row) => row.id}
				checkboxSelection
				className="bg-white shadow rounded-lg border border-gray-200 mt-5 !text-gray-700"
			/>
		</div>
	);
}
export default UsersPage;
