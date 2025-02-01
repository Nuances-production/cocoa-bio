/* eslint-disable @typescript-eslint/no-explicit-any */
'use client'

import React, { useRef } from 'react'
import styles from './Intro.module.scss'
import { useTranslations } from 'next-intl'
import Image from 'next/image'
import { useGSAP } from '@gsap/react'
import gsap from 'gsap'

export default function Intro() {
    const t = useTranslations('Intro')
    const numberRefs = useRef<(HTMLParagraphElement | null)[]>([])

    const statsData = [
        {
            number: 21,
            plus: '',
            text: t('stat1'),
        },
        {
            number: 2000,
            plus: '+',
            text: t('stat2'),
        },
        {
            number: 2021,
            plus: '',
            text: t('stat3'),
        },
        {
            number: 10,
            plus: '+',
            text: t('stat4'),
        },
    ]

    const pictoData = [
        {
            url: '/picto1.png',
        },
        {
            url: '/picto2.png',
        },
        {
            url: '/picto3.png',
        },
        {
            url: '/picto4.png',
        },
    ]

    useGSAP(() => {
        numberRefs.current.forEach((ref, index) => {
            if (ref) {
                // Utilisation correcte de gsap.fromTo avec 3 arguments
                gsap.fromTo(
                    ref,
                    { textContent: 0 }, // État initial
                    {
                        textContent: statsData[index].number,
                        duration: 2, // Durée de l'animation
                        ease: 'power2.out', // Effet d'animation
                        snap: { textContent: 1 }, // Force l'arrondi
                        onUpdate: function () {
                            // Mettre à jour le contenu du texte
                            ref.textContent =
                                Math.floor(
                                    parseFloat(
                                        this.targets()[0].textContent || '0'
                                    )
                                ).toString() + statsData[index].plus
                        },
                    }
                )
            }
        })
    })

    return (
        <article className={styles.intro}>
            <section className={styles.bioContainer}>
                <div className={styles.descContainer}>
                    <p>{t('desc')}</p>
                </div>
                <div className={styles.numbersContainer}>
                    {statsData.map((stat, index) => (
                        <div key={index} className={styles.numberContainer}>
                            <p
                                className={styles.number}
                                ref={(el: any) =>
                                    (numberRefs.current[index] = el)
                                }
                            >
                                0{stat.plus}
                            </p>
                            <p className={styles.numberDesc}>{stat.text}</p>
                        </div>
                    ))}
                </div>
            </section>
            <div className={styles.pictoContainer}>
                {pictoData.map((picto, index) => (
                    <Image
                        key={index}
                        src={picto.url}
                        width={70}
                        height={70}
                        alt="picto"
                        layout="intrinsic"
                        className={styles.picto}
                    />
                ))}
            </div>
            <section>
                <p className={styles.text}>{t('text')}</p>
            </section>
            <Image
                src="/phases.svg"
                width={500}
                height={500}
                alt=""
                layout="intrinsic"
                className={styles.image2}
            />
        </article>
    )
}
