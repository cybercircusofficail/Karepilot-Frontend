"use client";

import { useState, useMemo } from "react";
import { useSearchParams, useRouter } from "next/navigation";
import { DashboardLayout } from "@/components/DashboardLayout";
import { QueryErrorState } from "@/components/common/QueryErrorState";
import {
  AlertsAndGeofencingHeader,
  AlertStatsCards,
  RealTimeAssetMap,
  AlertOverview,
  AlertLog,
  CreateGeofenceZoneModal,
  CreateAlertModal,
  AlertStatsCardsSkeleton,
  AlertOverviewSkeleton,
  AlertLogSkeleton,
  GeofenceMapSkeleton,
} from "./index";
import {
  useGetAlertsQuery,
  useGetAlertStatsQuery,
  useCreateAlertMutation,
  useAcknowledgeAlertMutation,
  useResolveAlertMutation,
} from "@/lib/api/alertsGeofencingApi";
import {
  useGetGeofencesQuery,
  useCreateGeofenceMutation,
  useToggleGeofenceMutation,
  useGetGeofenceStatsQuery,
} from "@/lib/api/alertsGeofencingApi";
import { useGetOrganizationsQuery } from "@/lib/api/organizationsApi";
import toast from "react-hot-toast";
import { alertTabs } from "@/lib/alerts-and-geofencing/data";
import { CreateGeofenceRequest } from "@/lib/types/alerts-geofencing/geofence";
import { CreateAlertRequest } from "@/lib/types/alerts-geofencing/alert";

interface AlertsPageContentProps {
  filterStatus?: "all" | "active" | "acknowledged" | "resolved";
}

