"use client";

import { useRef } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import MagneticButton from "./MagneticButton";

const slides = [
  {
    image: "/angelica_curso_1.png",
    title: "Autoridade",
    subtitle: "Instrutora referência no mercado",
    desc: "Angélica compartilha anos de experiência em cada detalhe do ensino.",
  },
  {
    image: "/angelica_curso_2.png",
    title: "Imersão",
    subtitle: "Sala cheia de energia",
    desc: "Turmas limitadas para garantir atenção individualizada e foco total.",
  },
  {
    image: "/angelica_curso_3.png",
    title: "Proximidade",
    subtitle: "Conexão com as alunas",
    desc: "Acompanhamento próximo do primeiro fio até a certificação.",
  },
];

export default function FormacaoProfissional() {
  return (
    <section id="academy" className="relative bg-deep-black pt-32 pb-40">
      {/* Título (Scrolla normalmente com a página) */}
      <div className="text-center mb-24">
        <h2 className="font-editorial text-5xl md:text-7xl font-light text-champagne mb-2">
          Olhos de Boneca Academy
        </h2>
        <p className="font-body text-ice-white/70 tracking-widest uppercase text-xs md:text-sm">
          Aperfeiçoamento e Formação Profissional
        </p>
      </div>

      {/* Container das Imagens (Scroll Vertical Normal) */}
      <div className="relative z-10 flex flex-col gap-32 w-full max-w-7xl mx-auto px-6 md:px-12">
        {slides.map((slide, index) => (
          <Slide key={index} slide={slide} index={index} total={slides.length} />
        ))}
      </div>
    </section>
  );
}

function Slide({ slide, index, total }: { slide: any; index: number; total: number }) {
  const ref = useRef(null);

  // Alterna o layout (imagem na esquerda ou direita) para dar mais dinamismo
  const isEven = index % 2 === 0;

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 60 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      className={`flex flex-col ${isEven ? 'md:flex-row' : 'md:flex-row-reverse'} items-center justify-center gap-10 md:gap-20 w-full`}
    >
      {/* Imagem com Moldura Elegante */}
      <div className="relative w-full md:w-1/2 h-[40vh] md:h-[65vh] p-4 md:p-6 bg-deep-black/40 backdrop-blur-sm border border-champagne/10 shadow-2xl group flex items-center justify-center">
        {/* Detalhes Dourados nos Cantos (Cantoneiras Clássicas) */}
        <div className="absolute top-0 left-0 w-8 md:w-12 h-8 md:h-12 border-t-[1.5px] border-l-[1.5px] border-champagne transition-all duration-500 group-hover:scale-110 origin-top-left" />
        <div className="absolute top-0 right-0 w-8 md:w-12 h-8 md:h-12 border-t-[1.5px] border-r-[1.5px] border-champagne transition-all duration-500 group-hover:scale-110 origin-top-right" />
        <div className="absolute bottom-0 left-0 w-8 md:w-12 h-8 md:h-12 border-b-[1.5px] border-l-[1.5px] border-champagne transition-all duration-500 group-hover:scale-110 origin-bottom-left" />
        <div className="absolute bottom-0 right-0 w-8 md:w-12 h-8 md:h-12 border-b-[1.5px] border-r-[1.5px] border-champagne transition-all duration-500 group-hover:scale-110 origin-bottom-right" />

        {/* Linha Fina Interna */}
        <div className="absolute inset-2 md:inset-3 border border-champagne/5 pointer-events-none" />

        <div className="relative w-full h-full overflow-hidden bg-black/20">
          <Image
            src={slide.image}
            alt={slide.title}
            fill
            className="object-contain transition-transform duration-700 group-hover:scale-[1.02]"
            sizes="(max-width: 768px) 100vw, 50vw"
            priority={index === 0}
          />
        </div>
      </div>

      {/* Conteúdo (Texto) */}
      <div className="w-full md:w-1/2 flex flex-col justify-center">
        <div className="max-w-lg">
          <span className="inline-block font-body text-sm tracking-[0.3em] text-champagne/70 uppercase mb-4">
            {`0${index + 1}`}
          </span>
          <h3 className="font-editorial text-4xl md:text-6xl text-ice-white font-light mb-4">
            {slide.title}
          </h3>
          <p className="font-body text-xl md:text-2xl text-champagne/90 mb-6">
            {slide.subtitle}
          </p>
          <p className="font-body text-base md:text-lg text-ice-white/70 leading-relaxed">
            {slide.desc}
          </p>
          {index === total - 1 && (
            <div className="flex justify-center md:justify-end mt-12 md:mt-24 w-full">
              <MagneticButton className="w-full sm:w-auto flex justify-center">
                <a
                  href="https://wa.me/5541999999999"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="premium-button text-base px-12 py-5 tracking-[0.2em] w-[85%] sm:w-auto text-center"
                >
                  Quero me formar
                </a>
              </MagneticButton>
            </div>
          )}
        </div>
      </div>
    </motion.div>
  );
}
