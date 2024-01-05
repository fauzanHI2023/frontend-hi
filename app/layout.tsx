import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import Header from '@/components/Header'
import SessionProvider from'@/context/SessionProvider'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Human Initiative',
  description: 'Human Initiative',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
      <html lang="en">
        <body className={inter.className}>
          <SessionProvider>
            <Header/>
            {children}
          </SessionProvider>
        </body>
      </html>
  )
}
