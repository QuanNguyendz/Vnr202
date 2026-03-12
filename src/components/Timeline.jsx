import { useState } from 'react'
import Reveal from './Reveal'
import DetailBarButton from './DetailBarButton'
import DetailPanel from './DetailPanel'

const DETAIL_CONTENT = {
  '1960': {
    year: '1960',
    title: 'Đại hội III – Đường lối kháng chiến chống Mỹ',
    bullets: [
      { text: 'Đại hội đại biểu toàn quốc lần thứ III tổ chức tại Hà Nội (9/1960)' },
      { text: 'Đề ra đường lối cách mạng Việt Nam trong giai đoạn mới' },
      {
        text: 'Xác định hai nhiệm vụ chiến lược:',
        children: [
          { text: 'Miền Bắc: xây dựng CNXH, trở thành hậu phương lớn cho cả nước' },
          { text: 'Miền Nam: tiến hành cách mạng dân tộc dân chủ nhân dân, đấu tranh chống Mỹ và chính quyền Sài Gòn' },
        ],
      },
      {
        text: 'Khẳng định vai trò của hai miền:',
        children: [
          { text: 'Miền Bắc: quyết định nhất đối với sự phát triển cách mạng cả nước' },
          { text: 'Miền Nam: quyết định trực tiếp đối với sự nghiệp giải phóng miền Nam' },
        ],
      },
      { text: 'Thể hiện khát vọng thống nhất đất nước – “non sông liền một dải”' },
    ],
  },
  '1975': {
    year: '1975',
    title: 'Giải phóng miền Nam – Thống nhất đất nước',
    bullets: [
      { text: 'Cuộc kháng chiến chống Mỹ bước vào giai đoạn quyết định, thời cơ chiến lược chín muồi để giải phóng hoàn toàn miền Nam.' },
      { text: 'Dưới sự lãnh đạo của Đảng, quân và dân ta mở Cuộc Tổng tiến công và nổi dậy mùa Xuân 1975 với nhịp độ “thần tốc, táo bạo, bất ngờ, chắc thắng”.' },
      {
        text: 'Các chiến dịch lớn trong mùa Xuân 1975:',
        children: [
          { text: 'Chiến dịch Tây Nguyên (3/1975): đòn mở đầu, tạo đột biến chiến lược, làm tan rã hệ thống phòng thủ của đối phương ở Tây Nguyên.' },
          { text: 'Chiến dịch Huế – Đà Nẵng (3/1975): giải phóng Huế, Đà Nẵng và nhiều địa bàn miền Trung, tạo thế bao vây chiến lược đối với Sài Gòn.' },
          { text: 'Chiến dịch Hồ Chí Minh (26–30/4/1975): chiến dịch cuối cùng, tập trung lực lượng lớn tiến công giải phóng Sài Gòn – Gia Định.' },
        ],
      },
      { text: 'Ngày 30/4/1975: Quân giải phóng tiến vào Sài Gòn; chính quyền Sài Gòn sụp đổ, chiến dịch toàn thắng.' },
      {
        text: 'Kết quả và ý nghĩa:',
        children: [
          { text: 'Giải phóng hoàn toàn miền Nam.' },
          { text: 'Thống nhất đất nước, chấm dứt tình trạng chia cắt kéo dài nhiều năm.' },
          { text: 'Mở ra thời kỳ mới: cả nước đi lên xây dựng chủ nghĩa xã hội.' },
        ],
      },
    ],
  },
  '1976': {
    year: '1976',
    title: 'Đại hội IV – Xây dựng đất nước sau thống nhất',
    bullets: [
      { text: 'Bối cảnh: sau Chiến thắng mùa Xuân 1975, đất nước thống nhất hoàn toàn' },
      {
        text: 'Mục tiêu chung:',
        children: [
          { text: 'Cả nước quá độ lên CNXH' },
          { text: 'Bỏ qua giai đoạn phát triển tư bản chủ nghĩa' },
        ],
      },
      {
        text: 'Nhiệm vụ chiến lược:',
        children: [
          { text: 'Xây dựng CNXH trên phạm vi cả nước' },
          { text: 'Bảo vệ vững chắc Tổ quốc XHCN' },
        ],
      },
      {
        text: 'Đường lối xây dựng kinh tế (trọng tâm):',
        children: [
          { text: 'Công nghiệp hóa XHCN là nhiệm vụ trung tâm' },
          { text: 'Ưu tiên phát triển công nghiệp nặng, xây dựng cơ sở vật chất – kỹ thuật cho CNXH' },
          { text: 'Cải tạo kinh tế theo hướng XHCN: công thương nghiệp tư bản tư nhân, nông nghiệp, thủ công nghiệp' },
          { text: 'Phát triển kinh tế quốc doanh và kinh tế tập thể' },
        ],
      },
      {
        text: 'Đường lối chính trị:',
        children: [
          { text: 'Xây dựng nhà nước thống nhất của CHXHCN Việt Nam' },
          { text: 'Củng cố hệ thống chính trị từ trung ương đến địa phương' },
          { text: 'Tăng cường sự lãnh đạo của Đảng trên phạm vi cả nước' },
        ],
      },
      {
        text: 'Quốc phòng – an ninh:',
        children: [
          { text: 'Xây dựng nền quốc phòng toàn dân' },
          { text: 'Kết hợp xây dựng đất nước với bảo vệ Tổ quốc' },
          { text: 'Sẵn sàng chống mọi âm mưu chống phá' },
        ],
      },
      {
        text: 'Đối ngoại:',
        children: [
          { text: 'Tăng cường đoàn kết với các nước xã hội chủ nghĩa' },
          { text: 'Mở rộng quan hệ với các nước trên thế giới' },
          { text: 'Ủng hộ phong trào đấu tranh vì hòa bình và độc lập dân tộc' },
        ],
      },
      {
        text: 'Kế hoạch 5 năm 1976–1980 (mục tiêu):',
        children: [
          { text: 'Khôi phục kinh tế sau chiến tranh' },
          { text: 'Phát triển công nghiệp và nông nghiệp' },
          { text: 'Nâng cao đời sống nhân dân' },
          { text: 'Xây dựng cơ sở vật chất cho CNXH' },
        ],
      },
    ],
  },
  '1982': {
    year: '1982',
    title: 'Đại hội V – Tiếp tục phát triển đất nước',
    bullets: [
      {
        text: 'Bối cảnh:',
        children: [
          { text: 'Thế giới: Mỹ bao vây cấm vận; các thế lực thù địch xuyên tạc, gây chia rẽ' },
          { text: 'Trong nước: khủng hoảng kinh tế – xã hội trầm trọng' },
        ],
      },
      { text: 'Nhân sự: Đồng chí Lê Duẩn tiếp tục được bầu làm Tổng Bí thư' },
      {
        text: 'Hai nhiệm vụ chiến lược:',
        children: [
          { text: 'Xây dựng thành công CNXH (nhiệm vụ hàng đầu)' },
          { text: 'Bảo vệ vững chắc Tổ quốc Việt Nam XHCN' },
        ],
      },
      {
        text: 'Nhận định chặng đường đầu tiên thời kỳ quá độ:',
        children: [
          { text: 'Ổn định và cải thiện đời sống nhân dân' },
          { text: 'Xây dựng cơ sở vật chất kỹ thuật cho CNXH' },
        ],
      },
      {
        text: 'Thứ tự ưu tiên kinh tế:',
        children: [
          { text: 'Tập trung phát triển mạnh nông nghiệp (mặt trận hàng đầu)' },
          { text: 'Đẩy mạnh sản xuất hàng tiêu dùng và xuất khẩu' },
          { text: 'Kết hợp với công nghiệp nặng trong cơ cấu hợp lý' },
        ],
      },
      { text: 'Hạn chế: còn tư tưởng nóng vội; duy trì cơ chế kế hoạch hóa tập trung, bao cấp; chưa thừa nhận kinh tế nhiều thành phần' },
      {
        text: 'Các bước đột phá đổi mới kinh tế (1982–1986):',
        children: [
          { text: 'HNTW 6 & 7 (1984): xử lý phân phối, lưu thông; điều chỉnh giá – lương – tiền; khẳng định nông nghiệp là mặt trận hàng đầu' },
          { text: 'HNTW 8 (6/1985): chủ trương xóa cơ chế bao cấp; chuyển sang hạch toán kinh doanh XHCN; thừa nhận quy luật sản xuất hàng hóa' },
          { text: 'Kết luận BCT (8/1986): “Ba chương trình kinh tế”; thừa nhận kinh tế nhiều thành phần; kết hợp kế hoạch hóa với quan hệ hàng hóa – tiền tệ' },
        ],
      },
      { text: 'Ý nghĩa: nền tảng tư tưởng trực tiếp cho Đường lối Đổi mới toàn diện tại Đại hội VI (12/1986)' },
    ],
  },
}

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

