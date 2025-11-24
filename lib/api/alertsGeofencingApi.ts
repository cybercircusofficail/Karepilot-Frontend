import { createApi } from "@reduxjs/toolkit/query/react";
import {
  AlertListResponse,
  AlertResponse,
  AlertStatsResponse,
  CreateAlertRequest,
  UpdateAlertRequest,
  AlertQuery,
} from "../types/alerts-geofencing/alert";
import {
  GeofenceListResponse,
  GeofenceResponse,
  GeofenceStatsResponse,
  CreateGeofenceRequest,
  UpdateGeofenceRequest,
  GeofenceQuery,
  ToggleGeofenceRequest,
} from "../types/alerts-geofencing/geofence";
import { baseQuery } from "./baseConfig";

export const alertsGeofencingApi = createApi({
  reducerPath: "alertsGeofencingApi",
  baseQuery,
  tagTypes: ["Alerts", "AlertStats", "Geofences", "GeofenceStats"],
  endpoints: (builder) => ({
    getAlerts: builder.query<AlertListResponse, AlertQuery>({
      query: (params) => ({
        url: "/users/admin/alerts-geofencing/alerts",
        params,
      }),
      providesTags: ["Alerts"],
    }),
    getAlertById: builder.query<AlertResponse, string>({
      query: (id) => `/users/admin/alerts-geofencing/alerts/${id}`,
      providesTags: (result, error, id) => [{ type: "Alerts", id }],
    }),
    createAlert: builder.mutation<AlertResponse, CreateAlertRequest>({
      query: (data) => ({
        url: "/users/admin/alerts-geofencing/alerts",
        method: "POST",
        body: data,
      }),
      invalidatesTags: ["Alerts", "AlertStats"],
    }),
    updateAlert: builder.mutation<AlertResponse, { id: string; data: UpdateAlertRequest }>({
      query: ({ id, data }) => ({
        url: `/users/admin/alerts-geofencing/alerts/${id}`,
        method: "PUT",
        body: data,
      }),
      invalidatesTags: (result, error, { id }) => [
        { type: "Alerts", id },
        "Alerts",
        "AlertStats",
      ],
    }),
    deleteAlert: builder.mutation<AlertResponse, string>({
      query: (id) => ({
        url: `/users/admin/alerts-geofencing/alerts/${id}`,
        method: "DELETE",
      }),
      invalidatesTags: ["Alerts", "AlertStats"],
    }),
    acknowledgeAlert: builder.mutation<AlertResponse, string>({
      query: (id) => ({
        url: `/users/admin/alerts-geofencing/alerts/${id}/acknowledge`,
        method: "PATCH",
      }),
      invalidatesTags: (result, error, id) => [
        { type: "Alerts", id },
        "Alerts",
        "AlertStats",
      ],
    }),
    resolveAlert: builder.mutation<AlertResponse, string>({
      query: (id) => ({
        url: `/users/admin/alerts-geofencing/alerts/${id}/resolve`,
        method: "PATCH",
      }),
      invalidatesTags: (result, error, id) => [
        { type: "Alerts", id },
        "Alerts",
        "AlertStats",
      ],
    }),
    getAlertStats: builder.query<AlertStatsResponse, string>({
      query: (organizationId) => `/users/admin/alerts-geofencing/alerts/stats/${organizationId}`,
      providesTags: ["AlertStats"],
    }),

    getGeofences: builder.query<GeofenceListResponse, GeofenceQuery>({
      query: (params) => ({
        url: "/users/admin/alerts-geofencing/geofences",
        params,
      }),
      providesTags: ["Geofences"],
    }),
    getGeofenceById: builder.query<GeofenceResponse, string>({
      query: (id) => `/users/admin/alerts-geofencing/geofences/${id}`,
      providesTags: (result, error, id) => [{ type: "Geofences", id }],
    }),
    createGeofence: builder.mutation<GeofenceResponse, CreateGeofenceRequest>({
      query: (data) => ({
        url: "/users/admin/alerts-geofencing/geofences",
        method: "POST",
        body: data,
      }),
      invalidatesTags: ["Geofences", "GeofenceStats", "AlertStats"],
    }),
    updateGeofence: builder.mutation<
      GeofenceResponse,
      { id: string; data: UpdateGeofenceRequest }
    >({
      query: ({ id, data }) => ({
        url: `/users/admin/alerts-geofencing/geofences/${id}`,
        method: "PUT",
        body: data,
      }),
      invalidatesTags: (result, error, { id }) => [
        { type: "Geofences", id },
        "Geofences",
        "GeofenceStats",
      ],
    }),
    deleteGeofence: builder.mutation<GeofenceResponse, string>({
      query: (id) => ({
        url: `/users/admin/alerts-geofencing/geofences/${id}`,
        method: "DELETE",
      }),
      invalidatesTags: ["Geofences", "GeofenceStats"],
    }),
    toggleGeofence: builder.mutation<GeofenceResponse, { id: string; data: ToggleGeofenceRequest }>({
      query: ({ id, data }) => ({
        url: `/users/admin/alerts-geofencing/geofences/${id}/toggle`,
        method: "PATCH",
        body: data,
      }),
      invalidatesTags: (result, error, { id }) => [
        { type: "Geofences", id },
        "Geofences",
        "GeofenceStats",
      ],
    }),
    getGeofenceStats: builder.query<GeofenceStatsResponse, string>({
      query: (organizationId) => `/users/admin/alerts-geofencing/geofences/stats/${organizationId}`,
      providesTags: ["GeofenceStats"],
    }),
  }),
});

export const {
  useGetAlertsQuery,
  useGetAlertByIdQuery,
  useCreateAlertMutation,
  useUpdateAlertMutation,
  useDeleteAlertMutation,
  useAcknowledgeAlertMutation,
  useResolveAlertMutation,
  useGetAlertStatsQuery,
  useGetGeofencesQuery,
  useGetGeofenceByIdQuery,
  useCreateGeofenceMutation,
  useUpdateGeofenceMutation,
  useDeleteGeofenceMutation,
  useToggleGeofenceMutation,
  useGetGeofenceStatsQuery,
} = alertsGeofencingApi;

