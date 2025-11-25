import { TabItem } from "@/lib/types/common/navigation";
import { User, Settings, MapPin, Bell, Tag } from "@/icons/Icons";

export const performanceSystemHealth = [
  {
    name: "CPU Usage",
    time: "Uptime",
    status: "Healthy" as const,
    health: 99.9,
  },
  {
    name: "Disk Usage",
    time: "Uptime",
    status: "Healthy" as const,
    health: 90.1,
  },
  {
    name: "Memory Usage",
    time: "Uptime",
    status: "Warning" as const,
    health: 62,
  },
  {
    name: "Network I/O",
    time: "Uptime",
    status: "Healthy" as const,
    health: 91.3,
  },
];

export const performanceTrendsData = [
  { month: "Jan", current: 8, previous: 12 },
  { month: "Feb", current: 18, previous: 10 },
  { month: "Mar", current: 12, previous: 15 },
  { month: "Apr", current: 20, previous: 12 },
  { month: "May", current: 15, previous: 22 },
  { month: "Jun", current: 21, previous: 18 },
];

export const navigationTabs: TabItem[] = [
  {
    id: "overview",
    label: "Overview",
    href: "/analytics",
  },
  {
    id: "user-engagement",
    label: "User Engagement",
    href: "/analytics/user-engagement",
  },
  {
    id: "performance",
    label: "Performance",
    href: "/analytics/performance",
  },
  {
    id: "venue-analytics",
    label: "Venue Analytics",
    href: "/analytics/venue-analytics",
  },
];

export const dateRangeOptions = [
  "Last 7 days",
  "Last 30 days",
  "Last 90 days",
  "Last 180 days",
  "Last 365 days",
];

export const geoChartOptions = {
  colorAxis: {
    colors: ["#E8F4F4", "#A8CDCD", "#7DBDBD", "#52ADAD", "#2D8A8A"],
  },
  backgroundColor: "transparent",
  datalessRegionColor: "hsl(var(--muted))",
  defaultColor: "hsl(var(--muted))",
  legend: "none",
  tooltip: {
    textStyle: {
      fontSize: 12,
      color: "hsl(var(--popover-foreground))",
    },
  },
};

export const lines = [
  {
    dataKey: "currentWeek",
    stroke: "#10b981",
    strokeDasharray: "5 5",
    name: "→ Current Week",
  },
  {
    dataKey: "previousWeek",
    stroke: "#3b82f6",
    name: "→ Previous Week",
  },
];

export const performanceLines = [
  {
    dataKey: "current",
    stroke: "#3b82f6",
    name: "Current Performance",
  },
  {
    dataKey: "previous",
    stroke: "#10b981",
    strokeDasharray: "5 5",
    name: "Previous Performance",
  },
];

export interface InsightCard {
  title: string;
  description: string;
  actionText: string;
}

export interface UserDemographic {
  category: string;
  count: number;
  color: string;
}

export interface UserActivityData {
  month: string;
  newUsers: number;
  returningUsers: number;
}

export interface QuickExportItem {
  id: number;
  title: string;
  description: string;
  icon: React.ComponentType<{
    className?: string;
    style?: React.CSSProperties;
  }>;
  iconColor?: string;
}

export interface RecentReport {
  id: number;
  filename: string;
  size: string;
  date: string;
  status: "Ready" | "Processing";
  statusColor: string;
}

export interface ReportTemplate {
  id: number;
  title: string;
  description: string;
  tags: string[];
  isSelected?: boolean;
}

export interface ReportSection {
  id: number;
  name: string;
  checked: boolean;
}

export const quickExportData: QuickExportItem[] = [
  {
    id: 1,
    title: "User Activity Data",
    description: "Daily/weekly/monthly user engagement metrics",
    icon: User,
    iconColor: "#3b82f6",
  },
  {
    id: 2,
    title: "System Performance Logs",
    description: "Server metrics, uptime, and error logs",
    icon: Settings,
    iconColor: "#10b981",
  },
  {
    id: 3,
    title: "Navigation Analytics",
    description: "POI interactions and map usage statistics",
    icon: MapPin,
    iconColor: "#f59e0b",
  },
  {
    id: 4,
    title: "Alert History",
    description: "Emergency alerts and response times",
    icon: Bell,
    iconColor: "#ef4444",
  },
  {
    id: 5,
    title: "Asset Tracking Data",
    description: "Device locations and movement patterns",
    icon: Tag,
    iconColor: "#8b5cf6",
  },
];

export const dataCategories = [
  { id: 1, name: "User Data", checked: true },
  { id: 2, name: "System Logs", checked: true },
  { id: 3, name: "Performance Metrics", checked: true },
  { id: 4, name: "Navigation Data", checked: true },
  { id: 5, name: "Alert History", checked: false },
  { id: 6, name: "Asset Data", checked: false },
  { id: 7, name: "Map Analytics", checked: false },
  { id: 8, name: "Session Data", checked: false },
];

export const exportFormats = ["CSV", "JSON", "XLSX", "PDF"];
export const dateRanges = [
  "Last 7 days",
  "Last 30 days",
  "Last 90 days",
  "Last 180 days",
  "Last 365 days",
];

export const recentReports = [
  {
    id: 1,
    filename: "user_activity_2024_01.csv",
    size: "2.4 MB",
    date: "2024-01-20 14:30",
    status: "Ready" as const,
    statusColor: "text-green-600",
  },
  {
    id: 2,
    filename: "system_performance_logs.json",
    size: "5.8 MB",
    date: "2024-01-19 09:15",
    status: "Ready" as const,
    statusColor: "text-green-600",
  },
  {
    id: 3,
    filename: "navigation_analytics.xlsx",
    size: "1.2 MB",
    date: "2024-01-18 16:45",
    status: "Processing" as const,
    statusColor: "text-orange-600",
  },
];

export const reportTemplates: ReportTemplate[] = [
  {
    id: 1,
    title: "Comprehensive Analytics Report",
    description: "Complete overview of all metrics and KPIs",
    tags: ["User engagement", "System performance", "Venue analytics", "Trends"],
    isSelected: false,
  },
  {
    id: 2,
    title: "System Performance Report",
    description: "Technical metrics, uptime, and system health",
    tags: ["Uptime statistics", "Response times", "Error rates", "Throughput"],
    isSelected: true,
  },
  {
    id: 3,
    title: "User Engagement Report",
    description: "User behavior, feature usage, and retention metrics",
    tags: ["Active users", "Feature usage", "Session data", "Retention"],
    isSelected: false,
  },
  {
    id: 4,
    title: "Venue-Specific Report",
    description: "Detailed specific analytics and insights",
    tags: ["Navigation usage", "POI interactions", "Location data", "Emergency metrics"],
    isSelected: false,
  },
];

export const reportSections: ReportSection[] = [
  { id: 1, name: "Executive Summary", checked: true },
  { id: 2, name: "Key Metrics", checked: true },
  { id: 3, name: "Charts & Graphs", checked: false },
  { id: 4, name: "Detailed Data Tables", checked: false },
  { id: 5, name: "Recommendations", checked: false },
  { id: 6, name: "Appendix", checked: false },
];
