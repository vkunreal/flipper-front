import { className } from '@/shared/lib/className'

import styles from './TextField.module.scss'

interface ITextFieldProps {
  className?: string
  value: string
  placeholder?: string
  isTextArea?: boolean
  onChange?: (e: ChangeEvent) => void
}

export type ChangeEvent = React.ChangeEvent<
  HTMLInputElement | HTMLTextAreaElement
>

export const TextField: React.FC<ITextFieldProps> = ({
  value,
  placeholder,
  isTextArea,
  className: propsClassName = '',
  onChange,
}) => {
  const Tag = isTextArea ? 'textarea' : 'input'
  return (
    <Tag
      type="text"
      className={className(styles.textField, propsClassName)}
      value={value}
      placeholder={placeholder}
      onChange={onChange}
    />
  )
}
