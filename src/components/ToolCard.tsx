import Link from "next/link";
import { Tool } from "@/data/tools";

export default function ToolCard({ tool }: { tool: Tool }) {
    return (
        <Link
            href={`/tools/${tool.slug}`}
            className="group block p-8 glass-panel hover:bg-white/5 transition-all duration-300 hover:scale-[1.02] hover:shadow-[0_0_30px_rgba(124,58,237,0.1)]"
        >
            <div className="flex items-start justify-between mb-6">
                <div className="flex gap-2">
                    {tool.tags.map((tag) => (
                        <span
                            key={tag}
                            className="px-3 py-1 text-xs font-medium rounded-full bg-white/5 text-muted border border-white/5"
                        >
                            {tag}
                        </span>
                    ))}
                </div>
                {tool.featured && (
                    <span className="w-2 h-2 rounded-full bg-accentA shadow-[0_0_10px_var(--accentA)]" />
                )}
            </div>

            <h3 className="text-xl font-semibold mb-3 group-hover:text-white transition-colors text-left">
                {tool.name}
            </h3>
            <p className="text-muted leading-relaxed mb-6 group-hover:text-fg/80 transition-colors text-left">
                {tool.tagline}
            </p>

            <div className="flex items-center text-sm font-medium text-accentA group-hover:text-accentB transition-colors">
                View Details
                <svg className="w-4 h-4 ml-2 transform group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
            </div>
        </Link>
    );
}
