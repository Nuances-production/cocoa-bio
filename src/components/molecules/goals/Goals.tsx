import Title from '@/components/atoms/title/Title'
import { useTranslations } from 'next-intl'
import React from 'react'
import styles from './Goals.module.scss'
import Image from 'next/image'

export default function Goals() {
    const t = useTranslations('Goals')

    const imgData = [
        {
            src: '/4.png',
            alt: '',
        },
        {
            src: '/5.png',
            alt: '',
        },
        {
            src: '/6.png',
            alt: '',
        },
    ]

    return (
        <article className={styles.goals}>
            <Title label={t('title')} text={t('text')} />
            <section className={styles.textContainer}>
                <p>{t('paraph1')}</p>
                <p>{t('paraph2')}</p>
                <p>{t('paraph3')}</p>
            </section>
            <section className={styles.imgContainer}>
                {imgData.map((img, index) => (
                    <Image
                        key={index}
                        width={300}
                        height={300}
                        alt={img.alt}
                        src={img.src}
                        layout="intrinsic"
                        className={styles.image}
                    />
                ))}
            </section>
        </article>
    )
}
