import Intro from '@/components/molecules/intro/Intro'
import React from 'react'
import styles from './Homepage.module.scss'
import Image from 'next/image'

export default function Homepage() {
    return (
        <main className={styles.homepage}>
            <Intro />
            <Image
                src="/2.png"
                width={500}
                height={500}
                alt=""
                layout="intrinsic"
                className={styles.image}
            />
        </main>
    )
}
