import Image from 'next/image'
import useTranslation from 'next-translate/useTranslation'
import DyoTextBox from '../main/dyo-textbox'
import clsx from 'clsx'

type SectionFeaturesProps = {
  className?: string
}

const SectionFeatures = (props: SectionFeaturesProps) => {
  const { className } = props
  const { t } = useTranslation('index')

  return (
    <div className={className}>
      <div className="flex flex-wrap lg:flex-nowrap justify-center lg:justify-between ">
        <div className="flex justify-center basis-full py-8">
          <Image src="/features-deploy-illustration.svg" layout="intrinsic" width={530} height={377} />
        </div>
        <div className="flex flex-col justify-around basis-full lg:ml-20 py-8 text-center lg:text-left">
          <DyoTextBox title={t('features.deploy.section1Title')}>{t('features.deploy.section1Details')}</DyoTextBox>
          <DyoTextBox title={t('features.deploy.section2Title')} className="pt-12">
            {t('features.deploy.section2Details')}
          </DyoTextBox>
        </div>
      </div>

      <div className="flex flex-wrap lg:flex-nowrap justify-center lg:justify-between">
        <div className="flex flex-col justify-around basis-full lg:mr-20 py-8 text-center lg:text-right order-2 lg:order-1">
          <DyoTextBox title={t('features.control.section1Title')}>{t('features.control.section1Details')}</DyoTextBox>
          <DyoTextBox title={t('features.control.section2Title')} className="pt-12">
            {t('features.control.section2Details')}
          </DyoTextBox>
        </div>
        <div className="flex justify-center basis-full py-8 order-1 lg:order-2">
          <Image src="/features-control-illustration.svg" layout="intrinsic" width={530} height={377} />
        </div>
      </div>
    </div>
  )
}

export default SectionFeatures