export function AlertsPageContent({ filterStatus = "all" }: AlertsPageContentProps) {
  const searchParams = useSearchParams();
  const router = useRouter();
  const organizationId = searchParams.get("organizationId") || undefined;

  const [isCreateZoneModalOpen, setIsCreateZoneModalOpen] = useState(false);
  const [isCreateAlertModalOpen, setIsCreateAlertModalOpen] = useState(false);

  const { data: organizationsData } = useGetOrganizationsQuery();
  const organizations = organizationsData?.data?.organizations ?? [];
  
  const defaultOrganizationId = useMemo(() => {
    if (organizationId) return organizationId;
    return organizations.length > 0 ? organizations[0].id : undefined;
  }, [organizationId, organizations]);

  const handleOrganizationChange = (orgId: string) => {
    router.push(`/alerts-and-geofencing?organizationId=${orgId}`);
  };

  const alertQuery = useMemo(
    () => {
      if (!defaultOrganizationId) {
        return null;
      }
      return {
        organizationId: defaultOrganizationId,
        status: filterStatus === "all" ? undefined : filterStatus,
        page: 1,
        limit: 100,
      };
    },
    [defaultOrganizationId, filterStatus]
  );

  const {
    data: alertsData,
    isLoading: isLoadingAlerts,
    isError: isAlertsError,
    error: alertsError,
    refetch: refetchAlerts,
  } = useGetAlertsQuery(alertQuery!, {
    skip: !alertQuery || !defaultOrganizationId,
  });

  const {
    data: alertStatsData,
    isLoading: isLoadingStats,
    isError: isStatsError,
    error: statsError,
    refetch: refetchStats,
  } = useGetAlertStatsQuery(defaultOrganizationId!, {
    skip: !defaultOrganizationId,
  });

  const geofenceQuery = useMemo(
    () => {
      if (!defaultOrganizationId) {
        return null;
      }
      return {
        organizationId: defaultOrganizationId,
        page: 1,
        limit: 100,
      };
    },
    [defaultOrganizationId]
  );

  const {
    data: geofencesData,
    isLoading: isLoadingGeofences,
    isError: isGeofencesError,
    error: geofencesError,
    refetch: refetchGeofences,
  } = useGetGeofencesQuery(geofenceQuery!, {
    skip: !geofenceQuery || !defaultOrganizationId,
  });

  const {
    data: geofenceStatsData,
    isLoading: isLoadingGeofenceStats,
  } = useGetGeofenceStatsQuery(defaultOrganizationId!, {
    skip: !defaultOrganizationId,
  });

  const [createAlert, { isLoading: isCreatingAlert }] = useCreateAlertMutation();
  const [createGeofence, { isLoading: isCreatingGeofence }] = useCreateGeofenceMutation();
  const [toggleGeofence] = useToggleGeofenceMutation();
  const [acknowledgeAlert] = useAcknowledgeAlertMutation();
  const [resolveAlert] = useResolveAlertMutation();

  const handleCreateZone = () => {
    setIsCreateZoneModalOpen(true);
  };

  const handleCreateAlert = () => {
    setIsCreateAlertModalOpen(true);
  };

  const handleCreateZoneSubmit = async (data: {
    name: string;
    type: string;
    description: string;
    notifications: {
      email: boolean;
      sms: boolean;
      push: boolean;
      sound: boolean;
    };
  }) => {
    if (!defaultOrganizationId) {
      toast.error("Organization ID is required");
      return;
    }

    try {
      const geofenceData: CreateGeofenceRequest = {
        organizationId: defaultOrganizationId,
        name: data.name,
        type: data.type.toLowerCase() as "monitoring" | "restricted" | "alert" | "notification",
        description: data.description,
        notificationSettings: data.notifications,
        alertOnEntry: true,
        alertOnExit: false,
      };

      await createGeofence(geofenceData).unwrap();
      toast.success("Geofence zone created successfully");
      setIsCreateZoneModalOpen(false);
    } catch (error: any) {
      toast.error(error?.data?.message || "Failed to create geofence zone");
    }
  };

  const handleCreateAlertSubmit = async (data: {
    name: string;
    description: string;
    alertType: string;
    priority: string;
    email: string;
    phone: string;
    department: string;
    location: string;
    floor: string;
    room: string;
  }) => {
    if (!defaultOrganizationId) {
      toast.error("Organization ID is required");
      return;
    }

    try {
      const alertData: CreateAlertRequest = {
        organizationId: defaultOrganizationId,
        name: data.name,
        description: data.description,
        type: data.alertType as any,
        severity: data.priority.toLowerCase() as "high" | "medium" | "low",
        location: data.location,
        room: data.room,
      };

      await createAlert(alertData).unwrap();
      toast.success("Alert created successfully");
      setIsCreateAlertModalOpen(false);
    } catch (error: any) {
      toast.error(error?.data?.message || "Failed to create alert");
    }
  };

  const handleToggleZone = async (zoneId: string, isActive: boolean) => {
    try {
      await toggleGeofence({ id: zoneId, data: { isActive } }).unwrap();
      toast.success(`Geofence ${isActive ? "activated" : "deactivated"} successfully`);
    } catch (error: any) {
      toast.error(error?.data?.message || "Failed to toggle geofence");
    }
  };

  const handleAcknowledgeAlert = async (alertId: string) => {
    try {
      await acknowledgeAlert(alertId).unwrap();
      toast.success("Alert acknowledged successfully");
    } catch (error: any) {
      toast.error(error?.data?.message || "Failed to acknowledge alert");
    }
  };

  const handleResolveAlert = async (alertId: string) => {
    try {
      await resolveAlert(alertId).unwrap();
      toast.success("Alert resolved successfully");
    } catch (error: any) {
      toast.error(error?.data?.message || "Failed to resolve alert");
    }
  };

  const alertStats = useMemo(() => {
    if (!alertStatsData?.data) return null;
    const stats = alertStatsData.data.stats;
    const geofenceStats = geofenceStatsData?.data?.stats;
    return {
      activeAlerts: stats.activeAlerts,
      critical: stats.critical,
      geofenceZones: geofenceStats?.totalZones || 0,
      zoneTriggers: stats.zoneTriggers,
    };
  }, [alertStatsData, geofenceStatsData]);

  const alertOverviewStats = useMemo(() => {
    if (!alertStatsData?.data) return null;
    return alertStatsData.data.overview;
  }, [alertStatsData]);

  const alerts = useMemo(() => {
    if (!alertsData?.data?.alerts) return [];
    return alertsData.data.alerts.map((alert) => ({
      id: alert._id,
      title: alert.name,
      description: alert.description || alert.name,
      severity: alert.severity.charAt(0).toUpperCase() + alert.severity.slice(1) as "High" | "Medium" | "Low",
      status: alert.status.charAt(0).toUpperCase() + alert.status.slice(1) as "Active" | "Acknowledged" | "Resolved",
      location: alert.location || "Unknown",
      timestamp: new Date(alert.timestamp).toLocaleString(),
      type: alert.type.replace(/-/g, " ").replace(/\b\w/g, (l) => l.toUpperCase()) as any,
      _id: alert._id,
    }));
  }, [alertsData]);

  const geofences = useMemo(() => {
    if (!geofencesData?.data?.geofences) return [];
    return geofencesData.data.geofences.map((geofence) => {
      const building = typeof geofence.building === "object" ? geofence.building?.name : "";
      const floor = typeof geofence.floor === "object" ? geofence.floor?.title : "";
      const location = building && floor ? `${building} • ${floor}` : building || floor || "Unknown";
      
      return {
        id: geofence._id,
        name: geofence.name,
        location,
        description: geofence.description || "",
        alertType: geofence.type.charAt(0).toUpperCase() + geofence.type.slice(1) as "Restricted" | "Alert" | "Notification",
        alertDescription: geofence.alertOnEntry && geofence.alertOnExit 
          ? "Alert on both" 
          : geofence.alertOnEntry 
          ? "Alert on entry" 
          : "Alert on exit",
        isActive: geofence.isActive,
        floor: floor || undefined,
        _id: geofence._id,
      };
    });
  }, [geofencesData]);

  const filteredAlerts = useMemo(() => {
    if (filterStatus === "all") return alerts;
    return alerts.filter((alert) => alert.status.toLowerCase() === filterStatus);
  }, [alerts, filterStatus]);

  const isLoading = !defaultOrganizationId || isLoadingAlerts || isLoadingStats || isLoadingGeofences;
  const isError = isAlertsError || isStatsError || isGeofencesError;
  const error = alertsError || statsError || geofencesError;

  if (isError) {
    return (
      <DashboardLayout
        showBackButton={true}
        backLink="/users-and-roles"
        pageTitle="Alerts & Geofencing"
        organizationName="Central Medical Hospital"
        showOrganizationHeader={true}
      >
        <QueryErrorState
          error={error}
          onRetry={() => {
            refetchAlerts();
            refetchStats();
            refetchGeofences();
          }}
        />
      </DashboardLayout>
    );
  }

  return (
    <DashboardLayout
      showBackButton={true}
      backLink="/users-and-roles"
      pageTitle="Alerts & Geofencing"
      organizationName="Central Medical Hospital"
      showOrganizationHeader={true}
    >
      <div className="">
        <AlertsAndGeofencingHeader
          onCreateZone={handleCreateZone}
          onCreateAlert={handleCreateAlert}
          organizations={organizations}
          selectedOrganizationId={defaultOrganizationId}
          onOrganizationChange={handleOrganizationChange}
        />

        {!defaultOrganizationId || isLoadingStats ? (
          <AlertStatsCardsSkeleton />
        ) : alertStats ? (
          <AlertStatsCards stats={alertStats} />
        ) : null}

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-6">
          {!defaultOrganizationId || isLoadingGeofences ? (
            <GeofenceMapSkeleton />
          ) : (
            <RealTimeAssetMap
              zones={geofences}
              onEditZone={(zone) => console.log("Editing zone:", zone)}
              onViewZoneInMap={(zone) => console.log("Viewing zone in map:", zone)}
              onToggleZone={(zone) => handleToggleZone(zone.id, !zone.isActive)}
            />
          )}

          {!defaultOrganizationId || isLoadingStats ? (
            <AlertOverviewSkeleton />
          ) : alertOverviewStats ? (
            <AlertOverview
              stats={alertOverviewStats}
              recentAlerts={alerts.slice(0, 3)}
            />
          ) : null}
        </div>

        {!defaultOrganizationId || isLoadingAlerts ? (
          <AlertLogSkeleton />
        ) : (
          <AlertLog
            alerts={filteredAlerts}
            tabs={alertTabs}
            currentFilter={filterStatus}
            onAcknowledge={handleAcknowledgeAlert}
            onResolve={handleResolveAlert}
          />
        )}

        <CreateGeofenceZoneModal
          isOpen={isCreateZoneModalOpen}
          onClose={() => setIsCreateZoneModalOpen(false)}
          onSubmit={handleCreateZoneSubmit}
          isLoading={isCreatingGeofence}
        />

        <CreateAlertModal
          isOpen={isCreateAlertModalOpen}
          onClose={() => setIsCreateAlertModalOpen(false)}
          onSubmit={handleCreateAlertSubmit}
          isLoading={isCreatingAlert}
        />
      </div>
    </DashboardLayout>
  );
}
