import React, { useState } from 'react';

import AddUser from './components/AddUser/AddUser';
import UserList from './components/UsersList/UserList';


const App = () => {
  const [userList,setUserList] = useState([]);

  const addUserHandler = (Uname,Uage) =>{
    setUserList((prevUserList)=>{
      return [...prevUserList, { name: Uname, age: Uage ,id: Math.random().toString()}]
    })
  }

  return (
    <div>
      <AddUser onAddUser={addUserHandler}/>
      <UserList users={userList} />
    </div>
  )
}

export default App