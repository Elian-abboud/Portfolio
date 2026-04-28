export default function Skills({
  TorusDecor,
  AnimatedSection,
  skillCategories,
}) {
  return (
    <section
      id="skills"
      className="relative overflow-hidden py-24 px-6 sm:px-8 lg:px-12"
    >
      {/* Decoration */}
      <TorusDecor
        size={350}
        opacity={0.1}
        style={{ left: "4%", top: "10%" }}
        duration={32}
      />

      <div className="mx-auto max-w-7xl">
        {/* Title */}
        <AnimatedSection>
          <div className="text-center">
            <p className="text-sm uppercase tracking-[0.35em] text-[#b18947]">
              What I Know
            </p>
            <h2 className="mt-3 text-3xl font-semibold text-[#e8dcc8] sm:text-4xl">
              Skills
            </h2>
            <div className="section-divider" />
          </div>
        </AnimatedSection>

        {/* Skills Grid */}
        <div className="mt-12 grid gap-6 lg:grid-cols-3">
          {skillCategories.map((category) => (
            <AnimatedSection key={category.title}>
              <div className="card-hover project-card p-8 h-full">
                {/* Category Header */}
                <div className="mb-6 inline-flex h-12 w-12 items-center justify-center rounded-3xl bg-[#b18947]/10 text-[#d4a85a]">
                  {category.icon}
                </div>

                <h3 className="text-xl font-semibold text-[#e8dcc8]">
                  {category.title}
                </h3>

                {/* Skills List */}
                <div className="mt-6 flex flex-wrap gap-3">
                  {category.skills.map((skill) => (
                    <span
                      key={skill.label}
                      className="skill-badge flex items-center gap-2"
                    >
                      {skill.icon}
                      {skill.label}
                    </span>
                  ))}
                </div>
              </div>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  );
}
