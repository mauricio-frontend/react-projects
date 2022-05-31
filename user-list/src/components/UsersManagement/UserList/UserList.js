import style from './UserList.module.css';
import Card from '../../UI/Card/Card';
import UserItem from '../UserItem/UserItem';

const UserList = (props) => {
  const content = props.users.length ? (
    props.users.map((user, index) =>
          <UserItem
            key={user.id}
            name={user.username}
            age={user.age}
          />
        )
  ) : (
    <p>No users</p>
  );

  return (
    <Card className={style.user__list}>{ content }</Card>
  )
};

export default UserList;
