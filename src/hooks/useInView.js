import { useEffect, useRef, useState } from 'react'

export function useInView(options = {}) {
  const { root = null, rootMargin = '0px 0px -10% 0px', threshold = 0.15, once = true } = options
  const ref = useRef(null)
  const [isInView, setIsInView] = useState(false)

  useEffect(() => {
    const el = ref.current
    if (!el) return

    const observer = new IntersectionObserver(
      (entries) => {
        const entry = entries[0]
        if (!entry) return
        if (entry.isIntersecting) {
          setIsInView(true)
          if (once) observer.disconnect()
        } else if (!once) {
          setIsInView(false)
        }
      },
      { root, rootMargin, threshold },
    )

    observer.observe(el)
    return () => observer.disconnect()
  }, [root, rootMargin, threshold, once])

  return { ref, isInView }
}

