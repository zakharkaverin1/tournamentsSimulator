import styles from './modal.module.scss';
import type {ReactNode} from "react";

interface ModalProps {
    isOpen: boolean;
    onClose: () => void;
    children: ReactNode;
}

const Modal = (props: ModalProps) => {
    const {isOpen, onClose, children} = props;
    if (!isOpen) return null;

    const handleOverlayClick = (e) => {
        if (e.target === e.currentTarget) {
            onClose?.();
        }
    };

    return (
        <div className={styles.overlay} onClick={handleOverlayClick}>
            <div className={styles.modal}>
                <button className={styles.close} onClick={onClose}>
                    ✕
                </button>
                {children}
            </div>
        </div>
    );
};

export default Modal;