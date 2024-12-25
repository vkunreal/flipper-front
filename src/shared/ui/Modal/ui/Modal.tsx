import styles from './Modal.module.scss'

interface IModalProps {
  isOpen: boolean
  onClose: () => void
  children: React.ReactNode
}

export const Modal: React.FC<IModalProps> = ({ isOpen, onClose, children }) => {
  return isOpen ? (
    <div className={styles.modalWrapper} onClick={onClose}>
      <div className={styles.modalBlock} onClick={(e) => e.stopPropagation()}>
        <button type="button" className={styles.modalCross} onClick={onClose}>
          &times;
        </button>

        {children}
      </div>
    </div>
  ) : null
}
