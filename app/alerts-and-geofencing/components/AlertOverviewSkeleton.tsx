"use client";

export function AlertOverviewSkeleton() {
  return (
    <div className="bg-card border border-border rounded-xl p-4 sm:p-6 animate-pulse">
      <div className="mb-4">
        <div className="h-5 bg-muted rounded w-32 mb-1"></div>
        <div className="h-3 bg-muted rounded w-48"></div>
      </div>

      <div className="grid grid-cols-3 gap-2 sm:gap-3 mb-4 sm:mb-6">
        {[1, 2, 3].map((i) => (
          <div
            key={i}
            className="text-center border border-border rounded-3xl bg-muted/50 p-3 sm:p-4 lg:p-6"
          >
            <div className="h-8 bg-muted rounded w-12 mx-auto mb-2"></div>
            <div className="h-3 bg-muted rounded w-16 mx-auto"></div>
          </div>
        ))}
      </div>

      <div>
        <div className="h-4 bg-muted rounded w-24 mb-3 hidden sm:block"></div>
        <div className="space-y-2 sm:space-y-3">
          {[1, 2, 3].map((i) => (
            <div
              key={i}
              className="flex items-start gap-2 sm:gap-3 p-2 sm:p-3 rounded-lg border border-border"
            >
              <div className="w-2 h-2 sm:w-3 sm:h-3 rounded-full bg-muted mt-1.5 shrink-0"></div>
              <div className="flex-1 min-w-0">
                <div className="h-4 bg-muted rounded w-full mb-2"></div>
                <div className="flex gap-2">
                  <div className="h-5 bg-muted rounded w-16"></div>
                  <div className="h-5 bg-muted rounded w-24"></div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

