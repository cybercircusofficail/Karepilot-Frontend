"use client";

export function AlertLogSkeleton() {
  return (
    <div className="bg-card border border-border rounded-xl p-4 sm:p-6 animate-pulse">
      <div className="mb-4">
        <div className="h-5 bg-muted rounded w-24 mb-1"></div>
      </div>

      <div className="flex gap-2 mb-4">
        {[1, 2, 3, 4].map((i) => (
          <div key={i} className="h-8 bg-muted rounded w-24"></div>
        ))}
      </div>

      <div className="space-y-0">
        {[1, 2, 3, 4, 5].map((i) => (
          <div
            key={i}
            className={`flex flex-col sm:flex-row items-start gap-3 sm:gap-4 py-3 sm:py-4 ${
              i !== 5 ? "border-b border-border" : ""
            }`}
          >
            <div className="w-2 h-2 sm:w-3 sm:h-3 rounded-full bg-muted mt-1.5 sm:mt-2 shrink-0"></div>

            <div className="flex-1 min-w-0">
              <div className="h-4 bg-muted rounded w-full mb-2"></div>
              <div className="flex flex-col sm:flex-row items-start sm:items-center gap-1 sm:gap-2 mb-2">
                <div className="h-5 bg-muted rounded w-16"></div>
                <div className="h-4 bg-muted rounded w-32"></div>
              </div>
              <div className="h-3 bg-muted rounded w-24"></div>
            </div>

            <div className="flex flex-wrap sm:flex-nowrap gap-2 w-full sm:w-auto shrink-0">
              <div className="h-8 bg-muted rounded w-24"></div>
              <div className="h-8 bg-muted rounded w-24"></div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

