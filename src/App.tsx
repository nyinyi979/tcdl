import { Route, Routes } from 'react-router-dom'
import './App.css'
import Home from './components/home'
import Journey from './components/journey'
import FAQ from './components/faq'
import BeAnElite from './components/be_an_elite'
import Highlights from './components/highlights'

function App() {
  return (
    <>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/journey' element={<Journey />} />
        <Route path='/faq' element={<FAQ />} />
        <Route path='/be-an-elite' element={<BeAnElite />} />
        <Route path='/highlights' element={<Highlights />} />
      </Routes>
    </>
  )
}

export default App
