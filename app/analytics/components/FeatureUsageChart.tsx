"use client";

import { geoChartOptions } from "@/lib/analytics/data";
import React from "react";
import { Chart } from "react-google-charts";
import { FeatureUsageData, GeoChartData } from "@/lib/types/analytics/analytics";

interface FeatureUsageChartProps {
  data?: FeatureUsageData[];
  geoChartData?: GeoChartData[];
  isLoading?: boolean;
}

export default function FeatureUsageChart({
  data = [],
  geoChartData = [],
  isLoading = false,
}: FeatureUsageChartProps) {
  const chartData = [
    ["Country", "Usage"],
    ...geoChartData.map((item) => [item.country, item.usage]),
  ];

  if (isLoading) {
    return (
      <div className="bg-background border border-border rounded-xl p-6">
        <div className="mb-6">
          <div className="h-6 bg-muted rounded w-32 mb-2 animate-pulse"></div>
          <div className="h-4 bg-muted rounded w-48 animate-pulse"></div>
        </div>
        <div className="mb-6">
          <div className="h-48 rounded-lg bg-muted animate-pulse"></div>
        </div>
        <div className="space-y-4">
          {[1, 2, 3, 4].map((i) => (
            <div key={i} className="space-y-2">
              <div className="h-4 bg-muted rounded w-40 animate-pulse"></div>
              <div className="h-2 bg-muted rounded animate-pulse"></div>
            </div>
          ))}
        </div>
      </div>
    );
  }

  return (
    <div className="bg-background border border-border rounded-xl p-6 w-full max-w-full overflow-hidden">
      <div className="mb-6">
        <h3 className="text-lg font-semibold text-foreground mb-1">
          Feature Usage
        </h3>
        <p className="text-sm text-muted-foreground">
          Most popular features and their usage
        </p>
      </div>

      <div className="mb-6 w-full max-w-full overflow-hidden">
        <div className="h-48 rounded-lg overflow-hidden border border-border bg-muted/20 w-full">
          {chartData.length > 1 ? (
            <Chart
              chartType="GeoChart"
              width="100%"
              height="100%"
              data={chartData}
              options={geoChartOptions}
            />
          ) : (
            <div className="h-full flex items-center justify-center text-muted-foreground">
              No geographic data available
            </div>
          )}
        </div>
      </div>

      <div className="space-y-4">
        {data.length > 0 ? (
          data.map((feature, index) => {
            const percentage = (feature.value / feature.max) * 100;

            return (
              <div key={index} className="space-y-2">
                <div className="flex justify-between items-center">
                  <span className="text-sm font-medium text-foreground">
                    {feature.name}:
                  </span>
                  <span className="text-sm text-muted-foreground">
                    {feature.name.includes("Map Views")
                      ? feature.value.toFixed(1)
                      : `${feature.value}%`}
                  </span>
                </div>
                <div className="w-full bg-muted rounded-full h-2">
                  <div
                    className="bg-blue-500 h-1 rounded-full transition-all duration-500 ease-out"
                    style={{ width: `${percentage}%` }}
                  />
                </div>
              </div>
            );
          })
        ) : (
          <div className="text-sm text-muted-foreground">
            No feature usage data available
          </div>
        )}
      </div>
    </div>
  );
}
