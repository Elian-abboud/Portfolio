import { FiMail, FiGithub, FiLinkedin, FiCreditCard } from "react-icons/fi";

export default function Contact({ TorusDecor, AnimatedSection }) {
  return (
    <section
      id="contact"
      className="relative overflow-hidden py-24 px-6 sm:px-8 lg:px-12"
    >
      {/* Decoration */}
      <TorusDecor
        size={350}
        opacity={0.12}
        style={{ right: "5%", top: "12%" }}
        reverse
        duration={28}
      />

      <div className="mx-auto max-w-7xl">
        {/* Title */}
        <AnimatedSection>
          <div className="text-center">
            <p className="text-sm uppercase tracking-[0.35em] text-[#b18947]">
              Get In Touch
            </p>
            <h2 className="mt-3 text-3xl font-semibold text-[#e8dcc8] sm:text-4xl">
              Contact
            </h2>
            <div className="section-divider" />
          </div>
        </AnimatedSection>

        <div className="mt-12 grid gap-6 xl:grid-cols-2">
          {/* Left Card */}
          <AnimatedSection>
            <div className="project-card p-8 h-full flex flex-col">
              <h3 className="text-2xl font-semibold text-[#e8dcc8]">
                Let’s Work Together
              </h3>

              <p className="mt-4 leading-7 text-[#a09070]">
                Reach out for frontend projects, collaborations, or a fresh
                digital experience.
              </p>

              {/* Contact Links */}
              <div className="mt-8 space-y-4">
                {/* Email */}
                <a
                  href="mailto:elianabboud5@gmail.com"
                  className="flex items-center gap-4 rounded-3xl border border-[#b18947]/10 bg-[#111010] p-5 transition-all hover:border-[#b18947]/40 hover:translate-x-1"
                >
                  <span className="inline-flex h-11 w-11 items-center justify-center rounded-3xl bg-[#b18947]/15 text-[#d4a85a]">
                    <FiMail className="h-5 w-5" />
                  </span>
                  <div>
                    <p className="text-sm uppercase tracking-[0.3em] text-[#b18947]">
                      Email
                    </p>
                    <p className="mt-1 text-base text-[#e8dcc8]">
                      elianabboud5@gmail.com
                    </p>
                  </div>
                </a>

                {/* GitHub */}
                <a
                  href="https://github.com/Elian-abboud"
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center gap-4 rounded-3xl border border-[#b18947]/10 bg-[#111010] p-5 transition-all hover:border-[#b18947]/40 hover:translate-x-1"
                >
                  <span className="inline-flex h-11 w-11 items-center justify-center rounded-3xl bg-[#b18947]/15 text-[#d4a85a]">
                    <FiGithub className="h-5 w-5" />
                  </span>
                  <div>
                    <p className="text-sm uppercase tracking-[0.3em] text-[#b18947]">
                      GitHub
                    </p>
                    <p className="mt-1 text-base text-[#e8dcc8]">
                      github.com/Elian-abboud
                    </p>
                  </div>
                </a>

                {/* LinkedIn */}
                <a
                  href="https://www.linkedin.com/in/elian-abboud/"
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center gap-4 rounded-3xl border border-[#b18947]/10 bg-[#111010] p-5 transition-all hover:border-[#b18947]/40 hover:translate-x-1"
                >
                  <span className="inline-flex h-11 w-11 items-center justify-center rounded-3xl bg-[#b18947]/15 text-[#d4a85a]">
                    <FiLinkedin className="h-5 w-5" />
                  </span>
                  <div>
                    <p className="text-sm uppercase tracking-[0.3em] text-[#b18947]">
                      LinkedIn
                    </p>
                    <p className="mt-1 text-base text-[#e8dcc8]">
                      linkedin.com/in/elian-abboud
                    </p>
                  </div>
                </a>
              </div>
            </div>
          </AnimatedSection>

          {/* Right Card */}
          <AnimatedSection>
            <div className="project-card p-8 h-full flex flex-col">
              <h3 className="text-2xl font-semibold text-[#e8dcc8]">
                Quick Actions
              </h3>

              <div className="mt-8 grid gap-4">
                <a
                  href="mailto:elianabboud5@gmail.com"
                  className="btn-gold w-full justify-center"
                >
                  <FiMail className="h-4 w-4" />
                  Send Email
                </a>

                <a
                  href="https://github.com/Elian-abboud"
                  target="_blank"
                  rel="noreferrer"
                  className="btn-outline-gold w-full justify-center"
                >
                  <FiGithub className="h-4 w-4" />
                  GitHub Profile
                </a>

                <a
                  href="/EA_BusinessCard.pdf"
                  download
                  className="btn-outline-gold w-full justify-center"
                >
                  <FiCreditCard className="h-4 w-4" />
                  Download Card
                </a>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </div>
    </section>
  );
}
