import type { ReactNode } from 'react'
import { useInView } from '../hooks/useReveal'

export function Reveal({ children, className = '', as: Tag = 'div' }: { children: ReactNode; className?: string; as?: 'div' | 'section' | 'li' }) {
  const { ref, inView } = useInView<HTMLDivElement>(0.12)
  return (
    <Tag ref={ref as never} className={`reveal ${inView ? 'in' : ''} ${className}`}>
      {children}
    </Tag>
  )
}
