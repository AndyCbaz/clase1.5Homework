
import Card from './components/Card'
import { useState } from 'react'
import './App.css'
import friendList from "./assets/Phrase.json"

function App() {
  
// const [phrase, setPhrase] = useState(Math.floor(Math.random()*Main.length))

const [count, setCount] = useState(0); 
const nextFunc = () => {
  const newValue = count + 1;
  if(newValue > 5){count = 0; newValue = count;}
  setCount(newValue);
};


  return (
    <div className="App">

      <h1 className='text-5xl text-white font-bold'>Javascript y sus amigos</h1>
      <Card
      image = {friendList[count].logo}
      title = {friendList[count].name}
      description = {friendList[count].description}
      next = {nextFunc}/>
      
    </div>
  )
}

export default App
