import LocalSwitcher from '@/components/atoms/localSwitcher/LocalSwitcher'
import { useTranslations } from 'next-intl'
import React from 'react'

export default function Homepage() {
    const t = useTranslations()
    return (
        <>
            <div>Homepage</div>
            <LocalSwitcher
                enOption={t('Global.language.en')}
                frOption={t('Global.language.fr')}
            />
        </>
    )
}
