import Title from '@/components/atoms/title/Title'
import { useTranslations } from 'next-intl'
import React from 'react'
import styles from './Results.module.scss'
import { Link } from '@/i18n/routing'

export default function Results() {
    const t = useTranslations('Results')

    const linkData = [
        {
            url: 'https://hal.science/hal-04727725v1/document ',
            title: 'L-PBF processing and characterization of a Ti 35 Nb 30 Zr 29 Mo 3 Ta 3 multiprincipal element alloy for medical implants',
        },
        {
            url: 'https://pubs.aip.org/aip/apl/article-abstract/125/4/041904/3304598/L-PBF-processing-and-characterization-of-a?redirectedFrom=fulltext',
            title: 'Enhancing biomedical metal implants with synthetic peptides: improved bioactivity and in vitro safety,',
        },
        {
            url: 'https://hal.science/hal-04739764v1/document',
            title: 'L-PBF processing and characterization of a Ti35Nb30Zr29Mo3Ta3 multiprincipal element alloy for medical implants',
        },
    ]
    return (
        <article className={styles.results} id="publications">
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
