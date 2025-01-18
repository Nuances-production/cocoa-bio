import { useTranslations } from 'next-intl'
import React from 'react'
import styles from './Theses.module.scss'
import Title from '@/components/atoms/title/Title'
import Image from 'next/image'

export default function Theses() {
    const t = useTranslations('Theses')

    return (
        <article className={styles.theses}>
            <Title
                label={t('title')}
                text={t('text')}
                className={styles.title}
            />
            <section className={styles.container}>
                <Image
                    src="/7.png"
                    alt=""
                    width={300}
                    height={300}
                    layout="intrinsic"
                    className={styles.image}
                />
                <p className={styles.desc}>{t('desc')}</p>
            </section>
        </article>
    )
}
