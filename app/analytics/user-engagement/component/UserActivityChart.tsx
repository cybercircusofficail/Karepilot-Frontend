"use client";

import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import { UserActivityDataPoint } from '@/lib/types/analytics/analytics';

interface UserActivityChartProps {
  className?: string;
  data?: UserActivityDataPoint[];
  isLoading?: boolean;
}

export function UserActivityChart({ 
  className = "", 
  data = [],
  isLoading = false 
}: UserActivityChartProps) {
  if (isLoading) {
    return (
      <div className={`bg-background border border-border rounded-xl p-6 ${className}`}>
        <div className="mb-6">
          <div className="h-6 bg-muted rounded w-40 mb-2 animate-pulse"></div>
          <div className="h-4 bg-muted rounded w-48 animate-pulse"></div>
        </div>
        <div className="h-80 bg-muted rounded animate-pulse"></div>
      </div>
    );
  }

  if (data.length === 0) {
    return (
      <div className={`bg-background border border-border rounded-xl p-6 ${className}`}>
        <div className="mb-6">
          <h3 className="text-lg font-semibold text-foreground mb-1">User Activity Trend</h3>
          <p className="text-sm text-muted-foreground">Daily active users over time</p>
        </div>
        <div className="h-80 flex items-center justify-center text-muted-foreground">
          No data available
        </div>
      </div>
    );
  }

  return (
    <div className={`bg-background border border-border rounded-xl p-6 w-full max-w-full overflow-hidden ${className}`}>
      <div className="mb-6">
        <h3 className="text-lg font-semibold text-foreground mb-1">User Activity Trend</h3>
        <p className="text-sm text-muted-foreground">Daily active users over time</p>
      </div>

      <div className="h-80 w-full">
        <ResponsiveContainer width="100%" height="100%">
          <BarChart data={data} margin={{ top: 20, right: 30, left: 20, bottom: 5 }}>
            <CartesianGrid strokeDasharray="3 3" stroke="hsl(var(--border))" opacity={0.3} />
            <XAxis 
              dataKey="month" 
              stroke="hsl(var(--muted-foreground))"
              fontSize={12}
              tickLine={false}
              axisLine={false}
            />
            <YAxis 
              stroke="hsl(var(--muted-foreground))"
              fontSize={12}
              domain={[0, 30]}
              tickFormatter={(value) => `${value}M`}
              tickLine={false}
              axisLine={false}
            />
            <Tooltip 
              contentStyle={{
                backgroundColor: "hsl(var(--popover))",
                border: "1px solid hsl(var(--border))",
                borderRadius: "8px",
                color: "hsl(var(--popover-foreground))",
                fontSize: "12px",
              }}
            />
            <Legend 
              wrapperStyle={{ 
                paddingTop: "20px",
                fontSize: "12px"
              }}
            />
            <Bar 
              dataKey="newUsers" 
              stackId="a" 
              fill="#3b82f6" 
              name="New Users"
              radius={[0, 0, 0, 0]}
            />
            <Bar 
              dataKey="returningUsers" 
              stackId="a" 
              fill="#93c5fd" 
              name="Returning Users"
              radius={[4, 4, 0, 0]}
            />
          </BarChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
}