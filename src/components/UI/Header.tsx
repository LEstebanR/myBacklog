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
        isScrolled ? 'bg-white border-b border-black' : ''
      } sticky top-0 transition-colors duration-300 `}
    >
      <Logo />
      <div className="flex gap-4">
        <Button type="primary" size="lg">
          <Link href="/login">Login</Link>
        </Button>
      </div>
    </header>
  )
}

export default Header
