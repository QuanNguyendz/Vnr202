import Hero from './components/Hero'
import Timeline from './components/Timeline'
import Section1975 from './components/Section1975'
import Achievements from './components/Achievements'
import Milestones from './components/Milestones'
import Footer from './components/Footer'
import Reveal from './components/Reveal'

function App() {
  return (
    <div className="min-h-dvh bg-[#0b0b10]">
      <Hero />

      <section id="historical-context" className="py-16 sm:py-20" aria-label="Bối cảnh lịch sử">
        <div className="container-page">
          <Reveal>
            <h2 className="text-2xl font-semibold tracking-tight sm:text-3xl">Bối cảnh lịch sử</h2>
            <p className="mt-2 max-w-3xl text-sm leading-relaxed text-white/75 sm:text-base">
              Trong cuộc kháng chiến chống Mỹ cứu nước, Việt Nam đối mặt với chiến tranh ác liệt, chia cắt lâu dài,
              yêu cầu vừa xây dựng miền Bắc thành hậu phương vững chắc, vừa kiên trì đấu tranh giải phóng miền Nam.
              Bối cảnh ấy đặt ra các quyết sách chiến lược về tổ chức, huy động nguồn lực, và định hướng phát triển
              phù hợp với điều kiện lịch sử của từng giai đoạn.
            </p>
          </Reveal>

          <div className="mt-8 grid gap-4 md:grid-cols-3">
            <Reveal className="rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur">
              <div className="text-xs text-white/60">Thực tiễn chiến tranh</div>
              <div className="mt-2 text-base font-semibold">Tác động toàn diện</div>
              <p className="mt-2 text-sm leading-relaxed text-white/75">
                Kinh tế, xã hội, và đời sống bị ảnh hưởng sâu sắc, đòi hỏi tổ chức chi viện, bảo đảm hậu cần, và củng cố
                tinh thần toàn dân.
              </p>
            </Reveal>
            <Reveal className="rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur">
              <div className="text-xs text-white/60">Chiến lược hai miền</div>
              <div className="mt-2 text-base font-semibold">Hậu phương – tiền tuyến</div>
              <p className="mt-2 text-sm leading-relaxed text-white/75">
                Miền Bắc xây dựng CNXH và chi viện; miền Nam đẩy mạnh đấu tranh giải phóng, tạo thế và lực cho thống nhất.
              </p>
            </Reveal>
            <Reveal className="rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur">
              <div className="text-xs text-white/60">Sau 1975</div>
              <div className="mt-2 text-base font-semibold">Tái thiết và thống nhất</div>
              <p className="mt-2 text-sm leading-relaxed text-white/75">
                Nhiệm vụ trọng tâm chuyển sang khôi phục kinh tế, ổn định đời sống, củng cố hệ thống chính trị và quản trị
                quốc gia.
              </p>
            </Reveal>
          </div>
        </div>
      </section>

      <Timeline />
      <Section1975 />
      <Achievements />
      <Milestones />

      <section id="educational-value" className="py-16 sm:py-20" aria-label="Giá trị giáo dục">
        <div className="container-page">
          <div className="rounded-3xl border border-white/10 bg-gradient-to-br from-white/10 via-white/5 to-transparent p-8 backdrop-blur sm:p-10">
            <Reveal>
              <h2 className="text-2xl font-semibold tracking-tight sm:text-3xl">Giá trị giáo dục</h2>
              <p className="mt-3 max-w-3xl text-sm leading-relaxed text-white/75 sm:text-base">
                Nghiên cứu giai đoạn Đại hội III, IV, V giúp người học hiểu cách hình thành quyết sách trong điều kiện
                chiến tranh – hòa bình chuyển tiếp, nhận diện bài học về thống nhất mục tiêu, huy động nguồn lực, và lựa
                chọn ưu tiên phát triển. Đây cũng là nền tảng để tiếp cận lịch sử hiện đại một cách có hệ thống, tôn trọng
                bối cảnh, và tư duy phản biện dựa trên sự kiện.
              </p>
            </Reveal>

            <div className="mt-8 grid gap-4 md:grid-cols-3">
              <Reveal className="rounded-2xl border border-white/10 bg-black/20 p-6">
                <div className="text-base font-semibold">Hiểu bối cảnh</div>
                <p className="mt-2 text-sm leading-relaxed text-white/75">
                  Đặt sự kiện vào chuỗi nguyên nhân – kết quả thay vì ghi nhớ rời rạc.
                </p>
              </Reveal>
              <Reveal className="rounded-2xl border border-white/10 bg-black/20 p-6">
                <div className="text-base font-semibold">Bài học chính sách</div>
                <p className="mt-2 text-sm leading-relaxed text-white/75">
                  Nhìn rõ ưu tiên chiến lược theo từng giai đoạn: chiến tranh, thống nhất, tái thiết.
                </p>
              </Reveal>
              <Reveal className="rounded-2xl border border-white/10 bg-black/20 p-6">
                <div className="text-base font-semibold">Kỹ năng học tập</div>
                <p className="mt-2 text-sm leading-relaxed text-white/75">
                  Tóm lược, so sánh mốc thời gian, và trình bày lại lịch sử theo “storytelling” hiện đại.
                </p>
              </Reveal>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}

export default App
