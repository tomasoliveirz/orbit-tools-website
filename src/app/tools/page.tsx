"use client";

import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { tools } from "@/data/tools";

export default function ToolsDirectory() {
    return (
        <div className="h-full px-6 sm:px-8 max-w-7xl mx-auto flex flex-col overflow-y-auto">

            {/* HEADER DA SECÇÃO */}
            <div className="mb-12 space-y-4">
                <h1 className="text-5xl md:text-6xl font-bold tracking-tighter text-white">
                    Directory
                </h1>
                <p className="text-lg text-white/50 max-w-xl leading-relaxed">
                    Curated utilities designed to enhance your digital autonomy.
                    No noise, just signal.
                </p>
            </div>

            {/* A LISTA "DATA TERMINAL" */}
            <div className="grid grid-cols-1 gap-px bg-white/5 border border-white/5 rounded-2xl overflow-hidden backdrop-blur-sm">
                {/* O gap-px com bg-white/5 cria linhas divisórias ultra-finas e subtis entre os items */}

                {tools.map((tool) => (
                    <Link
                        key={tool.slug}
                        href={`/tools/${tool.slug}`}
                        className="group relative block bg-[#0B0B0E]/80 hover:bg-[#16161a]/90 transition-all duration-500 ease-out"
                    >
                        <div className="p-8 md:p-10 flex flex-col md:flex-row md:items-center justify-between gap-6">

                            {/* LADO ESQUERDO: INFO PRINCIPAL */}
                            <div className="space-y-3 md:w-2/3">
                                <div className="flex items-center gap-3">
                                    <span className={`text-xs font-mono px-2 py-0.5 rounded-full border ${tool.status === 'Active' ? 'border-emerald-500/30 text-emerald-400 bg-emerald-500/5' : 'border-white/10 text-white/40'}`}>
                                        {tool.status}
                                    </span>
                                    {/* Tags secundárias */}
                                    {tool.tags.map(tag => (
                                        <span key={tag} className="text-xs text-white/30 font-medium tracking-wide uppercase hidden sm:inline-block">
                                            {tag}
                                        </span>
                                    ))}
                                </div>

                                <h2 className="text-2xl md:text-3xl font-semibold text-white group-hover:text-purple-200 transition-colors">
                                    {tool.name}
                                </h2>

                                <p className="text-white/50 group-hover:text-white/70 transition-colors leading-relaxed max-w-2xl">
                                    {tool.tagline}
                                </p>
                            </div>

                            {/* LADO DIREITO: INTERAÇÃO */}
                            <div className="flex items-center justify-end md:w-1/3">
                                <div className="w-12 h-12 rounded-full border border-white/10 flex items-center justify-center group-hover:border-purple-500/50 group-hover:bg-purple-500/10 transition-all duration-300">
                                    <ArrowUpRight className="w-5 h-5 text-white/30 group-hover:text-purple-300 transition-colors" />
                                </div>
                            </div>
                        </div>

                        {/* BARRA DE PROGRESSO DECORATIVA (HOVER) */}
                        <div className="absolute bottom-0 left-0 h-[1px] w-0 bg-gradient-to-r from-purple-500 to-pink-500 group-hover:w-full transition-all duration-700 ease-out opacity-50" />

                    </Link>
                ))}
            </div>

            {/* Placeholder para futuro */}
            <div className="mt-8 text-center md:text-left">
                <span className="text-sm font-mono text-white/20">
          // SYSTEM STATUS: More modules compiling...
                </span>
            </div>

        </div>
    );
}
