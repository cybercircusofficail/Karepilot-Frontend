export interface AnalyticsQuery {
  organizationId?: string;
  startDate?: string;
  endDate?: string;
  dateRange?: "Last 7 days" | "Last 30 days" | "Last 90 days" | "Last 180 days" | "Last 365 days" | "Last year" | "Last Ever";
}

export interface AnalyticsStats {
  totalUsers: number;
  totalUsersChange: number;
  totalSessions: number;
  totalSessionsChange: number;
  conversionRate: number;
  conversionRateChange: number;
}

export interface UserGrowthDataPoint {
  month: string;
  currentWeek: number;
  previousWeek: number;
  [key: string]: string | number;
}

export interface FeatureUsageData {
  name: string;
  value: number;
  max: number;
}

export interface GeoChartData {
  country: string;
  usage: number;
}

export interface InsightCard {
  title: string;
  description: string;
  actionText: string;
}

export interface AnalyticsOverviewResponse {
  success: boolean;
  message: string;
  data: {
    stats: AnalyticsStats;
    userGrowth: UserGrowthDataPoint[];
    featureUsage: FeatureUsageData[];
    geoChartData: GeoChartData[];
    insights: InsightCard[];
  };
}

export interface UserActivityDataPoint {
  month: string;
  newUsers: number;
  returningUsers: number;
}

export interface UserDemographic {
  category: string;
  count: number;
  color: string;
}

export interface UserEngagementStats {
  activeUsers: number;
  activeUsersChange: number;
  userRetention: number;
  userRetentionChange: number;
  avgSession: number;
  avgSessionChange: number;
  totalSessions: number;
  totalSessionsChange: number;
}

export interface UserEngagementResponse {
  success: boolean;
  message: string;
  data: {
    stats: UserEngagementStats;
    userActivity: UserActivityDataPoint[];
    userDemographics: UserDemographic[];
  };
}

export interface SystemHealthItem {
  name: string;
  health: number;
  status: "Healthy" | "Warning" | "Critical";
  time: string;
}

export interface PerformanceTrendDataPoint {
  month: string;
  current: number;
  previous: number;
  [key: string]: string | number; 
}

export interface PerformanceStats {
  systemUptime: number;
  systemUptimeChange: number;
  avgResponseTime: number;
  avgResponseTimeChange: number;
  errorRate: number;
  errorRateChange: number;
}

export interface PerformanceResponse {
  success: boolean;
  message: string;
  data: {
    stats: PerformanceStats;
    systemHealth: SystemHealthItem[];
    performanceTrends: PerformanceTrendDataPoint[];
  };
}

export interface VenueAnalyticsStats {
  navigationRequests: number;
  navigationRequestsChange: number;
  poiInteractions: number;
  poiInteractionsChange: number;
  mapViews: number;
  mapViewsChange: number;
  emergencyAlerts: number;
  emergencyAlertsChange: number;
  assetTracking: number;
  assetTrackingChange: number;
}

export interface PopularDestination {
  id: string;
  name: string;
  count: number;
  trend: "up" | "down" | "neutral";
  trendColor: string;
}

export interface UsagePatterns {
  peakHours: { hour: number; count: number }[];
  dayOfWeek: { day: string; count: number }[];
}

export interface VenueAnalyticsResponse {
  success: boolean;
  message: string;
  data: {
    stats: VenueAnalyticsStats;
    popularDestinations: PopularDestination[];
    usagePatterns: UsagePatterns;
  };
}

