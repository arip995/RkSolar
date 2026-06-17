import { contactEmail, navigationLinks, services } from "@/lib/site-data";
import { Logo } from "./Logo";

export function Footer() {
  return (
    <footer className="bg-slate-950 py-14 text-white">
      <div className="section-shell">
        <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-[1.2fr_0.8fr_1fr]">
          <div>
            <Logo isLight />
            <p className="mt-5 max-w-sm leading-7 text-slate-300">
              Reliable solar energy solutions for a cleaner and brighter future.
            </p>
            <a
              href={`mailto:${contactEmail}`}
              className="mt-5 inline-flex font-bold text-yellow-300 transition hover:text-orange-300"
            >
              {contactEmail}
            </a>
          </div>

          <div>
            <h3 className="text-lg font-black">Quick Links</h3>
            <ul className="mt-5 space-y-3">
              {navigationLinks.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="text-slate-300 transition hover:text-yellow-300"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-black">Services</h3>
            <ul className="mt-5 space-y-3">
              {services.slice(0, 6).map((service) => (
                <li key={service.title}>
                  <a
                    href="#services"
                    className="text-slate-300 transition hover:text-yellow-300"
                  >
                    {service.title}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-12 border-t border-white/10 pt-6 text-center text-sm text-slate-400">
          © 2026 RK SOLAR. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
