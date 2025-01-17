import type { Metadata } from 'next'
import React from 'react'
import './globals.scss'

export const metadata: Metadata = {
    title: 'Cocoa Bio',
}

export default function LocaleLayout({
    children,
}: Readonly<{
    children: React.ReactNode
}>) {
    return (
        <html lang="en">
            <body>{children}</body>
        </html>
    )
}
