import './App.css'
import NavBar from './components/NavBar'
import Details from './pages/Details'
import Favourites from './pages/Favourites'
import Home from './pages/Home'
import { Route, Routes } from 'react-router-dom'

function App() {

  return (
    <div className='h-[96vh]' >
      <NavBar/>
      
         <Routes>
          <Route path='/' element={<Home/>}/> 
          <Route path='/favourites' element={<Favourites/>}/>
          <Route path='/recipe-item/:id' element={<Details/>}/>
         </Routes>
    </div>
  )
}

export default App
