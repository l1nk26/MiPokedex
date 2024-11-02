import { useState } from 'react'
import './App.css'
import Pokedex from './pokedex.jsx'
import './pokemon.css';

function App() {

  return (
    <Pokedex end={20}></Pokedex>
  )
}

export default App
