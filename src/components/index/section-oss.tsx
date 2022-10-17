import useTranslation from 'next-translate/useTranslation'
import DyoTextBox from '../main/dyo-textbox'
import GitHubButton from 'react-github-btn'
import clsx from 'clsx'

type SectionOSSProps = {
  className?: string
}

const SectionOSS = (props: SectionOSSProps) => {
  const { className } = props
  const { t } = useTranslation('index')

  return (
    <div className={clsx('text-center mt-24', className)}>
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
