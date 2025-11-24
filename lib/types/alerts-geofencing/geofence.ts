export interface NotificationSettings {
  email: boolean;
  sms: boolean;
  push: boolean;
  sound: boolean;
}

export interface Geofence {
  _id: string;
  organization: string | { _id: string; name: string };
  building?: string | { _id: string; name: string } | null;
  floor?: string | { _id: string; title: string } | null;
  name: string;
  description?: string | null;
  type: "monitoring" | "restricted" | "alert" | "notification";
  coordinates?: {
    x?: number | null;
    y?: number | null;
    latitude?: number | null;
    longitude?: number | null;
    radius?: number | null;
  };
  alertOnEntry: boolean;
  alertOnExit: boolean;
  notificationSettings: NotificationSettings;
  isActive: boolean;
  createdAt: string;
  updatedAt: string;
}

export interface GeofenceStats {
  totalZones: number;
  activeZones: number;
  inactiveZones: number;
  zoneTriggers: number;
}

export interface GeofenceListResponse {
  success: boolean;
  message: string;
  data: {
    geofences: Geofence[];
    total: number;
    page: number;
    limit: number;
    totalPages: number;
    availableFilters: {
      types: string[];
      buildings: Array<{ id: string; name: string }>;
    };
  };
}

export interface GeofenceResponse {
  success: boolean;
  message: string;
  data: {
    geofence: Geofence;
  };
}

export interface GeofenceStatsResponse {
  success: boolean;
  message: string;
  data: {
    stats: GeofenceStats;
  };
}

export interface CreateGeofenceRequest {
  organizationId: string;
  buildingId?: string | null;
  floorId?: string | null;
  name: string;
  description?: string | null;
  type: "monitoring" | "restricted" | "alert" | "notification";
  coordinates?: {
    x?: number | null;
    y?: number | null;
    latitude?: number | null;
    longitude?: number | null;
    radius?: number | null;
  };
  alertOnEntry?: boolean;
  alertOnExit?: boolean;
  notificationSettings?: NotificationSettings;
}

export interface UpdateGeofenceRequest {
  buildingId?: string | null;
  floorId?: string | null;
  name?: string;
  description?: string | null;
  type?: "monitoring" | "restricted" | "alert" | "notification";
  coordinates?: {
    x?: number | null;
    y?: number | null;
    latitude?: number | null;
    longitude?: number | null;
    radius?: number | null;
  };
  alertOnEntry?: boolean;
  alertOnExit?: boolean;
  notificationSettings?: NotificationSettings;
  isActive?: boolean;
}

export interface GeofenceQuery {
  organizationId: string;
  buildingId?: string;
  floorId?: string;
  type?: "monitoring" | "restricted" | "alert" | "notification";
  search?: string;
  isActive?: boolean;
  page?: number;
  limit?: number;
}

export interface ToggleGeofenceRequest {
  isActive: boolean;
}

