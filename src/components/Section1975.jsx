import { useEffect, useState } from 'react'
import { useInView } from '../hooks/useInView'
import Reveal from './Reveal'

export default function Section1975() {
  const [hasShownCelebration, setHasShownCelebration] = useState(false)
  const [showOverlay, setShowOverlay] = useState(false)
  const { ref, isInView } = useInView({ once: false })

  useEffect(() => {
    if (isInView && !hasShownCelebration) {
      setHasShownCelebration(true)
      setShowOverlay(true)
    }
  }, [isInView, hasShownCelebration])

  const closeOverlay = () => setShowOverlay(false)
  const openOverlay = () => setShowOverlay(true)

  return (
    <section
      id="year-1975"
      ref={ref}
      className="relative min-h-screen overflow-hidden bg-black text-white"
      aria-label="1975 Giải phóng miền Nam, thống nhất đất nước"
    >
      <div className="absolute inset-0 overflow-hidden" aria-hidden="true">
        <img
          src="/hero/tank1975.jpg"
          alt=""
          className="h-full w-full object-cover bg-slow-zoom"
          loading="lazy"
          decoding="async"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-black/80" />
        <div className="absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-[#0b0b10] to-transparent" />
      </div>

      <div className="container-page relative flex min-h-screen flex-col items-center justify-center py-24 text-center">
        <Reveal>
          <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-white/20 bg-black/40 px-4 py-1 text-xs tracking-[0.2em] text-white/70 backdrop-blur">
            <span className="h-2 w-2 rounded-full bg-flag-yellow" />
            <span>1975 • DẤU MỐC CHUYỂN BƯỚC LỊCH SỬ</span>
          </div>
        </Reveal>

        <Reveal className="mt-2">
          <div className="space-y-4">
            <div className="text-6xl font-semibold tracking-[0.35em] sm:text-7xl md:text-8xl">
              1975
            </div>
            <div className="space-y-2 text-sm font-semibold uppercase tracking-[0.3em] sm:text-base md:text-lg">
              <p>GIẢI PHÓNG MIỀN NAM</p>
              <p>THỐNG NHẤT ĐẤT NƯỚC</p>
            </div>
          </div>
        </Reveal>

        <Reveal className="mt-8 max-w-2xl">
          <p className="text-sm leading-relaxed text-white/75 sm:text-base">
            Khoảnh khắc lịch sử khép lại chiến tranh, mở ra kỷ nguyên độc lập, thống nhất và xây dựng đất nước.
            Từ đây, câu chuyện các Đại hội Đảng bước sang trọng trách mới: tái thiết và phát triển.
          </p>
        </Reveal>

        <Reveal className="mt-10">
          <div className="flex flex-col items-center gap-3 text-xs text-white/60 sm:flex-row sm:justify-center">
            <div className="flex items-center gap-2">
              <span className="h-px w-10 bg-white/30" />
              <span>Cuộn tiếp để theo dõi chặng đường sau 1975</span>
              <span className="h-px w-10 bg-white/30" />
            </div>

            <button
              type="button"
              onClick={openOverlay}
              className="mt-1 inline-flex items-center gap-1 rounded-full border border-white/30 bg-white/10 px-4 py-1 text-[11px] font-semibold text-white/85 backdrop-blur transition hover:bg-white/20 focus:outline-none focus:ring-2 focus:ring-white/40 sm:mt-0"
            >
              Xem lại video chiến thắng
            </button>
          </div>
        </Reveal>
      </div>

      {showOverlay && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/85 backdrop-blur-sm">
          <div className="w-full max-w-3xl px-4">
            <div className="flex justify-end">
              <button
                type="button"
                onClick={closeOverlay}
                className="rounded-full border border-white/25 bg-white/10 px-3 py-1 text-xs font-semibold text-white/80 backdrop-blur transition hover:bg-white/20 focus:outline-none focus:ring-2 focus:ring-white/40"
              >
                Tiếp tục xem trang ✕
              </button>
            </div>

            <div className="mt-3 overflow-hidden rounded-3xl border border-white/20 bg-black shadow-soft">
              {/* Video YouTube ăn mừng chiến thắng 1975 */}
              <div className="w-full" style={{ aspectRatio: '16 / 9' }}>
                <iframe
                  src="https://www.youtube.com/embed/ecJSxFzvSKk?controls=1&rel=0&modestbranding=1&playsinline=1&cc_load_policy=1&cc_lang_pref=vi&hl=vi"
                  title="Chiến thắng giải phóng miền Nam 1975"
                  className="h-full w-full"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  allowFullScreen
                />
              </div>
            </div>

            <p className="mt-3 text-center text-xs text-white/70">
              Khoảnh khắc mừng chiến thắng giải phóng miền Nam, thống nhất đất nước.
            </p>
            <p className="mt-1 text-center text-[11px] text-white/60">
              Bản quyền video thuộc về VTV24 – sử dụng cho mục đích học tập, phi thương mại.
            </p>
          </div>
        </div>
      )}
    </section>
  )
}

