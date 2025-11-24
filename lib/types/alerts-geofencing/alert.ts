export interface Alert {
  _id: string;
  organization: string | { _id: string; name: string };
  building?: string | { _id: string; name: string } | null;
  floor?: string | { _id: string; title: string } | null;
  department?: string | { _id: string; name: string } | null;
  asset?: string | { _id: string; name: string } | null;
  name: string;
  description?: string | null;
  type: string;
  severity: "high" | "medium" | "low";
  status: "active" | "acknowledged" | "resolved";
  location?: string | null;
  room?: string | null;
  timestamp: string;
  acknowledgedBy?: string | { _id: string; firstName: string; lastName: string } | null;
  acknowledgedAt?: string | null;
  resolvedBy?: string | { _id: string; firstName: string; lastName: string } | null;
  resolvedAt?: string | null;
  isActive: boolean;
  createdAt: string;
  updatedAt: string;
}

export interface AlertStats {
  activeAlerts: number;
  critical: number;
  unacknowledged: number;
  zoneTriggers: number;
}

export interface AlertOverviewStats {
  active: number;
  acknowledged: number;
  resolved: number;
}

export interface AlertListResponse {
  success: boolean;
  message: string;
  data: {
    alerts: Alert[];
    total: number;
    page: number;
    limit: number;
    totalPages: number;
    availableFilters: {
      types: string[];
      severities: string[];
      statuses: string[];
      buildings: Array<{ id: string; name: string }>;
      departments: Array<{ id: string; name: string }>;
    };
  };
}

export interface AlertResponse {
  success: boolean;
  message: string;
  data: {
    alert: Alert;
  };
}

export interface AlertStatsResponse {
  success: boolean;
  message: string;
  data: {
    stats: AlertStats;
    overview: AlertOverviewStats;
  };
}

export interface CreateAlertRequest {
  organizationId: string;
  buildingId?: string | null;
  floorId?: string | null;
  departmentId?: string | null;
  assetId?: string | null;
  name: string;
  description?: string | null;
  type: string;
  severity: "high" | "medium" | "low";
  location?: string | null;
  room?: string | null;
  timestamp?: string | null;
}

export interface UpdateAlertRequest {
  buildingId?: string | null;
  floorId?: string | null;
  departmentId?: string | null;
  assetId?: string | null;
  name?: string;
  description?: string | null;
  type?: string;
  severity?: "high" | "medium" | "low";
  status?: "active" | "acknowledged" | "resolved";
  location?: string | null;
  room?: string | null;
  timestamp?: string | null;
}

export interface AlertQuery {
  organizationId: string;
  buildingId?: string;
  floorId?: string;
  departmentId?: string;
  assetId?: string;
  type?: string;
  severity?: "high" | "medium" | "low";
  status?: "active" | "acknowledged" | "resolved";
  search?: string;
  isActive?: boolean;
  page?: number;
  limit?: number;
}

