import style from './Button.module.css';

const Button = (props) => {
  return (
    <div className={style.button__wrapper}>
      <button type={props.type || 'submit'} onClick={props.onClick}>{props.children}</button>
    </div>
  )
};

export default Button;
