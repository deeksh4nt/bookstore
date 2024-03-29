import type { Metadata } from 'next'
import NavBar from '@/app/components/NavBar'

import './globals.css'

export const metadata: Metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head>
        <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@20,400,1,0" />
      </head>
      <body>
        <NavBar title="BookStore" itemCount={3} />
        {children}
      </body>
    </html>
  )
}
