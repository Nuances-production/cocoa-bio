'use client'

import React from 'react'
import Image from 'next/image'
import styles from './FlipImage.module.scss'

interface FlipImageProps {
    frontSrc: string
    backSrc: string
    alt: string
}

const FlipImage = ({ frontSrc, backSrc, alt }: FlipImageProps) => {
    return (
        <div className={styles.cardContainer}>
            <div className={styles.card}>
                <div className={`${styles.face} ${styles.front}`}>
                    <Image
                        src={frontSrc}
                        width={500}
                        height={500}
                        alt={alt}
                        layout="intrinsic"
                        className={styles.image}
                    />
                </div>
                <div className={`${styles.face} ${styles.back}`}>
                    <Image
                        src={backSrc}
                        width={500}
                        height={500}
                        alt={alt}
                        layout="intrinsic"
                        className={styles.image}
                    />
                </div>
            </div>
        </div>
    )
}

export default FlipImage
