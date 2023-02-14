import type { NextPage } from 'next'
import useTranslation from 'next-translate/useTranslation'
import DyoFooter from '../components/main/dyo-footer'
import DyoNavbar from '../components/main/dyo-navbar'

const Index: NextPage = () => {
  const { t } = useTranslation('cookies')
  const bodyText = t('body', undefined, { returnObjects: true }) as string[]
  const whatIsCookie = t('whatIsBody', undefined, { returnObjects: true }) as string[]
  const types = t('types', undefined, { returnObjects: true }) as string[]

  const renderType = (line: string | string[], index: number) => {
    if (Array.isArray(line)) {
      return line.map((it, itindex) => (
        <p key={`${index}-${itindex}`} className="text-sm text-bright pb-4">
          {it}
        </p>
      ))
    }
    return (
      <h6 key={index} className="mt-8 pb-4 font-semibold">
        {line}
      </h6>
    )
  }

  return (
    <div className="w-11/12 lg:w-5/6 xl:w-4/6 2xl:w-7/12 mx-auto min-h-screen">
      <DyoNavbar />

      <div className="text-center text-gradient font-sans-pro font-bold text-4xl mb-16">{t('cookiePolicy')}</div>

      {bodyText.map((it, index) => (
        <p key={index} className="text-sm text-bright pb-4">
          {it}
        </p>
      ))}

      <h4 className="mt-8 font-semibold mb-4">{t('whatIsCookie')}</h4>

      {whatIsCookie.map((it, index) => (
        <p key={index} className="text-sm text-bright pb-4">
          {it}
        </p>
      ))}

      <h4 className="mt-8 font-semibold">{t('typesTitle')}</h4>
      {types.map((it, index) => renderType(it, index))}

      <DyoFooter />
    </div>
  )
}

export default Index
