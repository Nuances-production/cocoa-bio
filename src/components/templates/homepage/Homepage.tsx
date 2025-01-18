import Intro from '@/components/molecules/intro/Intro'
import React from 'react'
import styles from './Homepage.module.scss'

export default function Homepage() {
    return (
        <main className={styles.homepage}>
            <Intro />
        </main>
    )
}
