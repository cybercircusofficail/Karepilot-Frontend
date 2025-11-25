"use client";

import { PerformanceStatItem, PerformanceStatisticsProps } from "@/lib/types/common/performance";

export type { PerformanceStatItem, PerformanceStatisticsProps };

export function PerformanceStatistics({
  title = "",
  stats,
  className = "",
  showBorder = true,
  gridClassName = "grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-4 gap-4",
  isLoading = false,
}: PerformanceStatisticsProps & { isLoading?: boolean }) {
  const containerClasses = showBorder
    ? "bg-background border border-border rounded-3xl p-6"
    : "bg-background rounded-3xl";

  if (isLoading) {
    return (
      <div className={`${containerClasses} ${className} w-full max-w-full overflow-hidden`}>
        {title && (
          <div className="h-6 bg-muted rounded w-48 mb-6 animate-pulse"></div>
        )}
        <div className={gridClassName}>
          {[1, 2, 3, 4, 5].map((i) => (
            <div
              key={i}
              className="bg-background border border-border rounded-3xl p-4 animate-pulse"
            >
              <div className="h-8 bg-muted rounded w-16 mx-auto mb-2"></div>
              <div className="h-4 bg-muted rounded w-24 mx-auto"></div>
            </div>
          ))}
        </div>
      </div>
    );
  }

  return (
    <div className={`${containerClasses} ${className} w-full max-w-full overflow-hidden`}>
      {title && (
        <h3 className="text-lg font-semibold text-foreground mb-6">{title}</h3>
      )}

      <div className={gridClassName}>
        {stats.length > 0 ? (
          stats.map((stat) => (
          <div
            key={stat.id}
            className="bg-background border border-border rounded-3xl p-4 text-center"
          >
            <div
              className="text-2xl font-bold mb-2"
              style={{ color: stat.color }}
            >
              {stat.value}
            </div>
            <div className="text-sm text-foreground">{stat.label}</div>
          </div>
          ))
        ) : (
          <div className="col-span-full text-sm text-muted-foreground text-center">
            No statistics available
          </div>
        )}
      </div>
    </div>
  );
}