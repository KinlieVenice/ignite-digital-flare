import { DynamicIcon } from "lucide-react/dynamic";

const PillarCard = ({pillar} : {pillar: { icon: any; title: string; description: string }}) => {
    return (
        <>
            <div className="w-12 h-12 rounded-xl bg-gradient-fire flex items-center justify-center mb-5 shadow-glow group-hover:shadow-fire transition-shadow duration-500">
                <DynamicIcon name={pillar.icon} size={22} className="text-primary-foreground" />
            </div>
            <h3 className="font-display text-lg font-semibold mb-2">
                {pillar.title}
            </h3>
            <p className="text-muted-foreground text-sm leading-relaxed">
                {pillar.description}
            </p>
        </>
    )
}

export default PillarCard;