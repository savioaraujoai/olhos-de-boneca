import { motion } from 'framer-motion'

export default function Footer() {
  return (
    <footer className="bg-deep-black border-t border-white/5 py-16">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
          {/* Brand */}
          <div className="md:col-span-2">
            <h3 className="font-editorial text-3xl text-ice-white mb-4">
              Olhos de <span className="italic text-champagne">Boneca</span>
            </h3>
            <p className="text-nude-rose/60 font-light leading-relaxed max-w-md">
              Studio premium de extensão de cílios e academy em Curitiba. 
              Elegância, sofisticação e técnica exclusiva.
            </p>
          </div>

          {/* Links */}
          <div>
            <h4 className="text-champagne text-sm uppercase tracking-widest mb-6">Navegação</h4>
            <ul className="space-y-3">
              {['Serviços', 'Galeria', 'Sobre', 'Academy', 'Contato'].map((link) => (
                <li key={link}>
                  <a href="#" className="text-nude-rose/60 hover:text-champagne transition-colors text-sm font-light">
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-champagne text-sm uppercase tracking-widest mb-6">Contato</h4>
            <ul className="space-y-3 text-sm font-light">
              <li>
                <a href="https://instagram.com" target="_blank" className="text-nude-rose/60 hover:text-champagne transition-colors flex items-center gap-2">
                  <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                  </svg>
                  @olhosdebonecacuritiba
                </a>
              </li>
              <li>
                <a href="https://wa.me" target="_blank" className="text-nude-rose/60 hover:text-champagne transition-colors flex items-center gap-2">
                  <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 4.315 1.731 6.086l.846 1.333-1.315.385zm9.19-13.476c-.096-.157-.355-.247-.592-.253-.155-.004-.308.033-.443.138l-1.187.972-.347-.215c-1.105-.679-2.479-1.328-3.835-1.615-.305-.07-.607.015-.84.207-.265.222-.36.589-.237.924.192.506.663 1.726.722 1.853.063.127.091.268.004.398-.165.323-.329.643-.431.797-.078.13-.157.247-.047.394.146.242.648 1.07 1.392 1.732.961.715 1.756 1.042 2.003 1.159.29.143.458.124.625-.074.191-.223.813-.945 1.03-1.27.215-.325.43-.271.724-.162.292.108 1.86.877 2.178 1.035.318.158.53.237.612.366.093.175.093.997-.163 1.717-.277.778-.573 1.066-.942 1.166-.243.061-.559.038-.877-.024-.318-.062-1.696-.327-3.18-1.045-.917-.476-1.716-1.107-2.38-1.914-.476-.614-.946-1.349-1.282-2.152-.262-.655-.313-1.238-.138-1.798.143-.461.652-1.117 1.076-1.623.286-.317.596-.587.913-.797.317-.21.663-.378.991-.496.328-.119.637-.195.926-.223.289-.028.561.007.805.099.252.094.47.245.64.444l.35.508.45-.086z"/>
                  </svg>
                  (41) 99999-9999
                </a>
              </li>
              <li className="text-nude-rose/60 flex items-start gap-2">
                <svg className="w-4 h-4 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
                <span>Av. República Argentina, 1505<br/>Curitiba, PR - Brasil</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom */}
        <div className="border-t border-white/5 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-nude-rose/40 text-xs">
            © 2026 Olhos de Boneca Curitiba. Todos os direitos reservados.
          </p>
          <div className="flex gap-6">
            {['Política de Privacidade', 'Termos de Uso'].map((link) => (
              <a key={link} href="#" className="text-nude-rose/40 hover:text-champagne text-xs transition-colors">
                {link}
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  )
}
