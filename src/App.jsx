import { useState } from 'react'


import './App.css'
import Header from './components/Header/Header'
import Job from './components/Job/Job'
import Banner from './components/Banner/Banner'
import JCList from './components/JCList/JCList'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      <Header></Header>
      <Banner></Banner>
      <JCList></JCList>
      <Job></Job>
     
    </div>
  )
}

export default App
