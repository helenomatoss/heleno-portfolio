import { cn } from '@/lib/utils'
import type { ReactNode, ElementType, ComponentPropsWithoutRef } from 'react'

export default function Section({
  className,
  children,
  as: As = 'section',
  ...rest
}: {
  className?: string
  children: ReactNode
  as?: ElementType
} & Omit<ComponentPropsWithoutRef<'section'>, 'className' | 'children'>) {
  return (
    <As className={cn('container mx-auto px-4 py-12 md:py-20', className)} {...rest}>
      {children}
    </As>
  )
}
