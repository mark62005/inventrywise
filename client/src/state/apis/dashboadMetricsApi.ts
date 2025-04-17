import { baseApi } from "./baseApi";
import { IDashboardMetrics } from "@/types/api/dashboardMetrics";

export const dashboardMetricsApi = baseApi.injectEndpoints({
	endpoints: (builder) => ({
		getDashboardMetrics: builder.query<IDashboardMetrics, void>({
			query: () => "/dashboard",
			providesTags: ["DashboardMetrics"],
		}),
	}),
});

export const { useGetDashboardMetricsQuery } = dashboardMetricsApi;
