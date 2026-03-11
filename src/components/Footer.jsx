export default function Footer() {
  return (
    <footer className="border-t border-white/10 py-10" aria-label="Chân trang">
      <div className="container-page flex flex-col items-start justify-between gap-4 sm:flex-row sm:items-center">
        <div>
          <div className="text-sm font-semibold">Dự án học tập</div>
          <div className="mt-1 text-xs text-white/70">Môn học VNR202</div>
        </div>
        <a
          href="#top"
          className="rounded-xl border border-white/10 bg-white/5 px-4 py-2 text-sm font-semibold text-white/85 transition hover:bg-white/10 focus:outline-none focus:ring-2 focus:ring-white/25"
        >
          Lên đầu trang ↑
        </a>
      </div>
    </footer>
  )
}

