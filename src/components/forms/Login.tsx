import React from 'react'
import CustomLink from '../UI/CustomLink'
import Button from '../UI/Button'

const Login: React.FC = () => {
  return (
    <div className="flex flex-col items-center justify-center p-8 gap-4">
      <h1 className="text-2xl font-bold">Log in to My backlog</h1>
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
        <CustomLink to="/forgotpassword" label="I Forgot my password?" />
        <Button type="primary" size="lg">
          Log in
        </Button>
        <span className="flex gap-2">
          <p>Don&apos;t have an account?</p>
          <CustomLink to="/signup" label="Sign up" />
        </span>
      </form>
    </div>
  )
}

export default Login
