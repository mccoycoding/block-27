import { useState } from 'react'
import SignUpForm from './components/SignUpForm'
import Authenticate from './components/Authenticate'
import './App.css'

export default function App() {
  const [token, setToken] = useState(null);
  const [data, setData] = useState({})

  return (
    <>
      <SignUpForm setToken={setToken}/>
      <Authenticate token={token} setData={setData}/>
      {data && <p>Username: {data.username}</p>}
      {data && <p>IAT: {data.iat}</p>}
    </>
  )
}