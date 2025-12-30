export default function PrivacyPage() {
    return (
        <div className="h-full px-6 sm:px-8 max-w-7xl mx-auto flex flex-col">

            {/* Cabeçalho Uniforme */}
            <div className="mb-6 md:mb-8 shrink-0">
                <div className="inline-flex items-center gap-2 px-2 py-1 rounded bg-white/5 border border-white/5 mb-6">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-500"></span>
                    <span className="text-xs font-mono text-white/60">Last updated: Dec 2025</span>
                </div>
                <h1 className="text-5xl md:text-6xl font-bold tracking-tighter text-white mb-6">
                    Privacy Protocol
                </h1>
                <p className="text-xl text-white/50 max-w-2xl font-light leading-relaxed">
                    Zero-knowledge architecture. We build tools that run locally on your device.
                </p>
            </div>

            {/* Coluna de Leitura (Scrollable) */}
            <div className="max-w-3xl flex-1 overflow-y-auto">
                <div className="prose prose-invert prose-lg prose-headings:font-semibold prose-headings:tracking-tight prose-p:text-white/60 prose-a:text-white prose-a:no-underline hover:prose-a:underline border-t border-white/5 pt-6">

                    <h3>1. Core Principle</h3>
                    <p>
                        At Orbit Tools, privacy is not a feature; it is the architecture. We explicitly design our tools to minimize or eliminate data transmission to our servers. Processing happens on your machine (client-side).
                    </p>

                    <h3>2. Data Collection</h3>
                    <p>
                        We do not collect personal identifiers, browsing history, or behavioral data on this website.
                        Specific tools operate within their own isolated sandboxes (see individual tool policies).
                    </p>

                    <h3>3. Third-Party Access</h3>
                    <p>
                        We do not sell, trade, or transfer data to outside parties. There are no tracking pixels or analytics scripts installed on this dashboard.
                    </p>

                    <h3>4. Contact</h3>
                    <p>
                        For privacy-specific inquiries: <a href="mailto:contact.orbit.app@gmail.com">contact.orbit.app@gmail.com</a>.
                    </p>
                </div>
            </div>
        </div>
    );
}
