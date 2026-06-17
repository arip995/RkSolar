import { contactEmail } from "@/lib/site-data";
import { ContactForm } from "./ContactForm";

export function Contact() {
  return (
    <section id="contact" className="sun-glow py-20 sm:py-24">
      <div className="section-shell grid gap-10 lg:grid-cols-[0.85fr_1.15fr] lg:items-center">
        <div className="scroll-reveal">
          <p className="text-sm font-black uppercase tracking-[0.3em] text-orange-500">Contact Us</p>
          <h2 className="mt-4 text-4xl font-black tracking-tight text-slate-950 sm:text-5xl">
            Ready to start saving with solar?
          </h2>
          <p className="mt-6 text-lg leading-8 text-slate-700">
            Share your installation, consultation, or maintenance requirement and RK SOLAR will
            follow up with practical guidance for your property.
          </p>

          <div className="mt-8 space-y-4">
            <div className="premium-card rounded-3xl p-5">
              <p className="text-sm font-bold uppercase tracking-[0.18em] text-emerald-700">
                Email
              </p>
              <a
                href={`mailto:${contactEmail}`}
                className="mt-1 block text-xl font-black text-slate-950 transition hover:text-orange-500"
              >
                {contactEmail}
              </a>
            </div>
            <div className="premium-card rounded-3xl p-5">
              <p className="text-sm font-bold uppercase tracking-[0.18em] text-emerald-700">
                Lead support
              </p>
              <p className="mt-1 text-xl font-black text-slate-950">
                Solar installation, consultation, and energy solutions
              </p>
            </div>
          </div>
        </div>

        <div className="scroll-reveal reveal-delay-1">
          <ContactForm />
        </div>
      </div>
    </section>
  );
}
