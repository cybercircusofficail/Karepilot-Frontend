import { createApi } from "@reduxjs/toolkit/query/react";
import {
  AnalyticsOverviewResponse,
  AnalyticsQuery,
  UserEngagementResponse,
  PerformanceResponse,
  VenueAnalyticsResponse,
} from "../types/analytics/analytics";
import { baseQuery } from "./baseConfig";

export const analyticsApi = createApi({
  reducerPath: "analyticsApi",
  baseQuery,
  tagTypes: ["Analytics"],
  endpoints: (builder) => ({
    getAnalyticsOverview: builder.query<AnalyticsOverviewResponse, AnalyticsQuery>({
      query: (params) => ({
        url: "/users/admin/analytics/overview",
        params,
      }),
      providesTags: ["Analytics"],
    }),
    getUserEngagement: builder.query<UserEngagementResponse, AnalyticsQuery>({
      query: (params) => ({
        url: "/users/admin/analytics/user-engagement",
        params,
      }),
      providesTags: ["Analytics"],
    }),
    getPerformance: builder.query<PerformanceResponse, AnalyticsQuery>({
      query: (params) => ({
        url: "/users/admin/analytics/performance",
        params,
      }),
      providesTags: ["Analytics"],
    }),
    getVenueAnalytics: builder.query<VenueAnalyticsResponse, AnalyticsQuery & { id?: string }>({
      query: (params) => {
        const { id, organizationId, ...queryParams } = params;
        const orgId = id || organizationId;
        if (!orgId) {
          return {
            url: `/users/admin/analytics/venue/invalid`,
            params: queryParams,
          };
        }
        return {
          url: `/users/admin/analytics/venue/${orgId}`,
          params: queryParams,
        };
      },
      providesTags: ["Analytics"],
    }),
  }),
});

export const {
  useGetAnalyticsOverviewQuery,
  useGetUserEngagementQuery,
  useGetPerformanceQuery,
  useGetVenueAnalyticsQuery,
} = analyticsApi;

