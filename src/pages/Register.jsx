import axios from "axios"
import { useState } from "react"

export const Register = () => {
    const [username, setUsername] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    const register = async () => {
        console.log('teest')
        if(validateForm()){
            const resp = await axios.post('', { username, email, password })
            if(resp.status !== 201){
                console.log('ERROR')
            }
        }
    }

    const validateForm = () => {
        if(username.length < 3)
            return false
        return true
    }

    return (
        <form id="form" onSubmit={(e) => e.preventDefault() }>
            <h1>Register</h1>
            <input type="text" placeholder="Username..." onChange={(e) => setUsername(e.target.value)}/>
            <input type="email" placeholder="Email..." onChange={(e) => setEmail(e.target.value)} />
            <input type="password" placeholder="Password..." onChange={(e) => setPassword(e.target.value)} />

            <button onClick={register}>Register</button>
        </form>
    )
}