import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Markee - Your reading companion',
  description:
    "Add your books and update the current page you're on, whenever you stop reading.Add notes to books if you're reading something like a biography or if it's a book that you have to read for your class.",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang='en'>
      <body className={inter.className}>{children}</body>
    </html>
  )
}
