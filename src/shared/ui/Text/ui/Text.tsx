import React, { useState } from 'react'
import { className } from '@/shared/lib/className'
import { TextTags } from '../model/textTags'
import { catLongText } from '@/shared/lib/catLongText'

import styles from './Text.module.scss'

interface ITextProps {
  tag?: keyof typeof TextTags
  className?: string
  children: string
  maxLetters?: number
  showMoreBtn?: boolean
}

export const Text: React.FC<ITextProps> = ({
  tag: Tag = 'p',
  className: propsClass = '',
  maxLetters,
  showMoreBtn = true,
  children,
}) => {
  const [showMore, setShowMore] = useState(false)

  let cattedText = ''

  if (maxLetters) {
    cattedText = catLongText(children, maxLetters)
  }

  return (
    <Tag className={className(styles.textTag, Tag, propsClass)}>
      <span className={styles.text}>
        {maxLetters && !showMore ? cattedText : children}
      </span>

      {!!maxLetters && children.length > maxLetters && showMoreBtn && (
        <span
          className={styles.showMore}
          onClick={() => setShowMore((value) => !value)}
        >
          {showMore ? 'Свернуть' : 'Развернуть'}
        </span>
      )}
    </Tag>
  )
}
