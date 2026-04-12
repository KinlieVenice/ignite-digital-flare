const CTA = () => {
    return (
        <>
            <h2 className="font-display text-2xl sm:text-3xl font-bold mb-4">
                Ready to Ignite?
            </h2>
            <p className="text-muted-foreground mb-8 max-w-md mx-auto text-sm">
                Let's discuss how we can build a solution that drives real outcomes for your business.
            </p>
            <a
                href="mailto:hello@nexflare.tech"
                className="inline-flex items-center gap-2 bg-gradient-fire text-primary-foreground px-8 py-3 rounded-xl font-semibold text-sm shadow-glow hover:shadow-fire transition-all duration-300"
            >
                Get in Touch
            </a>
        </>
    )
}

export default CTA