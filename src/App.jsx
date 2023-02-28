import { useState } from 'react'
import './App.css'
import { Button } from 'react-bootstrap';
import { Header } from './components/Header';
import Home from './components/Home';

function App() {

  return (
    <div className="App">
      <Header />
      <Home />
    </div>
  )
}

export default App
