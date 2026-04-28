export default function Certifications({
  TorusDecor,
  AnimatedSection,
  certifications,
}) {
  return (
    <section
      id="certifications"
      className="relative overflow-hidden py-24 px-6 sm:px-8 lg:px-12"
    >
      {/* Decoration */}
      <TorusDecor
        size={280}
        opacity={0.1}
        style={{ left: "5%", top: "14%" }}
        duration={35}
      />

      <div className="mx-auto max-w-7xl">
        {/* Title */}
        <AnimatedSection>
          <div className="text-center">
            <p className="text-sm uppercase tracking-[0.35em] text-[#b18947]">
              Credentials
            </p>
            <h2 className="mt-3 text-3xl font-semibold text-[#e8dcc8] sm:text-4xl">
              Certifications
            </h2>
            <div className="section-divider" />
          </div>
        </AnimatedSection>

        {/* Grid */}
        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {certifications.map((title, index) => (
            <AnimatedSection key={title}>
              <div className="cert-card p-6 h-full flex flex-col justify-between group transition-all duration-300 hover:-translate-y-1">
                {/* Index badge */}
                <div className="mb-5 inline-flex h-11 w-11 items-center justify-center rounded-3xl bg-[#b18947]/12 text-[#e8dcc8] text-sm font-semibold group-hover:bg-[#b18947]/20 transition">
                  {String(index + 1).padStart(2, "0")}
                </div>

                {/* Title */}
                <p className="text-sm leading-7 text-[#c8b890] group-hover:text-[#e8dcc8] transition">
                  {title}
                </p>
              </div>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  );
}
