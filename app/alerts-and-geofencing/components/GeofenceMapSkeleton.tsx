"use client";

export function GeofenceMapSkeleton() {
  return (
    <div className="bg-card border border-border rounded-xl p-4 sm:p-6 animate-pulse">
      <div className="mb-4">
        <div className="h-5 bg-muted rounded w-40 mb-1"></div>
        <div className="h-3 bg-muted rounded w-56"></div>
      </div>

      <div className="space-y-3">
        {[1, 2, 3].map((i) => (
          <div
            key={i}
            className="border border-border rounded-lg p-4"
          >
            <div className="flex items-start justify-between mb-3">
              <div className="flex-1">
                <div className="h-5 bg-muted rounded w-48 mb-2"></div>
                <div className="h-4 bg-muted rounded w-32 mb-2"></div>
                <div className="h-3 bg-muted rounded w-24"></div>
              </div>
              <div className="h-6 w-12 bg-muted rounded-full"></div>
            </div>
            <div className="flex gap-2 mt-3">
              <div className="h-6 bg-muted rounded w-16"></div>
              <div className="h-6 bg-muted rounded w-20"></div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

