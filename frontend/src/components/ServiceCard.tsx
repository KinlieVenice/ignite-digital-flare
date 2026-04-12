import { ArrowUpRight } from "lucide-react";
import { DynamicIcon } from "lucide-react/dynamic"


const ServiceCard = ({service, gradient} : {service: any, gradient: string}) => {
    return (
        <>
            <div className="absolute -top-20 -right-20 w-40 h-40 rounded-full bg-primary/0 group-hover:bg-primary/5 blur-[60px] transition-all duration-700" />

            <div className="relative z-10">
                <div className="flex items-start justify-between mb-6">
                    <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${gradient} flex items-center justify-center shadow-glow`}>
                        <DynamicIcon name={service.icon} size={22} className="text-primary-foreground" />
                    </div>
                    <ArrowUpRight
                        size={18}
                        className="text-muted-foreground/0 group-hover:text-muted-foreground transition-all duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                    />
                </div>

                <h3 className="font-display text-lg font-semibold mb-4">
                    {service.title}
                </h3>

                <ul className="space-y-2">
                    {service.features.slice(0, 3).map((feature: { id: string; feature: string }) => (
                        <li
                            key={feature.id}
                            className="text-sm text-muted-foreground flex items-center gap-2"
                        >
                            <span className="w-1 h-1 rounded-full bg-flame flex-shrink-0" />
                            {feature.feature}
                        </li>
                    ))}
                </ul>

                <div className="mt-4 text-xs font-medium text-muted-foreground group-hover:text-flame transition-colors duration-300">
                    View packages & pricing →
                </div>
            </div>
        </>
    );
}

export default ServiceCard;