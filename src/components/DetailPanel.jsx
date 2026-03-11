import { useEffect } from 'react'

export default function DetailPanel({ isOpen, onClose, year, title, bullets, side = 'right' }) {
  useEffect(() => {
    if (!isOpen) return
    const handleEscape = (e) => {
      if (e.key === 'Escape') onClose()
    }
    document.addEventListener('keydown', handleEscape)
    const prevOverflow = document.body.style.overflow
    document.body.style.overflow = 'hidden'
    return () => {
      document.removeEventListener('keydown', handleEscape)
      document.body.style.overflow = prevOverflow
    }
  }, [isOpen, onClose])

  const isLeft = side === 'left'

  return (
    <>
      {/* Overlay: click to close */}
      <div
        role="button"
        tabIndex={-1}
        aria-hidden="true"
        onClick={onClose}
        className={`fixed inset-0 z-30 bg-black/40 backdrop-blur-[1px] transition-opacity duration-300 ease-out ${
          isOpen ? 'pointer-events-auto opacity-100' : 'pointer-events-none opacity-0'
        }`}
        style={{ transitionProperty: 'opacity' }}
      />

      {/* Slide panel */}
      <div
        className={[
          'fixed inset-y-0 z-40 w-[min(50%,420px)] overflow-y-auto bg-black/85 backdrop-blur-sm transition-transform duration-[350ms] ease-out',
          'detail-panel-scroll',
          isLeft
            ? 'left-0 shadow-[8px_0_32px_rgba(0,0,0,0.4)]'
            : 'right-0 shadow-[-8px_0_32px_rgba(0,0,0,0.4)]',
        ].join(' ')}
        style={{
          transform: isOpen ? 'translateX(0)' : isLeft ? 'translateX(-100%)' : 'translateX(100%)',
        }}
        aria-modal="true"
        aria-label={`Chi tiết giai đoạn ${year}`}
      >
        <div className="flex min-h-full flex-col p-6 sm:p-8">
          {/* Top: Year + Title */}
          <div
            className={`transition-opacity duration-300 ease-out ${
              isOpen ? 'opacity-100 delay-100' : 'opacity-0 delay-0'
            }`}
            style={{ transitionProperty: 'opacity' }}
          >
            <div className="text-4xl font-semibold tracking-[0.2em] text-white sm:text-5xl">
              {year}
            </div>
            <h3 className="mt-3 text-lg font-semibold leading-snug text-white/95 sm:text-xl">
              {title}
            </h3>
          </div>

          {/* Middle: Bullets */}
          <ul
            className={`mt-6 flex-1 space-y-3 transition-opacity duration-300 ease-out ${
              isOpen ? 'opacity-100 delay-150' : 'opacity-0 delay-0'
            }`}
            style={{ transitionProperty: 'opacity' }}
          >
            {bullets?.map((item, i) => (
              <li key={i} className="text-sm leading-relaxed text-white/85">
                <span>{item.text}</span>
                {item.children?.length > 0 && (
                  <ul className="mt-2 list-none space-y-1 pl-4 border-l border-white/20">
                    {item.children.map((child, j) => (
                      <li key={j} className="pl-2 text-white/75">
                        • {child.text}
                      </li>
                    ))}
                  </ul>
                )}
              </li>
            ))}
          </ul>

          {/* Bottom: Thu gọn */}
          <div
            className={`mt-8 transition-opacity duration-300 ease-out ${
              isOpen ? 'opacity-100 delay-200' : 'opacity-0 delay-0'
            }`}
            style={{ transitionProperty: 'opacity' }}
          >
            <button
              type="button"
              onClick={onClose}
              className="w-full rounded-xl border border-white/25 bg-white/10 px-4 py-3 text-sm font-semibold text-white/90 backdrop-blur transition hover:bg-white/20 focus:outline-none focus:ring-2 focus:ring-white/40"
            >
              Thu gọn
            </button>
          </div>
        </div>
      </div>
    </>
  )
}
