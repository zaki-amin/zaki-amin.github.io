import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import { ReactNode } from 'react'
import './globals.css'
import { Toaster } from '@/components/ui/sonner'
import PageFrame from '@/myComponents/layout/PageFrame'

const inter = Inter({
  variable: '--font-inter',
  subsets: ['latin'],
})

export const metadata: Metadata = {
  title: 'Zaki Amin',
  description: 'The personal website of Zaki Amin',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: ReactNode
}>) {
  return (
    <html lang='en'>
      <body className={`${inter.variable} antialiased`}>
        <main>
          <PageFrame>{children}</PageFrame>
        </main>
        <Toaster position='top-right' />
      </body>
    </html>
  )
}
