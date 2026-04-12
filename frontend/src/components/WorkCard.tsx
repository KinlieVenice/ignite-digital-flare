const WorkCard = ({work} : {work: any}) => {
    const Icon = work.icon as React.ElementType<{ size?: number; className?: string }>;
    return (
        <>
            <div className="relative overflow-hidden aspect-[16/10]">
                <img
                    src={import.meta.env.VITE_STRAPI_API_URL + work.image.url}
                    alt={`${work.title} — ${work.category}`}
                    className="w-full h-full object-cover object-top transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-card dark:via-card/50 via-card/5 to-transparent" />

                <div className="absolute top-4 flex justify-between items-center w-full px-4 flex-wrap">
                    <div className="flex items-center gap-1.5 bg-background/80 backdrop-blur-sm border border-border rounded-full px-3 py-1">
                        {/* <Icon size={14} className="text-flame" /> */}
                        <span className="text-[11px] font-bold text-foreground tracking-wide">
                            {work.result}
                        </span>
                    </div>

                    <div className="">
                        <span className="text-[11px] font-semibold tracking-wider uppercase text-flame bg-flame/15 backdrop-blur-sm px-3 py-1 rounded-full">
                            {work.category}
                        </span>
                    </div>
                </div>

            </div>

            <div className="p-6">
                <h3 className="font-display text-lg font-semibold text-foreground mb-1">
                    {work.title}
                </h3>
                <p className="text-flame text-sm font-medium mb-3">
                    {work.excerpt}
                </p>
                <p className="text-muted-foreground text-sm leading-relaxed line-clamp-2">
                    {work.description}
                </p>

                <div className="mt-4 flex items-center text-xs font-medium text-muted-foreground group-hover:text-flame transition-colors duration-300">
                    View full case study →
                </div>
            </div>

            <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-fire opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
        </>
    );
}

export default WorkCard;