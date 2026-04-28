import { FiExternalLink } from "react-icons/fi";

export default function Projects({ TorusDecor, AnimatedSection, projects }) {
  return (
    <section
      id="projects"
      className="relative overflow-hidden py-24 px-6 sm:px-8 lg:px-12"
    >
      {/* Decoration */}
      <TorusDecor
        size={300}
        opacity={0.1}
        style={{ right: "6%", top: "8%" }}
        reverse
        duration={30}
      />

      <div className="mx-auto max-w-7xl">
        {/* Title */}
        <AnimatedSection>
          <div className="text-center">
            <p className="text-sm uppercase tracking-[0.35em] text-[#b18947]">
              My Work
            </p>
            <h2 className="mt-3 text-3xl font-semibold text-[#e8dcc8] sm:text-4xl">
              Projects
            </h2>
            <div className="section-divider" />
          </div>
        </AnimatedSection>

        {/* Grid */}
        <div className="mt-12 grid gap-6 lg:grid-cols-3">
          {projects.map((project, index) => (
            <AnimatedSection key={project.title}>
              <article className="project-card overflow-hidden h-full flex flex-col">
                {/* Image Section */}
                <div
                  className="relative overflow-hidden bg-[#0d0d0d]"
                  style={{
                    aspectRatio: "4 / 3",
                    minHeight: "220px",
                    background: project.imageBackground || "#0d0d0d",
                  }}
                >
                  {/* Index */}
                  <div className="absolute left-4 top-4 inline-flex h-8 w-8 items-center justify-center rounded-full bg-[#b18947]/15 text-sm text-[#e8dcc8]">
                    {String(index + 1).padStart(2, "0")}
                  </div>

                  {/* Image */}
                  {project.isLogo ? (
                    <div className="absolute inset-0 flex items-center justify-center p-6">
                      <img
                        src={project.image}
                        alt={project.title}
                        loading="lazy"
                        className="max-h-full max-w-full object-contain drop-shadow-[0_0_30px_rgba(177,137,71,0.25)] transition-transform duration-300 hover:scale-105"
                      />
                    </div>
                  ) : (
                    <img
                      src={project.image}
                      alt={project.title}
                      loading="lazy"
                      className="absolute inset-0 h-full w-full object-cover opacity-95 transition-transform duration-300 hover:scale-105"
                    />
                  )}

                  {/* Gradient overlay */}
                  {!project.isLogo && (
                    <div className="absolute inset-x-0 bottom-0 h-24 bg-linear-to-t from-[#080808]/95 via-[#080808]/35 to-transparent" />
                  )}
                </div>

                {/* Content */}
                <div className="flex flex-col flex-1 space-y-4 p-6">
                  <div>
                    <h3 className="text-xl font-serif font-semibold text-[#e8dcc8]">
                      {project.title}
                    </h3>
                    <p className="mt-1 text-xs uppercase tracking-[0.3em] text-[#b18947]">
                      {project.subtitle}
                    </p>
                  </div>

                  <p className="text-sm leading-7 text-[#888070]">
                    {project.description}
                  </p>

                  {/* Tech */}
                  <div className="flex flex-wrap gap-2">
                    {project.tech.map((item) => (
                      <span key={item} className="tech-tag">
                        {item}
                      </span>
                    ))}
                  </div>

                  {/* Actions */}
                  {project.demo && (
                    <div className="mt-auto pt-2">
                      <a
                        href={project.demo}
                        target="_blank"
                        rel="noreferrer"
                        className="btn-outline-gold text-sm inline-flex items-center gap-2"
                        aria-label={`Open ${project.title} live demo`}
                      >
                        <FiExternalLink className="h-4 w-4" />
                        Live Demo
                      </a>
                    </div>
                  )}
                </div>
              </article>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  );
}
