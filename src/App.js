import { useEffect, useState } from 'react'
import { BrowserRouter as Router, Link, Route, Routes, Navigate } from 'react-router-dom'
import './App.css'
import { StyledFormButton } from './common_components/FormButton'
import { StyledInputField } from './common_components/InputField'
import { Navigation } from './common_components/Navigation'
import { CreateLog } from './pages/CreateLog'
import { Login } from './pages/Login'
import { Register } from './pages/Register'
import logo from './resources/logo.png';




const App = () => {
    const [token, setToken] = useState(localStorage.getItem('itbctkn'))

    useEffect(() => {
        // setToken('lala')
    }, [])

    return (
        <Router>
            <header id="page-header">
                <div id="page-header-logo">
                    <Link to="/">
                        <img src={logo} alt="ITBC-Logo"/>
                    </Link>
                </div>
                <Navigation isLoggedIn={token != null} />
            </header>
            <main id="page-main">
                <Routes>
                    <Route exact path='/' element={token ? <Navigate to='/create' /> : <Navigate to='/login' />} />
                    <Route exact path='/register' element={<Register />} />
                    <Route exact path='/login' element={<Login setToken={setToken} />} />
                    <Route exact path='/create' element={<CreateLog />} />
                </Routes>
            </main>
            <footer id="page-footer">

            </footer>
        </Router>
    )
}

export default App
