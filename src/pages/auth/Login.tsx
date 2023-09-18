import React from 'react'
import PrimaryButton from '../../components/buttons/PrimaryButton'
import { useNavigate } from 'react-router-dom'

function Login() {
  const navigate = useNavigate()
  return (
    <div className="max-w-3xl w-full flex flex-col justify-center items-center rounded-xl p-4 bg-zinc-100 dark:bg-zinc-900 border-zinc-500">
      <div className='my-4'>
      <h1 className="font-bold tracking-tight leading-6 text-black dark:text-white text-3xl">
        Login
      </h1>

      </div>
      <PrimaryButton label="First load? Go to setup" onClick={() => {navigate("/installer")}} />
    </div>
  )
}

export default Login