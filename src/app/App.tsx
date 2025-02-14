import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { MainPage } from './ui/MainPage'
import { AboutPage } from './ui/AboutPage'

import './App.scss'

const App = () => {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/dashboard" element={<MainPage />} />

          <Route path="/about" element={<AboutPage />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
