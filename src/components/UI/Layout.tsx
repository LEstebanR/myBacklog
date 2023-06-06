import React from 'react'
import Header from './Header'
import Footer from './Footer'

interface LayoutProps {
  children: React.ReactNode
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <div className="flex flex-col items-center min-h-screen justify-between from-transparent bg-gradient-to-b from-sky-100 to-white">
      <Header />
      <main>{children}</main>
      <Footer />
    </div>
  )
}

export default Layout
