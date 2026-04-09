const WorkDetailsSkeleton = () => (
  <div className="min-h-screen bg-background animate-pulse">
    {/* Hero Image Skeleton */}
    <section className="pt-24">
      <div className="container mx-auto px-6">
        {/* Back Button Placeholder */}
        <div className="h-4 w-32 bg-muted rounded mb-6 mt-8" />

        <div className="relative rounded-2xl overflow-hidden border border-border bg-muted h-80 sm:aspect-[21/9] w-full">
          {/* Bottom Info Overlay Placeholder */}
          <div className="absolute bottom-0 left-0 right-0 p-4 sm:p-10 space-y-4">
            <div className="flex gap-3">
              <div className="h-6 w-20 bg-background/40 rounded-full" />
              <div className="h-6 w-24 bg-background/40 rounded-full" />
            </div>
            <div className="h-10 w-1/3 bg-background/40 rounded-lg" />
            <div className="h-5 w-1/2 bg-background/20 rounded-md" />
          </div>
        </div>
      </div>
    </section>

    {/* Content Grid Skeleton */}
    <section className="py-20">
      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-3 gap-12 max-w-6xl mx-auto">
          {/* Main Content Side */}
          <div className="lg:col-span-2 space-y-6">
            <div className="h-8 w-40 bg-muted rounded-md" />
            <div className="space-y-3">
              <div className="h-4 w-full bg-muted/60 rounded" />
              <div className="h-4 w-full bg-muted/60 rounded" />
              <div className="h-4 w-3/4 bg-muted/60 rounded" />
            </div>
          </div>

          {/* Sidebar Side */}
          <div className="space-y-8">
            {[1, 2, 3].map((i) => (
              <div key={i} className="bg-card border border-border rounded-2xl p-6 space-y-3">
                <div className="h-4 w-24 bg-muted rounded" />
                <div className="h-3 w-full bg-muted/60 rounded" />
                <div className="h-3 w-5/6 bg-muted/60 rounded" />
              </div>
            ))}
            {/* Button Placeholder */}
            <div className="h-14 w-full bg-muted rounded-xl" />
          </div>
        </div>
      </div>
    </section>
  </div>
);

export default WorkDetailsSkeleton;