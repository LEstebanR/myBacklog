import Link from 'next/link'
import React, { useState, useEffect } from 'react'
import { useRouter } from 'next/router'
import Logo from './Logo'
import Button from './Button'

const Header: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false)
  const router = useRouter()

  useEffect(() => {
    const handleScroll = (): void => {
      const scrollTop = window.pageYOffset || document.documentElement.scrollTop
      setIsScrolled(scrollTop > 0)
    }

    window.addEventListener('scroll', handleScroll)
    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, [])

  return (
    <header
      className={`header flex justify-between items-center w-full py-2 px-4 bg-secondary ${
        isScrolled ? 'bg-white border-b border-black' : ''
      } sticky top-0 transition-colors duration-300 `}
    >
      <Logo />
      <div className="flex gap-4">
        {router.pathname === '/login' ? (
          <Link href="/signup">
            <Button type="primary" size="lg">
              Sign up
            </Button>
          </Link>
        ) : (
          <Link href="/login">
            <Button type="primary" size="lg">
              Login
            </Button>
          </Link>
        )}
      </div>
    </header>
  )
}

export default Header
