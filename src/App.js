import React, { useState } from 'react'
import AddUser from './components/Users/AddUser'
import UserList from './components/Users/UserList'

function App() {
  const [userData, setUserData] = useState([])

  const saveDataHandler = (data) => {
    setUserData((prevData) => [data, ...prevData])
  }

  return (
    <div>
      <AddUser onSaveData={saveDataHandler} />
      {userData.length > 0 ? <UserList users={userData} /> : null}
    </div>
  )
}

export default App
