'use client'
import LocalSwitcher from '@/components/atoms/localSwitcher/LocalSwitcher'
import { useTranslations } from 'next-intl'
import React, { useState } from 'react'
import styles from './Navbar.module.scss'
import useMobile from '@/hooks/useMobile'

export default function Navbar() {
    const t = useTranslations()
    const isMobile = useMobile()
    const [isOpen, setIsOpen] = useState(false)

    const toggleMenu = () => {
        setIsOpen(!isOpen)
    }

    const handleClick = () => {
        setIsOpen(false)
    }

    return isMobile ? (
        <div className={styles.burgerMenu}>
            <div className={styles.burgerIcon} onClick={toggleMenu}>
                <span
                    className={`${styles.line} ${isOpen ? styles.crossLine1 : ''}`}
                />
                <span
                    className={`${styles.line} ${isOpen ? styles.crossLine2 : ''}`}
                />
                <span
                    className={`${styles.line} ${isOpen ? styles.crossLine3 : ''}`}
                />
            </div>

            <nav className={`${styles.menu} ${isOpen ? styles.menuOpen : ''}`}>
                <ul>
                    <li>
                        <a href="#resume" onClick={handleClick}>
                            {t('Header.nav1')}
                        </a>
                    </li>
                    <li>
                        <a href="#project" onClick={handleClick}>
                            {t('Header.nav2')}
                        </a>
                    </li>
                    <li>
                        <a href="#publications" onClick={handleClick}>
                            {t('Header.nav3')}
                        </a>
                    </li>
                    <li>
                        <a href="#partners" onClick={handleClick}>
                            {t('Header.nav4')}
                        </a>
                    </li>
                    <li>
                        <a href="#contact" onClick={handleClick}>
                            {t('Header.nav5')}
                        </a>
                    </li>

                    <li>
                        <LocalSwitcher
                            enOption={t('Global.language.en')}
                            frOption={t('Global.language.fr')}
                        />
                    </li>
                </ul>
            </nav>
        </div>
    ) : (
        <nav className={styles.nav}>
            <ul className={styles.navContainer}>
                <li>
                    <a href="#resume">{t('Header.nav1')}</a>
                </li>
                <li>
                    <a href="#project">{t('Header.nav2')}</a>
                </li>
                <li>
                    <a href="#publications">{t('Header.nav3')}</a>
                </li>
                <li>
                    <a href="#partners">{t('Header.nav4')}</a>
                </li>
                <li>
                    <a href="#contact">{t('Header.nav5')}</a>
                </li>
                <hr className={styles.verticalBar} />
                <li>
                    <LocalSwitcher
                        enOption={t('Global.language.en')}
                        frOption={t('Global.language.fr')}
                    />
                </li>
            </ul>
        </nav>
    )
}
