import React from 'react'
import Image from 'next/image'

const SignUpForm: React.FC = () => {
  return (
    <div className="flex flex-col items-center justify-center p-8 gap-4">
      <h1 className="text-2xl font-bold">Get started for free</h1>
      <form className="flex flex-col gap-4">
        <div className="flex flex-col">
          <label htmlFor="email">Email</label>
          <input
            type="text"
            className="rounded-lg px-4 py-2 border border-black"
          />
        </div>
        <div className="flex flex-col">
          <label htmlFor="email">Password</label>
          <input
            type="password"
            className="rounded-lg px-4 py-2 border border-black"
          />
        </div>
        <button
          type="submit"
          className="rounded-lg bg-primary text-white font-semibold px-4 py-2"
        >
          Login
        </button>
        <p>Or sign up using:</p>
        <div className=" flex gap-2">
          <div className="border border-black w-12 h-12 flex justify-center items-center">
            <Image
              src="/assets/logos/google-icon.svg"
              alt="Google logo"
              width={20}
              height={20}
            />
          </div>
        </div>
      </form>
    </div>
  )
}

export default SignUpForm
