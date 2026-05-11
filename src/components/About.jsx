import { FiGithub, FiLinkedin } from "react-icons/fi";

export default function About({ TorusDecor, AnimatedSection }) {
  const infoCards = [
    { label: "Role", value: "Frontend Developer" },
    { label: "Experience", value: "about 5 years" },
    { label: "Education", value: "Bachelor of Informatics Engineer" },
    { label: "Location", value: "Syria" },
  ];

  return (
    <section
      id="about"
      className="relative overflow-hidden py-24 px-6 sm:px-8 lg:px-12"
    >
      {/* Decoration */}
      <TorusDecor
        size={320}
        opacity={0.1}
        style={{ right: "6%", top: "12%" }}
        reverse
        duration={40}
      />

      <div className="mx-auto max-w-7xl">
        {/* Title */}
        <AnimatedSection>
          <div className="text-center">
            <p className="text-sm uppercase tracking-[0.35em] text-[#b18947]">
              Who I Am
            </p>
            <h2 className="mt-3 text-3xl font-semibold text-[#e8dcc8] sm:text-4xl">
              About Me
            </h2>
            <div className="section-divider" />
          </div>
        </AnimatedSection>

        <div className="mt-12 grid gap-8 xl:grid-cols-[1.1fr_0.9fr]">
          {/* Left Card */}
          <AnimatedSection>
            <div className="card-hover project-card p-8">
              <div className="mb-6 inline-flex h-12 w-12 items-center justify-center rounded-full bg-[#b18947]/10 text-[#b18947] shadow-[0_0_30px_rgba(177,137,71,0.1)]">
                <span className="text-2xl">“</span>
              </div>

              <h3 className="text-lg font-semibold text-[#e8dcc8]">
                Informatics Engineer & Frontend Developer
              </h3>

              <p className="mt-4 leading-8 text-[#a09070]">
                I focus on clean, user-centric interfaces and performant React
                applications that feel elegant on every screen. My work blends
                technical precision with design sensitivity, always aiming for
                responsive layouts and intuitive interactions.
              </p>
            </div>
          </AnimatedSection>

          {/* Right Side */}
          <AnimatedSection>
            {/* Info Cards */}
            <div className="grid gap-6 sm:grid-cols-2">
              {infoCards.map((item) => (
                <div key={item.label} className="card-hover project-card p-6">
                  <p className="text-xs uppercase tracking-[0.25em] text-[#b18947]">
                    {item.label}
                  </p>
                  <p className="mt-4 text-xl font-semibold text-[#e8dcc8]">
                    {item.value}
                  </p>
                </div>
              ))}
            </div>

            {/* Social Links */}
            <div className="mt-8 flex flex-wrap gap-4">
              <a
                href="https://github.com/Elian-abboud"
                target="_blank"
                rel="noreferrer"
                aria-label="GitHub Profile"
                className="btn-outline-gold flex items-center gap-2"
              >
                <FiGithub className="h-4 w-4" />
                GitHub
              </a>

              <a
                href="https://www.linkedin.com/in/elian-abboud/"
                target="_blank"
                rel="noreferrer"
                aria-label="LinkedIn Profile"
                className="btn-outline-gold flex items-center gap-2"
              >
                <FiLinkedin className="h-4 w-4" />
                LinkedIn
              </a>
            </div>
          </AnimatedSection>
        </div>
      </div>
    </section>
  );
}
