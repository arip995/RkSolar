import Image from "next/image";
import { projects } from "@/lib/site-data";

export function Projects() {
  return (
    <section id="projects" className="bg-slate-950 py-20 text-white sm:py-24">
      <div className="section-shell">
        <div className="scroll-reveal">
          <div className="mx-auto max-w-3xl text-center">
            <p className="text-sm font-black uppercase tracking-[0.3em] text-yellow-300">Projects</p>
            <h2 className="mt-4 text-4xl font-black tracking-tight sm:text-5xl">
              Completed solar projects that inspire confidence.
            </h2>
            <p className="mt-5 text-lg leading-8 text-slate-300">
              Explore examples of rooftop, commercial, and industrial solar installations built for
              dependable clean power.
            </p>
          </div>
        </div>

        <div className="mt-14 grid gap-6 md:grid-cols-2">
          {projects.map((project, index) => (
            <article
              key={project.title}
              className="scroll-reveal group overflow-hidden rounded-[1.8rem] border border-white/10 bg-white/5 shadow-2xl shadow-black/20 transition duration-300 hover:-translate-y-2 hover:border-yellow-300/40"
              style={{ animationDelay: `${index * 80}ms` }}
            >
              <div className="relative h-72 overflow-hidden">
                <Image
                  src={project.image}
                  alt={project.alt}
                  width={900}
                  height={620}
                  className="h-full w-full object-cover transition duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/70 via-transparent to-transparent" />
              </div>
              <div className="p-6">
                <p className="text-sm font-bold uppercase tracking-[0.22em] text-yellow-300">
                  RK SOLAR Project
                </p>
                <h3 className="mt-2 text-2xl font-black">{project.title}</h3>
                <p className="mt-2 text-slate-300">{project.location}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
