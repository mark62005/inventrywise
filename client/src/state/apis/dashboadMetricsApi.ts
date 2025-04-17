import { baseApi } from "./baseApi";
import { DashboardMetrics } from "@/types/api/dashboardMetrics";

export const dashboardMetricsApi = baseApi.injectEndpoints({
	endpoints: (builder) => ({
		getDashboardMetrics: builder.query<DashboardMetrics, void>({
			query: () => "/dashboard",
			providesTags: ["DashboardMetrics"],
		}),
	}),
});

export const { useGetDashboardMetricsQuery } = dashboardMetricsApi;
