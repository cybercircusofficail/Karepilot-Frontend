"use client";

import { Users, ShoppingBag, Shield, Building } from "lucide-react";

interface VenuePerformanceItem {
  id: number;
  title: string;
  value: string;
  description: string;
  status: string;
  statusColor: string;
  icon: React.ComponentType<{
    className?: string;
    style?: React.CSSProperties;
  }>;
  iconColor: string;
}

interface VenuePerformanceStatisticsProps {
  className?: string;
  data?: any;
  isLoading?: boolean;
}

export function VenuePerformanceStatistics({
  className = "",
  data,
  isLoading = false,
}: VenuePerformanceStatisticsProps) {
  if (isLoading) {
    return (
      <div className={`bg-background border border-border rounded-4xl p-6 w-full max-w-full overflow-hidden ${className}`}>
        <div className="h-6 bg-muted rounded w-48 mb-6 animate-pulse"></div>
        <div className="grid grid-cols-2 gap-4">
          {[1, 2, 3, 4].map((i) => (
            <div key={i} className="bg-background border border-border rounded-xl p-4 animate-pulse">
              <div className="h-4 bg-muted rounded w-24 mb-2"></div>
              <div className="h-6 bg-muted rounded w-16 mb-2"></div>
              <div className="h-3 bg-muted rounded w-32"></div>
            </div>
          ))}
        </div>
      </div>
    );
  }
  const performanceData: VenuePerformanceItem[] = [
    {
      id: 1,
      title: "Foot Traffic",
      value: "15.2K",
      description: "Daily visitor count",
      status: "Good",
      statusColor: "bg-blue-100 text-blue-600",
      icon: Users,
      iconColor: "#ec4899",
    },
    {
      id: 2,
      title: "Shopping Efficiency",
      value: "23 min",
      description: "Average time spent per visitor",
      status: "Good",
      statusColor: "bg-blue-100 text-blue-600",
      icon: ShoppingBag,
      iconColor: "#f97316",
    },
    {
      id: 3,
      title: "Parking Utilization",
      value: "78%",
      description: "Average parking space usage",
      status: "Good",
      statusColor: "bg-blue-100 text-blue-600",
      icon: Shield,
      iconColor: "#3b82f6",
    },
    {
      id: 4,
      title: "Store Visits",
      value: "2.4",
      description: "Average store visited per person",
      status: "Excellent",
      statusColor: "bg-green-100 text-green-600",
      icon: Building,
      iconColor: "#10b981",
    },
  ];

  return (
    <div
      className={`bg-background  border border-border rounded-4xl p-6 ${className}`}
    >
      <h3 className="text-lg font-semibold text-foreground mb-6">
        Performance Statistics
      </h3>

      <div className="grid grid-cols-2 gap-4">
        {performanceData.map((item) => {
          const IconComponent = item.icon;
          return (
            <div
              key={item.id}
              className="bg-background border border-border rounded-xl p-4"
            >
              <div className="flex items-start justify-between mb-3">
                <div className="flex items-center gap-3">
                  <div
                    className="w-8 h-8 rounded-lg flex items-center justify-center"
                    style={{ backgroundColor: `${item.iconColor}20` }}
                  >
                    <IconComponent
                      className="w-5 h-5"
                      style={{ color: item.iconColor }}
                    />
                  </div>
                  <div>
                    <h4 className="text-sm font-semibold text-foreground">
                      {item.title}
                    </h4>
                    <p className="text-lg font-bold text-foreground">
                      {item.value}
                    </p>
                  </div>
                </div>
              </div>
              <p className="text-xs text-muted-foreground">
                {item.description}
              </p>
              <div className="mt-4">
                <span
                  className={`px-2 py-1 rounded-md text-xs font-medium ${item.statusColor}`}
                >
                  {item.status}
                </span>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
