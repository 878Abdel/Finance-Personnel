import { ReactNode } from 'react'

interface CardProps {
  children: ReactNode
  variant?: 'dark' | 'glass' | 'glass-light' | 'yellow'
  className?: string
  onClick?: () => void
}

const Card = ({ children, variant = 'dark', className = '', onClick }: CardProps) => {

  const variants = {
    dark: `
      bg-[#16162A] border border-[rgba(208,255,0,0.08)] rounded-2xl
      relative overflow-hidden
    `,
    glass: `
      glass rounded-2xl relative overflow-hidden
    `,
    'glass-light': `
      glass-light rounded-2xl relative overflow-hidden
    `,
    yellow: `
      bg-[#D0FF00] rounded-2xl relative overflow-hidden
    `,
  }

  return (
    <div
      className={`${variants[variant]} ${className} ${onClick ? 'cursor-pointer hover:scale-[1.01] transition-transform duration-200' : ''}`}
      onClick={onClick}
    >
      {children}
    </div>
  )
}

export default Card
