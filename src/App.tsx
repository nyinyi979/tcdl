import { Route, Routes } from 'react-router-dom'
import './App.css'
import Home from './pages/home'
import Journey from './pages/journey'
import FAQ from './pages/faq'
import BeAnElite from './pages/be_an_elite'
import Highlights from './pages/highlights'
import Account from './pages/account'

function App() {
  return (
    <>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/journey' element={<Journey />} />
        <Route path='/faq' element={<FAQ />} />
        <Route path='/be-an-elite' element={<BeAnElite />} />
        <Route path='/highlights' element={<Highlights />} />
        <Route path='/account' element={<Account />} />
      </Routes>
    </>
  )
}

export default App
