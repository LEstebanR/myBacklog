import React from 'react'

interface ButtonProps {
  children: React.ReactNode
  type?: 'primary' | 'secondary'
  size?: 'sm' | 'md' | 'lg'
  action?: React.MouseEventHandler<HTMLButtonElement>
}

const Button: React.FC<ButtonProps> = ({ children, type, size, action }) => {
  let colorClasses = ''

  switch (type) {
    case 'primary':
      colorClasses = 'bg-primary'
      break
    case 'secondary':
      colorClasses = 'bg-secondary'
      break
    default:
      colorClasses = 'bg-primary'
      break
  }

  switch (size) {
    case 'sm':
      colorClasses += ' px-4'
      break
    case 'md':
      colorClasses += ' px-6'
      break
    case 'lg':
      colorClasses += ' px-8'
      break
    default:
      colorClasses += 'px-6'
      break
  }

  return (
    <button
      type="button"
      className={`rounded-lg ${colorClasses} py-2    text-white font-semibold border border-black`}
      onClick={(e): void => (action ? action(e) : undefined)}
    >
      <p className="text-white">{children}</p>
    </button>
  )
}

export default Button
