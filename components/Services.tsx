import { services } from "@/lib/site-data";
import { SectionHeading } from "./SectionHeading";
import { SolarIcon } from "./SolarIcon";

export function Services() {
  return (
    <section id="services" className="bg-slate-50 py-20 sm:py-24">
      <div className="section-shell">
        <div className="scroll-reveal">
          <SectionHeading
            eyebrow="Our Services"
            title="Solar power solutions for every energy need."
            description="Choose from expert-designed solar services for homes, businesses, and industrial facilities."
          />
        </div>

        <div className="mt-14 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {services.map((service, index) => (
            <article
              key={service.title}
              className="scroll-reveal group rounded-[1.7rem] border border-slate-200 bg-white p-7 shadow-sm transition duration-300 hover:-translate-y-2 hover:border-orange-200 hover:shadow-2xl hover:shadow-orange-500/10"
              style={{ animationDelay: `${index * 70}ms` }}
            >
              <div className="grid h-14 w-14 place-items-center rounded-2xl bg-gradient-to-br from-yellow-100 to-orange-100 text-orange-600 transition duration-300 group-hover:scale-110 group-hover:rotate-3">
                <SolarIcon name={service.icon} />
              </div>
              <h3 className="mt-6 text-xl font-black text-slate-950">{service.title}</h3>
              <p className="mt-3 leading-7 text-slate-600">{service.description}</p>
              <span className="mt-6 inline-flex items-center gap-2 text-sm font-extrabold text-emerald-700">
                Learn more
                <svg
                  aria-hidden="true"
                  viewBox="0 0 20 20"
                  className="h-4 w-4 transition duration-300 group-hover:translate-x-1"
                  fill="currentColor"
                >
                  <path d="M12.293 4.293a1 1 0 0 1 1.414 0l5 5a1 1 0 0 1 0 1.414l-5 5a1 1 0 0 1-1.414-1.414L15.586 11H2a1 1 0 1 1 0-2h13.586l-3.293-3.293a1 1 0 0 1 0-1.414Z" />
                </svg>
              </span>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
