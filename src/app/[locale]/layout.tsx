import type { Metadata } from 'next'
import React from 'react'
import './globals.scss'
import { Header } from '@/components/layout/header/Header'
import { NextIntlClientProvider } from 'next-intl'
import localFont from 'next/font/local'
import { getMessages } from 'next-intl/server'
import Footer from '@/components/layout/footer/Footer'
import { Analytics } from '@vercel/analytics/next'

const helveticaBold = localFont({
    src: '../fonts/HelveticaNeueBold.otf',
    variable: '--helvetica-bold',
})

const helveticaMedium = localFont({
    src: '../fonts/HelveticaNeueMedium.otf',
    variable: '--helvetica-medium',
})

const helveticaRegular = localFont({
    src: '../fonts/HelveticaNeueRoman.otf',
    variable: '--helvetica-regular',
})

export const metadata: Metadata = {
    title: 'Cocoa Bio',
}

export default async function LocaleLayout({
    children,
}: Readonly<{
    children: React.ReactNode
}>) {
    const messages = await getMessages()
    return (
        <html lang="en">
            <body
                className={`${helveticaBold.variable} ${helveticaMedium.variable} ${helveticaRegular.variable}`}
            >
                <NextIntlClientProvider messages={messages}>
                    <Header />
                    {children}
                    <Analytics />
                    <Footer />
                </NextIntlClientProvider>
            </body>
        </html>
    )
}
