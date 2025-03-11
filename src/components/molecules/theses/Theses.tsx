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
            <p className={styles.desc}>{t('desc')}</p>
            <section className={styles.container}>
                <iframe
                    src="https://www.youtube.com/embed/qJjoPzA_L7c"
                    className={styles.video}
                />
            </section>
            <div className={styles.section}>
                <h4 className={styles.titleSection}>{t('titleOutro')} </h4>
                <p className={styles.text}>{t('textOutro')}</p>
            </div>
            <Image
                src="/img_these.svg"
                alt=""
                width={300}
                height={300}
                layout="intrinsic"
                className={styles.image}
            />
        </article>
    )
}
