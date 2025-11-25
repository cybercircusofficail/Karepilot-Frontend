"use client";

import { Button } from "@/components/ui/button";
import { InsightCard } from "@/lib/types/analytics/analytics";

interface QuickInsightsProps {
  insights?: InsightCard[];
  isLoading?: boolean;
}

export function QuickInsights({ insights = [], isLoading = false }: QuickInsightsProps) {
  if (isLoading) {
    return (
      <div className="bg-background border border-border rounded-xl p-6">
        <div className="mb-6">
          <div className="h-6 bg-muted rounded w-32 mb-2 animate-pulse"></div>
          <div className="h-4 bg-muted rounded w-64 animate-pulse"></div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {[1, 2, 3, 4].map((i) => (
            <div
              key={i}
              className="bg-background border border-border rounded-xl p-4 animate-pulse"
            >
              <div className="flex items-start gap-3 mb-3">
                <div className="w-2 h-2 bg-muted rounded-full mt-2 flex-shrink-0"></div>
                <div className="flex-1">
                  <div className="h-4 bg-muted rounded w-32 mb-2"></div>
                  <div className="h-12 bg-muted rounded mb-4"></div>
                  <div className="h-8 bg-muted rounded w-24"></div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    );
  }

  return (
    <div className="bg-background border border-border rounded-xl p-6">
      <div className="mb-6">
        <h3 className="text-lg font-semibold text-foreground mb-1">
          Quick Insights
        </h3>
        <p className="text-sm text-muted-foreground">
          Key insights and recommendations based on your data
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {insights.length > 0 ? (
          insights.map((insight, index) => (
            <div
              key={index}
              className="bg-background border border-border rounded-xl p-4"
            >
              <div className="flex items-start gap-3 mb-3">
                <div className="w-2 h-2 bg-red-500 rounded-full mt-2 flex-shrink-0"></div>
                <div className="flex-1">
                  <h4 className="text-sm font-semibold text-foreground mb-2">
                    {insight.title}
                  </h4>
                  <p className="text-xs text-muted-foreground leading-relaxed mb-4">
                    {insight.description}
                  </p>
                  <Button
                    variant="outline"
                    size="sm"
                    className="text-xs bg-muted hover:bg-accent hover:text-accent-foreground border-border/50"
                  >
                    {insight.actionText}
                  </Button>
                </div>
              </div>
            </div>
          ))
        ) : (
          <div className="col-span-2 text-sm text-muted-foreground">
            No insights available
          </div>
        )}
      </div>
    </div>
  );
}
