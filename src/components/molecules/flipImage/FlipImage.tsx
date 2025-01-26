'use client'

import React, { useRef } from 'react'
import Image from 'next/image'
import gsap from 'gsap'
import styles from './FlipImage.module.scss'

interface FlipImageProps {
    frontSrc: string
    backSrc: string
    alt: string
}

const FlipImage = ({ frontSrc, backSrc, alt }: FlipImageProps) => {
    const cardRef = useRef<HTMLDivElement | null>(null)

    const handleMouseEnter = () => {
        gsap.to(cardRef.current, {
            rotationY: 180,
            duration: 0.6,
            ease: 'power2.out',
        })
    }

    const handleMouseLeave = () => {
        gsap.to(cardRef.current, {
            rotationY: 0,
            duration: 0.6,
            ease: 'power2.out',
        })
    }

    return (
        <div
            className={styles.cardContainer}
            ref={cardRef}
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
        >
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
    )
}

export default FlipImage
