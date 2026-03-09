import Reveal from './Reveal'

export default function CongressCard({ year, title, bullets }) {
  return (
    <Reveal className="relative rounded-2xl border border-white/10 bg-white/5 p-5 backdrop-blur">
      <div className="flex flex-wrap items-center justify-between gap-3">
        <div className="inline-flex items-center gap-2">
          <span className="inline-flex h-8 items-center rounded-full bg-flag-yellow px-3 text-xs font-bold text-black">
            {year}
          </span>
          <h3 className="text-lg font-semibold">{title}</h3>
        </div>
        <span className="rounded-full border border-white/10 bg-black/20 px-3 py-1 text-xs text-white/70">
          Đại hội Đảng
        </span>
      </div>

      <ul className="mt-4 space-y-2 text-sm leading-relaxed text-white/80">
        {bullets.map((b) => (
          <li key={b} className="flex gap-2">
            <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-flag-yellow" aria-hidden="true" />
            <span>{b}</span>
          </li>
        ))}
      </ul>
    </Reveal>
  )
}

