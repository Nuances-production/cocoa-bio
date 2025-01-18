import Title from '@/components/atoms/title/Title'
import { useTranslations } from 'next-intl'
import React from 'react'
import styles from './Resume.module.scss'

export default function Resume() {
    const t = useTranslations('Resume')

    return (
        <article className={styles.resume}>
            <Title label={t('title')} text="CocoA-Bio" />
            <div className={styles.textContainer}>
                <p className={styles.paragraph}>{t('paraph1')}</p>
                <p className={styles.paragraph}>{t('paraph2')}</p>
            </div>
        </article>
    )
}
