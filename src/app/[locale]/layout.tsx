import type { Metadata } from 'next'
import React from 'react'
import './globals.scss'
import { Header } from '@/components/layout/header/Header'
import { NextIntlClientProvider } from 'next-intl'
import { getMessages } from 'next-intl/server'

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
            <body>
                <NextIntlClientProvider messages={messages}>
                    <Header />
                    {children}
                </NextIntlClientProvider>
            </body>
        </html>
    )
}
