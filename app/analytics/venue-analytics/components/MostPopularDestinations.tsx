"use client";

import { TrendingUp, TrendingDown, ArrowRight } from "@/icons/Icons";

interface DestinationItem {
  id: string;
  name: string;
  count: number;
  trend: "up" | "down" | "neutral";
  trendColor: string;
}

interface MostPopularDestinationsProps {
  title: string;
  subtitle: string;
  destinations: DestinationItem[];
  className?: string;
  isLoading?: boolean;
}

export function MostPopularDestinations({
  title,
  subtitle,
  destinations,
  className = "",
  isLoading = false,
}: MostPopularDestinationsProps) {
  if (isLoading) {
    return (
      <div className={`bg-background border border-border rounded-xl p-6 w-full max-w-full overflow-hidden ${className}`}>
        <div className="mb-6">
          <div className="h-6 bg-muted rounded w-40 mb-2 animate-pulse"></div>
          <div className="h-4 bg-muted rounded w-48 animate-pulse"></div>
        </div>
        <div className="space-y-4">
          {[1, 2, 3, 4, 5].map((i) => (
            <div key={i} className="flex items-center justify-between animate-pulse">
              <div className="h-4 bg-muted rounded w-32"></div>
              <div className="h-4 bg-muted rounded w-16"></div>
            </div>
          ))}
        </div>
      </div>
    );
  }
  const getTrendIcon = (trend: string, color: string) => {
    if (trend === "up") {
      return <TrendingUp className="w-4 h-4" style={{ color }} />;
    } else if (trend === "down") {
      return <TrendingDown className="w-4 h-4" style={{ color }} />;
    }
    return <ArrowRight className="w-4 h-4" style={{ color }} />;
  };

  return (
    <div
      className={`bg-background border border-border rounded-xl p-6 w-full max-w-full overflow-hidden ${className}`}
    >
      <div className="mb-6">
        <h3 className="text-lg font-semibold text-foreground mb-1">{title}</h3>
        <p className="text-sm text-muted-foreground">{subtitle}</p>
      </div>

      <div className="space-y-4">
        {destinations.length > 0 ? (
          destinations.map((destination) => (
          <div
            key={destination.id}
            className="flex items-center justify-between"
          >
            <div className="flex items-center gap-3">
              <div className="flex items-center">
                {getTrendIcon(destination.trend, destination.trendColor)}
              </div>
              <span className="text-sm font-medium text-foreground">
                {destination.name}
              </span>
            </div>
            <div className="flex items-center gap-2">
              <span className="text-sm font-semibold text-foreground">
                {destination.count.toLocaleString()}
              </span>
            </div>
          </div>
          ))
        ) : (
          <div className="text-sm text-muted-foreground">No destination data available</div>
        )}
      </div>
    </div>
  );
}
