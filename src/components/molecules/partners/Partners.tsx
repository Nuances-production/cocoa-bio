'use client'
import React, { useState } from 'react'
import styles from './Partners.module.scss'
import useMobile from '@/hooks/useMobile'
import Image from 'next/image'

export default function Partners() {
    const isMobile = useMobile()
    const [selectedPartner, setSelectedPartner] = useState<string | null>(null)

    const datas = [
        {
            title: 'Z3DLAB',
            desc: 'Z3DLAB, est une société de technologie en science des matériaux axée sur les poudres de titane haute performance pour les applications de fabrication additive, en particulier la production de poudre métallique et la fabrication de pièces à haute valeur ajoutée, visant les secteurs aéronautique et médical.',
            url: '/1_z3dlab.png',
            alt: '',
        },
        {
            title: 'LSPM',
            desc: 'Le LSPM est une unité propre de Recherche du CNRS avec un effectif d’environ 130 personnes, dont plus de 30 doctorants, 61 chercheurs ou enseignants-chercheurs, 20 techni-ciens et personnel administratif. Sa recherche est multidisciplinaire et couvre un large champ de recherche en science des procédés et des matériaux.',
            url: '/2_uspn.png',
            alt: '',
        },
        {
            title: 'BIOCIS',
            desc: 'Spécialisés dans la chimie des acides aminés modifiés et des peptides notamment fluorés, des glycosides, glycopeptides, pour des applications dans le domaine de la chimie biologique et de la chimie médicinale, l’équipe Chimie Biologique de CY Cergy Paris Université a intégré, en 2020, L’UMR CNRS BioCIS (Biomolécules : Conception, Isolement, Synthèse) de la faculté de pharmacie de l’Université Paris Saclay.',
            url: '/3_biocis.png',
            alt: '',
        },
        {
            title: 'ITODYS',
            desc: 'Le laboratoire Interfaces Traitements Organisation et DYnamique des Systèmes – ITODYS, UMR7086 est une unité mixte de l’Université Paris Diderot et du CNRS (UMR 7086) rattaché à l’institut de chimie du CNRS. Le laboratoire développe des activités de recherche autour de la chimie de surface, des interfaces, des nanomatériaux et nanosystèmes et de la chimie moléculaire pour les nanosciences',
            url: '/4_itodys.png',
            alt: '',
        },
        {
            title: 'URB2i',
            desc: 'L’Unité de Recherche en Biomatériaux Innovant et Interfaces est sous la tutelle conjointe de l’Université Paris Cité (ex Paris Descartes) et de l’Université Paris 13 (dénommée Université Sorbonne Paris Nord). L’URB2i est reconnue par le monde académique, clinique et industriel dentaire pour ses activités scientifiques dans le développement, la caractérisation, la mise en forme, l’assemblage et l’évaluation des perfor-mances en service des biomatériaux dentaires.',
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
        </article>
    )
}
