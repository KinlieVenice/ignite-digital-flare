const ServiceDetailSkeleton = () => (
  <div className="min-h-screen bg-background animate-pulse">
    {/* Hero Skeleton */}
    <section className="pt-32 pb-20 relative">
      <div className="container mx-auto px-6">
        {/* Back Link placeholder */}
        <div className="h-4 w-32 bg-muted rounded mb-8" />
        
        <div className="grid justify-items-center">
          {/* Icon Box */}
          <div className="w-16 h-16 rounded-2xl bg-muted mb-6" />
          {/* Title */}
          <div className="h-12 w-2/3 max-w-md bg-muted rounded-lg mb-4" />
          {/* Excerpt */}
          <div className="h-6 w-1/2 max-w-xs bg-muted/60 rounded-md mb-6" />
          {/* Description Lines */}
          <div className="space-y-2 w-full max-w-2xl">
            <div className="h-3 w-full bg-muted/40 rounded" />
            <div className="h-3 w-5/6 mx-auto bg-muted/40 rounded" />
          </div>
        </div>
      </div>
    </section>

    {/* What's Included Skeleton */}
    <section className="py-20">
      <div className="container mx-auto px-6">
        <div className="grid justify-items-center">
          <div className="h-8 w-48 bg-muted rounded-md mb-10" />
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 w-full max-w-4xl">
            {[1, 2, 3, 4, 5, 6].map((i) => (
              <div key={i} className="h-16 bg-card border border-border rounded-xl px-4 flex items-center gap-3">
                <div className="w-5 h-5 rounded-full bg-muted flex-shrink-0" />
                <div className="h-3 w-2/3 bg-muted/60 rounded" />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>

    {/* Pricing Skeleton */}
    <section className="py-20">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16 space-y-4">
          <div className="h-4 w-20 bg-muted mx-auto rounded" />
          <div className="h-10 w-64 bg-muted mx-auto rounded" />
        </div>
        <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {[1, 2, 3].map((i) => (
            <div key={i} className="bg-card border border-border rounded-2xl p-8 space-y-6">
              <div className="space-y-3">
                <div className="h-5 w-24 bg-muted rounded" />
                <div className="h-8 w-32 bg-muted rounded" />
                <div className="h-4 w-full bg-muted/40 rounded" />
              </div>
              <div className="space-y-3">
                <div className="h-3 w-full bg-muted/30 rounded" />
                <div className="h-3 w-full bg-muted/30 rounded" />
                <div className="h-3 w-3/4 bg-muted/30 rounded" />
              </div>
              <div className="h-12 w-full bg-muted rounded-xl" />
            </div>
          ))}
        </div>
      </div>
    </section>
  </div>
);

export default ServiceDetailSkeleton;