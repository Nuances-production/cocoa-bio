import Title from '@/components/atoms/title/Title'
import { useTranslations } from 'next-intl'
import React from 'react'
import styles from './Results.module.scss'
import { Link } from '@/i18n/routing'

export default function Results() {
    const t = useTranslations('Results')

    const linkData = [
        {
            url: '',
            title: '',
        },
        {
            url: '',
            title: '',
        },
        {
            url: '',
            title: '',
        },
        {
            url: '',
            title: '',
        },
        {
            url: '',
            title: '',
        },
    ]
    return (
        <article className={styles.results}>
            <Title label={t('title')} />
            <section className={styles.textContainer}>
                <p>{t.rich('paraph1', { br: () => <br /> })}</p>
                <p>{t.rich('paraph2', { br: () => <br /> })}</p>
            </section>
            <section>
                <h3 className={styles.title}>{t('secondTitle')}</h3>
                <ol className={styles.linkList} type="1">
                    {linkData.map((link, index) => (
                        <li key={index} className={styles.link}>
                            <Link href={link.url}>{link.title}</Link>
                        </li>
                    ))}
                </ol>
            </section>
        </article>
    )
}
