import Reveal from './Reveal'

export default function Hero() {
  const handleScroll = () => {
    const el = document.getElementById('historical-context')
    if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' })
  }

  return (
    <section
      id="top"
      className="relative overflow-hidden"
      aria-label="Mở đầu"
    >
      <div
        className="absolute inset-0 bg-[url('/hero-bg.svg')] bg-cover bg-center"
        aria-hidden="true"
      />
      <div className="absolute inset-0 bg-gradient-to-b from-black/55 via-black/35 to-[#0b0b10]" aria-hidden="true" />

      <div className="container-page relative min-h-[92vh] py-16">
        <div className="grid items-center gap-10 md:grid-cols-2">
          <div className="max-w-3xl">
            <Reveal>
              <div className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/10 px-3 py-1 text-xs text-white/90 backdrop-blur">
                <span className="h-2 w-2 rounded-full bg-flag-yellow" />
                <span>Dự án học tập • VNR202</span>
              </div>
            </Reveal>

            <Reveal className="mt-5">
              <h1 className="text-balance text-4xl font-semibold leading-tight tracking-tight sm:text-5xl lg:text-6xl">
                Khát vọng non sông liền một dải
              </h1>
            </Reveal>

            <Reveal className="mt-4">
              <p className="text-pretty text-base leading-relaxed text-white/80 sm:text-lg">
              Lịch sử Việt Nam qua các kỳ Đại hội Đảng lần thứ III, IV, V
              </p>
            </Reveal>

            <Reveal className="mt-8">
              <div className="flex flex-col gap-3 sm:flex-row sm:items-center">
                <button
                  type="button"
                  onClick={handleScroll}
                  className="inline-flex items-center justify-center gap-2 rounded-xl bg-flag-yellow px-5 py-3 text-sm font-semibold text-black shadow-soft transition hover:brightness-95 focus:outline-none focus:ring-2 focus:ring-flag-yellow/60"
                >
                  Khám phá hành trình
                  <span aria-hidden="true">↓</span>
                </button>

                <a
                  href="#timeline"
                  className="inline-flex items-center justify-center rounded-xl border border-white/15 bg-white/5 px-5 py-3 text-sm font-semibold text-white/90 backdrop-blur transition hover:bg-white/10 focus:outline-none focus:ring-2 focus:ring-white/25"
                >
                  Đi tới Timeline
                </a>
              </div>
            </Reveal>

            <Reveal className="mt-10">
              <div className="grid gap-3 sm:grid-cols-3">
                <div className="rounded-2xl border border-white/10 bg-white/5 p-4 backdrop-blur">
                  <div className="text-xs text-white/60">Trọng tâm</div>
                  <div className="mt-1 text-sm font-semibold whitespace-nowrap">ĐH Đảng III • IV • V</div>
                </div>
                <div className="rounded-2xl border border-white/10 bg-white/5 p-4 backdrop-blur">
                  <div className="text-xs text-white/60">Khung thời gian</div>
                  <div className="mt-1 text-sm font-semibold whitespace-nowrap">1960–1982</div>
                </div>
                <div className="rounded-2xl border border-white/10 bg-white/5 p-4 backdrop-blur">
                  <div className="text-xs text-white/60">Mục tiêu</div>
                  <div className="mt-1 text-sm font-semibold whitespace-nowrap">Kể chuyện • học sử</div>
                </div>
              </div>
            </Reveal>
          </div>

          <Reveal className="md:justify-self-end">
            <div className="relative">
              <div
                className="pointer-events-none absolute -inset-6 rounded-[2.25rem] bg-gradient-to-br from-flag-yellow/15 via-white/5 to-transparent blur-2xl"
                aria-hidden="true"
              />

              <div className="grid grid-cols-2 gap-4">
                <div className="group relative col-span-2 overflow-hidden rounded-3xl border border-white/10 bg-white/5 shadow-xl transition duration-300 hover:scale-105">
                  <div className="aspect-[16/9] w-full">
                    <img
                      src="/hero/tank1975.jpg"
                      alt="Xe tăng tiến vào Dinh Độc Lập trong ngày Giải phóng Sài Gòn (1975)"
                      className="h-full w-full object-cover"
                      loading="eager"
                      decoding="async"
                    />
                  </div>
                  <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/50 via-black/0 to-transparent" aria-hidden="true" />
                </div>

                <div className="group relative overflow-hidden rounded-3xl border border-white/10 bg-white/5 shadow-xl transition duration-300 hover:scale-105">
                  <div className="aspect-[4/5] w-full">
                    <img
                      src="/hero/saigon1975.jpg"
                      alt="Người dân Sài Gòn mừng ngày giải phóng (1975)"
                      className="h-full w-full object-cover"
                      loading="lazy"
                      decoding="async"
                    />
                  </div>
                </div>

                <div className="group relative overflow-hidden rounded-3xl border border-white/10 bg-white/5 shadow-xl transition duration-300 hover:scale-105">
                  <div className="aspect-[4/5] w-full">
                    <img
                      src="/hero/vietnam-flag.jpg"
                      alt="Quốc kỳ Việt Nam tung bay"
                      className="h-full w-full object-cover"
                      loading="lazy"
                      decoding="async"
                    />
                  </div>
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  )
}

