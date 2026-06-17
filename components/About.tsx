import Image from "next/image";

const highlights = [
  "Reliable solar solutions",
  "Professional installation",
  "Affordable pricing",
  "Long-term support",
];

export function About() {
  return (
    <section id="about" className="bg-white py-20 sm:py-24">
      <div className="section-shell grid items-center gap-12 lg:grid-cols-[0.92fr_1.08fr]">
        <div className="scroll-reveal relative">
          <div className="absolute -left-5 -top-5 h-32 w-32 rounded-full bg-yellow-300/30 blur-2xl" />
          <div className="premium-card relative overflow-hidden rounded-[2rem] p-3">
            <Image
              src="https://images.unsplash.com/photo-1624397640148-949b1732bb0a?auto=format&fit=crop&w=1200&q=80"
              alt="Technician installing solar panels with professional equipment"
              width={760}
              height={860}
              className="h-[420px] w-full rounded-[1.55rem] object-cover"
            />
          </div>
        </div>

        <div className="scroll-reveal">
          <p className="text-sm font-black uppercase tracking-[0.3em] text-orange-500">About RK SOLAR</p>
          <h2 className="mt-4 text-4xl font-black tracking-tight text-slate-950 sm:text-5xl">
            Solar expertise built for lower bills and cleaner power.
          </h2>
          <p className="mt-6 text-lg leading-8 text-slate-700">
            RK SOLAR is a solar energy company focused on helping homeowners, businesses, and
            industrial customers reduce electricity bills and switch to dependable clean energy.
            From consultation to installation and long-term maintenance, we design systems around
            real usage, site conditions, and future energy goals.
          </p>

          <div className="mt-8 grid gap-4 sm:grid-cols-2">
            {highlights.map((highlight) => (
              <div
                key={highlight}
                className="flex items-center gap-3 rounded-2xl border border-emerald-100 bg-emerald-50/70 p-4 font-bold text-slate-800"
              >
                <span className="grid h-9 w-9 shrink-0 place-items-center rounded-full bg-white text-emerald-700 shadow-sm">
                  <svg aria-hidden="true" viewBox="0 0 20 20" className="h-5 w-5" fill="currentColor">
                    <path d="M10 2a8 8 0 1 0 0 16 8 8 0 0 0 0-16Zm3.58 6.54-4.25 4.25a1 1 0 0 1-1.41 0l-1.75-1.75a1 1 0 1 1 1.41-1.41l1.04 1.04 3.54-3.54a1 1 0 1 1 1.42 1.41Z" />
                  </svg>
                </span>
                {highlight}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
