import React, { useState } from 'react'
import AddUser from './components/Users/AddUser'
import UserList from './components/Users/UserList'

function App() {
  const [userData, setUserData] = useState([])

  const saveDataHandler = (data) => {
    setUserData((prevData) => [data, ...prevData])
  }

  return (
    <React.Fragment>
      <AddUser onSaveData={saveDataHandler} />
      {userData.length > 0 ? <UserList users={userData} /> : null}
    </React.Fragment>
  )
}

export default App
