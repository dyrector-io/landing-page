import clsx from 'clsx'
import useTranslation from 'next-translate/useTranslation'
import Image from 'next/image'
import styles from '../../styles/index.module.css'

const SectionCommunity = () => {
  const { t } = useTranslation('index')

  return (
    <div className="text-center max-w-5xl mx-auto my-24">
      <Image src="/logo-discord.svg" layout="intrinsic" width={114} height={83} />

      <div className="pt-9 text-slate-300 bold text-3xl font-bold">{t('community.title')}</div>
      <div className="pt-5 text-lg">{t('community.subTitle')}</div>
      <button
        onClick={() => window.open('https://discord.gg/HZpBWsRgem', '_blank', 'noopener,noreferrer')}
        className={clsx(styles['button-gradient'], 'py-3 px-10 mt-10 font-bold rounded-sm')}
      >
        {t('community.button')}
      </button>
    </div>
  )
}

export default SectionCommunity

