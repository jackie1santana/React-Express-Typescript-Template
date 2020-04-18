import React from 'react';
import './App.scss';
import Home from './components/Home/Home'
import Covid from './components/Covid/Covid'
import ParticlesBackground from './components/ParticlesBackground/ParticlesBackground'

function App() {
  
  return (
    <div>
      <ParticlesBackground />
      <Home/>
      <Covid />
    </div>
  )
}
  



export default App;
