"use client";

import { ChartContainer } from "@/components/common/ChartContainer";
import { LineChartComponent } from "@/components/common/LineChartComponent";
import { lines } from "@/lib/analytics/data";
import { UserGrowthDataPoint } from "@/lib/types/analytics/analytics";
import StatsGridSkeleton from "@/components/common/StatsGridSkeleton";

interface UserGrowthChartProps {
  className?: string;
  data?: UserGrowthDataPoint[];
  isLoading?: boolean;
}

export function UserGrowthChart({
  className = "",
  data = [],
  isLoading = false,
}: UserGrowthChartProps) {
  if (isLoading) {
    return (
      <div className="bg-background border border-border rounded-xl p-6">
        <div className="h-64 animate-pulse">
          <div className="h-4 bg-muted rounded w-32 mb-4"></div>
          <div className="h-4 bg-muted rounded w-48 mb-6"></div>
          <div className="h-full bg-muted rounded"></div>
        </div>
      </div>
    );
  }

  const currentWeekTotal = data.reduce((sum, item) => sum + item.currentWeek, 0);
  const previousWeekTotal = data.reduce((sum, item) => sum + item.previousWeek, 0);

  return (
    <ChartContainer
      title="User Growth"
      subtitle="Monthly active user growth"
      className={`${className} w-full max-w-full overflow-hidden`}
    >
      <div className="flex items-center gap-6 mb-6">
        <div className="flex items-center gap-2">
          <div className="w-4 h-0.5 bg-green-500 rounded-full"></div>
          <span className="text-sm text-foreground">
            Current Week: {currentWeekTotal.toLocaleString()}
          </span>
        </div>
        <div className="flex items-center gap-2">
          <div className="w-4 h-0.5 bg-blue-500 rounded-full"></div>
          <span className="text-sm text-foreground">
            Previous Week: {previousWeekTotal.toLocaleString()}
          </span>
        </div>
      </div>
      {data.length > 0 ? (
        <LineChartComponent data={data} lines={lines} height={256} />
      ) : (
        <div className="h-64 flex items-center justify-center text-muted-foreground">
          No data available
        </div>
      )}
    </ChartContainer>
  );
}
