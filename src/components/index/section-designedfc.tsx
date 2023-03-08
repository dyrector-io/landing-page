import clsx from 'clsx'
import useTranslation from 'next-translate/useTranslation'
import Image from 'next/image'

type SectionDesignedfcProps = {
  className?: string
}

const SectionDesignedfc = (props: SectionDesignedfcProps) => {
  const { className } = props
  const { t } = useTranslation('index')

  const items = ['orchestration', 'agility', 'cloud', 'cont-integration', 'release-mg']

  const breakText = (text: string) => text.split(' ').map(it => <div>{it}</div>)

  return (
    <div className={clsx('text-center mx-auto mt-16 mb-40', className)}>
      <div className="pt-9 text-slate-300 bold text-xl font-bold max-w-lg mx-auto">
        {t('designedForCompanies.title')}
      </div>
      <a
        href="https://www.producthunt.com/posts/dyrector-io?utm_source=badge-featured&utm_medium=badge&utm_souce=badge-dyrector&#0045;io"
        target="_blank"
      ></a>
      <div className="pt-8 flex justify-around 2xl:justify-between flex-wrap md:flex-nowrap">
        {items.map((it, index) => (
          <div className="flex flex-col w-48 pt-8" key={it}>
            <Image src={`/icon-${it}.svg`} layout="intrinsic" width={50} height={50} />
            <label key={index} className="text-slate-300 text-sm uppercase pt-4">
              {breakText(t(`designedForCompanies.companies.${it}`))}
            </label>
          </div>
        ))}
      </div>
    </div>
  )
}

export default SectionDesignedfc
