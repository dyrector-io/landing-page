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
    <div className={clsx('sm:py-11 flex flex-wrap items-center justify-between', className)}>
      <div className="basis-full sm:basis-36 py-5 sm:py-0">
        <div className="w-36 cursor-pointer mx-auto">
          <Image
            src="/logo.svg"
            width="140px"
            height="46px"
            alt={t('logoAlt')}
            layout="responsive"
            onClick={() => window.open('/', '_self', 'noopener,noreferrer')}
          />
        </div>
      </div>
      <a className="sm:ml-auto sm:px-4 md:px-8 text-lg font-bold cursor-pointer" href={DOCS_URL}>
        {t('docs')}
      </a>
      <a className="sm:px-4 md:px-8 text-lg font-bold cursor-pointer" href={BLOG_URL}>
        {t('blog')}
      </a>
      <a className="sm:px-4 md:px-8 text-lg font-bold cursor-pointer" href={CHANGELOG_URL}>
        {t('changelog')}
      </a>
      <div
        className="sm:px-5 h-5 cursor-pointer"
        onClick={() => window.open(GITHUB_URL, '_self', 'noopener,noreferrer')}
      >
        <Image
          className="py-auto"
          src="/logo-github.svg"
          width="20px"
          height="20px"
          alt={t('githubAlt')}
          layout="fixed"
        />
      </div>
      <div className="h-5 cursor-pointer" onClick={() => window.open(DISCORD_INVITE, '_self', 'noopener,noreferrer')}>
        <Image src="/logo-discord.svg" width="20px" height="20px" alt={t('discordAlt')} layout="fixed" />
      </div>
    </div>
  )
}

export default DyoNavbar
