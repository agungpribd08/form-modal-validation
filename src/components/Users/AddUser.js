import React, { useState, useRef } from 'react'
import Card from '../UI/Card'
import styles from './AddUser.module.css'
import Button from '../UI/Button'
import ErrorModal from '../UI/ErrorModal'

const AddUser = (props) => {
  const [error, setError] = useState()

  const enteredName = useRef()
  const enteredAge = useRef()

  const errorHandler = () => {
    setError(null)
  }

  const addUserHandler = (event) => {
    event.preventDefault()
    const username = enteredName.current.value
    const age = enteredAge.current.value
    if (username.trim().length === 0 || age.trim().length === 0) {
      setError({
        title: 'Invalid input',
        message: 'Username and age cannot empty',
      })
      return
    }

    if (+age < 1) {
      setError({
        title: 'Invalid age',
        message: 'Enter valid age',
      })
      return
    }

    const userData = {
      id: Math.random().toString(),
      username: username,
      age: Number(age),
    }

    enteredName.current.value = ''
    enteredAge.current.value = ''
    props.onSaveData(userData)
  }

  return (
    <div>
      {error && (
        <ErrorModal
          title={error.title}
          message={error.message}
          onConfirm={errorHandler}
        />
      )}
      <Card className={styles.input}>
        <form onSubmit={addUserHandler}>
          <label htmlFor="username">Username</label>
          <input id="username" type="text" ref={enteredName}></input>
          <label htmlFor="age">Age (Years)</label>
          <input id="age" type="number" ref={enteredAge}></input>
          <Button type="submit">Add User</Button>
        </form>
      </Card>
    </div>
  )
}

export default AddUser
