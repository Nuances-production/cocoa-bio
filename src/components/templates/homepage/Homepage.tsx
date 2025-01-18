import Intro from '@/components/molecules/intro/Intro'
import React from 'react'
import styles from './Homepage.module.scss'
import Image from 'next/image'
import Resume from '@/components/molecules/resume/Resume'
import ImgOnText from '@/components/molecules/imgOntext/ImgOnText'
import { useTranslations } from 'next-intl'
import Goals from '@/components/molecules/goals/Goals'
import Results from '@/components/molecules/results/Results'

export default function Homepage() {
    const t = useTranslations()
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
            <Resume />
            <ImgOnText
                info="CocoA-Bio"
                title={t('Global.imgOnText1.title')}
                desc={t('Global.imgOnText1.desc')}
                src="/3.png"
                alt=""
            />
            <Goals />
            <Results />
        </main>
    )
}
