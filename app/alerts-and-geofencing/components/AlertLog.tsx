"use client";

import { Alert, FilterOption } from "@/lib/alerts-and-geofencing/types";
import { Button } from "@/components/ui/button";
import NavigationTabs from "@/components/common/NavigationTabs";
import { TabItem } from "@/lib/types/common/navigation";

interface AlertLogProps {
  alerts: Alert[];
  tabs: FilterOption[];
  currentFilter?: string;
  onAcknowledge?: (alertId: string) => void;
  onResolve?: (alertId: string) => void;
}

export function AlertLog({ alerts, tabs, onAcknowledge, onResolve }: AlertLogProps) {

  const getSeverityStyles = (severity: string) => {
    switch (severity) {
      case "High":
        return "bg-red-100 text-red-800 dark:bg-red-900/20 dark:text-red-400";
      case "Medium":
        return "bg-orange-100 text-orange-800 dark:bg-orange-900/20 dark:text-orange-400";
      case "Low":
        return "bg-green-100 text-green-800 dark:bg-green-900/20 dark:text-green-400";
      default:
        return "bg-gray-100 text-gray-800 dark:bg-gray-900/20 dark:text-gray-400";
    }
  };

  const getStatusDotColor = (status: string) => {
    switch (status) {
      case "Active":
        return "bg-red-500";
      case "Acknowledged":
        return "bg-orange-500";
      case "Resolved":
        return "bg-green-500";
      default:
        return "bg-gray-500";
    }
  };

  const getActionButtonText = (status: string) => {
    switch (status) {
      case "Active":
        return "Acknowledge";
      case "Acknowledged":
        return "Resolve";
      default:
        return "View Details";
    }
  };

  const navigationTabs: TabItem[] = tabs.map((tab) => ({
    id: tab.value,
    label: tab.label,
    href: tab.value === "all" ? "/alerts-and-geofencing" : `/alerts-and-geofencing/${tab.value}`,
  }));

  return (
    <div className="bg-card border border-border rounded-xl p-4 sm:p-6">
      <div className="mb-4">
        <h3 className="text-base sm:text-lg font-semibold text-card-foreground mb-1">
          Alert Log
        </h3>
      </div>

      <NavigationTabs 
        tabs={navigationTabs} 
        maxWidth="max-w-[440px]"
        responsive={true}
      />

      <div className="space-y-0">
        {alerts.map((alert, index) => (
          <div
            key={alert.id}
            className={`flex flex-col sm:flex-row items-start gap-3 sm:gap-4 py-3 sm:py-4 ${
              index !== alerts.length - 1 ? "border-b border-border" : ""
            }`}
          >
            <div className={`w-2 h-2 sm:w-3 sm:h-3 rounded-full mt-1.5 sm:mt-2 shrink-0 ${getStatusDotColor(alert.status)}`}></div>
            
            <div className="flex-1 min-w-0">
              <p className="text-xs sm:text-sm text-card-foreground font-medium mb-1">
                {alert.title}
              </p>
              <div className="flex flex-col sm:flex-row items-start sm:items-center gap-1 sm:gap-2 mb-2">
                <span className={`inline-flex items-center px-2 py-0.5 rounded-full text-[10px] sm:text-xs font-medium w-fit ${getSeverityStyles(alert.severity)}`}>
                  {alert.severity}
                </span>
                <span className="text-[10px] sm:text-xs text-muted-foreground truncate">
                  {alert.location}
                </span>
              </div>
              <p className="text-[10px] sm:text-xs text-muted-foreground">
                {alert.timestamp}
              </p>
            </div>

            <div className="flex flex-wrap sm:flex-nowrap gap-2 w-full sm:w-auto shrink-0">
              {alert.status === "Resolved" ? (
                <Button
                  variant="outline"
                  size="sm"
                  className="w-full sm:w-auto px-2 sm:px-3 py-1.5 text-xs font-medium text-muted-foreground bg-transparent border border-border rounded-lg hover:bg-accent transition-colors cursor-pointer"
                >
                  View Details
                </Button>
              ) : (
                <>
                  <Button
                    variant="outline"
                    size="sm"
                    onClick={() => {
                      if (alert.status === "Active" && onAcknowledge) {
                        onAcknowledge(alert.id);
                      } else if (alert.status === "Acknowledged" && onResolve) {
                        onResolve(alert.id);
                      }
                    }}
                    className="flex-1 sm:flex-none px-2 sm:px-3 py-1.5 text-xs font-medium text-muted-foreground bg-transparent border border-border rounded-lg hover:bg-accent transition-colors cursor-pointer"
                  >
                    {getActionButtonText(alert.status)}
                  </Button>
                  <Button
                    variant="outline"
                    size="sm"
                    className="flex-1 sm:flex-none px-2 sm:px-3 py-1.5 text-xs font-medium text-muted-foreground bg-transparent border border-border rounded-lg hover:bg-accent transition-colors cursor-pointer"
                  >
                    View Details
                  </Button>
                </>
              )}
            </div>
          </div>
        ))}
        
      </div>
    </div>
  );
}
