import Link from "next/link";

export default function Navbar() {
    return (
        <nav className="fixed top-0 left-0 right-0 z-50 bg-black/20 backdrop-blur-sm border-b border-white/5">
            <div className="max-w-7xl mx-auto px-6 sm:px-8 py-6 flex items-center justify-between">
                <Link href="/" className="group flex items-center gap-3">
                    <div className="w-8 h-8 relative">
                        {/* Small Logo for Navbar - simplified or reused */}
                        <svg viewBox="0 0 1024 1024" className="w-full h-full logo-svg">
                            <defs>
                                <radialGradient id="coreGlowSmall" cx="50%" cy="50%" r="50%" fx="50%" fy="50%">
                                    <stop offset="40%" stopColor="#2a2e36" stopOpacity="1" />
                                    <stop offset="60%" stopColor="#5e4b56" stopOpacity="0.8" />
                                    <stop offset="100%" stopColor="#f8f6e9" stopOpacity="0" />
                                </radialGradient>
                            </defs>
                            <g id="core">
                                <circle cx="512" cy="512" r="260" fill="url(#coreGlowSmall)" opacity="0.6" />
                                <circle cx="512" cy="512" r="160" fill="#232326" />
                            </g>
                            <g id="orbits">
                                <path d="M 271 708 A 310 310 0 0 1 708 271" fill="none" stroke="#2a253a" strokeWidth="40" strokeLinecap="round" />
                                <path d="M 753 316 A 310 310 0 0 1 316 753" fill="none" stroke="#2a253a" strokeWidth="40" strokeLinecap="round" />
                            </g>
                        </svg>
                    </div>
                    <span className="font-medium text-sm tracking-wide text-fg/90 group-hover:text-fg transition-colors">
                        Orbit Tools
                    </span>
                </Link>

                <div className="flex items-center gap-6 md:gap-8">
                    <Link
                        href="/tools"
                        className="text-base font-medium text-fg/80 hover:text-fg transition-colors"
                    >
                        Directory
                    </Link>
                    <Link
                        href="/support"
                        className="text-base font-medium text-fg/80 hover:text-fg transition-colors"
                    >
                        Support
                    </Link>
                </div>
            </div>
        </nav>
    );
}
