import Button from '../Button/Button';
import style from './Modal.module.css';

const Modal = (props) => {
  const { children, onClose } = props;
  const handleClose = () => {
    onClose();
  };

  return (
    <div className={style.modal__wrapper}>
      <div className={style.modal}>
        <div className={style.modal__header}>
          <h2>{props.title}</h2>
        </div>
        <div className={style.modal__content}>
          {children}
        </div>
        <div className={style.modal__footer}>
          <Button type="button" onClick={handleClose}>Close</Button>
        </div>
      </div>
    </div>
  );
}

export default Modal;
