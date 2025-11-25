"use client";

import { UserDemographic } from '@/lib/types/analytics/analytics';

interface UserDemographicsProps {
  className?: string;
  data?: UserDemographic[];
  isLoading?: boolean;
}

export function UserDemographics({ 
  className = "", 
  data = [],
  isLoading = false 
}: UserDemographicsProps) {
  if (isLoading) {
    return (
      <div className={`bg-background border border-border rounded-xl p-6 ${className}`}>
        <div className="mb-6">
          <div className="h-6 bg-muted rounded w-40 mb-2 animate-pulse"></div>
          <div className="h-4 bg-muted rounded w-48 animate-pulse"></div>
        </div>
        <div className="space-y-4">
          {[1, 2, 3, 4].map((i) => (
            <div key={i} className="flex items-center justify-between animate-pulse">
              <div className="h-4 bg-muted rounded w-24"></div>
              <div className="h-4 bg-muted rounded w-12"></div>
            </div>
          ))}
        </div>
      </div>
    );
  }

  return (
    <div className={`bg-background border border-border rounded-xl p-6 w-full max-w-full overflow-hidden ${className}`}>
      <div className="mb-6">
        <h3 className="text-lg font-semibold text-foreground mb-1">User Demographics</h3>
        <p className="text-sm text-muted-foreground">User distribution by category</p>
      </div>

      <div className="space-y-4">
        {data.length > 0 ? (
          data.map((demographic, index) => (
            <div key={index} className="flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div 
                  className="w-3 h-3 rounded-full"
                  style={{ backgroundColor: demographic.color }}
                />
                <span className="text-sm font-medium text-foreground">{demographic.category}</span>
              </div>
              <span className="text-sm text-muted-foreground">{demographic.count}</span>
            </div>
          ))
        ) : (
          <div className="text-sm text-muted-foreground">No demographic data available</div>
        )}
      </div>
    </div>
  );
}