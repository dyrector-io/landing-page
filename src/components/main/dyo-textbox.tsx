import clsx from 'clsx'

interface DyoTextBoxProps {
  className?: string
  title: string
  titleClass?: string
  children?: React.ReactNode
  textClass?: string
}

const DyoTextBox = (props: DyoTextBoxProps) => {
  const { className, title, titleClass, children, textClass } = props

  return (
    <div className={className}>
      <div
        className={clsx(
          titleClass,
          'font-extrabold text-transparent text-4xl bg-clip-text bg-gradient-to-r from-dyo-light-blue to-white pb-8',
        )}
      >
        {title}
      </div>
      <div className={textClass ?? 'text-slate-400'}>{children}</div>
    </div>
  )
}

export default DyoTextBox

