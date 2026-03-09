import Reveal from './Reveal'

const MILESTONES = [
  {
    year: '1954',
    title: 'Hiệp định Genève',
    desc: 'Chấm dứt chiến tranh ở Đông Dương, mở ra bối cảnh đất nước tạm thời chia cắt và yêu cầu đấu tranh lâu dài.',
    image: '/hero/ky-hiep-dinh-geneve.jpg',
  },
  {
    year: '1975',
    title: 'Giải phóng Sài Gòn',
    desc: 'Kết thúc chiến tranh, tạo điều kiện lịch sử để thống nhất đất nước.',
    image: '/hero/tank1975.jpg',
  },
  {
    year: '1976',
    title: 'Thành lập CHXHCN Việt Nam',
    desc: 'Xác lập mô hình nhà nước thống nhất, định hướng xây dựng đất nước trong thời kỳ mới.',
    image: '/hero/thanh-lap-chxhcn-vn.jpg',
  },
  {
    year: '1982',
    title: 'Đại hội Đảng lần V',
    desc: 'Khẳng định tiếp tục xây dựng CNXH và nhiệm vụ trọng tâm cải thiện kinh tế – đời sống.',
    image: '/hero/dai-hoi-dang-v.jpg',
  },
]

export default function Milestones() {
  return (
    <section id="milestones" className="py-16 sm:py-20" aria-label="Mốc sự kiện">
      <div className="container-page">
        <Reveal>
          <h2 className="text-2xl font-semibold tracking-tight sm:text-3xl">Các mốc lịch sử tiêu biểu</h2>
          <p className="mt-2 max-w-2xl text-sm leading-relaxed text-white/75 sm:text-base">
            Những sự kiện then chốt giúp đặt Đại hội III, IV, V vào đúng bối cảnh và chuỗi phát triển lịch sử.
          </p>
        </Reveal>

        <div className="mt-8 grid gap-4 md:grid-cols-2">
          {MILESTONES.map((m) => (
            <Reveal
              key={m.year + m.title}
              className="rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur"
            >
              <div className="flex items-start gap-4">
                {m.image && (
                  <div className="hidden h-20 w-28 overflow-hidden rounded-xl border border-white/15 bg-black/40 shadow-soft sm:block">
                    <img
                      src={m.image}
                      alt={m.title}
                      className="h-full w-full object-cover"
                      loading="lazy"
                      decoding="async"
                    />
                  </div>
                )}

                <div className="flex-1">
                  <div className="flex items-start justify-between gap-3">
                    <div>
                      <h3 className="text-base font-semibold">{m.title}</h3>
                      <p className="mt-2 text-sm leading-relaxed text-white/75">{m.desc}</p>
                    </div>
                    <div className="shrink-0">
                      <span className="inline-flex items-center rounded-full bg-flag-red px-3 py-1 text-xs font-bold text-white shadow-soft">
                        {m.year}
                      </span>
                    </div>
                  </div>
                </div>
              </div>
              <div className="mt-5 h-px w-full bg-gradient-to-r from-flag-yellow/70 via-white/15 to-transparent" aria-hidden="true" />
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}

