import Intro from '@/components/molecules/intro/Intro'
import React from 'react'
import styles from './Homepage.module.scss'
import Resume from '@/components/molecules/resume/Resume'
import ImgOnText from '@/components/molecules/imgOntext/ImgOnText'
import { useTranslations } from 'next-intl'
import Goals from '@/components/molecules/goals/Goals'
import Results from '@/components/molecules/results/Results'
import Theses from '@/components/molecules/theses/Theses'
import FlipImage from '@/components/molecules/flipImage/FlipImage'
import Partners from '@/components/molecules/partners/Partners'

export default function Homepage() {
    const t = useTranslations()
    return (
        <main className={styles.homepage}>
            <Intro />
            <FlipImage frontSrc="/2.png" backSrc="/lastImg.png" alt="" />
            <Resume />
            <ImgOnText
                info="CocoA-Bio"
                title={t('Global.imgOnText1.title')}
                desc={t('Global.imgOnText1.desc')}
                src="/3.png"
                alt=""
                id="project"
            />
            <Goals />
            <Results />
            <Theses />
            {/* <ImgOnText
                info={t('Global.imgOnText2.info')}
                title={t('Global.imgOnText2.title')}
                src="/9.png"
                alt=""
                id="partners"
            /> */}
            <Partners />
        </main>
    )
}
