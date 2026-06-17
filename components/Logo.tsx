type LogoProps = {
  isLight?: boolean;
};

export function Logo({ isLight = false }: LogoProps) {
  return (
    <a href="#home" className="group flex items-center gap-3" aria-label="RK SOLAR home">
      <span className="relative grid h-11 w-11 place-items-center rounded-2xl bg-gradient-to-br from-yellow-300 via-orange-400 to-emerald-600 shadow-lg shadow-orange-500/20 transition-transform duration-300 group-hover:rotate-3 group-hover:scale-105">
        <svg
          aria-hidden="true"
          viewBox="0 0 48 48"
          className="h-8 w-8 text-white"
          fill="none"
        >
          <circle cx="17" cy="17" r="7" fill="currentColor" opacity="0.95" />
          <path
            d="M17 3v5M17 26v5M3 17h5M26 17h5M7.1 7.1l3.5 3.5M23.4 23.4l3.5 3.5M26.9 7.1l-3.5 3.5M10.6 23.4l-3.5 3.5"
            stroke="currentColor"
            strokeLinecap="round"
            strokeWidth="2.4"
          />
          <path
            d="M24 28h17l-4 13H20l4-13Z"
            fill="#0f4c5c"
            stroke="currentColor"
            strokeLinejoin="round"
            strokeWidth="1.8"
          />
          <path d="M26.5 32h11M24.8 36h11.5M30 28l-3.8 13M35.4 28l-3.8 13" stroke="white" strokeLinecap="round" strokeWidth="1.2" />
        </svg>
      </span>
      <span className="leading-none">
        <span
          className={`block text-xl font-black tracking-tight ${
            isLight ? "text-white" : "text-slate-950"
          }`}
        >
          RK SOLAR
        </span>
        <span
          className={`mt-1 block text-[0.62rem] font-bold uppercase tracking-[0.35em] ${
            isLight ? "text-yellow-200" : "text-emerald-700"
          }`}
        >
          Clean Energy
        </span>
      </span>
    </a>
  );
}
