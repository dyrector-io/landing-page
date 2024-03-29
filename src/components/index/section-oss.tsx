import useTranslation from 'next-translate/useTranslation'
import GitHubButton from 'react-github-btn'
import clsx from 'clsx'
import DyoTextBox from '../main/dyo-textbox'

type SectionOSSProps = {
  className?: string
}

const SectionOSS = (props: SectionOSSProps) => {
  const { className } = props
  const { t } = useTranslation('index')

  return (
    <div className={clsx('text-center mt-48', className)}>
      <DyoTextBox title={t('oss.title')} textClass="py-6">
        {t('oss.details')}
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
      <div className="mt-4 flex justify-center">
        <a className="" href="https://opencollective.com/dyrectorio-platform" target="_blank">
          <img src="https://opencollective.com/webpack/donate/button@2x.png?color=white" width="270" />
        </a>
      </div>
    </div>
  )
}

export default SectionOSS
