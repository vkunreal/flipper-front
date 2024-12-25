import { className } from '@/shared/lib/className'
import { catLongText } from '@/shared/lib/catLongText'
import { TitleTags } from '../model/titleTags'

import styles from './Title.module.scss'

interface ITitleProps {
  tag?: keyof typeof TitleTags
  className?: string
  maxLetters?: number
  children: string
}

export const Title: React.FC<ITitleProps> = ({
  tag: Tag = 'p',
  className: propsClass = '',
  maxLetters,
  children,
}) => {
  return (
    <Tag className={className(styles.title, Tag, propsClass)}>
      {maxLetters ? catLongText(children, maxLetters) : children}
    </Tag>
  )
}
