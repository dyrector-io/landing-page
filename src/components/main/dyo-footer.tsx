import useTranslation from 'next-translate/useTranslation'
import Image from 'next/image'
import React from 'react'
import clsx from 'clsx'
import Link from 'next/link'
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

type DyoFooterProps = {
  className?: string
}

const DyoFooter = (props: DyoFooterProps) => {
  const { className } = props
  const { t } = useTranslation('footer')

  return (
    <div className={className}>
      <div className="flex flex-wrap mb-20 pt-36">
        <div className="flex-auto basis-full sm:basis-6/12 lg:basis-1/6 2xl:basis-2/6">
          <Image src="/logo.svg" width="140px" height="46px" alt={t('common:logoAlt')} />
        </div>
        <Column label={t('common:company')} className="basis-full pt-4 md:pt-0 sm:basis-3/12 lg:basis-1/6">
          <label className="pb-4">
            <Link href="/">{t('common:home')}</Link>
          </label>
          <label className="pb-4">
            <Link href={DOCS_URL}>{t('common:docs')}</Link>
          </label>
          <label className="pb-4">
            <Link href={CHANGELOG_URL}>{t('common:changelog')}</Link>
          </label>
          <label className="pb-4">
            <Link href={BLOG_URL}>{t('common:blog')}</Link>
          </label>
        </Column>
        <Column label={t('common:community')} className="basis-full pt-4 md:pt-0 sm:basis-3/12 lg:basis-1/6">
          <CommunityLink image="/logo-discord.svg" label={t('common:discord')} url={DISCORD_INVITE} />
          <CommunityLink image="/logo-github.svg" label={t('common:github')} url={GITHUB_URL} />
          <CommunityLink image="/logo-twitter.svg" label={t('common:twitter')} url={TWITTER_URL} />
          <CommunityLink image="/logo-linkedin.svg" label={t('common:linkedin')} url={LINKEDIN_URL} />
        </Column>
        <div className="flex flex-wrap pt-4 md:pt-0 basis-full lg:basis-2/6 justify-around">
          <Column label={t('common:getInTouch')} className="sm:basis-1/2 lg:basis-full">
            <div className="flex">
              <CommunityLink image="/email.svg" label={EMAIL} url={`mailto:${EMAIL}`} />
            </div>
          </Column>
          <Column label={t('common:career')} className="sm:basis-1/2 lg:basis-full">
            {t('careerText')}
          </Column>
        </div>
      </div>
      <div className="flex flex-row flex-wrap pb-5">
        <label className="basis-full lg:basis-auto text-center lg:text-left order-last lg:order-first pt-5 lg:pt-0">
          {t('common:copyright')}
        </label>
        <Link className="cursor-pointer ml-0 text-center basis-1/3 lg:text-left lg:ml-auto lg:basis-auto" href="/tos">
          {t('common:termsOfService')}
        </Link>
        <Link className="cursor-pointer pl-0 text-center basis-1/3 lg:text-left lg:pl-10 lg:basis-auto" href="/privacy">
          {t('common:privacyPolicy')}
        </Link>
        <Link className="cursor-pointer pl-0 text-center basis-1/3 lg:text-left lg:pl-10 lg:basis-auto" href="/cookies">
          {t('common:cookiePolicy')}
        </Link>
      </div>
    </div>
  )
}

export default DyoFooter
