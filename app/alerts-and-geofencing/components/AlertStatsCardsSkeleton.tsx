"use client";

export function AlertStatsCardsSkeleton() {
  return (
    <div className="mb-6">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {Array.from({ length: 4 }).map((_, index) => (
          <div
            key={index}
            className="bg-card rounded-4xl border border-border p-6 max-h-[120px] animate-pulse"
          >
            <div className="flex items-start justify-between mb-4">
              <div className="h-4 bg-muted rounded w-24"></div>
              <div className="w-10 h-10 rounded-full bg-muted"></div>
            </div>
            <div className="h-9 bg-muted rounded w-20"></div>
          </div>
        ))}
      </div>
    </div>
  );
}

