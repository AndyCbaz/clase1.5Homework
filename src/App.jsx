
import Card from './components/Card'
import { useState } from 'react'
import './App.css'
import friendList from "./assets/Phrase.json"

function App() {
  
// const [phrase, setPhrase] = useState(Math.floor(Math.random()*Main.length))

const [count, setCount] = useState(0); 
const nextFunc = () => {
  let random = Math.floor(Math.random() * (6));
  setCount(random);
};


  return (
    <div className="App flex flex-col justify-center items-center">

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
