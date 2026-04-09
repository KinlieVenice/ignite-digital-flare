import { motion } from "framer-motion";

const FireLoader = ({ size = 40, className }: { size?: number; className?: string }) => {
  return (
    <div className={`flex items-center justify-center col-span-full ${className || ''}`} role="status">
      <motion.svg
        width={size}
        height={size}
        viewBox="0 0 50 50"
        className="animate-spin"
        // We use Framer Motion just for a smooth entry, 
        // the spin itself is pure CSS for performance.
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.3 }}
      >
        <defs>
          {/* This linear gradient uses your 3 main brand colors */}
          <linearGradient id="fire-gradient" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="hsl(8, 85%, 50%)" />   {/* Ember */}
            <stop offset="50%" stopColor="hsl(24, 100%, 55%)" /> {/* Flame */}
            <stop offset="100%" stopColor="hsl(38, 100%, 65%)" /> {/* Spark */}
          </linearGradient>
          
          {/* A soft glow that matches the Flame color */}
          <filter id="glow">
            <feGaussianBlur stdDeviation="1.5" result="coloredBlur" />
            <feMerge>
              <feMergeNode in="coloredBlur" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>
        </defs>

        {/* The Track (the faint circle underneath) */}
        <circle
          cx="25"
          cy="25"
          r="20"
          fill="none"
          strokeWidth="4"
          className="stroke-muted/30" // Uses your muted "Ash" color
        />

        {/* The Spinner (the animated part) */}
        <circle
          cx="25"
          cy="25"
          r="20"
          fill="none"
          strokeWidth="4"
          stroke="url(#fire-gradient)" // Applies the multi-color gradient
          strokeLinecap="round"
          filter="url(#glow)" // Applies the soft glow
          // This creates the "dash" effect (a 1/4 circle)
          strokeDasharray="31.4 31.4" 
        />
      </motion.svg>
      <span className="sr-only">Loading...</span>
    </div>
  );
};

export default FireLoader;



// const FireSpinner = ({ size = 48 }: { size?: number }) => (
//   <div style={{ width: size, height: size }} className="relative flex items-center justify-center">
//     {/* Inner Glow Surface */}
//     <div className="absolute inset-0 rounded-full bg-card border-4 border-muted/20" />
    
//     {/* The Active Flame Spinner */}
//     <div className="absolute inset-0 rounded-full animate-fire-rotate overflow-hidden">
//       <div className="w-full h-full rounded-full bg-gradient-to-tr from-ember via-flame to-spark opacity-80 blur-[2px]" />
//     </div>
    
//     {/* Clear "Spark" Tip (Gives it a sharp leading edge) */}
//     <div className="absolute top-1 left-1/2 -translate-x-1/2 w-2 h-2 rounded-full bg-spark shadow-glow animate-fire-rotate" />
    
//     <span className="sr-only">Igniting...</span>
//   </div>
// );

// export default FireSpinner;