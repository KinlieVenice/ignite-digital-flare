const ServiceCardSkeleton = () => {
  return (
    <div className="relative p-8 bg-card border border-border rounded-2xl overflow-hidden h-full animate-pulse">
      {/* 1. Top Section: Icon and Arrow */}
      <div className="flex items-start justify-between mb-6">
        {/* The Icon Box placeholder */}
        <div className="w-12 h-12 rounded-xl bg-muted" />
        {/* The Arrow placeholder */}
        <div className="w-4 h-4 bg-muted/40 rounded" />
      </div>

      {/* 2. Title Placeholder */}
      <div className="h-6 w-2/3 bg-muted rounded-md mb-6" />

      {/* 3. Features List Placeholder (3 items) */}
      <div className="space-y-3">
        {[1, 2, 3].map((i) => (
          <div key={i} className="flex items-center gap-2">
            {/* The Dot */}
            <div className="w-1 h-1 rounded-full bg-muted/60 flex-shrink-0" />
            {/* The Line */}
            <div className={`h-3 bg-muted/40 rounded ${i === 3 ? 'w-1/2' : 'w-3/4'}`} />
          </div>
        ))}
      </div>

      {/* 4. Bottom Link Placeholder */}
      <div className="mt-6 pt-2">
        <div className="h-3 w-32 bg-muted/60 rounded" />
      </div>
    </div>
  );
};

export default ServiceCardSkeleton; 