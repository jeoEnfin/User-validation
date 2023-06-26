import React from 'react';

import AddUser from './components/AddUser/AddUser';
import UserList from './components/UsersList/UserList';
import ErrorModal from './components/ErrorModal/ErrorModal';

const App = () => {
  return (
    <div>
      <AddUser />
      <UserList />
    </div>
  )
}

export default App