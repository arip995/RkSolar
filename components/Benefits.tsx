import { benefits } from "@/lib/site-data";
import { SectionHeading } from "./SectionHeading";
import { SolarIcon } from "./SolarIcon";

export function Benefits() {
  return (
    <section id="benefits" className="bg-white py-20 sm:py-24">
      <div className="section-shell">
        <div className="scroll-reveal">
          <SectionHeading
            eyebrow="Why Choose Us"
            title="Make solar simple, valuable, and dependable."
            description="RK SOLAR combines energy planning, quality installation, and responsive support to help customers get lasting value from every panel."
          />
        </div>

        <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {benefits.map((benefit, index) => (
            <div
              key={benefit}
              className="scroll-reveal group flex items-center gap-4 rounded-3xl border border-emerald-100 bg-gradient-to-br from-white to-emerald-50/70 p-5 transition duration-300 hover:-translate-y-1 hover:border-emerald-300 hover:shadow-xl hover:shadow-emerald-500/10"
              style={{ animationDelay: `${index * 65}ms` }}
            >
              <span className="grid h-[3.25rem] w-[3.25rem] shrink-0 place-items-center rounded-2xl bg-emerald-700 text-white shadow-lg shadow-emerald-700/20 transition duration-300 group-hover:bg-orange-500">
                <SolarIcon name={index % 2 === 0 ? "leaf" : "battery"} className="h-6 w-6" />
              </span>
              <span className="text-lg font-black text-slate-900">{benefit}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
