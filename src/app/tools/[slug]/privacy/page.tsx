import { tools } from "@/data/tools";
import { notFound } from "next/navigation";
import Link from "next/link";
import { ArrowLeft, Shield, Lock, Server, EyeOff } from "lucide-react";

export function generateStaticParams() {
    return tools.map((tool) => ({
        slug: tool.slug,
    }));
}

export default async function ToolPrivacyPage({
    params,
}: {
    params: Promise<{ slug: string }>;
}) {
    const { slug } = await params;
    const tool = tools.find((t) => t.slug === slug);

    if (!tool) {
        notFound();
    }

    return (
        <div className="h-full px-6 sm:px-8 max-w-7xl mx-auto flex flex-col">

            {/* Top Navigation */}
            <div className="mb-12 shrink-0">
                <Link
                    href={`/tools/${tool.slug}`}
                    className="group inline-flex items-center text-sm text-white/40 hover:text-white transition-colors"
                >
                    <ArrowLeft className="w-4 h-4 mr-2 group-hover:-translate-x-1 transition-transform" />
                    Back to {tool.name}
                </Link>
            </div>

            {/* Main Content Grid */}
            <div className="flex-1 min-h-0 grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-24 pb-12">

                {/* LEFT COLUMN: Sticky Context (Title, Badges, Summary) */}
                <div className="lg:col-span-4 flex flex-col">
                    <div className="mb-8">
                        <div className="inline-flex items-center gap-2 px-2 py-1 rounded bg-emerald-500/10 border border-emerald-500/20 mb-6">
                            <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse"></span>
                            <span className="text-xs font-mono text-emerald-400">Live Protocol</span>
                        </div>
                        <h1 className="text-4xl md:text-5xl font-bold tracking-tighter text-white mb-4">
                            Privacy Policy
                        </h1>
                        <p className="text-lg text-white/50 font-light">
                            {tool.name}
                        </p>
                    </div>

                    <div className="space-y-4 mb-8">
                        <div className="p-4 rounded-xl bg-white/5 border border-white/5 backdrop-blur-sm">
                            <div className="flex items-center gap-3 mb-2">
                                <Lock className="w-4 h-4 text-white/60" />
                                <span className="text-sm font-medium text-white/80">Local Execution</span>
                            </div>
                            <p className="text-xs text-white/40 leading-relaxed">
                                Data is processed entirely on your device. No remote servers involved.
                            </p>
                        </div>

                        <div className="p-4 rounded-xl bg-white/5 border border-white/5 backdrop-blur-sm">
                            <div className="flex items-center gap-3 mb-2">
                                <EyeOff className="w-4 h-4 text-white/60" />
                                <span className="text-sm font-medium text-white/80">Zero Tracking</span>
                            </div>
                            <p className="text-xs text-white/40 leading-relaxed">
                                We do not collect, store, or sell your personal usage data.
                            </p>
                        </div>
                    </div>

                    <div className="mt-auto pt-8 border-t border-white/5">
                        <p className="text-xs font-mono text-white/30 uppercase tracking-widest mb-2">Last Updated</p>
                        <p className="text-sm text-white/60">December 22, 2025</p>
                    </div>
                </div>

                {/* RIGHT COLUMN: Scrollable Legal Text */}
                <div className="lg:col-span-8 relative flex flex-col min-h-0">
                    {/* Scroll Container */}
                    <div className="flex-1 overflow-y-auto pr-4 custom-scrollbar -mr-4">
                        <div className="prose prose-invert prose-lg max-w-none prose-headings:font-semibold prose-headings:tracking-tight prose-headings:text-white prose-p:text-white/60 prose-p:leading-relaxed prose-li:text-white/60 prose-strong:text-white/80">

                            <section className="mb-12">
                                <h3>1. Scope</h3>
                                <p>
                                    This Privacy Policy applies <strong>only</strong> to the <strong>{tool.name}</strong> browser extension (“the Extension”). It does not cover other Orbit Tools products unless explicitly stated.
                                </p>
                            </section>

                            <section className="mb-12">
                                <h3>2. Single Purpose</h3>
                                <p>
                                    The Extension’s single purpose is to help users <strong>identify accounts that do not follow them back</strong> by analyzing the follower/following information the user is viewing in their browser and presenting a clear, user-controlled review interface.
                                </p>
                            </section>

                            <section className="mb-12">
                                <h3>3. Data We Process</h3>
                                <p>
                                    The Extension processes data <strong>locally on your device</strong> to provide its user-facing features.
                                </p>
                                <div className="bg-white/5 rounded-lg p-6 border border-white/5 my-6 not-prose">
                                    <h4 className="text-sm font-medium text-white mb-4">Data processed (on-device):</h4>
                                    <ul className="space-y-2">
                                        <li className="flex gap-3 text-sm text-white/60">
                                            <span className="w-1 h-1 rounded-full bg-white/40 mt-2 shrink-0"></span>
                                            Account identifiers shown on the page (e.g., usernames / display names)
                                        </li>
                                        <li className="flex gap-3 text-sm text-white/60">
                                            <span className="w-1 h-1 rounded-full bg-white/40 mt-2 shrink-0"></span>
                                            Relationship status derived from what the user is viewing
                                        </li>
                                        <li className="flex gap-3 text-sm text-white/60">
                                            <span className="w-1 h-1 rounded-full bg-white/40 mt-2 shrink-0"></span>
                                            Page content required to render results
                                        </li>
                                    </ul>
                                </div>
                                <p>
                                    We do <strong>not</strong> request that you enter your password into the Extension.
                                </p>
                            </section>

                            <section className="mb-12">
                                <h3>4. What We Collect (and what we don’t)</h3>
                                <p>
                                    <strong>We do not sell user data.</strong><br />
                                    <strong>We do not use user data for advertising.</strong><br />
                                    <strong>We do not use user data for unrelated purposes.</strong><br />
                                    This aligns with Chrome Web Store requirements that data use must be limited to the practices you disclose.
                                </p>
                            </section>

                            <section className="mb-12">
                                <h3>5. Where Processing Happens</h3>
                                <p>
                                    The Extension is designed with a <strong>local-execution approach</strong>:
                                </p>
                                <ul className="list-disc pl-4 space-y-2">
                                    <li>Processing happens in your browser on your device.</li>
                                    <li>The Extension is intended to run only where needed to perform its single purpose.</li>
                                </ul>
                            </section>

                            <section className="mb-12">
                                <h3>6. Storage & Retention</h3>
                                <p>
                                    The Extension may use browser extension storage (e.g., <code>chrome.storage.local</code>) to store user preferences and optional local cache.
                                </p>
                                <p>
                                    <strong>Retention:</strong> Stored preferences/cache remain on your device until you clear them or uninstall the Extension.<br />
                                    <strong>How to clear:</strong> Uninstall the Extension or clear extension storage via your browser settings.
                                </p>
                            </section>

                            <section className="mb-12">
                                <h3>7. Data Sharing & Third Parties</h3>
                                <ul className="list-disc pl-4 space-y-2">
                                    <li>The Extension does <strong>not</strong> sell, rent, or trade user data.</li>
                                    <li>The Extension does <strong>not</strong> transfer user data to third parties for purposes unrelated to its single purpose.</li>
                                </ul>
                            </section>

                            <section className="mb-12">
                                <h3>8. Permissions</h3>
                                <p>
                                    Chrome extensions require permissions to function. Orbit requests only what is necessary for its single purpose.
                                </p>
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 my-6 not-prose">
                                    <div className="p-4 rounded-lg bg-white/5 border border-white/5">
                                        <span className="text-xs font-mono text-emerald-400 mb-2 block">Host Access</span>
                                        <p className="text-sm text-white/70">Required to read page content you are viewing to compute insights.</p>
                                    </div>
                                    <div className="p-4 rounded-lg bg-white/5 border border-white/5">
                                        <span className="text-xs font-mono text-emerald-400 mb-2 block">Scripting</span>
                                        <p className="text-sm text-white/70">Required to extract list entries and render the UI.</p>
                                    </div>
                                    <div className="p-4 rounded-lg bg-white/5 border border-white/5">
                                        <span className="text-xs font-mono text-emerald-400 mb-2 block">Storage</span>
                                        <p className="text-sm text-white/70">Required to save your preferences locally.</p>
                                    </div>
                                </div>
                            </section>

                            <section className="mb-12">
                                <h3>9. Remote Code</h3>
                                <p>
                                    The Extension does <strong>not</strong> load or execute remotely hosted JavaScript or WebAssembly. All executable code is packaged with the Extension.
                                </p>
                            </section>

                            <section className="mb-12">
                                <h3>10. Limited Use Commitment</h3>
                                <p>
                                    We limit the use of data accessed by the Extension to providing or improving the Extension’s <strong>single purpose</strong> as described above, and to the practices disclosed in this policy.
                                </p>
                            </section>

                            <section className="mb-12">
                                <h3>11. Security</h3>
                                <p>
                                    We apply reasonable safeguards to reduce risk, including minimal permission scope, no remote executable code, and local processing where possible.
                                </p>
                            </section>

                            <section className="mb-12">
                                <h3>12. Disclaimer</h3>
                                <p>
                                    Orbit — Social Circle Visualizer is an independent product and is <strong>not affiliated with, endorsed by, or sponsored by Instagram or Meta</strong>.
                                </p>
                            </section>

                            <section className="mb-12">
                                <h3>13. Contact</h3>
                                <p>
                                    For questions about this policy or data handling:<br />
                                    <a href="mailto:contact.orbit.app@gmail.com" className="text-white hover:text-emerald-400 transition-colors">contact.orbit.app@gmail.com</a>
                                </p>
                            </section>

                        </div>
                    </div>

                    {/* Fade Overlay for Scroll Hint */}
                    <div className="absolute bottom-0 left-0 right-4 h-24 bg-gradient-to-t from-[#0A0A0F] to-transparent pointer-events-none" />
                </div>
            </div>
        </div>
    );
}
