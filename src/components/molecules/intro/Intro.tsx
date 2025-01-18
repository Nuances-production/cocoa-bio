import React from 'react'
import styles from './Intro.module.scss'
import { useTranslations } from 'next-intl'

export default function Intro() {
    const t = useTranslations('Intro')

    const statsData = [
        {
            number: '21',
            text: t('stat1'),
        },
        {
            number: '2000+',
            text: t('stat2'),
        },
        {
            number: '2022',
            text: t('stat3'),
        },
        {
            number: '10+',
            text: t('stat4'),
        },
    ]

    return (
        <article className={styles.intro}>
            <section className={styles.descContainer}>
                <p>{t('desc')}</p>
            </section>
            <section className={styles.numbersContainer}>
                {statsData.map((stat, index) => (
                    <div key={index} className={styles.numberContainer}>
                        <p className={styles.number}>{stat.number}</p>
                        <p className={styles.numberDesc}>{stat.text}</p>
                    </div>
                ))}
            </section>
        </article>
    )
}
