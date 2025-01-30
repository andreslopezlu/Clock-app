import './App.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './views/home'
import Welcome from './views/welcome'
import Profile from './views/profile'

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
            <Route path='/' element={<Home />} />
            <Route path="/welcome" element={<Welcome />} />
            <Route path="/profile" element={<Profile />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
