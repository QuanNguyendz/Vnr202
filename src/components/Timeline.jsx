import Reveal from './Reveal'

const TIMELINE_SECTIONS = [
  {
    id: '1960',
    year: '1960',
    label: 'Kháng chiến chống Mỹ',
    title: 'Đại hội III – Đường lối kháng chiến chống Mỹ',
    description:
      'Đại hội III của Đảng đề ra đường lối chiến lược: miền Bắc xây dựng chủ nghĩa xã hội, miền Nam tiếp tục đấu tranh giải phóng. Đây là nền tảng lãnh đạo cho cuộc kháng chiến chống Mỹ.',
    image: '/hero/historical-Vietnam-war.jpg',
    align: 'left',
  },
  {
    id: '1975',
    year: '1975',
    label: 'Thắng lợi kháng chiến',
    title: 'Giải phóng miền Nam – Thống nhất đất nước',
    description:
      'Thắng lợi năm 1975 là kết quả của đường lối kháng chiến đúng đắn do Đảng đề ra từ Đại hội III, kết tinh sức mạnh toàn dân tộc và hậu phương – tiền tuyến.',
    image: '/hero/tank1975.jpg',
    align: 'right',
  },
  {
    id: '1976',
    year: '1976',
    label: 'Bước vào thời kỳ mới',
    title: 'Đại hội IV – Xây dựng đất nước sau thống nhất',
    description:
      'Sau khi đất nước thống nhất, Đại hội IV xác định nhiệm vụ đưa cả nước đi lên chủ nghĩa xã hội, tập trung khôi phục kinh tế, củng cố hệ thống chính trị và thống nhất quản lý.',
    image: '/hero/vietnam-flag.jpg',
    align: 'left',
  },
  {
    id: '1982',
    year: '1982',
    label: 'Tiếp tục phát triển',
    title: 'Đại hội V – Tiếp tục phát triển đất nước',
    description:
      'Đại hội V tiếp tục đề ra các chính sách phát triển kinh tế, ổn định xã hội và xây dựng đất nước sau chiến tranh, từng bước khắc phục khó khăn và hoàn thiện con đường đi lên chủ nghĩa xã hội.',
    image: '/hero/national-development-imagery.webp',
    align: 'right',
  },
]

export default function Timeline() {
  return (
    <section id="timeline" aria-label="Câu chuyện lãnh đạo của Đảng qua các Đại hội III, IV, V">
      {TIMELINE_SECTIONS.map((item, index) => (
        <article
          key={item.id}
          className="relative min-h-screen overflow-hidden bg-black text-white"
        >
          <div className="absolute inset-0" aria-hidden="true">
            <div
              className="h-full w-full bg-cover bg-center bg-fixed"
              style={{ backgroundImage: `url(${item.image})` }}
            />
            <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/45 to-black/85" />
            <div className="absolute inset-x-0 bottom-0 h-32 bg-gradient-to-t from-[#0b0b10] to-transparent" />
          </div>

          <div className="container-page relative flex min-h-screen items-center py-20">
            <Reveal className="w-full">
              <div
                className={[
                  'flex flex-col gap-6 text-left',
                  item.align === 'right' ? 'md:ml-auto md:max-w-xl md:text-right' : 'md:max-w-xl',
                ].join(' ')}
              >
                <div className="inline-flex items-center gap-2 rounded-full border border-white/25 bg-black/40 px-4 py-1 text-xs tracking-[0.2em] text-white/70 backdrop-blur">
                  <span className="h-2 w-2 rounded-full bg-flag-yellow" />
                  <span className="uppercase text-gradient-pulse">{item.label}</span>
                </div>

                <div className="space-y-4">
                  <div className="text-5xl font-semibold tracking-[0.35em] sm:text-6xl md:text-7xl">
                    {item.year}
                  </div>
                  <h2 className="text-2xl font-semibold sm:text-3xl md:text-4xl">{item.title}</h2>
                </div>

                <p className="max-w-2xl text-sm leading-relaxed text-white/80 sm:text-base md:text-lg md:max-w-none">
                  {item.description}
                </p>

                {index < TIMELINE_SECTIONS.length - 1 && (
                  <div className="mt-4 flex items-center gap-2 text-xs text-white/60 md:justify-end md:text-right">
                    <span className="hidden h-px w-10 bg-white/30 md:block" />
                    <span>Cuộn tiếp để sang giai đoạn tiếp theo</span>
                    <span className="h-px w-10 bg-white/30" />
                  </div>
                )}
              </div>
            </Reveal>
          </div>
        </article>
      ))}
    </section>
  )
}

