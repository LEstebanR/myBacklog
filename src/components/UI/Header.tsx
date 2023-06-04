import Link from 'next/link'
import React, { useState, useEffect } from 'react'
import Logo from './Logo'
import Button from './Button'

const Header: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false)

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
        isScrolled ? 'bg-white shadow-lg border-b border-gray-200' : ''
      } sticky top-0 transition-colors duration-300 `}
    >
      <Logo />
      <div className="flex gap-4">
        <Link
          href="/login"
          className="-mx-3 block rounded-lg px-3 py-2.5 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
        >
          <Button type="primary" size="lg">
            Login
          </Button>
        </Link>
      </div>
    </header>
  )
}

export default Header
