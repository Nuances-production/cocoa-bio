import type { Metadata } from 'next'
import React from 'react'
import './globals.scss'
import { Header } from '@/components/layout/header/Header'
import { NextIntlClientProvider } from 'next-intl'
import localFont from 'next/font/local'
import { getMessages } from 'next-intl/server'

const helveticaBold = localFont({
    src: '../fonts/HelveticaNeueBold.otf',
    variable: '--helvetica-bold',
})

const helveticaMedium = localFont({
    src: '../fonts/HelveticaNeueBold.otf',
    variable: '--helvetica-medium',
})

const helveticaRegular = localFont({
    src: '../fonts/HelveticaNeueBold.otf',
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
                </NextIntlClientProvider>
            </body>
        </html>
    )
}
