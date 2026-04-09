const PillarCardSkeleton = () => (
  <div className="relative bg-card border border-border rounded-2xl p-8 animate-pulse">
    {/* Icon Box Placeholder */}
    <div className="w-12 h-12 rounded-xl bg-muted mb-5" />
    
    {/* Title Placeholder */}
    <div className="h-5 w-3/4 bg-muted rounded-md mb-3" />
    
    {/* Description Lines */}
    <div className="space-y-2">
      <div className="h-3 w-full bg-muted/60 rounded" />
      <div className="h-3 w-5/6 bg-muted/60 rounded" />
      <div className="h-3 w-4/6 bg-muted/60 rounded" />
    </div>
  </div>
);

export default PillarCardSkeleton;