import './App.css'
import Shoes from './Shoes'
import Detail from './Detail'
import Header from './Header'
import { BrowserRouter, Link, Route, Routes } from 'react-router-dom'

function App() {
  return (
    <BrowserRouter>
      <Header></Header>
      <Routes>
        <Route path="/" element={<Shoes />}></Route>
        <Route path="/detail" element={<Detail />}></Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
