import './App.css'
import React from 'react'
import UserCrudComponent from './reduxToolkit/UserCrudComponent'
import CounterComponent from './redux/CounterComponent'
function App() {

  return (
    <>
      <CounterComponent />
      <UserCrudComponent />
    </>
  )
}

export default App
