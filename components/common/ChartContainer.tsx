"use client";

interface ChartContainerProps {
  title: string;
  subtitle: string;
  children: React.ReactNode;
  className?: string;
}

export function ChartContainer({ title, subtitle, children, className = "" }: ChartContainerProps) {
  return (
    <div className={`bg-background border border-border rounded-xl p-6 w-full max-w-full overflow-hidden ${className}`}>
      <div className="mb-6">
        <h3 className="text-lg font-semibold text-foreground mb-1">{title}</h3>
        <p className="text-sm text-muted-foreground">{subtitle}</p>
      </div>
      <div className="w-full max-w-full overflow-hidden">
        {children}
      </div>
    </div>
  );
}
