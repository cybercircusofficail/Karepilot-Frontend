import { FilterOption } from './types';

export const alertTabs: FilterOption[] = [
  { label: "All Alerts", value: "all" },
  { label: "Active", value: "active" },
  { label: "Acknowledged", value: "acknowledged" },
  { label: "Resolved", value: "resolved" }
];

export const categoryFilters: FilterOption[] = [
  { label: "All", value: "all" },
  { label: "SOS", value: "sos" },
  { label: "Fire", value: "fire" },
  { label: "Fall", value: "fall" },
  { label: "Geofence", value: "geofence" },
  { label: "Emergency", value: "emergency" },
  { label: "Low Battery", value: "low-battery" }
];

export const alertTypes: FilterOption[] = [
  { label: "Unauthorized Entry", value: "unauthorized-entry" },
  { label: "Low Battery", value: "low-battery" },
  { label: "Emergency Exit", value: "emergency-exit" },
  { label: "System Alert", value: "system-alert" },
  { label: "Geofence Trigger", value: "geofence-trigger" },
  { label: "Equipment Fault", value: "equipment-fault" }
];

export const priorityLevels: FilterOption[] = [
  { label: "High", value: "high" },
  { label: "Medium", value: "medium" },
  { label: "Low", value: "low" }
];

export const departments: FilterOption[] = [
  { label: "IT Department", value: "it" },
  { label: "Security", value: "security" },
  { label: "Medical", value: "medical" },
  { label: "Administration", value: "admin" }
];
