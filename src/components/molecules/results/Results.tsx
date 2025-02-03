import Title from '@/components/atoms/title/Title'
import { useTranslations } from 'next-intl'
import React from 'react'
import styles from './Results.module.scss'
import { Link } from '@/i18n/routing'

export default function Results() {
    const t = useTranslations('Results')

    const linkData = [
        {
            url: 'https://hal.science/hal-03879158',
            title: 'Laser Powder Bed Fusion Processing Of Complex Concentrated Alloys For Bio-Implants. 27, Dec, 2022.',
        },
        {
            url: 'https://hal.science/hal-04739764v1/document',
            title: 'L-PBF processing and characterization of a Ti35Nb30Zr29Mo3Ta3 multiprincipal element alloy for medical implants, Jul, 24, 2024.',
        },
        {
            url: 'https://hal.science/hal-04725375',
            title: 'Novel biocompatible alloys via peptides surface engineering. Oct, 8, 2024.',
        },
        {
            url: 'https://hal.science/hal-04727725v1/document',
            title: 'Enhancing biomedical metal implants with synthetic peptides: improved bioactivity and in vitro safety, Oct, 9, 2024.',
        },
        {
            url: 'https://hal.science/hal-04854358',
            title: 'In-situ chemical grafting of aminophenyl and RGD peptide on an equimolar high-entropy HfNbTaTiZr alloy: electrochemical behavior and surface characterization, Dec, 23, 2024',
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
