import '../styles/globals.css'
import { Inter } from 'next/font/google'


const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'OvaSite',
  description: 'Your monitoring, evaluation and Data collection solution',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
      
        {children}
       
        </body>
    </html>
  )
}
