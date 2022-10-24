import axios from "axios"
import { useState } from "react"
import { useNavigate } from 'react-router-dom';


export const Login = ({ setToken }) => {
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')

    const navigate = useNavigate();

    const login = async () => {
        console.log('teest')

        setToken('TOKEEEN')
        navigate('/')
        
        if(validateForm()){
            const resp = await axios.post('', { username, password })

            // token
        }
    }

    const validateForm = () => {
        if(username.length < 3)
            return false
        return true
    }

    return (
        <form id="form" onSubmit={(e) => e.preventDefault() }>
            <h1>Login</h1>
            <input type="text" placeholder="Username/Email..." onChange={(e) => setUsername(e.target.value)}/>
            <input type="password" placeholder="Password..." onChange={(e) => setPassword(e.target.value)} />

            <button onClick={login}>Login</button>
        </form>
    )
}