import Image from 'next/image'
import clsx from 'clsx'
import useTranslation from 'next-translate/useTranslation'
import { useEffect, useRef, useState } from 'react'
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

function Modal({ shown, close }) {
  return shown ? (
    <div
      className="modal-backdrop"
      onClick={() => {
        // close modal when outside of modal is clicked
        close()
      }}
    >
      <div className="justify-center items-center flex mx-auto fixed inset-0 z-50 w-full">
        <div className="relative mx-auto bg-zinc-200">
          <div>
            <iframe
              width={800}
              height={520}
              src="https://user-images.githubusercontent.com/9247788/219671903-41da385e-4f8f-4fba-a7e4-c6ec4f727b7f.mp4"
              allowFullScreen
            ></iframe>
          </div>
        </div>
      </div>
      <div className="opacity-40 fixed inset-0 z-40 bg-black"></div>

      <div
        className="modal-content"
        onClick={e => {
          // do not close modal if anything inside modal content is clicked
          e.stopPropagation()
        }}
      ></div>
    </div>
  ) : null
}

const SectionHeader = (props: SectionHeaderProps) => {
  const { className } = props
  const { t } = useTranslation('index')

  const textRef = useRef<HTMLSpanElement>(null)
  const textAnimationIndex = useRef<number>(0)
  const getAnimatedText = () => t(`compassForItems.${COMPASS_FOR_TEXTS[textAnimationIndex.current]}`)

  const [modalShown, toggleModal] = useState(false)

  // Capcture ESC key to close modal
  useEffect(() => {
    const close = e => {
      if (e.keyCode === 27) {
        toggleModal(false)
      }
    }
    window.addEventListener('keydown', close)
    return () => window.removeEventListener('keydown', close)
  }, [])

  // Animate text
  useEffect(() => {
    const timer = setInterval(() => {
      textRef.current!.className = styles['animate-fade-out']
    }, 2000)

    return () => {
      clearTimeout(timer)
    }
  }, [])

  // Handle animation end
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
    <div className={clsx(styles.world, 'flex flex-wrap pt-14 md:py-36 justify-between', className)}>
      <div className="flex flex-col md:basis-1/2">
        <h1 className="text-gradient font-sans-pro font-bold text-4xl mb-8 flex flex-wrap content-start h-20 sm:h-auto">
          {t('compassFor')}&nbsp;
          <div className="basis-full sm:basis-auto">
            <span ref={textRef}>{getAnimatedText()}</span>
          </div>
        </h1>

        <label className="pb-6">{t('headerText2')}</label>
        <div>
          <a
            href="https://www.producthunt.com/posts/dyrector-io-3?utm_source=badge-featured&utm_medium=badge&utm_souce=badge-dyrector&#0045;io&#0045;3"
            target="_blank"
          >
            <img
              src="https://api.producthunt.com/widgets/embed-image/v1/featured.svg?post_id=412944&theme=neutral"
              alt="dyrector&#0046;io - Open&#0045;source&#0032;SelfOps&#0032;platform&#0032;for&#0032;containers&#0046; | Product Hunt"
              width="250"
              height="54"
            />
          </a>
          <button
            type="button"
            className={clsx(styles['button-gradient'], 'py-3 px-6 mt-6 font-bold rounded-md')}
            onClick={() => window.location.assign('https://app.dyrectorio.com')}
          >
            {t('getStarted')}
          </button>
          <button
            type="button"
            className={clsx(
              'py-3 px-6 mt-6 ml-6 font-bold rounded-sm border-2 rounded-md border-neutral-300 text-neutral-300',
            )}
            onClick={() => window.location.assign('https://docs.dyrectorio.com')}
          >
            {t('Docs')}
          </button>
          <button
            type="button"
            className={clsx(
              'py-3 px-6 mt-6 ml-6 font-bold rounded-sm border-2 rounded-md border-neutral-300 text-neutral-300',
            )}
            onClick={() => toggleModal(true)}
          >
            {t('watchDemo')}
          </button>
          <Modal
            shown={modalShown}
            close={() => {
              toggleModal(false)
            }}
          />
        </div>
      </div>

      <div className="basis-full md:basis-1/2 text-center md:text-right pt-16 md:pt-0">
        <Image src="/header-ship.svg" layout="intrinsic" width={500} height={300} alt={t('headerImgAlt')} />
      </div>
    </div>
  )
}

export default SectionHeader
