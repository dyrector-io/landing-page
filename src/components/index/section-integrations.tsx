import clsx from 'clsx'
import React, { useEffect, useRef, useState } from 'react'
import useTranslation from 'next-translate/useTranslation'
import { INTEGRATION_LOGOS } from '../../const'
import styles from '../../styles/index.module.css'

type SectionIntegrationsProps = {
  className?: string
}

interface AnimatedCell {
  key: string
  x: number
  y: number
  type: number
  ref: React.RefObject<HTMLDivElement>
  image?: string
  imageRef?: React.RefObject<HTMLImageElement>
}

interface CellState {
  width: number
  cells: AnimatedCell[]
}

type CellPositionRef = { [key: string]: number } // cellId to cell x coordinate

const SectionIntegrations = (props: SectionIntegrationsProps) => {
  const { className } = props
  const { t } = useTranslation('index')

  const containerRef = useRef<HTMLDivElement>(null)
  const animation = useRef<Animation>()
  const cellPositionRef = useRef<CellPositionRef>({})
  const [cells, setCells] = useState<CellState>({
    width: 0,
    cells: [],
  })

  const createCell = (cell: AnimatedCell) => {
    const { key, x, y, type } = cell
    return (
      <div
        key={key}
        ref={cell.ref}
        className={clsx(
          styles['integration-cell'],
          styles[`integration-cell-${type}`],
          'absolute',
          'p-4',
          'flex',
          'justify-center',
          'items-center',
        )}
        style={{ left: `${x * 120}px`, top: `${y * 120}px` }}
      >
        {cell.image && (
          <img ref={cell.imageRef} alt="cell" className="p-1 saturate-50" src={cell.image} width={100} height={100} />
        )}
      </div>
    )
  }

  const generateCells = () => {
    const list: AnimatedCell[] = []

    const numX = Math.ceil(containerRef.current!.clientWidth / 120) + 1
    for (let y = 0; y < 4; y++) {
      for (let x = 0; x < numX; x++) {
        const type = Math.round(Math.random() * 3)
        if (type !== 0) {
          list.push({
            key: `${list.length}`,
            x,
            y,
            type,
            ref: React.createRef<HTMLDivElement>(),
          })
        }
      }
    }

    const logos = [...INTEGRATION_LOGOS]
    for (let i = 0; i < logos.length; i++) {
      let cell: AnimatedCell | undefined
      do {
        const cellX = Math.round(Math.random() * numX)
        const cellY = Math.round(Math.random() * 4)

        cell = list.find(it => it.x === cellX && it.y === cellY)
      } while (!cell)

      const logoIndex = Math.round(logos.length * Math.random())
      cell.image = logos[logoIndex]
      cell.imageRef = React.createRef<HTMLImageElement>()
      logos.splice(logoIndex, 1)
    }

    setCells({
      width: numX,
      cells: list,
    })
  }

  const onAnimationEnd = () => {
    const { cells: cellList, width } = cells
    cellList.forEach(it => {
      if (it.ref.current) {
        let cellX = cellPositionRef.current[it.key] ?? it.x
        cellX = cellX <= 0 ? width - 1 : cellX - 1
        cellPositionRef.current[it.key] = cellX
        it.ref.current!.style.left = `${cellX * 120}px`
      }
    })
    animation.current!.play()
  }

  useEffect(() => {
    if (containerRef.current == null) {
      return
    }

    if (cells.cells.length === 0) {
      generateCells()
    }

    const effect = new KeyframeEffect(
      containerRef.current,
      [{ transform: 'translateX(0)' }, { transform: 'translateX(-120px)' }],
      { duration: 7000, fill: 'forwards', iterations: 1 },
    )
    const anim = new Animation(effect, document.timeline)
    anim.addEventListener('finish', onAnimationEnd)
    anim.play()
    animation.current = anim
  }, [containerRef, cells])

  const getTitle = () => {
    const texts = t('integrationsToWorkflow', undefined, {
      returnObjects: true,
    }) as (string | { text: string; gradient: boolean })[][]
    return (
      <>
        {texts.map((it, index) => (
          <div key={index} className="font-sans-pro font-bold text-4xl text-center">
            {it.map((element, elementIndex) => {
              if (typeof element === 'string') {
                return <label key={elementIndex}>{element}</label>
              }

              const object = element as { text: string; gradient: boolean }
              if (!object.gradient) {
                return <label key={elementIndex}>{object.text}</label>
              }

              return (
                <div key={elementIndex} className="text-gradient inline">
                  {object.text}
                </div>
              )
            })}
          </div>
        ))}
      </>
    )
  }

  return (
    <div className="w-full h-[460px] relative mb-22 mt-28 overflow-hidden">
      <div className="absolute inset-0">
        <div ref={containerRef}>{cells.cells.map(it => createCell(it))}</div>
      </div>
      <div
        className={clsx(
          'absolute inset-0 flex justify-center items-center',
          styles['integration-text-container'],
          className,
        )}
      >
        <div className="max-w-3xl flex flex-col items-center">
          {getTitle()}
          <label className="mt-8 text-center text-lg">{t('integrationsDetails')}</label>
        </div>
      </div>
    </div>
  )
}

export default SectionIntegrations
