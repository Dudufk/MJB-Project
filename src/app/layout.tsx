import { ReactNode } from 'react'
import { Analytics } from '@vercel/analytics/react'
import './globals.css'
import { Roboto_Flex as Roboto, Poppins } from 'next/font/google'
import Footer from '@/components/Footer'
import Header from '@/components/Header'
import logoImg from '../assets/logo-com-fundo.png'

const roboto = Roboto({ subsets: ['latin'], variable: '--font-roboto' })

const poppins = Poppins({
  subsets: ['latin'],
  weight: '500',
  variable: '--font-poppins',
})

export const metadata = {
  title: 'MJB Contabilidade',
  description: 'MJB Contabilidade - Escritório de Contabilidade',
  image: logoImg,
}

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="pt-BR">
      <body
        className={`${roboto.variable} ${poppins.variable} bg-gray-900 font-sans text-gray-100`}
      >
        <Header />
        {children}
        <Footer />
        <Analytics />
      </body>
    </html>
  )
}