function TimelineArticle({ item, index, isLast }) {
  const [detailOpen, setDetailOpen] = useState(false)
  const detailContent = DETAIL_CONTENT[item.id]
  const detailSide = item.align === 'right' ? 'left' : 'right'

  return (
    <article
      className="relative min-h-screen overflow-hidden bg-black text-white"
      aria-label={`${item.year} – ${item.title}`}
    >
      <div className="absolute inset-0" aria-hidden="true">
        <div
          className="h-full w-full bg-cover bg-center bg-fixed"
          style={{ backgroundImage: `url(${item.image})` }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-black/55 to-black/90" />
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
            <div className="rounded-3xl border border-white/10 bg-black/55 px-5 py-6 shadow-[0_18px_60px_rgba(0,0,0,0.85)] backdrop-blur-md sm:px-6 sm:py-7">
              <div className="inline-flex items-center gap-2 rounded-full border border-white/25 bg-black/60 px-4 py-1 text-xs tracking-[0.2em] text-white/75 backdrop-blur">
                <span className="h-2 w-2 rounded-full bg-flag-yellow" />
                <span className="uppercase text-gradient-pulse">{item.label}</span>
              </div>

              <div className="mt-5 space-y-4">
                <div className="text-5xl font-semibold tracking-[0.35em] text-white sm:text-6xl md:text-7xl">
                  {item.year}
                </div>
                <h2 className="text-2xl font-semibold text-white sm:text-3xl md:text-4xl">
                  {item.title}
                </h2>
              </div>

              <p className="mt-4 max-w-2xl text-sm leading-relaxed text-white/90 sm:text-base md:text-lg md:max-w-none">
                {item.description}
              </p>

              {!isLast && (
                <div className="mt-5 flex items-center gap-2 text-xs text-white/70 md:justify-end md:text-right">
                  <span className="hidden h-px w-10 bg-white/40 md:block" />
                  <span>Cuộn tiếp để sang giai đoạn tiếp theo</span>
                  <span className="h-px w-10 bg-white/40" />
                </div>
              )}
            </div>
          </div>
        </Reveal>
      </div>

      {detailContent && (
        <>
          <DetailBarButton
            onClick={() => setDetailOpen((open) => !open)}
            isPanelOpen={detailOpen}
            side={detailSide}
            ariaLabel={`Xem chi tiết giai đoạn ${item.year} – ${item.title}`}
          />
          <DetailPanel
            isOpen={detailOpen}
            onClose={() => setDetailOpen(false)}
            year={detailContent.year}
            title={detailContent.title}
            bullets={detailContent.bullets}
            side={detailSide}
          />
        </>
      )}
    </article>
  )
}

export default function Timeline() {
  return (
    <section id="timeline" aria-label="Câu chuyện lãnh đạo của Đảng qua các Đại hội III, IV, V">
      {TIMELINE_SECTIONS.map((item, index) => (
        <TimelineArticle
          key={item.id}
          item={item}
          index={index}
          isLast={index === TIMELINE_SECTIONS.length - 1}
        />
      ))}
    </section>
  )
}

