import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import NavBar from './components/NavBar'
import Swapwidget from './components/Swapwidget'
import Footer from './components/Footer'
import { ClerkProvider } from '@clerk/nextjs'
import { Providers } from "./providers";


const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'TokenDisc',
  description: 'Generated by TokenDisc',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <ClerkProvider>
      <html lang="en" className='light'>
        <body className={inter.className}>
          <Providers>
            <NavBar />
            <main>
              {children}
            </main>
            <Swapwidget />
            <Footer />
          </Providers>
        </body>
      </html>
    </ClerkProvider>
  )
}
