"use client";

import { useState, useRef, useEffect, MouseEvent } from "react";

export default function HomeLogo() {
    // === ESTADOS ===
    const [rotateX, setRotateX] = useState(0);
    const [rotateY, setRotateY] = useState(0);
    const [isHovering, setIsHovering] = useState(false);

    // === REFERÊNCIAS FÍSICAS ===
    const thickRingRef = useRef<SVGGElement>(null);
    const thinRingRef = useRef<SVGGElement>(null);

    // Estado físico interno
    const physics = useRef({
        thick: { angle: 0, velocity: 0 },
        thin: { angle: 0, velocity: 0 }
    });

    const requestRef = useRef<number | null>(null);
    const startTimeRef = useRef<number>(Date.now());

    // === CONSTANTES DE CONFIGURAÇÃO ===
    const TILT_MAX_DEG = 12;
    const SPIN_SPEED = 0.8;
    const SPRING_TENSION = 0.03; // Mais suave para o "recoil" aterrar no balanço
    const SPRING_FRICTION = 0.92; // Mais deslize

    // Configuração da "Vida" (Idle Animation)
    const IDLE_SWAY_SPEED = 0.002; // Velocidade do balanço lento
    const IDLE_SWAY_AMP = 4; // Quantos graus balança (muito subtil)

    // === LOOP DE ANIMAÇÃO (FÍSICA + IDLE) ===
    const animate = () => {
        // Calcular o "Target" (Alvo). 
        // Se estiver em Hover, não há alvo (gira livre). 
        // Se estiver em Idle, o alvo é uma onda sinusoidal (balanço).

        const time = Date.now() - startTimeRef.current;

        // O alvo de repouso não é 0, é uma onda suave (-4 a +4 graus)
        // Isto cria a "Oscilação Magnética"
        const swayTarget = Math.sin(time * IDLE_SWAY_SPEED) * IDLE_SWAY_AMP;

        // --- LÓGICA ANEL GROSSO ---
        if (isHovering) {
            physics.current.thick.angle += SPIN_SPEED;
        } else {
            // Sistema de Mola para ir buscar o SwayTarget
            const current = physics.current.thick.angle;

            // Normalizar para encontrar o caminho mais curto
            let normalizedAngle = current % 360;
            if (normalizedAngle > 180) normalizedAngle -= 360;
            if (normalizedAngle < -180) normalizedAngle += 360;

            // A força puxa para o swayTarget, não para 0 absoluto
            const displacement = swayTarget - normalizedAngle;
            const force = displacement * SPRING_TENSION;

            physics.current.thick.velocity += force;
            physics.current.thick.velocity *= SPRING_FRICTION;
            physics.current.thick.angle += physics.current.thick.velocity;
        }

        // --- LÓGICA ANEL FINO (Contra-rotação / Contra-balanço) ---
        if (isHovering) {
            physics.current.thin.angle -= (SPIN_SPEED * 0.6);
        } else {
            // O anel fino balança no sentido oposto para dar profundidade (swayTarget * -1)
            const targetThin = swayTarget * -1;

            let normalizedAngle = physics.current.thin.angle % 360;
            if (normalizedAngle > 180) normalizedAngle -= 360;
            if (normalizedAngle < -180) normalizedAngle += 360;

            const displacement = targetThin - normalizedAngle;
            const force = displacement * SPRING_TENSION;

            physics.current.thin.velocity += force;
            physics.current.thin.velocity *= SPRING_FRICTION;
            physics.current.thin.angle += physics.current.thin.velocity;
        }

        // Aplicar Transformações
        if (thickRingRef.current) {
            thickRingRef.current.style.transform = `rotate(${physics.current.thick.angle}deg)`;
        }
        if (thinRingRef.current) {
            thinRingRef.current.style.transform = `rotate(${physics.current.thin.angle}deg)`;
        }

        requestRef.current = requestAnimationFrame(animate);
    };

    useEffect(() => {
        requestRef.current = requestAnimationFrame(animate);
        return () => {
            if (requestRef.current !== null) {
                cancelAnimationFrame(requestRef.current);
            }
        };
    }, [isHovering]);

    // === EVENT HANDLERS ===
    const handleMouseMove = (e: MouseEvent<HTMLDivElement>) => {
        if (!isHovering) return;
        const rect = e.currentTarget.getBoundingClientRect();
        // Calcular tilt...
        const width = rect.width;
        const height = rect.height;
        const mouseX = (e.clientX - rect.left) / width - 0.5;
        const mouseY = (e.clientY - rect.top) / height - 0.5;
        setRotateY(mouseX * TILT_MAX_DEG);
        setRotateX(mouseY * -TILT_MAX_DEG);
    };

    const handleMouseEnter = () => {
        setIsHovering(true);
        // Reset da velocidade para resposta instantânea
        physics.current.thick.velocity = 0;
        physics.current.thin.velocity = 0;
    };

    const handleMouseLeave = () => {
        setIsHovering(false);
        setRotateX(0);
        setRotateY(0);
    };

    return (
        <div
            className="relative flex items-center justify-center mb-12 perspective-container"
            style={{ perspective: "1200px" }}
        >
            {/* WRAPPER DE LEVITAÇÃO (ZERO-G)
         Esta div move todo o logo para cima e para baixo suavemente.
         Usamos uma animação CSS keyframe personalizada para ser ultra-smooth.
      */}
            <div
                className="relative w-40 h-40 md:w-56 md:h-56 group cursor-pointer transition-transform duration-500 ease-out animate-levitate"
                onMouseEnter={handleMouseEnter}
                onMouseMove={handleMouseMove}
                onMouseLeave={handleMouseLeave}
                style={{
                    transform: `rotateX(${rotateX}deg) rotateY(${rotateY}deg)`,
                    transformStyle: "preserve-3d",
                }}
            >
                {/* Glow de Fundo */}
                <div
                    className="absolute inset-0 bg-purple-500/10 rounded-full blur-[60px] opacity-0 group-hover:opacity-100 transition-opacity duration-1000 ease-in-out -z-10"
                    style={{ transform: "translateZ(-60px)" }}
                />

                <svg
                    viewBox="0 0 1024 1024"
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-full h-full drop-shadow-2xl"
                    style={{ overflow: "visible", transform: "translateZ(0)" }}
                >
                    <defs>
                        <radialGradient id="coreGlow" cx="50%" cy="50%" r="50%" fx="50%" fy="50%">
                            <stop offset="40%" stopColor="#2a2e36" stopOpacity="1" />
                            <stop offset="60%" stopColor="#5e4b56" stopOpacity="0.8" />
                            <stop offset="100%" stopColor="#f8f6e9" stopOpacity="0" />
                        </radialGradient>
                        <radialGradient id="coreActive" cx="50%" cy="50%" r="50%" fx="50%" fy="50%">
                            <stop offset="20%" stopColor="#3E3E42" stopOpacity="1" />
                            <stop offset="50%" stopColor="#8c5e68" stopOpacity="0.9" />
                            <stop offset="100%" stopColor="#7C3AED" stopOpacity="0" />
                        </radialGradient>
                    </defs>

                    {/* === LAYER 1: NÚCLEO (RESPIRAÇÃO) === */}
                    <g
                        id="core"
                        className="transition-all duration-1000 ease-out group-hover:scale-110"
                        style={{ transformOrigin: "512px 512px" }}
                    >
                        {/* O "Glow Base" agora tem a classe 'animate-pulse-slow' para respirar */}
                        <circle
                            cx="512" cy="512" r="260"
                            fill="url(#coreGlow)"
                            className="opacity-60 group-hover:opacity-0 transition-opacity duration-500 animate-pulse-slow"
                        />

                        <circle cx="512" cy="512" r="280" fill="url(#coreActive)" className="opacity-0 group-hover:opacity-90 transition-opacity duration-500" />
                        <circle cx="512" cy="512" r="160" fill="#232326" className="group-hover:fill-[#1a1a1d] transition-colors duration-500" />
                    </g>

                    {/* === LAYER 2 & 3: CONTROLADAS PELA FÍSICA JS (Inclui o balanço idle) === */}
                    <g id="orbit-thick" ref={thickRingRef} style={{ transformOrigin: "512px 512px" }}>
                        <path d="M 271 708 A 310 310 0 0 1 708 271" fill="none" stroke="#2a253a" strokeWidth="14" strokeLinecap="round" />
                        <path d="M 753 316 A 310 310 0 0 1 316 753" fill="none" stroke="#2a253a" strokeWidth="14" strokeLinecap="round" />
                    </g>

                    <g id="orbit-thin" ref={thinRingRef} className="transition-all duration-1000 ease-out group-hover:scale-105" style={{ transformOrigin: "512px 512px" }}>
                        <path className="opacity-50 group-hover:opacity-90 transition-opacity" d="M 254 725 A 335 335 0 0 1 725 254" fill="none" stroke="#4a455a" strokeWidth="2" strokeLinecap="round" />
                        <path className="opacity-50 group-hover:opacity-90 transition-opacity" d="M 770 299 A 335 335 0 0 1 299 770" fill="none" stroke="#4a455a" strokeWidth="2" strokeLinecap="round" />
                    </g>
                </svg>
            </div>

            {/* ADICIONAR ESTILOS NO TAILWIND OU GLOBAL CSS */}
            <style jsx global>{`
        @keyframes levitate {
          0%, 100% { transform: translateY(0px) rotateX(0) rotateY(0); }
          50% { transform: translateY(-10px) rotateX(2deg) rotateY(-2deg); }
        }
        .animate-levitate {
          /* Só levita se NÃO estiver em hover (o hover tem a sua própria transformação) */
          animation: levitate 6s ease-in-out infinite;
        }
        .group:hover .animate-levitate {
          animation: none;
        }
        
        @keyframes pulse-slow {
          0%, 100% { opacity: 0.5; transform: scale(1); }
          50% { opacity: 0.7; transform: scale(1.02); }
        }
        .animate-pulse-slow {
          animation: pulse-slow 4s ease-in-out infinite;
        }
      `}</style>
        </div>
    );
}