export default function SupportPage() {
    return (
        <div className="h-full px-6 sm:px-8 max-w-7xl mx-auto flex flex-col overflow-y-auto">
            {/* Cabeçalho Uniforme */}
            <div className="mb-12 md:mb-20 space-y-6">
                <h1 className="text-5xl md:text-6xl font-bold tracking-tighter text-white">
                    Support
                </h1>
                <p className="text-xl md:text-2xl text-white/50 max-w-2xl font-light leading-relaxed">
                    Direct engineering support. <br />
                    No bots, just solutions.
                </p>
            </div>

            {/* Conteúdo Estruturado */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 border-t border-white/5 pt-12">

                <div className="space-y-6">
                    <p className="text-lg text-white/60 leading-relaxed max-w-md">
                        We aim to respond to all inquiries within 24 hours.
                        For faster resolution, please include your browser version and extension details.
                    </p>

                    <div className="inline-block">
                        <span className="text-xs font-mono text-white/30 uppercase tracking-widest mb-2 block">
                            Contact Email
                        </span>
                        <a
                            href="mailto:contact.orbit.app@gmail.com"
                            className="text-2xl md:text-3xl text-white hover:text-purple-300 transition-colors font-medium border-b border-white/10 pb-1 hover:border-purple-300"
                        >
                            contact.orbit.app@gmail.com
                        </a>
                    </div>
                </div>

                {/* FAQ ou info adicional sutil */}
                <div className="md:pl-12 md:border-l border-white/5 space-y-8">
                    <div>
                        <h3 className="text-white font-medium mb-2">Response Time</h3>
                        <p className="text-white/40 text-sm">Mon-Fri: 24h max<br />Weekend: 48h max</p>
                    </div>
                    <div>
                        <h3 className="text-white font-medium mb-2">Privacy Note</h3>
                        <p className="text-white/40 text-sm">Support tickets are handled locally and deleted after resolution.</p>
                    </div>
                </div>

            </div>
        </div>
    );
}
