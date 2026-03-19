import { ButtonHTMLAttributes, ReactNode } from 'react'

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'ghost' | 'danger'
  size?: 'sm' | 'md' | 'lg'
  children: ReactNode
  fullWidth?: boolean
}

const Button = ({
  variant = 'primary',
  size = 'md',
  children,
  fullWidth = false,
  className = '',
  ...props
}: ButtonProps) => {

  const base = `
    relative inline-flex items-center justify-center gap-2 
    font-semibold rounded-xl transition-all duration-200 
    cursor-pointer select-none overflow-hidden
    disabled:opacity-40 disabled:cursor-not-allowed
  `

  const variants = {
    primary: `
      bg-[#D0FF00] text-[#0D0D1A] 
      hover:bg-[#e4ff4d] hover:shadow-[0_0_30px_rgba(208,255,0,0.4)]
      active:scale-95
    `,
    secondary: `
      bg-[#8116E0] text-white
      hover:bg-[#9b2ff5] hover:shadow-[0_0_30px_rgba(129,22,224,0.4)]
      active:scale-95
    `,
    ghost: `
      bg-transparent text-white border border-white/10
      hover:bg-white/5 hover:border-white/20
      active:scale-95
    `,
    danger: `
      bg-[#FF4D6A] text-white
      hover:bg-[#ff6b83] hover:shadow-[0_0_30px_rgba(255,77,106,0.4)]
      active:scale-95
    `,
  }

  const sizes = {
    sm: 'px-4 py-2 text-sm',
    md: 'px-6 py-3 text-base',
    lg: 'px-8 py-4 text-lg',
  }

  return (
    <button
      className={`${base} ${variants[variant]} ${sizes[size]} ${fullWidth ? 'w-full' : ''} ${className}`}
      {...props}
    >
      {children}
    </button>
  )
}

export default Button
