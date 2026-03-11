export default function DetailBarButton({
  onClick,
  isPanelOpen,
  ariaLabel = 'Xem chi tiết',
  side = 'right',
}) {
  const sideClass =
    side === 'left'
      ? 'md:left-0 md:right-auto md:rounded-r-full md:border-l-0'
      : 'md:right-0 md:left-auto md:rounded-l-full md:border-r-0'

  const label = isPanelOpen ? 'Thu gọn' : 'Xem chi tiết'

  // Mũi tên luôn: chữ trước, mũi tên sau.
  // Hướng mũi tên theo vị trí panel:
  // - Button bên phải: đóng => ←, mở => → (panel trượt từ phải vào)
  // - Button bên trái: đóng => →, mở => ← (panel trượt từ trái vào)
  const arrowRotationClass =
    side === 'right'
      ? isPanelOpen
        ? 'rotate-0'
        : 'rotate-180'
      : isPanelOpen
        ? 'rotate-180'
        : 'rotate-0'

  return (
    <button
      type="button"
      onClick={onClick}
      aria-label={ariaLabel}
      aria-expanded={isPanelOpen}
      className={[
        'group',
        'absolute z-20',
        // Mobile: đặt ở đáy, giữa màn hình
        'bottom-6 left-1/2 -translate-x-1/2',
        // Desktop: giữa chiều dọc, sát cạnh trái/phải (ghi đè lại vị trí ngang bằng sideClass)
        'md:top-1/2 md:bottom-auto md:-translate-y-1/2 md:translate-x-0',
        'inline-flex items-center gap-2 rounded-full border',
        'px-4 py-2 md:px-4 md:py-2',
        'bg-white/15 backdrop-blur-xl',
        'border-white/35',
        'shadow-[0_0_24px_rgba(255,255,255,0.20),0_16px_44px_rgba(0,0,0,0.40)]',
        'ring-1 ring-white/20',
        'text-sm md:text-base text-white/95',
        'transition-all duration-200 ease-out',
        'hover:scale-[1.02] md:hover:scale-105',
        'hover:bg-white/22 hover:border-white/55 hover:ring-white/35 hover:shadow-[0_0_40px_rgba(255,255,255,0.32),0_20px_52px_rgba(0,0,0,0.46)]',
        'focus:outline-none focus:ring-2 focus:ring-white/60 focus:ring-offset-2 focus:ring-offset-transparent',
        sideClass,
      ].join(' ')}
    >
      <span className="inline-flex h-8 w-8 items-center justify-center rounded-full bg-white/18 text-white/95 shadow-[0_0_16px_rgba(255,255,255,0.32)]">
        {/* Icon sách kiểu Heroicons */}
        <svg
          width="20"
          height="20"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          aria-hidden="true"
        >
          <path
            d="M4 5.75C4 4.7835 4.7835 4 5.75 4H13.25C14.2165 4 15 4.7835 15 5.75V7.5H9.75C8.50736 7.5 7.5 8.50736 7.5 9.75V19.25C7.5 19.4489 7.52788 19.642 7.58041 19.8263C6.68511 19.6737 6 18.8923 6 17.9875V6.25C6 6.11193 5.88807 6 5.75 6C5.61193 6 5.5 6.11193 5.5 6.25V17.5C4.67157 16.9482 4 15.8291 4 14.5V5.75Z"
            fill="currentColor"
            opacity="0.95"
          />
          <path
            d="M9.75 9C9.33579 9 9 9.33579 9 9.75V18.25C9 19.2165 9.7835 20 10.75 20H18.25C19.2165 20 20 19.2165 20 18.25V9.75C20 8.7835 19.2165 8 18.25 8H12.75L11.0303 6.28033C10.8897 6.13968 10.6989 6.06066 10.5 6.06066H9.75C9.33579 6.06066 9 6.39645 9 6.81066V9.75C9 9.33579 9.33579 9 9.75 9Z"
            fill="currentColor"
          />
        </svg>
      </span>

      <span className="flex items-center gap-1.5">
        <span className="whitespace-nowrap">{label}</span>
        <span
          className="hidden lg:inline-flex max-w-0 overflow-hidden whitespace-nowrap text-xs text-white/80 opacity-0 transition-all duration-300 ease-out group-hover:max-w-[160px] group-hover:opacity-100 group-hover:ml-1.5"
        >
          – Ấn để xem chi tiết
        </span>
        <span
          className={`inline-flex h-5 w-5 items-center justify-center text-white/95 transition-transform duration-300 ease-out group-hover:translate-x-0.5 ${arrowRotationClass}`}
          aria-hidden="true"
        >
          <svg
            width="18"
            height="18"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="text-white"
          >
            <path
              d="M5 12h14M12 5l7 7-7 7"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </span>
      </span>
    </button>
  )
}
