import { createPortal } from 'react-dom'
import styles from './Modal.module.scss'

interface IModalProps {
  isOpen: boolean
  width: number | string
  onClose: () => void
  children: React.ReactNode
}

export const Modal: React.FC<IModalProps> = ({
  isOpen,
  width,
  onClose,
  children,
}) => {
  return isOpen
    ? createPortal(
        <div className={styles.modalWrapper} onClick={onClose}>
          <div
            className={styles.modalBlock}
            style={{ maxWidth: width }}
            onClick={(e) => e.stopPropagation()}
          >
            <button
              type="button"
              className={styles.modalCross}
              onClick={onClose}
            >
              &times;
            </button>

            {children}
          </div>
        </div>,
        document.getElementById('modal') as Element
      )
    : null
}
