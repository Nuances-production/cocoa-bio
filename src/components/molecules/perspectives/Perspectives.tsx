import Title from '@/components/atoms/title/Title'
import { useTranslations } from 'next-intl'
import React from 'react'
import styles from './Perspectives.module.scss'

export default function Perspectives() {
    const t = useTranslations('Perspectives')

    return (
        <article className={styles.perspectives} id="perspectives">
            <Title label={t('title')} />
            <div className={styles.container}>
                <h4 className={styles.bold}>{t('intro')}</h4>
                <p className={styles.text}>
                    {t.rich('text1', { br: () => <br /> })}
                </p>
                <p className={styles.text}>{t('text2')}</p>
                <h4 className={styles.bold}>{t('outro')}</h4>
            </div>
        </article>
    )
}
