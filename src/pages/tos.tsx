import type { NextPage } from 'next'
import DyoNavbar from '../components/main/dyo-navbar'
import useTranslation from 'next-translate/useTranslation'

const Index: NextPage = () => {
  const { t } = useTranslation('tos')
  const bodyText = t('body', undefined, { returnObjects: true }) as string[]
  const limitations = t('limitations', undefined, { returnObjects: true }) as string[]

  return (
    <div className="w-full min-h-screen">
      <DyoNavbar />
      <div className="max-w-[1024px] mx-auto flex flex-col">
        <div className="text-center text-gradient font-sans-pro font-bold text-4xl pb-14">{t('termsOfService')}</div>
        {bodyText.map((it, index) => (
          <label key={index} className="text-sm text-bright pb-4">
            {it}
          </label>
        ))}
        <label className="text-lg text-bright pt-8 pb-2">{t('limitationsOfUse')}</label>
        <label className="text-sm text-bright">{t('limitationsWarrant')}</label>
        <ul className="list-disc pl-8 text-sm text-bright">
          {limitations.map((it, index) => (
            <li key={index}>{it}</li>
          ))}
        </ul>
      </div>
    </div>
  )
}

export default Index
