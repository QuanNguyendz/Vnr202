import Reveal from './Reveal'

const ACHIEVEMENTS = [
  {
    title: 'Thống nhất đất nước',
    desc: 'Chấm dứt chia cắt, mở ra thời kỳ xây dựng và bảo vệ Tổ quốc trong một nhà nước thống nhất.',
  },
  {
    title: 'Phục hồi kinh tế sau chiến tranh',
    desc: 'Ưu tiên khôi phục sản xuất, hạ tầng và ổn định đời sống trong bối cảnh hậu chiến nhiều khó khăn.',
  },
  {
    title: 'Củng cố hệ thống chính trị',
    desc: 'Tăng cường quản lý nhà nước, kiện toàn tổ chức và định hình cơ chế vận hành trong giai đoạn mới.',
  },
]

function Icon({ type }) {
  if (type === 'unify') {
    return (
      <svg viewBox="0 0 24 24" className="h-6 w-6" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
        <path d="M7 12l3 3 7-7" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10z" stroke="currentColor" strokeWidth="2" />
      </svg>
    )
  }
  if (type === 'economy') {
    return (
      <svg viewBox="0 0 24 24" className="h-6 w-6" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
        <path d="M4 19V5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
        <path d="M4 19h16" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
        <path d="M7 15l3-3 3 2 5-6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    )
  }
  return (
    <svg viewBox="0 0 24 24" className="h-6 w-6" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
      <path d="M12 3l8 4v6c0 5-3.5 8.5-8 9-4.5-.5-8-4-8-9V7l8-4z" stroke="currentColor" strokeWidth="2" strokeLinejoin="round" />
      <path d="M9 12l2 2 4-4" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  )
}

export default function Achievements() {
  return (
    <section id="achievements" className="py-16 sm:py-20" aria-label="Thành tựu">
      <div className="container-page">
        <Reveal>
          <h2 className="text-2xl font-semibold tracking-tight sm:text-3xl">Thành tựu tiêu biểu</h2>
          <p className="mt-2 max-w-2xl text-sm leading-relaxed text-white/75 sm:text-base">
            Những kết quả mang tính nền tảng, đặt cơ sở cho giai đoạn phát triển tiếp theo của đất nước.
          </p>
        </Reveal>

        <div className="mt-8 grid gap-4 md:grid-cols-3">
          {ACHIEVEMENTS.map((a, idx) => (
            <Reveal
              key={a.title}
              className="rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur"
            >
              <div className="flex items-start gap-3">
                <div className="rounded-xl bg-flag-yellow/95 p-2 text-black shadow-soft">
                  <Icon type={idx === 0 ? 'unify' : idx === 1 ? 'economy' : 'shield'} />
                </div>
                <div>
                  <h3 className="text-base font-semibold">{a.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-white/75">{a.desc}</p>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}

