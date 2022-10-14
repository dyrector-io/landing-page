import useTranslation from 'next-translate/useTranslation'
import Image from 'next/image'
import React from 'react'
import clsx from 'clsx'
import {
  BLOG_URL,
  CHANGELOG_URL,
  DISCORD_INVITE,
  DOCS_URL,
  EMAIL,
  GITHUB_URL,
  LINKEDIN_URL,
  TWITTER_URL,
} from '../../const'
import { useRouter } from 'next/router'

interface CommunityLinkProps {
  image: string
  label: string
  url: string
}

const CommunityLink = (props: CommunityLinkProps) => {
  const { image, label, url } = props

  return (
    <a className="pb-4 flex cursor-pointer" href={url}>
      <Image src={image} width={18} height={18} />
      <label className="pl-2 cursor-pointer">{label}</label>
    </a>
  )
}

interface ColumnProps {
  label: string
  className?: string
}

const Column = (props: React.PropsWithChildren<ColumnProps>) => {
  const { label, children, className } = props

  return (
    <div className={clsx(className, 'flex-auto flex flex-col')}>
      <label className="text-lg font-bold pb-3 md:pb-7">{label}</label>
      {children}
    </div>
  )
}

const DyoFooter = () => {
  const { t } = useTranslation('footer')
  const router = useRouter()

  return (
    <>
      <div className="px-12 flex flex-wrap mb-20">
        <div className="flex-auto basis-full md:basis-1/2 lg:basis-2/6">
          <Image src="/logo.svg" width="140px" height="46px" alt={t('common:logoAlt')} />
        </div>
        <Column label={t('common:company')} className="basis-full pt-4 md:pt-0 md:basis-1/2 lg:basis-1/6">
          <label className="pb-4">
            <a href="/">{t('common:home')}</a>
          </label>
          <label className="pb-4">
            <a href={DOCS_URL}>{t('common:docs')}</a>
          </label>
          <label className="pb-4">
            <a href={CHANGELOG_URL}>{t('common:changelog')}</a>
          </label>
          <label className="pb-4">
            <a href={BLOG_URL}>{t('common:blog')}</a>
          </label>
        </Column>
        <Column label={t('common:community')} className="basis-full pt-4 md:pt-0 md:basis-1/2 lg:basis-1/6">
          <CommunityLink image="/logo-discord.svg" label={t('common:discord')} url={DISCORD_INVITE} />
          <CommunityLink image="/logo-github.svg" label={t('common:github')} url={GITHUB_URL} />
          <CommunityLink image="/logo-twitter.svg" label={t('common:twitter')} url={TWITTER_URL} />
          <CommunityLink image="/logo-linkedin.svg" label={t('common:linkedin')} url={LINKEDIN_URL} />
        </Column>
        <div className="flex flex-col basis-full pt-4 md:pt-0 md:basis-1/2 lg:basis-2/6">
          <Column label={t('common:getInTouch')}>
            <div className="flex">
              <CommunityLink image="/email.svg" label={EMAIL} url={`mailto:${EMAIL}`} />
            </div>
          </Column>
          <Column label={t('common:career')}>{t('careerText')}</Column>
        </div>
      </div>
      <div className="px-12 flex flex-row flex-wrap">
        <label className="basis-full text-center lg:text-left lg:basis-auto">{t('common:copyright')}</label>
        <label
          className="cursor-pointer ml-0 text-center basis-1/3 lg:text-left lg:ml-auto lg:basis-auto"
          onClick={() => router.push('/tos')}
        >
          {t('common:termsOfUse')}
        </label>
        <label
          className="cursor-pointer pl-0 text-center basis-1/3 lg:text-left lg:pl-10 lg:basis-auto"
          onClick={() => router.push('/privacy')}
        >
          {t('common:privacyPolicy')}
        </label>
        <label
          className="cursor-pointer pl-0 text-center basis-1/3 lg:text-left lg:pl-10 lg:basis-auto"
          onClick={() => router.push('/cookies')}
        >
          {t('common:cookiePolicy')}
        </label>
      </div>
    </>
  )
}

export default DyoFooter
