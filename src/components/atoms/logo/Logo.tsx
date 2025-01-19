import Image from 'next/image'
import React from 'react'
import styles from './Logo.module.scss'
import { Link } from '@/i18n/routing'

interface LogoProps {
    className?: string
}

export default function Logo({ className }: LogoProps) {
    return (
        <Link href="/">
            <Image
                src="/logo.png"
                alt="logo"
                width={300}
                height={120}
                className={`${styles.logo} ${className}`}
            />
        </Link>
    )
}
