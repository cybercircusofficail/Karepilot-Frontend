"use client";

interface UsagePatternsProps {
  title: string;
  subtitle: string;
  className?: string;
  data?: {
    peakHours?: { hour: number; count: number }[];
    dayOfWeek?: { day: string; count: number }[];
  };
  isLoading?: boolean;
}

export function UsagePatterns({
  title,
  subtitle,
  className = "",
  data,
  isLoading = false,
}: UsagePatternsProps) {
  if (isLoading) {
    return (
      <div className={`bg-background border border-border rounded-xl p-6 w-full max-w-full overflow-hidden ${className}`}>
        <div className="mb-6">
          <div className="h-6 bg-muted rounded w-32 mb-2 animate-pulse"></div>
          <div className="h-4 bg-muted rounded w-48 animate-pulse"></div>
        </div>
        <div className="bg-muted/20 border border-border rounded-xl p-6 animate-pulse">
          <div className="h-64 bg-muted rounded"></div>
        </div>
      </div>
    );
  }
  return (
    <div
      className={`bg-background border border-border rounded-xl p-6 ${className}`}
    >
      <div className="mb-6">
        <h3 className="text-lg font-semibold text-foreground mb-1">{title}</h3>
        <p className="text-sm text-muted-foreground">{subtitle}</p>
      </div>

      <div className="bg-muted/20 border border-border rounded-xl p-6">
        <div className="text-center">
          <div className="flex justify-center mb-4">
            <div className="flex items-end gap-1 h-16">
              <div
                className="w-3 bg-muted-foreground/30 rounded-t"
                style={{ height: "40px" }}
              ></div>
              <div
                className="w-3 bg-muted-foreground/30 rounded-t"
                style={{ height: "60px" }}
              ></div>
              <div
                className="w-3 bg-muted-foreground/30 rounded-t"
                style={{ height: "35px" }}
              ></div>
              <div
                className="w-3 bg-muted-foreground/30 rounded-t"
                style={{ height: "45px" }}
              ></div>
              <div
                className="w-3 bg-muted-foreground/30 rounded-t"
                style={{ height: "55px" }}
              ></div>
              <div
                className="w-3 bg-muted-foreground/30 rounded-t"
                style={{ height: "25px" }}
              ></div>
              <div
                className="w-3 bg-muted-foreground/30 rounded-t"
                style={{ height: "50px" }}
              ></div>
            </div>
          </div>
          <h4 className="text-sm font-medium text-foreground mb-2">
            Hourly Usage Heatmap
          </h4>
          <p className="text-xs text-muted-foreground">
            Peak hours and usage patterns throughout the day
          </p>
        </div>
      </div>
    </div>
  );
}
