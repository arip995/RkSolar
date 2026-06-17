import { stats } from "@/lib/site-data";

export function Stats() {
  return (
    <section className="bg-gradient-to-r from-emerald-800 via-slate-900 to-slate-950 py-14 text-white">
      <div className="section-shell grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
        {stats.map((stat, index) => (
          <div
            key={stat.label}
            className="scroll-reveal rounded-3xl border border-white/10 bg-white/[0.08] p-7 text-center shadow-xl shadow-black/10 backdrop-blur transition duration-300 hover:-translate-y-1 hover:bg-white/[0.12]"
            style={{ animationDelay: `${index * 80}ms` }}
          >
            <p className="bg-gradient-to-r from-yellow-200 to-orange-300 bg-clip-text text-4xl font-black text-transparent sm:text-5xl">
              {stat.value}
            </p>
            <p className="mt-3 text-sm font-bold uppercase tracking-[0.2em] text-slate-200">{stat.label}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
