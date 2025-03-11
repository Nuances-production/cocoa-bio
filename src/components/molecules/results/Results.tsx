import Title from '@/components/atoms/title/Title'
import { useTranslations } from 'next-intl'
import React from 'react'
import styles from './Results.module.scss'
import { Link } from '@/i18n/routing'
import Image from 'next/image'

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

    const introData = [
        t.rich('intro1', {
            strong: (chunks) => <span className="bold">{chunks}</span>,
        }),
        t('intro2'),
        t('intro3'),
    ]

    const impactData = [
        t.rich('impact1', {
            strong: (chunks) => <span className="bold">{chunks}</span>,
        }),
        t.rich('impact2', {
            strong: (chunks) => <span className="bold">{chunks}</span>,
        }),
        t.rich('impact3', {
            strong: (chunks) => <span className="bold">{chunks}</span>,
        }),
        t.rich('impact4', {
            strong: (chunks) => <span className="bold">{chunks}</span>,
        }),
    ]

    return (
        <article className={styles.results} id="publications">
            <Title label={t('title')} />
            <div className={styles.textContainer}>
                {introData.map((text, index) => (
                    <p key={index} className={styles.text}>
                        {text}
                    </p>
                ))}
            </div>
            <Image
                width={500}
                height={500}
                layout="intrinsic"
                alt=""
                src="/alt.png"
                className={styles.img}
            />
            <div className={styles.textContainer}>
                <p className={styles.text}>{t('postIntro1')}</p>
                <p className={styles.text}>{t('postIntro2')}</p>
            </div>
            <div className={styles.textContainer}>
                <h4 className={styles.titleSection}>{t('impactTitle')}</h4>
                {impactData.map((text, index) => (
                    <p key={index} className={styles.text}>
                        {text}
                    </p>
                ))}
            </div>
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
