import { Alert, GeofenceZone, AlertStats, AlertOverviewStats, FilterOption } from './types';

export const alertStats: AlertStats = {
  activeAlerts: 4,
  critical: 3,
  geofenceZones: 2,
  zoneTriggers: 1
};

export const alertOverviewStats: AlertOverviewStats = {
  active: 1,
  acknowledged: 2,
  resolved: 1
};

export const geofenceZones: GeofenceZone[] = [
  {
    id: "1",
    name: "ICU Restricted Area",
    location: "Main Hospital • 3rd Floor",
    description: "Restricted access to ICU ward",
    alertType: "Restricted",
    alertDescription: "Alert on entry",
    isActive: true,
    floor: "3rd Floor"
  },
  {
    id: "2",
    name: "Emergency Exit Zone",
    location: "Main Hospital • Ground Floor",
    description: "Monitor emergency exit usage",
    alertType: "Alert",
    alertDescription: "Alert on both",
    isActive: true,
    floor: "Ground Floor"
  },
  {
    id: "3",
    name: "Pharmacy Area",
    location: "Main Hospital • 1st Floor",
    description: "Notification zone for pharmacy access",
    alertType: "Notification",
    alertDescription: "Alert on entry",
    isActive: false,
    floor: "1st Floor"
  }
];

export const recentAlerts: Alert[] = [
  {
    id: "1",
    title: "Unauthorized entry detected in ICU Restricted Area",
    description: "Unauthorized entry detected in ICU Restricted Area",
    severity: "High",
    status: "Active",
    location: "Main Hospital - ICU Ward",
    timestamp: "2025-07-15 14:26:10",
    type: "Unauthorized Entry"
  },
  {
    id: "2",
    title: "Mobile Tablet #MT-15 battery critically low (5%)",
    description: "Mobile Tablet #MT-15 battery critically low (5%)",
    severity: "Medium",
    status: "Acknowledged",
    location: "Main Hospital - ICU Ward",
    timestamp: "2025-07-15 14:38:40",
    type: "Low Battery"
  },
  {
    id: "3",
    title: "Emergency exit usage detected",
    description: "Emergency exit usage detected",
    severity: "Low",
    status: "Resolved",
    location: "Main Hospital - Ground Floor",
    timestamp: "2025-07-12 15:36:32",
    type: "Emergency Exit"
  }
];

export const allAlerts: Alert[] = [
  ...recentAlerts,
  {
    id: "4",
    title: "Map rendering service experiencing delays",
    description: "Map rendering service experiencing delays",
    severity: "Medium",
    status: "Acknowledged",
    location: "System Wide",
    timestamp: "2025-07-11 18:15:09",
    type: "System Alert"
  }
];

export const alertTabs: FilterOption[] = [
  { label: "All Alerts", value: "all" },
  { label: "Active", value: "active" },
  { label: "Acknowledged", value: "acknowledged" },
  { label: "Resolved", value: "resolved" }
];

export const buildingFilters: FilterOption[] = [
  { label: "All Buildings", value: "all" },
  { label: "Main Hospital", value: "main-hospital" },
  { label: "Emergency Wing", value: "emergency-wing" },
  { label: "Diagnostic Wing", value: "diagnostic-wing" }
];

export const alertTypeFilters: FilterOption[] = [
  { label: "All Types", value: "all" },
  { label: "Devices", value: "devices" },
  { label: "Equipment", value: "equipment" },
  { label: "Staff", value: "staff" }
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
