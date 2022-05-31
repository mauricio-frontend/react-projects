import style from './UserItem.module.css';

const UserItem = (props) => {
  return (
    <div className={style.user__item}>
      {`${props.name} (${props.age} years old)`}
    </div>
  )
};

export default UserItem;
