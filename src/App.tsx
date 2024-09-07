import { Route, BrowserRouter as Router, Routes } from 'react-router-dom'
import './App.css'
import Header from './components/Header/Header'
import Login from './pages/Login/Login'
import Footer from './components/Footer/Footer'

function App() {  

  return (
    <>     
      <Router>
        <Header/>
        <Routes>
          <Route path='/' element={<Login/>}/>
        </Routes>
        <Footer/>
      </Router>
    </>
  )
}

export default App
