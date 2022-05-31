import style from './InputField.module.css';

const InputField = (props) => {
    return (
      <div className={style.form__control}>
        <label htmlFor={props.name}><strong>{props.label}</strong></label>
        <input
          type={props.type || 'text'}
          name={props.name}
          id={props.name}
          value={props.value}
          onChange={props.onChange}
          readOnly={props.readOnly  || false}
        />
      </div>
    );
};

export default InputField;
