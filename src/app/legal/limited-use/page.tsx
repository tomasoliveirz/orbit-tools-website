export default function LimitedUsePage() {
    return (
        <div className="h-full px-6 sm:px-8 max-w-7xl mx-auto flex flex-col overflow-y-auto">

            <div className="mb-12 md:mb-16">
                <h1 className="text-5xl md:text-6xl font-bold tracking-tighter text-white mb-6">
                    Limited Use Policy
                </h1>
                <p className="text-xl text-white/50 max-w-2xl font-light">
                    Compliance with Google API Services User Data Policy.
                </p>
            </div>

            <div className="max-w-3xl border-t border-white/5 pt-12">
                <div className="prose prose-invert prose-lg prose-p:text-white/60">
                    <p className="leading-relaxed">
                        Orbit Tools use and transfer to any other app of information received from Google APIs will adhere to the <a href="https://developers.google.com/terms/api-services-user-data-policy#additional_requirements_for_specific_api_scopes" target="_blank" rel="noopener noreferrer" className="text-white border-b border-white/20 hover:border-white transition-colors no-underline">Google API Services User Data Policy</a>, including the Limited Use requirements.
                    </p>
                    <p>
                        This adherence is auditable and subject to the rigorous standards of our internal privacy protocols.
                    </p>
                </div>
            </div>
        </div>
    );
}
