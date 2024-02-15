import type { Metadata } from 'next'
import { Poppins } from 'next/font/google'
import './globals.css'
import Header from '@/components/Header'
import SessionProvider from'@/context/SessionProvider'
import { ThemeProvider } from '@/context/ThemeProvider'
import Footer from '@/components/Footer'
import { useTheme } from '@/context/ThemeProvider'

const poppins = Poppins({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-poppins',
  weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900']
});

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
        <body className={poppins.variable}>
          <SessionProvider>
            <ThemeProvider>
              <Header/>
              {children}
              <Footer/>
            </ThemeProvider>
          </SessionProvider>
        </body>
      </html>
  )
}
