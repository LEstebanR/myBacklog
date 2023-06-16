import React, { useState, ChangeEvent } from 'react'
// import Image from 'next/image'
import supabase from '@/lib/supabaseClient'

const SignUpForm: React.FC = () => {
  const [email, setEmail] = useState<string>('')
  const [password, setPassword] = useState<string>('')

  const handleSignUp = async (
    e: React.FormEvent<HTMLFormElement>
  ): Promise<void> => {
    e.preventDefault()
    const { error } = await supabase.auth.signUp({ email, password })
    if (error) {
      alert(error.message)
    } else {
      alert('Check your email for the confirmation link.')
    }
  }

  return (
    <div className="flex flex-col items-center justify-center p-8 gap-4">
      <h1 className="text-2xl font-bold">Get started for free</h1>
      <form className="flex flex-col gap-4" onSubmit={handleSignUp}>
        <div className="flex flex-col">
          <label htmlFor="email">Email</label>
          <input
            type="text"
            className="rounded-lg px-4 py-2 border border-black"
            onChange={(e: ChangeEvent<HTMLInputElement>): void =>
              setEmail(e.target.value)
            }
          />
        </div>
        <div className="flex flex-col">
          <label htmlFor="email">Password</label>
          <input
            type="password"
            className="rounded-lg px-4 py-2 border border-black"
            onChange={(e: ChangeEvent<HTMLInputElement>): void =>
              setPassword(e.target.value)
            }
          />
        </div>
        <button
          type="submit"
          className="rounded-lg bg-primary text-white font-semibold px-4 py-2"
        >
          Sign Up
        </button>

        {/* <p>Or sign up using:</p>
        <div className=" flex gap-2">
          <div className="border border-black w-12 h-12 flex justify-center items-center cursor-pointer">
            <Image
              src="/assets/logos/google-icon.svg"
              alt="Google logo"
              width={20}
              height={20}
            />
          </div>
        </div> */}
      </form>
    </div>
  )
}

export default SignUpForm
