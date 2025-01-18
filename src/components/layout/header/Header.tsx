import React from 'react'
import styles from './Header.module.scss'
import Logo from '@/components/atoms/logo/Logo'
import Navbar from '@/components/molecules/navbar/Navbar'

export const Header = () => {
    return (
        <header className={styles.header}>
            <Logo className={styles.logo} />
            <Navbar />
        </header>
    )
}
