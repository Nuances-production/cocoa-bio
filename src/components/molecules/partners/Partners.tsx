'use client'
import React, { useState } from 'react'
import styles from './Partners.module.scss'
import useMobile from '@/hooks/useMobile'
import Image from 'next/image'
import { useTranslations } from 'next-intl'

export default function Partners() {
    const t = useTranslations('Partners')
    const isMobile = useMobile()
    const [selectedPartner, setSelectedPartner] = useState<string | null>(null)
    const [isOpen, setIsOpen] = useState(false)

    const datas = [
        {
            title: 'Z3DLAB',
            desc: t('desc1'),
            url: '/1_z3dlab.png',
            alt: '',
        },
        {
            title: 'LSPM',
            desc: t('desc2'),
            url: '/2_uspn.png',
            alt: '',
            highlight: '/highlight2.svg',
        },
        {
            title: 'BIOCIS',
            desc: t('desc3'),
            url: '/3_biocis.png',
            alt: '',
            highlight: 'highlight3.svg',
        },
        {
            title: 'ITODYS',
            desc: t('desc4'),
            url: '/4_itodys.png',
            alt: '',
            highlight: 'highlight4.svg',
        },
        {
            title: 'URB2i',
            desc: t('desc5'),
            url: '/5_urb2i.png',
            alt: '',
        },
    ]

    // Fonction pour gérer le clic sur un partenaire
    const handlePartnerClick = (title: string) => {
        setSelectedPartner(title)
    }

    const handleClickBack = () => {
        setSelectedPartner(null)
    }

    const handleOpenModal = () => {
        setIsOpen(true)
    }

    const handleCloseModal = () => {
        setIsOpen(false)
    }

    // Trouver les données du partenaire sélectionné
    const selectedData = datas.find((data) => data.title === selectedPartner)
    return (
        <article className={styles.container} id="partners">
            <section className={styles.imgOnText}>
                {!isMobile && <div className={styles.whiteSpace} />}
                <div className={styles.textBlock}>
                    {/* {!isMobile && <p className={styles.info}>{info}</p>} */}
                    <p
                        className={
                            selectedData
                                ? `${styles.selected}`
                                : `${styles.desc}`
                        }
                    >
                        Partners
                    </p>
                    {selectedPartner === null ? (
                        // Si aucun partenaire n'est sélectionné, afficher tous les boutons
                        datas.map((data, index) => (
                            <button
                                key={index}
                                className={styles.title}
                                onClick={() => handlePartnerClick(data.title)}
                            >
                                {data.title}
                            </button>
                        ))
                    ) : (
                        // Si un partenaire est sélectionné, afficher sa description
                        <>
                            <div
                                onClick={handleClickBack}
                                className={styles.backButton}
                            >
                                X
                            </div>
                            <div className={styles.partnerDetails}>
                                <p className={styles.description}>
                                    {selectedData?.desc}
                                </p>
                                {selectedData && selectedData.highlight && (
                                    <button
                                        className={styles.buttonModal}
                                        onClick={handleOpenModal}
                                    >
                                        {t('highlight')}
                                    </button>
                                )}
                            </div>
                        </>
                    )}
                </div>
            </section>
            {/* <div className={styles.imageContainer}> */}
            <Image
                src={selectedData ? selectedData.url : '/9.png'}
                width={435}
                height={600}
                alt={selectedData?.alt || 'photo de base'}
                className={styles.image}
            />
            {/* </div> */}
            {isOpen && (
                <div className={styles.modal}>
                    <button onClick={handleCloseModal}>X</button>
                    <Image
                        width={300}
                        height={300}
                        alt=""
                        src={selectedData?.highlight as string}
                    />
                </div>
            )}
        </article>
    )
}
