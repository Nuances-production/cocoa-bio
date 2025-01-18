import React from 'react'
import styles from './Intro.module.scss'
import { useTranslations } from 'next-intl'
import Image from 'next/image'

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
            <section className={styles.bioContainer}>
                <div className={styles.descContainer}>
                    <p>{t('desc')}</p>
                </div>
                <div className={styles.numbersContainer}>
                    {statsData.map((stat, index) => (
                        <div key={index} className={styles.numberContainer}>
                            <p className={styles.number}>{stat.number}</p>
                            <p className={styles.numberDesc}>{stat.text}</p>
                        </div>
                    ))}
                </div>
            </section>
            <Image
                src="/picto.png"
                width={500}
                height={500}
                alt=""
                layout="intrinsic"
                className={styles.image}
            />
            <section>
                <p className={styles.text}>{t('text')}</p>
            </section>
        </article>
    )
}
