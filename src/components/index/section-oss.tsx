import useTranslation from 'next-translate/useTranslation'
import DyoTextBox from '../main/dyo-textbox'
import GitHubButton from 'react-github-btn'

const SectionOSS = () => {
  const { t } = useTranslation('index')

  return (
    <div className="text-center max-w-5xl mx-auto mt-24">
      <DyoTextBox title={t('oss.title')} textClass="py-6">
        {t('oss.details1')}
      </DyoTextBox>
      <GitHubButton
        href="https://github.com/dyrector-io/dyrectorio"
        data-size="large"
        data-show-count="true"
        aria-label="Star dyrector-io/dyrectorio on GitHub"
      >
        {t('oss.star')}
      </GitHubButton>
      <div className="pt-8 text-slate-300 italic font-thin">{t('oss.buttonSubText')}</div>
      <div className="pt-12">{t('oss.details2')}</div>
    </div>
  )
}

export default SectionOSS

