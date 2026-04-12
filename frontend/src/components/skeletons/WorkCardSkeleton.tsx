const WorkCardSkeleton = () => {
  return (
    <div className="relative bg-card border border-border rounded-2xl overflow-hidden h-full">
      {/* 1. Image & Overlay Skeleton */}
      <div className="relative overflow-hidden aspect-[16/10] bg-muted animate-pulse">
        {/* Floating Badges Skeleton */}
        <div className="absolute top-4 flex justify-between items-center w-full px-4">
          <div className="h-6 w-20 bg-background/50 rounded-full" />
          <div className="h-6 w-24 bg-background/50 rounded-full" />
        </div>
      </div>

      {/* 2. Content Skeleton */}
      <div className="p-6 space-y-4 animate-pulse">
        {/* Title */}
        <div className="h-6 w-3/4 bg-muted rounded-md" />
        
        {/* Excerpt */}
        <div className="h-4 w-1/2 bg-muted/60 rounded-md" />
        
        {/* Description (2 lines) */}
        <div className="space-y-2">
          <div className="h-3 w-full bg-muted/40 rounded" />
          <div className="h-3 w-5/6 bg-muted/40 rounded" />
        </div>

        {/* View Case Study Link */}
        <div className="pt-2">
          <div className="h-3 w-32 bg-muted/60 rounded" />
        </div>
      </div>
    </div>
  );
};

export default WorkCardSkeleton;