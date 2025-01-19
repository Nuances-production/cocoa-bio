'use client'
import React from 'react'
import styles from './Footer.module.scss'
import Image from 'next/image'
import { useTranslations } from 'next-intl'
import { Link } from '@/i18n/routing'
import useMobile from '@/hooks/useMobile'

export default function Footer() {
    const t = useTranslations('Footer')
    const isMobile = useMobile()

    return (
        <footer className={styles.footer}>
            <section className={styles.firstPartContainer}>
                <Image
                    src="/logoFooter.png"
                    width={300}
                    height={300}
                    alt=""
                    layout="intrinsic"
                    className={styles.image}
                />
                <div className={styles.pictoContainer}>
                    <Link href="">
                        <Image
                            src="/fb.png"
                            width={50}
                            height={50}
                            alt=""
                            layout="intrinsic"
                            className={styles.picto}
                        />
                    </Link>
                    <Link href="">
                        <Image
                            src="/x.png"
                            width={50}
                            height={50}
                            alt=""
                            layout="intrinsic"
                            className={styles.picto}
                        />
                    </Link>
                    <Link href="">
                        <Image
                            src="/lkin.png"
                            width={50}
                            height={50}
                            alt=""
                            layout="intrinsic"
                            className={styles.picto}
                        />
                    </Link>
                </div>
                <div className={styles.contactContainer}>
                    <p>{t('title')}</p>
                    <a href="mailto:hello@optimaa.com">hello@optimaa.com</a>
                </div>
            </section>
            <section className={styles.secondPartContainer}>
                <Image
                    src={
                        isMobile ? '/footer_mobile.svg' : '/footer_desktop.svg'
                    }
                    width={300}
                    height={300}
                    alt=""
                    layout="intrinsic"
                    className={styles.banniere}
                />
            </section>
        </footer>
    )
}
