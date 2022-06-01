import './App.css';
import { useState } from 'react';
import UserForm from './components/UsersManagement/UserForm/UserForm';
import UserList from './components/UsersManagement/UserList/UserList';
import Modal from './components/UI/Modal/Modal';

function App() {
  const [users, setUsers] = useState([]);
  const [error, setError] = useState(null);
  const updateUsers = (user) => {
    if (!user.username || !user.age) {
      setError('Please fill all fields.');
      return;
    }

    if (user.age < 0) {
      setError('Age must be a positive number.');
      return;
    }

    setError(null);
    setUsers([...users, user]);
  };

  const removeUserItem = (id) => {
    setUsers(users.filter(user => user.id !== id));
  };

  return (
    <div className="App">
      {
        error && (
          <Modal title="Invalid input" onClose={() => setError(null)}>{error}</Modal>
        )
      }
      <UserForm
        onAddUser={(user) => updateUsers(user)}
      />
      <UserList users={users} onRemoveUser={(id) => removeUserItem(id)}/>
    </div>
  );
}

export default App;
