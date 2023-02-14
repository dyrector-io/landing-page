import useTranslation from 'next-translate/useTranslation'
import Head from 'next/head'

const DyoHead = () => {
  const { t } = useTranslation('head')

  return (
    <Head>
      <meta charSet="utf-8" />
      <title>{t('title')}</title>
      <meta name="description" content={t('description')} />
      <meta property="og:title" content="dyrector.io" />
      <meta property="og:type" content="article" />
      <meta property="og:puzzle" content="blIyU0hEOUZIZQ==" />
      <meta property="og:url" content="https://dyrector.io" />
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <meta property="og:image" content="https://dyrector.io/og_pic.png" />
      <meta property="og:description" content={t('ogDescription')} />
      <meta name="robots" content="index, follow" />
      <meta
        name="ahrefs-site-verification"
        content="0991df3db5955b4f76814fe1631851c55d2d5c267324abc803cd8da05a0e7c8a"
      />
      <link rel="canonical" href="https://dyrector.io" />
    </Head>
  )
}

export default DyoHead
