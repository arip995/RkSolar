import Image from "next/image";

const trustBadges = ["Clean Energy", "Cost Saving", "Expert Installation"];

export function Hero() {
  return (
    <section
      id="home"
      className="sun-glow relative overflow-hidden pb-20 pt-32 sm:pb-24 sm:pt-36 lg:min-h-screen lg:pb-28 lg:pt-40"
    >
      <div className="absolute -right-24 top-28 h-72 w-72 rounded-full bg-yellow-300/30 blur-3xl" />
      <div className="absolute -left-28 bottom-10 h-80 w-80 rounded-full bg-emerald-400/20 blur-3xl" />

      <div className="section-shell relative grid items-center gap-12 lg:grid-cols-[1.02fr_0.98fr]">
        <div className="reveal">
          <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-orange-200 bg-white/80 px-4 py-2 text-sm font-bold text-emerald-800 shadow-sm">
            <span className="h-2.5 w-2.5 rounded-full bg-orange-400 shadow-[0_0_0_6px_rgba(251,146,60,0.18)]" />
            Premium solar power solutions
          </div>

          <h1 className="max-w-4xl text-5xl font-black tracking-tight text-slate-950 sm:text-6xl lg:text-7xl">
            Power Your Future with{" "}
            <span className="bg-gradient-to-r from-orange-500 via-yellow-500 to-emerald-600 bg-clip-text text-transparent">
              Clean Solar Energy
            </span>
          </h1>

          <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-700 sm:text-xl">
            RK SOLAR provides reliable, affordable, and efficient solar solutions for homes,
            businesses, and industries.
          </p>

          <div className="mt-9 flex flex-col gap-4 sm:flex-row">
            <a
              href="#contact"
              className="inline-flex items-center justify-center rounded-full bg-gradient-to-r from-orange-500 to-yellow-400 px-7 py-4 text-base font-extrabold text-slate-950 shadow-xl shadow-orange-500/20 transition duration-300 hover:-translate-y-1 hover:shadow-2xl hover:shadow-orange-500/30"
            >
              Get Free Quote
            </a>
            <a
              href="#contact"
              className="inline-flex items-center justify-center rounded-full border border-slate-300 bg-white/80 px-7 py-4 text-base font-extrabold text-slate-900 shadow-sm transition duration-300 hover:-translate-y-1 hover:border-emerald-500 hover:text-emerald-700"
            >
              Contact Us
            </a>
          </div>

          <div className="mt-10 grid gap-3 sm:grid-cols-3">
            {trustBadges.map((badge) => (
              <div
                key={badge}
                className="premium-card flex items-center gap-3 rounded-2xl px-4 py-3 text-sm font-bold text-slate-800"
              >
                <span className="grid h-9 w-9 place-items-center rounded-full bg-emerald-50 text-emerald-700">
                  <svg aria-hidden="true" viewBox="0 0 20 20" className="h-5 w-5" fill="currentColor">
                    <path
                      fillRule="evenodd"
                      d="M16.704 5.29a1 1 0 0 1 .006 1.414l-7.25 7.314a1 1 0 0 1-1.42 0L3.29 9.224a1 1 0 0 1 1.42-1.408l4.04 4.078 6.54-6.598a1 1 0 0 1 1.414-.006Z"
                      clipRule="evenodd"
                    />
                  </svg>
                </span>
                {badge}
              </div>
            ))}
          </div>
        </div>

        <div className="reveal reveal-delay-2 relative">
          <div className="absolute -inset-5 rounded-[2rem] bg-gradient-to-br from-yellow-300/40 via-orange-300/20 to-emerald-500/30 blur-2xl" />
          <div className="premium-card relative overflow-hidden rounded-[2rem] p-3">
            <Image
              src="https://images.unsplash.com/photo-1509391366360-2e959784a276?auto=format&fit=crop&w=1400&q=85"
              alt="Solar panels on a sunny residential rooftop"
              width={900}
              height={980}
              priority
              className="h-[420px] w-full rounded-[1.55rem] object-cover sm:h-[540px]"
            />
            <div className="absolute bottom-7 left-7 right-7 rounded-3xl border border-white/40 bg-slate-950/78 p-5 text-white shadow-2xl backdrop-blur-md">
              <div className="flex flex-wrap items-center justify-between gap-4">
                <div>
                  <p className="text-sm font-semibold text-yellow-200">Estimated savings</p>
                  <p className="mt-1 text-3xl font-black">Up to 80%</p>
                </div>
                <div className="rounded-2xl bg-white/[0.12] px-4 py-3 text-sm font-bold">
                  Smart solar planning
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
