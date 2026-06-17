type SectionHeadingProps = {
  eyebrow: string;
  title: string;
  description: string;
  align?: "left" | "center";
};

export function SectionHeading({
  eyebrow,
  title,
  description,
  align = "center",
}: SectionHeadingProps) {
  const isCenter = align === "center";

  return (
    <div className={`${isCenter ? "mx-auto text-center" : ""} max-w-3xl`}>
      <p className="text-sm font-black uppercase tracking-[0.3em] text-orange-500">{eyebrow}</p>
      <h2 className="mt-4 text-4xl font-black tracking-tight text-slate-950 sm:text-5xl">{title}</h2>
      <p className="mt-5 text-lg leading-8 text-slate-700">{description}</p>
    </div>
  );
}
