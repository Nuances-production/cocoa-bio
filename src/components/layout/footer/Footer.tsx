import React from 'react'
import styles from './Footer.module.scss'
import Image from 'next/image'
import { useTranslations } from 'next-intl'

export default function Footer() {
    const t = useTranslations('Footer')

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
                    <Image
                        src=""
                        width={300}
                        height={300}
                        alt=""
                        layout="intrinsic"
                        className={styles.picto}
                    />
                    <Image
                        src=""
                        width={300}
                        height={300}
                        alt=""
                        layout="intrinsic"
                        className={styles.picto}
                    />
                    <Image
                        src=""
                        width={300}
                        height={300}
                        alt=""
                        layout="intrinsic"
                        className={styles.picto}
                    />
                </div>
                <div>
                    <p>{t('title')}</p>
                    <a href="mailto:hello@optimaa.com">hello@optimaa.com</a>
                </div>
            </section>
            <section className={styles.secondPartContainer}>
                <Image
                    src="/footer.png"
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
