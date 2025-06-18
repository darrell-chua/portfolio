import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Your Name - Web Developer & Designer',
  description: 'Freelance web developer, designer, and editor specializing in modern web applications',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${inter.className} bg-dark min-h-screen`}>
        {children}
      </body>
    </html>
  )
}