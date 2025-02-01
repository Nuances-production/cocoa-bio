import Title from '@/components/atoms/title/Title'
import { useTranslations } from 'next-intl'
import React from 'react'
import styles from './Resume.module.scss'
import FlipImage from '../flipImage/FlipImage'

export default function Resume() {
    const t = useTranslations('Resume')

    return (
        <article className={styles.resume} id="resume">
            <Title label={t('title')} text="CocoA-Bio" />
            <FlipImage frontSrc="/2.png" backSrc="/lastImg.png" alt="" />
            <div className={styles.textContainer}>
                <p className={styles.paragraph}>{t('paraph1')}</p>
                <p className={styles.paragraph}>{t('paraph2')}</p>
            </div>
        </article>
    )
}
