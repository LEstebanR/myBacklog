import Link from 'next/link'
import React from 'react'

const Logo: React.FC = () => {
  return (
    <Link href="/">
      <div className="border-4 p-2 border-primary border-dashed">
        <p className="font-extrabold text-transparent text-xl bg-clip-text bg-gradient-to-r from-primary to-blue-300">
          My Backlog
        </p>
      </div>
    </Link>
  )
}

export default Logo
