"use client";

import { useRef, useEffect } from "react";
import Image from "next/image";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import MagneticButton from "./MagneticButton";

gsap.registerPlugin(ScrollTrigger);

const slides = [
  {
    image: "/angelica_curso_1.png",
    title: "Autoridade",
    subtitle: "Referência no Mercado",
    desc: "Angélica compartilha anos de experiência em cada detalhe do ensino.",
  },
  {
    image: "/angelica_curso_2.png",
    title: "Imersão",
    subtitle: "Energia Coletiva",
    desc: "Turmas limitadas para garantir atenção individualizada e foco total.",
  },
  {
    image: "/angelica_curso_3.png",
    title: "Técnica",
    subtitle: "Precisão Absoluta",
    desc: "O domínio dos fios sob uma perspectiva de arte e arquitetura facial.",
  },
  {
    image: "/foto_curso_5.png",
    title: "Legado",
    subtitle: "Sua Nova Jornada",
    desc: "Mais que um curso, o início de uma carreira de alto padrão no luxo.",
  },
];

export default function FormacaoProfissional() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const triggerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const pin = gsap.fromTo(
        sectionRef.current,
        { translateX: 0 },
        {
          translateX: "-300vw",
          ease: "none",
          duration: 1,
          scrollTrigger: {
            trigger: triggerRef.current,
            start: "top top",
            end: "2000 top",
            scrub: 1,
            pin: true,
            anticipatePin: 1,
          },
        }
      );
      return () => pin.kill();
    });

    return () => ctx.revert();
  }, []);

  return (
    <div className="overflow-hidden">
      <div ref={triggerRef}>
        <section 
          ref={sectionRef} 
          className="relative h-screen w-[400vw] flex flex-nowrap items-center bg-deep-night"
        >
          {/* Background Text (Subtle Luxury) */}
          <div className="absolute top-1/2 left-10 -translate-y-1/2 pointer-events-none">
            <h2 className="font-editorial text-[20vw] text-white/[0.02] leading-none select-none">
              ACADEMY
            </h2>
          </div>

          {slides.map((slide, index) => (
            <div 
              key={index} 
              className="relative w-screen h-full flex flex-col md:flex-row items-center justify-center gap-12 px-10 md:px-24"
            >
              {/* Image Container (Editorial Style) */}
              <div className="relative w-full md:w-[45%] h-[50vh] md:h-[70vh] group">
                {/* Frame Decorativo Duplo */}
                <div className="absolute -inset-3 border border-champagne/30 pointer-events-none transition-all duration-700 group-hover:border-champagne/60 z-10" />
                <div className="absolute -inset-6 border border-champagne/10 pointer-events-none z-10" />
                
                <div className="relative w-full h-full overflow-hidden bg-black/40">
                  <Image
                    src={slide.image}
                    alt={slide.title}
                    fill
                    className="object-cover transition-transform duration-[2000ms] ease-out group-hover:scale-110"
                    sizes="50vw"
                    loading="eager"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-deep-night/60 to-transparent" />
                  
                  {/* Numbering */}
                  <div className="absolute top-8 left-8">
                    <span className="font-body text-xs tracking-[0.5em] text-champagne/80">
                      {`0${index + 1}`}
                    </span>
                  </div>
                </div>
              </div>

              {/* Text Content */}
              <div className="w-full md:w-[40%] flex flex-col">
                <h3 className="font-editorial text-5xl md:text-8xl text-ice-white font-light mb-6">
                  {slide.title}
                </h3>
                <p className="font-body text-lg md:text-xl text-champagne/80 mb-8 tracking-widest uppercase">
                  {slide.subtitle}
                </p>
                <p className="font-body text-base md:text-lg text-ice-white/50 leading-relaxed max-w-md">
                  {slide.desc}
                </p>

                {index === slides.length - 1 && (
                  <div className="mt-12">
                    <MagneticButton>
                      <a
                        href="#contact"
                        className="premium-button"
                      >
                        Fazer Parte da Academy
                      </a>
                    </MagneticButton>
                  </div>
                )}
              </div>
            </div>
          ))}
        </section>
      </div>
    </div>
  );
}

