import { Header } from '@/components/Header/Header'
import './globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import { Footer } from '@/components/Footer/Footer'
import Image from 'next/image'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Online casino',
  description: 'The best online casino',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Image src={"/casino.jpg"} alt={""} width={800} height={500} className='bg'/>
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
