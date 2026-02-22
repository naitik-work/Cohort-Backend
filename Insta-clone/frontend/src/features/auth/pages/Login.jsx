import React from 'react'
import '../style/form.scss'
import { Link } from 'react-router'
import {useState} from 'react'
import axios from 'axios'
const Login = () => {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");

    async function handleSubmit(e) {
        e.preventDefault();


    }

  return (
     <main>
        <div className="form-container">
            <h1>Login</h1>
            <form onSubmit={handleSubmit}>
                <input
                    type="text"
                    name="username"
                    placeholder="Username"
                    onInput={(e) => {
                        setUsername(e.target.value);
                    }}
                />
                <input
                    type="password"
                    name="password"
                    placeholder="Password"
                    onInput={(e) => {
                        setPassword(e.target.value);
                    }}
                />
                <button type="submit">Login</button>
            </form>
            <p>Don't have an account? <Link className='toggleAuthForm' to='/register'>Register</Link></p>
        </div>
     </main>

  )
}

export default Login
