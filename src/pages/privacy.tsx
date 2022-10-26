import type { NextPage } from 'next'
import useTranslation from 'next-translate/useTranslation'
import DyoFooter from '../components/main/dyo-footer'
import DyoNavbar from '../components/main/dyo-navbar'

const Index: NextPage = () => {
  const { t } = useTranslation('privacy')
  const bodyText = t('body', undefined, { returnObjects: true }) as string[]
  const paragraphs = t('paragraphs', undefined, { returnObjects: true }) as string[]

  const renderParagraphs = (line: string | string[], index: number) => {
    if (!Array.isArray(line)) {
      return (
        <h6 key={index} className="mt-8 pb-4 font-semibold">
          {line}
        </h6>
      )
    } else {
      return line.map((it, itindex) => {
        if (!Array.isArray(it)) {
          return (
            <p key={`${index}-${itindex}`} className="text-sm text-bright pb-4">
              {it}
            </p>
          )
        } else {
          return (
            <ul className="leading-10 list-disc list-inside pl-8 text-gray">
              {it.map((sub, subindex) => (
                <li key={`${index}-${itindex}-${subindex}`} className="text-sm text-bright pb-4">
                  {sub}
                </li>
              ))}
            </ul>
          )
        }
      })
    }
  }

  return (
    <div className="w-11/12 lg:w-5/6 xl:w-4/6 2xl:w-7/12 mx-auto min-h-screen ">
      <DyoNavbar />

      <div className="text-center text-gradient font-sans-pro font-bold text-4xl pb-14">{t('privacyPolicy')}</div>

      {bodyText.map((it, index) => (
        <p key={index} className="text-sm text-bright pb-4">
          {it}
        </p>
      ))}

      {paragraphs.map((it, index) => renderParagraphs(it, index))}

      <DyoFooter />
    </div>
  )
}

export default Index
