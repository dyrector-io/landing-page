import Image from 'next/image'
import clsx from 'clsx'
import useTranslation from 'next-translate/useTranslation'
import { useEffect, useRef } from 'react'
import styles from '../../styles/index.module.css'

export const COMPASS_FOR_TEXTS = [
  'containers',
  'kubernetes',
  'engineers',
  'developers',
  'managers',
  'releases',
  'pipelines',
  'versions',
  'applications',
  'services',
  'configs',
  'products',
  'microservices',
  'code',
  'databases',
  'tickets',
  'workflows',
  'collaboration',
]

type SectionHeaderProps = {
  className?: string
}

const SectionHeader = (props: SectionHeaderProps) => {
  const { className } = props
  const { t } = useTranslation('index')

  const textRef = useRef<HTMLSpanElement>(null)
  const textAnimationIndex = useRef<number>(0)

  const getAnimatedText = () => t(`compassForItems.${COMPASS_FOR_TEXTS[textAnimationIndex.current]}`)

  useEffect(() => {
    const timer = setInterval(() => {
      textRef.current!.className = styles['animate-fade-out']
    }, 2000)

    return () => {
      clearTimeout(timer)
    }
  }, [])

  useEffect(() => {
    if (textRef.current == null) {
      return
    }

    textRef.current!.addEventListener('animationend', e => {
      if (e.animationName === styles.fadeOut) {
        textAnimationIndex.current = (textAnimationIndex.current + 1) % COMPASS_FOR_TEXTS.length

        textRef.current!.innerText = getAnimatedText()
        textRef.current!.className = styles['animate-fade-in']
      }
    })
  }, [textRef, getAnimatedText])

  return (
    <div className={clsx(styles.world, 'flex flex-wrap py-14 md:py-36 justify-between', className)}>
      <div className="flex flex-col md:basis-1/2">
        <h1 className="text-gradient font-sans-pro font-bold text-4xl mb-8 flex flex-wrap content-start h-20 sm:h-auto">
          {t('compassFor')}&nbsp;
          <div className="basis-full sm:basis-auto">
            <span ref={textRef}>{getAnimatedText()}</span>
          </div>
        </h1>
        <label>{t('headerText')}</label>
        <div>
          <button
            type="button"
            className={clsx(styles['button-gradient'], 'py-4 px-6 mt-6 font-bold rounded-sm')}
            onClick={() => window.location.assign('https://docs.dyrector.io/get-started/overview')}
          >
            {t('getStartedForFree')}
          </button>
        </div>
      </div>
      <div className="basis-full md:basis-1/2 text-center md:text-right pt-16 md:pt-0">
        <Image src="/header-ship.svg" layout="intrinsic" width={500} height={300} alt={t('headerImgAlt')} />
      </div>
    </div>
  )
}

export default SectionHeader
