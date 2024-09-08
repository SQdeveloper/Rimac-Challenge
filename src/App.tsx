import { Route, BrowserRouter as Router, Routes } from 'react-router-dom'
import './App.css'
import Header from './components/Header/Header'
import Login from './pages/Login/Login'
import Footer from './components/Footer/Footer'
import Plans from './pages/Plans/Plans'
import { AuthProvider } from './context/authContext'
import ProtectedRoute from './components/ProtectedRoute'
import { UserProvider } from './context/userContext'

function App() {  

  return (
    <AuthProvider>     
      <UserProvider>
        <Router>
          <Header/>
          <Routes>
            <Route path='/' element={<Login/>}/>          
            <Route path="/Planes" element={<ProtectedRoute component={<Plans />} />} />          
          </Routes>
          <Footer/>
        </Router>
      </UserProvider>
    </AuthProvider>
  )
}

export default App
