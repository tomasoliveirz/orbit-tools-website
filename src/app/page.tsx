import Link from "next/link";
import HomeLogo from "@/components/HomeLogo";

export default function Home() {
  return (
    // h-full ocupa a altura disponível do main (que já é h-screen - padding)
    <div className="relative h-full w-full flex flex-col items-center justify-center">

      {/* BACKGROUND DE ATMOSFERA
          Uma luz muito subtil por trás do logo para o separar do fundo estrelado,
          mas sem criar uma caixa visível. */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-purple-900/20 blur-[100px] rounded-full pointer-events-none -z-10" />

      {/* CONTEÚDO PRINCIPAL - Compacto e Centrado */}
      <div className="flex flex-col items-center z-10 text-center px-4">

        {/* 1. O LOGO
            Já reduziste o tamanho no componente, aqui damos apenas margem negativa
            para "puxar" o texto para perto da gravidade do logo. */}
        <div className="mb-2 md:mb-4">
          <HomeLogo />
        </div>

        {/* 2. TÍTULO
            Grande, mas fino (font-light/normal) para ser elegante, não agressivo.
            Tracking-tighter dá o look moderno. */}
        <h1 className="text-5xl md:text-7xl font-medium tracking-tighter text-white mb-4 drop-shadow-2xl">
          Orbit Tools
        </h1>

        {/* 3. SUBTÍTULO
            Curto e direto. Sem badges. A própria frase transmite a confiança. */}
        <p className="text-lg md:text-xl text-white/60 max-w-lg leading-relaxed font-light mb-10">
          Digital autonomy designed with precision.
          <br className="hidden md:block" />
          <span className="text-white/40">No noise. No tracking. Just signal.</span>
        </p>

        {/* 4. AÇÕES
            Minimalistas. O botão principal é branco sólido para contraste máximo.
            O secundário é apenas texto, super discreto. */}
        <div className="flex flex-col items-center gap-6">
          <Link
            href="/tools"
            className="group relative px-10 py-3.5 bg-white text-black font-semibold rounded-full hover:bg-gray-200 transition-all duration-300 hover:scale-105"
          >
            Open Directory
          </Link>

          <Link
            href="/support"
            className="text-sm text-white/30 hover:text-white transition-colors uppercase tracking-widest text-[10px]"
          >
            Support & Privacy
          </Link>
        </div>

      </div>

      {/* RODAPÉ ABSOLUTO (Técnico)
          Fica colado ao fundo do ecrã, fora do caminho visual central. */}
      <div className="absolute bottom-6 text-[10px] font-mono text-white/10 uppercase tracking-widest">
        System Operational • v1.0
      </div>

    </div>
  );
}
