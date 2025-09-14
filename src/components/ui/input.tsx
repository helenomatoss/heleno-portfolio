import * as React from 'react'
import { cn } from '@/lib/utils'

export interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {}

const Input = React.forwardRef<HTMLInputElement, InputProps>(({ className, ...props }, ref) => {
  return (
    <input
      ref={ref}
      className={cn(
        'flex h-10 w-full rounded-md border border-app bg-card px-3 py-2 text-sm text-app placeholder:text-muted focus-visible:ring-2 focus-visible:ring-[var(--accent)]',
        className
      )}
      {...props}
    />
  )
})
Input.displayName = 'Input'

export { Input }
