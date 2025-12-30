import { tools } from "@/data/tools";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Shield, ArrowLeft } from "lucide-react";

export function generateStaticParams() {
    return tools.map((tool) => ({
        slug: tool.slug,
    }));
}

export default async function ToolPage({
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
        <div className="h-full px-6 sm:px-8 max-w-7xl mx-auto flex flex-col overflow-y-auto">

            {/* Navegação de Topo */}
            <div className="mb-12 shrink-0">
                <Link
                    href="/tools"
                    className="group inline-flex items-center text-sm text-white/40 hover:text-white transition-colors"
                >
                    <ArrowLeft className="w-4 h-4 mr-2 group-hover:-translate-x-1 transition-transform" />
                    Back to Directory
                </Link>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-24">

                {/* COLUNA ESQUERDA: Conteúdo Principal */}
                <div className="lg:col-span-8">
                    <div className="mb-16">
                        {/* Tags com estilo visual limpo */}
                        <div className="flex flex-wrap gap-2 mb-8">
                            {tool.tags.map((tag) => (
                                <span
                                    key={tag}
                                    className="px-3 py-1 text-xs font-mono font-medium rounded border border-white/10 text-white/60 uppercase tracking-wider"
                                >
                                    {tag}
                                </span>
                            ))}
                        </div>

                        <h1 className="text-5xl md:text-7xl font-bold mb-8 tracking-tighter text-white">
                            {tool.name}
                        </h1>
                        <p className="text-xl md:text-3xl text-white/60 leading-relaxed font-light">
                            {tool.tagline}
                        </p>
                    </div>

                    {/* Descrição em Prosa */}
                    <div className="prose prose-invert prose-lg max-w-none prose-p:text-white/60 prose-p:leading-8">
                        <p>
                            {tool.name} is designed to give you clarity and control over your digital social circle.
                            We believe in privacy-first tools that respect your data and your time.
                        </p>
                        <p>
                            No hidden tracking, no data selling. Just a clean, efficient utility to help you manage your connections.
                        </p>

                        {/* Secção How it Works minimalista */}
                        <h3 className="text-white mt-12 mb-6 font-medium">System Architecture</h3>
                        <ul className="list-none pl-0 space-y-4">
                            <li className="flex gap-4 items-start">
                                <span className="font-mono text-white/20">01</span>
                                <span>Runs entirely in your browser session.</span>
                            </li>
                            <li className="flex gap-4 items-start">
                                <span className="font-mono text-white/20">02</span>
                                <span>Direct local storage implementation.</span>
                            </li>
                            <li className="flex gap-4 items-start">
                                <span className="font-mono text-white/20">03</span>
                                <span>Zero external API dependencies.</span>
                            </li>
                        </ul>
                    </div>
                </div>

                {/* COLUNA DIREITA: Sticky Action Card */}
                <div className="lg:col-span-4">
                    <div className="sticky top-32 space-y-6">

                        {/* Painel de Ação "Glass" */}
                        <div className="bg-white/5 border border-white/5 backdrop-blur-sm rounded-2xl p-8">
                            <a
                                href={tool.chromeWebStoreUrl}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="block w-full py-4 px-6 bg-white text-black text-center font-bold rounded-xl hover:bg-gray-200 transition-all duration-300 mb-6 shadow-lg"
                            >
                                Get Extension
                            </a>

                            <div className="space-y-3 pt-6 border-t border-white/5">
                                <Link
                                    href={`/tools/${tool.slug}/privacy`}
                                    className="flex items-center justify-between text-sm text-white/40 hover:text-white transition-colors"
                                >
                                    <span>Privacy Policy</span>
                                    <Shield className="w-3 h-3" />
                                </Link>
                                <a
                                    href={`mailto:${tool.supportEmail}`}
                                    className="block text-sm text-white/40 hover:text-white transition-colors"
                                >
                                    Report Issue
                                </a>
                            </div>
                        </div>

                        {/* Disclaimer Discreto */}
                        <div className="p-6 border border-white/5 rounded-2xl">
                            <h3 className="text-xs font-mono uppercase tracking-widest text-white/30 mb-2">Disclaimer</h3>
                            <p className="text-white/30 text-xs leading-relaxed">{tool.disclaimer}</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
