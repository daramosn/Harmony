import React from 'react'
import './globals.css'
import type { Metadata } from 'next'
import { Poppins } from 'next/font/google'

// const inter = Inter({ subsets: ['latin'], variable: '--font-inter' })
// const lato = Lato({
//     weight: ['100', '300', '400', '700', '900'],
//     subsets: ['latin'],
//     variable: '--font-lato',
// })
const poppins = Poppins({
    weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900'],
    subsets: ['latin'],
    variable: '--font-poppins',
})

export const metadata: Metadata = {
    title: 'Harmony Estates',
    description: 'Building dreams, creating Homes',
}

export default function RootLayout({
    children,
}: {
    children: React.ReactNode
}) {
    return (
        <html lang="en">
            <body className={poppins.className}>{children}</body>
        </html>
    )
}
