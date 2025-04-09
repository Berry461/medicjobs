import { Inter, Roboto_Mono } from 'next/font/google'
import './globals.css'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'

// Option 1: Using Google Fonts (recommended for most cases)
const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
})

const robotoMono = Roboto_Mono({
  subsets: ['latin'],
  variable: '--font-roboto-mono',
})

// Option 2: Using Geist fonts (if installed)
// export const geistSans = GeistSans
// export const geistMono = GeistMono

export const metadata = {
  title: 'MediCare+ | Professional Healthcare Services',
  description: 'Trusted medical care with compassion and cutting-edge technology',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${inter.variable} ${robotoMono.variable}`}>
      <body className="antialiased flex flex-col min-h-screen bg-white">
        <Navbar />
        <main className="flex-grow">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  )
}
