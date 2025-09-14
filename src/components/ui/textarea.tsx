import * as React from 'react'
import { cn } from '@/lib/utils'

export interface TextareaProps extends React.TextareaHTMLAttributes<HTMLTextAreaElement> {}

const Textarea = React.forwardRef<HTMLTextAreaElement, TextareaProps>(({ className, ...props }, ref) => {
  return (
    <textarea
      ref={ref}
      className={cn(
        'flex min-h-[80px] w-full rounded-md border border-app bg-card px-3 py-2 text-sm text-app placeholder:text-muted focus-visible:ring-2 focus-visible:ring-[var(--accent)]',
        className
      )}
      {...props}
    />
  )
})
Textarea.displayName = 'Textarea'

export { Textarea }
