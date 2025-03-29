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

    const methodData = [
        t('desc1'),
        t('desc2'),
        t('desc3'),
        t.rich('desc4', { br: () => <br /> }),
        t('desc5'),
        t.rich('desc6', { br: () => <br /> }),
    ]

    const goalsData = [t('goals1'), t('goals2'), t('goals3'), t('goals4')]

    return (
        <article className={styles.goals} id="goals">
            <Title
                label={t('title')}
                text={t('text')}
                className={styles.title}
            />
            <div className={styles.descContainer}>
                <h4 className={styles.descTitle}>{t('descTitle')}</h4>
                <p className={styles.desc}>{t('desc')}</p>
                <div className={styles.methodContainer}>
                    {methodData.map((text, index) => (
                        <p key={index} className={styles.methodText}>
                            {text}
                        </p>
                    ))}
                </div>
                <h4 className={styles.goalsTitle}>{t('goalsTitle')}</h4>
                <div className={styles.methodContainer}>
                    {goalsData.map((text, index) => (
                        <p key={index} className={styles.methodText}>
                            {text}
                        </p>
                    ))}
                </div>
            </div>
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
