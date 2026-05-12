import type { Metadata } from 'next'
import './globals.css'
import SmoothScroll from '@/components/SmoothScroll'
import CustomCursor from '@/components/CustomCursor'
import Header from '@/components/Header'
import Preloader from '@/components/Preloader'
import WhatsAppButton from '@/components/WhatsAppButton'
import DynamicBackground from '@/components/DynamicBackground'

export const metadata: Metadata = {
  title: 'Olhos de Boneca Curitiba | Extensão de Cílios Premium',
  description: 'Studio premium de extensão de cílios e Olhos de Boneca Academy. Elegância, sofisticação e técnica exclusiva.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="pt-BR">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
      </head>
      <body className="antialiased">
        <DynamicBackground />
        <Preloader />
        <CustomCursor />
        <Header />
        <WhatsAppButton />
        <SmoothScroll>
          <main>
            {children}
          </main>
        </SmoothScroll>
      </body>
    </html>
  )
}
