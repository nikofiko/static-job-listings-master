import { useState } from 'react'
import './App.css'
import Header from './components/Header'
import Announcement from './components/Announcement'
import JobList from './components/JobList'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Announcement />
      <JobList />
    </>
  )
}

export default App
