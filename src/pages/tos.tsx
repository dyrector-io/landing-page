import type { NextPage } from 'next'
import useTranslation from 'next-translate/useTranslation'
import DyoFooter from '../components/main/dyo-footer'
import DyoNavbar from '../components/main/dyo-navbar'

const Index: NextPage = () => {
  const { t } = useTranslation('tos')
  const bodyText = t('body', undefined, { returnObjects: true }) as string[]
  const limitations = t('limitations', undefined, { returnObjects: true }) as string[]

  return (
    <div className="w-11/12 lg:w-5/6 xl:w-4/6 2xl:w-7/12 mx-auto min-h-screen ">
      <DyoNavbar />

      <div className="flex flex-col text-bright">
        <div className="text-center text-gradient font-sans-pro font-bold text-4xl pb-14">{t('termsOfService')}</div>
        {bodyText.map((it, index) => (
          <label key={index} className="text-sm pb-4">
            {it}
          </label>
        ))}
        <label className="text-lg pt-8 pb-2 font-semibold">{t('limitationsOfUse')}</label>
        <label className="text-sm">{t('limitationsWarrant')}</label>
        <ul className="list-disc pl-8 text-sm">
          {limitations.map((it, index) => (
            <li key={index}>{it}</li>
          ))}
        </ul>
      </div>

      <DyoFooter />
    </div>
  )
}

export default Index
