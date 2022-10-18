import clsx from 'clsx'
import useTranslation from 'next-translate/useTranslation'
import Image from 'next/image'
import { DISCORD_INVITE } from '../../const'
import styles from '../../styles/index.module.css'

type SectionCommunityProps = {
  className?: string
}

const SectionCommunity = (props: SectionCommunityProps) => {
  const { className } = props
  const { t } = useTranslation('index')

  return (
    <div className={clsx('text-center mx-auto my-24', className)}>
      <div className="animate-bounce">
        <Image src="/logo-discord.svg" layout="intrinsic" width={114} height={83} />
      </div>

      <div className="pt-9 text-slate-300 bold text-3xl font-bold">{t('community.title')}</div>
      <div className="pt-5 text-lg">{t('community.subTitle')}</div>
      <button
        type="button"
        onClick={() => window.open(DISCORD_INVITE, '_blank', 'noopener,noreferrer')}
        className={clsx(styles['button-gradient'], 'py-3 px-10 mt-10 font-bold rounded-sm')}
      >
        {t('community.button')}
      </button>
    </div>
  )
}

export default SectionCommunity
