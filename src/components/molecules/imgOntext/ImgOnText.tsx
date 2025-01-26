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
    id?: string
}

export default function ImgOnText({
    info,
    title,
    desc,
    src,
    alt,
    id,
}: ImgOnTextProps) {
    const isMobile = useMobile()
    return (
        <article className={styles.container} id={id}>
            <section className={styles.imgOnText}>
                {!isMobile && <div className={styles.whiteSpace} />}
                <div className={styles.textBlock}>
                    {!isMobile && <p className={styles.info}>{info}</p>}
                    <h3 className={styles.title}>{title}</h3>
                    {desc && <p className={styles.desc}>{desc}</p>}
                </div>
            </section>
            {/* <div className={styles.imageContainer}> */}
            <Image
                src={src}
                width={435}
                height={600}
                alt={alt}
                className={styles.image}
            />
            {/* </div> */}
        </article>
    )
}
