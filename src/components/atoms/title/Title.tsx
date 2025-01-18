import React from 'react'
import styles from './Title.module.scss'

interface TitleProps {
    label: string
    text?: string
}

export default function Title({ label, text }: TitleProps) {
    return (
        <div className={styles.titleContainer}>
            <h2 className={styles.title}>{label}</h2>
            {text && <p className={styles.text}>{text}</p>}
        </div>
    )
}
