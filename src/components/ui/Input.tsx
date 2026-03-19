import { InputHTMLAttributes, ReactNode } from 'react'

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  label?: string
  icon?: ReactNode
  error?: string
  variant?: 'dark' | 'light'
}

const Input = ({
  label,
  icon,
  error,
  variant = 'dark',
  className = '',
  ...props
}: InputProps) => {

  const base = `
    w-full px-4 py-3 rounded-xl text-base transition-all duration-200
    outline-none focus:ring-2 font-['DM_Sans']
  `

  const variants = {
    dark: `
      bg-white/5 border border-white/10 text-white placeholder-white/30
      focus:border-[#D0FF00]/50 focus:ring-[#D0FF00]/20 focus:bg-white/8
    `,
    light: `
      bg-white border border-gray-200 text-[#0D0D1A] placeholder-gray-400
      focus:border-[#8116E0] focus:ring-[#8116E0]/20
    `,
  }

  return (
    <div className="w-full flex flex-col gap-1.5">
      {label && (
        <label className={`text-sm font-medium ${variant === 'dark' ? 'text-white/70' : 'text-gray-600'}`}>
          {label}
        </label>
      )}
      <div className="relative">
        {icon && (
          <span className="absolute left-3 top-1/2 -translate-y-1/2 text-white/30">
            {icon}
          </span>
        )}
        <input
          className={`${base} ${variants[variant]} ${icon ? 'pl-10' : ''} ${error ? 'border-red-500/50 focus:ring-red-500/20' : ''} ${className}`}
          {...props}
        />
      </div>
      {error && (
        <span className="text-xs text-red-400 mt-0.5">{error}</span>
      )}
    </div>
  )
}

export default Input
