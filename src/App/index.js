import './App.css';
import { Routes, Route} from 'react-router-dom'
import { Cv } from '../pages/Cv';
import { Editor } from '../pages/Editor' 
import { Nav } from '../components/Nav';
import { useState } from 'react'

function App() {
  const [person, setPerson]=useState({
    fName: '',
    lName: '',
  })
  return (
    //maybe nav should have it own css??
    <div className="body">
    <Nav/>
    <div>
    <Routes>
      <Route path="/" element={<Editor person={person} setPerson={setPerson}/>}/>
      <Route path='/cv' element={<Cv person={person}/>}/>
    </Routes>
    </div>
    </div>
  )

  
}

export default App;
