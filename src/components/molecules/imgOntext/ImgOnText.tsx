'use client'
import React from 'react'
import styles from './ImgOnText.module.scss'
import useMobile from '@/hooks/useMobile'
import Image from 'next/image'

interface ImgOnTextProps {
    info: string
    title: string
    src: string
    alt: string
    desc?: string
}

export default function ImgOnText({
    info,
    title,
    desc,
    src,
    alt,
}: ImgOnTextProps) {
    const isMobile = useMobile()
    return (
        <section className={styles.imgOnText}>
            <div className={styles.textBlock}>
                {!isMobile && <p className={styles.info}>{info}</p>}
                <h3 className={styles.title}>{title}</h3>
                {desc && <p className={styles.desc}>{desc}</p>}
            </div>
            <div className={styles.imageContainer}>
                <Image
                    src={src}
                    width={400}
                    height={400}
                    layout="intrinsic"
                    alt={alt}
                    className={styles.image}
                />
            </div>
        </section>
    )
}
