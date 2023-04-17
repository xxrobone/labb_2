import './globals.css'
import Header from './components/header/Header'

export const metadata = {
  title: 'Version control week 2',
  description: 'Version control week 2, plus learning typescript',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>
        <Header><strong>LOGO would go here</strong> <nav>nav here!</nav></Header>
        {children}</body>
    </html>
  )
}
