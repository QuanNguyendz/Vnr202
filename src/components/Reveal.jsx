import { useInView } from '../hooks/useInView'

export default function Reveal({ children, className = '' }) {
  const { ref, isInView } = useInView({ once: true })

  return (
    <div
      ref={ref}
      className={[
        'transition-all duration-700 ease-out',
        isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6',
        className,
      ].join(' ')}
    >
      {children}
    </div>
  )
}

