import React, { useRef, useState } from 'react'
import CustomLink from '../UI/CustomLink'
import supabase from '@/lib/supabaseClient'
import Modal from '../modals/Modal'

const Login: React.FC = () => {
  const emailRef = useRef<HTMLInputElement>(null)
  const passwordRef = useRef<HTMLInputElement>(null)
  const [error, setError] = useState<boolean>(false)

  const handleLogin = async (
    e: React.FormEvent<HTMLFormElement>
  ): Promise<void> => {
    e.preventDefault()
    const { data, error } = await supabase.auth.signInWithPassword({
      email: emailRef.current ? emailRef.current.value : '',
      password: passwordRef.current ? passwordRef.current.value : '',
    })
    if (error) setError(true)
    console.log(data)
  }

  return (
    <div className="flex flex-col items-center justify-center p-8 gap-4">
      <h1 className="text-2xl font-bold">Log in to My backlog</h1>
      <form className="flex flex-col gap-4" onSubmit={handleLogin}>
        <div className="flex flex-col">
          <label htmlFor="email">Email</label>
          <input
            type="text"
            className="rounded-lg px-4 py-2 border border-black"
            ref={emailRef}
            autoFocus
          />
        </div>
        <div className="flex flex-col">
          <label htmlFor="password">Password</label>
          <input
            type="password"
            className="rounded-lg px-4 py-2 border border-black"
            ref={passwordRef}
          />
        </div>
        <CustomLink to="/forgotpassword" label="I Forgot my password?" />
        <button
          type="submit"
          className="rounded-lg py-2 bg-primary text-white font-semibold border border-black"
        >
          Log In
        </button>
        <span className="flex gap-2">
          <p>Don&apos;t have an account?</p>
          <CustomLink to="/signup" label="Sign up" />
        </span>
      </form>
      <Modal
        open={error}
        setOpen={setError}
        title="Error"
        description="There was an error. Please check your credentials."
        buttonLabel="Close"
      />
    </div>
  )
}

export default Login
