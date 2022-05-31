import { useState } from 'react';
import { Card, InputField, Button } from './../../UI/index.js';

const UserForm = (props) => {
  const [username, setUsername] = useState('');
  const [age, setAge] = useState('');

  const userFormHandler = (event) => {
    props.onAddUser({
      id: Math.random(),
      username,
      age
    });

    event.preventDefault();
  };

  return (
    <Card>
      <form onSubmit={(event) => userFormHandler(event)}>
        <InputField
          label="Username"
          name="username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
        <InputField
          label="Age(Years)"
          name="age"
          type="number"
          value={age}
          onChange={(e) => setAge(e.target.value)}
        />
        <Button>Add User</Button>
      </form>
    </Card>
  )
};

export default UserForm;
