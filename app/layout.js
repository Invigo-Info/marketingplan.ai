
import './globals.css'
import { satoshi } from './ui/fonts'

export const metadata = {
  title: 'AI-Powered Marketing Plans',
  description: 'Sooon is a premium coming soon or waiting list Framer template designed for founders planning to build a Web or mobile app.',
  keywords: '',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en" >
      <body className={satoshi.className}>{children}</body>
    </html>
  )
}
