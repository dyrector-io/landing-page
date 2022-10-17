import clsx from 'clsx'
import useTranslation from 'next-translate/useTranslation'
import Image from 'next/image'
import { BLOG_URL, CHANGELOG_URL, DISCORD_INVITE, DOCS_URL, GITHUB_URL } from '../../const'

type DyoNavbarProps = {
  className?: string
}

const DyoNavbar = (props: DyoNavbarProps) => {
  const { className } = props
  const { t } = useTranslation('common')

  return (
    <div className={clsx('py-11 flex items-center', className)}>
      <div className="w-36 cursor-pointer">
        <a href="/">
          <Image src="/logo.svg" width="140px" height="46px" alt={t('logoAlt')} />
        </a>
      </div>
      <a className="ml-auto px-8 text-lg font-bold cursor-pointer" href={DOCS_URL}>
        {t('docs')}
      </a>
      <a className="px-8 text-lg font-bold cursor-pointer" href={BLOG_URL}>
        {t('blog')}
      </a>
      <a className="px-8 text-lg font-bold cursor-pointer" href={CHANGELOG_URL}>
        {t('changelog')}
      </a>
      <a className="pl-10 h-[18px] cursor-pointer" href={GITHUB_URL}>
        <Image className="py-auto" src="/logo-github.svg" width="18px" height="18px" alt={t('githubAlt')} />
      </a>
      <a className="pl-5 h-[18px] cursor-pointer" href={DISCORD_INVITE}>
        <Image src="/logo-discord.svg" width="18px" height="18px" alt={t('discordAlt')} />
      </a>
    </div>
  )
}

export default DyoNavbar
