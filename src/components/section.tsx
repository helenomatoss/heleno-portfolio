import { cn } from '@/lib/utils'
import type { ReactNode, ElementType } from 'react'

export default function Section({
  className,
  children,
  as: As = 'section',
}: {
  className?: string
  children: ReactNode
  as?: ElementType
}) {
  return <As className={cn('container mx-auto px-4 py-12 md:py-20', className)}>{children}</As>
}
