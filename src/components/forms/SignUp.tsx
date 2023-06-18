import React, { useState } from 'react'
import supabase from '@/lib/supabaseClient'
import CustomLink from '../UI/CustomLink'
import Button from '../UI/Button'
import Modal from '../modals/Modal'

const SignUpForm: React.FC = () => {
  const [email, setEmail] = useState<string>('')
  const [password, setPassword] = useState<string>('')
  const [error, setError] = useState<boolean>(false)
  const [success, setSuccess] = useState<boolean>(false)

  const handleSignUp = async (
    e: React.MouseEvent<HTMLButtonElement, MouseEvent>
  ): Promise<void> => {
    e.preventDefault()
    const { error } = await supabase.auth.signUp({ email, password })
    if (error) {
      setError(true)
    } else {
      setSuccess(true)
    }
  }

  return (
    <div className="flex flex-col items-center justify-center p-8 gap-4">
      <h1 className="text-2xl font-bold">Get started for free</h1>
      <form className="flex flex-col gap-4">
        <div className="flex flex-col">
          <label htmlFor="email">Email</label>
          <input
            type="text"
            className="rounded-lg px-4 py-2 border border-black"
            onChange={(e: React.ChangeEvent<HTMLInputElement>): void =>
              setEmail(e.target.value)
            }
          />
        </div>
        <div className="flex flex-col">
          <label htmlFor="email">Password</label>
          <input
            type="password"
            className="rounded-lg px-4 py-2 border border-black"
            onChange={(e: React.ChangeEvent<HTMLInputElement>): void =>
              setPassword(e.target.value)
            }
          />
        </div>
        <Button type="primary" size="lg" action={handleSignUp}>
          Create account
        </Button>

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
      <span>
        <p>Already have an account?</p>
        <CustomLink to="/login" label="Log in" />
      </span>
      <Modal
        open={error}
        setOpen={setError}
        title="Error"
        description="There was an error signing up. Please try again."
        buttonLabel="Close"
      />
      <Modal
        open={success}
        setOpen={setSuccess}
        title="Success"
        description="You have successfully signed up! Please check your email to verify your account."
        buttonLabel="Close"
      />
    </div>
  )
}

export default SignUpForm
