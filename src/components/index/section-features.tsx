import Image from 'next/image'
import useTranslation from 'next-translate/useTranslation'
import DyoTextBox from '../main/dyo-textbox'

const SectionFeatures = () => {
  const { t } = useTranslation('index')

  return (
    <>
      <div className="flex justify-center py-8">
        <Image src="/features-deploy-illustration.svg" layout="intrinsic" width={530} height={377} />
        <div className="flex flex-col justify-around ml-20 max-w-2xl">
          <DyoTextBox title={t('features.deploy.section1Title')}>{t('features.deploy.section1Details')}</DyoTextBox>
          <DyoTextBox title={t('features.deploy.section2Title')}>{t('features.deploy.section2Details')}</DyoTextBox>
        </div>
      </div>
      <div className="flex justify-center py-16">
        <div className="flex flex-col justify-around mr-20 max-w-2xl text-right">
          <DyoTextBox title={t('features.control.section1Title')}>{t('features.control.section1Details')}</DyoTextBox>
          <DyoTextBox title={t('features.control.section2Title')}>{t('features.control.section2Details')}</DyoTextBox>
        </div>
        <Image src="/features-control-illustration.svg" layout="intrinsic" width={530} height={377} />
      </div>
    </>
  )
}

export default SectionFeatures
