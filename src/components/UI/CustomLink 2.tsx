import Link from 'next/link'
import React from 'react'

interface Props {
  to: string
  label: string
}

const CustomLink: React.FC<Props> = ({ to, label }) => {
  return (
    <Link href={to}>
      <p className="text-blue-600 hover:underline hover:underline-offset-4">
        {label}
      </p>
    </Link>
  )
}

export default CustomLink
