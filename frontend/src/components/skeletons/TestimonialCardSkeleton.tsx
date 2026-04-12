const TestimonialCardSkeleton = () => {
  return (
    <div className="max-w-2xl mx-auto animate-pulse">
      <div className="bg-card border border-border rounded-2xl p-10 sm:p-12 text-center relative">
        
        {/* Quote icon placeholder */}
        <div className="w-12 h-12 rounded-xl bg-muted/80 mx-auto mb-8" />

        {/* Quote text placeholders */}
        <div className="space-y-3 mb-8 flex flex-col items-center">
          <div className="h-4 w-full bg-muted/60 rounded-full" />
          <div className="h-4 w-5/6 bg-muted/60 rounded-full" />
          <div className="h-4 w-4/6 bg-muted/40 rounded-full" />
        </div>

        {/* Author placeholders */}
        <div className="flex flex-col items-center space-y-2">
          <div className="h-5 w-32 bg-muted rounded-md" />
          <div className="h-3 w-48 bg-muted/50 rounded-md" />
        </div>

        {/* Navigation Dots placeholder */}
        <div className="flex items-center justify-center gap-3 mt-8">
           {/* Left Arrow */}
          <div className="w-9 h-9 rounded-lg bg-muted/40" />
          
          {/* Dots */}
          <div className="flex items-center gap-1.5">
            <div className="w-2 h-2 rounded-full bg-muted/60" />
            <div className="w-6 h-2 rounded-full bg-muted/80" />
            <div className="w-2 h-2 rounded-full bg-muted/60" />
          </div>

          {/* Right Arrow */}
          <div className="w-9 h-9 rounded-lg bg-muted/40" />
        </div>
        
      </div>
    </div>
  );
};

export default TestimonialCardSkeleton;