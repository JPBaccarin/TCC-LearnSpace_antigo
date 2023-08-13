import Sidebar from '@/components/sidebar/Sidebar'
import './globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'LearnSpace',
  description: 'LearnSpace - Plataforma de Estudos com IA',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="pt-br">
      <body className={inter.className}>
        <Sidebar />
        {children}
      </body>
    </html>
  )
}