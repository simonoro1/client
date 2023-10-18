import React, { ChangeEvent, useState } from 'react'
import { useSignIn } from '../hooks/useSignIn';
import { useNavigate } from 'react-router-dom';

function SignIn() {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const {error, isPending, signin} = useSignIn()
    const nav = useNavigate()

        // Handling the name change

    // Handling the email change
    const handleEmail = (e: ChangeEvent<HTMLInputElement>) => {
        setEmail(e.target.value);
    };
 
    // Handling the password change
    const handlePassword = (e: ChangeEvent<HTMLInputElement>) => {
        setPassword(e.target.value);
    };


    const handleSubmit = (e: any) => {
        e.preventDefault()
        const user = {
            name: email,
            password
        }

        console.log(user)

        signin(user)
        setEmail('')
        setPassword('')
        // signin hook

        nav('/')
    }

  return (
    <div className='flex w-full h-screen'>
        <div className="w-full flex items-center justify-center lg:w-1/2"></div>
        <h2 className='text-4xl'>SIGN IN</h2>
        <form  onSubmit={handleSubmit}>
            <span>E-MAIL</span>
            <input type="text" value={email} onChange={handleEmail} required/>
            <span>PASSWORD</span>
            <input type="password" value={password} onChange={handlePassword} required/>
            <button>SIGN IN</button>
        </form>
    </div>
  )
}

export default SignIn