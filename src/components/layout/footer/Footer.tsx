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
    const currentYear = new Date().getFullYear()

    return (
        <footer className={styles.footer} id="contact">
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
                    <Link href="https://www.facebook.com/profile.php?id=61572744238216">
                        <Image
                            src="/fb.png"
                            width={50}
                            height={50}
                            alt=""
                            layout="intrinsic"
                            className={styles.picto}
                        />
                    </Link>
                    <Link href="https://www.youtube.com/@COCOABIO-r2c">
                        <Image
                            src="/yt.png"
                            width={50}
                            height={50}
                            alt=""
                            layout="intrinsic"
                            className={styles.picto}
                        />
                    </Link>
                    <Link href="https://www.linkedin.com/company/lspm-cnrs/">
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
                    <p className={styles.contactUs}>{t('title')}</p>
                    <a href="mailto:dirras@univ-paris13.fr">
                        dirras@univ-paris13.fr
                    </a>
                </div>
            </section>
            <section className={styles.secondPartContainer}>
                {isMobile ? (
                    <>
                        <Image
                            src="/footer_mobile.svg"
                            width={500}
                            height={500}
                            alt=""
                            className={styles.banniere}
                        />
                        <div className={styles.credits}>
                            © {currentYear} Nuance Productions
                        </div>
                    </>
                ) : (
                    <section className={styles.containerCredits}>
                        <p className={styles.credits2}>
                            {currentYear} LABCOM Optimaa / nuance productions
                        </p>
                        <Image
                            src="/footer_desktop.svg"
                            alt="credits"
                            width={400}
                            height={50}
                            className={styles.imgCredits}
                        />
                    </section>
                )}
            </section>
        </footer>
    )
}
